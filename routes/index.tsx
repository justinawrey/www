import Link from "@components/Link.tsx";
import Page from "@components/Page.tsx";
import Css from "@components/Css.tsx";

export default function Home() {
  return (
    <>
      <Css cssText="body { height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center }" />
      <Page>
        <h1 class="text-2xl">Hello!</h1>
        <p>
          My name is Justin, and I'm a software engineer specializing in all
          things related to the web. You can find my open source work on{" "}
          <Link href="https://github.com/justinawrey">Github</Link>, and subject
          yourself to my thoughts over at my{" "}
          <Link href="./blog/test-post">blog</Link>.
        </p>
      </Page>
    </>
  );
}
