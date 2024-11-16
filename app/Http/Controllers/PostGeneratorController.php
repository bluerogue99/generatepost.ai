<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;


class PostGeneratorController extends Controller
{
    // Generate Text
    public function generatePost(Request $request)
    {
        // Validate the request
        $request->validate([
            'prompt' => 'required|string',
        ]);

        // Get the OpenAI API key from the environment variables
        $apiKey = env('OPENAI_API_KEY_POST');

        // Call the OpenAI API with the gpt-4 model
        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . $apiKey,
        ])->post('https://api.openai.com/v1/chat/completions', [
            'model' => 'gpt-4', 
            'messages' => [
                ['role' => 'system', 'content' => "You are a helpful assistant."],
                ['role' => 'user', 'content' => $request->input('prompt')],
            ],
            'max_tokens' => 300, // Adjust as needed
        ]);

        // Check if the response is successful
        if ($response->successful()) {
            return response()->json([
                'post' => $response->json()['choices'][0]['message']['content'], 
            ]);
        }
        return response()->json(['error' => 'Failed to generate post: ' . $response->json()['error']['message']], 500); 
    }
}
