# Custom Font Files

Place your custom font files in this directory.

## How to Add Custom Fonts

1. **Add font files** - Place your .woff2 and .woff font files here
2. **Update CSS** - Add `@font-face` declarations in `app/globals.css`
3. **Update theme** - Modify the `--font-sans` variable in `app/globals.css`

## Example @font-face declaration:

```css
@font-face {
  font-family: "YourFont";
  src:
    url("/fonts/YourFont-Regular.woff2") format("woff2"),
    url("/fonts/YourFont-Regular.woff") format("woff");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

Then update the theme:

```css
@theme inline {
  --font-sans: "YourFont", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
```
