export class Profile {
    constructor(
      public email: string,
      public firstName: string,
      public githubLink: string,
      public graduation: string,
      public imageUrl?: string,
      public lastName: string,
      public linkedInLink: string,
      public location: string,
      public phone?: string,
      public stack: string,
      public userBio?: string,
      public username: string,
              ) {}
}
