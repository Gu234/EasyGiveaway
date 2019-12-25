import React from 'react';
import HomeTop from './Home/HomeTop';
import HomeThreeColumns from './Home/HomeThreeColumns';
import HomeEasySteps from './Home/HomeEasySteps';
import HomeAboutUs from './Home/HomeAboutUs';
import HomeWhomWeHelp from './Home/HomeWhomWeHelp';
import HomeContactForm from './Home/HomeContactForm';
import SectionTitle from './SectionTitle';

export default () => 
<div>
    <HomeTop/>
    <HomeThreeColumns/>
    <SectionTitle>Wystarczą 4 proste kroki</SectionTitle>
    <HomeEasySteps/>
    <HomeAboutUs/>
    <HomeWhomWeHelp/>
    <HomeContactForm/>
</div>