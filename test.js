function test(el){
    return el&1;
}

function filter(array, test){
    return array.reduce(function(arr,  el){
        if(test(el)){
            arr.push(el);
        }
        
        return arr;
    }, []);
};

let array = [1, 2, 3, 4, 5];

let ans = filter(array,test);
console.log(ans);