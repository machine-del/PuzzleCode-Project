function stepOne() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Step One completed');
    }, 2000);
  });
}

function stepTwo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Step Two completed');
    }, 1500);
  });
}

function stepThree() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Step Three completed');
    }, 3000);
  });
}

function AsyncRun() {
  stepOne()
    .then((res) => {
      console.log(res);
      return stepTwo();
    })
    .then((res) => {
      console.log(res);
      return stepThree();
    })
    .then((res) => {
      console.log(res);
    });
}

AsyncRun();