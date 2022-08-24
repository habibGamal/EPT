export class Article {
    constructor(public id: number, public title: string, public thumb: string, public content: string, public description: string, private _date: string) { };
    public get date() {
        return this._date.split('T')[0];
    }
}

export type ArticleType = {
    id: number;
    title: string;
    thumb: string;
    content: string;
    description: string;
    created_at: string;
}
