import { BlogMetadata } from "@/interfaces/blog";

export default function BlogPreview({ post }: { post: BlogMetadata }) {
  const titleEmblem = (input: string) => {
    const s = input.replaceAll("_", "").replaceAll(" ", "");
    const len = s.length;
    const section = len / 3;

    let res = [];
    for (let i = 0; i < section; i++) {
      res.push(s.substring(i * 3, i * 3 + 3));
    }

    return res;
  };
  return (
    <div className={`h-[100%] w-[100%] animate-appear-500`}>
      <div
        className="h-[50%]"
        style={{
          background: post.bg && `center / cover no-repeat url('${post.bg}')`,
        }}
      >
        <div className="h-[100%] bg-linear-to-t from-white to-transparent"></div>
      </div>
      <div className="h-[50%] bg-white">
        <div className="bg-black text-white text-4xl pl-8 overflow-hidden text-ellipsis">
          {post.title}
        </div>
        <div className="p-8 flex justify-start">
          <div className="w-[45%]">{post.description}</div>
          <div className="w-[10%]"></div>
          <div className="w-[45%] font-epetri flex flex-col opacity-25 wrap-anywhere">
            {post.description}
          </div>
        </div>
      </div>
    </div>
  );
}
