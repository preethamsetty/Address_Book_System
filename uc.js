// UC1: Address Book with basic structure

class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
    }
}

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

// Example
let addressBook = new AddressBook();
addressBook.addContact(new Contact("John", "Doe", "123 Street", "City", "State", "123456", "1234567890", "john@example.com"));
console.log(addressBook.getAllContacts());
