// UC2: Validation for adding contacts

class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        if (!this.validateName(firstName) || !this.validateName(lastName)) {
            throw new Error("Invalid name. Should start with capital and have at least 3 characters.");
        }

        if (!this.validateAddress(address) || !this.validateAddress(city) || !this.validateAddress(state)) {
            throw new Error("Invalid address/city/state. Should have at least 4 characters.");
        }

        if (!this.validateZip(zip) || !this.validatePhone(phone) || !this.validateEmail(email)) {
            throw new Error("Invalid Zip/Phone/Email.");
        }

        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
    }

    validateName(name) {
        return /^[A-Z][a-zA-Z]{2,}$/.test(name);
    }

    validateAddress(address) {
        return address.length >= 4;
    }

    validateZip(zip) {
        return /^\d{5,6}$/.test(zip);
    }

    validatePhone(phone) {
        return /^\d{10}$/.test(phone);
    }

    validateEmail(email) {
        return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
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

// Example with validation
try {
    let addressBook = new AddressBook();
    addressBook.addContact(new Contact("John", "Doe", "123 Street", "City", "State", "123456", "1234567890", "john@example.com"));
    console.log(addressBook.getAllContacts());
} catch (error) {
    console.error(error.message);
}
