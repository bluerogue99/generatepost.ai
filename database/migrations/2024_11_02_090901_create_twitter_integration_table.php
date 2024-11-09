<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTwitterIntegrationTable extends Migration
{
    public function up()
    {
        Schema::create('twitter_integrations', function (Blueprint $table) {
            $table->id();
            $table->string('api_key')->unique();
            $table->string('api_key_secret');
            $table->string('bearer_token');
            $table->string('access_token');
            $table->string('access_token_secret');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('twitter_integrations');
    }
}
