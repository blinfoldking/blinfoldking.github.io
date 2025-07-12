import blogService from "@/services/blog";
import BlogList from "./list";

export default async function Blog() {
  const posts = await blogService.getPosts();

  return (
    <>
      <BlogList posts={posts} />
    </>
  );
}
