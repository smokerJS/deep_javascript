function* counter() {
    console.log('첫번째 호출');
    yield 1;                 
    console.log('두번째 호출');
    yield 2;                  
    console.log('세번째 호출');  
}

const generator = counter();

console.log(generator.next()); // 첫번째 호출 {value: 1, done: false}
console.log(generator.next()); // 두번째 호출 {value: 2, done: false}
console.log(generator.next()); // 세번째 호출 {value: undefined, done: true}

/*
    제너레이터는 이터레이터를 더 쉽게 구현할 수 있는 함수이다.
    function* 로 선언하며 반드시 yield 구문이 내부에 존재해야 한다.
    next()를 호출하면 yield이 선언된 지점까지 함수를 실행하고 그 값을 반환한다.
*/