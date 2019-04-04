var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var WebAppWithBower1;
(function (WebAppWithBower1) {
    var Entities;
    (function (Entities) {
        var ProductObser = /** @class */ (function (_super) {
            __extends(ProductObser, _super);
            function ProductObser(dataObject) {
                var _this = _super.call(this) || this;
                _this.ProductId = ko.observable(0);
                _this.ProductCode = ko.observable('');
                _this.ProductName = ko.observable('');
                _this.DataObjectToObservable = function (datas) {
                    _this.ProductId(datas.ProductId);
                    _this.ProductCode(datas.ProductCode);
                    _this.ProductName(datas.ProductName);
                };
                _this.ObservableToDataObject = function () {
                    return {
                        ProductId: _this.ProductId(),
                        ProductCode: _this.ProductCode(),
                        ProductName: _this.ProductName()
                    };
                };
                if (dataObject != null)
                    _this.DataObjectToObservable(dataObject);
                return _this;
            }
            return ProductObser;
        }(ObservableObject));
        Entities.ProductObser = ProductObser;
    })(Entities = WebAppWithBower1.Entities || (WebAppWithBower1.Entities = {}));
})(WebAppWithBower1 || (WebAppWithBower1 = {}));
//# sourceMappingURL=EntitiesObservables.js.map