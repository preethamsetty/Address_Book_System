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
addressBook
