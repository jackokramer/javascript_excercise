class Player{
    constructor(name, country, clubs){
        this.name = name;
        this.country = country;
        this.clubs = clubs;
    }
    playerInfo(){
        console.log(` ${this.name} was born in ${this.country}`)
    }
}

const messi =  new Player("messi", 'argentina')

messi.playerInfo()


class TennisPlayer extends Player {
    constructor(name, age, country, club){
        super(name, country, club)
        this.age = age;
    }
    tennisInfo(){
        console.log(` ${this.name} is ${this.age} years old and doens't play for ${this.clubs} only by his/her/theys self. And was born in ${this.country}`)
    }
}

const nadal = new TennisPlayer('Rafa Nadal', 38, 'a club', 'Spain')

nadal.tennisInfo()