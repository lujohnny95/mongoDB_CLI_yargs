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
exports.findBook = async (filteredResult, collection) => {
    try {
        await collection.find(filteredResult).toArray();
        console.log(`${filteredResult.title} is found in book list.`)
    } catch (error) {
        console.log(error)
    }
}; 
//searchs for all the books in the DB
exports.findAllBooks = async (findResult, collection) => {
    try {
        await collection.find(findResult).toArray();
        console.log("Found documents: =>", findResult)
    } catch (error) {
        console.log(error)
    }
}


//update (U): updates selected entries.
exports.updateBook = async (newQuery, updateEntry, collection) => {
    try {
        await collection.updateOne(newQuery, { $set: updateEntry });
        console.log(`A new book has been updated: ${updateEntry.title} by ${updateEntry.author}`)
    } catch (error) {
        console.log(error)
    }
};


//delete (D): deletes the selected entries.
exports.deleteBook = async (deleteEntry, collection) => {
    try {
        await collection.deleteOne(deleteEntry);
        console.log("Deleted book entry: ", deleteEntry.title)
    } catch (error) {
        console.log(error)
    }
};
