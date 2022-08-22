export class Meeting {
    constructor(public id: number, public name: string, public link: string, public state: string, public date: string, private _assets: string) { };
    public get assets(){
        return JSON.parse(this._assets) as string[];
    }
    public get year() {
        return this.date.split('-')[0];
    }
    public get month() {
        return this.date.split('-')[1];
    }
    public get day() {
        return this.date.split('-')[2];
    }
}
