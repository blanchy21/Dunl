#!/bin/bash

echo "🔍 Running pre-commit checks..."

# Check for img tags
echo "📸 Checking for HTML img tags..."
if grep -r "<img" src/ --include="*.tsx" --include="*.ts" --include="*.jsx" --include="*.js"; then
    echo "❌ ERROR: Found HTML img tags! Use Next.js Image component instead."
    echo "   See DEVELOPMENT_RULES.md for details."
    exit 1
else
    echo "✅ No HTML img tags found"
fi

# Check for unescaped apostrophes
echo "🔤 Checking for unescaped apostrophes..."
if grep -r "[^&]'[^;]" src/ --include="*.tsx" --include="*.ts" --include="*.jsx" --include="*.js" | grep -v "import.*'" | grep -v "className.*'" | grep -v "href.*'" | grep -v "src.*'"; then
    echo "❌ ERROR: Found unescaped apostrophes! Use &apos; instead."
    echo "   See DEVELOPMENT_RULES.md for details."
    exit 1
else
    echo "✅ No unescaped apostrophes found"
fi

# Run markdown linting (ignore paths directory - template files)
echo "📝 Running markdown linting..."
npx markdownlint "*.md" "src/**/*.md" "scripts/**/*.md" --ignore "node_modules/**/*.md" --ignore "paths/**/*.md"
if [ $? -ne 0 ]; then
    echo "❌ Markdown linting failed! Fix all issues before committing."
    exit 1
fi

# Run ESLint
echo "🧹 Running ESLint..."
npm run lint
if [ $? -ne 0 ]; then
    echo "❌ ESLint failed! Fix all issues before committing."
    exit 1
fi

# Run TypeScript check
echo "🔧 Running TypeScript check..."
npm run type-check
if [ $? -ne 0 ]; then
    echo "❌ TypeScript check failed! Fix all type errors before committing."
    exit 1
fi

echo "🎉 All pre-commit checks passed! Ready to commit."
