function solution(arr, k) {
    let array = [];

    for (i = 0; i < arr.length; i++)
        //array에 arr[i]값이 없을때만 push
        if (!array.includes(arr[i]) && array.length < k) {
            array.push(arr[i]);
        }

    // array의 길이가 k보다 작으면 나머지 값을 -1로 채우기
    while (array.length < k) {
        array.push(-1);
    }
    return array;
}

/*
return k개수의 배열, 배열의길이 k보다 작을시 -1로채워서 리턴

랜덤으로 서로 다른 k개의 수를 저장한 배열
k = 3 [number, number, number]
k = 4 [numebr, number, number, number]

무작위 수는 arr에 저장된 순서대로 주어질 예정
 -1 fill(-1)??
 
 .sort()중복 허용 X
*/

// 괜찮은 코드

function solution(arr, k) {
    const set = new Set(arr);
    return set.size < k ? [...set, ...Array(k - set.size).fill(-1)] : [...set].slice(0, k);
}

//2

const solution = (arr, k) => {
    const set = new Set(arr);
    const result = [...set].slice(0, k);
    while (result.length !== k) {
        result.push(-1);
    }
    return result;
};
