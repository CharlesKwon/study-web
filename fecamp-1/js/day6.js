// 문제: 1초마다 한번씩 실행하며 현재 시간을 초 단위까지 표시하는 clock() 함수를 작성하라.
// 단, 시간은 반드시 두 자리로 표시해야 한다. 예를 들어 9시 50분 7초라면 09:50:07로 표시한다.
// 사용예: clock();
// 힌트: 시간은 document.title = 시간문자열; 과 같이 작성하면 표시할 수 있다.

function clock() {
    var str = '';
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    
    if (hours < 10 ) {
        hours = '0'+ hours;
    }
    if (minutes < 10 ) {
        minutes = '0'+ minutes;
    }
    if (seconds < 10 ) {
        seconds = '0'+ seconds;
    }
    
    str = hours + ':' + minutes + ':' + seconds; 
    document.title = str;
    
    setTimeout(clock, 1000);
}
clock();

// 1부터 10까지 콘솔에 출력하는 코드
//var i = 1;  생략할 수 있다.
//for (var i = 1; i <= 10; i++) {
//    console.log(i);
////    i++;
//}

// 문제: 인수로 전달한 숫자의 단을 콘솔에 출력하느 구구단() 함수를 작성하라. 
// 출력 결과
// 3 x 1 = 3;
function 구구단(num) {
    for(var i = 1; i <= 9; i++ ) {
        console.log(num + ' x ' + i + ' = ' + (num * i));
    }
}
//구구단(3);

// 문제: 2단부터 9단까지 포함한 <table> 문자열을 반환하는 함수, 빈칸 : &nbsp
function 구구단전부() {
    var html = '';
    
    html = html + '<tr>';
    for(var j = 2; j < 10; j++) {
        if(j === 3) {
            continue;
        }
        html = html + '<td>' + j + '단' + '</td>';
    }
    html = html + '</tr>';
    
    for(var i = 1; i <= 9; i++) { 
		html = html + '<tr>';
		for(var j = 2; j <= 9; j++) {
            if(j === 3) {
                continue;
            }
            html = html + '<td>';
            html = html + (j + ' x ' + i + ' = ' + j * i);
            html = html + '</td>';
		}
		html = html + '</tr>';
	}
    
    return html = '<table style="border:1px solid black; width:800px;">' + html + '</table>';
}
구구단전부();

window.onload = function() {
    document.getElementById('box').innerHTML = 구구단전부();
}

//            var result = x + ' x ' + i + ' = ' + (x * i);
//            console.log(result);


// 문제: 전달된 인수 중 숫자만 모두 더한 값을 반환하는 함수 sum() 을 작성하라.
// 사용예: console.log(sum(1, 5, '+', 8)); //14 출력

function sum() {
    var result = 0;
    
    for ( var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === "number") {
            result += arguments[i]; 
        }    
    }
    return result;
}

console.log(sum(1, 5, '+', 8));

// 문제: 첫 번째 인수로 전달된 배열에 나머지 인수를 모두 추가하는 함수 push() 를 작성하라.

function push(arr) {
    for(var i = 1; i < arguments.length; i++) { 
        arr.push(arguments[i]); //call by reference
    }
}

var arr = ['a', 'b'];
push(arr, 1 , 2, 3);
console.log(arr); //출력결과 : ['a', 'b', 1, 2, 3]
push(arr, 1 , 2, 3, 4);
console.log(arr); //출력결과 : ['a', 'b', 1, 2, 3, 1, 2, 3, 4]

// break 문 : 반복문이 break 문을 만나면 즉시 반복을 멈춘다.

// continue 문 : 반복문이 continue 문을 만나면 현재의 코드 블럭을 건너뛴다.
// 즉, for 문에서는 증감식으로, while 문에서는 조건식으로 이동한다.

// 내장 타입의 기능을 확장할 때는 생성자.prototype.메소드이름 = function(){ ... } 형태를 사용한다.

String.prototype.toNumber = function() { 
    return parseInt(this);
};
'123'.toNumber();
'abc'.toNumber();

// 문제 : 배열에서 가장 큰 숫자를 반환하는 prototype 메소드 max()를 정의하라.

Array.prototype.max = function() {
    var max = 0;
    
    for(var i = 0; i < this.length; i++) { 
        if ( typeof this[i] !== "number" ) { 
            continue;
        }
        if( max < this[i] ) {
          max = this[i];
        }
        return max;
    }
//  return Math.max.apply(null, this);
};
console.log([1, 3, 5].max()); //5
console.log([10, 3, '+', -2].max()); //10

// 문제 : 날짜 객체에서 가리키는 시각이 오전인지 오후인지 문자열로 반환하는
// prototype 메소드 ampm() 을 작성하라.


Date.prototype.ampm = function() {
    var ampm;
    
    ampm = this.getHours(); 
    if(ampm >= 12) {
        return '오후';
    }
    else{
        return '오전';
    }
};
var date = new Date();
date.ampm(); //오후
console.log(date.ampm());
var date = new Date(2015, 4, 12, 9);
date.ampm(); //오전
console.log(date.ampm());












































