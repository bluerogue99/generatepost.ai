<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTiktokIntegrationTable extends Migration
{
    public function up()
    {
        Schema::create('tiktok_integrations', function (Blueprint $table) {
            $table->id();
            $table->string('client_key')->unique();
            $table->string('client_secret');
            $table->string('access_token');
            $table->string('open_id');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('tiktok_integrations');
    }
}
