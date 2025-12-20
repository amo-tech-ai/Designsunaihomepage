#!/usr/bin/env node

/**
 * Fix Import Syntax Script
 * Removes version numbers from package imports across the codebase
 * 
 * Usage: node scripts/fix-imports.js
 */

const fs = require('fs');
const path = require('path');

// Package patterns to fix (package name -> regex pattern)
const PACKAGE_PATTERNS = {
  'sonner': /(from ['"]sonner)@[\d.]+(['"])/g,
  'next-themes': /(from ['"]next-themes)@[\d.]+(['"])/g,
  'lucide-react': /(from ['"]lucide-react)@[\d.]+(['"])/g,
  '@radix-ui/*': /(from ['"]@radix-ui\/[^@'"]+)@[\d.]+(['"])/g,
  'class-variance-authority': /(from ['"]class-variance-authority)@[\d.]+(['"])/g,
  'cmdk': /(from ['"]cmdk)@[\d.]+(['"])/g,
  'vaul': /(from ['"]vaul)@[\d.]+(['"])/g,
  'embla-carousel-react': /(from ['"]embla-carousel-react)@[\d.]+(['"])/g,
  'recharts': /(from ['"]recharts)@[\d.]+(['"])/g,
  'react-day-picker': /(from ['"]react-day-picker)@[\d.]+(['"])/g,
  'input-otp': /(from ['"]input-otp)@[\d.]+(['"])/g,
  'react-resizable-panels': /(from ['"]react-resizable-panels)@[\d.]+(['"])/g,
  'react-hook-form': /(from ['"]react-hook-form)@[\d.]+(['"])/g,
};

let totalFiles = 0;
let fixedFiles = 0;
let totalFixes = 0;

/**
 * Walk directory recursively and find all .ts/.tsx files
 */
function walkDir(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules, .git, dist, build directories
      if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(file)) {
        walkDir(filePath, fileList);
      }
    } else if (file.match(/\.(ts|tsx)$/)) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

/**
 * Fix imports in a single file
 */
function fixFile(filePath) {
  totalFiles++;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  let fileFixes = 0;
  
  // Apply all package patterns
  Object.entries(PACKAGE_PATTERNS).forEach(([packageName, pattern]) => {
    const matches = content.match(pattern);
    if (matches) {
      content = content.replace(pattern, '$1$2');
      fileFixes += matches.length;
      totalFixes += matches.length;
    }
  });
  
  // Write back if changes were made
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    fixedFiles++;
    console.log(`✅ Fixed ${fileFixes} import(s) in: ${path.relative(process.cwd(), filePath)}`);
  }
}

/**
 * Main execution
 */
function main() {
  console.log('🔧 Fixing import syntax across codebase...\n');
  
  const startTime = Date.now();
  
  // Get all TypeScript files
  const files = walkDir(process.cwd());
  
  // Fix each file
  files.forEach(fixFile);
  
  const duration = ((Date.now() - startTime) / 1000).toFixed(2);
  
  console.log('\n' + '='.repeat(50));
  console.log('✨ Import fixes complete!\n');
  console.log(`📊 Statistics:`);
  console.log(`   - Files scanned: ${totalFiles}`);
  console.log(`   - Files fixed: ${fixedFiles}`);
  console.log(`   - Total imports fixed: ${totalFixes}`);
  console.log(`   - Time taken: ${duration}s`);
  console.log('='.repeat(50) + '\n');
  
  if (fixedFiles > 0) {
    console.log('📝 Next steps:');
    console.log('   1. Review the changes (git diff)');
    console.log('   2. Run: npm run build');
    console.log('   3. Test the application');
    console.log('   4. Commit the changes\n');
  } else {
    console.log('✅ No import issues found! All imports are already correct.\n');
  }
}

// Run the script
try {
  main();
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}
