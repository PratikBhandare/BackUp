enum category{
    Fiction = "Fiction",
    NonFiction = "NonFiction",
    Science = "Science",
    History = "History",
    Children = "Children",
}

//Interface for Book
interface Book{
    id:number;
    title:String;
    author:String;
    category:category;
    isAvailable:boolean;
}


//Library Class

class Library{
    private books:Book[]=[];


    //Add a new book

    addBook(book:Book):void{
        if(this.books.some(b=>b.id===book.id)){ /// uses with array returns true if condition satisfies
            console.log(`Book with ID ${book.title} already exist`);
            return;
        }else{
            this.books.push(book);

            console.log(`Book with ID ${book.title} added succesfully`);
        }

        
    }

    //List all books

    listBooks():void{
        console.log("Library Books:");
        this.books.forEach(book=>{
            console.log(`ID $book.id, Title: ${book.title}, Author: ${book.author}, Category: ${book.category}, Available: ${book.isAvailable}`)
        })

    }

    searchByTitle(title:string):void{
        const result = this.books.filter(book=>book.title.toLowerCase().includes(title.toLowerCase()));
        if(result.length){
            console.log("Search Results:");
            result.forEach(book=>console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`))
        }else{
            console.log("No books foud with the given title")
        }
    }
    
}


let Library1 = new Library();
Library1.addBook({id:1,title:"Wings",author:"David",category:category.History,isAvailable:true});
Library1.addBook({id:2,title:"Wings2",author:"David",category:category.History,isAvailable:true});
Library1.listBooks();



