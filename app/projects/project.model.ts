export class Project {
    constructor(public title: string,
                public ownerId: string,
                public username: string,
                public createdDate: date,
                public imageUrl: string,
                public fullDescription: string,
                public shortDescription: string,
                public category: string,
                public done?: boolean) {}
                // public id?: string
}
