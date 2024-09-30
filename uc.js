// UC5: Find a person by name and delete it

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        this.contacts.push(contact);
    }

    getAllContacts() {
        return this.contacts;
    }

    deleteContact(name) {
        const index = this.contacts.findIndex(c => c.firstName === name || c.lastName === name);
        if (index !== -1) {
            this.contacts.splice(index, 1);
        } else {
            throw new Error("Contact not found.");
        }
    }
}

// Example
let addressBook = new AddressBook();
addressBook.addContact(new Contact("John", "Doe", "123 Street", "City", "State", "123456", "1234567890", "john@example.com"));
addressBook.deleteContact("John");
console.log(addressBook.getAllContacts());  // John will be removed
