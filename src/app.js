const yargs = require("yargs");
const connection = require("./db/connection");
const { addBook, findBook, deleteBook } = require("./book")

const app = async (args) => {
    try {
        if (args.add) {
            //call connection function and pass add function and bookObject;
            const bookObject = { title: args.title, author: args.author }
            await connection(addBook, bookObject);
        }
        else if (args.find) {
            //searches for the books by title:
            const findResult = { title: args.title }
            await connection(findBook, findResult) 
        }
        else if (args.update) {
            //updates a book entry:
            const updateEntry = { title: args.title }
            await connection(updateBook, updateEntry)
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