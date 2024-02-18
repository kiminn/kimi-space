function solution(my_string) {
    let strLen = my_string.length;
    const suffixes = [...my_string]
        .reduce((acc, cur, idx) => {
            const suffix = my_string.slice(idx, strLen);
            acc.push(suffix);
            return acc;
        }, [])
        .sort();
    return suffixes;
}

/*
    result: 사전순으로 정리한 접미사 문자열 배열
    .toLowerCase(): 문자열 소문자
    .sort(): 순서대로
    .slice(startidx, endidx):자르기 
    [...my_string] === Array.from(my_string)
    
리듀서 함수는 네 개의 인자를 가집니다. .[] 초기값

누산기 (acc)
현재 값 (cur)
현재 인덱스 (idx)
원본 배열 (src)
*/

function solution(my_string) {
    return Array.from(my_string)
        .map((_, i) => my_string.substring(i))
        .sort();
}
/**
 * 눈길이 간 코드
 *
 * String.prototype.substring()
 * .substring() 에 대해서 알게되었다.
 * substring() 메소드는 string 객체의 시작 인덱스로 부터 종료 인덱스 전 까지 문자열의 부분 문자열을 반환합니다.
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/substring
 */

function solution(my_string) {
    return [...my_string].map((_, i) => my_string.substring(i)).sort();
}

// 이렇게도 풀 수 있을 거 같다.
