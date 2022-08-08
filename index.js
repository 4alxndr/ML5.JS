// function getAge(year) {
//     const current = new Date().getFullYear()
//     return current - year
// }



// const calculateAge = (year) => {
//     const current = new Date().getFullYear()
//     return current - year
// }

// const getAge = year => {
//     const current = new Date().getFullYear()
//     return current - year
// }

// const getAge = year => new Date().getFullYear() - year

// const logAge = year => console.log(new Date().getFullYear() - year)

// logAge(1951)

// console.log(getAge(1987))

    const person = {
        age: 25,
        firstName: 'Maxim',
        logNameWithTimeout() {
            window.setTimeout(() => {
                console.log(this.firstName)
            }, 1000)
        }
    }