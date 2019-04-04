namespace WebAppWithBower1.Entities {
    export class ProductObser extends ObservableObject<IProduct>{
        public ProductId: KnockoutObservable<number> = ko.observable(0);
        public ProductCode: KnockoutObservable<string> = ko.observable('');
        public ProductName: KnockoutObservable<string> = ko.observable('');
        constructor(dataObject?: IProduct) {
            super();
            if (dataObject != null)
                this.DataObjectToObservable(dataObject);
        }
        DataObjectToObservable = (datas: IProduct): void => {
            this.ProductId(datas.ProductId);
            this.ProductCode(datas.ProductCode);
            this.ProductName(datas.ProductName);
        };
        ObservableToDataObject = (): IProduct => {
            return {
                ProductId: this.ProductId(),
                ProductCode: this.ProductCode(),
                ProductName: this.ProductName()
            }
        };
    }
}