array = ['this','is','an', 'example','of','my','array']

var interval = 1000;
var promise = Promise.resolve();

array.forEach(function (element, index, array) {
    promise = promise.then(function () {
        console.log(element);

        return new Promise(function (resolve) {
            setTimeout(resolve, interval);
        });
    });
});

promise.finally(function () {
    console.log("finished");
});
