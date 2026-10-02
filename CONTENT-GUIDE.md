# Content Guide

How to add blog posts, certificates and images to the site without breaking it.
Ready-to-copy templates are in the `_templates/` folder. Jekyll does not publish that folder.

---

## 1. Add a blog post

1. Copy `_templates/blog-post.md` into the `_blog/` folder.
2. Rename it. Use **lowercase letters and dashes only, no spaces**.
   - Good: `_blog/zero-trust-basics.md`
   - Bad: `_blog/Zero Trust Basics.md`
   - The file name becomes the web address: `/blog/zero-trust-basics/`
3. Edit the front matter (the block between the two `---` lines):

| Field         | Required | What it does                                                    |
|---------------|----------|-----------------------------------------------------------------|
| `layout`      | yes      | Always `blog`. Do not change it.                                |
| `title`       | yes      | Post title. Keep it in `"double quotes"`.                       |
| `author`      | yes      | Shown under the title.                                          |
| `date`        | yes      | Format `YYYY-MM-DD`. Sets the order on the Blog page.           |
| `description` | no       | Fallback summary, used only if the post has no first paragraph.               |
| `tags`        | no       | `[tag-one, tag-two]`. Lowercase, dashes instead of spaces. Listed in the **Tags** section at the bottom of the Blog page.      |

4. Replace the example text with your post and commit. GitHub Pages rebuilds the site in about a minute.

**Important:** posts with a `date` in the future stay hidden until that day.

---

## 2. Add an image

1. Put the file in `img/`, with a lowercase, no-spaces name, e.g. `img/zero-trust-diagram.png`.
2. Use it in a post:

```markdown
![Zero trust diagram](/img/zero-trust-diagram.png){: width="500" }
```

- Always start the path with `/img/`.
- The text inside `[ ]` describes the image for screen readers.
- `{: width="500" }` is optional and sets the display width in pixels.

---

## 3. Add a certificate

1. If the category does not exist yet, follow section 4 first.
2. Copy `_templates/certificate.md` into `_certificates/`, e.g. `_certificates/google-cybersecurity.md`.
3. Put the certificate image in `img/`.
4. Fill in the fields:
   - `category`: must match the category's `title` **exactly**.
   - `category_slug`: must match the category's `slug` **exactly**.
   - `image`: path to the image, e.g. `"/img/google-cybersecurity.jpg"`.
   - `external_url`: link to the official certificate.

---

## 4. Add a certificate category

1. Copy `_templates/certificate-category.md` into `_certificate_categories/`.
2. Name the file after the slug, e.g. `_certificate_categories/cloud-security.md`.
3. Set `title`, `slug` (same as the file name, without `.md`), `thumbnail` and `description`.
4. Add a 16:9 thumbnail image to `img/`.

---

## 5. Markdown cheat sheet

| You write                  | You get               |
|----------------------------|-----------------------|
| `## Heading`               | Section heading       |
| `### Smaller heading`      | Sub-heading           |
| `**bold**`                 | **bold**              |
| `*italic*`                 | *italic*              |
| `[text](https://url)`      | Link                  |
| `- item`                   | Bullet list           |
| `1. item`                  | Numbered list         |
| `> quote`                  | Quote with dark bar   |
| `` `code` ``               | Inline code           |
| `---`                      | Horizontal line       |

---

## 6. Common mistakes

- **Spaces in file names.** They break web addresses. Use dashes.
- **Missing `---` lines.** Front matter must start and end with exactly `---`.
- **Colon in a title without quotes.** `title: Blockchain: Explained` breaks the build. Use `title: "Blockchain: Explained"`.
- **Tabs in front matter.** Use spaces only.
- **Wrong date format.** It must be `2026-01-31`, not `31/01/2026`.
- **Image path without a leading `/`.** Write `/img/photo.png`, not `img/photo.png`.

---

## 7. Changing the colors

All site colors are at the top of `assets/css/custom.css`:

```css
:root {
  --page: #ffffff;       /* background */
  --ink: #666666;        /* body text */
  --heading: #222222;    /* name in sidebar */
  --line: #e5e5e5;       /* divider lines */
  --link: #222222;       /* links, nav, dates */
  --link-hover: #000000; /* link hover */
  --accent: #222222;     /* quote bar */
  --surface: #f2f2f2;    /* tags, code background */
}
```

To change the colors, change these values. Every page updates.
