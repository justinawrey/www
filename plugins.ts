import type { Plugin } from "$fresh/server.ts";

// First-party plugins
import twind from "$fresh/plugins/twind.ts";
import twindConfig from "./twind.config.ts";

// Custom plugins
import clickAnimation from "@plugins/click-animation.ts";

const plugins: Plugin[] = [
  twind(twindConfig),
  clickAnimation(),
];

export default plugins;
