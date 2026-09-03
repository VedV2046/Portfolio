import { useEffect, useState } from 'react';
import { Analytics } from "@vercel/analytics/react";
import { LazyMotion, domAnimation } from 'framer-motion';
import Lenis from 'lenis';
import { SiReact, SiNodedotjs, SiJavascript, SiGit, SiPostgresql, SiExpress } from 'react-icons/si';

import Header from "./header";
import Hero from "./hero";
import Stack from "./stack";
import LogoLoop from '../Reactbits/LogoLoop';
import ScrollFloat from '../Reactbits/ScrollFloat';
import BlurText from '../Reactbits/BlurText';
import TechStack from './techStack';
import VerticalTimeline from './journey';
import GooeyNav from '../Reactbits/GooeyNav';
import TextType from '../Reactbits/TextType';
import Project from './project';
import Achievements from './achievements';
import ContactSection from './contactSection';
import Footer from './footer';
import Loader from './Loader';
import ParticlesBackground from './particle';

const techLogos = [
    { node: <SiNodedotjs color="#c0def3"/>, title: "Node.js" },
    { node: <SiReact color="#c0def3"/>, title: "React" },
    { node: <SiPostgresql color="#c0def3"/>, title: "PostgreSQL" },
    { node: <SiJavascript color="#c0def3"/>, title: "Javacript" },
    { node: <SiGit color="#c0def3"/>, title: "Git"},
    { node: <SiExpress color="#c0def3"/>, title: "Express"},
];

