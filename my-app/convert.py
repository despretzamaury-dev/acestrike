import re
import json

def style_to_dict(style_str):
    if not style_str.strip():
        return "{}"
    parts = style_str.split(';')
    styles = []
    for part in parts:
        if ':' not in part:
            continue
        k, v = part.split(':', 1)
        k = k.strip()
        v = v.strip()
        # camelCase the key
        k_parts = k.split('-')
        k = k_parts[0] + ''.join(x.capitalize() for x in k_parts[1:])
        styles.append(f"'{k}': '{v}'")
    return "{{ " + ", ".join(styles) + " }}"

def convert_html_to_jsx(html_content):
    # Basic replacements
    html_content = html_content.replace('class=', 'className=')
    html_content = html_content.replace('onclick', 'onClick')
    html_content = html_content.replace('<!--', '{/*')
    html_content = html_content.replace('-->', '*/}')
    
    # Self-closing tags
    html_content = re.sub(r'<input([^>]*?[^/])>', r'<input\1 />', html_content)
    html_content = re.sub(r'<img([^>]*?[^/])>', r'<img\1 />', html_content)
    html_content = re.sub(r'<br>', r'<br />', html_content)
    html_content = re.sub(r'<hr>', r'<hr />', html_content)
    
    # Styles
    def style_replacer(match):
        return 'style=' + style_to_dict(match.group(1))
    
    html_content = re.sub(r'style="([^"]*)"', style_replacer, html_content)
    
    return html_content

if __name__ == "__main__":
    with open("raw.html", "r") as f:
        html = f.read()
    
    print(convert_html_to_jsx(html))
