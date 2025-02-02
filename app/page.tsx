import { Particles } from "./components/particles"
import { Hero } from "./components/hero"
import { VideoSection } from "./components/video-section"
import { ContactSection } from "./components/contact-section"
import { Footer } from "./components/footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Particles className="absolute inset-0 -z-10 animate-fade-in" />
      <Hero />
      <VideoSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

