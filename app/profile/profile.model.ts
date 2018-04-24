export class Profile {
    constructor(public firstName: string,
                public lastName: string,
                public username: string,
                public email: string,
                public userBio: string,
                public phone?: string,
                public imageUrl?: string) {}
}
