//interface IProcduct {
//    ProductId: number;
//    ProductCode: string;
//    ProductName: string;
//}
//declare var product: Array<IProcduct>;

//declare module 'product.json' {
//    export = product;
//    //export const value: Array<WebAppWithBower1.Entities.IProduct>;
//    //export default value;
//}

declare module ExportProduct {
    interface IReadJson {
        readTextFile(file, callback);
        readJson();
    }
}

declare var productJson: ExportProduct.IReadJson;