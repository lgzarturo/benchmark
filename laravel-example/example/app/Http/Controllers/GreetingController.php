<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

class GreetingController extends Controller
{
    public function index($name = 'World!')
    {
        return response()->json([
            'greeting' => 'Hola ' . $name
        ]);
    }
}
