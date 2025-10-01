class User {
    constructor(
        username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPassword() {
        return `${this.password.split('').reverse().join('')}`;
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`;

    }
} 


