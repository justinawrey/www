import type { Handlers, PageProps } from "$fresh/server.ts";
import { CSS as gfmCSS, render as gfmRender } from "gfm";
import Page from "@components/Page.tsx";
import Css from "@components/Css.tsx";
import "https://esm.sh/prismjs@1.27.0/components/prism-typescript?no-check";

export const handler: Handlers<string> = {
  async GET(_req, { params: { post }, render }) {
    const postUrl = new URL(`../../posts/${post}.md`, import.meta.url);
    const markdown = await Deno.readTextFile(postUrl);

    return render(gfmRender(markdown));
  },
};

export default function Post(
  { data }: PageProps<string>,
) {
  return (
    <>
      <Css cssText={gfmCSS} />
      <Css cssText="body { height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center }" />
      <Page>
        <div
          data-color-mode="light"
          data-light-theme="light"
          class="markdown-body !font-mono"
          dangerouslySetInnerHTML={{ __html: data }}
        />
      </Page>
    </>
  );
}
