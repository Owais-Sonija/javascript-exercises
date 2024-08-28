const getTheTitles = function(books) {
const booksArr = books;
const result = [];
booksArr.map((book)=> result.push(book.title))
return result;

};

// Do not edit below this line
module.exports = getTheTitles;
