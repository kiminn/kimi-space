function solution(number) {
    let answer = 0;
    for (i = 0; i < number.length; i++) {
        for (j = i + 1; j < number.length; j++) {
            for (k = j + 1; k < number.length; k++) {
                if (number[i] + number[j] + number[k] === 0) answer++;
            }
        }
    }

    return answer;
}

/*
return 삼총사를 만들 수 있는 방법의 수

3명의 정수번호 더했을 때 0이되면 삼총사

0 1 2
0 1 3
0 1 4
0 2 3
0 2 4
.
.
.

*/
