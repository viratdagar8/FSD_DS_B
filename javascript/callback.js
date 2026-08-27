function sum(a,b){
    return a+b;
}

function sumwithmsg(clbck,msg){
    const result=clbck(20,30);
    const fresult=msg +"your score is "+result;
    console.log(fresult);

}
sumwithmsg(sum,"hey Deepak ");

//function-2

function sub(x,y){
    return x-y;
}

function Subwithmsg(callbck,msg){
    const result=callbck(50,30);
    const Sresult=msg + "your score is " + result;
    console.log(Sresult);

}
Subwithmsg(sub,"hey Deepak ");
