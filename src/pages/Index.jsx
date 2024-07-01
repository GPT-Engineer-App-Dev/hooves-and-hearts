import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Index = () => {
  return (
    <div className="space-y-12">
      <section className="text-center space-y-4">
        <AspectRatio ratio={16 / 9}>
          <img src="/images/hero-horse.jpg" alt="Hero Horse" className="object-cover w-full h-full rounded-md" />
        </AspectRatio>
        <h1 className="text-4xl font-bold">Welcome to Horse Haven</h1>
        <p className="text-lg text-muted-foreground">Discover the beauty and majesty of horses.</p>
        <Button variant="primary" size="lg">Learn More</Button>
      </section>
    </div>
  );
};

export default Index;
