// src/context/PortfolioContext.jsx
import React, { createContext, useContext } from 'react';
import Durable from '../assets/images/project/Durable.png';
import ImageCreator from '../assets/images/project/ImageCreator.png';
import Artify from '../assets/images/project/Artify-Image-Restyle.png';
import SponsorPro from '../assets/images/project/Sponsor-Pro-AI-Outreach.png';
import QuoteBuilder from '../assets/images/project/GuWiGuttersAndWindows.png';
import GuwiDashboard from '../assets/images/project/Gu-Wi-Dashboard.png';
import RainfireStore from '../assets/images/project/Rainfire-Online-Store.png';
import SideBird from '../assets/images/project/Sidebird-Twitter-fanbase-builder.png';
import Compressor from '../assets/images/project/Compressor-io.png';
import Proper from '../assets/images/project/Proper.png';
import LuxyHair from '../assets/images/project/Luxy-Hair.png';
import JPLewis from '../assets/images/project/JP-Lewis-Group.png';
import ClientDaniel from '../assets/images/client-daniel.png';

// Create the context
const PortfolioContext = createContext();

// const reviews = [
//     {
//         clientName: "Yang Henry",
//         clientUsername: "@yanghenry", // Derived from clientName
//         reviewBody: 'Jatin has done a great job on my full stack development project. My project is really big but he managed to get every step done perfectly. Also he is always full of pashion & his working speed is fast. He has professional skills and knowledge that allow him to finish complicated tasks. I Really enjoy the experience working with him and will continue working with him on the further changes.',
//         clientProfilePhoto: 'https://www.upwork.com/profile-portraits/c1fFy29XOhI1nk0OdyqgvxMfhOyg-aWJmjGg4cnQa0VtDzHjSj5Qi_9CSboencGoR_',
//     },
//     {
//         clientName: "Yang Henry",
//         clientUsername: "@yanghenry", // Derived from clientName
//         reviewBody: 'I really like the work Jatin has provided. Will release further tasks to him. I really love the work Jatin has provided. He is offering fast & reliable service. He has good knowledge in building a highly-customized website, and I will be working with him more in the future',
//         clientProfilePhoto: 'https://www.upwork.com/profile-portraits/c1fFy29XOhI1nk0OdyqgvxMfhOyg-aWJmjGg4cnQa0VtDzHjSj5Qi_9CSboencGoR_',
//     },
// ];

