var  throttleFunction  =  function (func, delay) {
	// If setTimeout is already scheduled, no need to do anything
	if (timerId) {
		return
	}

	// Schedule a setTimeout after delay seconds
	timerId  =  setTimeout(function () {
		func()
		
		// Once setTimeout function execution is finished, timerId = undefined so that in <br>
		// the next scroll event function execution can be scheduled by the setTimeout
		timerId  =  undefined;
	}, delay)
}


const myThrottlingFunction = (callback, limit) => {
    let flag = true;
    return function() {
        let context = this;
        let args = arguments;
        if(flag) {
            callback.apply(context, args);
            flag = false;
        }
        setTimeout(() => flag = true, limit);
    }
}


const mydebounceFunction = (callback, delay) => {
    let timer;
    return function () {
        let context = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(
            () => callback.apply(context, args), delay
        )
    }
}

const getData = () => {console.log("getting data")};

const newGetDataFunc = mydebounceFunction(getData, 1000);