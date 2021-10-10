<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRelations extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('emprendimientos', function (Blueprint $table) {
            $table->unsignedBigInteger('persona_id')->unsigned();
            $table->foreign('persona_id')->references('id')->on('personas');
        });

        Schema::table('personas', function (Blueprint $table) {
            $table->unsignedBigInteger('libreta_militar_id')->unsigned();
            $table->unsignedBigInteger('documentos_id')->unsigned();
            $table->unsignedBigInteger('licencia_id')->unsigned();
            $table->unsignedBigInteger('residencia_id')->unsigned();

            $table->foreign('libreta_militar_id')->references('id')->on('libreta_militar');
            $table->foreign('documentos_id')->references('id')->on('documentos');
            $table->foreign('licencia_id')->references('id')->on('licencia_conduccion');
            $table->foreign('residencia_id')->references('id')->on('residencias');
        });
    }

    public function down()
    {
        //
    }
}
