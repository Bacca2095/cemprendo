<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Traits\ApiResponser;
use Illuminate\Support\Facades\Log;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    use ApiResponser;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $users = User::all();
            return $this->success($users, "Consulta exitosa", 200);
        } catch (\Throwable $th) {
            return $this->error($th, $th->message, 500);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $user = new User();
            $user->name = $request->name;
            $user->status = $request->status;
            $user->email = $request->email;
            $user->password = Hash::make($request->password);
            $user->save();
            return $this->success($user, "Se guardo el usuario correctamente", 201);
        } catch (\Throwable $th) {
            return $this->error($th, "Error al guardar el usuario", 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            $user = User::findOrFail($id);
            return $this->success($user, "Consulta exitosa", 200);
        } catch (\Throwable $th) {
            return $this->error($th, $th->message, 500);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try {
            $user = User::findOrFail($id);
            $user->name = $request->name;
            $user->status = $request->status;
            $user->email = $request->email;
            if (!empty($request->password)) {
                $user->password = Hash::make($request->password);
            }
            $user->save();
            return $this->success($user, "Se edito el usuario correctamente", 200);
        } catch (\Throwable $th) {
            return $this->error($th, "Error al editar el usuario", 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $user = User::findOrFail($id);
            $user->delete();
            return $this->success($user, "Se elimino el usuario correctamente", 200);
        } catch (\Throwable $th) {
            return $this->error($th, "Error al eliminar el usuario", 500);
        }
    }

    public function currentUser()
    {
        return $this->success(auth()->user(), "Usuario actual", 200);
    }
}
