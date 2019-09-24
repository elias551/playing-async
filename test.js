const part1 = () => {
  const val = {
    a: 1
  }

  console.log(val)

  val.a = 2

  console.log(val)

  setTimeout(() => {
    val.a = 3
    console.log(val)
  })

  console.log(val)
}
const part2 = () => {
  const randoValue = {
    a: 1
  }

  const multiply = () => {
    randoValue.a *= 2
    console.log(randoValue)
  }

  const add = () => {
    randoValue.a += 5
    console.log(randoValue)
  }

  const rand1 = Math.random() * 3 * 1000
  const rand2 = Math.random() * 3 * 1000

  console.log({ rand1, rand2 })
  setTimeout(add, rand1)
  setTimeout(multiply, rand2)
}

const part3 = () => {
  const checkValue = value =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (value % 2 === 0) {
          resolve(value)
        } else {
          reject("value is invalid: " + value)
        }
      }, 500)
    })

  const runValue = value => {
    checkValue(value)
      .then(v => console.log("value is valid: " + v))
      .catch(v => console.error(v))
  }
  console.log("starting...")
  runValue(10)
  runValue(5)
  console.log("started")
}

const part4a = () => {
  const wait = timeout => new Promise(resolve => setTimeout(resolve, timeout))

  const add2 = value => wait(500).then(() => value + 2)
  const multiply3 = value => wait(500).then(() => value * 3)

  const initialValue = 4

  add2(initialValue)
    .then(value => multiply3(value))
    .then(value => console.log("result: " + value))
}

const part4b = () => {
  const wait = timeout => new Promise(resolve => setTimeout(resolve, timeout))

  const add2 = value => wait(500).then(() => value + 2)
  const multiply3 = value => wait(500).then(() => value * 3)

  const initialValue = 4

  add2(initialValue)
    .then(multiply3)
    .then(value => console.log("result: " + value))
}

const part5 = async () => {
  const wait = timeout => new Promise(resolve => setTimeout(resolve, timeout))

  const add2 = async value => {
    await wait(500)
    return value + 2
  }
  const multiply3 = async value => {
    await wait(500)
    return value * 3
  }

  let value = 5

  try {
    value = await add2(value)
    value = await multiply3(value)
    if (value % 2 === 0) {
      throw new Error("Invalid value")
    }
    console.log("result: " + value)
  } catch {
    console.log("value is invalid: " + value)
  }
}

const part6 = () => {
  function* fibonacci(n, current = 0, next = 1) {
    if (n === 0) {
      return current
    }
    yield current
    yield* fibonacci(n - 1, next, current + next)
  }

  const fibo = fibonacci(50000)
}
part5()
