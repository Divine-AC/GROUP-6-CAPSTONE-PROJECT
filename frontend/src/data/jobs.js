
const locations = [
  "Lagos",
  "Abuja",
  "Ogun",
  "Oyo",
  "Rivers",
];

const roles = [
  {
    title: "Frontend Developer",
    category: "Software Development",
    minExperience: 0,
    maxExperience: 2,
    salary: [250000, 450000],
    skills: ["React", "JavaScript", "CSS", "Git"],
    description:
      "Build responsive and accessible user interfaces using React. Collaborate with designers and backend engineers, maintain reusable components, and improve application performance.",
    requirements: [
      "Knowledge of HTML, CSS and JavaScript",
      "Familiarity with React",
      "Understanding of responsive design",
      "Ability to use Git",
    ],
  },
  {
    title: "Backend Developer",
    category: "Software Development",
    minExperience: 1,
    maxExperience: 3,
    salary: [300000, 600000],
    skills: ["Node.js", "Express", "MongoDB", "REST APIs"],
    description:
      "Develop and maintain server-side applications, build REST APIs, work with databases, and collaborate with frontend developers to deliver reliable software.",
    requirements: [
      "Knowledge of Node.js and Express",
      "Understanding of REST APIs",
      "Database fundamentals",
      "Familiarity with authentication",
    ],
  },
  {
    title: "Full Stack Developer",
    category: "Software Development",
    minExperience: 1,
    maxExperience: 4,
    salary: [350000, 700000],
    skills: ["React", "Node.js", "MongoDB", "Git"],
    description:
      "Contribute to both frontend and backend development, design application features, integrate APIs, and maintain scalable web applications.",
    requirements: [
      "Frontend and backend fundamentals",
      "Experience with JavaScript",
      "Database knowledge",
      "Problem-solving skills",
    ],
  },
  {
    title: "Data Analyst",
    category: "Data and Analytics",
    minExperience: 0,
    maxExperience: 2,
    salary: [200000, 400000],
    skills: ["Excel", "SQL", "Power BI", "Data Visualization"],
    description:
      "Collect, clean and analyse business data. Prepare reports and dashboards that help teams understand trends and make informed decisions.",
    requirements: [
      "Knowledge of Excel",
      "Basic SQL skills",
      "Analytical thinking",
      "Ability to communicate findings",
    ],
  },
  {
    title: "Data Scientist",
    category: "Data and Analytics",
    minExperience: 2,
    maxExperience: 5,
    salary: [450000, 900000],
    skills: ["Python", "Statistics", "Machine Learning"],
    description:
      "Develop analytical models, explore complex datasets, and communicate data-driven findings to business and technical stakeholders.",
    requirements: [
      "Python programming",
      "Statistics fundamentals",
      "Data analysis experience",
      "Knowledge of machine learning",
    ],
  },
  {
    title: "Mechanical Engineer",
    category: "Mechanical Engineering",
    minExperience: 0,
    maxExperience: 2,
    salary: [180000, 350000],
    skills: ["CAD", "Maintenance", "Engineering Design"],
    description:
      "Support equipment design, preventive maintenance, technical documentation and engineering projects while following safety and quality procedures.",
    requirements: [
      "Degree in Mechanical Engineering",
      "Engineering drawing knowledge",
      "Problem-solving skills",
      "Willingness to learn",
    ],
  },
  {
    title: "Electrical Engineer",
    category: "Electrical Engineering",
    minExperience: 1,
    maxExperience: 3,
    salary: [220000, 450000],
    skills: ["Electrical Systems", "Installation", "Troubleshooting"],
    description:
      "Assist with electrical system design, inspections, installation, troubleshooting and maintenance of electrical equipment.",
    requirements: [
      "Electrical Engineering qualification",
      "Electrical safety knowledge",
      "Technical documentation",
      "Troubleshooting ability",
    ],
  },
  {
    title: "Civil Engineer",
    category: "Civil Engineering",
    minExperience: 1,
    maxExperience: 4,
    salary: [250000, 500000],
    skills: ["AutoCAD", "Site Supervision", "Construction"],
    description:
      "Support construction projects through site inspections, technical drawings, material coordination and quality assurance.",
    requirements: [
      "Civil Engineering degree",
      "Construction fundamentals",
      "Knowledge of engineering drawings",
      "Site safety awareness",
    ],
  },
  {
    title: "Dentist",
    category: "Healthcare",
    minExperience: 1,
    maxExperience: 4,
    salary: [350000, 800000],
    skills: ["Dental Care", "Patient Assessment", "Clinical Practice"],
    description:
      "Provide oral health assessments, preventive dental care, treatment planning and patient education in a professional clinical environment.",
    requirements: [
      "Recognised dental qualification",
      "Valid professional registration",
      "Patient care skills",
      "Clinical documentation",
    ],
  },
  {
    title: "Registered Nurse",
    category: "Healthcare",
    minExperience: 0,
    maxExperience: 3,
    salary: [180000, 350000],
    skills: ["Patient Care", "Clinical Assessment", "Documentation"],
    description:
      "Provide patient care, monitor clinical conditions, administer prescribed treatments and maintain accurate medical records.",
    requirements: [
      "Recognised nursing qualification",
      "Valid professional registration",
      "Communication skills",
      "Patient safety awareness",
    ],
  },
  {
    title: "Accountant",
    category: "Accounting and Finance",
    minExperience: 1,
    maxExperience: 4,
    salary: [220000, 450000],
    skills: ["Excel", "Bookkeeping", "Financial Reporting"],
    description:
      "Maintain financial records, prepare reports, reconcile accounts and support budgeting and compliance activities.",
    requirements: [
      "Accounting or Finance degree",
      "Knowledge of accounting principles",
      "Excel proficiency",
      "Attention to detail",
    ],
  },
  {
    title: "Human Resources Officer",
    category: "Human Resources",
    minExperience: 0,
    maxExperience: 3,
    salary: [180000, 350000],
    skills: ["Recruitment", "Communication", "Employee Relations"],
    description:
      "Support recruitment, onboarding, employee records, workplace policies and staff engagement activities.",
    requirements: [
      "HR or related qualification",
      "Communication skills",
      "Organisation",
      "Confidentiality",
    ],
  },
  {
    title: "Digital Marketing Specialist",
    category: "Marketing",
    minExperience: 1,
    maxExperience: 3,
    salary: [200000, 450000],
    skills: ["SEO", "Social Media", "Analytics", "Content"],
    description:
      "Plan digital campaigns, manage online channels, analyse campaign performance and improve audience engagement.",
    requirements: [
      "Digital marketing fundamentals",
      "Content creation",
      "Analytical skills",
      "Knowledge of social platforms",
    ],
  },
  {
    title: "Sales Executive",
    category: "Sales",
    minExperience: 0,
    maxExperience: 2,
    salary: [150000, 300000],
    skills: ["Communication", "Negotiation", "Customer Relations"],
    description:
      "Identify potential customers, explain products and services, maintain client relationships and support sales targets.",
    requirements: [
      "Strong communication",
      "Customer service skills",
      "Negotiation ability",
      "Target orientation",
    ],
  },
  {
    title: "Product Designer",
    category: "Design",
    minExperience: 1,
    maxExperience: 4,
    salary: [300000, 650000],
    skills: ["Figma", "Prototyping", "User Research"],
    description:
      "Design intuitive digital experiences, create prototypes, conduct user research and collaborate with product and engineering teams.",
    requirements: [
      "Portfolio of design work",
      "Figma proficiency",
      "Understanding of UX principles",
      "Collaboration skills",
    ],
  },
  {
    title: "Cybersecurity Analyst",
    category: "Cybersecurity",
    minExperience: 1,
    maxExperience: 4,
    salary: [350000, 750000],
    skills: ["Network Security", "Monitoring", "Risk Assessment"],
    description:
      "Monitor security events, investigate potential threats, support vulnerability assessments and document security incidents.",
    requirements: [
      "Networking fundamentals",
      "Security awareness",
      "Analytical thinking",
      "Incident documentation",
    ],
  },
  {
    title: "Network Engineer",
    category: "IT and Networking",
    minExperience: 1,
    maxExperience: 4,
    salary: [250000, 550000],
    skills: ["Networking", "Routing", "Troubleshooting"],
    description:
      "Configure, maintain and troubleshoot network infrastructure while supporting reliable connectivity and system availability.",
    requirements: [
      "Networking fundamentals",
      "Troubleshooting skills",
      "Understanding of network devices",
      "Technical documentation",
    ],
  },
  {
    title: "Project Manager",
    category: "Project Management",
    minExperience: 3,
    maxExperience: 6,
    salary: [450000, 900000],
    skills: ["Planning", "Risk Management", "Communication"],
    description:
      "Coordinate project schedules, resources, stakeholder communication, progress reporting and risk management.",
    requirements: [
      "Project coordination experience",
      "Planning skills",
      "Stakeholder management",
      "Reporting skills",
    ],
  },
  {
    title: "Administrative Assistant",
    category: "Administration",
    minExperience: 0,
    maxExperience: 2,
    salary: [120000, 250000],
    skills: ["Microsoft Office", "Scheduling", "Communication"],
    description:
      "Support daily office operations, organise records, coordinate appointments and assist teams with administrative tasks.",
    requirements: [
      "Computer literacy",
      "Organisation",
      "Communication skills",
      "Attention to detail",
    ],
  },
  {
    title: "Teacher",
    category: "Education",
    minExperience: 0,
    maxExperience: 3,
    salary: [100000, 250000],
    skills: ["Lesson Planning", "Classroom Management", "Assessment"],
    description:
      "Prepare lessons, teach assigned subjects, assess learner progress and maintain a supportive learning environment.",
    requirements: [
      "Relevant teaching qualification",
      "Communication skills",
      "Lesson planning",
      "Classroom management",
    ],
  },
  {
    title: "Quantity Surveyor",
    category: "Construction",
    minExperience: 1,
    maxExperience: 4,
    salary: [250000, 550000],
    skills: ["Cost Estimation", "BOQ", "Construction"],
    description:
      "Prepare cost estimates, bills of quantities, project budgets and financial reports for construction projects.",
    requirements: [
      "Quantity Surveying qualification",
      "Cost estimation skills",
      "Attention to detail",
      "Construction knowledge",
    ],
  },
  {
    title: "Customer Support Representative",
    category: "Customer Service",
    minExperience: 0,
    maxExperience: 2,
    salary: [120000, 250000],
    skills: ["Communication", "Problem Solving", "Customer Care"],
    description:
      "Respond to customer enquiries, resolve service issues, document cases and provide helpful support across communication channels.",
    requirements: [
      "Clear communication",
      "Problem-solving ability",
      "Computer literacy",
      "Patience and professionalism",
    ],
  },
  {
    title: "Pharmacist",
    category: "Healthcare",
    minExperience: 1,
    maxExperience: 4,
    salary: [250000, 550000],
    skills: ["Medication Safety", "Patient Counselling", "Dispensing"],
    description:
      "Support safe medication use, dispense prescribed medicines, counsel patients and maintain accurate pharmaceutical records.",
    requirements: [
      "Recognised Pharmacy degree",
      "Valid professional registration",
      "Medication safety knowledge",
      "Patient communication",
    ],
  },
  {
    title: "Business Analyst",
    category: "Business Analysis",
    minExperience: 1,
    maxExperience: 4,
    salary: [300000, 650000],
    skills: ["Requirements", "Documentation", "Process Analysis"],
    description:
      "Gather business requirements, document processes, analyse operational challenges and work with technical teams on solutions.",
    requirements: [
      "Analytical thinking",
      "Requirements documentation",
      "Communication skills",
      "Problem solving",
    ],
  },
  {
    title: "Content Writer",
    category: "Media and Communications",
    minExperience: 0,
    maxExperience: 3,
    salary: [120000, 300000],
    skills: ["Writing", "Research", "Editing", "SEO"],
    description:
      "Research and create clear written content for websites, campaigns, articles and digital communication channels.",
    requirements: [
      "Strong writing skills",
      "Research ability",
      "Editing skills",
      "Portfolio of writing samples",
    ],
  },
];

