declare module '@aqualunae/util' {
    export const str = {
        title: (str?: string) => string,
        unCamel: (str: string) => string
    }
    export const date = {
        friendly: (str: string) => string,
        admin: (str: string) => string,
        sql: (str: string) => string
    }
    export const valid = {
        email: (email?: string) => object,
        phone: (phone?: string | number) => object,
        url: (url?: string) => object,
        short: (str?: string) => object,
        long: (str?: string) => object
    }
}