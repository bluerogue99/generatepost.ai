import React, { useState, useEffect } from 'react';
import './AuthAiForm.css'; 
import AuthFacebookPost from '../AuthFacebookPost/AuthFacebookPost';
import AuthInstagramPost from '../AuthInstagramPost/AuthInstagramPost';
import AuthTikTokPost from '../AuthTikTokPost/AuthTikTokPost';
import AuthXPost from '../AuthXPost/AuthXPost';
import AuthLinkedInPost from '../AuthLinkedInPost/AuthLinkedinPost.jsx';
import { usePage } from '@inertiajs/react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const toneOptions = [
    { label: 'Casual 😊', value: 'casual' },
    { label: 'Professional 👔', value: 'professional' },
    { label: 'Conversational 🗣️', value: 'conversational' },
    { label: 'Friendly 🤗', value: 'friendly' },
    { label: 'Humorous 😂', value: 'humorous' },
    { label: 'Authoritative 📜', value: 'authoritative' },
    { label: 'Sarcastic 😏', value: 'sarcastic' },
    { label: 'Emotional 😢', value: 'emotional' },
    { label: 'Storytelling 📖', value: 'storytelling' },
    { label: 'Creative 🎨', value: 'creative' },
    { label: 'Engaging 📣', value: 'engaging' },
    { label: 'Inspirational 🌟', value: 'inspirational' },
];

