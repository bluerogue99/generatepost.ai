import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import './Generate.css'; 
import AuthAiBlock from '@/AuthComponents/AuthAiBlock/AuthAiBlock';

export default function Generate() {
    return (
        <AuthenticatedLayout>
            <Head title="Generate" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <AuthAiBlock/>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}


