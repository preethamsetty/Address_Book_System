// UC8: Search for a person in a particular city or state

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        this.contacts.push(contact);
    }

    searchByCity(city) {
        return this.contacts.filter(contact => contact.city === city);
    }

    searchByState(state) {
        return this.contacts.filter(contact => contact.state === state);
    }
}

// Example
let addressBook = new AddressBook();
addressBook.addContact(new Contact("John", "Doe", "123 Street", "CityA", "StateA", "123456", "1234567890", "john@example.com"));
addressBook.addContact(new Contact("Jane", "Smith", "456 Avenue", "CityB", "StateA", "654321", "0987654321", "jane@example.com"));

console.log("Contacts in StateA: ", addressBook.searchByState("StateA"));
console.log("Contacts in CityA: ", addressBook.searchByCity("CityA"));
