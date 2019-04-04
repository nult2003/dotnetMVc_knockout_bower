namespace WebAppWithBower1.Shared {
    interface String {
        startWith(str: string): boolean;
        endsWith(searchString: string, position: number | null): boolean;
    }
}