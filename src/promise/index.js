const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Promise resolved");
    } else {
      reject("Promise rejected");
    }
  });
};

somethingWillHappen()
  .then(response => console.log(response))
  .catch(err => console.error(err));


//Same example but with an Error object
const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("Promise resolved 2");
      }, 3000)
    } else {
      const errorMsg = new Error("Error instance msg");
      reject(errorMsg);
    }
  });
};

somethingWillHappen2()
  .then(response => console.log(response))
  .catch(err => console.error(err));



//Promise.all
Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then(response => console.log("Array of results", response))  
  .catch(err => console.error(err));