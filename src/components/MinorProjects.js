import React, { useRef, useEffect } from 'react';
import '../index.css';
import '../styles/MinorProjects.css';
import MinorProjectItems from './MinorProjectItems';

function MinorProjects ()
{
    const minorProjects= [
        {
            id: 1,
            title: 'Calculator',
            description: 'This is a calculator. We are going to use it to pass props to our SVG and also to share logic later point in time. We are going to use it to pass props.',
            techStack: ['HTML', 'CSS', 'JavaScript', 'ReactJS'],
            link: "",
            github: 'https://google.com'
        },
        {
            id: 2,
            title: 'Calculator',
            description: 'This is a calculator. We are going to use it to pass props to our SVG and also to share logic later point in time. We are going to use it to pass props.',
            techStack: ['HTML', 'CSS', 'JavaScript', 'ReactJS'],
            link: "",
            github: 'https://google.com'
        },
        {
            id: 3,
            title: 'Calculator',
            description: 'This is a calculator. We are going to use it to pass props to our SVG and also to share logic later point in time. We are going to use it to pass props.',
            techStack: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
            link: "",
            github: 'https://google.com'
        },
        {
            id: 4,
            title: 'Calculator',
            description: 'This is a calculator. We are going to use it to pass props to our SVG and also to share logic later point in time. We are going to use it to pass props.',
            techStack: ['HTML', 'CSS', 'JavaScript', ""],
            link: "",
            github: 'https://google.com'
        },
        {
            id: 5,
            title: 'Calculator',
            description: 'This is a calculator. We are going to use it to pass props to our SVG and also to share logic later point in time. We are going to use it to pass props.',
            techStack: ['HTML', 'CSS', 'JavaScript', 'ReactJS'],
            link: "",
            github: 'https://google.com'
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
