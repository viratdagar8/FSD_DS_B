function sum(a,b){
    return a+b;
}

function sumwithmsg(clbck,msg){
    const result=clbck(20,30);
    const fresult=msg+"your score is "+result;
    console.log(fresult);

}
sumwithmsg(sum,"hey Deepak");