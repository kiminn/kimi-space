function solution(arr) {
    let result = [];
    const minValue = Math.min(...arr);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== minValue) {
            result.push(arr[i]);
        } else if (arr.length === 1) {
            result.push(-1);
        }
    }
    return result;
}
/*
return 가장 작은 수를 제거한 배열을 리턴
Math.min()
for...in은 "순서없이" 반복된므로 배열에서는 사용 X
객체의 반복에 사용할 것
*/

// 좋은 답

function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)), 1);
    if (arr.length < 1) return [-1];
    return arr;
}
