<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Cache;

class CarDetailController extends Controller
{
    public function getSingleCar(Request $request, $brand, $model, $autoid)
    {
        try {
            $apiUrl = env('API_FICHAS_URL_V2');
            $apiToken = env('API_FICHAS_TOKEN_V2');
            $endpoint = 'vehicle';

            $response = Http::withToken($apiToken)->get("$apiUrl/$endpoint", [
                'id' => $autoid,
            ]);

            if (!$response->successful()) {
                throw new \Exception('No se pudo obtener la información del vehículo');
            }

            $data = $response->json();
            \Log::info('🔍 Car detail response:', $data);
            $car = $this->transformCarDetailData($data);

            if (empty($car['price'])) {
                throw new \Exception('El vehículo no tiene precio disponible');
            }

            return Inertia::render('CarDetail', [
                'car' => $car,
            ]);
        } catch (\Exception $e) {
            return Inertia::render('CarDetail', [
                'error' => $e->getMessage(),
            ]);
        }
    }

    private function transformCarDetailData($data)
{
    if (!isset($data['ad']) || !isset($data['seller'])) {
        throw new \InvalidArgumentException('Datos del vehículo inválidos');
    }

    $ad = $data['ad'];
    $seller = $data['seller'];

    // Aseguramos compatibilidad con "meddia"
    $media = $ad['meddia'] ?? $ad['media'] ?? $ad['mediaa'] ?? null;
    $photos = isset($media['images']) ? $media['images'] : [];

    return [
        'id' => $ad['identifier'] ?? null,
        'title' => $ad['keyword'] ?? 'Sin título',
        'description' => $ad['description'] ?? '',
        'price' => $ad['prices']['price'] ?? 0,
        'year' => $ad['specification']['year'] ?? '-',
        'version' => $ad['specification']['version'] ?? '-',
        'mileage' => $ad['specification']['mileage'] ?? 0,
        'engine' => $ad['specification']['engineCapacity'] ?? '-',
        'fuel' => $ad['specification']['fuel']['name'] ?? '-',
        'transmission' => $ad['specification']['transmission']['name'] ?? '-',
        'brand' => $ad['specification']['brand']['name'] ?? '-',
        'model' => $ad['specification']['model']['name'] ?? '-',
        'photos' => $photos,
        'ribbon' => $ad['ribbon']['name'] ?? null,
        'ribbonColor' => $ad['ribbon']['color'] ?? '#0051c5',
        'ribbonTextColor' => $ad['ribbon']['textColor'] ?? '#ffffff',
        'seller' => $seller['name'] ?? 'Sin vendedor',
        'sellerLogo' => $seller['logo'] ?? null,
        'sellerPhone' => $seller['contactData']['phoneNumber1'] ?? null,
        'sellerMail' => $seller['contactData']['mail'] ?? null,
    ];
}

}
