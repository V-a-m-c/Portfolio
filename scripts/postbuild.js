// Runs after `react-scripts build`.
//
// The app is a single-page app, so every route would otherwise be served with
// the home page's <title>, description, and canonical URL. This writes
// build/resume.html: the same app shell with the resume page's own metadata,
// which Netlify serves for /resume. Search engines then see correct, static
// metadata for that URL without needing to run JavaScript.
const fs = require("fs");
const path = require("path");
const seo = require("../src/data/seo.json");

const buildDir = path.join(__dirname, "..", "build");
const indexPath = path.join(buildDir, "index.html");
const html = fs.readFileSync(indexPath, "utf8");

const escapeHtml = (text) => text.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

// Replaces exactly one tag's value and fails loudly if the tag is missing, so
// a change to public/index.html cannot silently produce wrong metadata.
function replaceOnce(source, pattern, value, label) {
  const matches = source.match(new RegExp(pattern.source, "g")) || [];
  if (matches.length !== 1) {
    throw new Error(`postbuild: expected exactly one ${label} in build/index.html, found ${matches.length}`);
  }
  return source.replace(pattern, (match, before, after) => `${before}${escapeHtml(value)}${after}`);
}

const metaContent = (key) => new RegExp(`(<meta (?:name|property)="${key}" content=")[^"]*(")`);

if (!html.includes(`<title>${escapeHtml(seo.home.title)}</title>`)) {
  throw new Error("postbuild: the <title> in public/index.html does not match home.title in src/data/seo.json");
}

const resumeUrl = `${seo.siteUrl}${seo.resume.path}`;
let resume = html;
resume = replaceOnce(resume, /(<title>)[^<]*(<\/title>)/, seo.resume.title, "<title>");
resume = replaceOnce(resume, metaContent("description"), seo.resume.description, "meta description");
resume = replaceOnce(resume, /(<link rel="canonical" href=")[^"]*(")/, resumeUrl, "canonical link");
resume = replaceOnce(resume, metaContent("og:url"), resumeUrl, "og:url");
resume = replaceOnce(resume, metaContent("og:title"), seo.resume.title, "og:title");
resume = replaceOnce(resume, metaContent("og:description"), seo.resume.description, "og:description");
resume = replaceOnce(resume, metaContent("twitter:title"), seo.resume.title, "twitter:title");
resume = replaceOnce(resume, metaContent("twitter:description"), seo.resume.description, "twitter:description");

fs.writeFileSync(path.join(buildDir, "resume.html"), resume);
console.log("postbuild: wrote build/resume.html");
