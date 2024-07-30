sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ey/abnish/purchaseorderapp/test/integration/FirstJourney',
		'ey/abnish/purchaseorderapp/test/integration/pages/PurchaseOrderList',
		'ey/abnish/purchaseorderapp/test/integration/pages/PurchaseOrderObjectPage',
		'ey/abnish/purchaseorderapp/test/integration/pages/PurchaseOrderItemsObjectPage'
    ],
    function(JourneyRunner, opaJourney, PurchaseOrderList, PurchaseOrderObjectPage, PurchaseOrderItemsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ey/abnish/purchaseorderapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePurchaseOrderList: PurchaseOrderList,
					onThePurchaseOrderObjectPage: PurchaseOrderObjectPage,
					onThePurchaseOrderItemsObjectPage: PurchaseOrderItemsObjectPage
                }
            },
            opaJourney.run
        );
    }
);