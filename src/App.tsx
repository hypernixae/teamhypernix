import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Performance } from "./components/Performance";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="dark min-h-screen cloud-gradient">
      <Navigation />
      <Hero />
      <Features />
      <Performance />
      <Footer />
    </div>
  );
}
