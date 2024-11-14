
import '../css/app.css';
import './bootstrap';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

// Get the Stripe public key from the .env file
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);


createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx'),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <Elements stripe={stripePromise}>
                <App {...props} />
            </Elements>
        );
    },
    progress: {
        color: '#4B5563',
    },
});
