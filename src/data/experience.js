export const experienceData = {
  workExperience: [
    {
      id: 1,
      company: "Lloyds Technology Centre",
      companyLogo: "LLoyds",
      jobTitle: "Software Engineer",
      skills:
        "Technology Used: Java, Spring Boot, Microservices, RabbitMQ, Redis, Caffiene cache, Docker, Kubernetes, Node JS, JavaScript",
      date: "Nov 2023 - Present",
    },
    {
      id: 2,
      company: "Educational Initiative",
      companyLogo: "ei",
      jobTitle: "Software Engineer",
      skills:
        "Technology Used: React Native, Android, JavaScript/TypeScript, FCM, ",
      date: "Sep 2021 - Nov 2023",
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
      skills: "Technology Used: Android, Kotlin, Java",
      date: "jun 2021 - Aug 2021",
      desc: `Done Some POC on Flutter , Android with kotlin for MoneyTap Fintech applications .`
    },
    {
      id: 4,
      company: "Appventurez",
      companyLogo: "appventurez",
      jobTitle: "Software Engineering Intern",
      skills: "Technology Used: Java, Android, Room Database",
      contri: `My Contribution : I worked on Android with Java for AstroBaBa Mobile Application .
      I worked on MVVM architecture , Room database for local , Cloud messaging Integration of Api , Live Chat , Push Notifications .
      Made Responsive and User Interactive Application with bug free.`,
      desc: `AstroBaba Application :  
      The best platform to take online consultation with astrologers. Provide guidance and prediction for your better life.
      `,
      date: "Jan 2021 - Jun 2021",
    },
  ],
  education: [
    {
      id: 1,
      institution: "National Institute of Technology Calicut, Keral",
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
