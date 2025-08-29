import NavLink from "@/components/NavLink";
import { GalleryMetadata } from "@/interfaces/gallery";
import { FaChevronLeft } from "react-icons/fa6";

export default function PageView({
  children,
  metadata,
}: {
  children: any;
  metadata: GalleryMetadata;
}) {
  return (
    <div className="flex justify-center h-[100%] bg-black">
      <NavLink back>
        <div className="bg-white shadow-md p-4 rounded-xl w-fit m-8">
          <FaChevronLeft />
        </div>
      </NavLink>
      {metadata.type === "image" && (
        <div
          style={{
            background: `url('${metadata.thumbnail}')`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
          className="h-[100%] w-[100%]"
        />
      )}
      {metadata.type === "interactive" && children}
    </div>
  );
}
