
export class VideoGame {
    public name: string;
    public releaseDate: string;
    public imagePath: string;
    public genre: string;
    
    constructor(name: string, rlDate: string, imgPath: string, gen: string) {
        this.name = name;
        this.releaseDate = rlDate;
        this.imagePath = imgPath;
        this.genre = gen;   
    }
}