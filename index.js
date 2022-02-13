let number=20;
for(let i=1;i<=number;i++){
    var count=0;
    for(let j=1;j<=number;j++){
        if(i%j==0){
           count=count+1
        }
    }

if(count>2){
    console.log(i,":","number is not Prime")
}
else{
    console.log(i,":","number is prime")
}
}