<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration
{
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('post_created_by')->constrained('users')->onDelete('cascade')->index(); 
            $table->string('post_headline'); 
            $table->text('post_content'); 
            $table->string('post_image_url')->nullable(); 
            $table->string('post_status')->default('draft'); 
            $table->string('post_topic_entered')->nullable();  
            $table->text('image_prompt_entered')->nullable();  
            $table->string('platform_selected')->nullable();
            $table->string('tone_selected')->nullable();         
            $table->timestamps(); 
        });
    }

    public function down()
    {
        Schema::dropIfExists('posts');
    }
}
