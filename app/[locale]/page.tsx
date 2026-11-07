import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

type PageProps = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <section
          id="education"
          className="mx-auto flex max-w-[1200px] flex-wrap gap-14 px-5 py-14 sm:px-10 sm:py-20 lg:py-[104px]"
        >
          <Experience />
          <Education />
        </section>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
