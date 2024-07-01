import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div className="space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <form className="space-y-4 max-w-md mx-auto">
          <Input type="text" placeholder="Name" required />
          <Input type="email" placeholder="Email" required />
          <Textarea placeholder="Message" required />
          <Button type="submit" variant="primary" size="lg">Send Message</Button>
        </form>
        <div className="text-muted-foreground">
          <p>Email: contact@horsehaven.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;