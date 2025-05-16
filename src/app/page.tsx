import { Container } from "@/components/layout/Container";
import ScrollReveal from "@/components/shared/ScrollReveal";

export default function Home() {
  return (
    <Container>
      <section className="min-h-screen flex items-center justify-center px-4 mt-[-40px] md:mt-[-60px]">
        <div
          className="
            w-full max-w-3xl
            bg-white text-black
            dark:bg-gradient-to-r dark:from-black dark:via-[#1a0d0d] dark:to-[#1c1b2e]
            dark:text-white
            rounded-xl shadow-xl border border-gray-200 dark:border-white/10
            p-6 sm:p-8 md:p-10 space-y-8
            transition-all
          "
        >
          <ScrollReveal delay={0}>
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
                Vishnu Eturi
              </h1>
              <p className="text-base md:text-xl text-gray-700 dark:text-white/90 flex flex-wrap justify-center gap-x-2 gap-y-1 items-center mb-6">
                <span>Software Engineer</span>
                <span className="text-2xl leading-none">·</span>
                <span>Marvelite</span>
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="/projects"
                  className="px-6 py-3 rounded-lg font-bold text-white bg-[#ed1d24] hover:bg-[#c71b22] transition-colors border border-transparent dark:border-white/10"
                >
                  View Projects
                </a>
                <a
                  href="/about"
                  className="px-6 py-3 rounded-lg font-bold border border-gray-300 text-black hover:bg-gray-100
                    dark:border-white/30 dark:text-white dark:hover:bg-white/10 transition-colors"
                >
                  About Me
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="border border-gray-300 dark:border-white/10 rounded-lg p-6 bg-gray-100 text-center dark:bg-white/5">
              <h2 className="text-xl font-semibold mb-2 text-black dark:text-white">GitHub Repositories</h2>
              <p className="text-gray-600 dark:text-white/80 text-sm">
                Coming soon — auto-fetched from my GitHub profile.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Container>
  );
}
