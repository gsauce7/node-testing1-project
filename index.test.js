const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  // test.todo('[2] returns a copy, leaving the original object intact')
  test("[2] returns a copy, leaving the original object intact", () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const actual = utils.trimProperties(input)
    expect(actual).not.toBe(input)
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  // test.todo('[3] returns an object with the properties trimmed')
  // test.todo('[4] the object returned is the exact same one we passed in')
  test("[3] returns an object with the properties trimmed", () => {
    const input = { jimmy: '   jimmy ', john: ' john ', lastName: ' Henton' }
    const expected = { jimmy: 'jimmy', john: 'john', lastName: 'Henton' }
    const actual = utils.trimPropertiesMutation(input)
    expect(actual).toEqual(expected)
  })
  test("[4] the object returned is the exact same one we passed in", () => {
    const input = { foo: '  foo      ', bar: ' bar ', baz: ' baz' }
    const actual = utils.trimPropertiesMutation(input)
    expect(actual).toBe(input)
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  // test.todo('[5] returns the largest number in an array of objects { integer: 2 }')
  test("[5] returns the largest number in an array of objects { integer: 2 }", () => {
    const initial = [{ integer: 1 }, { integer: 3 }, { integer: 2 }]
    const expected = 3
    const actual = utils.findLargestInteger(initial)
    expect(actual).toEqual(expected)
  })
})

describe('[Exercise 4] Counter', () => {
  // let counter
  // beforeEach(() => {
  //   counter = new utils.Counter(3) // each test must start with a fresh counter
  // })
  // test.todo('[6] the FIRST CALL of counter.countDown returns the initial count')
  // test.todo('[7] the SECOND CALL of counter.countDown returns the initial count minus one')
  // test.todo('[8] the count eventually reaches zero but does not go below zero')
  const startCount = 3
  let counter
  beforeEach(() => {
    counter = new utils.Counter(startCount)
  })
  test("[6] the FIRST CALL of counter.countDown returns the initial count", () => {
    const actual = counter.countDown()
    expect(actual).toEqual(startCount)
  })
  test("7] the SECOND CALL of counter.countDown returns the initial count minus one", () => {
    counter.countDown()
    const actual = counter.countDown()
    expect(actual).toEqual(startCount - 1)
  })
  test("[8] the count eventually reaches zero but does not go below zero", () => {
    for (let i = 0; i < 5; i++) {
      counter.countDown()
    }
    const actual = counter.countDown()
    expect(actual).toEqual(0)
  })

})

describe('[Exercise 5] Seasons', () => {
  // let seasons
  // beforeEach(() => {
  //   seasons = new utils.Seasons() // each test must start with fresh seasons
  // })
  // test.todo('[9] the FIRST call of seasons.next returns "summer"')
  // test.todo('[10] the SECOND call of seasons.next returns "fall"')
  // test.todo('[11] the THIRD call of seasons.next returns "winter"')
  // test.todo('[12] the FOURTH call of seasons.next returns "spring"')
  // test.todo('[13] the FIFTH call of seasons.next returns again "summer"')
  // test.todo('[14] the 40th call of seasons.next returns "spring"')
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons()
  })
  test("[9] the FIRST call of seasons.next returns \'summer\'", () => {
    const season = seasons.next()
    expect(season).toEqual("summer")
  })
  test("[10] the SECOND call of seasons.next returns \'fall\'", () => {
    seasons.next()
    const season = seasons.next()
    expect(season).toEqual("fall")
  })
  test("[11] the THIRD call of seasons.next returns \'winter\'", () => {
    for (let i = 0; i < 2; i++) {
      seasons.next()
    }
    const season = seasons.next()
    expect(season).toEqual("winter")
  })
  test("[12] the FOURTH call of seasons.next returns \'spring\'", () => {
    for (let i = 0; i < 3; i++) {
      seasons.next()
    }
    const season = seasons.next()
    expect(season).toEqual("spring")
  })
  test("[13] the FIFTH call of seasons.next returns again \'summer\'", () => {
    for (let i = 0; i < 4; i++) {
      seasons.next()
    }
    const season = seasons.next()
    expect(season).toEqual("summer")
  })
  test("[14] the 40th call of seasons.next returns \'spring\'", () => {
    for (let i = 0; i < 39; i++) {
      seasons.next()
    }
    const season = seasons.next()
    expect(season).toEqual("spring")
  })
})

describe('[Exercise 6] Car', () => {
  //   let focus
  //   beforeEach(() => {
  //     focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  //   })
  //   test.todo('[15] driving the car returns the updated odometer')
  //   test.todo('[16] driving the car uses gas')
  //   test.todo('[17] refueling allows to keep driving')
  //   test.todo('[18] adding fuel to a full tank has no effect')
  // })

  // describe('[Exercise 7] isEvenNumberAsync', () => {
  //   test.todo('[19] resolves true if passed an even number')
  //   test.todo('[20] resolves false if passed an odd number')
  //   test.todo('[21] rejects an error with the message "number must be a number" if passed a non-number type')
  //   test.todo('[22] rejects an error with the message "number must be a number" if passed NaN')
  let modelThree
  beforeEach(() => {
    prius = new utils.Car('prius', 20, 30)
  })
  test("[15] driving the car returns the updated odometer", () => {
    const startingOdometer = prius.odometer
    const updated = prius.drive(100)
    expect(updated).toBeGreaterThan(startingOdometer)
    expect(updated).toEqual(100)
  })
  test("[16] driving the car uses gas", () => {
    const initialFuel = prius.fuel
    prius.drive(100)
    const updated = prius.fuel
    expect(updated).toBeLessThan(initialFuel)
    expect(updated).toEqual(prius.tank - (100 / prius.mpg))
  })
  test("[17] refueling allows to keep driving", () => {
    prius.drive(600)
    const startingOdometer = prius.odometer
    prius.drive(600)
    const secondOdometer = prius.odometer
    prius.refuel(100)
    prius.drive(600)
    const finalOdometer = prius.odometer
    expect(startingOdometer).toEqual(secondOdometer)
    expect(finalOdometer).toBeGreaterThan(startingOdometer)
  })
  test("[18] adding fuel to a full tank has no effect", () => {
    const initialFuel = prius.fuel
    prius.refuel(100)
    const updated = prius.fuel
    expect(updated).toEqual(initialFuel)
    expect(updated).toEqual(prius.tank)
  })

})
