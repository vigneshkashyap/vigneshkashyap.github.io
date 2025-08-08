import React from "react";
import tamuLogo from "../assets/tamu-logo.png";
import dtuLogo from "../assets/dtu-logo.png";

const schoolLogos = {
  "Texas A&M University": tamuLogo,
  "Delhi Technological University": dtuLogo,
};


export default function Education({ education = [] }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6 text-black dark:text-white">Education</h2>
      <div className="space-y-6">
        {education.map((edu, idx) => {
          const logo = schoolLogos[edu.school];
          return (
            <div key={idx} className="flex items-center gap-4">
              {logo ? (
                <img
                  src={logo}
                  alt={`${edu.school} logo`}
                  className="w-10 h-10 object-contain"
                  loading="lazy"
                />
              ) : (
                <div className="w-10 h-10 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-semibold text-gray-700 dark:text-gray-300">
                  {edu.school[0]}
                </div>
              )}

              <div>
                <h3 className="text-lg font-semibold text-black dark:text-white">{edu.degree}</h3>
                <p className="text-gray-700 dark:text-gray-400">{edu.school} — {edu.location}</p>
                <p className="text-sm text-gray-600 dark:text-gray-500">{edu.period}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
