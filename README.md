# DDRX Website Maintenance Guide

This repository hosts the GitHub Pages website for the DDRX Vehicle Control Group.

Website:

```text
https://zju-ddrx.github.io/
```

GitHub organization:

```text
https://github.com/ZJU-DDRX
```

## Site Structure

```text
.
|-- index.html                  # Home
|-- people.html                 # Team members
|-- publications.html           # Publications page shell
|-- projects.html               # Research areas
|-- competitions.html           # Competition records
|-- lab-life.html               # Lab life gallery
|-- contact.html                # Join Us
|-- assets/
|   |-- css/styles.css          # Global layout and visual system
|   |-- data/publications.json  # Structured publication records
|   |-- js/main.js              # Mobile nav and lab-life slideshow
|   |-- js/publications.js      # Publications renderer and Cite buttons
|   |-- images/                 # Website-ready images
|   `-- videos/                 # Website-ready videos
`-- README.md
```

The workspace-level `pic/` folder is for original source materials. The website itself loads optimized files from `ddrx-github-site/assets/`.

## Local Preview

The Publications page loads JSON, so preview with a local server instead of opening files directly:

```powershell
cd ddrx-github-site
python -m http.server 8000
```

Open:

```text
http://localhost:8000
```

## Page Maintenance

### Home

Edit `index.html`.

Main sections:

- Hero: Zhejiang University line, centered DDRX logo, and three-line motto
- Research: Driving, Drifting, Racing cards
- Recent work: selected publications displayed as large image-first entries
- News: short dated updates
- Facts: founded year, F1TENTH validation, and MPC backbone, shown under News

### Team

Edit `people.html`.

For each member, update the matching `.profile-card` block:

- Name
- Role and location
- Email, homepage, GitHub, Google Scholar, ORCID, DBLP, OpenReview when available
- One-sentence research direction
- Optional photo in `assets/images/people/`

### Publications

Edit publication data in:

```text
assets/data/publications.json
```

Each record should include:

- `year`
- `title`
- `authors`
- `venue`
- `image`
- `alt`
- `links`
- `citation`
- `bibtex`

`assets/js/publications.js` renders the page automatically. The `Cite` button copies `bibtex` first, and falls back to `citation` if `bibtex` is missing.

Paper figures should be placed in:

```text
assets/images/papers/
```

### Research

Edit `projects.html`.

Use it for stable research directions and system-level descriptions, not for every individual paper.

### Competitions

Edit `competitions.html`.

Use newest events first. Competition images go in:

```text
assets/images/competitions/
```

Competition videos go in:

```text
assets/videos/competitions/
```

Keep videos small enough for GitHub Pages. GitHub rejects files larger than about 100 MB.

### Lab Life

Edit `lab-life.html`.

Current categories:

- Team Building
- Daily Moments
- Cycling
- Hiking
- Badminton

The hero slideshow uses Team Building images. To change it, edit the image list inside `.life-slideshow`.
The current slideshow mixes Team Building, Cycling, and Hiking photos. Badminton captions intentionally show dates only.

### Join Us

Edit `contact.html`.

Common updates:

- Welcome text
- Contact links
- GitHub organization link
- Address

## Image Workflow

1. Put original materials in the workspace-level `pic/` folder.
2. Select and compress website-ready images.
3. Copy website-ready images into `ddrx-github-site/assets/images/`.
4. Reference only `assets/...` paths from HTML or JSON.

Recommended website image sizes:

- Paper figures: under 1 MB when possible
- Gallery images: under 1 MB when possible
- Hero or large images: under 2 MB when possible

## Naming Rules

Use lowercase English filenames with hyphens.

Good examples:

```text
assets/images/people/lei-xie.jpg
assets/images/papers/sparse-gp-drifting.jpg
assets/images/competitions/iv-2024/iv-2024-award-4th.jpg
assets/images/lab-life/team-building/team-building-01.jpg
pic/lab-life/cycling/2026-04-06-zijingang-campus.jpg
```

Avoid:

- Spaces
- Chinese characters
- Very long paper-title filenames
- Reusing an existing filename for a different image

Suggested source-material folders under `pic/`:

```text
pic/publications/
pic/competitions/2024-roboracer-iv/
pic/competitions/2023-f1tenth-korea-championship/
pic/lab-life/team-building/
pic/lab-life/daily/
pic/lab-life/cycling/
pic/lab-life/hiking/
pic/lab-life/badminton/
```

## SEO And Sharing

Every HTML page should keep:

- `meta name="description"`
- `og:title`
- `og:description`
- `og:type`
- `og:url`
- `og:image`
- `twitter:card`

Header logos:

```text
assets/images/zju-logo.png
assets/images/ddrx-logo-transparent.png
```

If replacing either logo, keep the filename unless every page is updated.

## Publish Updates

```powershell
git status
git add .
git commit -m "Describe the update"
git push origin main
```

GitHub Pages usually updates within a few minutes. If the browser still shows the old version, use `Ctrl + F5`.

## Notes

- Keep public personal information limited to approved links, emails, and photos.
- Do not commit raw photo dumps, large presentation files, or uncompressed videos to the website repository.
- Keep `assets/data/publications.json` as the single source of truth for publications.