function App() {
    const [isInitialLoading, setIsInitialLoading] = useState(true);
    const projects = [
        {   label: 'Expense Tracker',
            title: 'Smart Expense Tracker',
            subtitle: 'Personal Finance Management Platform',
            description: 'Developed a full-stack web application for tracking income, expenses, and financial activity with interactive analytics and AI-driven spending insights. The platform enables users to securely manage transactions, visualize financial trends, and monitor savings through responsive dashboards and real-time data updates.',
            impactDescription: 'Built a scalable finance management system with secure authentication, dynamic data visualization, database design and user-centric dashboard development helping users securely manage transactions an visualize financial trends.',
            url: 'https://fintrack-20.vercel.app/',
            githubURL: 'https://github.com/VedV2046/Smart-Expense-Tracker',
            tools: ['react','html', 'css', 'js', 'nodejs', 'express', 'postgresql'],
            challenges: [
                'Complex state management across multi-category transactions',
                'Real-time data visualization and interactive financial charts',
                'Secure user authentication and database query optimization',
                'Building a responsive UI that works across different screen sizes without a component library'
            ]
        },
        {
            label: 'ExploreX',
            title: 'ExploreX',
            subtitle: 'Location-Based Travel Discovery Platform',
            description: 'Developed a full-stack travel discovery platform that enables users to explore attractions, restaurants, cafés, hospitals, parks, and other nearby places across cities worldwide. Integrated Geoapify APIs with a Flask backend to deliver real-time location data, multilingual place information, Google Maps navigation, and a responsive React interface.',
            impactDescription: 'Built a scalable location-based search system featuring RESTful API integration, dynamic category filtering, multilingual support, interactive map navigation, and seamless React–Flask communication, delivering an intuitive and responsive travel planning experience.',
            url: 'https://explorex-guide.vercel.app',
            githubURL: 'https://github.com/VedV2046/ExploreX-Project',
            tools: ['react','html','css','js','python','flask','restAPI'],
            challenges: [
                'Frontend–backend API integration with Flask',
                'Real-time location data handling via Geoapify API',
                'Multilingual data translation and category filtering',
                'Dynamic category filtering',
                'Deployment and production debugging'
            ]
        },
        {
            label: 'Pokédex',
            title: 'Pokédex',
            subtitle: 'Pokémon Explorer App',
            description: "A high-performance web application that merges the Pokémon API with an intelligent AI Agent. Users can instantly filter through generations or query the integrated AI for deep-dive stats, competitive analysis, and lore on any Pokémon, delivered via a sleek, responsive interface.",
            impactDescription: "Bridged the gap between comprehensive data and interactive UI, allowing users to explore the Pokémon universe through a sleek, responsive interface backed by an AI-driven query engine for deep-dive stat inspections.",
            url: 'https://ai-pokedex-v.vercel.app/',
            githubURL: 'https://github.com/VedV2046/AI-Pokedex',
            tools: ['html', 'css', 'js', 'react', "restAPI"],
            challenges: [
                'Asynchronous API requests from PokeAPI and AI services',
                'Optimizing search and filtering performance for large datasets',
                'Responsive dynamic stats visualization'
            ]
        },  
        {
            label: 'Project',
            title: 'Project Dashboard',
            subtitle: 'Task And Delivery Tracking',
            impactDescription: 'A project-centric dashboard to monitor milestones, update statuses, and keep engineering and design progress aligned.',
            description: 'A project-centric dashboard to monitor milestones, update statuses, and keep engineering and design progress aligned.',
            tools: ['html', 'css', 'js'],
            challenges: [
                'Designing an intuitive multi-column task flow',
                'Status update synchronization across engineering and design teams'
            ]
        }
    ];
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

    useEffect(() => {
        const timerId = window.setTimeout(() => {
            setIsInitialLoading(false);
        }, 3000);

        return () => window.clearTimeout(timerId);
    }, []);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.1,
            smoothWheel: true,
            wheelMultiplier: 0.95,
            touchMultiplier: 1.1,
            lerp: 0.08,
            prevent: (node) => node?.closest?.('.scroll-stack-scroller')
        });

        let rafId;

        const raf = (time) => {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        };

        rafId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
        };
    }, []);

    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    };

    const items = projects.map(project => ({ label: project.label }));

    if (isInitialLoading) {
        return <Loader />;
    }


    return (
        <LazyMotion features={domAnimation}>
            <div className="app-shell">
                <ParticlesBackground />
                <div className="page-content">
                    <Header />
                    <div className="pre-about-content" id="home">
                        <Hero />

                        <div style={{ height: '100px', position: 'relative', overflow: 'hidden' }}>
                            <LogoLoop
                                logos={techLogos}
                                speed={100}
                                direction="right"
                                logoHeight={60}
                                gap={60}
                                hoverSpeed={0}
                                scaleOnHover = {1.5}
                                fadeOut
                                fadeOutColor=""
                                ariaLabel="Technology partners"
                            />
                        </div>
                    </div>

                    <section id="about">
                        <ScrollFloat
                            animationDuration={61.8}
                            ease='power2.out'
                            scrollStart='top 88%'
                            scrollEnd='top 25%'
                            stagger={0.08}
                        >
                            ABOUT
                        </ScrollFloat>

                        <Stack />

                        <TechStack id="techstack"/>
                    </section>

                    <section id="journey">
                        <BlurText
                        text="JOURNEY"
                        delay={200}
                        animateBy="letters"
                        direction="top"
                        onAnimationComplete={handleAnimationComplete}
                        className="text-2xl mb-8"
                        />
                        
                        <VerticalTimeline layout="1-column" lineColor="#7000f9">
                            <VerticalTimeline.Item date="2011-2022" title="Schooling" subtitle="Sinhgad Spring Dale Public School (SSDPS)" description="Completed my primary and secondary education with a focus on science and mathematics.My academic journey at SSDPS provided a strong foundation for my analytical and technical skills." />
                            <VerticalTimeline.Item date="2024-2028" title="B.Tech Electronics And Telecommunications (ENTC)" subtitle="Smt. Kashibai Navale College of Engineering (SKNCOE)" description="Currently pursuing a degree in ENTC, where I bridge the gap between hardware fundamentals and modern software solutions. Since 2025, I have specialized in full-stack web development, mastering HTML, CSS, and JavaScript to build responsive, user-centric applications and intuitive digital experiences." />
                            <VerticalTimeline.Item date="2025" title="Embracing Full-Stack Development" subtitle="Started as a curiosity which turned out to be awesome" description="By 2025, I expanded my skill set to include back-end technologies like Node.js and Express. This allowed me to create more complex applications and understand the full stack of web development, from databases to server-side logic." />
                        </VerticalTimeline>
                    </section>

                    <section id="projects">
                        <TextType 
                            text={["PROJECTS"]}
                            typingSpeed={75}
                            pauseDuration={7000}
                            showCursor
                            cursorCharacter="|"
                            deletingSpeed={0}
                            variableSpeedEnabled={false}
                            variableSpeedMin={60}
                            variableSpeedMax={120}
                            cursorBlinkDuration={0.5}
                        />

                        <div style={{ height: '70px', position: 'relative' }}>
                            <GooeyNav
                                items={items}
                                particleCount={25}
                                particleDistances={[70, 10]}
                                particleR={100}
                                initialActiveIndex={0}
                                animationTime={600}
                                timeVariance={300}
                                colors={[1, 2, 3, 1, 2, 3, 1, 4]}
                                onItemChange={(_, index) => setSelectedProjectIndex(index)}
                            />
                        </div>

                        <Project key={projects[selectedProjectIndex].label} project={projects[selectedProjectIndex]} />
                    </section>

                    <section id="achievements">
                        <Achievements />
                    </section>

                    <section id="contact">
                        <ContactSection />
                    </section>

                    <Footer />
                    <Analytics />
                </div>
            </div>
        </LazyMotion>
    );
}

export default App;