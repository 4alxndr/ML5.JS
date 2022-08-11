const form = document.querySelector('form')

form.addEventListener('submit', event => {
       
        event.preventDefault()

        const title = form.title.value
        const text = form.text.value
        const description = form. description.value

        saveForm(title, text, description)
})

//spread

// function saveForm(data) {
        
//         const formData = {
//                 date:    new Date().toLocaleDateString(),
//                 ...data
//         }

//         console.log('Form data:', formData)

// }

//rest

function saveForm(...args) {
        
const [title, text, description]= args

        const formData = {
                date:    new Date().toLocaleDateString(),
                title, text, description               
        }

        console.log('Form data:', formData)

}