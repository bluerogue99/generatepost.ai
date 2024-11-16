<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class HeadlineGeneratorController extends Controller
{
    // Generate Headline
    public function generateHeadline(Request $request)
    {
        // Validate the request
        $request->validate([
            'prompt' => 'required|string',
        ]);

        // Get the OpenAI API key from the environment variables
        $apiKey = env('OPENAI_API_KEY_HEADLINE'); 

        // Call the OpenAI API with the gpt-4 model
        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . $apiKey,
        ])->post('https://api.openai.com/v1/chat/completions', [
            'model' => 'gpt-4', 
            'messages' => [
                ['role' => 'system', 'content' => "You are a Social Media Post Generator."],
                ['role' => 'user', 'content' => $request->input('prompt')],
            ],
            'max_tokens' => 60, 
        ]);

        // Check if the response is successful
        if ($response->successful()) {
            return response()->json([
                'headline' => $response->json()['choices'][0]['message']['content'], 
            ]);
        }


        return response()->json(['error' => 'Failed to generate headline: ' . $response->json()['error']['message']], 500); // Change here
    }
}
