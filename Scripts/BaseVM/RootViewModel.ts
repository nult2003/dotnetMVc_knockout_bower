namespace WebAppWithBower1.Shared {    
    export abstract class RootViewModel {
        constructor() {

        }

        Post = <T1, T2>(
            url: string,
            datas: T1,
            callbackFunction: (result: T2) => void = null,
            failFunction: (result: any) => void = null,
        ): void => {
            if (datas && (<any>datas).ObservableToDataObject)
                datas = (<any>datas).ObservableToDataObject;
            $.ajax({
                type: 'POST',
                url: Settings.SubsiteName + (url.startWith('/') ? url : '/' + url),
                data: JSON.stringify(datas),
                contentType: 'application/json',
            })
        };
    }
}

interface String {
    startWith(str: string): boolean;
    endsWith(searchString: string, position: number | null): boolean;
}

if (!String.prototype.startWith) {
    String.prototype.startWith = function (str: string): boolean {
        return (this as string).indexOf(str) === 0;
    };
}