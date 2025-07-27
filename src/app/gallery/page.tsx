import GalleryList from "./list";

export default function GalleryPage() {
  let mockData = [];
  for (let i = 0; i < 0; i++) {
    mockData.push({});
  }

  return (
    <div className="p-8 h-[100%]">
      <GalleryList data={mockData} />
    </div>
  );
}
