// 1.Use strict
// 자바스크립트 is very flexible. ===dangerous
// 선언되지 않는 변수의 값을 할당한다든지, 기존의 존재하는 프로토타입을 변경한다든지
// added ECMAScript 5
// 우리가 더이상은 비상식적인 것을 쓰지 않을 수 있다.

'use strict'

// 2.Variable 변경될 수 있는 값
// let(added ES6)
let golbalName = 'min'
{
  let name = 'ellie';
console.log(name);
name = 'hello';
console.log(name);
console.log(globalName);
}
console.log(name);
console.log(globalName);

//var(don't ever use this!)
//var hoisting(move declaration from bottom to top)
//has no block scope

{
  age = 4;
  var age;
}
console.log(age) //var로 선언하면 block scope이 불가능해서 블록 밖에서 접근하려해도 가능.. 

//3. Constants
//favor immutable data type always for a few reasons;
// -security
// -thread safety
// -reduce human mistakes

const daysInWeek = 7;
const maxNumber = 5; 

//4.Variable types
//primitive타입, single item : number, string, boolean, null, underfiedn, symbol
//더이상 작은 단위로 나눠질 수 없는 한가지 아이템을 맣한다.

//object타입, box container
//single item들을 여러개 묶어서 한 박스로 관리해줄 수 있게 하는 것

//function, first-class function :함수도 변수에 할당이 가능. 그렇기 때문에 함수의 파라미터로도 전달이 되고 리턴타입으로도 함수 리턴가능하다
