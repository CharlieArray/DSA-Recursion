function f(n){
    //create function
    // implement parameters if needed
    //first make stop condition
    // make recursive condition
    if(n == 0){
        message= "All sheep jumped over fence"
        return console.log(message);
    }
    console.log(`${n}: Another sheep jumps over the fence`)
     return f(n-1)
}

f(3);

function powerCalculator(x, y){
    //first int base
    //second int exponent
    //what is stop case? greater than 0, x = 10, y < 10
    if ( y == 0){
        return 1
    }

    if (y < 0){
        return 0
    }
    return (x* powerCalculator(x , y - 1))
}

console.log(powerCalculator(10,3));

const word = "charles";

function reverseString(word){
    //goal is to reverse word string 
    //word == string
    if (word.length == 0){
        return null
    }
    if(word.length == 1){
       return word  
    }
    return reverseString(word.substring(1))+word[0]
    
}
return console.log(reverseString(word))
