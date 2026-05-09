import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import SpendForm from "../components/SpendForm";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 pt-16 pb-32">
        <Hero />

        <div className="mt-28 max-w-4xl mx-auto">
          <SpendForm />
        </div>
      </section>
    </main>
  );
}