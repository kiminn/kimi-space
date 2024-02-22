function solution(my_string, m, c) {
    let answer = ""
    // i = 1, 0 //i = i + m 4/1
    for(let i = c-1; i<my_string.length; i += m) {
        answer += my_string[i]
    }
    return answer
}

/*
return m-1 만큼 자른 후 c-1위치에 있는 index의 값

1. index 초기값 설정 -1
2. range: 범위 m마다

*/



// 다른사람의 풀이

/*

function solution(my_string, m, c) {
    return [...my_string].filter((_, i) => i % m === c - 1).join('');
}


// 인덱스를 m으로 나눈 나머지가 c-1이면 쪼인
*/