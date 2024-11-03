class MyPromise {
    constructor(executor) {
      this.state = 'pending'; // 'pending', 'fulfilled', 'rejected'
      this.value = undefined; // store resolved or rejected value
      this.handlers = []; // store then callbacks
      this.catchers = []; // store catch callbacks
      this.startTime = Date.now(); // Record the time when the promise is created
  
      // Resolves the promise
      const resolve = (value) => {
        if (this.state !== 'pending') return; // Can only resolve if pending
  
        this.state = 'fulfilled';
        this.value = value;
  
        const elapsedTime = Date.now() - this.startTime; // Calculate time taken
        console.log(`Promise resolved in ${elapsedTime} ms`);
  
        this.handlers.forEach((callback) => callback(value, elapsedTime)); // Pass the elapsed time to then callbacks
      };
  
      // Rejects the promise
      const reject = (reason) => {
        if (this.state !== 'pending') return; // Can only reject if pending
  
        this.state = 'rejected';
        this.value = reason;
  
        const elapsedTime = Date.now() - this.startTime; // Calculate time taken
        console.log(`Promise rejected in ${elapsedTime} ms`);
  
        this.catchers.forEach((callback) => callback(reason, elapsedTime)); // Pass the elapsed time to catch callbacks
      };
  
      try {
        executor(resolve, reject); // Execute the function passed to the promise
      } catch (err) {
        reject(err); // If any error occurs, reject the promise
      }
    }
  
    // Method for adding .then behavior
    then(callback) {
      if (this.state === 'fulfilled') {
        const elapsedTime = Date.now() - this.startTime;
        callback(this.value, elapsedTime); // Pass the resolved value and elapsed time
      } else if (this.state === 'pending') {
        this.handlers.push(callback); // Store the callback if pending
      }
  
      return this;
    }
  
    // Method for adding .catch behavior
    catch(callback) {
      if (this.state === 'rejected') {
        const elapsedTime = Date.now() - this.startTime;
        callback(this.value, elapsedTime); // Pass the rejected value and elapsed time
      } else if (this.state === 'pending') {
        this.catchers.push(callback); // Store the callback if pending
      }
      
      return this;
    }
  }
  
  // Simulating an API call that takes a dynamic time to resolve
  const apiSimulation = (time) => {
    return new MyPromise((resolve, reject) => {
      setTimeout(() => {
        if (time < 1500) {
          resolve(`Success after ${time} ms`);
        } else {
          reject(`Failed after ${time} ms`);
        }
      }, time);
    });
  };
  
  // Example usage: simulate an API call that takes 2000ms
  apiSimulation(1000)
    .then((value, time) => {
      console.log(`API call resolved: ${value}, Time: ${time} ms`);
    })
    .catch((error, time) => {
      console.error(`API call rejected: ${error}, Time: ${time} ms`);
    });

    