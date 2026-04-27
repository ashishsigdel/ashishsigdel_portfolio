import Contact from "@/components/contact/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/utils/Navbar";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Ashish Sigdel",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white antialiased overflow-x-hidden">
      <Navbar />
      <Contact />
      <Footer />
    </main>
  );
}
