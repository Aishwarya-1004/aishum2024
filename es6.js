// //2.arrow function'

// arrowfunc=(departments)=>
//     {
//         return departments[0];
//     }
//     console.log(arrowfunc(["aiml","it","cse"]));
    
//     arrowfunc=(departments)=>
//     {
//         console.log(departments);
//     }
//     arrowfunc(["aiml","it","cse"]);

//3.destructing operator
//  var marks=[90,80,98]
//  var [m1,m2]=marks
//  console.log(m1,m2);

//  //4.ternary operator

//  a=10
//  out=(a%2==0)?"even":"odd";
//  console.log(a,"is",out)

//  //5 spread operator

//  kaj=[10,20,30]
//  sus=[...kaj,40,50]
//  madh=[...kaj,sus]
//  console.log(sus);
//  console.log(madh);

//  //6 rest operator


//  //7 scope var for global ..let for local(block scope)

//  var a=10;
//  const pi=3.14;
//  console.log("out",pi);
//  console.log("out",a);
//  {
//     let a=5
//     let b=15
//     console.log("in",a);
//     console.log("in",b);
//  }
//  console.log("out",pi);
//  console.log("out",a);


 //8.hoisting other than var,let const are shows intialization error
 console.log(a);
 var a=10;
 console.log(a);
