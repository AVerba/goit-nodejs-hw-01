const fs = require("fs/promises");
const path = require("path");
const ObjectID = require("bson-objectid");

const contactsPath = path.join(__dirname, "./db/contacts.json");
const updateContactsList = async (contacts) => {
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
}

const listContacts = async () => {
    const data = await fs.readFile(contactsPath);
    return JSON.parse(data);

}

const getContactById = async (contactId) => {
    const contacts = await listContacts();
    const result = contacts.find(item => item.id === contactId);
    if (!result) {
        return null;
    }
    return result;

}

const removeContact = async (contactId) => {
    const contacts = await listContacts();
    const idx = contacts.findIndex(item => item.id === contactId);
    if (idx === -1) {
        return null;
    }
    const [removeContact] = contacts.splice(idx, 1);
    updateContactsList(contacts);
    return removeContact;

}

const addContact = async (name, email, phone) => {
    const contacts = await listContacts();
    const newContact = {
        id: ObjectID().id,
        name,
        email,
        phone,
    };
    contacts.push(newContact);
    updateContactsList(contacts);
    return newContact;

}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
}