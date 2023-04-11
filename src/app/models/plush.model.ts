export class Plush {
    constructor(
        public id: number,
        public title: string,
        public description: string,
        public price: Array<number>,
        public imageUrl: string,
        public likes: number,
        public publicationDate: Date,
        public isLiked: boolean,
        public size?: Array<string>){
    }
}