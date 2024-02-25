function solution(arr) {
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            answer.push(arr[i]);
        }
    }
    return answer;
}

/*
return 연속적으로 나타나는 숫자 제거, 순서 유지
sort() 사용 X
맨마지막 숫자를어떻게 처리할 것인가? 1,3,0
*/

//좋은 풀이

function solution(arr) {
    return arr.filter((val, index) => val != arr[index + 1]);
}
