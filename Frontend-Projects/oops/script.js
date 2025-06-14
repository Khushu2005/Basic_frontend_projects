class Library{
    constructor(){
        this.books =[];}
        addbooks(book){
            this.books.push(...book);}
        

        listallbooks(){
            this.books.forEach(function(book,idx){
                console.log(`${idx +1}${book}`);
                
                
            });
        }}

class book{
    constructor(name,author,price){
        this.name = name;
        this.author = author;
        this.price = price;
        this.readstatus =false;
    }
    

    getinfo(book){
    console.log(`${this.readstatus == true? "✔️" : "❌"}${this.name}is written by ${this.author} it ranges in ${this.price} and you have already ${readstatus ===true ? "read" : "not read"} it.`);
    
    }

    getreadstatus(){
        this.readstatus = !this.readstatus;
    }
}
    
let jhansi = new Library();
jhansi.listallbooks();
let book1 = new book("Harry Potter","J.K Rowling",500);
let book2 = new book("The Hunger Games","Suzanne Collins",600);
let book3 = new book("The Fault in Our Stars","John Green",700);

jhansi.addbooks([book1,book2,book3]);