function solution(q, r, code) {
    return [...code].filter((_, idx) => idx % q === r).join("")
}


/*
function solution(q, r, code) {
    let answer = [...code].reduce((acc, cur, idx) => {
        return idx % q === r ? acc + cur : acc
    }, "")
    return answer
}
*/

/*
return: code의 각 인덱스 q로 나눴을 때 나머지가 r.. slice()
앞에서 부터 순서대로 이어 붙인 문자열 return



*/