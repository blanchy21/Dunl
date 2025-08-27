# Development Rules & Best Practices

## 🚫 **NEVER Use HTML `<img>` Tags**

### **Why?**

- **Performance**: Slower LCP (Largest Contentful Paint)
- **Bandwidth**: No automatic optimization
- **SEO**: Missing Next.js image optimization benefits
- **Linting**: Violates `@next/next/no-img-element` rule

### **✅ Always Use Next.js `<Image>` Component**

```tsx
// ❌ WRONG - Don't do this
<img src="/logo.png" alt="Logo" className="w-10 h-10" />

// ✅ CORRECT - Always do this
import Image from 'next/image';

<Image 
  src="/logo.png" 
  alt="Logo" 
  width={40} 
  height={40} 
  className="w-10 h-10" 
/>
```

### **Required Props for Next.js Image:**

- `src`: Image path
- `alt`: Accessibility description
- `width`: Image width in pixels
- `height`: Image height in pixels

## 🔤 **Text Content Rules**

### **Apostrophes Must Be Escaped**

```tsx
// ❌ WRONG
<p>What's happening?</p>
<p>Dublin's finest</p>

// ✅ CORRECT
<p>What&apos;s happening?</p>
<p>Dublin&apos;s finest</p>
```

### **HTML Entities for Special Characters:**

- `'` → `&apos;`
- `"` → `&quot;`
- `&` → `&amp;`
- `<` → `&lt;`
- `>` → `&gt;`

## 🎨 **Typography Rules**

### **Heading Fonts**

- **All H1 headings**: Use `font-display` class (Playfair Display)
- **Body text**: Use `font-sans` class (Inter)

```tsx
// ✅ CORRECT
<h1 className="text-4xl font-bold font-display">SHOP</h1>
<p className="text-lg font-sans">Body text here</p>
```

## 📁 **File Structure Rules**

### **Component Organization**

- All components go in `src/components/`
- All pages go in `src/app/`
- All utilities go in `src/lib/`
- All images go in `public/`

### **Naming Conventions**

- Components: PascalCase (`Navigation.tsx`)
- Files: kebab-case (`use-auth.ts`)
- Folders: kebab-case (`firebase-utils/`)

## 🧹 **Code Quality Rules**

### **Before Committing:**

1. Run `npm run lint` - Must pass with no errors
2. Run `npm run type-check` - Must pass with no errors
3. Ensure all `<img>` tags are replaced with `<Image>`
4. Ensure all apostrophes are properly escaped

### **Linting Commands:**

```bash
npm run lint          # Check for issues
npm run lint:fix      # Auto-fix what can be fixed
npm run type-check    # Check TypeScript types
npm run markdown-lint # Check markdown files
npm run markdown-lint:fix # Auto-fix markdown issues
```

## 🚀 **Performance Rules**

### **Image Optimization**

- Always specify `width` and `height` props
- Use appropriate image formats (PNG for logos, JPG for photos)
- Consider using `priority` prop for above-the-fold images

### **Component Optimization**

- Use `'use client'` only when necessary
- Implement proper loading states
- Use React.memo() for expensive components

## 🔧 **ESLint Configuration**

### **Current Rules:**

- `@next/next/no-img-element`: **ERROR** - Prevents img tag usage
- `react/no-unescaped-entities`: **ERROR** - Prevents unescaped apostrophes
- `prefer-const`: **ERROR** - Enforces const over let
- `no-var`: **ERROR** - Prevents var usage

### **Rule Enforcement:**

- These rules are enforced as **ERRORS** (will fail builds)
- Cannot be bypassed or disabled
- Must be fixed before code can be committed

## 📝 **Commit Message Format**

```
type(scope): description

Examples:
feat(navigation): add new logo with Next.js Image component
fix(typography): escape apostrophes in all headings
refactor(components): replace img tags with Image components
```

## 🚨 **Common Mistakes to Avoid**

1. **Using `<img>` instead of `<Image>`**
2. **Forgetting to escape apostrophes**
3. **Not specifying width/height for images**
4. **Using wrong font classes**
5. **Forgetting to import Next.js components**

## 📚 **Useful Resources**

- [Next.js Image Component](https://nextjs.org/docs/api-reference/next/image)
- [ESLint Rules](https://nextjs.org/docs/basic-features/eslint)
- [TypeScript Best Practices](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Classes](https://tailwindcss.com/docs)

## 🎯 **Quick Checklist**

Before committing code, ensure:

- [ ] No `<img>` tags (only `<Image>` components)
- [ ] All apostrophes are escaped (`&apos;`)
- [ ] All headings use `font-display` class
- [ ] Linting passes (`npm run lint`)
- [ ] Type checking passes (`npm run type-check`)
- [ ] Images have proper width/height props
- [ ] Components are properly imported

---

**Remember**: These rules are enforced automatically and will prevent commits if violated. Always run linting before committing!
