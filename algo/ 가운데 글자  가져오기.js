function solution(s) {
    const arr = [...s]
    const middleIdx = Math.floor(s.length/2)
    if (s.length % 2 === 1) {
        return arr[middleIdx]
    } else {
        return arr[middleIdx-1] + arr[middleIdx]
    }
}


/*
return 가운데 글자 반환 짝수라면 가운데 둘 홀수라면 가운데
Math.floor = 내림
5/2 = 2 
7/2 = 3
4/2 = 2
8/2 = 4
*/

//좋은 풀이

function solution(s) {
    return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}

// 짝수면 내림한지점부터 두 개 자르고 홀수면 해당 한 개 인덱스 잘라서 반환