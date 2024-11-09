import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import './Integration.css';

export default function Integration( {auth} ) {

    if (!auth.user) {
        return <p>Please log in to connect your accounts.</p>;
    }

    const handleFacebookConnect = () => {
        const appId = 'FACEBOOK_APP_ID'; 
        const redirectUri = 'http://localhost:8000/facebook/callback'; 
        const scope = 'pages_manage_posts,pages_read_engagement,pages_read_user_content,pages_show_list'; 
        const facebookAuthUrl = `https://www.facebook.com/v10.0/dialog/oauth?client_id=${appId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scope}`;

        window.location.href = facebookAuthUrl; 
    };


    

    return (
        <AuthenticatedLayout>
            <Head title="Integration" />

            <div className="py-12">
                {/* Facebook Integration Section */}
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 mb-4">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <h1 className="text-2xl font-bold">Facebook Integration</h1>
                            <p className="mt-2">Connect your Facebook account to manage posts and view analytics.</p>
                            <button
                                onClick={handleFacebookConnect}
                                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
                            >
                                Connect Facebook
                            </button>
                        </div>
                    </div>
                </div>

                {/* Instagram Integration Section */}
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 mb-4">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <h1 className="text-2xl font-bold">Instagram Integration</h1>
                            <p className="mt-2">Link your Instagram Business account to publish and analyze posts.</p>
                            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Connect Instagram</button>
                        </div>
                    </div>
                </div>

                {/* TikTok Integration Section */}
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 mb-4">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <h1 className="text-2xl font-bold">TikTok Integration</h1>
                            <p className="mt-2">Integrate your TikTok Business account to manage posts.</p>
                            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Connect TikTok</button>
                        </div>
                    </div>
                </div>

                {/* X (Twitter) Integration Section */}
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 mb-4">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <h1 className="text-2xl font-bold">X Integration</h1>
                            <p className="mt-2">Connect your X account to publish tweets and track engagement.</p>
                            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Connect X</button>
                        </div>
                    </div>
                </div>

                {/* LinkedIn Integration Section */}
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <h1 className="text-2xl font-bold">LinkedIn Integration</h1>
                            <p className="mt-2">Link your LinkedIn account to manage professional posts.</p>
                            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Connect LinkedIn</button>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
