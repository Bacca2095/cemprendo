<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmprendimientosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('emprendimientos', function (Blueprint $table) {
            $table->id();
            $table->string('idea');
            $table->boolean('funcionando');
            $table->string('tiempo');
            $table->string('ventas');
            $table->string('oportunidad_negocio');
            $table->string('expectativa');
            $table->string('nacimiento_idea');
            $table->string('formacion');
            $table->string('experiencia');
            $table->string('clientes');
            $table->string('recursos');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('emprendimientos');
    }
}
