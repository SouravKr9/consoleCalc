class Calculator {
    result = 0;

    add(num){
        this.result = this.result + parseInt(num);
        return this;
    }

    subtract(num){
        this.result = this.result - parseInt(num);
        return this;
    }

    multiply(num){
        this.result = this.result * parseInt(num);
        return this;
    }

    divide(num){
        this.result = this.result / parseInt(num);
        return this;
    }

    equals(){
        console.log(this.result);
        return this;
    }
}

calc = new Calculator();
