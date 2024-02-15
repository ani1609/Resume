import React, { useRef, useEffect } from 'react';
import '../index.css';
import '../styles/MinorProjects.css';
import MinorProjectItems from './MinorProjectItems';

function MinorProjects ()
{

    const minorProjects= [
        {
            id: 1,
            title: 'Explorway',
            description: "Explore breathtaking destinations, send enquiries, and let our experienced team create personalized itineraries for an unforgettable journey.",
            techStack: ["React", "Web Sockets", "OpenPGP", ""],
            link: "https://explorway.vercel.app/",
            github: "https://github.com/ani1609/Explorway",
            underdevelopment: true
        },
        {
            id: 2,
            title: 'Venline',
            description: "Discover an innovative ecommerce marketplace, connecting vendors and customers. Explore farm-fresh fruits and vegetables, supporting local growers and promoting sustainability.",
            techStack: ["React", "Expressjs", "MongoDB", "Apexcharts.js"],
            link: "https://github.com/ani1609/Venline",
            github: "https://github.com/ani1609/Venline",
        },
        {
            id: 3,
            title: 'Weather App',
            description: "This project seamlessly integrates OpenWeatherMap API to provide real-time weather data for a given locationand OpenCage APIs to deliver dynamic weather information based on user location, enhancing accuracy and user-friendliness.",
            techStack: ["OpenWeatherMap API", "OpenCage API", "", ""],
            link: "https://weather-sable-sigma.vercel.app/",
            github: "https://github.com/ani1609/weather",
        },
        {
            id: 4,
            title: 'Calculator',
            description: "Basic calculator web app for performing arithmetic calculations.",
            techStack: ["HTML", "CSS", "JavaScript", ""],
            link: "https://ani1609.github.io/Calculator/",
            github: "https://github.com/ani1609/Calculator"
        },
        {
            id: 5,
            title: 'E-commerce Cart',
            description: "Created a basic dynamic ecommerce cart page in React, efficiently rendering each cart item using modular subcomponents for enhanced user experience.",
            techStack: ["React", "CSS", "", ""],
            link: "https://github.com/ani1609/cart",
            github: "https://github.com/ani1609/cart"
        },
    ]
    
    const minorProjectHeadingRef = useRef(null);

    useEffect(() => 
    {
        const options = 
        {
            root: null,
            rootMargin: '0px',
            threshold: 0.9
        };
    
        const observer = new IntersectionObserver(([entry], observer) => 
        {
            if (entry.isIntersecting) {
                entry.target.classList.add('showMinorProjectsHeading');
            }
        }, options);
    
        if (minorProjectHeadingRef.current) observer.observe(minorProjectHeadingRef.current);
    
        return () => 
        {
            if (minorProjectHeadingRef.current) observer.unobserve(minorProjectHeadingRef.current);
        };
    },[]);

    return (
        <section className='minor_projects_parent'>
            <h1 ref={minorProjectHeadingRef}>Other Noteworthy Projects</h1>
            <div className='minor_projects_container'>
                {minorProjects.map((minorProject) => {
                    return (
                            <MinorProjectItems
                                minorProject={minorProject}
                                key={minorProject.id}
                            />
                    )
                })}
            </div>
        </section>
    );
}

export default MinorProjects;
