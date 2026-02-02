export const site = {
  name: "Alicia Wang",
  title: "Frontend / Full Stack Developer",
  location: "Adelaide, Australia",
  email: "alicia.wangf@gmail.com",
  linkedin: "https://www.linkedin.com/in/fengxia-wang-8b85191b2/",
  summary:
    "Frontend developer with 6+ years of experience delivering high-quality web solutions for global brands. Strong in Vue.js and React, focused on building fast, accessible, user-friendly interfaces. Comfortable working end-to-end, collaborating with product/design, and shipping reliably.",
  skills: [
    "Vue.js",
    "React",
    "JavaScript",
    "TypeScript",
    "HTML/CSS",
    "Node.js",
    "WordPress",
    "AWS",
    "CI/CD",
    "GitHub",
    "SEO",
  ],
  projects: [
    {
      name: "Nike China Official Website",
      org: "Shanghai Baozun E-Commerce Co., Ltd",
      description:
        "Delivered the official Nike China e-commerce website, improving user experience and operational efficiency for a global sports brand.",
      tags: ["Vue.js", "React", "E-commerce"],
      link: "",
    },
    {
      name: "Adidas China Official Website",
      org: "Shanghai Baozun E-Commerce Co., Ltd",
      description:
        "Built and maintained the official Adidas China website, focusing on responsive design and a seamless user journey.",
      tags: ["Vue.js", "JavaScript", "Responsive Design"],
      link: "",
    },
    {
      name: "Louis Vuitton China Website",
      org: "Shanghai Baozun E-Commerce Co., Ltd",
      description:
        "Developed the luxury brand's Chinese web presence, ensuring premium UX aligned with brand standards.",
      tags: ["Vue.js", "React", "High-end Design"],
      link: "",
    },
    {
      name: "Disney WeChat Mini Program",
      org: "Shanghai Baozun E-Commerce Co., Ltd",
      description:
        "Created a WeChat Mini Program for the Chinese market with interactive mobile experiences.",
      tags: ["WeChat", "JavaScript", "Mobile"],
      link: "",
    },
  ],
  experience: [
    {
      role: "Full Stack Software Engineer",
      company: "OceaniaCloud Services Pty Ltd",
      period: "Dec 2024 – Present",
      bullets: [
        "Building and maintaining hosting infrastructure and client websites",
        "Developing responsive UI with Vue.js and React",
        "Designing AWS cloud infrastructure (EC2, S3, Route53)",
        "Implementing CI/CD pipelines with GitHub Actions",
        "Optimizing eCommerce websites for conversion and performance",
      ],
    },
    {
      role: "Web Developer",
      company: "Shanghai Baozun E-Commerce Co., Ltd",
      period: "Aug 2016 – May 2022",
      bullets: [
        "Developed new projects and maintained existing applications",
        "Delivered key projects for Nike, Adidas, and Louis Vuitton China",
        "Built responsive, high-performance user interfaces",
        "Collaborated with international design and engineering teams",
      ],
    },
  ],
  education: [{ degree: "Master of Information Technology", school: "Chizhou University" }],
} as const;
