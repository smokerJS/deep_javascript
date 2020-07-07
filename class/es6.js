class Events {
    keyUp = function(){console.log('keyUp');}
    keyPress = function(){console.log('keyPress');}
    keyDown = function(){console.log('keyDown');}
}

class CustomEvent extends Events {
    keyPress = function(){console.log('키프레스');} 
}

const event = new Events();
event.keyUp();
event.keyPress();
event.keyDown();

console.log('--------------------');

const customEvt = new CustomEvent();
customEvt.keyUp();
customEvt.keyPress();
customEvt.keyDown();

Events.prototype.key = function(){console.log('key Event');}
// 부모 클래스 구조 변경

customEvt.key();