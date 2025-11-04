<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(Request $request)
    {
        $apiUrl = env('API_FICHAS_URL_V2');
        $apiToken = env('API_FICHAS_TOKEN_V2');
        $endpoint = 'vehicles';

        $queryParams = [
            'idClient' => env('APP_SUCURSALES'),
            'page' => 1,
            'quantity' => 1000,
        ];

        $response = Http::withToken($apiToken)->get("$apiUrl/$endpoint", $queryParams);

        if ($response->successful()) {
            $data = $response->json();
        } else {
            $data = [];
        }

        return Inertia::render('Home', [
            'data' => $data,
        ]);
    }
}
