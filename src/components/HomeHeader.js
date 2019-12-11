import React from 'react';
import { Link } from "react-scroll";

export default () => 
<div>
    <ul>
        <li><Link smooth={true} to = 'HomeThreeColumns'>Start</Link></li>
        <li><Link smooth={true} to = 'HomeEasySteps'>O co chodzi?</Link></li>
        <li><Link smooth={true} to = 'HomeAboutUs'>O nas</Link></li>
        <li><Link smooth={true} to = 'HomeWhomWeHelp'>Fundacja i organizacje</Link></li>
        <li><Link smooth={true} to = 'HomeContactForm'>Kontakt</Link></li>
    </ul>
</div>