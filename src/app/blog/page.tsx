import path from "path";
import fs from "fs";
import NavLink from "@/components/NavLink";

export default function Blog() {
  const files = fs.readdirSync(path.join(process.cwd(), "posts"));
  return (
    <div>
      {files.map((file) => {
        const target = file.split(".")[0];

        return (
          <NavLink
            link
            key={file}
            target={`/blog/${target}`}
            className="underline"
          >
            {target}
          </NavLink>
        );
      })}
    </div>
  );
}
