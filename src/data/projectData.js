const projects = [
    {
        title: "Course-Flow AI",
        tags: ["React", "MongoDB", "Node.js", "Express.js", "OpenAI API"],
        description: "An AI-driven MERN web app that dynamically generates personalized course structures based on user input like topic and difficulty.",
        image: "/courseFlowAi.png",
        live: "https://course-flow-ai.anirudtate.com/",
        repo: "https://github.com/Sushils-Coding/course-flow-ai",
        problem: "Manually designing structured learning paths is time-consuming and often lacks personalization based on user needs.",
        solution: "An AI-powered platform that takes user inputs (course name & difficulty) and generates tailored course modules and learning plans instantly.",
        keyFeatures: [
            "AI-based course generation",
            "Interactive animated dashboard",
            "User authentication & course saving",
            "Dark/light mode UI"
        ],
        impact: "Empowered learners with customized pathways; reduces course planning time significantly and makes learning more accessible."
    },
    {
        title: "ToyNest – Online Toy Store",
        tags: ["React", "MongoDB", "Node.js", "Tailwind CSS", "Express.js"],
        description: "A MERN-based platform for toy rental and purchase with subscription-based access and intelligent filtering.",
        image: "/ToyNest.png",
        live: "https://toynest.vercel.app/",
        repo: "https://github.com/Sushils-Coding/Toynest",
        problem: "Parents spend heavily on toys that children outgrow quickly, leading to waste and cost inefficiency.",
        solution: "A subscription-based model allowing parents to borrow and exchange toys multiple times per month, cutting costs and reducing waste.",
        keyFeatures: [
            "₹799/month subscription with 5 toys/month",
            "Toy exchange up to 3 times/month",
            "Age-wise filtering & smart catalogue",
            "Wishlist, cart, chatbot & parental insights"
        ],
        impact: "Reduced financial burden on parents, promoted sustainable consumption, and made quality toys accessible to more families."
    },
    {
        title: "Cook Mom – Recipe Recommender",
        tags: ["React", "JavaScript", "CSS"],
        description: "A recipe recommendation web app that suggests dishes based on user preferences and choices.",
        image: "/RecipeRecommend.png",
        live: "https://recipe-recommender-bay.vercel.app/",
        repo: "https://github.com/Sushils-Coding/Recipe-Recommender",
        problem: "Users often struggle to find relevant recipes that match their tastes or available ingredients.",
        solution: "An intuitive app that filters recipes by preferences, offering tailored suggestions for home cooking.",
        keyFeatures: [
            "Taste-based recommendations",
            "Simple and clean UI",
            "Responsive design for mobile and desktop",
            "Ingredient-based suggestions"
        ],
        impact: "Helped users save time, reduce food waste, and cook meals that match their tastes and available ingredients."
    },
    {
        title: "NewsMonkey – Live News App",
        tags: ["React", "News API", "Bootstrap"],
        description: "NewsMonkey is a category-wise live news website that fetches the latest headlines using an API. It offers a clean UI, interactive experience, and real-time updates based on user-selected categories.",
        image: "/newsMonkey.png",
        // live: "https://github.com/Sushils-Coding/NewsMonkey-ReactApp",
        repo: "https://github.com/Sushils-Coding/NewsMonkey-ReactApp",
        problem: "News apps are often cluttered and lack personalized categorization for easy browsing.",
        solution: "A clean React-based web app that categorizes live news into tech, entertainment, sports, health, and more.",
        keyFeatures: [
            "Category-wise filtering",
            "Live API integration for latest headlines",
            "Smooth navigation",
            "Clean and fast UI"
        ],
        impact: "Enhanced user news consumption experience and allowed easy access to topic-specific news."
    },
    {
        title: "Bank Management System (Java Desktop App)",
        tags: ["Java", "Swing", "OOP"],
        description: "A desktop-based banking system simulation built using Java Swing. It supports account creation, deposit/withdrawal, PIN change, mini statement generation, balance inquiry, and fast cash options. Ideal for offline simulations or academic demos.",
        image: "/Bank.png",
        live: "https://www.linkedin.com/feed/update/urn:li:activity:7314899727873929217/",
        repo: "https://github.com/Sushils-Coding/Bank-Management-System",
        problem: "Beginner developers and educators need simple offline banking simulations to teach or learn core programming concepts.",
        solution: "An offline, Java-based banking system simulator with a GUI for educational or demonstration purposes.",
        keyFeatures: [
            "Account creation & PIN generation",
            "Deposit, withdrawal, balance check",
            "Mini statement generation",
            "Simple GUI using Swing"
        ],
        impact: "Improved understanding of object-oriented programming and UI development for academic learners."
    },
];

export default projects;
