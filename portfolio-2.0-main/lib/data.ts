import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'yamunakopp@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Yamuna Koppala, I am reaching out to you because...',

    oldPortfolio: 'https://www.legacy.me.toinfinite.dev',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/Tajmirul' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/tajmirul' },
    { name: 'facebook', url: 'https://www.facebook.com/tajmirul.2000' },
    { name: 'Old Version', url: GENERAL_INFO.oldPortfolio },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'Javascript',
            icon: '/logos/js.png',
        },
        {
            name: 'Typescript',
            icon: 'https://gopithumula0611.github.io/my-portfolios/logos/ts.png',
        },
        {
            name: 'React',
            icon: '/logos/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logos/next.png',
        },
        {
            name: 'Redux',
            icon: '/logos/redux.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logos/tailwind.png',
        },
        {
            name: 'GSAP',
            icon: '/logos/gsap.png',
        },
        {
            name: 'Frammer Motion',
            icon: '/logos/framer-motion.png',
        },
        {
            name: 'SASS',
            icon: '/logos/sass.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logos/bootstrap.svg',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logos/node.png',
        },
        {
            name: 'Nest.js',
            icon: '/logos/nest.svg',
        },
        {
            name: 'Express.js',
            icon: '/logos/express.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logos/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logos/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logos/mongodb.svg',
        },
        {
            name: 'Prisma',
            icon: '/logos/prisma.png',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logos/git.png',
        },
        {
            name: 'Docker',
            icon: '/Logos/docker.svg',
        },
        {
            name: 'AWS',
            icon: '/Logos/AWS.png',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Epikcart',
        slug: 'epikcart',
        techStack: [
            'React',
            'Redux',
            'React i18n',
            'Tailwind CSS',
            'Framer Motion',
            'debouncing',
            'Api Integration',
        ],
        thumbnail: '/projects/thumbnail/epikcart.jpg',
        longThumbnail: '/projects/long/epikcart.jpg',
        images: [
            '/projects/images/epikcart-1.png',
            '/projects/images/epikcart-2.png',
            '/projects/images/epikcart-3.png',
            '/projects/images/epikcart-4.png',
            '/projects/images/epikcart-5.png',
        ],
        liveUrl: 'https://demo.epikcart.siphertech.com/',
        year: 2023,
        description: `Epikcart is a feature-rich, scalable e-commerce platform tailored for large businesses. It features dynamic product filtering, multi-language support with RTL, advanced inventory management, order tracking, and refund systems, offering a comprehensive solution for multi-vendor operations.`,
        role: `As the frontend developer in a team of five, I:\n- Built the frontend from scratch using React, Redux, RTK Query, and Tailwind CSS.\n- Developed dynamic filtering logic for the product search page with admin-configurable parameters.\n- Integrated multi-language support with React i18n, including RTL handling.\n- Delivered a responsive, user-friendly interface in collaboration with the UI/UX designer.\n`,
    },
    {
        title: 'Resume Roaster',
        slug: 'resume-roaster',
        techStack: [
            'GPT-4',
            'Next.js',
            'Postgressql',
            'Prisma',
            'Tailwind CSS',
        ],
        thumbnail: '/projects/thumbnail/resume-roaster.jpg',
        longThumbnail: '/projects/long/resume-roaster.jpg',
        images: [
            '/projects/images/resume-roaster-1.png',
            '/projects/images/resume-roaster-2.png',
            '/projects/images/resume-roaster-3.png',
        ],
        liveUrl: 'https://resume-roaster.vercel.app/',
        year: 2023,
        description:
            'Resume Roaster is a web application designed to provide tailored resume feedback and professional writing services. Built with Next.js, PostgreSQL, Prisma, and Tailwind CSS, it integrates GPT-4 for AI-powered recommendations. The platform also includes peer-to-peer reviews with a points-based system, fostering a collaborative and engaging experience. Targeting freshers, experienced professionals, and programmers, it helps optimize resumes for job-specific success.',
        role: `As the sole developer and business owner, I:\n- Designed and developed the platform end-to-end using Next.js, PostgreSQL, Prisma, and Tailwind CSS.\n- Integrated GPT-4 for AI-driven feedback and insights.\n- Implemented complex SQL queries, including one to identify the top two resumes based on user points.`,
    },
    {
        title: 'Real Estate',
        slug: 'property-pro',
        techStack: [
            'React.js',
            'Redux',
            'Tailwind CSS',
            'React i18n',
            'Framer Motion',
        ],
        thumbnail: '/projects/thumbnail/property-pro.jpg',
        longThumbnail: '/projects/long/property-pro.jpg',
        images: [
            '/projects/images/property-pro-1.png',
            '/projects/images/property-pro-2.png',
            '/projects/images/property-pro-3.png',
        ],
        liveUrl: 'https://demo.propertypro.siphertech.com/',
        year: 2023,
        description:
            'PropertyPro is a real estate management platform offering users a seamless experience to explore, manage, and view property listings. The application emphasizes accessibility and responsive design, ensuring a smooth interface across devices.',
        role: `As the frontend developer, I:\n- Built the frontend using React, Redux, RTK Query, Framer Motion, and Tailwind CSS.\n- Integrated dynamic state management for efficient handling of property data.\n- Implemented multi-language support with React i18n to cater to diverse audiences.\n- Enhanced user interaction with animations and transitions using Framer Motion.`,
    },
    {
        title: 'Consulting Finance',
        slug: 'crenotive',
        techStack: ['HTML', 'CSS & SCSS', 'Javascript', 'Bootstrap'],
        thumbnail: '/projects/thumbnail/consulting-finance.jpg',
        longThumbnail: '/projects/long/consulting-finance.jpg',
        images: [
            '/projects/images/consulting-finance-1.png',
            '/projects/images/consulting-finance-2.png',
            '/projects/images/consulting-finance-3.png',
        ],
        sourceCode: 'https://github.com/Tajmirul/crenotive',
        liveUrl: 'https://crenotive.netlify.app/',
        year: 2023,
        description:
            'I developed Crenotive, a portfolio website using Html, SASS, and jQuery to showcase services and expertise. The design focuses on responsive user experience and effective presentation of professional achievements.',
        role: ``,
    },
    {
        title: 'devLinks',
        slug: 'devLinks',
        techStack: ['Next.js', 'Formik', 'Drag & Drop', 'Tailwind CSS'],
        thumbnail: '/projects/thumbnail/devLinks.jpg',
        longThumbnail: '/projects/long/devLinks.jpg',
        images: [
            '/projects/images/devLinks-1.png',
            '/projects/images/devLinks-2.png',
            '/projects/images/devLinks-3.png',
        ],
        sourceCode: 'https://github.com/Tajmirul/devsLink',
        liveUrl: 'https://devlinks-demo.vercel.app/auth/signin',
        year: 2023,
        description:
            'One of the most challenging projects in Frontend Mentor.\n\nI developed a LinkSharing App as part of the Frontend Mentor challenge, utilizing React, Redux, and Tailwind CSS to create a responsive and feature-rich platform. The app allows users to share, save, and explore links, with a focus on intuitive design and smooth navigation. Advanced state management ensures efficient data handling for user interactions.',
        role: ``,
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Software Engineer (Frontend)',
        company: 'Strativ AB',
        duration: 'Dec 2024 - Present',
    },
    {
        title: 'Frontend Developer',
        company: 'Epikcoders',
        duration: 'Oct 2023 - Nov 2024',
    },
    {
        title: 'FRONTEND ENGINEER',
        company: 'Anchorblock Technology',
        duration: 'Oct 2022 - Sep 2023',
    },
    {
        title: 'Frontend Developer (Part-time)',
        company: 'Branex IT',
        duration: 'Jan 2022 - Oct 2022',
    },
];
