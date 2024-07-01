import { AspectRatio } from "@/components/ui/aspect-ratio";

const Gallery = () => {
  return (
    <div className="space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <AspectRatio ratio={16 / 9}>
            <img src="/images/gallery-horse-1.jpg" alt="Gallery Horse 1" className="object-cover w-full h-full rounded-md" />
          </AspectRatio>
          <AspectRatio ratio={16 / 9}>
            <img src="/images/gallery-horse-2.jpg" alt="Gallery Horse 2" className="object-cover w-full h-full rounded-md" />
          </AspectRatio>
          <AspectRatio ratio={16 / 9}>
            <img src="/images/gallery-horse-3.jpg" alt="Gallery Horse 3" className="object-cover w-full h-full rounded-md" />
          </AspectRatio>
        </div>
      </section>
    </div>
  );
};

export default Gallery;