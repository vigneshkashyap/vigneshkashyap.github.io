/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Vignesh's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Vignesh Kashyap Portfolio",
    type: "website",
    url: "https://vigneshkashyap.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Vignesh Kashyap",
  logo_name: "VK",
  nickname: "Vignesh",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/13ecHiRjGFfEzOrnexwJWSJOY04HJZEhj/view?usp=drive_link",
  portfolio_repository: "",
  githubProfile: "https://github.com/vigneshkashyap",
  roles: ["Software Engineer", "Tech Enthusiast"],
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/vigneshkashyap",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/vigneshkashyap/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:vignesh.t.kashyap@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://x.com/kashyap_vignesh",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/vigneshkashyap1/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/vigneshkashyap/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Software Engineering",
      fileName: "FullStackImg",
      skills: [
        "⚡  Experienced Full Stack engineer using React, Angular, Node.js and Spring Boot",
        "⚡  Design Patterns and architecture for micro-services",
        "⚡  Experienced in Kubernetes, Docker, OpenShift, Consul",
        "⚡  Proficient with Databases such as MySQL, Oracle, Cassandra, Redis",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "ant-design:java-outlined",
          style: {
            color: "#ffffff",
          },
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "bxl:spring-boot",
          style: {
            color: "#00FF00",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#ffffff",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "vscode-icons:file-type-angular",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "logos:redis",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Cassandra",
          fontAwesomeClassname: "devicon-plain:cassandra",
          style: {
            color: "#4285f4",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "logos:mysql",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Oracle DB",
          fontAwesomeClassname: "devicon:oracle",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "HDFS",
          fontAwesomeClassname: "devicon:hadoop-wordmark",
          style: {
            color: "#2C8EBB",
          },
        },

        {
          skillName: "Presto",
          fontAwesomeClassname: "logos:presto-icon",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Spark",
          fontAwesomeClassname: "logos:apache-spark",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "logos:kubernetes",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Consul",
          fontAwesomeClassname: "devicon-plain:consul-wordmark",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Machine Learning & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Experience working on Forecasting projects using Clustering",
        "⚡ Experience working on NLP for chat-bot integrations using PyTorch",
        "⚡ Possess the knowledge of GANs and LLMs",
      ],
      softwareSkills: [
        // {
        //   skillName: "Tensorflow",
        //   fontAwesomeClassname: "logos-tensorflow",
        //   style: {
        //     backgroundColor: "transparent",
        //   },
        // },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    // {
    //   title: "Cloud Engineering",
    //   fileName: "CloudInfraImg",
    //   skills: [
    //     "⚡ Experience working on multiple cloud platforms",
    //     "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
    //     "⚡ Deploying deep learning models on cloud to use on mobile devices",
    //     "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "GCP",
    //       fontAwesomeClassname: "simple-icons:googlecloud",
    //       style: {
    //         color: "#4285F4",
    //       },
    //     },
    //     {
    //       skillName: "AWS",
    //       fontAwesomeClassname: "simple-icons:amazonaws",
    //       style: {
    //         color: "#FF9900",
    //       },
    //     },
    //     {
    //       skillName: "Azure",
    //       fontAwesomeClassname: "simple-icons:microsoftazure",
    //       style: {
    //         color: "#0089D6",
    //       },
    //     },
    //     {
    //       skillName: "Firebase",
    //       fontAwesomeClassname: "simple-icons:firebase",
    //       style: {
    //         color: "#FFCA28",
    //       },
    //     },
    //     {
    //       skillName: "PostgreSQL",
    //       fontAwesomeClassname: "simple-icons:postgresql",
    //       style: {
    //         color: "#336791",
    //       },
    //     },
    //     {
    //       skillName: "MongoDB",
    //       fontAwesomeClassname: "simple-icons:mongodb",
    //       style: {
    //         color: "#47A248",
    //       },
    //     },
    //     {
    //       skillName: "Docker",
    //       fontAwesomeClassname: "simple-icons:docker",
    //       style: {
    //         color: "#1488C6",
    //       },
    //     },
    //     {
    //       skillName: "Kubernetes",
    //       fontAwesomeClassname: "simple-icons:kubernetes",
    //       style: {
    //         color: "#326CE5",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "Texas A&M University",
      subtitle: "M.S. in Computer Science",
      logo_path: "tamu.png",
      alt_name: "TAMU",
      duration: "2024 - 2026 (Expected)",
      descriptions: [
        "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to NLP, Deep Learning etc.",
        // "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
        // "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
      ],
      website_link: "https://engineering.tamu.edu/cse/index.html",
    },
    {
      title: "Delhi Technological University (Formerly DCE)",
      subtitle: "B.Tech. in Software Engineering",
      logo_path: "dtu.png",
      alt_name: "DTU",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, Object Oriented Software Engineering etc.",
        "⚡ Apart from this, I have done courses on Pattern Recognition, Machine Learning, Natural Language Processing.",
        "⚡ I have been part of research projects involving Machine Learning",
      ],
      website_link: "https://dtu.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/HXCCBXGB7PFM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Neural Networks with PyTorch",
      subtitle: "- IBM",
      logo_path: "ibm.jpg",
      certificate_link:
        "https://coursera.org/share/a42baaeabe1a61beead582538b67847d",
      alt_name: "IBM",
      color_code: "#00000099",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked at the largest Indian Telecom company as a Software Engineer, architected multiple micro-services and worked as SME for the services, introduced multiple technologies to boost business and ensure reliable engineering standards. Additionally, I have worked as a MLE during my Internship.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Engineer",
          company: "Airtel Digital",
          company_url: "https://www.airtel.in/",
          logo_path: "airtel.png",
          duration: "July 2022 - July 2024",
          location: "Gurugram, HR, India",
          description:
            "Worked on SMS and WhatsApp communication team for Airtel. Spearheaded the micro-services for Payments, Notifications, Chat-Bot integrations. Worked on Big Data Projects",
          color: "#ffffff",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Machine Learning Intern",
          company: "Tech Mahindra Inc.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tech_mahindra.png",
          duration: "Dec 2020 - Jan 2021",
          location: "Bengaluru, India",
          description:
            "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
          color: "#000000",
        },
        // {
        //   title: "Data Science Research Intern",
        //   company: "Delhivery Pvt. Ltd.",
        //   company_url: "https://www.delhivery.com/",
        //   logo_path: "delhivery_logo.png",
        //   duration: "May 2019 - Sept 2019",
        //   location: "Gurgaon, Haryana",
        //   description:
        //     "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
        //   color: "#ee3c26",
        // },
        // {
        //   title: "Data Science Intern",
        //   company: "Intel Indexer LLC",
        //   company_url:
        //     "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
        //   logo_path: "intel_logo.jpg",
        //   duration: "Nov 2018 - Dec 2018",
        //   location: "Work From Home",
        //   description:
        //     "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
        //   color: "#0071C5",
        // },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "dcgan-fruits",
      name:
        "Image Generation Using Deep Convolutional Generative Adversarial Networks",
      createdAt: "2023-07-02T00:00:00Z",
      description:
        "Paper published in Research Advances in Intelligent Computing, Volume 1, CRC Press",
      url: "https://doi.org/10.1201/9781003320340",
    },
    {
      id: "software-defect-predeiction-sampling",
      name:
        "Comparative study of Sampling Techniques for Software Defect Prediction",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Paper published in ICACCS, Coimbatore",
      url: "10.1109/ICACCS54159.2022.9785238",
    },
    // {
    //   id: "consistency-models",
    //   name: "Consistency Models",
    //   createdAt: "2023-10-12T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/consistency-models/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "vignesh.jpg",
    // description:
    // "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
