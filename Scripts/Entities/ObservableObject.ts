abstract class ObservableObject<T>{
    constructor() {

    }

    abstract DataObjectToObservable: (datas: T) => void;
    abstract ObservableToDataObject: () => T;
}