/**
 * PORTFOLIO CONFIGURATION FILE
 * Customize this file to easily update your portfolio content
 */

// ============================================
// PERSONAL INFORMATION
// ============================================
const config = {
    // Basic Info
    name: "Nooru",
    title: "B.Tech Data Science & AI",
    subtitle: "Machine Learning Engineer | Data Scientist | AI Researcher | Python Developer",
    description: "I build intelligent systems that learn from data and make predictions. Passionate about creating AI solutions that solve real-world problems.",

    // Profile Image
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face",

    // Contact Information
    contact: {
        email: "nooru@example.com",
        phone: "+91 12345 67890",
        location: "Bangalore, India",
        website: "https://nooru-portfolio.com"
    },

    // Social Media Links
    social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        kaggle: "https://kaggle.com",
        twitter: "https://twitter.com",
        medium: "https://medium.com",
        instagram: "https://instagram.com"
    },

    // Stats (will be animated)
    stats: {
        projects: 25,
        mlModels: 15,
        kaggleCompetitions: 8,
        githubRepos: 50
    },

    // About Information
    about: {
        education: "Bachelor of Technology in Data Science and Artificial Intelligence",
        university: "Indian Institute of Technology (IIT)",
        cgpa: "9.2/10",
        interests: ["AI Research", "Machine Learning", "Data Visualization", "Open Source"]
    },

    // Skills - Add or remove as needed
    skills: {
        programming: [
            { name: "Python", percent: 95, icon: "fab fa-python" },
            { name: "SQL", percent: 85, icon: "fas fa-database" },
            { name: "R", percent: 80, icon: "fab fa-r-project" },
            { name: "Java", percent: 75, icon: "fas fa-code" },
            { name: "C++", percent: 70, icon: "fas fa-code" }
        ],
        aiFrameworks: [
            { name: "TensorFlow", percent: 90, icon: "fas fa-brain" },
            { name: "PyTorch", percent: 88, icon: "fas fa-brain" },
            { name: "Scikit-learn", percent: 85, icon: "fas fa-chart-line" },
            { name: "Keras", percent: 80, icon: "fas fa-layer-group" },
            { name: "OpenCV", percent: 75, icon: "fas fa-cube" },
            { name: "NLTK", percent: 70, icon: "fas fa-flask" }
        ],
        dataScience: [
            { name: "Pandas", percent: 90, icon: "fas fa-table" },
            { name: "NumPy", percent: 88, icon: "fas fa-chart-pie" },
            { name: "Matplotlib", percent: 85, icon: "fas fa-chart-area" },
            { name: "Seaborn", percent: 82, icon: "fas fa-palette" },
            { name: "Plotly", percent: 80, icon: "fas fa-chart-line" },
            { name: "SciPy", percent: 75, icon: "fas fa-table" }
        ],
        bigData: [
            { name: "Apache Spark", percent: 75, icon: "fab fa-apache" },
            { name: "Hadoop", percent: 70, icon: "fab fa-apache" },
            { name: "AWS", percent: 80, icon: "fab fa-aws" },
            { name: "Google Cloud", percent: 75, icon: "fab fa-google" },
            { name: "Azure", percent: 70, icon: "fab fa-microsoft" }
        ],
        webDev: [
            { name: "HTML5", percent: 85, icon: "fab fa-html5" },
            { name: "CSS3", percent: 82, icon: "fab fa-css3-alt" },
            { name: "JavaScript", percent: 80, icon: "fab fa-js" },
            { name: "React.js", percent: 75, icon: "fab fa-react" },
            { name: "Node.js", percent: 70, icon: "fab fa-node-js" },
            { name: "Flask", percent: 65, icon: "fas fa-server" }
        ]
    },

    // Projects - Add or remove as needed
    projects: [
        {
            id: 1,
            title: "Intelligent Chatbot with NLP",
            description: "Developed a context-aware chatbot using Transformers and NLP techniques. Implemented with PyTorch and HuggingFace models, capable of understanding and generating human-like responses.",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
            categories: ["ml", "dl"],
            technologies: ["Python", "PyTorch", "Transformers", "NLP", "Flask"],
            demoLink: "#",
            codeLink: "#"
        },
        {
            id: 2,
            title: "Real-time Face Recognition System",
            description: "Built a real-time face recognition system using OpenCV and deep learning. Achieved 98% accuracy on LFW dataset. Implemented with CNN architecture and facial embedding techniques.",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
            categories: ["cv", "dl"],
            technologies: ["Python", "OpenCV", "TensorFlow", "CNN", "FaceNet"],
            demoLink: "#",
            codeLink: "#"
        },
        {
            id: 3,
            title: "Stock Market Prediction with LSTM",
            description: "Developed an LSTM-based model for stock price prediction using historical data. Implemented time-series forecasting with TensorFlow/Keras. Achieved 92% accuracy on test dataset with proper feature engineering.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
            categories: ["ml"],
            technologies: ["Python", "TensorFlow", "LSTM", "Pandas", "Matplotlib"],
            demoLink: "#",
            codeLink: "#"
        },
        {
            id: 4,
            title: "Sentiment Analysis on Social Media",
            description: "Built a sentiment analysis model using BERT and NLP techniques to analyze social media data. Implemented with HuggingFace transformers and achieved 94% accuracy on test dataset.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
            categories: ["nlp"],
            technologies: ["Python", "BERT", "NLP", "HuggingFace", "PyTorch"],
            demoLink: "#",
            codeLink: "#"
        },
        {
            id: 5,
            title: "Movie Recommendation System",
            description: "Developed a content-based and collaborative filtering recommendation system for movies. Built with Flask backend and React frontend. Uses cosine similarity and matrix factorization techniques.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
            categories: ["ml", "web"],
            technologies: ["Python", "Flask", "React", "Scikit-learn", "Pandas"],
            demoLink: "#",
            codeLink: "#"
        },
        {
            id: 6,
            title: "Object Detection with YOLO",
            description: "Implemented YOLOv5 for real-time object detection with 85+ classes. Fine-tuned on custom datasets and deployed as a web application. Achieved 89 mAP on COCO dataset.",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
            categories: ["cv", "dl"],
            technologies: ["Python", "PyTorch", "YOLOv5", "OpenCV", "Flask"],
            demoLink: "#",
            codeLink: "#"
        }
    ],

    // Education Timeline
    education: [
        {
            degree: "Bachelor of Technology in Data Science & Artificial Intelligence",
            period: "2021 - Present",
            institution: "Indian Institute of Technology (IIT)",
            cgpa: "9.2/10",
            coursework: [
                "Machine Learning",
                "Deep Learning",
                "Natural Language Processing",
                "Computer Vision",
                "Data Mining",
                "Big Data Analytics",
                "Statistics",
                "Probability",
                "Linear Algebra",
                "Calculus"
            ],
            achievements: [
                "Dean's List - Top 5% of the class",
                "Best Project Award - ML Hackathon 2023",
                "Research Paper Published - IEEE Conference"
            ]
        },
        {
            degree: "Senior Secondary Education (12th Grade)",
            period: "2019 - 2021",
            institution: "Delhi Public School",
            percentage: "95.4%",
            subjects: ["Physics", "Chemistry", "Mathematics", "Computer Science", "English"],
            achievements: [
                "School Topper in Computer Science",
                "National Level Coding Competition Winner"
            ]
        },
        {
            degree: "Secondary Education (10th Grade)",
            period: "2018 - 2019",
            institution: "Delhi Public School",
            percentage: "96.8%"
        }
    ],

    // Certifications
    certifications: [
        {
            name: "TensorFlow Developer Certificate",
            organization: "Google",
            year: "2023",
            id: "TF-2023-XXXX",
            icon: "fab fa-google",
            link: "#"
        },
        {
            name: "Azure AI Engineer Associate",
            organization: "Microsoft",
            year: "2023",
            id: "AZ-2023-XXXX",
            icon: "fab fa-microsoft",
            link: "#"
        },
        {
            name: "AWS Certified Machine Learning",
            organization: "Amazon Web Services",
            year: "2024",
            id: "AWS-2024-XXXX",
            icon: "fab fa-aws",
            link: "#"
        },
        {
            name: "Deep Learning Specialization",
            organization: "Coursera (Andrew Ng)",
            year: "2022",
            id: "COURSERA-XXXX",
            icon: "fas fa-chart-line",
            link: "#"
        },
        {
            name: "NLP with Deep Learning",
            organization: "Stanford University",
            year: "2023",
            id: "STANFORD-XXXX",
            icon: "fas fa-brain",
            link: "#"
        },
        {
            name: "Data Science MicroMasters",
            organization: "UC San Diego",
            year: "2023",
            id: "UCSD-2023-XXXX",
            icon: "fas fa-database",
            link: "#"
        }
    ]
};

