import { AspectRatio } from "@/components/ui/aspect-ratio";

const About = () => {
  return (
    <div className="space-y-12">
      <section className="text-center space-y-4">
        <AspectRatio ratio={16 / 9}>
          <img src="/images/about-horse.jpg" alt="About Horse" className="object-cover w-full h-full rounded-md" />
        </AspectRatio>
        <h1 className="text-4xl font-bold">About Horses</h1>
        <p className="text-lg text-muted-foreground">
          Horses have been an integral part of human history for thousands of years. They have been used for transportation, work, and companionship. Their beauty and grace have also made them a favorite subject in art and literature.
        </p>
      </section>
    </div>
  );
};

export default About;