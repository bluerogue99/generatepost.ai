import React, { useState } from 'react';
import './Welcome.css'; 
import NavigationMenu from '@/Components/Navigation/NavigationMenu';
import AiBlock from '@/Components/AiBlock/AiBlock';
import HeroBlock from '@/Components/HeroBlock/HeroBlock';
import ShowcaseBlock from '@/Components/ShowcaseBlock/ShowcaseBlock';
import Testimonials from '@/Components/Testimonials/Testimonials';
import FeaturesBlock from '@/Components/FeaturesBlock/FeaturesBlock';
import TargetedBlock from '@/Components/TargetedBlock/TargetedBlock';
import Footer from '@/Components/Footer/Footer';
import PricingBlock from '@/Components/PricingBlock/PricingBlock';

const Welcome = () => {

    const [selectedPlatformFromMenu, setSelectedPlatformFromMenu] = useState('Facebook');

    const handleMenuClick = (platform) => {
        setSelectedPlatformFromMenu(platform); 
    };


    return (
        <div className="welcome-container">
            <NavigationMenu onMenuClick={handleMenuClick}/>
            <HeroBlock/>
            <AiBlock selectedPlatformFromMenu={selectedPlatformFromMenu} setSelectedPlatformFromMenu={setSelectedPlatformFromMenu}/>
            <ShowcaseBlock />
            <Testimonials />
            <FeaturesBlock />
            <TargetedBlock/>
            <PricingBlock />
            <Footer/>
        </div>
    );
};

export default Welcome;
