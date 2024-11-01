import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import './Dashboard.css';

export default function Dashboard(props) {
    const currentUser = props.auth.user;
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(`/api/posts?user_id=${currentUser.id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch posts');
                }
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error("Error fetching posts:", error);
                setErrorMessage('Failed to load posts. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, [currentUser.id]);

    const limitWords = (text, limit) => {
        if (!text) return '';
        const words = text.split(' ');
        return words.length > limit ? words.slice(0, limit).join(' ') + '...' : text;
    };

    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="text-gray-900 dark:text-gray-100">
                            {loading && <p>Loading...</p>}
                            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                            {posts.length === 0 && !loading && (
                                <p className="text-center text-gray-500">Your generated posts will show up here.</p>
                            )}
                            {posts.length > 0 && (
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-700">
                                        <thead className="bg-gray-800 text-white">
                                            <tr>
                                                <th className="px-2 py-3 text-left text-xs font-medium uppercase tracking-wider">Post Headline</th>
                                                <th className="px-2 py-3 text-left text-xs font-medium uppercase tracking-wider">Post Content</th>
                                                <th className="px-2 py-3 text-left text-xs font-medium uppercase tracking-wider">Image URL</th>
                                                <th className="px-2 py-3 text-left text-xs font-medium uppercase tracking-wider">Status</th>
                                                <th className="px-2 py-3 text-left text-xs font-medium uppercase tracking-wider">Topic Entered</th>
                                                <th className="px-2 py-3 text-left text-xs font-medium uppercase tracking-wider">Image Prompt</th>
                                                <th className="px-2 py-3 text-left text-xs font-medium uppercase tracking-wider">Platform Selected</th>
                                                <th className="px-2 py-3 text-left text-xs font-medium uppercase tracking-wider">Tone Selected</th>
                                                <th className="px-2 py-3 text-left text-xs font-medium uppercase tracking-wider">Created By</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-gray-700 text-white">
                                            {posts.map((post) => (
                                                <tr key={post.id} className="hover:bg-gray-600">
                                                    <td className="px-2 py-4 whitespace-nowrap text-sm">{limitWords(post.post_headline, 4)}</td>
                                                    <td className="px-2 py-4 whitespace-nowrap text-sm">{limitWords(post.post_content, 4)}</td>
                                                    <td className="px-2 py-4 whitespace-nowrap text-sm">
                                                        {post.post_image_url ? (
                                                            <img
                                                                src={post.post_image_url}
                                                                alt="Post thumbnail"
                                                                className="h-16 w-16 object-cover"
                                                            />
                                                        ) : (
                                                            'N/A'
                                                        )}
                                                    </td>
                                                    <td className="px-2 py-4 whitespace-nowrap text-sm">{post.post_status}</td>
                                                    <td className="px-2 py-4 whitespace-nowrap text-sm">{post.post_topic_entered || 'N/A'}</td>
                                                    <td className="px-2 py-4 whitespace-nowrap text-sm">{post.image_prompt_entered || 'N/A'}</td>
                                                    <td className="px-2 py-4 whitespace-nowrap text-sm">{post.platform_selected || 'N/A'}</td>
                                                    <td className="px-2 py-4 whitespace-nowrap text-sm">{post.tone_selected || 'N/A'}</td>
                                                    <td className="px-2 py-4 whitespace-nowrap text-sm">{post.user ? post.user.name : 'Unknown'}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