const companies = [
  "BrightPath Technologies",
  "Northstar Solutions",
  "Cedarfield Group",
  "PrimeAxis Nigeria",
  "BluePeak Services",
  "VertexWorks",
  "Horizon Talent Partners",
];

const employmentTypes = [
  "Full-time",
  "Contract",
  "Part-time",
  "Internship",
];

const workModes = [
  "On-site",
  "Hybrid",
  "Remote",
];

const formatDate = (hoursAgo) => {
  const date = new Date();
  date.setHours(date.getHours() - hoursAgo);
  return date.toISOString();
};

export const jobs = roles.flatMap((role, roleIndex) =>
  locations.map((location, locationIndex) => {
    const index = roleIndex * locations.length + locationIndex;
    const id = `JRP-${String(index + 1).padStart(4, "0")}`;

    const minimum = role.salary[0] + locationIndex * 15000;
    const maximum = role.salary[1] + locationIndex * 25000;

    return {
      id,
      title: role.title,
      company: companies[index % companies.length],
      category: role.category,
      location,
      state: location === "Abuja" ? "FCT" : `${location} State`,
      minExperience: role.minExperience,
      maxExperience: role.maxExperience,
      salaryMin: minimum,
      salaryMax: maximum,
      employmentType: employmentTypes[index % employmentTypes.length],
      workMode: workModes[index % workModes.length],
      postedAt: formatDate((index * 19) % 2160),
      description: role.description,
      requirements: role.requirements,
      skills: role.skills,
      responsibilities: [
        role.description,
        "Collaborate with relevant team members and stakeholders.",
        "Prepare accurate reports and maintain professional documentation.",
        "Follow organisational policies, quality standards and safety requirements.",
      ],
      benefits: [
        "Professional development opportunities",
        "Collaborative working environment",
        "Performance feedback",
      ],
      isDemo: true,
    };
  })
);

export const categories = [
  ...new Set(roles.map((role) => role.category)),
].sort();

export const states = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
  "Abuja",
];

export const experienceOptions = [
  { label: "Any experience", value: "all" },
  { label: "0 years — Entry level", value: "0" },
  { label: "1+ years", value: "1" },
  { label: "2–4 years", value: "2-4" },
  { label: "5+ years", value: "5" },
];

export const dateOptions = [
  { label: "Any time", value: "all" },
  { label: "Last 24 hours", value: "24" },
  { label: "Last 7 days", value: "168" },
  { label: "Last 30 days", value: "720" },
  { label: "Last 3 months", value: "2160" },
];