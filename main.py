import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin
import os

# Read the saved HTML page
with open("page.html", "r", encoding="utf-8") as file:
    html_content = file.read()

soup = BeautifulSoup(html_content, "html.parser")

# If your URLs are relative, set your base URL here; if they are absolute, this is ignored.
base_url = "https://cdn.aikido.dev/"

# Find all prefetch links for scripts
prefetch_links = soup.find_all("link", rel="prefetch", attrs={"as": "script"})

# Create a directory to store the downloaded JS files
os.makedirs("downloaded_js", exist_ok=True)

for link in prefetch_links:
    js_url = link.get("href")
    # Handle relative URLs if needed
    full_url = urljoin(base_url, js_url)
    print(f"Fetching: {full_url}")
    
    response = requests.get(full_url)
    if response.status_code == 200:
        # Extract filename from URL
        filename = os.path.join("downloaded_js", full_url.split("/")[-1])
        with open(filename, "wb") as f:
            f.write(response.content)
        print(f"Saved: {filename}")
    else:
        print(f"Failed to fetch: {full_url}")
