/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    let val1 , val2;
    return new Promise(res=>{
        promise1.then(res1=>{
            val1 = res1;
            return promise2;
        })
        .then(res2=>{
            val2 = res2;
            res(val1 + val2);
        })
    })
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */