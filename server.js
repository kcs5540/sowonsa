const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);
  
  // Handle POST endpoint for saving captions
  if (req.method === 'POST' && req.url === '/api/save-captions') {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
    });
    req.on('end', () => {
      try {
        const items = JSON.parse(body);
        const appJsPath = path.join(__dirname, 'app.js');
        let appJsContent = fs.readFileSync(appJsPath, 'utf8');
        
        let arrayStr = 'const mediaItems = [\n';
        items.forEach((item, idx) => {
          const comma = idx === items.length - 1 ? '' : ',';
          const escapedTitle = item.title.replace(/'/g, "\\'");
          arrayStr += `  { type: '${item.type}', src: '${item.src}', category: '${item.category}', title: '${escapedTitle}' }${comma}\n`;
        });
        arrayStr += '];';
        
        const regex = /\/\/ Media Database\s+const mediaItems = \[\s*[\s\S]*?\s*\];/;
        const newContent = appJsContent.replace(regex, `// Media Database\n${arrayStr}`);
        
        fs.writeFileSync(appJsPath, newContent, 'utf8');
        
        // Also update media-list.json for persistence
        const mediaListPath = path.join(__dirname, 'media-list.json');
        if (fs.existsSync(mediaListPath)) {
          fs.writeFileSync(mediaListPath, JSON.stringify({
            images: items.filter(i => i.type === 'image').map(i => i.src),
            videos: items.filter(i => i.type === 'video').map(i => i.src),
            captions: items
          }, null, 2), 'utf8');
        }
        
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Success');
      } catch (err) {
        console.error(err);
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Server Error: ' + err.message);
      }
    });
    return;
  }
  
  // Handle POST endpoint for saving consultations
  if (req.method === 'POST' && req.url === '/api/save-consultation') {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
    });
    req.on('end', () => {
      try {
        const consultData = JSON.parse(body);
        consultData.timestamp = new Date().toISOString();
        
        const filePath = path.join(__dirname, 'consultations.json');
        let list = [];
        if (fs.existsSync(filePath)) {
          const content = fs.readFileSync(filePath, 'utf8');
          try {
            list = JSON.parse(content);
          } catch(e) {
            list = [];
          }
        }
        list.push(consultData);
        fs.writeFileSync(filePath, JSON.stringify(list, null, 2), 'utf8');
        
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ status: 'Success' }));
      } catch (err) {
        console.error(err);
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Server Error: ' + err.message);
      }
    });
    return;
  }
  
  // Normalize URL path
  let filePath = req.url === '/' ? '/index.html' : req.url;
  
  // Remove query parameters or hash from path
  filePath = filePath.split('?')[0].split('#')[0];
  
  // Safe decode of URL characters
  try {
    filePath = decodeURIComponent(filePath);
  } catch (e) {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('Bad Request');
    return;
  }
  
  const absolutePath = path.join(__dirname, filePath);
  
  // Simple check to prevent directory traversal
  if (!absolutePath.startsWith(__dirname)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('Forbidden');
    return;
  }
  
  fs.stat(absolutePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('File Not Found');
      return;
    }
    
    const ext = path.extname(absolutePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    
    // Support range requests for video playback in browsers
    const range = req.headers.range;
    if (range && (ext === '.mp4' || ext === '.webm')) {
      const totalSize = stats.size;
      const parts = range.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : totalSize - 1;
      
      if (start >= totalSize || end >= totalSize || start > end) {
        res.writeHead(416, { 'Content-Range': `bytes */${totalSize}` });
        res.end();
        return;
      }
      
      const chunkSize = (end - start) + 1;
      const fileStream = fs.createReadStream(absolutePath, { start, end });
      
      res.writeHead(206, {
        'Content-Range': `bytes ${start}-${end}/${totalSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunkSize,
        'Content-Type': contentType
      });
      
      fileStream.pipe(res);
    } else {
      // Normal file serving
      res.writeHead(200, {
        'Content-Length': stats.size,
        'Content-Type': contentType
      });
      fs.createReadStream(absolutePath).pipe(res);
    }
  });
});

server.listen(PORT, () => {
  console.log(`\n==================================================`);
  console.log(`  Jeju Sowonsa Local Server is running!`);
  console.log(`  Access URL: http://localhost:${PORT}`);
  console.log(`==================================================\n`);
});
