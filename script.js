

const promise = new Promise((resolve, reject) => {
    const isSuccess = Math.random() > 0.5;
  setTimeout(() => {
    if (isSuccess) {
      resolve("Success! Value passed to resolve function");
    } else {
      reject("Error! Error passed to reject function");
    }
  }, 1000);
});

promise
  .then(value => {
    console.log(value);
  })
  .catch(error => {
    console.log(error);
  });