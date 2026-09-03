const publicationRoot = document.querySelector("[data-publications]");

function createLink(link) {
  const anchor = document.createElement("a");
  anchor.href = link.url;
  anchor.target = "_blank";
  anchor.rel = "noreferrer";
  anchor.textContent = link.label;
  return anchor;
}

function createCitationButton(citation) {
  const button = document.createElement("button");
  button.className = "cite-button";
  button.type = "button";
  button.textContent = "Cite";
  button.dataset.citation = citation;
  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(citation);
      button.textContent = "Copied";
      window.setTimeout(() => {
        button.textContent = "Cite";
      }, 1600);
    } catch {
      window.prompt("Copy BibTeX:", citation);
    }
  });
  return button;
}

function renderPublications(publications) {
  const groups = new Map();
  publications.forEach((paper) => {
    if (!groups.has(paper.year)) {
      groups.set(paper.year, []);
    }
    groups.get(paper.year).push(paper);
  });

  groups.forEach((papers, year) => {
    const section = document.createElement("section");
    section.className = "publication-year";

    const heading = document.createElement("h2");
    heading.textContent = year;
    section.appendChild(heading);

    papers.forEach((paper) => {
      const article = document.createElement("article");
      article.className = "publication";

      const figure = document.createElement("div");
      figure.className = "paper-figure";
      const image = document.createElement("img");
      image.src = paper.image;
      image.alt = paper.alt || paper.title;
      figure.appendChild(image);

      const body = document.createElement("div");
      body.className = "paper-body";

      const title = document.createElement("p");
      title.className = "paper-title";
      const titleLink = document.createElement("a");
      titleLink.href = paper.titleUrl || paper.links?.[0]?.url || "#";
      titleLink.target = "_blank";
      titleLink.rel = "noreferrer";
      titleLink.textContent = paper.title;
      title.appendChild(titleLink);

      const authors = document.createElement("p");
      authors.className = "paper-authors";
      authors.textContent = paper.authors;

      const venue = document.createElement("p");
      venue.className = "paper-venue";
      venue.textContent = paper.venue;

      const keywords = document.createElement("div");
      keywords.className = "paper-keywords";
      (paper.keywords || []).forEach((keyword) => {
        const tag = document.createElement("span");
        tag.textContent = keyword;
        keywords.appendChild(tag);
      });

      const links = document.createElement("div");
      links.className = "paper-links";
      (paper.links || []).forEach((link) => links.appendChild(createLink(link)));
      links.appendChild(createCitationButton(paper.bibtex || paper.citation));

      body.append(title, authors, venue);
      if ((paper.keywords || []).length) {
        body.appendChild(keywords);
      }
      body.appendChild(links);
      article.append(figure, body);
      section.appendChild(article);
    });

    publicationRoot.appendChild(section);
  });
}

if (publicationRoot) {
  fetch("assets/data/publications.json")
    .then((response) => response.json())
    .then(renderPublications)
    .catch(() => {
      publicationRoot.textContent = "Publications could not be loaded.";
    });
}
