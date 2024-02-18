function solution(my_string) {
    let strLen = my_string.length;
    const suffixes = [...my_string].reduce((acc, cur, idx) => {
        const suffix = my_string.slice(idx, strLen);
        acc.push(suffix);
        return acc;
    }, []).sort();
    return suffixes
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
