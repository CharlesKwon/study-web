function 요일이름(y, m, d) {
	var date = new Date(y, m-1, d);
	var day = date.getDay();

	if (day === 1) {
		return '월';
	} else if (day === 2) {
		return '화';
	} else if (day === 3) {
		return '수';
	} else if (day === 4) {
		return '목';
	} else if (day === 5) {
		return '금';
	} else if (day === 6 || day === 0) {
		return '주말';
	} else {
		return '모름';
	}
}

// 문제: 생일을 입력하면 만 나이를 구하는 age() 함수를 작성하라.
// 사용예: age(1976, 3, 22)
function age(y, m, d) {
    var today = new Date();
    
    //만 나이는 현재 년도 - 태어난 년도
    var todayYear = today.getFullYear();
    var resultYear = todayYear - y; 
    
    today.setFullYear(todayYear); 
    // 단, 생일이 지나지 않았으면 나이에서 1을 빼야 한다.
    if(today.getMonth() + 1 < m) {
        resultYear -= 1;
    } 
    else if ((today.getMonth() + 1) === m && (today.getDate() < d)) { 
        // 달은 같은데 태어난 일이 달보다 크면 아직 지나지 않았음.
        resultYear -= 1;
    }
    return resultYear;
}
console.log(age(1982, 3, 27));
console.log(age(1982, 3, 28));
console.log(age(1982, 3, 29));

// 문제: 생일을 입력하면 만 나이에 따라 '어린이', '청소년', '청년', '장년이상'으로
// 반환하는 함수 연령대()를 작성하라.
// 사용예: 연령대(1976, 3, 22) // 1976년 3월 22일인 사람의 연령대는?
// 조건: 10살 미만은 어린이, 10~18살 청소년, 19~40살 청년, 41살~ 장년이상

function 연령대(y, m, d) {
    var resultYear = age(y, m, d);
    
    if (resultYear < 10) {
        return '어린이';
    }
    else if (resultYear >= 10 && resultYear <=18) {
        return '청소년';
    }
    else if (resultYear >= 19 && resultYear <=40) {
        return '청년';
    }
    else if (resultYear >= 41) {
        return '장년이상';
    }
    else {
    }
}
console.log(연령대(1970, 3, 28));
console.log(연령대(1980, 3, 28));
console.log(연령대(2000, 3, 28));
console.log(연령대(2010, 3, 28));
















