<?php

namespace App\Http\Controllers;


use App\Models\User;
use App\Traits\ApiResponser;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    use ApiResponser;

    public function login(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'email' => 'required',
            'password' => 'required',
        ]);

        if ($validate->fails()) {
            return $this->error($validate->errors(), "Debe completar la información", 400);
        } else {
            $credentials = request(['email', 'password']);
            $credentials = Arr::add($credentials, 'status', 'activo');
            if (!Auth::attempt($credentials)) {
                return $this->error(null, "El usuario o la contraseña son incorrectos", 401);
            }

            $user = User::where('email', $request->email)->first();
            if (!Hash::check($request->password, $user->password, [])) {
                return $this->error(null, "El usuario o la contraseña son incorrectos", 401);
            }

            $tokenResult = $user->createToken('token-auth')->plainTextToken;

            $data = [
                'access_token' => $tokenResult,
                'token_type' => 'Bearer',
            ];

            return $this->success($data, "Inicio sesión correctamente", 200);
        }
    }

    public function logout(Request $request)
    {
        $user = $request->user();
        $user->currentAccessToken()->delete();
        return $this->success(null, "Se cerro la sesión actual", 200);
    }

    public function logoutAll(Request $request)
    {
        $user = $request->user();
        $user->tokens()->delete();
        return $this->success(null, "Se han cerrado todas las sesiones", 200);
    }
}
