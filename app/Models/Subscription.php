<?php


namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Subscription extends Model
{
    // Define the table associated with the model
    protected $table = 'subscriptions'; // This should match your table name

    // Define the fields that are mass assignable
    protected $fillable = [
        'user_id', 'stripe_id', 'stripe_status', 'stripe_price', 'quantity', 'type', 'trial_ends_at', 'ends_at'
    ];

    // If you have a relationship with the User model
    public function user()
    {
        return $this->belongsTo(User::class); // Assuming subscriptions belong to users
    }
}

