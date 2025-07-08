import type { MDXComponents } from "mdx/types";
import Link from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  const slugify = (children: any) => {
    return children.split(" ").join("-").toLowerCase();
  };

  return {
    h1: ({ children }) => (
      <Link href={`#${slugify(children)}`}>
        <h1 id={slugify(children)} className="group items-center">
          {children}
          <span className="opacity-0 group-hover:opacity-50">
            {" "}
            #{slugify(children)}
          </span>
        </h1>
      </Link>
    ),

    h2: ({ children }) => (
      <Link href={`#${slugify(children)}`}>
        <h2 id={slugify(children)} className="group items-center">
          {children}
          <span className="opacity-0 group-hover:opacity-50">
            {" "}
            #{slugify(children)}
          </span>
        </h2>
      </Link>
    ),

    h3: ({ children }) => (
      <Link href={`#${slugify(children)}`}>
        <h3 id={slugify(children)} className="group items-center">
          {children}
          <span className="opacity-0 group-hover:opacity-50">
            {" "}
            #{slugify(children)}
          </span>
        </h3>
      </Link>
    ),

    ...components,
  };
}
