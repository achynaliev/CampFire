export class Profile {
    constructor(public firstName: string,
                public lastName: string,
                public username: string,
                public email: string,
                public location: string,
                public graduation: string,
                public stack: string,
                public githubLink: string,
                public linkedInLink: string,
                public userBio?: string,
                public phone?: string,
                public imageUrl?: string) {}
}
