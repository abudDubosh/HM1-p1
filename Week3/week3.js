//1-Open a new js file and start by declaring an array that contains 10 strings. These strings should be of book titles you have read (or made up) and be lowercase without spaces or special characters so that you can use these later as Id's. (Example: Harry Potter's - The Chamber of Secrets -> harry_potter_chamber_secrets).

//let book_titles = [ "secret_agent", "horseman_in_sky", "last_leaf", "strangers_on_train", "end_road", "pigs_is_pigs", "journey_center_earth", "prisoner_of_zenda", "princess_of_mars", "soar"   ] 


//2-Create a basic html file called index.html and use it to load the js file, confirm the console.log show the array. (This is for debugging and making sure everything is in order. Delete it later when you're done :)

//console.log(book_titles);

//3-Make a function (or functions) that generate a ul with li elements for each book ID in the array using a for loop.

//function booksId ( booksarr_id ) {
//    let ul = document.createElement('ul');
//    for (i in booksarr_id){
//        let li = document.createElement('li');
//          li.appendChild(document.createTextNode(booksarr_id[i]));
//          ul.appendChild(li);}return ul;}



//4-Make an object containing information for each book. Each item (object) in this object should have the book ID you thought up in point 1 as a key, and it should have at least the following fields: title, language and author.



let books_info={
    b1 : { book_title: "The Secret Agent", author : "Joseph Conrad", lang: "English", id: "secret_agent"},
    b2 : {book_title:"A Horseman in the Sky", author: "Ambrose Bierce",lang: "English", id: "horseman_in_sky"},
    b3 : { book_title: "The Last Leaf", author : "O. Henry", lang: "English", id: "last_leaf"},
    b4 : {book_title: "Strangers on a Train", author: "Patricia Highsmith", lang: "English", id: "strangers_on_train"},
    b5 : {book_title: "The Boy on Graves - End Road", author : "Caty Weaver", lang:"English", id: "end_road"},
    b6 : {book_title: "Pigs is Pigs ", author: "Ellis Parker Butler", lang: "English", id: "pigs_is_pigs"},
    b7 : {book_title: "Journey to the Centre of the Earth ", author:"Penny Dolan", lang: "English", id: "journey_center_earth"},
    b7 : {book_title:"The Prisoner of Zenda", author: "Anthony Hope", lang: "English", id: "prisoner_of_zenda"},
    b9 : {book_title: "A Princess of Mars", author: "Edgar Rice Burroughs", lang: "English", id: "princess_of_mars"},
    b10:{book_title: "Soar (The Empire Chronicles, #1)", author: "Alyssa Rose Ivy", lang: "English", id: "soar"}    
}

//5-Now change the function you used to display the book ID's in a list to take the actual information about the book from the object and display that. Make sure you choose the right html elements for each piece of info, for instance, a heading for the title.



function booksId(books){
     let ul = document.createElement('ul');
     for(i in my_books){
          let li = document.createElement('li');
          li.setAttribute('id',books[i].id);
          let title = document.createElement('h1');
          let author = document.createElement('h2');
          let language = document.createElement('h3');
          title.appendChild(document.createTextNode(books[i].title));
          author.appendChild(document.createTextNode(books[i].author));
          language.appendChild(document.createTextNode(books[i].language));
          li.appendChild(title).appendChild(author).appendChild(language).appendChild(item);
          
     return ul;
}                               //?//            //?//
///document.getElementById('books').appendChild(booksId(books));

//7-Download book covers for each book, construct a new Object which has as keys the bookId's again, and as value the path to the image source (e.g. {"harry_potter_blabla": "./img/harry_potter_blabla.jpg", ...}). Now loop over these entries (hint: Object.keys(objectName) gives you an array containing the keys). Then write a function which places an image at the corresponding li element. Remember that Objects are not ordered, so you cannot guarantee that the first key is the first li element. (Hint: you could give each li item an id tag by modifying the function you made before)



let books_covers = {
    "secret_agent" : "img/1.jpg",
    "horseman_in_sky" : "img/2.jpg",
    "last_leaf"     : "img/3.jpg",
    "strangers_on_train" : "img/4.jpg",
    "end_road" : "img/5.jpg",
    "pigs_is_pigs" : "img/6.jpg",
    "journey_center_earth" : "img/7.jpg",
    "prisoner_of_zenda" : "img/8.jpg",
    "princess_of_mars" : "img/9.jpg",
    "soar"   : "img/10.jpg"
    
}


let books_id = Object.keys(books_covers);

function BooksCovers{
	for(let book_id of books_id){
		let img = document.createElement('img');
		img.src = book_covers[book_id];
		img.alt = book_id;
		document.getElementById(book_id).appendChild(img);
	}
}
BooksCovers()