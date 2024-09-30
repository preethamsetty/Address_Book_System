// UC11: Sort the entries alphabetically by person’s name

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        this.contacts.push(contact);
    }

    sortByName() {
        this.contacts.sort((a, b) => a.firstName.localeCompare(b.firstName));
    }
}

// Example
let addressBook = new AddressBook();
addressBook.addContact(new Contact("John", "Doe", "123 Street", "CityA", "StateA", "123456", "1234567890", "john@example.com"));
addressBook.addContact(new Contact("Jane", "Smith", "456 Avenue", "CityB", "StateA", "654321", "0987654321", "jane@example.com"));

addressBook.sortByName();
console.log(addressBook.getAllContacts());
