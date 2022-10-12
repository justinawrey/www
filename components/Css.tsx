import { FunctionComponent } from "preact";
import { Head } from "$fresh/runtime.ts";

interface ICSS {
  cssText: string;
}

// Is this a hack? I don't know lol?
const Css: FunctionComponent<ICSS> = ({ cssText }) => {
  return (
    <Head>
      <style>
        {cssText}
      </style>
    </Head>
  );
};

export default Css;
