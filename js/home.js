

<script src="https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID&components=YOUR_COMPONENTS"></script>
paypal.Buttons({
    createSubscription: function(data, actions) {
      if (updatedSubscription && (status === 'ACTIVE' || status === 'SUSPENDED')) {
        return actions.subscription.revise(subscriptionId, {
          'shipping_amount': {
            'currency_code': 'USD',
            'value': '10.00'
          }
        });
      } else {
        return actions.subscription.create({
          'plan_id': 'P-2UF78835G6983425GLSM44MA'
        });
      }
    },
  
    onApprove: function(data, actions) {
      alert('You have successfully created subscription ' + data.subscriptionID);
    }
  }).render('#paypal-button-container');
  
paypal.Buttons({
    createOrder: function(data, actions) {
      // This function sets up the details of the transaction, including the amount and line item details.
      return actions.order.create({
        purchase_units: [{
          amount: {
            value: '0.01'
          }
        }]
      });
    },
    onApprove: function(data, actions) {
      // This function captures the funds from the transaction.
      return actions.order.capture().then(function(details) {
        // This function shows a transaction success message to your buyer.
        alert('Transaction completed by ' + details.payer.name.given_name);
      });
    }
  }).render('#paypal-button-container');
  //This function displays payment buttons on your web page.
  paypal.Buttons({
    createSubscription: function(data, actions) {
      if (updatedSubscription && (status === 'ACTIVE' || status === 'SUSPENDED')) {
        return actions.subscription.revise(subscriptionId, {
          'shipping_amount': {
            'currency_code': 'USD',
            'value': '10.00'
          }
        });
      } else {
        return actions.subscription.create({
          'plan_id': 'P-2UF78835G6983425GLSM44MA'
        });
      }
    },
  
    onApprove: function(data, actions) {
      alert('You have successfully created subscription ' + data.subscriptionID);
    }
  }).render('#paypal-button-container');
  
  paypal.Buttons({
    onError: function (err) {
      // For example, redirect to a specific error page
      window.location.href = "/your-error-page-here";
    }
  }).render('#paypal-button-container');

  