import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  const slugify = (children: any) => {
    return children.split(" ").join("-").toLowerCase();
  };

  return {
    h1: ({ children }) => (
      <a href={`#${slugify(children)}`}>
        <h1 id={slugify(children)} className="group items-center">
          {children}
          <span className="opacity-0 group-hover:opacity-50">
            {" "}
            #{slugify(children)}
          </span>
        </h1>
      </a>
    ),

    h2: ({ children }) => (
      <a href={`#${slugify(children)}`}>
        <h2 id={slugify(children)} className="group items-center">
          {children}
          <span className="opacity-0 group-hover:opacity-50 hover:opacity-0">
            {" "}
            #{slugify(children)}
          </span>
        </h2>
      </a>
    ),

    h3: ({ children }) => (
      <a href={`#${slugify(children)}`}>
        <h3 id={slugify(children)} className="group items-center">
          {children}
          <span className="opacity-0 group-hover:opacity-50">
            {" "}
            #{slugify(children)}
          </span>
        </h3>
      </a>
    ),

    ...components,
  };
}
