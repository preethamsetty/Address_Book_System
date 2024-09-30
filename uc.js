// UC6: Ability to find the number of contacts using reduce

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

    // Get number of contacts using reduce
    getContactCount() {
        return this.contacts.reduce(count => count + 1, 0);
    }
}

// Example
let addressBook = new AddressBook();
addressBook.addContact(new Contact("John", "Doe", "123 Street", "City", "State", "123456", "1234567890", "john@example.com"));
addressBook.addContact(new Contact("Jane", "Smith", "456 Avenue", "Town", "Province", "654321", "0987654321", "jane@example.com"));
console.log("Number of contacts: " + addressBook.getContactCount());