const AiForm = ({ buttonText, selectedPlatform }) => {
    const { props } = usePage();
    const currentUser = props.auth.user;
    const [postTopic, setPostTopic] = useState('');
    const [imagePrompt, setImagePrompt] = useState('');
    const [toneOfVoice, setToneOfVoice] = useState('');
    const [generatedPost, setGeneratedPost] = useState('');
    const [generatedImageUrl, setGeneratedImageUrl] = useState(''); 
    const [generatedHeadline, setGeneratedHeadline] = useState(''); 
    const [errorMessage, setErrorMessage] = useState(''); 
    const [loading, setLoading] = useState(false); 
    const [isPostGenerated, setIsPostGenerated] = useState(false); 
    const [isImageGenerated, setIsImageGenerated] = useState(false);
    const [isPostSaved, setIsPostSaved] = useState(false);

    // State variables for targeted audience
    const [ageFrom, setAgeFrom] = useState('');
    const [ageTo, setAgeTo] = useState('');
    const [gender, setGender] = useState('');
    const [location, setLocation] = useState('');
    const [interest, setInterest] = useState('');



    useEffect(() => {
        setIsPostGenerated(false);
    }, []);


    /*Facebook UseEffect*/
    useEffect(() => {
        const facebookPostContainer = document.querySelector('.facebook-post');
        
        if (facebookPostContainer) {
            if (isPostGenerated && isImageGenerated) {
                facebookPostContainer.classList.add('generated-active');
                facebookPostContainer.classList.remove('generated-passive');
            } else {
                facebookPostContainer.classList.add('generated-passive');
                facebookPostContainer.classList.remove('generated-active');
            }
        }
    }, [isPostGenerated, isImageGenerated]);

    /*Instagram UseEffect*/
    useEffect(() => {
        const instagramPostContainer = document.querySelector('.instagram-post');
        
        if (instagramPostContainer) {
            if (isPostGenerated && isImageGenerated) {
                instagramPostContainer.classList.add('generated-active');
                instagramPostContainer.classList.remove('generated-passive');
            } else {
                instagramPostContainer.classList.add('generated-passive');
                instagramPostContainer.classList.remove('generated-active');
            }
        }
    }, [isPostGenerated, isImageGenerated]);

    /*TikTok UseEffect*/
    useEffect(() => {
        const tiktokPostContainer = document.querySelector('.tiktok-post');
        
        if (tiktokPostContainer) {
            if (isPostGenerated && isImageGenerated) {
                tiktokPostContainer.classList.add('generated-active');
                tiktokPostContainer.classList.remove('generated-passive');
            } else {
                tiktokPostContainer.classList.add('generated-passive');
                tiktokPostContainer.classList.remove('generated-active');
            }
        }
    }, [isPostGenerated, isImageGenerated]);

    /*X UseEffect*/
    useEffect(() => {
        const xPostContainer = document.querySelector('.x-post');
        
        if (xPostContainer) {
            if (isPostGenerated && isImageGenerated) {
                xPostContainer.classList.add('generated-active');
                xPostContainer.classList.remove('generated-passive');
            } else {
                xPostContainer.classList.add('generated-passive');
                xPostContainer.classList.remove('generated-active');
            }
        }
    }, [isPostGenerated, isImageGenerated]);


    /*LinkedIn UseEffect*/
    useEffect(() => {
        const LednInPostContainer = document.querySelector('.linkedin-post');
        
        if (LednInPostContainer) {
            if (isPostGenerated && isImageGenerated) {
                LednInPostContainer.classList.add('generated-active');
                LednInPostContainer.classList.remove('generated-passive');
            } else {
                LednInPostContainer.classList.add('generated-passive');
                LednInPostContainer.classList.remove('generated-active');
            }
        }
    }, [isPostGenerated, isImageGenerated]);

    const handleGeneratePost = async () => {
        // Reset error message
        setErrorMessage('');
        
        if (!postTopic.trim() && !toneOfVoice) {
            setErrorMessage("Please enter your post topic and set a tone of voice.");
            return;
        }
        if (!postTopic.trim()) {
            setErrorMessage("Please enter your post topic.");
            return;
        }
        if(!imagePrompt.trim()) {
            setErrorMessage("Please enter an image prompt."); 
            return;
        }
        if (!toneOfVoice) {
            setErrorMessage("Please select a tone of voice.");
            return;
        }


        const getArticle = (tone) => {
            const vowels = ['a', 'e', 'i', 'o', 'u'];
            return vowels.includes(tone[0].toLowerCase()) ? 'an' : 'a';
        };


        // Construct the target audience prompt
        let audiencePrompt = '';
        if (ageFrom && ageTo) {
            audiencePrompt += `Target ${ageFrom}-${ageTo} years old`;
        }
        if (gender) {
            audiencePrompt += ` ${gender.toLowerCase()}`;
        }
        if (location) {
            audiencePrompt += ` who live in ${location}`;
        }
        if (interest) {
            audiencePrompt += ` and are interested in ${interest}`;
        }

        /*Image prompt size adjustment based on platform selected*/


        // Define the resolutions
        const tiktokResolution = `9:16 aspect ratio that is a longer portrait image`;
        const facebookResolution = `1:1 aspect ratio and a resolution of 1080x1080 pixels`;
        const instagramResolution = `4:5 aspect ratio and a resolution of 1080x1350 pixels`;
        const xResolution = `16:9 aspect ratio and a resolution of 1200x675 pixels`;
        const linkedinResolution = `1.91:1 aspect ratio and a resolution of 1200x627 pixels`;

        // Select the appropriate resolution based on the platform
        let resolution;
        switch (selectedPlatform) {
            case 'TikTok':
                resolution = tiktokResolution;
                break;
            case 'Facebook':
                resolution = facebookResolution;
                break;
            case 'Instagram':
                resolution = instagramResolution;
                break;
            case 'X':
                resolution = xResolution;
                break;
            case 'LinkedIn':
                resolution = linkedinResolution;
                break;
            default:
                resolution = 'default resolution'; 
        }

        // Generate the image prompt
        const generateImagePrompt = `Generate a ${selectedPlatform} image on the topic of "${imagePrompt}" with ${resolution}, using ${getArticle(toneOfVoice)} ${toneOfVoice} tone.`;
        const post = `Generate a ${selectedPlatform} post on the topic "${postTopic}" with ${getArticle(toneOfVoice)} ${toneOfVoice} tone. ${audiencePrompt}`;
        const prompt = post.replace("Your prompt is: ", "").trim();
        const sanitizedPostTopic = postTopic.replace(/"/g, '').replace(/'/g, '');
        const generateHeadlinePrompt = `Create a catchy headline for a ${selectedPlatform} post about ${sanitizedPostTopic} with a ${getArticle(toneOfVoice)} ${toneOfVoice} tone.`;
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        
        setLoading(true);
        setGeneratedPost('Generating your post...'); 
        setIsPostGenerated(false); 
        setIsImageGenerated(false);

        try {

            // Generate headline
            const headlineResponse = await fetch('/api/generate-authenticated-headline', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrfToken,
                },
                body: JSON.stringify({ prompt: generateHeadlinePrompt }),
            });

            const headlineData = await headlineResponse.json();
            if (headlineResponse.ok) {
                setGeneratedHeadline(headlineData.headline); 
            } else {
                setErrorMessage("Error generating headline: " + (headlineData.error || "Unknown error"));
            }


            // Generate post
            const postResponse = await fetch('/api/generate-authenticated-post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrfToken, 
                },
                body: JSON.stringify({ prompt }),
            });

            const postData = await postResponse.json();
            if (postResponse.ok) {
                setGeneratedPost(postData.post); 
                setIsPostGenerated(true);
                // Now generate the image
                const imageResponse = await fetch('/api/generate-authenticated-image', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': csrfToken,
                    },
                    body: JSON.stringify({ prompt: generateImagePrompt }),
                });

                const imageData = await imageResponse.json();
                if (imageResponse.ok) {
                    setGeneratedImageUrl(imageData.image_url); 
                    setIsImageGenerated(true);
                } else {
                    setErrorMessage("Error generating image: " + (imageData.error || "Unknown error"));
                }
            } else {
                setErrorMessage("Error generating post: " + (postData.message || "Unknown error"));
            }
        } catch (error) {
            console.error("Error:", error);
            setErrorMessage("An error occurred while generating the post.");
        } finally {
            setLoading(false);
        }
    };



    const handleSavePost = async () => {
        try {
            const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
            const response = await fetch('/api/posts', { // Ensure this matches your route
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrfToken,
                },
                body: JSON.stringify({
                    post_created_by: currentUser ? currentUser.id : null, 
                    post_content: generatedPost,
                    post_image_url: generatedImageUrl,
                    post_headline: generatedHeadline,
                    post_status: "draft",
                    post_topic_entered: postTopic, // New field
                    image_prompt_entered: imagePrompt, // New field
                    platform_selected: selectedPlatform, // New field from props
                    tone_selected: toneOfVoice, // New field
                }),
            });
    
            if (response.ok) {
                setIsPostSaved(true);
                toast.success("Post saved!");
            } else {
                const errorResponse = await response.json();
                setErrorMessage("Failed to save post: " + (errorResponse.message || "Unknown error"));
                toast.error("Failed to save post: " + (errorResponse.message || "Unknown error")); 
            }
        } catch (error) {
            console.error("An error occurred:", error);
            setErrorMessage("An error occurred while saving the post.");
        }
    };
    
    

    return (
        <div className="form-container">
            <h2 className="form-label">Enter Your Post Topic</h2>
            <input
                type="text"
                placeholder="Digital Marketing, Social Media, Branding, Content Marketing"
                value={postTopic}
                onChange={(e) => setPostTopic(e.target.value)} // Correctly set postTopic
                className="post-topic-input"
            />
            <h2 className="form-label">Enter Image Prompt</h2>
            <input
                type="text"
                placeholder="business woman holding an apple"
                value={imagePrompt}
                onChange={(e) => setImagePrompt(e.target.value)} // Correctly set imagePrompt
                className="post-topic-input"
            />
            <h2 className="form-label">Tone of Voice</h2>
            <select 
                value={toneOfVoice} 
                onChange={(e) => setToneOfVoice(e.target.value)} 
                className="tone-dropdown"
            >
                <option value="" disabled>Select tone</option>
                {toneOptions.map((tone) => (
                    <option key={tone.value} value={tone.value}>
                        {tone.label}
                    </option>
                ))}
            </select>

            <div className="target-audience">
                <h2 className="form-label">Set Your Target Audience</h2>
                <div className="age-wrapper">
                    <div className="age-from-wrapper">
                        <label>Age From:</label>
                        <input className="age-from-input" type="number" value={ageFrom} onChange={(e) => setAgeFrom(e.target.value)} placeholder="20" />
                    </div>
                    <div className="age-to-wrapper">
                        <label>Age To:</label>
                        <input className="age-to-input" type="number" value={ageTo} onChange={(e) => setAgeTo(e.target.value)} placeholder="25" />
                    </div>
                </div>

                <div className="gender-wrapper">
                    <label>Gender:</label>
                    <div className="gender-label-wrapper">
                        <label className="gender-label">
                            <input type="radio" value="Male" checked={gender === 'Male'} onChange={() => setGender('Male')} />
                            Male
                        </label>
                        <label className="gender-label">
                            <input type="radio" value="Female" checked={gender === 'Female'} onChange={() => setGender('Female')} />
                            Female
                        </label>
                        <label className="gender-label">
                            <input type="radio" value="Male and Female" checked={gender === 'Male and Female'} onChange={() => setGender('Male and Female')} />
                            Both Male and Female
                        </label>
                        <label className="gender-label">
                            <input type="radio" value="Other" checked={gender === 'Other'} onChange={() => setGender('Other')} />
                            Other
                        </label>
                    </div>
                </div>

                <div className="location-interest-wrapper">
                    <div className="location-wrapper">
                        <label className="gender-label">Location:</label>
                        <input className="location-input" type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Los Angeles" />
                    </div>
                    <div className="interest-wrapper">
                        <label className="interest-label">Interest:</label>
                        <input className="interest-input" type="text" value={interest} onChange={(e) => setInterest(e.target.value)} placeholder="real estate" />
                    </div>
                </div>
            </div>

            <button onClick={handleGeneratePost} className="generate-button action-button" disabled={loading}>
                {loading ? 'Generating...' : buttonText}
            </button>

            <div className="generated-post-block">
                {!isPostGenerated && !loading && <p>No posts generated yet.</p>} {/* New message */}
                {loading && <p>Just a second, we are generating your {selectedPlatform} post.</p>}
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                {isPostGenerated && isImageGenerated && (
                <p>
                    {document.getElementById('generated-content')?.classList.contains('generated-active') ? 
                    "Success! See your generated post below." : 
                    document.getElementById('generated-content')?.classList.contains('generated-passive') ?
                    "Generate another post." : null}
                </p>
                )}
            </div>

            <div>
                {selectedPlatform === 'Facebook' && (
                    <AuthFacebookPost 
                        postContent={generatedPost} 
                        generatedImageUrl={generatedImageUrl}
                        generatedHeadline={generatedHeadline} 
                    />
                )}
                {selectedPlatform === 'Instagram' && (
                    <AuthInstagramPost 
                        postContent={generatedPost} 
                        generatedImageUrl={generatedImageUrl}
                        generatedHeadline={generatedHeadline} 
                    />
                )}
                {selectedPlatform === 'TikTok' && (
                    <AuthTikTokPost 
                    postContent={generatedPost} 
                    generatedImageUrl={generatedImageUrl}
                    generatedHeadline={generatedHeadline}
                    />
                )}
                {selectedPlatform === 'X' && (
                    <AuthXPost 
                    postContent={generatedPost} 
                    generatedImageUrl={generatedImageUrl}
                    generatedHeadline={generatedHeadline}
                    />
                )}
                {selectedPlatform === 'LinkedIn' && (
                    <AuthLinkedInPost 
                    postContent={generatedPost} 
                    generatedImageUrl={generatedImageUrl}
                    generatedHeadline={generatedHeadline}
                    />
                )}
            </div>

            {/* Save post to db button */}
            {isPostGenerated && isImageGenerated && (
                <div className="save-post-container">
                    <button onClick={handleSavePost} className="save-button">
                        Save
                    </button>
                </div>  
            )}
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
        </div>
    );
};

export default AiForm;
