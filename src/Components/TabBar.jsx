import React from 'react';
import Resume from '../static/assets/icons/resume.png';
import Eligibility from '../static/assets/icons/eligibility.png';

const TabList = [
    {
        title: "Resume",
        icon: Resume
    },
    {
        title: "Resume",
        icon: Eligibility
    },
    {
        title: "Resume",
        icon: "../static/assets/icons/personalinfo.png"
    },
    {
        title: "Resume",
        icon: "../static/assets/icons/professional.png"
    },
    {
        title: "Resume",
        icon: "../static/assets/icons/skills.png"
    },
    {
        title: "Resume",
        icon: "../static/assets/icons/other-details.png"
    },
];

function TabBar() {
    return (
        <div>
           {
               TabList.map(
                   each => (
                       <div key={each.title}>
                           <img src={each.icon} height="50" alt={each.title} />
                           <h2>{each.title}</h2>
                        </div>
                   )
               )
           } 
        </div>
    )
}

export default TabBar;
