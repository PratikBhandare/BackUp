class Library{
    Books = [];
    Members=[];
    l={      
    };
    
    addBook(b){
        this.l[b.id]=b
    }

    addMember(m){
        this.Members.push(m);
    }

    viewBooks(){
        for(let i=0;i<this.l.length;i++){
            console.log(this.l[i].title);
        }
    }

    viewMembers(){       
        for(let i=0;i<this.Members.length;i++){
            console.log(this.Members[i].title);
        }
    }
}

class book {
    constructor(id,title,author,isAvailable){
        this.id=id;
        this.title=title;
        this.author=author;
        this.isAvailable=isAvailable;
    }

}

class member extends Library {
    constructor(id,name,borrowedBooks){
        super();
        this.id=id;
        this.name=name;
        this.borrowedBooks=borrowedBooks;

    }

    borrowBook(bookid){
        // console.log(L.l[bookid].title);
        if(Lib.l[bookid].isAvailable=="Yes"){
         console.log("book borrowed !!")
         Lib.l[bookid].isAvailable="No"
         this.borrowedBooks=bookid;
        }else{
            console.log("Sorry Book is Not Available !!");
            this.borrowedBooks=0;
        }
    }
    returnBook(bookid){
        if(Lib.l[bookid].isAvailable=="Yes"){
            console.log("Book is already in Library");
            
        }else{
            console.log("Book returned succesfully !!");
            Lib.l[bookid].isAvailable="Yes";
            this.borrowedBooks=0;
        }

    }

    showMemberinfo(){
        console.log(
            `Member id: ${this.id}\nName: ${this.name}\nborredBook id: ${this.borrowedBooks}`
        )
    }


    

    
}

let Lib = new Library();
let b1=new book(1,"Title","dont Know","Yes");
console.log(b1);
Lib.addBook(b1);
console.log(Lib);
// L.viewBooks();
// L.viewMembers();
// L.l[1]=b1;
console.log(Lib.l);
let b2=new book(2,"Title ","dont Know","Yes");
Lib.addBook(b2);
console.log(Lib.l);
let m1=new member(1,"Pratik","No");
// console.log(L.l[1].title)
// m1.borrowBook(1);
m1.borrowBook(2)
m1.borrowBook(1)
m1.showMemberinfo();
m1.returnBook(2)
m1.showMemberinfo();
Lib.viewBooks();