<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="title" content="PostGenerator.io - Free AI Social Media Post Generator">
        <meta name="description" content="PostGenerator.io is an AI-powered tool to help you generate engaging social media posts, blog content, and more. Create unique posts with ease for free.">
        <title>PostGenerator.io - Free AI Social Media Post Generator</title>


        <!-- Google Indexing -->
        <!-- Open Graph Meta Tags -->
        <meta property="og:title" content="PostGenerator.io">
        <meta property="og:description" content="AI-powered social media post generator.">
        <meta property="og:image" content="https://postgenerator.io/assets/meta.png">
        <meta property="og:image:width" content="1200">
        <meta property="og:image:height" content="630">
        <meta property="og:url" content="https://postgenerator.io">
        <meta property="og:type" content="website">

        <!-- Twitter Card Meta Tags -->
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="PostGenerator.io">
        <meta name="twitter:description" content="AI-powered social media post generator.">
        <meta name="twitter:image" content="https://postgenerator.io/assets/meta.png">

        <!-- LinkedIn Meta Tags -->
        <meta property="linkedin:image" content="https://postgenerator.io/assets/meta.png">

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
        <script src="https://js.stripe.com/v3/"></script>

        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZE6M208LPR"></script>
        <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-ZE6M208LPR');
        </script>


        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
