const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'index.css');
let css = fs.readFileSync(cssPath, 'utf8');

// Replace design tokens
css = css.replace(/--primary: #0A1F44;/g, '--primary: #EC4D11;');
css = css.replace(/--primary-light: #13306e;/g, '--primary-light: #f56d3b;');
css = css.replace(/--accent: #00C2CB;/g, '--accent: #EF8807;');
css = css.replace(/--accent-dark: #009aa2;/g, '--accent-dark: #c97103;');
css = css.replace(/--accent-glow: rgba\(0, 194, 203, 0.25\);/g, '--accent-glow: rgba(239, 136, 7, 0.25);');
css = css.replace(/--shadow-glow: 0 0 40px rgba\(0,194,203,0.2\);/g, '--shadow-glow: 0 0 40px rgba(239, 136, 7, 0.2);');

// Replace standard rgba mapping in css
css = css.replace(/rgba\(0,194,203,/g, 'rgba(239,136,7,');
fs.writeFileSync(cssPath, css);

const componentsDir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.vue'));

files.forEach(file => {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace default accent colors
  content = content.replace(/rgba\(0,194,203,/g, 'rgba(239,136,7,');
  content = content.replace(/#00C2CB/g, '#EF8807');
  content = content.replace(/#0A1F44/g, '#EC4D11');
  content = content.replace(/#13306e/g, '#f56d3b');
  content = content.replace(/#050f24/g, '#ffffff'); // Making backgrounds white
  content = content.replace(/#0d2b5e/g, '#f8fafc');

  // Hero Section
  if (file === 'HeroSection.vue') {
    content = content.replace(/background: linear-gradient\(135deg.*/g, 'background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);');
    content = content.replace(/color: var\(--white\);/g, 'color: var(--gray-800);');
    // For specific subtexts in Hero
    content = content.replace(/color: rgba\(255,255,255,0.7\);/g, 'color: var(--gray-600);');
    content = content.replace(/color: rgba\(255,255,255,0.5\);/g, 'color: var(--gray-500);');
    content = content.replace(/background: rgba\(255,255,255,0.05\);/g, 'background: var(--white);');
    content = content.replace(/border: 1px solid rgba\(255,255,255,0.12\);/g, 'border: 1px solid var(--gray-200);');
    content = content.replace(/background: rgba\(239,136,7,0.08\);/g, 'background: var(--gray-100);');
    content = content.replace(/border-bottom: 1px solid rgba\(255,255,255,0.08\);/g, 'border-bottom: 1px solid var(--gray-200);');
  }

  // Features Section
  if (file === 'FeaturesSection.vue') {
    content = content.replace(/color:var\(--white\)/g, 'color:var(--primary)');
    content = content.replace(/color:rgba\(255,255,255,0.65\)/g, 'color:var(--gray-600)');
    content = content.replace(/background: rgba\(255,255,255,0.04\);/g, 'background: var(--white);');
    content = content.replace(/border: 1px solid rgba\(255,255,255,0.08\);/g, 'border: 1px solid var(--gray-200);');
    content = content.replace(/color: var\(--white\);/g, 'color: var(--gray-800);');
    content = content.replace(/color: rgba\(255,255,255,0.55\);/g, 'color: var(--gray-600);');
    content = content.replace(/color: rgba\(255,255,255,0.6\);/g, 'color: var(--gray-600);');
    content = content.replace(/background: rgba\(255,255,255,0.07\);/g, 'background: var(--gray-100);');
  }

  // Contact Section
  if (file === 'ContactSection.vue') {
    content = content.replace(/color:var\(--white\)/g, 'color:var(--primary)');
    content = content.replace(/color:rgba\(255,255,255,0.65\)/g, 'color:var(--gray-600)');
    content = content.replace(/color: rgba\(255,255,255,0.4\);/g, 'color: var(--gray-500);');
    content = content.replace(/color: rgba\(255,255,255,0.85\);/g, 'color: var(--gray-800);');
    content = content.replace(/background: rgba\(255,255,255,0.06\);/g, 'background: var(--gray-100);');
    content = content.replace(/border: 1px solid rgba\(255,255,255,0.12\);/g, 'border: 1px solid var(--gray-200);');
    content = content.replace(/color: rgba\(255,255,255,0.6\);/g, 'color: var(--gray-600);');
  }

  // Footer Section
  if (file === 'FooterSection.vue') {
    content = content.replace(/background: #ffffff;/g, 'background: var(--off-white);');
    content = content.replace(/background: rgba\(255,255,255,0.05\);/g, 'background: var(--white);');
    content = content.replace(/border: 1px solid rgba\(255,255,255,0.1\);/g, 'border: 1px solid var(--gray-200);');
    content = content.replace(/color: var\(--white\);/g, 'color: var(--gray-800);');
    content = content.replace(/color: rgba\(255,255,255,0.45\);/g, 'color: var(--gray-600);');
    content = content.replace(/color: rgba\(255,255,255,0.5\);/g, 'color: var(--gray-500);');
    content = content.replace(/color: rgba\(255,255,255,0.9\);/g, 'color: var(--gray-800);');
    content = content.replace(/border-bottom: 1px solid rgba\(255,255,255,0.06\);/g, 'border-bottom: 1px solid var(--gray-200);');
    content = content.replace(/color: rgba\(255,255,255,0.28\);/g, 'color: var(--gray-500);');
    content = content.replace(/border: 1px solid rgba\(255,255,255,0.12\);/g, 'border: 1px solid var(--gray-200);');
  }

  // NavBar Section
  if (file === 'NavBar.vue') {
    content = content.replace(/background: rgba\(10, 31, 68, 0.92\);/g, 'background: rgba(255, 255, 255, 0.92);');
    content = content.replace(/color: var\(--white\);/g, 'color: var(--gray-800);');
    content = content.replace(/color: rgba\(255,255,255,0.8\);/g, 'color: var(--gray-600);');
    content = content.replace(/background: var\(--primary\);/g, 'background: var(--white);');
    content = content.replace(/color: rgba\(255,255,255,0.85\);/g, 'color: var(--gray-600);');
    content = content.replace(/border-bottom: 1px solid rgba\(255,255,255,0.08\);/g, 'border-bottom: 1px solid var(--gray-200);');
  }

  fs.writeFileSync(filePath, content);
});

console.log("Updated colors successfully.");
