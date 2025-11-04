<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function index()
    {
        return Inertia::render('Contact');
    }

    public function send(Request $request)
    {
        $validated = $request->validate([
            'name'    => 'required|string|max:100',
            'email'   => 'required|email|max:100',
            'phone'   => 'required|regex:/^[0-9+ ]{8,15}$/',
            'message' => 'required|string|max:1000',
        ], [
            'name.required'    => 'El nombre es obligatorio.',
            'email.required'   => 'El correo es obligatorio.',
            'email.email'      => 'Debe ingresar un correo válido.',
            'phone.required'   => 'El teléfono es obligatorio.',
            'phone.regex'      => 'El teléfono debe tener entre 8 y 15 dígitos.',
            'message.required' => 'Debe ingresar un mensaje.',
        ]);

        // Enviar correo
        try {
            Mail::send('emails.contact', $validated, function ($mail) use ($validated) {
                $mail->to(env('MAIL_FROM_ADDRESS', 'info@automotora.cl'))
                    ->subject('Nuevo mensaje desde el formulario de contacto');
            });

            return back()->with('success', 'Tu mensaje fue enviado correctamente.');
        } catch (\Exception $e) {
            return back()->withErrors(['error' => 'Error al enviar el correo.'])->withInput();
        }
    }
}
