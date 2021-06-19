<?php

namespace App\Traits;

/*
|--------------------------------------------------------------------------
| Api Responser Trait
|--------------------------------------------------------------------------
|
| This trait will be used for any response we sent to clients.
|
*/

trait ApiResponser
{
    /**
     * Return a success JSON response.
     *
     * @param  array|string  $data
     * @param  string  $message
     * @param  int|null  $code
     * @return \Illuminate\Http\JsonResponse
     */
    protected function success($data, string $message, int $code)
    {
        return response()->json([
            'status' => 'success',
            'message' => $message,
            'content' => $data,
            'errors' => null
        ], $code);
    }

    /**
     * Return an error JSON response.
     *
     * @param  array|string|null  $errors
     * @param  string  $message
     * @param  int  $code
     * @return \Illuminate\Http\JsonResponse
     */
    protected function error($errors, string $message, int $code)
    {
        return response()->json([
            'status' => 'error',
            'message' => $message,
            'content' => null,
            'errors' => $errors
        ], $code);
    }
}
