import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import './Dashboard.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';
Modal.setAppElement('#app'); 

export default function Dashboard(props) {
    const currentUser = props.auth.user;
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [postToDelete, setPostToDelete] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [postToEdit, setPostToEdit] = useState(null);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [postToView, setPostToView] = useState(null);
    const [isPublishModalOpen, setIsPublishModalOpen] = useState(false);
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

    const handleDeletePost = async () => {
        if (!postToDelete) return;

        try {
            const response = await fetch(`/api/posts/${postToDelete}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                },
            });

            if (response.ok) {
                setPosts(posts.filter(post => post.id !== postToDelete));
                toast.success("Post deleted successfully!"); // Show success toast
            } else {
                const errorResponse = await response.json();
                setErrorMessage("Failed to delete post: " + (errorResponse.message || "Unknown error"));
            }
        } catch (error) {
            console.error("Error deleting post:", error);
            setErrorMessage("An error occurred while deleting the post.");
        } finally {
            setIsModalOpen(false); // Close the modal after deletion
            setPostToDelete(null); // Reset the post to delete
        }
    };


    const handleEditPost = async (updatedPost) => {
        try {
            const response = await fetch(`/api/posts/${updatedPost.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                },
                body: JSON.stringify(updatedPost),
            });

            if (response.ok) {
                const updatedPosts = posts.map(post => post.id === updatedPost.id ? updatedPost : post);
                setPosts(updatedPosts);
                toast.success("Post updated successfully!");
            } else {
                const errorResponse = await response.json();
                setErrorMessage("Failed to update post: " + (errorResponse.message || "Unknown error"));
            }
        } catch (error) {
            console.error("Error updating post:", error);
            setErrorMessage("An error occurred while updating the post.");
        } finally {
            setIsEditModalOpen(false);
            setPostToEdit(null);
        }
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
                                                <th className="px-2 py-3 text-left text-xs font-medium uppercase tracking-wider">Actions</th>
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
                                                    <td className="px-2 py-4 whitespace-nowrap text-sm">
                                                        <button
                                                            onClick={() => setIsPublishModalOpen(true)}
                                                            className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4"
                                                        >
                                                            Publish Now
                                                        </button>
                                                        <button
                                                            className="text-green-500 hover:text-green-700"
                                                            onClick={() => {
                                                                setPostToView(post); 
                                                                setIsViewModalOpen(true); 
                                                            }}
                                                        >
                                                            View
                                                        </button>

                                                        <button 
                                                            className="text-blue-500 hover:text-blue-700"
                                                            onClick={() => {
                                                                setPostToEdit(post); 
                                                                setIsEditModalOpen(true);
                                                            }}
                                                        >
                                                            Edit
                                                        </button>
                                                        <button 
                                                            className="text-red-500 hover:text-red-700"
                                                            onClick={() => {
                                                                setPostToDelete(post.id); 
                                                                setIsModalOpen(true); 
                                                            }}
                                                        >
                                                            Delete
                                                        </button>
                                                    </td>
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
    
            <ToastContainer /> 
            
            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                contentLabel="Confirm Deletion"
                className="modal"
                overlayClassName="overlay"
            >
                <h2 className="text-lg font-bold">Confirm Deletion</h2>
                <p>Are you sure you want to delete this post?</p>
                <div className="flex justify-end mt-4">
                    <button onClick={() => setIsModalOpen(false)} className="mr-2 bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded">
                        Cancel
                    </button>
                    <button onClick={handleDeletePost} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Delete
                    </button>
                </div>
            </Modal>


            <Modal
                isOpen={isEditModalOpen}
                onRequestClose={() => setIsEditModalOpen(false)}
                contentLabel="Edit Post"
                className="modal"
                overlayClassName="overlay"
            >
                {postToEdit && (
                    <form className="editform" onSubmit={(e) => {
                        e.preventDefault();
                        handleEditPost({
                            ...postToEdit,
                            post_headline: e.target.elements.postHeadline.value,
                            post_content: e.target.elements.postContent.value,
                        });
                    }}>
                        <label>Post Headline</label>
                        <input
                            type="text"
                            name="postHeadline"
                            className="edit-postheadline"
                            defaultValue={postToEdit.post_headline}
                        />
                        <label>Post Content</label>
                        <textarea
                            name="postContent"
                            className="edit-postarea"
                            defaultValue={postToEdit.post_content}
                        />
                        <div className="submit-buttoncontainer">
                            <button className="editsubmit" type="submit">Save</button>
                            <button className="editcancel" onClick={() => setIsEditModalOpen(false)}>Cancel</button>
                        </div>
                    </form>
                )}
            </Modal>
            <Modal
                isOpen={isViewModalOpen}
                onRequestClose={() => setIsViewModalOpen(false)}
                contentLabel="View Post"
                className="modal"
                overlayClassName="overlay"
            >
                {postToView && (
                    <div className="view-post">
                        <h2 className="text-lg font-bold">{postToView.post_headline}</h2>
                        <p className="mt-2 mb-4">{postToView.post_content}</p>
                        {postToView.post_image_url && (
                            <img
                                src={postToView.post_image_url}
                                alt="Post Image"
                                className="h-32 w-32 object-cover mb-4"
                            />
                        )}
                        <p><strong>Status:</strong> {postToView.post_status}</p>
                        <p><strong>Topic:</strong> {postToView.post_topic_entered || 'N/A'}</p>
                        <p><strong>Image Prompt:</strong> {postToView.image_prompt_entered || 'N/A'}</p>
                        <p><strong>Platform:</strong> {postToView.platform_selected || 'N/A'}</p>
                        <p><strong>Tone:</strong> {postToView.tone_selected || 'N/A'}</p>
                        <p><strong>Created By:</strong> {postToView.user ? postToView.user.name : 'Unknown'}</p>
                        <div className="flex justify-end mt-4">
                            <button
                                onClick={() => setIsViewModalOpen(false)}
                                className="close-button"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </Modal>


            <Modal
                isOpen={isPublishModalOpen}
                onRequestClose={() => setIsPublishModalOpen(false)}
                contentLabel="Publish Options"
                className="modal"
                overlayClassName="overlay"
            >
                <h2 className="text-lg text-center font-bold">Publish to Platform</h2>
                    <div className="flex flex-col mt-4">
                        <button onClick={() => handlePublish("Facebook")} className="publish-button publish-button-facebook">Publish on Facebook</button>
                        <button onClick={() => handlePublish("Instagram")} className="publish-button publish-button-instagram">Publish on Instagram</button>
                        <button onClick={() => handlePublish("TikTok")} className="publish-button publish-button-tiktok">Publish on TikTok</button>
                        <button onClick={() => handlePublish("X")} className="publish-button publish-button-x">Publish on X</button>
                        <button onClick={() => handlePublish("LinkedIn")} className="publish-button publish-button-linkedin">Publish on LinkedIn</button>
                    </div>
                        <div className="flex justify-end mt-4">
                            <button onClick={() => setIsPublishModalOpen(false)} className="close-button">
                                Close
                            </button>
                        </div>
                    </Modal>
            
        </AuthenticatedLayout>
    );
}    
