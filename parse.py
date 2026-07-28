import re
from html.parser import HTMLParser

class MLStripper(HTMLParser):
    def __init__(self):
        super().__init__()
        self.reset()
        self.strict = False
        self.convert_charrefs= True
        self.text = []
    def handle_data(self, d):
        self.text.append(d)
    def get_data(self):
        return ''.join(self.text)

def strip_tags(html):
    s = MLStripper()
    s.feed(html)
    return s.get_data()

def parse_file(filepath, outpath):
    print(f"Parsing {filepath} -> {outpath}")
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Let's find the content in the Naver smart editor wrapper
    # Usually it's in a div or we can just extract paragraphs with text.
    # We can search for classes like "se-component" or "se-text-paragraph".
    # But since it's HTML, let's look for standard patterns or extract all text lines
    # and filter out javascript/css code.
    
    # Remove script and style elements
    content_clean = re.sub(r'<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>', '', content, flags=re.I)
    content_clean = re.sub(r'<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>', '', content_clean, flags=re.I)
    
    # Strip HTML tags
    plain_text = strip_tags(content_clean)
    
    # Clean up empty lines and whitespace
    lines = [line.strip() for line in plain_text.split('\n')]
    cleaned_lines = []
    for line in lines:
        if not line:
            continue
        # Filter out obvious UI text/boilerplate if possible
        if len(line) < 2:
            continue
        cleaned_lines.append(line)
        
    with open(outpath, 'w', encoding='utf-8') as out:
        out.write('\n'.join(cleaned_lines))

if __name__ == '__main__':
    parse_file(
        r"C:\Users\user\.gemini\antigravity\brain\82e8c3fa-27e3-40a7-85e0-8b77a978f270\.system_generated\steps\12\content.md",
        "parsed_blog1.txt"
    )
    parse_file(
        r"C:\Users\user\.gemini\antigravity\brain\82e8c3fa-27e3-40a7-85e0-8b77a978f270\.system_generated\steps\18\content.md",
        "parsed_blog2.txt"
    )
