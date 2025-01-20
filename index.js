// Problem-1: Write a loop 1 to 200. Use break to exit the loop once you find 100.

for(let i=1; i<=200; i++){
    if(i==101){
        break;
    }
    console.log(i);
}


// ******Problem-2 Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
// for loop

let sum=0;
for(let i=1; i<=20; i++){
    sum=sum+i;
    if(sum>=100){
        break;
    }
    console.log(sum);   
}
console.log(sum);
                //    while loop

let Sum = 0;
let i = 1;
while(i<=100){
    Sum=Sum + i;
    if(Sum >=100){
        break;
    }
    console.log(Sum);
    i++;
}



 /*Problem-3: Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.*/

for(i=1; i<=40; i++){
    if(i%2!= 0){
        continue;
    }
    console.log(i);
}


// Problem-5: display odd numbers from 55 to 85 and skip the numbers divisible by 5.

for(i=55; i<=85; i++){
    if(i%2==0 || i%5==0){
        continue;
    }
    console.log(i);
}

// Problem-6: I will invest at least 6 hrs every single day :for :next 60 days!" this message 60 times. So display this.
 let display ="I will invest at least 6 hrs every single day :for :next 60 days!"

 for( let i=1; i<=60; i++){
    console.log(i+ '  '+ display);

}

// Problem-7: Find all the odd numbers from 61 to 100. And Find all the even numbers from 78 to 98.


for(i=61; i<=100; i++){
    if(i%2!==0){
        console.log(i);
    }
   
}

for(i=78; i<=98; i++){
    if(i%2==0){
        console.log(i);
    }
    
}

// Problem-8: Display sum of all the odd numbers from 91 to 129.

let sum = 0;
for(i=91; i<=129; i++){
    if(i%2!==0)
    sum=sum+i;
    
}
console.log(sum);

// Problem-9:Display sum of all the even numbers from 51 to 85.
  
let sum = 0;
    for(i=51; i<=85; i++){
        if(i%2==0){
            sum = sum+i;
        }
    }
    console.log(sum);


// Problem- 10: Implement a countdown timer that counts down from 81 to 65.  

for(i=81; i>=65; i--){
       console.log(i);
        
    }
    
// Problem-11: Generate a multiplication table for number 8

let number = 8;
let namata = 0;
for(let i=1; i<=10; i++){
    namata  =`${number} x${i} =${number*i}`
    console.log(namata);
}
                            //    js-array-tasks

                // A** Declare an array :

    // 1 . Declare an array with 5 elements containing fruits

 /*let fruits = ['mango','orange', 'banana', 'apple', 'grape'];*/  

   
    // 2 . console log the 3rd index element

    /*fruits = ['mango','orange', 'banana', 'apple', 'grape'];
   console.log(fruits['3']);*/


    // 3 .change the value of the 2nd index element to jambura

   /* fruits[2] = 'jambura'
    console.log(fruits);*/

    // 2. Add or remove elements

/*1. Declare an array of 3 tourist destinations*/

// let touristdestination = ['cox-bazer','france','maldive'];
// console.log(touristdestination);
   
// 2. Add a new tourist destination to your tourist array

 
//   touristdestination.push('japan'); 
//  console.log(touristdestination.push('japan'));

// /*3. Add two more to your array*/

// //  touristdestination.push('u.k','nepal');
//  console.log(touristdestination.push('u,k','nepal'));

/*4.Remove the last tourist destination you have added*/

// touristdestination.pop();
// console.log(touristdestination.pop());

// /*5.display the final array as output*/
// console.log(touristdestination);

// 3. Checking Array Membership with 'includes'

/*1 . Create an array of books containing different book.*/

// let differentbooks = ['bangla','enlish','math','science','accounting','managment','javascript'];
// console.log(differentbooks);

/*2 . Use the includes method to check if the array contains a javascript book.*/


// console.log(differentbooks.includes('javascript'));



