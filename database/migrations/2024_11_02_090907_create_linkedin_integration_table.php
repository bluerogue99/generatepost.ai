<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLinkedinIntegrationTable extends Migration
{
    public function up()
    {
        Schema::create('linkedin_integrations', function (Blueprint $table) {
            $table->id();
            $table->string('client_id')->unique();
            $table->string('client_secret');
            $table->string('oauth_access_token');
            $table->string('organization_id')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('linkedin_integrations');
    }
}
