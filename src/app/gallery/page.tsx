import galleryService from "@/services/gallery";
import GalleryList from "./list";

export default async function GalleryPage() {
  let data = await galleryService.getPosts();

  return (
    <div className="p-8 h-[100%]">
      <GalleryList data={data} />
    </div>
  );
}
