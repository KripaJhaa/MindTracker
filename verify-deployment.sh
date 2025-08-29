#!/bin/bash

# MindTracker Deployment Verification Script

echo "🚀 MindTracker Deployment Verification"
echo "======================================"

# Check if required files exist
echo "📁 Checking required files..."

required_files=("package.json" "vercel.json" "vite.config.js" "src/main.jsx" "index.html")
missing_files=()

for file in "${required_files[@]}"; do
    if [ ! -f "$file" ]; then
        missing_files+=("$file")
    else
        echo "✅ $file"
    fi
done

if [ ${#missing_files[@]} -ne 0 ]; then
    echo "❌ Missing required files:"
    printf '%s\n' "${missing_files[@]}"
    exit 1
fi

# Check dependencies
echo ""
echo "📦 Checking dependencies..."
if npm list --depth=0 > /dev/null 2>&1; then
    echo "✅ All dependencies installed"
else
    echo "❌ Missing dependencies. Run: npm install"
    exit 1
fi

# Test build
echo ""
echo "🔨 Testing build..."
if npm run build > /dev/null 2>&1; then
    echo "✅ Build successful"
    
    # Check if dist directory exists and has content
    if [ -d "dist" ] && [ "$(ls -A dist)" ]; then
        echo "✅ Build artifacts generated"
        echo "   - dist/index.html: $([ -f "dist/index.html" ] && echo "✅" || echo "❌")"
        echo "   - dist/assets/: $([ -d "dist/assets" ] && echo "✅" || echo "❌")"
    else
        echo "❌ Build artifacts missing"
        exit 1
    fi
else
    echo "❌ Build failed"
    exit 1
fi

# Check for Vercel configuration
echo ""
echo "⚙️  Checking Vercel configuration..."
if [ -f "vercel.json" ]; then
    echo "✅ vercel.json exists"
    
    # Validate vercel.json structure
    if jq empty vercel.json 2>/dev/null; then
        echo "✅ vercel.json is valid JSON"
    else
        echo "⚠️  vercel.json may have syntax issues"
    fi
else
    echo "❌ vercel.json missing"
    exit 1
fi

echo ""
echo "🎉 All checks passed! Your MindTracker app is ready for Vercel deployment."
echo ""
echo "Next steps:"
echo "1. Commit and push your code to GitHub"
echo "2. Go to vercel.com and import your repository"
echo "3. Or use Vercel CLI: npx vercel"
echo ""
echo "📖 For detailed instructions, see DEPLOYMENT.md"
