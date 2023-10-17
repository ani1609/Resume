import React, { useRef, useEffect, useState } from 'react';
import '../index.css';
import '../styles/Experience.css';


function Experience() 
{
    const experienceHeadingRef = useRef(null);
    const experiences = 
    [
        {
            company: "Rablik",
            jobTitle: "Full Stack Developer Intern",
            companyLink: "https://rablik.com/",
            date: "Oct 2023 - Present",
            description: 
            [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices, ipsum eget condimentum viverra, ipsum ipsum congue tellus, vel bibendum metus nunc ac quam. ",
                "This is a common placeholder text used in the printing and typesetting industry. Feel free to use it for various purposes, such as designing, layout, or content placeholders.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices, ipsum eget condimentum viverra, ipsum ipsum congue tellus, vel bibendum metus nunc ac quam. ",
            ],
        },
        {
            company: "ONDC",
            jobTitle: "Freelancer",
            companyLink: "",
            date: "Nov 2023 - Present",
            description: [
                "Contribution A in ONDC",
                "Contribution B in ONDC",
                "Contribution C in ONDC",
            ],
        },
        {
            company: "Apple",
            jobTitle: "Full Stack Developer Intern",
            companyLink: "https://www.apple.com/",
            date: "Dec 2023 - Present",
            description: 
            [
                "Contribution 1 in Apple",
                "Contribution 2 in Apple",
                "Contribution 3 in Apple",
            ],
        },
        {
            company: "SAMSUNG",
            jobTitle: "Freelancer",
            companyLink: "https://www.samsung.com/",
            date: "Jan 2023 - Present",
            description: [
                "Contribution A in Samsung",
                "Contribution B in Samsung",
                "Contribution C in Samsung",
            ],
        },
    ];
    const [selectedExperience, setSelectedExperience] = useState(experiences[0]);
    const [selectedExperienceIndex, setSelectedExperienceIndex] = useState(0);

    useEffect(() => 
    {
        const options = 
        {
            root: null,
            rootMargin: '0px',
            threshold: 0.3
        };

        const observer = new IntersectionObserver((entries, observer) => 
        {
            entries.forEach(entry => 
            {
                if (entry.isIntersecting) 
                {
                    entry.target.classList.add('showExperience');
                }
            });
        }, options);

        if (experienceHeadingRef.current) observer.observe(experienceHeadingRef.current);

        return () => 
        {
            if (experienceHeadingRef.current) observer.unobserve(experienceHeadingRef.current);
        };
    }, []);

    useEffect(() =>
    {
        console.log(selectedExperienceIndex);
    
    }, [selectedExperience]);


    return (
        <div>
        <section className='experience_container'>
                <h1 ref={experienceHeadingRef}>Where I've Worked</h1>
                <div className='experience_content'>
                    <div className='experience_tabs'>
                        {experiences.map((experience, index) => (
                            <button
                                key={index}
                                onClick={() => {setSelectedExperience(experience); setSelectedExperienceIndex(index);}}
                                className={selectedExperienceIndex === index ? 'selected_experience' : ''}
                            >
                                {experience.company}
                            </button>
                        ))}
                    </div>
                    <div className='experience_description'>
                        <h2>{selectedExperience.jobTitle} <span>@ <a href={selectedExperience.companyLink} target="_blank">{selectedExperience.company}</a></span></h2>
                        <p>{selectedExperience.date}</p>
                        <ul>
                            {selectedExperience.description.map((item, index) => (
                                <li key={index}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </section>
        </div>
    );
}

export default Experience;