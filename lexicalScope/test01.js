var num1 = 10;
let num2 = 20;

function testFn1() {
    var num1 = 11;
    let num2 = 22;
    testFn2();
}
function testFn2() {
    console.log(num1);
    console.log(num2);
}


testFn1();
testFn2();


/*
10
20
10
20

렉시컬 스코프는 함수를 어디서 실행하였는지가 아닌, 어디서 선언하였는지에 따라
전역변수를 호출할때 그 값이 결정된다.

testFn1 함수에서
testFn2 함수를 호출하였을때
testFn2 함수의 전역은 testFn1 이다.
이 때 testFn1 함수에서 선언한 변수들을 호출한다면 그것을 동적 스코프(다이나믹 스코프)라고 부르며,
자바스크립트는 testFn2 함수를 선언한 위치의 전역 변수를 호출한다.
이를 렉시컬 스코프라고 부른다.
*/