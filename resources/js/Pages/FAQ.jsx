import React from 'react';
import AccordionBlock from '../Components/AccordionBlock/AccordionBlock';
import NavigationMenu from '../Components/Navigation/NavigationMenu';
import './FAQ.css';

const FAQ = () => {
    return (
        <div className="faq-page">
            <h1 className="faq-title">Frequently Asked Questions</h1>
            <AccordionBlock />
        </div>
    );
};

export default FAQ;