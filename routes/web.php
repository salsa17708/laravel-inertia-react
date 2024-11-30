<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

route::get('/', [PostController::class, 'index']);

Route::resource('posts', PostController::class)->except('index');