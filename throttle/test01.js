const throttle = function(fn, delay) {
    let checker = false;
    return function() {
        if(!checker) {
            checker = true;
            setTimeout(() => {
                fn(...arguments);
                checker = false;
            }, delay);
        }
    }
};


function test(num1, num2) {
    console.log(num1, num2);
}

const click = throttle(test, 400);


/**
 * 
 * 쓰로틀링은 요청이 일어나는 동안 이벤트 과도한 이벤트 호출을 막고
 * 일정 주기로 이벤트를 발생시킨다.
 * 
 */