// Portfolio items data
const portfolioItems = [
    {
        href: "https://artify-app-yu34e.ondigitalocean.app/",
        imgSrc: Artify,
        alt: "AI Image Restyle - Full Stack",
        title: "AI Image Restyle",
        description: "Artify AI lets users transform their photos with AI filters and print them on customizable products for personalized art made easy.",
        review: {
            clientName: "Daniel T. | Managing Director",
            clientUsername: "@daniel",
            reviewBody: "I highly recommend Jatin for his outstanding work on Fiverr. From the start, Jatin understood my project needs perfectly. His communication was clear, and he delivered exceptional results promptly. Jatin's attention to detail and commitment to quality were impressive. He not only met deadlines but also incorporated feedback effectively. For reliable, skilled, and passionate service, Jatin is the perfect choice. I am thoroughly satisfied and look forward to future collaborations.",
            clientProfilePhoto: ClientDaniel,
        },
    },
    {
        href: "https://sponsorpro-70d8f.web.app/",
        imgSrc: SponsorPro,
        alt: "AI Outreach Tool - Full Stack",
        title: "AI Outreach Tool",
        description: "A cool app for athletes to find local brands. It helps them write messages using smart AI, making it easy to connect with sponsors.",
        review: {
            clientName: "Trevor",
            clientUsername: "@trevor",
            reviewBody: "Using SponsorPro has transformed my outreach to brands. The AI messaging feature saved me so much time, and I've connected with amazing sponsors!",
            clientProfilePhoto: 'https://redwavevp.com/wp-content/uploads/2024/05/Screen_Shot_2024-05-27_at_8.52.05_AM.png',
        },
    },
    {
        href: "https://guwi-dashboard.web.app/",
        imgSrc: GuwiDashboard,
        alt: "Gu-Wi Admin Dashboard - Full Stack",
        title: "Gu-Wi Admin Dashboard",
        description: "Developed Gu-Wi Admin Dashboard. Full Stack app with API integration, front-end, and Firebase. Enabled user-friendly interface, real-time analytics, and customization for efficient service management.",
        review: {
            clientName: "Gavin Gene",
            clientUsername: "@gavingene",
            reviewBody: "Jatin did a great job building a custom website front end with lots of variables and integrations with a database. very grateful and will continue working on projects with him in the future. highly recommended A+",
            clientProfilePhoto: 'https://www.upwork.com/profile-portraits/c1OEhIAyRd2T5jeUFUcKETENrfxCJEbSryKZUq0vPN_LNmPzW74wW8O6SWQGbN_RPh',
        },
    },
    {
        href: "https://www.studioproper.com/",
        imgSrc: Proper,
        alt: "Studio Proper - Full Stack",
        title: "Studio Proper",
        description: "Contributed to the development and design of Studio Proper's digital presence.",
        review: {
            clientName: "Andrew Davies",
            clientUsername: "@andrewdavies", // Derived from clientName
            reviewBody: 'Very fast turnaround, did the job as requested, no issues or problems, would use again',
            clientProfilePhoto: 'https://www.upwork.com/profile-portraits/c1ETy2V41TYEMbK_UkE4Gp_QndW-EkANRhGmDwftqk6BJiP7PAXAAoDxfQp2xhzsPG'
        },
    },
    {
        href: "https://guwiquotebuilder.com/#/5722451285136736892",
        imgSrc: QuoteBuilder,
        alt: "Gu-Wi Quote Builder - Full Stack",
        title: "Gu-Wi Quote Builder",
        description: "I crafted a nifty tool for Gu-Wi that automatically generates two quotes for customers, using data from JotForm. Simplifying the process, it ensures a speedy and tailored experience for clients.",
        review: {
            clientName: "Gavin Gene",
            clientUsername: "@gavingene",
            reviewBody: "Jatin did everything asked of him and more. This small project was completed without a hitch. The front end and the database are functioning properly. Jatin was attentive and understood my requests and asked questions when necessary. We will continue to work with Jatin in the future and I recommend him to anyone looking for a reliable developer.",
            clientProfilePhoto: 'https://www.upwork.com/profile-portraits/c1OEhIAyRd2T5jeUFUcKETENrfxCJEbSryKZUq0vPN_LNmPzW74wW8O6SWQGbN_RPh',
        },
    },
    {
        href: "https://rainfire.in/",
        imgSrc: RainfireStore,
        alt: "Rainfire E-Commerce - Full Stack",
        title: "Rainfire E-Commerce",
        description: "Rainfire E-Commerce: My full-stack e-commerce masterpiece. From design to deployment, every aspect crafted by me for seamless online shopping.",
        review: {
            clientName: "Yang Henry",
            clientUsername: "@yanghenry", // Derived from clientName
            reviewBody: 'Very Patient and talented. This work was extended for a month because I was continuously asking for changes, but Jatin was always very patient and successfully completed all the work that I asked for. I really appreciate his hard work. Meanwhile, he spent a lot of time communicating with me regarding to the project. His way of expressing was pretty clear and polite. I would highly recommend hiring him for your project.',
            clientProfilePhoto: 'https://www.upwork.com/profile-portraits/c1fFy29XOhI1nk0OdyqgvxMfhOyg-aWJmjGg4cnQa0VtDzHjSj5Qi_9CSboencGoR_',
        },
    },
    {
        href: "https://compressor.io/",
        imgSrc: Compressor,
        alt: "Compressor.io - Full Stack",
        title: "Compressor.io",
        description: "Built an image compression solution for faster website load times and improved performance.",
        review: {
            clientName: "Caroline Swamidoss",
            clientUsername: "@carolineswamidoss", // Derived from clientName
            reviewBody: 'Jatin incorporated all the changes that I wanted in the website. He was professional and responded very quickly. I highly recommend him! He is very good at designing websites. I would definitely work with him again. He worked on a Sunday and gave me the desired outcomes for my website',
            clientProfilePhoto: 'https://www.upwork.com/profile-portraits/c1fQHdjbJpBBR474f7aJUnbgBVriwUjJoeizS5Hr00DsVHe9CBAkagrqpZ-1rPQOie',
        },
    },
    {
        href: "https://durable.co/",
        imgSrc: Durable,
        alt: "Durable - Front-End",
        title: "Durable",
        description: "We've meticulously designed an impressive front-end for Durable Website Builder, offering an engaging and efficient user interface. Dive into the website to experience our expertly crafted design firsthand!",
        review: {
            clientName: "Preeti Bhatia",
            clientUsername: "@preetibhatia", // Derived from clientName
            reviewBody: 'Very helpful and very cooperative Thanks Jatin',
            clientProfilePhoto: 'https://www.upwork.com/profile-portraits/c1fBOi4SiUsSNS9jy3lx3VBFjcjj3UnBB_csPdbCTJLbcd2pzUZPxs-foYXB4OubXG',
        },
    },
    {
        href: "https://imagecreator.alkaidvision.com/",
        imgSrc: ImageCreator,
        alt: "Image Creator - Front-End",
        title: "Image Creator",
        description: "We've created a polished and user-friendly front-end for Image Creator, ensuring a seamless browsing experience. Check it out now!",
        review: {
            clientName: "Yerramsetti Chalapathi Rao",
            clientUsername: "@yerramsetti", // Derived from clientName
            reviewBody: 'Jatin Dahiya did exactly what we requested in exactly the right timeframe. Excellent work. A++++',
            clientProfilePhoto: 'https://www.upwork.com/profile-portraits/c1I_JxYtVJPTMbBitDrSeJKXOHzne_45DqldomE3a7gUsLD6XbBAGeAE84bI3qnaP1',
        },
    },
    {
        href: "https://www.sidebird.io/",
        imgSrc: SideBird,
        alt: "SideBird.io - Full Stack",
        title: "SideBird.io",
        description: "Developed an engaging Twitter fanbase-building web app with user-friendly tools for audience growth and engagement.",
        review: {
            clientName: "James Lewis",
            clientUsername: "@jameslewis", // Derived from clientName
            reviewBody: 'Excellent work!!!! He gave me exactly what I requested. I am looking forward to using him again in the future🙂',
            clientProfilePhoto: 'https://www.upwork.com/profile-portraits/c1bjAY_NmGz9vYWUYzM-JJ-w4wRshV971Y5xntNd-S1gRQtJ9jXr8IvpcydUBQ9Oyl',
        },
    },
    {
        href: "https://www.luxyhair.com/",
        imgSrc: LuxyHair,
        alt: "Luxy Hair - Full Stack",
        title: "Luxy Hair",
        description: "Designed and developed an e-commerce platform for Luxy Hair, enhancing online shopping experiences.",
        review: {
            clientName: "Yerramsetti Chalapathi Rao",
            clientUsername: "@yerramsetti", // Derived from clientName
            reviewBody: 'Jatin Dahiya was great! Completed my task really quickly and was very knowledgeable. Highly recommend!',
            clientProfilePhoto: 'https://www.upwork.com/profile-portraits/c1I_JxYtVJPTMbBitDrSeJKXOHzne_45DqldomE3a7gUsLD6XbBAGeAE84bI3qnaP1',
        },
    },
    {
        href: "https://jplewisgroup.com/",
        imgSrc: JPLewis,
        alt: "JP Lewis Group, LLC. - Full Stack",
        title: "JP Lewis Group, LLC.",
        description: "Developed the web presence for JP Lewis Group, LLC., providing web design and interface development.",
        review: {
            clientName: "Faizy Jamal",
            clientUsername: "@faizyjamal", // Derived from clientName
            reviewBody: 'I want to thank Jatin, for all the hard work he has done. From start to finish there was always a strong level of respect & understanding for the goal at hand. Working closely with him really took our programming to the next level!! He thinks about problems, finds solutions, and has awesome morale. Great communication, great working skills in outreach, and high work quality and efficiency. He had a DEEP understanding of what work was needed and performed above and BEYOND expectations. The tone of his communication was wonderful and emotionally engaging on all levels. To top it off, his experience is incredibly professional, fast, and reliable. Thank You Again, Faizy Jamal',
            clientProfilePhoto: 'https://www.upwork.com/profile-portraits/c1HW5mZiPPNrTd3O4xUkXnpJ3TN6h7BM5gLrDfD51D2rsNS0f0FhTkSiv4IpDrZ5g-',

        },
    },
];

// Create a provider component
const PortfolioProvider = ({ children }) => {
    return (
        <PortfolioContext.Provider value={portfolioItems}>
            {children}
        </PortfolioContext.Provider>
    );
};

// Custom hook for using the PortfolioContext
const usePortfolio = () => {
    return useContext(PortfolioContext);
};

export { PortfolioProvider, usePortfolio };
