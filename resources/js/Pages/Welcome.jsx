import React from 'react';
import './Welcome.css'; 
import NavigationMenu from '@/Components/Navigation/NavigationMenu';
import AiBlock from '@/Components/AiBlock/AiBlock';

const Welcome = () => {
    return (
        <div className="welcome-container">
            <NavigationMenu />
            <AiBlock/>
        </div>
    );
};

export default Welcome;
