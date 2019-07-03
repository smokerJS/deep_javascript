function asyncFn(time) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('비동기 응답');
        }, time);
    });
}

const async = async function() {
    let test1 = await asyncFn(500)
    console.log(test1);
    let test2 = await asyncFn(1000)
    console.log(test2);
}



console.log('시작')
async();
console.log('종료')


/*
    어싱크 어웨잇 함수와 제너레이터의 차이점은
    제너레이터는 next 함수를 호출해야만 다음구문을 실행하며, next함수를 통해 값을 넘겨줄 수 있다.
    어싱크 어웨잇 함수는 자동으로 마지막 구문까지 실행한다.
*/