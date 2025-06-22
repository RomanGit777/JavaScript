// створити масив книжок (назва, кількість сторінок, автори , жанри).
//
//
//
//
//
const books = [
    {
        title: '1984',
        pages: 328,
        authors: ['Джордж Орвелл'],
        genres: ['Політична фантастика', 'антиутопія', 'антиутопія']
    },
    {
        title: 'ghghhggh',
        pages: 4555,
        authors: ['ghhghghgh'],
        genres: ['dgdfdfgg', 'fgfggf']
    },
    {
        title: 'jjjjjjjjj',
        pages: 222,
        authors: ['jjjjjjjjjj'],
        genres: ['jhjhjhjh']
    },
    {
        title: 'tttttttttttt',
        pages: 111,
        authors: ['ttttttttttttt'],
        genres: ['kkkkkkkkkkkkk']
    },
    {
        title: 'kkkkkkkkkkkk',
        pages: 523,
        authors: ['tttttttttttttttt', 'tttttttttttttttt'],
        genres: ['gggggggggggggg']
    },
    {
        title: 'ttttttttttt',
        pages: 433,
        authors: ['ggggggggggggggg'],
        genres: ['hhhhhhhhhhhhhhhh']
    }
];
// – знайти найбільшу книжку.
let biggestBook = books[0];
for (let book of books){
    if (book.pages > biggestBook.pages){
        biggestBook = book;
    }
}
console.log('Найбільша книга:', biggestBook.pages, 'сторінок');

// – знайти книжку/ки з найбільшою кількістю жанрів
let bookWithMostGenres = books[0]
for (let book of books){
    if (book.genres.length > bookWithMostGenres.genres.length){
        bookWithMostGenres = book;
    }
}
console.log('Найбільша кількість жанрів:', bookWithMostGenres.genres)

// – знайти книжку/ки з найдовшою назвою
let bookWithBiggestTitle = books[0];
for (let book of books){
    if (book.title.length > bookWithBiggestTitle.title.length){
        bookWithBiggestTitle = book;
    }
}
console.log('Найдовша назва книги:', bookWithBiggestTitle.title);

// – знайти книжку/ки, які писали 2 автори
let bookWithTwoAuthors = books[0];
for (let book of books){
    if (book.authors.length > bookWithTwoAuthors.authors.length){
        bookWithTwoAuthors = book;
    }
}
console.log('Книжка яку писали 2 автори:', bookWithTwoAuthors.authors);

// – знайти книжку/ки, які писав 1 автор
let bookWithOneAuthors = books[0];
for (let book of books){
    if (book.authors.length === bookWithOneAuthors.authors.length){
        bookWithOneAuthors = book;
    }
}
console.log('Книжка яку написав один автор:', bookWithOneAuthors.authors)