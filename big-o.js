
function sum(array){
    let sum=0, ticks=1;
    for(let i=0; i<array.length;i++){
        sum += array[i];
        ticks++;
    }
    console.log({result: sum, ticks})
    return {result: sum, ticks}
}

sum([1, 2, 3]);

/*Big O time complexities: 

1a)Since person shouted out do dogs match, it could be a group of 10  or 100 people, the number of steps from getting result would be 1 so constant time would be "O(1)": constant time

1b) Array of 15 peoples dog breed,
   For loop to see if breed matches to satisfy myDogBreed == theirDogBreed

   For loops are example of linear time: O(n)

2) Even or Odd => 0(1):constant time complexity

3) Quadratic Time: O(n^2) because it uses nested loops, so two variables are performing linear operations on each value 
so n * n = O(n^2)

4) Doubler Function time complexity is linear time: O(n), 
function peforms a for loop on array to multiple and assign each index position a multiple of 2

5) Naive search would be a linear time: O(n)

6) Nested loops would be a quadratic time complexity: O(n^2)

7)

8) Efficent search -> O(log n) any strategy that takes a left and right 'divide/conquer' strategy would be considered O(log n)

9) O(1) because its simple arithmetic, doesnt matter array length
*/
