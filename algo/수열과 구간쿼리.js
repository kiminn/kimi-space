function solution(arr, queries) {
    for (let k = 0; k < queries.length; k++) {
        const query = queries[k];
        const i = query[0];
        const j = query[1];

        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    return arr;
}

/*
return queries 처리 이후 arr

ar[i] <-> arr[j] 값 change
quries [i, j]

2차원 배열
queries[0,0] = [0,3]
queries[0,1] = [1,2]
*/

// 다른사람 코드 1

function solution(arr, queries) {
    queries.forEach(([a, b]) => {
        [arr[a], arr[b]] = [arr[b], arr[a]];
    });
    return arr;
}
// 다른사람 코드 2
function solution(arr, queries) {
    for (let [i, j] of queries) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
