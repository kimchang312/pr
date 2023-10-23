
let x=[];
let y=[];

function solution(numlist, n) {
    var answer = [];
    for(let i=0;i<2;i++){
 answer=  numlist.sort(function(a,b){ 
     if(Math.abs(a-n)-Math.abs(b-n)==0){
      
        return a>b?-1:1;
     }
     if(Math.abs(a-n)>Math.abs(b-n)){
       
    return 1;
    }
     if(Math.abs(a-n)<Math.abs(b-n)){
       
        return -1;
    }});
}
    return answer;
}
console.log(solution([1, 2, 3, 4, 5, 6],4));
// .map((num,index)=>[num,index])