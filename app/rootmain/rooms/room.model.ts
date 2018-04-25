export class Room {
    title: string;
    category: string;
    logoUrl: string;

    constructor(title: string, category: string, logoUrl: string) {
        this.title = title;
        this.category = category;
        this.logoUrl = logoUrl;
    }
}
