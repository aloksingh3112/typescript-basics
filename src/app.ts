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


// function union(a:string|number):void{
//    console.log(a);
// };

// union("alok");



/*  *** function type***  */

//  let sum: (num1:number,num2:number,num3?:number)=>number;

//  sum=(w,x,y=1)=>w+x+y;
//  console.log(sum(5,6));


/*  *** object type ***  */

// let sum:{num1:number,num2:number,getSum():number};

// sum={
//   num1:6,
//   num2:7,
//   getSum(){
//      return sum.num1+sum.num2
//   } 
// }


// console.log(sum.getSum());

/*  *** tuple type in array ***  */

// let arr:[string,number,boolean];
// arr=["alok",20,true];


// /*  *** type alias type ***  */
//  type num=number;
//  type calc=(num1:num,num2:num)=>number;

//  let add:calc=(x,y)=>x+y

//  console.log(add(2,3));


// /*  *** interface type ***  */

// interface sizes{
//     sizes:string[]
// }


// interface user extends sizes{
//     name:string,

//     getSize():string[]
// }

// let person:user;

// function createUser(name:string,sizes:string[]):user{
//     return {
//         name,
//         sizes,
//         getSize(){
//             return this.sizes
//         }
//     }

// }

// createUser("alok",["small","medium","large"]);



 /*  ***  class ***  */

//  class User{
//      sizes:string[]=[];
//      constructor(public name:string) {
         
//      }

//      setSize(size:string):void{
//          this.sizes.push(size);

//      }

//  }

//  const user=new User("alok");
//  user.setSize("ggs");
//  console.log(user.name);


/*  ***  this keyword ***  */

// function myFunction(){
//     console.log(this);
// }
// myFunction();

// const myObj={
//     myFunction:()=>{
//        return {
//             inner:()=>{
//                 console.log(this);
//             }
//         }
//     }
// }

// myObj.myFunction().inner();

// class myClass{
//     myFunction=()=>{
//         console.log(this);
//     }
// }
 
// const instance=new myClass();
// instance.myFunction();


// var obj={
//     name(){
//         console.log(this);
//         return (()=>{
//           console.log(this);
//         })()
//     }
// }

// obj.name();



/*  ***  no Implicit this ***  */

// const element=document.querySelector('.click');
// function addEvent(this:HTMLAnchorElement,event:Event){
//     event.preventDefault();
//     console.log(this);

// }


// element.addEventListener('click',addEvent,false)



/*  ***  typeof query ***  */

const person={
    name:"alok",
    age:19
}

type user= typeof person;
type user2=keyof user;

type user3= user[user2]

const anotherPerson:user={
    name:"avinash",
    age:10
    
}



