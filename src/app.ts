// let firstNum:number =10;
// let secondNum=20;


// function calcSum(a:number,b:number):number{
//    return a+b
// }

// const sum=calcSum(firstNum,secondNum);

// console.log(`sum is ${sum}`);



/*  *** Void Type    ***  */

// let firstname:string="alok";

// function setName(name:string):void{
//    firstname=name
// }
// console.log(firstname);
// setName("avinash");
// console.log(firstname);


/*  *** never type    ***  */

// function neverType(error:string):never{
//    throw new Error(error);
//    // code after this is unreachable so it will never return

// }
// neverType("not available");

/*  *** union type  ***  */

function union(a:string|number):void{
   console.log(a);
};

union("alok");




