<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'post_created_by',
        'post_headline',
        'post_content',
        'post_image_url',
        'post_status',
        'post_topic_entered',    
        'image_prompt_entered',   
        'tone_selected',         
        'platform_selected',     
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'post_created_by');
    }
}
