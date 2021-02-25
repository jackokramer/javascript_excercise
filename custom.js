setTimeout(function(){
    if(document.querySelectorAll('[name="checkout[reduction_code]"]').length > 0)
   {  dataLayer.push({'event':'promo','code':document.querySelector('[name="checkout[reuction_code]"]').value});
    }
    },2000);
