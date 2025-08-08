import React from "react";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ThemeToggle from "./components/ThemeToggle";
import config from "./config.json";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors">
      <ThemeToggle />
      <main className="max-w-3xl mx-auto px-4 py-12 space-y-16">
        <Hero
          name={config?.name}
          title={config?.title}
          about={config?.about}
          links={config?.links || {}}
        />
        <Experience experience={config?.experience || []} />
        <Projects projects={config?.projects || []} />
      </main>
    </div>
  );
}
