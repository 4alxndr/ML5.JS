const createCar = (name, model) => ({name, model})

const ford = createCar('Ford', 'Focus')

console.log(ford)

const yearField = 'year'

const bmw = {
        name: 'BMW',
        ['model']: 'X6 Sport',
        [yearField]: 2022,

        logFiealds () {
                const {name, year, model} = this
                console.log(name, model, year)
        }
}

console.log(bmw)
bmw.logFiealds()

// const year = bmw.year
const {year} = bmw
console.log(year)