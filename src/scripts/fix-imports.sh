#!/bin/bash

# Fix Import Syntax Script
# Removes version numbers from package imports

echo "🔧 Fixing import syntax across codebase..."
echo ""

# Counter for fixes
TOTAL_FIXES=0

# Function to fix imports in a file
fix_file() {
    local file="$1"
    local pattern="$2"
    local replacement="$3"
    
    if grep -q "$pattern" "$file" 2>/dev/null; then
        sed -i.bak "s/$pattern/$replacement/g" "$file"
        rm "${file}.bak" 2>/dev/null
        echo "✅ Fixed: $file"
        TOTAL_FIXES=$((TOTAL_FIXES + 1))
        return 0
    fi
    return 1
}

# Fix sonner imports
echo "📦 Fixing sonner imports..."
find . -type f -name "*.tsx" -o -name "*.ts" | while read file; do
    fix_file "$file" 'from "sonner@2\.0\.3"' 'from "sonner"'
    fix_file "$file" "from 'sonner@2\.0\.3'" "from 'sonner'"
done

# Fix next-themes imports
echo "📦 Fixing next-themes imports..."
find . -type f -name "*.tsx" -o -name "*.ts" | while read file; do
    fix_file "$file" 'from "next-themes@0\.4\.6"' 'from "next-themes"'
    fix_file "$file" "from 'next-themes@0\.4\.6'" "from 'next-themes'"
done

# Fix lucide-react imports
echo "📦 Fixing lucide-react imports..."
find . -type f -name "*.tsx" -o -name "*.ts" | while read file; do
    fix_file "$file" 'from "lucide-react@[0-9.]*"' 'from "lucide-react"'
    fix_file "$file" "from 'lucide-react@[0-9.]*'" "from 'lucide-react'"
done

# Fix @radix-ui imports
echo "📦 Fixing @radix-ui imports..."
find . -type f -name "*.tsx" -o -name "*.ts" | while read file; do
    fix_file "$file" 'from "@radix-ui/\([^@]*\)@[0-9.]*"' 'from "@radix-ui/\1"'
    fix_file "$file" "from '@radix-ui/\([^@]*\)@[0-9.]*'" "from '@radix-ui/\1'"
done

# Fix class-variance-authority imports
echo "📦 Fixing class-variance-authority imports..."
find . -type f -name "*.tsx" -o -name "*.ts" | while read file; do
    fix_file "$file" 'from "class-variance-authority@[0-9.]*"' 'from "class-variance-authority"'
    fix_file "$file" "from 'class-variance-authority@[0-9.]*'" "from 'class-variance-authority'"
done

# Fix other common packages
echo "📦 Fixing other package imports..."
packages=(
    "cmdk"
    "vaul"
    "embla-carousel-react"
    "recharts"
    "react-day-picker"
    "input-otp"
    "react-resizable-panels"
)

for pkg in "${packages[@]}"; do
    find . -type f -name "*.tsx" -o -name "*.ts" | while read file; do
        fix_file "$file" "from \"${pkg}@[0-9.]*\"" "from \"${pkg}\""
        fix_file "$file" "from '${pkg}@[0-9.]*'" "from '${pkg}'"
    done
done

echo ""
echo "✨ Import fixes complete!"
echo "📊 Total files processed: Check above"
echo ""
echo "Next steps:"
echo "1. Run: npm run build"
echo "2. Check for any errors"
echo "3. Test the application"
