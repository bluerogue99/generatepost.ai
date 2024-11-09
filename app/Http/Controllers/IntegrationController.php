<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\FacebookIntegration;
use App\Models\InstagramIntegration;
use App\Models\TwitterIntegration;
use App\Models\LinkedInIntegration;
use App\Models\TikTokIntegration;

class IntegrationController extends Controller
{
    /**
     * Display the integrations dashboard.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return Inertia::render('Integration');
    }


    /*Facebook*/
    // Facebook Integration Methods
    public function indexFacebook()
    {
        return FacebookIntegration::all();
    }

    public function storeFacebook(Request $request)
    {
        $data = $request->validate([
            'app_id' => 'required|string|unique:facebook_integrations',
            'app_secret' => 'required|string',
            'access_token' => 'required|string',
            'page_id' => 'nullable|string',
        ]);

        return FacebookIntegration::create($data);
    }

    public function showFacebook($id)
    {
        return FacebookIntegration::findOrFail($id);
    }

    public function updateFacebook(Request $request, $id)
    {
        $integration = FacebookIntegration::findOrFail($id);
        $data = $request->validate([
            'app_id' => 'required|string',
            'app_secret' => 'required|string',
            'access_token' => 'required|string',
            'page_id' => 'nullable|string',
        ]);

        $integration->update($data);
        return $integration;
    }

    public function destroyFacebook($id)
    {
        FacebookIntegration::destroy($id);
        return response()->json(null, 204);
    }


    /*Facebook Callback Handling*/
    /*
    public function handleFacebookCallback(Request $request)
    {
        $client = new Client();
        $code = $request->input('code');

        // Exchange code for access token
        $response = $client->post('https://graph.facebook.com/v10.0/oauth/access_token', [
            'form_params' => [
                'client_id' => env('FACEBOOK_APP_ID'),
                'client_secret' => env('FACEBOOK_APP_SECRET'),
                'redirect_uri' => 'http://localhost:3000/facebook/callback', 
                'code' => $code,
            ],
        ]);

        $data = json_decode($response->getBody(), true);

        // Respond with the access token (store it in session or database as needed)
        return response()->json($data);
    }
    */

}
