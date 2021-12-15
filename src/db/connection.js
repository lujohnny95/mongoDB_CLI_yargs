require("dotenv").config();
const { MongoClient } = require("mongodb");
const { addBook} = require("../book");

const connection = async (crudFunction, bookObject) => {
    try {
        const client = new MongoClient(process.env.MONGO_URI);
        await client.connect();
        const db = client.db("BookList");
        const collection = db.collection("Books");
        await crudFunction(bookObject, collection);
        client.close();
    } catch (error) {
        console.log(error);
    }
};

module.exports = connection;