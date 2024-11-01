<?php

namespace Database\Seeders;

use App\Models\Post;
use Illuminate\Database\Seeder;

class PostSeeder extends Seeder
{
    public function run()
    {
        Post::create([
            'post_created_by' => 1, 
            'post_headline' => 'First Post',
            'post_content' => 'This is the content of the first post.',
            'post_image_url' => null,
            'post_status' => 'draft',
            'post_topic_entered' => 'Topic for first post', // New field
            'image_prompt_entered' => 'Image prompt for first post', // New field
            'platform_selected' => 'Blog', // New field
            'tone_selected' => 'Informative', // New field
        ]);

        Post::create([
            'post_created_by' => 1, 
            'post_headline' => 'Second Post',
            'post_content' => 'This is the content of the second post.',
            'post_image_url' => null,
            'post_status' => 'draft',
            'post_topic_entered' => 'Topic for second post', // New field
            'image_prompt_entered' => 'Image prompt for second post', // New field
            'platform_selected' => 'Social Media', // New field
            'tone_selected' => 'Casual', // New field
        ]);
    }
}
