export const experienceData = {
    workExperience: [
        {
            id: 1,
            company: "Lloyds Technology Centre",
            companyLogo: "LLoyds",
            jobTitle: "Software Engineer II",
            skills: "Technology Used: Android, Kotlin, Java,Compose, MVVM/Clean Code Architecture, Android Modularization, Solid Principle",
            contri: `At Lloyds Technology Centre, I played a key role in the end-to-end development of the Spending Rewards feature for the Lloyds Banking App, from architecture design and implementation to GCP API integration, testing, and production release. 
                    The feature enables customers to activate personalized offers, redeem cashback directly to their bank accounts, and track reward transactions. I designed the solution using MVVM, Clean Architecture, Jetpack Compose, and modular Android SDK architecture to build scalable, reusable, and maintainable components. 
                    In addition to feature development, I collaborated with cross-functional teams to uphold engineering best practices through code reviews and architectural discussions. 
                    I also developed an AI-powered PR review assistant that automates Android code reviews by enforcing organization-specific coding standards, Kotlin best practices, and testing guidelines, improving review efficiency and code quality. Following the initial launch, I delivered multiple enhancements, including Featured Offers, Filter & Sort, Custom Intercept Surveys, and Cashback Transaction History, further enhancing the customer experience and feature discoverability.`,
            date: "Nov 2023 - Present",
            from: "12/11/2023",
            to: new Date(),
            certificate: false,
        },
        {
            id: 2,
            company: "Educational Initiative",
            companyLogo: "ei",
            jobTitle: "Software Engineer",
            skills:
                "Technology Used: React Native, Android, JavaScript/TypeScript, FCM, ",
            date: "Sep 2021 - Nov 2023",
            certificate: false,
            from: "09/01/2021",
            to: "11/01/2023",
            desc: `Ei Mindspark is an AI-powered personalised adaptive online Maths learning platform that effectively allows students to advance at their own pace. Ei Mindspark delivers over 2 million questions every day, and the data collected is used to enhance a child's learning pathway .`,
            contri: ` My Contribution :
      Implemented Trusted Device Features, OTP Login, Screening Test , Dual Login flow etc .
      Made Responsive and Student Interactive Application with bug free . Worked on various concept like WebView with strong Iframe , State Management for the App , B2C , B2B Modal , Firebase Crashlytics .
      
      Worked on MVVM/MVC architecture , Done some POC on Flutter for Mindspark.
      Worked on Redux/Mobx state management library , Mixpanel Implementation etc Reduced Mindspark Application Size from 32mb to 25mb by removing third party packages and made custom implementation instead .
      Optimised the application and made 30% fast from the older with updated react-native version and 0 sonarqube code smell bugs`
        },
        {
            id: 3,
            company: "MoneyTap",
            companyLogo: "moneytap",
            jobTitle: "Software Engineer",
            certificate: false,
            skills: "Technology Used: Android, Kotlin, Java, MVVM, MVI, Solid Principle",
            date: "jun 2021 - Aug 2021",
            from: "06/01/2021",
            to: "09/01/2021",
            desc: `At MoneyTap, I contributed to the development of the Android application by building and enhancing core features using Kotlin, Java, and Android Jetpack components. I worked on customer-facing functionalities such as user onboarding, authentication, loan application workflows, profile management, and payment-related features, ensuring a seamless, secure, and high-performance digital lending experience. I followed MVVM architecture, the Repository pattern, and Clean Code principles to develop scalable and maintainable application modules while collaborating closely with cross-functional teams to deliver reliable and user-centric mobile solutions.`
        },
        {
            id: 4,
            company: "Appventurez",
            companyLogo: "appventurez",
            jobTitle: "Software Engineering Intern",
            certificate: true,
            from: "01/01/2021",
            to: "07/01/2021",
            skills: "Technology Used: Java, Android, Room Database",
            contri: `During my internship at Appventurez Mobitech, I contributed to the development of the AstroBaBa Android application using Java, gaining hands-on experience in building production-ready Android applications. I implemented Android features following the MVVM architecture, integrated Room Database for offline data persistence, and worked with RESTful APIs, Firebase Cloud Messaging (FCM), push notifications, and live chat to deliver a seamless user experience. Throughout the internship, I collaborated closely with senior engineers to resolve production issues, optimize application performance, and adopt Android development best practices, strengthening my foundation in native Android development.`,
            desc: `AstroBaba Application :  
      The best platform to take online consultation with astrologers. Provide guidance and prediction for your better life.
      `,
            date: "Jan 2021 - Jun 2021",
        },
    ],
    education: [
        {
            id: 1,
            institution: "National Institute of Technology Calicut, Kerla",
            course: "Master of Computer Application",
            date: "2018 - 2021",
            cgpa: "CGPA: 7.9",
            icon: "https://img.icons8.com/?size=512&id=PJleCo3so0R2&format=png",
        },
        {
            id: 2,
            institution: "Admerit College, Patna",
            course: "Bachelor of Computer Application",
            date: "2015 - 2018",
            cgpa: "Percentage: 68",
            icon: "https://img.icons8.com/?size=512&id=PJleCo3so0R2&format=png",
        },
    ],
};

export const experienceStyles = {
    icon: {
        background: "#fff",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

    },
    content: {
        background: "#14143a",
        color: "#ffffff",
    },
    arrowStyle: {
        borderRight: "7px solid #677483",
    },
};
