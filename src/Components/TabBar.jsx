import React from 'react';
import Resume from '../static/assets/svg/ResumeSVG';
import Eligibility from '../static/assets/svg/EligibleSVG';
import PerInfo from '../static/assets/svg/PerInfoSVG';
import ProInfo from '../static/assets/svg/ProInfoSVG';
import Skills from '../static/assets/svg/SkillsSVG';
import OthDetails from '../static/assets/svg/OthInfoSVG';
import '../static/sass/TabBar.scss';

const TabList = [
    {
        title: "Resume",
        icon: Resume,
        path: "#resume"
    },
    {
        title: "Personal Info",
        icon: PerInfo,
        path: "#info"
    },
    {
        title: "Skills",
        icon: Skills,
        path: "#skills"
    },
    {
        title: "Professional Info",
        icon: ProInfo,
        path: "#professional"
    },
    {
        title: "Eligibility",
        icon: Eligibility,
        path: "#eligibility"
    },
    {
        title: "Other Details",
        icon: OthDetails,
        path: "#others"
    }
];

function TabBar() {
    return (
        <div className="tab-bar">
           {
               TabList.map(
                   Each => (
                       <div key={Each.title} className="tab-bar-each">
                            <a href={Each.path}>
                                <Each.icon height="40" width="40" className="svg" />
                                <p>{Each.title}</p>
                            </a>
                        </div>
                   )
               )
           } 
        </div>
    )
}

export default TabBar;
