// UC7: Ensure no duplicate entries based on name

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        const isDuplicate = this.contacts.some(c => c.firstName === contact.firstName && c.lastName === contact.lastName);
        if (isDuplicate) {
            throw new Error("Duplicate contact detected.");
        }
        this.contacts.push(contact);
    }

    getAllContacts() {
        return this.contacts;
    }
}

// Example
try {
    let addressBook = new AddressBook();
    addressBook.addContact(new Contact("John", "Doe", "123 Street", "City", "State", "123456", "1234567890", "john@example.com"));
    addressBook.addContact(new Contact("John", "Doe", "456 Avenue", "City", "State", "654321", "0987654321", "john2@example.com"));  // Duplicate entry
} catch (error) {
    console.error(error.message);  // Should print "Duplicate contact detected."
}
