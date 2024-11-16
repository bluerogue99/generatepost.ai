import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function SubscriptionSuccess() {
    return (
        <AuthenticatedLayout>
            <Head title="Subscription Success" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <h2 className="text-2xl font-semibold">Subscription Successful!</h2>
                            <p>Your subscription has been created successfully. Thank you for subscribing! Navigate to Generate tab to start using Premium features.</p>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
