const debounce = function(fn, delay) {
    let timer = null;
    return function() {
        if(timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...arguments);
        }, delay);
    }
}

function test(num1, num2) {
    console.log(num1, num2);
}

const click = debounce(test, 200);



/**
 * 
 * 디바운스는 요청이 일어나는 동안 이벤트 과도한 이벤트 호출을 막고
 * 일정시간 요청이 발생하지 않았을 때 실행한다.
 * 
 */

