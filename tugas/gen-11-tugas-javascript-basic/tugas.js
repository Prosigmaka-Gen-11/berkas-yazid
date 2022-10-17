const multiply =  function(a, b) {
    return a * b;
}

const something = {
    name : "a strange object",
    age : 342,
    characteristics : {
        eye : "slenty",
        nose : 'big',
        color : 'brown',
        movement : 'fast'
    },
    roar : function roarSound (){
        console.log("Roaarrr !!!!")
    },
    canMultiply : true,
    multiply : multiply
}

console.log(something);
