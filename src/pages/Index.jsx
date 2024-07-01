import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

const Index = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <img src="/images/hero-horse.jpg" alt="Hero Horse" className="w-full h-96 object-cover" />
        <h1 className="text-5xl font-bold">Welcome to Horse Haven</h1>
        <p className="text-xl text-muted-foreground">Discover the beauty and majesty of horses</p>
      </section>

      {/* About Section */}
      <section id="about" className="space-y-4">
        <h2 className="text-3xl font-bold">About Horses</h2>
        <p className="text-lg">
          Horses have played a significant role in human history. They have been used for transportation, work, and companionship. Their beauty and grace have captivated people for centuries.
        </p>
        <img src="/images/about-horse.jpg" alt="About Horse" className="w-full h-64 object-cover" />
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="space-y-4">
        <h2 className="text-3xl font-bold">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <img src="/images/gallery-horse-1.jpg" alt="Gallery Horse 1" className="w-full h-64 object-cover" />
          <img src="/images/gallery-horse-2.jpg" alt="Gallery Horse 2" className="w-full h-64 object-cover" />
          <img src="/images/gallery-horse-3.jpg" alt="Gallery Horse 3" className="w-full h-64 object-cover" />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="space-y-4">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Input placeholder="Name" {...register("name")} />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          </div>
          <div>
            <Input placeholder="Email" {...register("email")} />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>
          <div>
            <Textarea placeholder="Message" {...register("message")} />
            {errors.message && <p className="text-red-500">{errors.message.message}</p>}
          </div>
          <Button type="submit">Send Message</Button>
        </form>
        <div>
          <p>Email: contact@horsehaven.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center space-y-2">
        <div className="flex justify-center space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <p>&copy; 2023 Horse Haven. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;