const userData = { 
  username: "Jack",
  title: "JavaScript Programmer",
  getBio: () => { // done by a function declaration
    console.log(`User ${this.username} is a ${this.title}`);
  },
  askToFriend() {
      setTimeout(()=>{
        console.log(`Would you like to friend ${this.username}?`) //use arrow functions for lexical scope
      }, 1000);
  } 
}

userData.getBio()
userData.askToFriend()
//this keyword is determined dynamically

// arrow functions have a lexical scope