declare type Headers = {
    [key: string]: string;
};
declare type Options = {
    query: string;
    variables?: object;
};
declare type Response<T> = {
    data?: T;
    errors?: Error[];
};
export declare const graphql: <T extends unknown>(options: Options, headers?: Headers) => Response<T>;
export declare const pick: <T extends unknown, U extends keyof T>(obj: T, keys: U[]) => Pick<T, U>;
export {};
