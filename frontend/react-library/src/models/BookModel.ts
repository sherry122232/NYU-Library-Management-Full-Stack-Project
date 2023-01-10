class BookModel {
    id!: number;
    title!: string;
    author?: string; //optional variable, can be null
    description?: string;
    copies?: number;
    copiesAvailable?: number;
    category?: string;
    img?: string;

    constructor (id:number, title:string, author:string, description:string, copies:number, copiesAvailable: number,
        category: string, img: string){
            this.id=id;
            this.author=author;
            this.category=category;
            this.description=description;
            this.title=title;
            this.copies=copies;
            this.copiesAvailable=copiesAvailable;
            this.img=img;
        }
}
export default BookModel;