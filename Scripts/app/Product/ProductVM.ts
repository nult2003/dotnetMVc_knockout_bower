///// <reference path="../../../data/product.d.ts"/>

namespace WebAppWithBower1.Product {
    export class ProductVM extends Shared.RootViewModel {
        //private loadJsonFile = require('load-json-file');
        constructor() {
            super();

            //this.loadJsonFile('../../../data/product.json').then(json => {
            //    console.log("jsondata: ", json);
            //})
            //console.log("jsondata: ", product);   

            console.log("--start--");
            productJson.readTextFile("/data/product.json", function (text) {
                console.log("--resp--");
                console.log(text);
                console.log("--end--");
            });

            
        }
    }


    async function asyncReadJson() {
        return await productJson.readJson();
    }
}