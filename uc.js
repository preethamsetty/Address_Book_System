// UC4: Find existing contact person using their name and edit it

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

    // Find contact by name and edit
    editContact(name, newDetails) {
        let contact = this.contacts.find(c => c.firstName === name || c.lastName === name);
        if (contact) {
            Object.assign(contact, newDetails);
        } else {
            throw new Error("Contact not found.");
        }
    }
}

// Example
let addressBook = new AddressBook();
addressBook.addContact(new Contact("John", "Doe", "123 Street", "City", "State", "123456", "1234567890", "john@example.com"));
addressBook.editContact("John", { city: "NewCity", phone: "9999999999" });
console.log(addressBook.getAllContacts());
