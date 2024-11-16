<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\FacebookIntegration;

class IntegrationController extends Controller
{
    public function index()
    {
        return Inertia::render('Integration');
    }

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
}
