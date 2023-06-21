// 4. Arrange in alphabetical order.

// Write a program that accepts a list of objects representing books [ title, author, and year] and a callback
// function. The program should use the map function to create a new list containing only the titles of the books,
// and then pass this new list to the callback function. The callback function should then log the titles to the
// console in alphabetical order.

const books = [
    {
        title: "INDIAN HISTORY",
        author: "Sruti Dev Gossami",
        year: 1918,
    },
    {
        title: "Akhimat Jar Heral Khima",
        author: "Hemanta Biswa Sharma",
        year: 2018,
    },
    {
        title: "Who Are You",
        author: "George orwell",
        year: 1813,
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        year: 1949,
    },
];

function logTitles(titles) {
    titles.sort();
    console.log(titles.join(","));
};

function extractTitles(books, callback) {
    const titles = books.map((book) => book.title);
    callback(titles);
}
extractTitles(books, logTitles)