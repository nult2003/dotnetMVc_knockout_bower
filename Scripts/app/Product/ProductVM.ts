///// <reference path="../../../data/product.d.ts"/>

namespace WebAppWithBower1.Product {
    export class ProductVM extends Shared.RootViewModel {
        //private loadJsonFile = require('load-json-file');
        public currentProduct: KnockoutObservable<Entities.ProductObser> = ko.observable(new Entities.ProductObser());
        constructor() {
            super();
            let that = this;
            //this.loadJsonFile('../../../data/product.json').then(json => {
            //    console.log("jsondata: ", json);
            //})
            //console.log("jsondata: ", product);   
                        
            console.log("--start--");
            productJson.readTextFile("/data/product.json", function (text) {
                console.log("--resp--");
                console.log(text);
                console.log("--end--");
                var object = JSON.parse(text);
                let result = {
                    ProductId: object[0].ProductId,
                    ProductCode: object[0].ProductCode,
                    ProductName: object[0].ProductName
                } as Entities.IProduct;
                that.currentProduct().DataObjectToObservable(result);
            });

            
        }
    }


    async function asyncReadJson() {
        return await productJson.readJson();
    }
}