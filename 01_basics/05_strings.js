 const gameName = new String('hiteshhc')


 console.log(gameName.charAt(2));
// t
 console.log(gameName.indexOf('s'));
// 4

 console.log(gameName.length);
 // 8

 console.log(gameName.toUpperCase());
//HITESHHC

 const newString = gameName.substring(0,4)
 console.log(newString);

 //hite

 const anotherString = gameName.slice(-8, 4)
 console.log(anotherString);

 // hite

 const newStringOne ="   amit  "

 console.log(newStringOne);

//    amit  

 console.log(newStringOne.trim());

 //amit

 const url = "https://hitesh.com/hitesh%20choudhary"

 console.log(url.replace('%20', '-'))

 //https://hitesh.com/hitesh-choudhary

console.log(url.includes('hitesh'))

//true

console.log(url.includes('Amit'))
//false