const calculator = {
    result : 0,

    add : function(num){
        this.result = this.result + parseInt(num);
    },

    subtract : function(num){
        this.result = this.result - parseInt(num);
    },

    multiply : function(num){
        this.result = this.result * parseInt(num);
    },

    divide : function(num){
        this.result = this.result / parseInt(num);
    },

    equals : function(){
        console.log(this.result);
    }
};