var WebAppWithBower1;
(function (WebAppWithBower1) {
    var Shared;
    (function (Shared) {
        var RootViewModel = /** @class */ (function () {
            function RootViewModel() {
                this.Post = function (url, datas, callbackFunction, failFunction) {
                    if (callbackFunction === void 0) { callbackFunction = null; }
                    if (failFunction === void 0) { failFunction = null; }
                    if (datas && datas.ObservableToDataObject)
                        datas = datas.ObservableToDataObject;
                    $.ajax({
                        type: 'POST',
                        url: WebAppWithBower1.Settings.SubsiteName + (url.startWith('/') ? url : '/' + url),
                        data: JSON.stringify(datas),
                        contentType: 'application/json',
                    });
                };
            }
            return RootViewModel;
        }());
        Shared.RootViewModel = RootViewModel;
    })(Shared = WebAppWithBower1.Shared || (WebAppWithBower1.Shared = {}));
})(WebAppWithBower1 || (WebAppWithBower1 = {}));
if (!String.prototype.startWith) {
    String.prototype.startWith = function (str) {
        return this.indexOf(str) === 0;
    };
}
//# sourceMappingURL=RootViewModel.js.map