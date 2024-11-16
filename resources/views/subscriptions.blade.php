
<style>
    body {
        background-color:#111827;
        color:white;
    }
    .StripeElement {
        background-color: white;
        padding: 8px 12px;
        border-radius: 4px;
        border: 1px solid transparent;
        box-shadow: 0 1px 3px 0 #e6ebf1;
        -webkit-transition: box-shadow 150ms ease;
        transition: box-shadow 150ms ease;
    }
    .StripeElement--focus {
        box-shadow: 0 1px 3px 0 #cfd7df;
    }
    .StripeElement--invalid {
        border-color: #fa755a;
    }
    .StripeElement--webkit-autofill {
        background-color: #fefde5 !important;
    }
    #card-holder-name {
        width: 100%;
        height: 40px;
        border-radius: 6px;
        margin-top: 12px;
        margin-bottom: 12px;
    }
    .container-checkout {
        max-width:600px;
        margin:auto;
        background-color:#111827;
        color:white;
        padding-left: 2em;
        padding-right: 2em;
        margin-top:80px;
    }
    #card-element {
        margin-top: 12px;
        margin-bottom: 12px;
    }
    .card-header {
        text-align:center;
        font-family: Inter, sans-serif;
        font-size: 2rem;
        line-height: normal;
        font-weight: 700;
        color: white;
        margin-top: 12px;
        margin-bottom: 12px;
    }
    #card-button {
        cursor:pointer;
        padding: 8px 28px;
        border-radius: 6px;
        background: linear-gradient(to right, #ff7f50, #ff4500);
        color: white;
        overflow: hidden;
        transition: all 0.3s ease;
        transform: scale(1);
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        width: 200px;
        margin-top: 18px;
        width: 100%;
        outline: none;
        border: none;
        height:40px;
        font-family: Inter, sans-serif;
    }
    .service-description, .service-method, .service-title, .service-payment-method {
        font-family: Inter, sans-serif;
        font-size: 1em;
        margin-bottom: 8px;
        margin-top: 8px;
        color: #A8ACB7;
        line-height:20px;
    }

    .card-holder-name, .card-element {
        font-family: Inter, sans-serif;
        font-size: 1em;
        color: #A8ACB7;
        line-height:20px;
    }
    .service-price {
        color:#ff4500;
        font-family: Inter, sans-serif;
        font-size: 1em;
        margin-bottom: 8px;
        margin-top: 8px;
        line-height:20px;
    }
    .legal-wrapper {
        display:flex; 
        justify-content:flex-start;
        gap:10px;
        text-decoration: underline; 
        text-underline-offset:4px; 
    }
    .legal-wrapper a {
        font-family: Inter, sans-serif;
        font-size: 0.6em;
        margin-bottom: 8px;
        margin-top: 8px;
        color: #A8ACB7;
        line-height:20px;
    }


    /*Checkbox*/

    .checkbox-container {
    display: flex;
    align-items: center;
    font-size: 16px;
    color: #333;
    }

    .checkbox-container input[type="checkbox"] {
        margin-right: 10px;
        width: 18px;
        height: 18px;
        accent-color: #ff4500;
        cursor:pointer;
    }

    .checkbox-text {
        font-family: Inter, sans-serif;
        font-size: 1em;
        margin-bottom: 8px;
        margin-top: 8px;
        color: #A8ACB7;
        line-height:20px;
        
    }

    .checkbox-text a {
        font-family: Inter, sans-serif;
        font-size: 1em;
        margin-bottom: 8px;
        margin-top: 8px;
        color: #A8ACB7;
        line-height:20px;
        color:white;
        text-decoration:underline; 
        text-underline-offset: 4px;
        cursor:pointer;
    }

    .checkbox-text a:hover {
        text-decoration: underline;
        cursor:pointer;
    }

    
</style>

