const {program} = require("commander");

const contacts = require("./contacts");

const invokeAction = async ({action, id, name, email, phone}) => {
    switch (action) {
        case 'list':
            const result = await contacts.listContacts();
            console.log(`Contacts list:`)
            console.table(result);
            break;

        case 'get':
            const contact = await contacts.getContactById(id);
            console.log('Search contact is:')
            console.table(contact);
            break;

        case 'add':
            const newContact = await contacts.addContact(name, email, phone)
            console.log(`Contact ${name} successfully added`)
            console.table(newContact);
            break;

        case 'remove':
            const removeContact = await contacts.removeContact(id)
            console.log(`${removeContact.name} successfully deleted`)
            console.table(removeContact);
            break;

        default:
            console.warn('\x1B[31m Unknown action type!');
    }
}

program
    .option('-a, --action <type>', 'choose action')
    .option('-i, --id <type>', 'user id')
    .option('-n, --name <type>', 'user name')
    .option('-e, --email <type>', 'user email')
    .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const options = program.opts();

const start = async (argv) => {
    try {
        await invokeAction(argv);
    } catch (error) {
        console.log(error);
    }
};

start(options);