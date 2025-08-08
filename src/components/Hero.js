import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const iconFor = (label) => {
  switch (label) {
    case "GitHub":   return <FiGithub size={22} />;
    case "LinkedIn": return <FiLinkedin size={22} />;
    case "Email":    return <FiMail size={22} />;
    default:         return null;
  }
};

export default function Hero({ name = "", title = "", about = "", links = {} }) {
  const entries = (links && typeof links === "object") ? Object.entries(links) : [];

  return (
    <section className="space-y-4">
      <h1 className="text-4xl font-bold text-black dark:text-white">{name}</h1>
      <h2 className="text-xl text-gray-700 dark:text-gray-400">{title}</h2>
      <p className="text-lg text-gray-800 dark:text-gray-300">{about}</p>

      {entries.length > 0 && (
        <div className="flex items-center gap-5">
          {entries.map(([label, url]) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              {iconFor(label) ?? <span className="text-sm">{label}</span>}
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
