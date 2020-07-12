function Events() {
    this.keyUp = function(){console.log('keyUp');}
    this.keyPress = function(){console.log('keyPress');}
    this.keyDown = function(){console.log('keyDown');}
};
// 부모 클래스 구현


function CustomEvent() {
    Events.apply(this, arguments);  // 자식의 this 를 부모에게 할당 이때 상속 발생
    this.keyPress = function(){console.log('키프레스');}    // 자식 클래스의 keyPress 함수 재정의
};
// 자식 클래스 구현

CustomEvent.prototype = Object.create(Events);
// 자식의 프로토타입을 부모로 지정
// 이후 부모의 구조가 변경되어도 자식 클래스에서 프로토타입 체이닝으로 인하여 상속받게된다.


var event = new Events();
event.keyUp();
event.keyPress();
event.keyDown();

console.log('--------------------');

var customEvt = new CustomEvent();
customEvt.keyUp();
customEvt.keyPress();
customEvt.keyDown();

Events.key = function(){console.log('key Event');}
// 부모 클래스 구조 변경

customEvt.key();
// 프로토타입 체이닝을 통하여 부모클래스의 새로 정의된 함수를 찾아 호출
