<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInstagramIntegrationTable extends Migration
{
    public function up()
    {
        Schema::create('instagram_integrations', function (Blueprint $table) {
            $table->id();
            $table->string('app_id')->unique();
            $table->string('app_secret');
            $table->string('access_token');
            $table->string('business_account_id');
            $table->string('linked_facebook_page_id');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('instagram_integrations');
    }
}
