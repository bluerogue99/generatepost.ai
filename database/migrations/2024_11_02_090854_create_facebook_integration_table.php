<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFacebookIntegrationTable extends Migration
{
    public function up()
    {
        Schema::create('facebook_integrations', function (Blueprint $table) {
            $table->id();
            $table->string('app_id')->unique();
            $table->string('app_secret');
            $table->string('access_token');
            $table->string('page_id')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('facebook_integrations');
    }
}
