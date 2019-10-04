export class Book {
    id:number;
    author:string;
    title:string;
    price:number;
    txt:string[]=[];
    constructor(author, title, price) {
        this.author = author;
        this.title = title;
        this.price = price;
    }


}
