function solution(ineq, eq, n, m) {
    let result = 0;

    if (ineq === '<' && eq === '=' && n <= m) {
        return 1;
    } else if (ineq === '>' && eq === '=' && n >= m) {
        return 1;
    } else if (ineq === '<' && eq === '!' && n < m) {
        return 1;
    } else if (ineq === '>' && eq === '!' && n > m) {
        return 1;
    }
    return result;
}

/*
두 정수 n과 m이 주어질 때,
return ineq와 eq의 조건에 맞으면 1 아니면 0

두 문자열 ineq와 eq가 주어짐
ineq 는 "<" or ">"
eq 는 "=" or "!"

!가 들어가니 오류가난다
*/


//다른 사람 풀이

const operations = {
  '>=': (n, m) => n >= m,
  '<=': (n, m) => n <= m,
  '>!': (n, m) => n > m,
  '<!': (n, m) => n < m,
};

function solution(ineq, eq, n, m) {
  const op = operations[ineq + eq];
  return Number(op(n, m));
}

//operations 객체의 key값에 해당하는 value가 매개변수 2개(n,m) 받는 함수 그 자체

//    console.log(op(n,m)) //true false