const{program} = require("commander");


function invokeAction({ action, id, name, email, phone }) {
    switch (action) {
        case 'list':

            break;

        case 'get':

            break;

        case 'add':

            break;

        case 'remove':

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
invokeAction(options);

