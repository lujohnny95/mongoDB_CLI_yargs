const yargs = require("yargs");
const connection = require("./db/connection");
const { addBook, findBook, updateBook, deleteBook, findAllBooks } = require("./book")

const app = async (args) => {
    try {
        if (args.add) {
            //call connection function and pass add function and bookObject;
            const bookObject = { title: args.title, author: args.author, year: null, publisher: null }
            await connection(addBook, bookObject);
        }
        else if (args.find) {
            //searches for the books by query:
            const filteredResult = { title: args.title }
            await connection(findBook, filteredResult) 
        }
        else if (args.findAll) {
            const findResult = {}
            await connection(findAllBooks, findResult)
        }

        else if (args.update) {
            //updates a book entry:
            const newQuery = { title: args.title }
            const updateEntry = { title: args.title, author: args.author }
            await connection(updateBook, newQuery, updateEntry)
        }
        else if (args.delete) {
            //deletes a book entry:
            const deleteEntry = { title: args.title }
            await connection(deleteBook, deleteEntry)
        }
    } catch (error) {
        console.log(error);
    }
};

app(yargs.argv);