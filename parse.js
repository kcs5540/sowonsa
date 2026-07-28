const fs = require('fs');
const path = require('path');

function cleanHtml(html) {
  // Remove scripts
  let text = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  // Remove styles
  text = text.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');
  // Replace HTML tags with space
  text = text.replace(/<[^>]+>/g, ' ');
  // Decode some basic HTML entities
  text = text.replace(/&nbsp;/g, ' ')
             .replace(/&lt;/g, '<')
             .replace(/&gt;/g, '>')
             .replace(/&amp;/g, '&')
             .replace(/&quot;/g, '"')
             .replace(/&#39;/g, "'");
  
  // Clean up whitespace
  const lines = text.split('\n');
  const cleaned = [];
  for (let line of lines) {
    line = line.trim();
    if (line.length > 1) {
      cleaned.push(line);
    }
  }
  return cleaned.join('\n');
}

function parseFile(filepath, outpath) {
  console.log(`Parsing ${filepath} -> ${outpath}`);
  try {
    const content = fs.readFileSync(filepath, 'utf8');
    const cleaned = cleanHtml(content);
    fs.writeFileSync(outpath, cleaned, 'utf8');
    console.log('Success!');
  } catch (err) {
    console.error('Error:', err);
  }
}

const file1 = "C:\\Users\\user\\.gemini\\antigravity\\brain\\82e8c3fa-27e3-40a7-85e0-8b77a978f270\\.system_generated\\steps\\12\\content.md";
const file2 = "C:\\Users\\user\\.gemini\\antigravity\\brain\\82e8c3fa-27e3-40a7-85e0-8b77a978f270\\.system_generated\\steps\\18\\content.md";

parseFile(file1, "parsed_blog1.txt");
parseFile(file2, "parsed_blog2.txt");
