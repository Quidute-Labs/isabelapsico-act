import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Intro } from "@/components/landing/Intro";
import { ComoFunciona } from "@/components/landing/ComoFunciona";
import { QuemSouEu } from "@/components/landing/QuemSouEu";
import { Instagram } from "@/components/landing/Instagram";
import { Footer } from "@/components/landing/Footer";
import { WhatsAppFab } from "@/components/landing/WhatsAppFab";

const WHATSAPP_NUMBER = "5521984601970";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar whatsappUrl={WHATSAPP_URL} />
      <main>
        <Hero whatsappUrl={WHATSAPP_URL} />
        <Intro />
        <ComoFunciona />
        <QuemSouEu />
        <Instagram />
      </main>
      <Footer whatsappUrl={WHATSAPP_URL} />
      <WhatsAppFab whatsappUrl={WHATSAPP_URL} />
    </div>
  );
}
