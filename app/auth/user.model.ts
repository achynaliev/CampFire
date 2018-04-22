export class User {
    constructor(public firstName: string,
                public lastName: string,
                public email: string,
                public phone?: string
                public imageUrl?: string,
                public passwordDigest: String) {}
}
