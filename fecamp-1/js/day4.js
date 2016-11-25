// call by value
function toNumber(str) {
    var str;
    str = outerStr;
    str = '111'    
    return parseInt(str);
}
var outerStr = '123.45';
var num = toNumber(outerStr);
// 원시타입은 독립적으로 함께 바뀌지 않는다.

// call by reference
function addOne(arr) {
    var arr;
    arr = outerArr;
    arr.push('끝');
}
var outerArr = ['가', '나', '다'];
addOne(outerArr);
// 복합타입은 바뀐다.

// Date : 날짜를 다루는 객체
var date = new Date;
console.log(date);
//console.log(date.getYear());
console.log(date.getFullYear());
console.log(date.getMonth() + 1); // 월만 1을 더해준다.
console.log(date.getDate()); 
console.log(date.getHours());
console.log(date.getMinutes()); 
console.log(date.getSeconds());
console.log(date.getTimezoneOffset()); // 9시간 빠르다. 

console.log(date.getFullYear()); 

console.log(date);
date.setFullYear(2014);
console.log(date);

// 문제: 오늘로부터 100 뒤는 몇월 몇일인가? // sedDate 유용하다.
date.setDate(date.getDate() + 100);
console.log(date);

console.log(date.getTime()); 
// January 1, 1970, 00:00:00 UTC 이후 경과한 시간 //ms 단위

// 2015년 2월 5일부터 오늘은 며칠 째인가? // 월은 1 차이가 있다.
var startDate = new Date(2015, 1, 5);
var nowDate =  new Date();

var 시간차 = nowDate.getTime() - startDate.getTime();
console.log(시간차); //올림
var 며칠째 = Math.ceil(시간차/1000/60/60/24);
console.log(며칠째); //올림

// ----------첫 번째 인수에 주어진 날짜로부터 두 번째 인수에 주어진 날짜가
// 며칠째인지 숫자로 반환하는 함수------------------------------------

function diffDate(startDate, endDate) {
    var startD = new Date(startDate[0], startDate[1]-1, startDate[2]);
    var endD = new Date(endDate[0], endDate[1]-1, endDate[2], 1);    
    // 올림할 값을 만들기 위해 1시간 추가
    console.log(startD);
    console.log(endD);
    
    var diff = endD.getTime() - startD.getTime();
    var diff = endD - startD;
    return Math.ceil(diff/1000/60/60/24);
}
// 2014년 3월 2일로부터 며칠째가 2015년 4월 6일인가?
console.log(diffDate([2014, 3, 2], [2015, 4, 6]) + '일째입니다.');

function setTimeText(date) {
    document.getElementById('timer').innerHTML = date;
}

// 문제: 1초마다 한 번씩 현재 시각을 표시하는 함수 clock()을 작성하라.
function clock() {
    var nowDate = new Date;
    setTimeText(nowDate);
//    setTimeout(clock, 1000);  
    setTimeout(arguments.callee, 1000);    
}
window.onload = function(){ clock(); };

// 이 코드는
Date.now();
// 다음 코드와 같다.
var date = new Date(0);
console.log(date);
var now = Date.now();
console.log(now);

//console.log(date.getDay());
// 문제: 날짜를 입력하면 요일을 "한국어"로 변환하는 함수 요일()을 작성하라.
// 힌트: 배열 또는 문자열 자르기

//배열
//var days = ['일', '월', '화', '수', '목', '금', '토'];
//문자열 자르기
var days = '일월화수목금토';

function 요일(inputY, inputM, inputD) {
    var day = new Date(inputY, inputM - 1 , inputD);
    var index = day.getDay();
    
//    return days[index];
    return days.substr(index, 1);
}

var 무슨요일 = 요일(2015, 3, 13);
console.log('2015년 3월 13일은 ' + 무슨요일 + '요일입니다.');

// 수학 관련 계산 객체
Math

var rand = Math.random();
//(rand * (MAX-MIN)) + MIN; // 공식
console.log(rand);
//0 ~ 1 이 값을
//0 ~ 10 으로 바꾸려면?
//5 ~ 15 으로 바꾸려면?
//2 ~ 23 으로 바꾸려면?  

// 문제: 주어진 범위의 랜덤한 "정수"를 반환하는 getRandom() 함수를 작성하라.
function getRandom(min, max) { 
    // 렘덤을 가지고와서
    var rand = Math.random(); 
    // 원하는 범위로 바꾸고
    rand = (rand * (max - min)) + min;  
    //정수로
    return Math.round(rand);
}
var 무작위수 = getRandom(1, 6);
console.log(무작위수); 

var s = Math.pow(2, 3); 
console.log( s ); 
var s = Math.pow(16, 2); 
console.log( s ); 

// 산술 연산자
// 사칙연산 + 나머지 : + = * / %
// ++
var num = 10;

//var num2 = num++;
//// 이 코드는 다음과 같다.
//var num2 = num;
//num = num + 1;

//num++;
//console.log(num);
//++num;
//console.log(num);

console.log(num++); 
// 이 코드는 다음과 같다.
console.log(num);
num = num + 1 ;

console.log(++num);
//이 코드는 다음과 같다.
num = num + 1 ;
console.log(num);

//할당 연산자
// = 
//var num = 1 + 5;
var num = 1;
num = num + 5; // 같다.

































