const fs = require("fs/promises");
const path = require("path");
const ObjectID = require("bson-objectid");

const booksPath = path.join(__dirname, "contacts.json");

const listContacts = async () => {

}

const getContactById = async (contactId) => {

}

const removeContact = async (contactId) => {

}

const addContact = async (name, email, phone) => {

}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
}