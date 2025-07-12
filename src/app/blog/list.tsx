"use client";

import NavLink from "@/components/NavLink";
import { BlogMetada } from "@/interfaces/blog";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import BlogPreview from "./preview";

export default function BlogList({ posts }: { posts: BlogMetada[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPost, setSelectedPost] = useState<BlogMetada | null>(null);
  const [filteredPosts, setFilteredPosts] = useState<BlogMetada[]>([]);

  useEffect(() => {
    if (!searchQuery) {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(
        posts.filter((post) => post.slug.indexOf(searchQuery) >= 0),
      );
    }
  }, [searchQuery]);

  return (
    <div className="bg-white h-[100%] w-[100%] flex overflow-hidden">
      <div className="sm:w-[100%] md:w-[33%] h-[100%] border-r-1 border-dashed p-4">
        <div className="rounded-full border-1 border-gray-500 pl-5 pr-5 inset-shadow-xs flex items-center">
          <FaSearch className="text-gray-500" />
          <input
            className="ml-4 border-none w-[100%]"
            placeholder="search here..."
            onChange={(e) => setSearchQuery(e.target.value)}
          ></input>
        </div>
        <div className="flex-col flex pt-4 h-[100%] w-[100%]">
          {filteredPosts.length ? (
            filteredPosts.map((post, i) => {
              return (
                <div
                  className={`w-[100%] ${i % 2 == 1 ? "bg-gray-300" : "bg-white"} border-b-1 border-dashed`}
                  key={post.slug}
                  onMouseOver={() => setSelectedPost(post)}
                >
                  <NavLink
                    link
                    key={post.slug}
                    target={`/blog/${post.slug}`}
                    className="pl-2 no-underline w-[100%] block"
                  >
                    {post.slug}
                  </NavLink>
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
      <div className="h-[100%] w-[100%] sm:hidden md:block">
        {selectedPost ? (
          <BlogPreview post={selectedPost}></BlogPreview>
        ) : (
          <div className="h-[100%] w-[100%] flex justify-center items-center">
            <h1 className="text-4xl opacity-50">Select a Post</h1>
          </div>
        )}
      </div>
    </div>
  );
}
