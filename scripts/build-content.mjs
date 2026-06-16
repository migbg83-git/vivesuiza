import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';

const articlesRoot = path.join(process.cwd(), 'content', 'articles');
const outputDir = path.join(process.cwd(), 'public', 'content');
const outputFile = path.join(outputDir, 'articles.json');

function getArticleFolders(rootPath) {
  if (!fs.existsSync(rootPath)) {
    return [];
  }

  return fs
    .readdirSync(rootPath, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => path.join(rootPath, entry.name));
}

function buildExcerpt(markdown, maxLength = 180) {
  const plainText = markdown
    .replace(/[#>*_`~\[\]()!-]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  return plainText.length > maxLength
    ? `${plainText.slice(0, maxLength).trim()}...`
    : plainText;
}

function buildArticle(folderPath) {
  const markdownPath = path.join(folderPath, 'article.md');

  if (!fs.existsSync(markdownPath)) {
    return null;
  }

  const raw = fs.readFileSync(markdownPath, 'utf8');
  const { data, content } = matter(raw);

  return {
    title: data.title,
    slug: data.slug,
    description: data.description,
    category: data.category,
    tags: data.tags ?? [],
    publishedAt: data.publishedAt,
    author: data.author,
    featured: Boolean(data.featured),
    html: marked(content),
    excerpt: buildExcerpt(content),
  };
}

const articles = getArticleFolders(articlesRoot)
  .map(buildArticle)
  .filter(Boolean)
  .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputFile, JSON.stringify(articles, null, 2), 'utf8');

console.log(`Generated ${articles.length} article(s) at ${outputFile}`);