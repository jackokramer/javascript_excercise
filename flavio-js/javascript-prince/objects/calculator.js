const calculator = {
    state: 0,

    sum(a){
        return this.state+= a
    }
}

console.log(calculator.sum(2))


class Calculator {
    #state = 0 // the # will make it private
    
    sum(a){
        this.#state +=a
    }
    sub(a){
        this.#state -=a
    }
    mult(a){
        this.#state *=a
    }
    div(a){
        this.#state /=a
    }
    state(){
        return this.#state
    }
    cleer(){
        this.#state = 0;
    }
}

const calculatorS = new Calculator()

//calculatorS.state = 200
calculatorS.sum(2)
calculatorS.sum(7)
calculatorS.div(3)
calculatorS.mult(9)
calculatorS.sub(9)
calculatorS.state()

console.log(calculatorS.state)