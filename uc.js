// UC12: Sort the entries by city, state, or zip

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        this.contacts.push(contact);
    }

    sortByCity() {
        this.contacts.sort((a, b) => a.city.localeCompare(b.city));
    }

    sortByState() {
        this.contacts.sort((a, b) => a.state.localeCompare(b.state));
    }

    sortByZip() {
        this.contacts.sort((a, b) => a.zip - b.zip);
    }
}

// Example
let addressBook = new AddressBook();
addressBook.addContact(new Contact("John", "Doe", "123 Street", "CityA", "StateB", "123456", "1234567890", "john@example.com"));
addressBook.addContact(new Contact("Jane", "Smith", "456 Avenue", "CityB", "StateA", "654321", "0987654321", "jane@example.com"));

addressBook.sortByCity();
console.log("Sorted by City: ", addressBook.getAllContacts());

addressBook.sortByState();
console.log("Sorted by State: ", addressBook.getAllContacts());

addressBook.sortByZip();
console.log("Sorted by Zip: ", addressBook.getAllContacts());