// ============================================
// 3D CONFIGURATION
// ============================================
const threeConfig = {
    // Hero Section 3D
    hero: {
        particleCount: 2000,
        neuralNetwork: {
            layers: [4, 5, 5, 4],
            layerSpacing: 3,
            neuronSpacing: 1.5,
            neuronSize: 0.3
        },
        dataSphere: {
            radius: 2,
            segments: 32,
            pointCount: 200
        }
    },

    // Contact Section 3D
    contact: {
        objects: [
            { type: 'brain', color: 0x6c5ce7, position: [-3, 0, 0] },
            { type: 'data', color: 0x00cec9, position: [0, 0, 0] },
            { type: 'neural', color: 0xfd79a8, position: [3, 0, 0] },
            { type: 'code', color: 0x00d2d3, position: [-1.5, 2, 0] },
            { type: 'graph', color: 0xfdcb6e, position: [1.5, 2, 0] }
        ]
    }
};

// ============================================
// THEME CONFIGURATION
// ============================================
const themeConfig = {
    colors: {
        primary: "#6c5ce7",
        primaryDark: "#5649c0",
        primaryLight: "#a29bfe",
        primaryLighter: "#d6d0ff",
        secondary: "#00cec9",
        secondaryDark: "#00a8a3",
        secondaryLight: "#81ecec",
        accent: "#fd79a8",
        accentDark: "#e84393",
        accentLight: "#fab1c8"
    },
    backgrounds: {
        dark: "#0f0f23",
        darker: "#0a0a1a",
        card: "rgba(20, 20, 40, 0.8)",
        cardHover: "rgba(30, 30, 50, 0.9)"
    },
    text: {
        primary: "#ffffff",
        secondary: "#b8b8d1",
        muted: "#8a8a9e"
    }
};

// ============================================
// EXPORT CONFIGURATION (for use in script.js)
// ============================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { config, threeConfig, themeConfig };
}
