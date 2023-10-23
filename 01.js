let a = "1";

function solution(polynomial) {
    var answer = '';
    let longa = "";
    let xnum = 0;
    let num = 0;
    let j = 0;
    let fnum = /[0-9]/;

    for (let i = 0; i < polynomial.length + 1; i++) {
        if (fnum.test(polynomial[i])) {
            longa = "";
            for (j = i; fnum.test(polynomial[j]); j++) {
                longa += polynomial[j];
            }
            i = j;
            
            if (polynomial[j] == "x") {
                xnum = xnum + (Number(longa));
            }
            else if (polynomial[j] == " " || typeof polynomial[j] == "undefined") {
                num = num + (Number(longa));
            }
        }
        else if (polynomial[i] == "x") {
            xnum++;
        }
    }
    if (xnum > 0 && num > 0) {
        if(xnum==1){
          return answer ="x " + "+ " + num
        }
        answer = xnum + "x " + "+ " + num
    }
    else if (xnum == 0 && num > 0) {
        answer = num;
    }

    else if (xnum > 0 && num == 0) {
        if(xnum==1){
          return  answer ="x";
        }
        answer = xnum + "x";
    }

    return String(answer);
}
console.log(solution(a));