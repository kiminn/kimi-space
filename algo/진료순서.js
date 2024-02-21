function solution(emergency) {
    const priority = [...emergency].sort((a,b) => b - a)  //reverse() 
    //	[ 76, 24, 3 ] -> [0, 1, 2]
    return emergency.map((el) => priority.indexOf(el) + 1)
}

/*
return 숫자 높을 수록 우선순위 높음
sort((a,b) => b - a)


*/