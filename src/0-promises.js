const ride = new Promise((resolve, reject) => {

  const arrived = true

  if (arrived) {
    resolve('Ride is ready 🚗')
  } else {
    reject('Driver bailed 😭')
  }
})


ride.then(value => {
  console.log(value)
})
.catch(error => {
  console.log(error)
})