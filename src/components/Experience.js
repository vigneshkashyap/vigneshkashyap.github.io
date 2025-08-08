import React from "react";
import { FaFacebook } from "react-icons/fa";
import { SiAirtel } from "react-icons/si";

const companyIcons = {
  Meta: { icon: <FaFacebook size={22} className="text-[#1877F2]" /> },       // brand color
  "Airtel Digital": { icon: <SiAirtel size={22} className="text-[#E40046]" /> },
};

export default function Experience({ experience = [] }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6 text-black dark:text-white">Experience</h2>
      <div className="space-y-8">
        {experience.map((job, idx) => (
          <div key={idx} className="space-y-2">
            <div className="flex items-center gap-3">
              {companyIcons[job.company]?.icon}
              <div>
                <h3 className="text-xl font-semibold text-black dark:text-white">{job.role}</h3>
                <span className="text-lg font-medium text-gray-700 dark:text-gray-400">
                  {job.company}
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-500">{job.period}</p>

            <p className="leading-relaxed text-gray-800 dark:text-gray-300">
              {job.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
