import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';  // Importing the back icon from react-icons
import './AccordionBlock.css';

const AccordionBlock = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqItems = [
        { 
            question: "What is PostGenerator.io?", 
            answer: "PostGenerator.io is an AI-powered tool that helps you create engaging social media posts quickly and easily for various platforms like Facebook, Instagram, TikTok, Twitter and LinkedIn."
        },
        { 
            question: "How does PostGenerator.io work?", 
            answer: "Simply input a topic, select the tone, and choose your preferred style. PostGenerator.io then generates ready-to-use social media content that you can customize further if desired."
        },
        { 
            question: "Is there a free trial available?", 
            answer: "Yes! We offer a free tool to use on our front page so you can explore the main features and see how it fits your needs without any initial cost. With Premium we offer audience targeting by age, interest and geotargeting."
        },
        { 
            question: "Can I cancel my subscription anytime?", 
            answer: "Absolutely! You can cancel anytime directly from your account settings. You won’t be charged after cancellation. If you experience any issues with cancelling your subscription please write an e-mail to info@jozsefsimco.com."
        },
        { 
            question: "Do I need any technical skills to use PostGenerator.io?", 
            answer: "Not at all! PostGenerator.io is user-friendly and designed for people of all skill levels. Simply follow the prompts to create your posts."
        },
        { 
            question: "Is $10 a one-time payment or a subscription?", 
            answer: "It’s a monthly subscription. This covers continuous access to all our features, including new ones added over time, as well as customer support."
        },
        { 
            question: "How customizable are the generated posts?", 
            answer: "Our posts come pre-structured for maximum engagement but are fully editable, allowing you to adjust the tone, wording, and other details. With our premium plan however we offer a dashboard where you can view, edit your content and delete unwanted contents."
        },
        { 
            question: "Does PostGenerator.io work for all social media platforms?", 
            answer: "PostGenerator.io works with some of the most used Social Media platforms. We generate posts suitable for Instagram, Facebook, Twitter, LinkedIn, and more, with platform-specific options."
        },
        { 
            question: "How secure is my data with PostGenerator.io?", 
            answer: "Your privacy is our priority. We use encrypted storage to protect your data, and we don’t share it with third parties."
        },
        { 
            question: "Are there any hidden fees or extra charges?", 
            answer: "No, there are no hidden fees. The $10 monthly fee gives you full access to all of PostGenerator.io’s features."
        },
        { 
            question: "Can I share my generated posts directly from PostGenerator.io?", 
            answer: "Currently, PostGenerator.io does not support direct social media platform integrations. However, you can easily download the generated posts and upload them manually to your social media accounts."
        },
        { 
            question: "How often is new content or functionality added?", 
            answer: "We’re continually updating the app with new featues: templates, hashes, special prompt options, AI improvements based on user feedback."
        },
        { 
            question: "What if I need help or have questions while using the app?", 
            answer: "Our support team is available 24/7 to assist you with any questions or issues you may encounter. Write an e-mail to info@jozsefsimco.com."
        },
        { 
            question: "Does PostGenerator.io offer content for specific industries?", 
            answer: "Yes! We have tones suited to various industries, like e-commerce, fitness, education, and more. The prompt provided in the application defines the industry and your exact expectations from the AI model, therefore feel free to provide detailed prompts for a more enhanced user experience."
        },
        { 
            question: "Will my posts sound like they were written by a bot?", 
            answer: "No! Our AI is trained to write natural, human-like content to ensure your posts sound engaging and authentic. Additionally, you can keep generating posts on our website tailoring your prompt until you find the perfect match for your expectations."
        },
        { 
            question: "Is it possible to create bulk posts with PostGenerator.io?", 
            answer: "Currently, PostGenerator.io allows you to generate one post at a time. Bulk post creation is a planned feature that will be added in the future."
        },
        { 
            question: "What if I don’t like the posts generated for me?", 
            answer: "If a generated post doesn’t suit your needs, you can edit it directly with our premium plan or regenerate for fresh content with different options that you can provide to the model in your tailored prompt."
        },
        { 
            question: "Does PostGenerator.io include scheduling features?", 
            answer: "Currently, PostGenerator.io does not have scheduling features. However, scheduling posts is a planned feature that will be added in the future."
        },
        { 
            question: "What makes PostGenerator.io different from other post-generation tools?", 
            answer: "Our tool emphasizes ease of use, high-quality content provided, a preview of your post on your specified platform and consistent updates. We also provide audience targeting in our premium plan."
        },
        { 
            question: "Is there a refund policy if I’m not satisfied?", 
            answer: "We do not offer refunds, but you can cancel your subscription at any time. You can also try the platform for free before committing to a paid plan."
        },
    ];
    

    return (
        <div className="accordion">
            <div className="accordion-header">
                <a href="/" className="back-home-link">
                    <FaArrowLeft className="back-icon" /> Home
                </a>
            </div>
            {faqItems.map((item, index) => (
                <div key={index} className="accordion-item">
                    <div
                        className="accordion-title"
                        onClick={() => toggleAccordion(index)}
                    >
                        {item.question}
                        <span className={`icon ${openIndex === index ? "open" : ""}`}>
                            {openIndex === index ? "-" : "+"}
                        </span>
                    </div>
                    {openIndex === index && (
                        <div className="accordion-content">
                            {item.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default AccordionBlock;
