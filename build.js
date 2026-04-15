const fs = require("fs");
const path = require("path");

const root = __dirname;
const template = fs.readFileSync(path.join(root, "template.html"), "utf8");
const projects = JSON.parse(
  fs.readFileSync(path.join(root, "projects.json"), "utf8")
);

// --- Utilities ---

function esc(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function parseDate(dateStr) {
  if (!dateStr) return new Date(9999, 11);
  const [month, year] = dateStr.split("/");
  return new Date(parseInt(year), parseInt(month) - 1);
}

function formatTimeframe(p) {
  if (p.displayTimeframe) return p.displayTimeframe;
  if (!p.endDate) return `Seit ${p.startDate}`;
  return `${p.startDate} - ${p.endDate}`;
}

// --- HTML generators ---

function bulletList(items, indent) {
  if (!items || items.length === 0) return "";
  const pad = " ".repeat(indent);
  let h = `${pad}<ul>\n`;
  for (const item of items) {
    h += `${pad}  <li>\n${pad}    ${esc(item)}\n${pad}  </li>\n`;
  }
  h += `${pad}</ul>\n`;
  return h;
}

function techParagraph(label, tech, indent) {
  const pad = " ".repeat(indent);
  return (
    `${pad}<p class="tech-stack">\n` +
    `${pad}  <strong>${esc(label)}:</strong> ${esc(tech)}\n` +
    `${pad}</p>\n`
  );
}

function generateProject(p) {
  const I = 10; // base indent (5 levels × 2 spaces)
  const pad = " ".repeat(I);
  let h = `${pad}<div class="project-box">\n`;

  // Title
  h += `${pad}  <h3>${esc(p.title)}</h3>\n`;

  // Meta
  h += `${pad}  <div class="project-meta">\n`;
  h += `${pad}    <span class="timeframe">${esc(formatTimeframe(p))}</span>\n`;
  if (p.employer) {
    h += `${pad}    <span class="employer">${esc(p.employer)}</span>\n`;
  }
  const industry =
    p.displayIndustry ||
    (!p.isPrivate && p.industry && p.industry.length
      ? `Endkunde: ${p.industry.join(", ")}`
      : null);
  if (industry) {
    h += `${pad}    <span class="industry">${esc(industry)}</span>\n`;
  }
  h += `${pad}  </div>\n`;

  // Roles
  h += `${pad}  <p class="project-roles">\n`;
  h += `${pad}    <strong>Rollen:</strong> ${esc(p.role.join(", "))}\n`;
  h += `${pad}  </p>\n`;

  // Description
  h += `${pad}  <p class="project-description">\n`;
  h += `${pad}    ${esc(p.description)}\n`;
  h += `${pad}  </p>\n`;

  // Sub-projects OR bullet points
  if (p.subProjects && p.subProjects.length > 0) {
    for (const sub of p.subProjects) {
      h += `\n${pad}  <div class="project-subsection">\n`;
      h += `${pad}    <h4>${esc(sub.title)}</h4>\n`;
      h += bulletList(sub.bulletpoints, I + 4);
      if (sub.technischesUmfeld) {
        h += techParagraph(
          "Technisches Umfeld",
          sub.technischesUmfeld,
          I + 4
        );
      }
      h += `${pad}  </div>\n`;
    }
    // Top-level tech only if sub-projects don't have their own
    const subsHaveTech = p.subProjects.some((s) => s.technischesUmfeld);
    if (!subsHaveTech && p.technischesUmfeld) {
      h += techParagraph("Technisches Umfeld", p.technischesUmfeld, I + 2);
    }
  } else {
    h += bulletList(p.bulletpoints, I + 2);

    // Tech stacks (multiple or single)
    if (p.techStacks && p.techStacks.length > 0) {
      for (const ts of p.techStacks) {
        h += `${pad}  <div class="tech-subsection">\n`;
        h += techParagraph(
          `Technisches Umfeld - ${ts.label}`,
          ts.technologies,
          I + 4
        );
        h += `${pad}  </div>\n`;
      }
    } else if (p.technischesUmfeld) {
      h += techParagraph("Technisches Umfeld", p.technischesUmfeld, I + 2);
    }
  }

  h += `${pad}</div>`;
  return h;
}

// --- Main ---

projects.sort((a, b) => parseDate(b.startDate) - parseDate(a.startDate));

const employment = projects.filter((p) => !p.isPrivate);
const personal = projects.filter((p) => p.isPrivate);

const employmentHtml = employment.map(generateProject).join("\n\n");
const personalHtml = personal.map(generateProject).join("\n\n");

const output = template
  .replace("{{PROJECTS_EMPLOYMENT}}", employmentHtml)
  .replace("{{PROJECTS_PRIVATE}}", personalHtml);

fs.writeFileSync(path.join(root, "index.html"), output);

console.log(
  `Generated index.html – ${employment.length} employment, ${personal.length} private projects.`
);
