const calculator = {
    result : 0,

    add : function(num){
        this.result = this.result + parseInt(num);
        return this;
    },

    subtract : function(num){
        this.result = this.result - parseInt(num);
        return this;
    },

    multiply : function(num){
        this.result = this.result * parseInt(num);
        return this;
    },

    divide : function(num){
        this.result = this.result / parseInt(num);
        return this;
    },

    equals : function(){
        console.log(this.result);
        return this;
    }
};
