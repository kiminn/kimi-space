function solution(food) {
    let player1 = [];
    let player2 = [];
    let array = [];
    for (i = 1; i < food.length; i++) {
        if (food[i] >= 2) {
            let num = Math.floor(food[i] / 2);
            player1.push(...Array(num).fill(i)); // 문자열을 num번 반복해서 추가
            player1.sort((a, b) => a - b);
            player2 = [...player1].reverse();
            array = player1.concat(0).concat(player2).join('');
        }
    }
    return array;
}

/*
return 대회를 위한 음식의 배치를 나타내는 문자열

왼쪽 -> 물 <- 오른쪽
물을 먼저 먹는 선수가 우승

두 선수가 먹는 음식의 종류와 양, 순서 같아야함
칼로리가 낮은 음식부터 배치
1번: 3 (한 개 사용못함)
2번: 4
3번: 6
[1,3,4,6]
1223330333221

[1,7,1,2] 
111303111

food[0] = 물의 양, 항상1
길이 3이상인 경우만 입력으로 주어짐

food[i]/2 (몫)
*/

// 다른 사람 풀이


function solution(food) {
    let res = '';
    for (let i = 1; i < food.length; i++) {
        res += String(i).repeat(Math.floor(food[i]/2));
    }

    return res + '0' + [...res].reverse().join('');
}