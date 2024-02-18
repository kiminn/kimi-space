// Node.js의 내장 모듈인 readline을 현재 파일에 가져옴 이 모듈은 터미널이나 콘솔에서 사용자 입력을 받는데에 사용됨
const readline = require('readline');
// readline의 createInterface메서드 사용자의 입출력을 관리하는 인터페이스이다
const rl = readline.createInterface({
    input: process.stdin, //입력
    output: process.stdout, //출력
});
// rl 객체에 close 이벤트 핸들러 등록: 사용자가 입력을 마치고 인터페이스를 닫을 때 실행됨
rl.on('close', function () {
    console.log('!@#$%^&*(\\\'"<>?:;')
});



/**
 * Node.js라 문제 이해가 좀 처음에 어려웠다..
 * 이 코드는 사용자로부터 입력을 받고 처리하는 프로그램의 기본적인 뼈대를 설정하는 부분이다.
 * 이해하고나니 엄청 쉬운 문제!
 */