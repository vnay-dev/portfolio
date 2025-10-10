# Typography System

Our typography system is based on [Material Design's Type Scale](https://m2.material.io/design/typography/the-type-system.html#type-scale) principles, customized for our Gabarito (headings) and Hanken Grotesk (body) fonts.

## 📐 Type Scale

### Display Styles

**Purpose**: Largest text on screen, reserved for short, important text or numerals

- **Display Large** - `display-large` - Hero headlines, main page titles
- **Display Medium** - `display-medium` - Section headlines, key emphasis
- **Display Small** - `display-small` - Subsection headlines

### Headline Styles

**Purpose**: High-emphasis text that's shorter than body text

- **Headline Large** - `headline-large` - Page titles, card headers
- **Headline Medium** - `headline-medium` - Section titles
- **Headline Small** - `headline-small` - Component headers

### Title Styles

**Purpose**: Medium-emphasis text that's shorter than body text

- **Title Large** - `title-large` - Card titles, list headers
- **Title Medium** - `title-medium` - Subheadings, emphasized content
- **Title Small** - `title-small` - List items, small headings

### Body Styles

**Purpose**: Used for long-form writing, readable at smaller sizes

- **Body Large** - `body-large` - Important paragraphs, lead text
- **Body Medium** - `body-medium` - Standard body text, descriptions
- **Body Small** - `body-small` - Supporting text, captions

### Label Styles

**Purpose**: Text in components like buttons, navigation, tabs

- **Label Large** - `label-large` - Primary buttons, prominent CTAs
- **Label Medium** - `label-medium` - Secondary buttons, chips
- **Label Small** - `label-small` - Small buttons, tags

### Utility Styles

- **Overline** - `text-overline` - Eyebrows, categories, metadata
- **Caption** - `text-caption` - Helper text, timestamps, footnotes

## 🎨 Usage

### Using CSS Classes (Recommended for simple cases)

```tsx
<h1 className="display-large">Welcome to My Portfolio</h1>
<p className="body-medium">This is a description of my work.</p>
<span className="label-small">New</span>
```

### Using Typography Components (Recommended for complex cases)

```tsx
import { Display, Body, Label } from "@/components/common";

<Display size="large">Welcome to My Portfolio</Display>
<Body size="medium">This is a description of my work.</Body>
<Label size="small">New</Label>
```

### Using the Base Typography Component

```tsx
import { Typography } from "@/components/common";
import { TYPE_SCALE } from "@/constants/typography";

<Typography variant={TYPE_SCALE.DISPLAY_LARGE} as="h1">
  Welcome to My Portfolio
</Typography>;
```

## 📱 Responsive Design

All typography scales are responsive using `clamp()` for fluid sizing:

```css
/* Example: Display Large */
font-size: clamp(3.5rem, 8vw, 7rem); /* Min 56px, scales with viewport, max 112px */
```

On mobile (< 640px), display styles have additional optimizations for smaller screens.

## 🎯 Font Assignments

- **Gabarito**: Display, Headline, and large Title styles (emphasis)
- **Hanken Grotesk**: Small titles, Body, Label, and utility text (readability)

## 💡 Best Practices

### 1. Semantic HTML

Use appropriate HTML elements with typography classes:

```tsx
<h1 className="display-large">Page Title</h1>  {/* ✅ Good */}
<div className="display-large">Page Title</div> {/* ❌ Avoid */}
```

### 2. Hierarchy

Maintain clear visual hierarchy:

```tsx
<h1 className="display-large">Main Title</h1>
<h2 className="headline-medium">Section Title</h2>
<p className="body-medium">Body text content...</p>
```

### 3. Consistency

Don't mix too many sizes. Stick to 3-4 text sizes per screen:

```tsx
{/* ✅ Good - Clear hierarchy */}
<h1 className="display-medium">Title</h1>
<p className="body-large">Lead paragraph</p>
<p className="body-medium">Regular text</p>
<span className="caption">Note</span>

{/* ❌ Too many sizes */}
<h1 className="display-large">...</h1>
<h2 className="headline-small">...</h2>
<h3 className="title-medium">...</h3>
<p className="body-large">...</p>
<p className="body-medium">...</p>
<p className="body-small">...</p>
```

### 4. Combining with Utilities

Typography classes work great with Tailwind utilities:

```tsx
<h1 className="display-large text-center text-accent">
  Centered Accent Title
</h1>

<p className="body-medium text-balance max-w-2xl">
  Balanced text with max width
</p>
```

### 5. Custom Overrides

When you need custom styling, combine classes:

```tsx
<h2 className="headline-medium !font-normal tracking-tight">Custom styled headline</h2>
```

## 📊 Complete Type Scale Reference

| Style           | Font     | Size Range | Weight | Use Case          |
| --------------- | -------- | ---------- | ------ | ----------------- |
| Display Large   | Gabarito | 56-112px   | 700    | Hero titles       |
| Display Medium  | Gabarito | 44-88px    | 700    | Major sections    |
| Display Small   | Gabarito | 36-72px    | 700    | Subsections       |
| Headline Large  | Gabarito | 32-56px    | 700    | Page titles       |
| Headline Medium | Gabarito | 28-44px    | 600    | Section titles    |
| Headline Small  | Gabarito | 24-36px    | 600    | Component headers |
| Title Large     | Gabarito | 22-28px    | 600    | Card titles       |
| Title Medium    | Hanken   | 18-22px    | 600    | Subheadings       |
| Title Small     | Hanken   | 16-18px    | 600    | Small headings    |
| Body Large      | Hanken   | 18-20px    | 400    | Lead text         |
| Body Medium     | Hanken   | 16-18px    | 400    | Body text         |
| Body Small      | Hanken   | 14-16px    | 400    | Supporting text   |
| Label Large     | Hanken   | 16-18px    | 600    | Large buttons     |
| Label Medium    | Hanken   | 14-16px    | 600    | Buttons           |
| Label Small     | Hanken   | 12-14px    | 600    | Small buttons     |
| Overline        | Hanken   | 12px       | 600    | Categories        |
| Caption         | Hanken   | 12px       | 400    | Helper text       |

## 🔄 Migrating Existing Code

Replace hardcoded sizes with typography classes:

```tsx
{
  /* Before */
}
<h1 className="text-6xl font-bold md:text-8xl">Title</h1>;

{
  /* After */
}
<h1 className="display-large">Title</h1>;
```

## 🎨 Example Page Structure

```tsx
export default function ExamplePage() {
  return (
    <div className="container-padding py-20">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <span className="text-overline text-accent mb-4 block">Welcome</span>
        <h1 className="display-large mb-6">Build Something Amazing</h1>
        <p className="body-large mx-auto max-w-3xl text-balance">
          A stunning portfolio to showcase your work and skills
        </p>
      </div>

      {/* Content Section */}
      <div className="mx-auto max-w-4xl space-y-12">
        <section>
          <h2 className="headline-medium mb-4">About the Project</h2>
          <p className="body-medium mb-4">
            This is the main content area using body-medium for readability...
          </p>
          <p className="body-small text-muted-foreground">
            Additional supporting information in body-small...
          </p>
        </section>

        <section>
          <h3 className="title-large mb-4">Key Features</h3>
          <ul className="space-y-2">
            <li className="body-medium">Feature one description</li>
            <li className="body-medium">Feature two description</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
```

## 🔗 Resources

- [Material Design Type Scale](https://m2.material.io/design/typography/the-type-system.html#type-scale)
- [Gabarito Font](https://fonts.google.com/specimen/Gabarito)
- [Hanken Grotesk Font](https://fonts.google.com/specimen/Hanken+Grotesk)
