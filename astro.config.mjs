import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { RemarkNotePlugin } from "@masatomakino/qiita-to-md/bin/plugin/RemarkNotePlugin";

export default defineConfig({
    site: "https://robot-inventor.github.io",
    integrations: [sitemap(), mdx()],
    markdown: {
        shikiConfig: {
            theme: "dark-plus"
        },
        remarkPlugins: [RemarkNotePlugin.plugin],
        remarkRehype: {
            handlers: {
                note: RemarkNotePlugin.rehypeNoteHandler
            }
        }
    }
});
