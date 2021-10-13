import fetch from 'node-fetch';


// setTimeout(() => {
//     console.log("wait 1 second")
//     setTimeout(() => {
//         console.log("wait 2 second")
//     }, 1000);
// }, 1000);


const randomNumGenerator = () => Math.floor(Math.random() * 2);

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const num = randomNumGenerator();
        if(num %2 == 0) {
            resolve(num);
        } else {
            reject(num);
        }
    }, 5000);
});

async function resolveMyPromise() {
    // myPromise.then((n) => {console.log('success ',n)}).catch((n) => {console.error('error ',n)});
    try {
        const data = await myPromise;
        console.log(data);
    } catch (err) {
        console.error(err);
    }
    console.log(20);
}

resolveMyPromise();




