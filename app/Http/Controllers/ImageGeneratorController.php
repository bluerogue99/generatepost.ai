<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ImageGeneratorController extends Controller
{
    // Generate Image using OpenAI's DALL-E API
    public function generateImage(Request $request)
    {
        // Validate the request to ensure prompt is provided
        $request->validate([
            'prompt' => 'required|string',
        ]);

        // Get the OpenAI API key from the environment variables
        $apiKey = env('OPENAI_API_KEY_IMAGE');

        try {
            // Call the OpenAI API to generate an image
            $response = Http::withHeaders([
                'Authorization' => 'Bearer ' . $apiKey, 
                'Content-Type' => 'application/json',
            ])->post('https://api.openai.com/v1/images/generations', [
                'model' => 'dall-e-3', 
                'prompt' => $request->input('prompt'), 
                'n' => 1,  
                'size' => '1024x1024',  
                'response_format' => 'url',  
            ]);

            // Check if the response was successful
            if ($response->successful()) {
                // Extract image URL from the response
                $imageUrl = $response->json()['data'][0]['url'];

                // Return the image URL as a JSON response
                return response()->json([
                    'image_url' => $imageUrl,
                ]);
            } else {
                // Return a failed response
                return response()->json(['error' => 'Failed to generate image.'], $response->status());
            }
        } catch (\Exception $e) {
            // Return an error response
            return response()->json(['error' => 'An error occurred while generating the image.'], 500);
        }
    }
}