<div class="container-checkout">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Checkout') }}</div>
                <div class="service-details">
                    <p class="service-title">Service: Postgenerator.io Premium Plan</p>
                    <p class="service-description">This plan includes Postgenerator.io premium features. You can cancel this plan any time. Tax is included in the price. No additional fees apply. This plan will renew automatically every month unless cancelled. Your payment is being handled by Stripe for PCI compliance and secure payment handling. After successful payment you will be redirected to a success page. Receipt is being sent to your e-mail address from Stripe.</p>
                    <p class="service-price">Price: 10.00 $/month - Renews unless cancelled. Cancel any time.</p>
                    <p class="service-payment-method">Payment Method: Credit or Debit Card</p>
                </div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif
                    <form action="{{ route('subscriptions.create') }}" method="POST" id="subscribe-form">
                        <label class="card-holder-name" for="card-holder-name form-control">Card Holder Name</label> <br>
                        <input id="card-holder-name" type="text" class="form-control">
                        @csrf
                        <div class="form-row">
                            <label class="card-element" for="card-element">Credit or debit card</label>
                            <div id="card-element" class="form-control">
                            </div>
                            <!-- Used to display form errors. -->
                            <div id="card-errors" role="alert"></div>
                        </div>
                        <div class="stripe-errors"></div>
                        @if (count($errors) > 0)
                        <div class="alert alert-danger">
                            @foreach ($errors->all() as $error)
                            {{ $error }}<br>
                            @endforeach
                        </div>
                        @endif

                        <!-- Terms and Conditions checkbox -->
                        <div class="form-group">
                            <label class="checkbox-container">
                                <input type="checkbox" id="accept-terms" required>
                                <span class="checkbox-text">I accept the <a href="/terms-and-conditions" target="_blank">Terms and Conditions</a>.</span>
                            </label>
                        </div>

                        <div class="form-group text-center">
                            <button id="card-button" data-secret="{{ $intent->client_secret }}" class="btn btn-lg btn-success btn-block" disabled>Pay Now</button>
                        </div>
                    </form>
                    <div class="legal-wrapper">
                        <a href="/terms-and-conditions" target="_blank">Terms and conditions</a>
                        <a href="/privacy-policy" target="_blank">Privacy Policy</a>
                        <a href="/cookie-policy" target="_blank">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script src="https://js.stripe.com/v3/"></script>
<script>
    var stripe = Stripe('{{ env('STRIPE_KEY') }}');
    var elements = stripe.elements();
    var style = {
        base: {
            color: '#32325d',
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
            fontSmoothing: 'antialiased',
            fontSize: '16px',
            '::placeholder': {
                color: '#aab7c4'
            }
        },
        invalid: {
            color: '#fa755a',
            iconColor: '#fa755a'
        }
    };
    var card = elements.create('card', {hidePostalCode: true,
        style: style});
    card.mount('#card-element');
    card.addEventListener('change', function(event) {
        var displayError = document.getElementById('card-errors');
        if (event.error) {
            displayError.textContent = event.error.message;
        } else {
            displayError.textContent = '';
        }
    });
    const cardHolderName = document.getElementById('card-holder-name');
    const cardButton = document.getElementById('card-button');
    const clientSecret = cardButton.dataset.secret;
    cardButton.addEventListener('click', async (e) => {
        e.preventDefault();
        console.log("attempting");
        const { setupIntent, error } = await stripe.confirmCardSetup(
            clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: { name: cardHolderName.value }
                }
            }
            );
        if (error) {
            var errorElement = document.getElementById('card-errors');
            errorElement.textContent = error.message;
        } else {
            paymentMethodHandler(setupIntent.payment_method);
        }
    });
    function paymentMethodHandler(payment_method) {
        var form = document.getElementById('subscribe-form');
        var hiddenInput = document.createElement('input');
        hiddenInput.setAttribute('type', 'hidden');
        hiddenInput.setAttribute('name', 'payment_method');
        hiddenInput.setAttribute('value', payment_method);
        form.appendChild(hiddenInput);
        form.submit();
    }


    document.getElementById('accept-terms').addEventListener('change', function () {
    const payButton = document.getElementById('card-button');
    payButton.disabled = !this.checked;
});
</script>
