function test1(cb) {
    setTimeout(function() {
        console.log('test1');
        cb();   
    }, 4000);
}
function test2(cb) {
    setTimeout(function() {
        console.log('test2');
        cb();
    }, 1000);
}
function test3(cb) {
    setTimeout(function() {
        console.log('test3');
        cb();
    }, 2000);
}
function test4(cb) {
    setTimeout(function() {
        console.log('test4');
        cb();
    }, 1000);
}       

test1(() => {
    test2(() => {
        test3(() => {
            test4(() => {
                console.log('All tests completed');
            });
        });
    });
}   
);
//test1(test2(test3(test4())));


