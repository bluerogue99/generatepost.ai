import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function StripeSuccess() {
    return (
        <AuthenticatedLayout>
            <Head title="Subscription Success" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <h2 className="text-2xl font-bold">Payment Success!</h2>
                            <p>Your payment was successfully processed. Thank you for your subscription!</p>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}