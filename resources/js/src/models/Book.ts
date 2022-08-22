export class Book {
    constructor(public id: number, public name: string, public cover: string, public pdf: string, private _videos: string) { };
    public get videos() {
        const rawVideo: string[][] = JSON.parse(this._videos);
        return rawVideo.map(video => ({ name: video[0], link: video[1] }));
    }
}
