// UC10: Get number of contact persons by city or state

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        this.contacts.push(contact);
    }

    getCountByCity(city) {
        return this.contacts.filter(contact => contact.city === city).length;
    }

    getCountByState(state) {
        return this.contacts.filter(contact => contact.state === state).length;
    }
}

// Example
let addressBook = new AddressBook();
addressBook.addContact(new Contact("John", "Doe", "123 Street", "CityA", "StateA", "123456", "1234567890", "john@example.com"));
addressBook.addContact(new Contact("Jane", "Smith", "456 Avenue", "CityB", "StateA", "654321", "0987654321", "jane@example.com"));

console.log("Number of persons in CityA: ", addressBook.getCountByCity("CityA"));
console.log("Number of persons in StateA: ", addressBook.getCountByState("StateA"));
