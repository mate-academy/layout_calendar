const fs = require('node:fs');
const path = require('node:path');

const filePath = path.join(__dirname, '..', 'dist', 'index.html');

if (!fs.existsSync(filePath)) {
  console.error('dist/index.html not found. Build the project first.');
  process.exit(1);
}

let html = fs.readFileSync(filePath, 'utf8');

html = html.replace(/href="\/([^"/]+\.css)"/g, 'href="./$1"');
html = html.replace(/src="\/([^"/]+\.js)"/g, 'src="./$1"');

fs.writeFileSync(filePath, html);
console.log('Fixed GitHub Pages asset paths in dist/index.html');
