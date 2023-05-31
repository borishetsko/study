define([
    'jquery',
    'underscore',
    'Magento_Ui/js/form/form',
    'ko',
    'Magento_Customer/js/model/customer',
    'Magento_Customer/js/model/address-list',
    'Magento_Checkout/js/model/address-converter',
    'Magento_Checkout/js/model/quote',
    'Magento_Checkout/js/action/create-shipping-address',
    'Magento_Checkout/js/action/select-shipping-address',
    'Magento_Checkout/js/model/shipping-rates-validator',
    'Magento_Checkout/js/model/shipping-address/form-popup-state',
    'Magento_Checkout/js/model/shipping-service',
    'Magento_Checkout/js/action/select-shipping-method',
    'Magento_Checkout/js/model/shipping-rate-registry',
    'Magento_Checkout/js/action/set-shipping-information',
    'Magento_Checkout/js/model/step-navigator',
    'Magento_Ui/js/modal/modal',
    'Magento_Checkout/js/model/checkout-data-resolver',
    'Magento_Checkout/js/checkout-data',
    'uiRegistry',
    'mage/translate',
    'Magento_Catalog/js/price-utils',
    'Magento_Checkout/js/model/shipping-rate-service'    
], function (
    $,
    _,
    Component,
    ko,
    customer,
    addressList,
    addressConverter,
    quote,
    createShippingAddress,
    selectShippingAddress,
    shippingRatesValidator,
    formPopUpState,
    shippingService,
    selectShippingMethodAction,
    rateRegistry,
    setShippingInformationAction,
    stepNavigator,
    modal,
    checkoutDataResolver,
    checkoutData,
    registry,
    $t,
    priceUtils
) {
    'use strict';

    var popUp = null;

    return Component.extend({
        defaults: {
            // ...
            // ...
            shippingMethodListTemplate: 'Company_ShippingDropdown/shipping-address/shipping-method-list',
            // ...
        },
        // ...
        // ...
        // ...    
        shippingSelectionChanged: function(newvalue){       
             var self = this;
            var shippingRatescollection =  self.rates();
            var selectedVal =  $("#myshipping-list").val();         
            if(selectedVal!=='' ){
                var arrcarierCode =  selectedVal.split("_");
                var selectedCarrierCode =  arrcarierCode[0]
                var selectedMethodCode =  arrcarierCode[1];
                $.each(shippingRatescollection,function( index, shippingMethod ) {
                         if(shippingMethod.carrier_code==selectedCarrierCode && shippingMethod.method_code==selectedMethodCode){                             
                             self.selectShippingMethod(shippingMethod);
                         }

                    });

            }

        },

        getFormattedPrice: function (price) {
            //todo add format data
            return priceUtils.formatPrice(price, quote.getPriceFormat());
        },  
        // ...
        // ...
        // ...

    });
});