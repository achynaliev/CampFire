export class User {
    constructor(public firstName: string,
                public lastName: string,
                public username: string,
                public email: string,
                public passwordDigest: string,
                public phone?: string,
                public imageUrl?: string) {}
}
