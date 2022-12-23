import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
// import unified from 'unified';
// import parse from 'remark-parse';
// import remark2react from 'remark-react';

/**
 * _pages and _pages/dynamic directory where the markdown content will live
 * _pages will have the home.md (aka index or /)
 * _pages/dynamic will be home to all other pages (aka [slug].js)
 */
const pagesDirectory = join(process.cwd(), 'src/data');
const dynamicPagesDirectory = join(pagesDirectory, 'blog');

/**
 * Gets all the files (slugs) in a directory
 */
export function getSlugsFromDirectory(dir) {
  return fs.readdirSync(dir);
}

/**
 * Gets the contents of a file
 * The gray-matter (metadata at the top of the file) will be
 * added to the item object, the content will be in
 * item.content and the file name (slug) will be in item.slug.
 */
export function getBySlug(dir, slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(dir, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  // const contentHtml = getContentHTML(content)

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    // if (field === 'date') {
    //   items[field] = date;
    // }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

// export async function getContentHTML(content) {
//   // const { remark } = await import('../unified.mjs')
//   const processedContent = await remark()
//     .use(html)
//     .process(content);
//   const contentHtml = processedContent.toString();

//   // Combine the data with the id and contentHtml
//   return contentHtml;
// }

/**
 * Returns contents of a page in the _pages directory
 */
export function getPageContentBySlug(slug, fields = []) {
  return getBySlug(pagesDirectory, slug, fields);
}

/**
 * Returns contents of a page in the _pages/dynamic directory
 */
export function getDynamicPageContentBySlug(slug, fields = []) {
  return getBySlug(dynamicPagesDirectory, slug, fields);
}

/**
 * Returns a list of all the pages in the _pages/dynamic directory
 */
export function getAllDynamicPages(fields = []) {
  const slugs = getSlugsFromDirectory(dynamicPagesDirectory);
  const pages = slugs.map((slug) => getDynamicPageContentBySlug(slug, fields));
  return pages;
}
