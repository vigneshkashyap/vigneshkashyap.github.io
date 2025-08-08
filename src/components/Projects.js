import React from "react";
import { FiGithub } from "react-icons/fi";

export default function Projects({ projects = [] }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6 text-black dark:text-white">Projects</h2>
      <div className="space-y-8">
        {projects.map((proj, idx) => (
          <div key={idx} className="space-y-2">
            <h3 className="text-xl font-semibold flex items-center gap-3">
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-black dark:text-gray-100 dark:hover:text-white transition-colors"
              >
                {proj.name}
              </a>
              {proj.github && (
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
                  title="View on GitHub"
                >
                  <FiGithub size={20} />
                </a>
              )}
            </h3>
            <p className="text-gray-800 dark:text-gray-300">{proj.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
