class User{
    firstName;
    lastName;
    middleName;

    constructor(data={}){
        this.firstName = data.firstName || ''
        this.lastName = data.lastName || ''
        this.middleName = data.middleName || ' '
    };
}

function fullName() {
    if(this.middleName.length>0){
        return `${this.firstName} ${this.middleName[0]}. ${this.lastName}}`
    }
    return `${this.firstName} ${this.lastName}`
}

function sayMyName(){
    window.alert(this.fullName)
}