// UC3: Ability to create multiple Address Books and add contacts

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
}

// Adding multiple contacts
let addressBook1 = new AddressBook();
addressBook1.addContact(new Contact("John", "Doe", "123 Street", "City", "State", "123456", "1234567890", "john@example.com"));
addressBook1.addContact(new Contact("Jane", "Smith", "456 Avenue", "Town", "Province", "654321", "0987654321", "jane@example.com"));

console.log(addressBook1.getAllContacts());
