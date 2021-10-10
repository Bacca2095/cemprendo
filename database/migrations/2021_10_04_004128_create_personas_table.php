<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePersonasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('personas', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->string('celular');
            $table->string('email')->unique();
            $table->date('nacimiento');
            $table->enum('genero', ['M', 'F']);
            $table->boolean('vehiculo');
            $table->enum('tipo_vehiculo', ['CARRO', 'MOTO']);
            $table->enum('estado_civil', ['SOLTERO', 'CASADO','UNION_LIBRE','VIUDO','SEPARADO']);
            $table->integer('numero_hijos');
            $table->boolean('embarazo');
            $table->boolean('lactancia');
            $table->boolean('segundo_idioma');
            $table->boolean('tarjeta_profesional');
            $table->boolean('discapacidad');
            $table->string('tipo_discapacidad');
            $table->boolean('personas_cargo');
            $table->integer('cantidad_personas_cargo');
            $table->string('parentesco');
            $table->boolean('desplazado');
            $table->boolean('rupd');
            $table->boolean('beneficiario');
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
        Schema::dropIfExists('personas');
    }
}
