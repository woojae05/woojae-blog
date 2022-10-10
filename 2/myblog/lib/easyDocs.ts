import fs from "fs";
import path from "path";
import matter from "gray-matter"

export interface DocType {
    slug: string,
    data: { [key: string]: any; },
    content: string
}

const docsDirectory = path.resolve("__posts")
export const getPostBySlug = (slug: string): DocType => {
    const realSlug = slug.replace(/\.md$/, '');
    const post = fs.readFileSync(`./__posts/${realSlug}.md`, "utf-8")
    const { data, content } = matter(post)
    return { slug: realSlug, data, content }
}

export const getAllDocs = () => {
    const slugs = fs.readdirSync(docsDirectory);
    return slugs.map((slug) => getPostBySlug(slug))
}