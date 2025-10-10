# Public Assets Directory

This directory contains static assets that are served directly.

## What Goes Here

- **Images**: Project images, hero images, profile photos, etc.
- **Icons**: Favicon, app icons, social preview images
- **Fonts**: Custom font files (see `fonts/` directory)
- **Documents**: PDFs, resumes, or other downloadable files
- **Other static assets**: Any file that needs to be publicly accessible

## Accessing Files

Files in this directory are served from the root URL:

- `/public/image.png` → `http://yoursite.com/image.png`
- `/public/fonts/font.woff2` → `http://yoursite.com/fonts/font.woff2`

## Recommended Additions

### Favicon

Add your custom favicon:

- `favicon.ico` (32x32 for browser tabs)
- `icon.png` or `apple-icon.png` (for modern browsers and iOS)

You can also use Next.js metadata API in `app/layout.tsx`:

```tsx
export const metadata = {
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};
```

### Social Preview (OG Image)

- `og-image.png` (1200x630px for social media previews)

### Other Common Assets

- Logo files
- Product images
- Team photos
- Client logos
- Background images

## Optimization Tips

1. **Images**: Use WebP/AVIF formats when possible
2. **Compression**: Compress images before adding them
3. **Naming**: Use descriptive, lowercase, hyphenated names
4. **Organization**: Create subdirectories for different asset types
   - `/public/images/`
   - `/public/icons/`
   - `/public/documents/`

## Note

Always use Next.js `<Image>` component for images (not direct `<img>` tags) to take advantage of automatic optimization.
