//  старый способ условия
// const createPost = (title, text, date) => {
//     date = date || new Date().toLocaleDateString()
//     return  {
//         title: title,
//         text: text,
//         date: date
//     }
// }

// const post = createPost('Скоро новый год!', 'Скоро будет 2023!')
// console.log(post)

const createPost = (title, text = 'Default text', date = new Date().toLocaleDateString()) => {    
        return  {title, text, date}
     }
    
     const post = createPost('Скоро новый год!')
     console.log(post)