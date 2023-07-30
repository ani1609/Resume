import React, { useRef, useEffect } from 'react';
import '../index.css';
import '../styles/MajorProjects.css';
import MajorProjectsItems from './MajorProjectsItems';
import p1 from '../images/explorWay.png';
import p2 from '../images/prathamik.png';
import p3 from '../images/venline.png';


function MajorProjects()
{
    const MajorProjects=[
        {
            id:1,
            title:"Prathamik",
            description:"Unleash the power of education with our innovative website! Experience live video lessons, a versatile online IDE for coding, an AI chatbot for instant help, and Google OCR vision for text comprehension from images. Explore boundless learning opportunities today!",
            image: p2,
            link:"https://prathamik.xyz",
            techStack:["ChatGPT API", "VideoSDK", "Google OCR Vision", "Firebse", "MongoDB"],
            github:"https://github.com/ani1609/Prathamik",  
        },
        {
            id:2,
            title:"ExplorWay",
            description:"Your dream vacations come true at ExplorWay. Explore breathtaking destinations, send enquiries, and let our experienced team create personalized itineraries for an unforgettable journey.",
            image: p1,
            link:"",
            techStack:["ReactJS","NodeJS","MongoDB","Express", "Firebase"],
            github:"https://github.com/ani1609/Traveloholic",
        },
        {
            id:3,
            title:"Venline",
            description:"Discover an innovative ecommerce marketplace, connecting vendors and customers. Explore farm-fresh fruits and vegetables, supporting local growers and promoting sustainability.",
            image: p3,
            link:"https://venline.co",
            techStack:["Ejs", "NodeJS", "MongoDB", "Express"],
            github:"https://github.com/ani1609/Venline", 
        }
    ]

    const MajorProjectHeadingRef = useRef(null);

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
                entry.target.classList.add('showMajorProjectsHeading');
            }
        }, options);
    
        if (MajorProjectHeadingRef.current) observer.observe(MajorProjectHeadingRef.current);
    
        return () => 
        {
            if (MajorProjectHeadingRef.current) observer.unobserve(MajorProjectHeadingRef.current);
        };
    }, []);    


    return(
        <div className='major_projects_parent'>
            <h1 ref={MajorProjectHeadingRef}>Some Things I've Built</h1>
            {MajorProjects.map((MajorProject)=>{
                return(
                    <MajorProjectsItems 
                        MajorProject={MajorProject}
                        key={MajorProject.id}
                    />
                );
            })}

        </div>
    );
}

export default MajorProjects;