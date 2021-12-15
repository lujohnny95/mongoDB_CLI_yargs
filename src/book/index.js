//create (C): adds a new entry on to the DB
exports.addBook = async (bookObject, collection) => {
    try {   
        await collection.insertOne(bookObject);
        console.log(`Successfully added ${bookObject.title} by ${bookObject.author}.`)
    } catch (error) {
        console.log(error)
    }
};
//read (R): searches for DB entries by title
exports.findBook = async (findResult, collection) => {
    try {
        await collection.find(findResult);
        console.log(`${findResult.title} is found in book list.`)
    } catch (error) {
        console.log(error)
    }
}; 

exports.updateBook = async (updateEntry, collection) => {
    try {
        await collection.updateOne(updateEntry);
        console.log(`A new book has been updated: ${updateEntry.title} by ${updateEntry.author}`)
    } catch (error) {
        console.log(error)
    }
};

exports.deleteBook = async (deleteEntry, collection) => {
    try {
        await collection.deleteOne(deleteEntry);
        console.log("Deleted book entry: ", deleteEntry.title)
    } catch (error) {
        console.log(error)
    }
};

