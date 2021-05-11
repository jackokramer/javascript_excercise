const user = {
  name: "",
  username: "",
  phoneNumber: "",
  email: "",
  password: ""  
}

const newUser = {
    username: "jackokramer",
    email: "jackokramer@yahoo.com",
    password: 'splunker@91'
}
/*
// const verifiedDefault = {
//     verified: false one wat to verfiy if an account is valid
 //}

Object.assign({}, user, newUser);
console.log(Object.assign({}, user, newUser, {verified: false
})); // to avoid mutation of data add an empty object as the first argument.
*/
//object.assign({}) gathers properties and assigns them to a new object


const createdUser = {...user, ...newUser, verified: false};

console.log(createdUser);

// order matters for these calls 