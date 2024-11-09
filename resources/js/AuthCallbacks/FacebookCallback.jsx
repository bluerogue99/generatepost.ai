import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default function FacebookCallback() {
    const history = useHistory();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');

        if (code) {
            // Make an API call to your backend to exchange the code for an access token
            fetch('/api/facebook/callback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ code }),
            })
            .then((response) => response.json())
            .then((data) => {
                // Handle success - you can store tokens in context/state
                console.log('Access Token:', data.access_token);
                history.push('/integration'); // Redirect to integration page
            })
            .catch((error) => {
                console.error('Error:', error);
                // Handle error (show notification)
            });
        }
    }, []);

    return <div>Loading...</div>; // Show a loading state while processing
}
