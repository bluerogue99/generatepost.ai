<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post; 

class PostController extends Controller
{
    // Store a new post
    public function store(Request $request)
    {
        try {
            $validated = $request->validate([
                'post_created_by' => 'required|exists:users,id',
                'post_content' => 'required|string',
                'post_image_url' => 'nullable|string',
                'post_headline' => 'required|string|max:255',
                'post_status' => 'required|string|in:draft,published',
                'post_topic_entered' => 'nullable|string',
                'image_prompt_entered' => 'nullable|string', 
                'platform_selected' => 'nullable|string',
                'tone_selected' => 'nullable|string', 
            ]);
    
            $post = Post::create($validated);
            
            return response()->json(['message' => 'Post created successfully', 'post' => $post], 201);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json(['message' => 'Validation Error', 'errors' => $e->errors()], 422);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Internal Server Error'], 500);
        }
    }

    // Get all posts
    
    public function index(Request $request)
    {
        $user = request()->user();
        $posts = Post::where('post_created_by', $user->id)->with('user')->get();
        return response()->json($posts, 200);
    }
    
    // Get a single post
    public function show($id)
    {
        $post = Post::with('user')->find($id);

        if (!$post) {
            return response()->json(['message' => 'Post not found'], 404);
        }

        return response()->json($post, 200);
    }

    // Update an existing post
    public function update(Request $request, $id)
    {
        try {
            $post = Post::findOrFail($id);

            $validated = $request->validate([
                'post_headline' => 'nullable|string|max:255',
                'post_content' => 'nullable|string',
                'post_image_url' => 'nullable|string',
                'post_status' => 'nullable|string|in:draft,published',
                'post_topic_entered' => 'nullable|string', 
                'image_prompt_entered' => 'nullable|string',
                'platform_selected' => 'nullable|string',
                'tone_selected' => 'nullable|string', 
            ]);

            $post->update(array_filter($validated)); 
            return response()->json(['message' => 'Post updated successfully', 'post' => $post], 200);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json(['message' => 'Validation Error', 'errors' => $e->errors()], 422);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Internal Server Error'], 500);
        }
    }

    // Delete a post
    public function destroy($id)
    {
        try {
            $post = Post::findOrFail($id);
            $post->delete();

            return response()->json(['message' => 'Post deleted successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Internal Server Error'], 500);
        }
    }
}
