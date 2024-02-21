//잘몰라서 검색 후 참고함

function solution(keyinput, board) {
    let location = [0,0]
    // for(let i =0; i<keyinput.length; i++)
    for(let k of keyinput) {
        switch(k) {
            case 'up' : if(location[1] < board[1]/2 - 1) location[1]++; break;
            case 'down' : if(-location[1] < board[1]/2 - 1) location[1]--; break;
            case 'left' : if(-location[0] < board[0]/2 - 1) location[0]--; break;
            case 'right' : if(location[0] < board[0]/2 - 1) location[0]++; break;
        }
    }
      return location;
}

/*
up = [0, 1]
down = [0, -1]
left = [-1, 0]
right = [1, 0]

방향키 배열: keyinput, 맵의 크기: board

캐릭터 항상 [0,0]에서 시작 - 정중앙에 위치
board 가로크기 9라면 왼쪽 -4, 0 / 오른쪽 4, 0 (max)

*/