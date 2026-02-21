"use client";

import NavLink from "@/components/NavLink";
import { BlogMetadata } from "@/interfaces/blog";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import BlogPreview from "./preview";
import { useMeasure } from "@uidotdev/usehooks";

export default function BlogList({ posts }: { posts: BlogMetadata[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPost, setSelectedPost] = useState<BlogMetadata | null>(null);
  const [filteredPosts, setFilteredPosts] = useState<BlogMetadata[]>([]);

  useEffect(() => {
    if (!searchQuery) {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(
        posts.filter((post) => post.slug.indexOf(searchQuery) >= 0),
      );
    }
  }, [searchQuery]);

  const [ref, { width, height }] = useMeasure();

  return (
    <div className="bg-white h-[100%] w-[100%] flex overflow-hidden justify-center items-center">
      <div className="sm:w-[100%] md:w-[100vw] h-[100%] border-r-1 border-dashed pl-4 z-10 flex flex-col justify-center items-center">
        <div className="rounded-full border-1 border-gray-500 pl-5 pr-5 inset-shadow-xs flex items-center">
          <FaSearch className="text-gray-500" />
          <input
            className="ml-4 border-none w-[100%]"
            placeholder="search here..."
            onChange={(e) => setSearchQuery(e.target.value)}
          ></input>
        </div>
        <div className="flex-col flex pt-4 w-[100%]">
          {filteredPosts.length ? (
            filteredPosts.map((post, i) => {
              return (
                <div
                  key={post.slug}
                  className={`w-[100%] ${i % 2 == 1 ? "bg-gray-300" : "bg-white"} group  border-dashed border-t border-b`}
                  onClick={() => setSelectedPost(post)}
                >
                  <div
                    className={`group-hover:bg-black group-hover:text-white ${post.slug === selectedPost?.slug && 'bg-black text-white'}`}
                  >
                    <div
                      className="pl-2 no-underline w-[100%] block overflow-hidden text-ellipsis"
                    >
                      {post.slug}
                    </div>
                  </div>
                  {post.slug === selectedPost?.slug &&

                    <div className="border-l-1 border-dashed z-10" >
                      <div className="z-20 p-4 absolute bg-gradient-to-r from-white via-white to-transparent" ref={ref}>

                        <h1>{selectedPost.title}</h1>

                        <p className="p-4 prose prose-sm">{selectedPost.description}</p>

                        <NavLink link target={`/blog/${selectedPost.slug}`} className="border-b-1 border-dashed">Read More</NavLink>

                      </div>
                      <div
                        style={{
                          minWidth: width ? `${width}px` : "0",
                          minHeight: `${height}px`,
                          background: selectedPost.bg && `url('${selectedPost.bg}')`,
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      ></div>
                    </div>
                  }
                </div>
              );
            })
          ) : (
            <div className="prose flex flex-col justify-center items-center h-[100%]">
              no posts found :(
            </div>
          )}
        </div>
      </div>
      {
        // <div className="absolute h-[100%] w-[100%] sm:hidden md:block">
        //         {selectedPost ? (
        //           <BlogPreview post={selectedPost}></BlogPreview>
        //         ) : (
        //           <div className="h-[100%] w-[100%] flex justify-center items-center">
        //             <h1 className="text-4xl opacity-50">Select a Post</h1>
        //           </div>
        //         )}
        //       </div>

      }
    </div>
  );
}
