function f1() {
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
        console.log('Heyyy....');
        resolve();
    },4000)
    })
}
function f2() {
        return new Promise((resolve,reject) => {
        setTimeout(()=>{
        console.log('Virat.........');
        resolve();
    },2000)
    })

}
f1().then(f2)
     .catch((err) => {
        console.log("error",err);
     })