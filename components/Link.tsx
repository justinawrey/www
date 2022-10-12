import { type FunctionComponent } from "preact";

type LinkProps = {
  href: string;
};

const Link: FunctionComponent<LinkProps> = ({ href, children }) => {
  return <a class="underline hover:text-gray-600" href={href}>{children}</a>;
};

export default Link;
