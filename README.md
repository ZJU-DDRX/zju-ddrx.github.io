# DDRX Website Maintenance Guide

This repository hosts the GitHub Pages website for the DDRX Vehicle Control Group.

Website URL:

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
|-- index.html              # Home page
|-- people.html             # Team members
|-- publications.html       # Papers and links
|-- projects.html           # Research areas
|-- competitions.html       # F1TENTH / RoboRacer competitions
|-- lab-life.html           # Lab life gallery
|-- contact.html            # Join Us / contact information
|-- assets/
|   |-- css/styles.css      # Global website styles
|   |-- js/main.js          # Mobile navigation and slideshow logic
|   |-- images/             # Website images
|   `-- videos/             # Website videos
`-- README.md               # This maintenance guide
```

## How To Preview Locally

Open `index.html` directly in a browser.

For a more reliable preview, run a local static server inside this folder:

```powershell
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## How To Update Content

### Home Page

Edit `index.html`.

Common updates:

- Hero motto
- Research summary
- Selected publications
- News items

Related images are in:

```text
assets/images/
```

### Team Page

Edit `people.html`.

For each member, update or add a `profile-card` block with:

- Name
- Role and location
- Email / homepage / GitHub / Google Scholar links
- Research direction
- Optional profile photo

Profile photos should be placed in:

```text
assets/images/people/
```

### Publications Page

Edit `publications.html`.

For each paper, update or add a `publication` block with:

- Figure
- Title
- Authors
- Venue and year
- Publisher / arXiv / DOI / Code links

Paper figures should be placed in:

```text
assets/images/papers/
```

Recommended image format: `.jpg`, `.png`, or `.gif`.

### Research Page

Edit `projects.html`.

Use this page for stable research directions, such as:

- Autonomous Driving
- Autonomous Drifting
- Autonomous Racing
- System stack and platforms

### Competitions Page

Edit `competitions.html`.

Use this page for race records and competition summaries.

Competition images should be placed in:

```text
assets/images/competitions/
```

Competition videos should be placed in:

```text
assets/videos/competitions/
```

Important: GitHub blocks files larger than about 100 MB. Large videos should be compressed or hosted externally.

### Lab Life Page

Edit `lab-life.html`.

Current gallery categories:

- Team Building
- Daily Moments
- Cycling
- Hiking
- Badminton

Lab life images should be placed in:

```text
assets/images/lab-life/
```

The slideshow at the top of `lab-life.html` currently uses Team Building photos. To change the slideshow, edit the image list inside:

```html
<div class="life-slideshow">
```

### Join Us Page

Edit `contact.html`.

Common updates:

- Invitation text
- Address
- PI homepage
- GitHub organization link
- Contact email

## How To Add Images

1. Put the image into the correct folder under `assets/images/`.
2. Use an English filename without spaces when possible.
3. Reference the image from the relevant HTML file.

Example:

```html
<img src="assets/images/people/example-name.jpg" alt="Example Name">
```

## How To Publish Updates

After editing files:

```powershell
git status
git add .
git commit -m "Describe the update"
git push origin main
```

GitHub Pages usually updates within a few minutes.

If the website still shows the old version, refresh the browser with:

```text
Ctrl + F5
```

## Notes

- Keep file names stable once they are used in HTML.
- Avoid committing very large videos or raw presentation files.
- Prefer compressed images for faster loading.
- Keep public personal information limited to approved emails, links, and photos.
