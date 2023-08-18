import React, { useRef, useEffect } from 'react';
import '../index.css';
import '../styles/MinorProjects.css';
import MinorProjectItems from './MinorProjectItems';

function MinorProjects ()
{

    const minorProjects= [
        {
            id: 1,
            title: 'Weather App',
            description: 'Created a dynamic real-time weather app leveraging the OpenWeatherMap API, offering users instant access to accurate weather updates and forecasts for seamless planning and informed decision-making.',
            techStack: ['Nextjs', 'CSS', 'OpenWeatherMap API', ''],
            link: "https://weather-sable-sigma.vercel.app/",
            github: 'https://github.com/ani1609/Calculator',
            underdevelopment: true
        },
        {
            id: 2,
            title: 'E-commerce Cart',
            description: 'Created a basic dynamic ecommerce cart page in React, efficiently rendering each cart item using modular subcomponents for enhanced user experience.',
            techStack: ['Reactjs', 'CSS', '', ''],
            link: "https://github.com/ani1609/cart",
            github: 'https://github.com/ani1609/cart'
        },
        {
            id: 3,
            title: 'Calculator',
            description: 'Basic calculator web app for performing arithmetic calculations.',
            techStack: ['HTML', 'CSS', 'JavaScript', ''],
            link: "https://ani1609.github.io/Calculator/",
            github: 'https://github.com/ani1609/Calculator'
        }
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
    }, []);

    return (
        <div className='minor_projects_parent'>
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
        </div>
    );
}

export default MinorProjects;
