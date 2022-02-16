const tasksDOM = document.querySelector('.tasks')
const loadingDOM = document.querySelector('.loading-text')
const formDOM = document.querySelector('.task-form')
const taskInputDOM = document.querySelector('.task-input')
const formAlertDOM = document.querySelector('.form-alert')

const usersDOM = document.querySelector('.users')
const form1DOM = document.querySelector('.user-form')

const userInputDOM = document.querySelector('.user-input')
const firstnameInputDOM = document.querySelector('.firstname-input')
const lastnameInputDOM = document.querySelector('.lastname-input')
const emailInputDOM = document.querySelector('.email-input')
const passwordInputDOM = document.querySelector('.password-input')
const termsCheckboxInputDOM = document.querySelector('.termsCheckbox-input')

const url = '/api/v1/users'

// Load tasks from /api/tasks
// const showTasks = async () => {
//   loadingDOM.style.visibility = 'visible'
//   try {
//     const {
//       data: { tasks },
//     } = await axios.get('/api/v1/tasks')
//     if (tasks.length < 1) {
//       tasksDOM.innerHTML = '<h5 class="empty-list">No tasks in your list</h5>'
//       loadingDOM.style.visibility = 'hidden'
//       return
//     }
//     const allTasks = tasks
//       .map((task) => {
//         const { completed, _id: taskID, name } = task
//         return `<div class="single-task ${completed && 'task-completed'}">
// <h5><span><i class="far fa-check-circle"></i></span>${name}</h5>
// <div class="task-links">



// const showUsers = async () => {
//   loadingDOM.style.visibility = 'visible'
//   try {
//     const {
//       data: { users },
//     } = await axios.get('/api/v1/users')
//     if (users.length < 1) {
//       usersDOM.innerHTML = '<h5 class="empty-list">No users in your list</h5>'
//       loadingDOM.style.visibility = 'hidden'
//       return
//     }
//     const allUsers = users
//       .map((user) => {
//         const { firstname, lastname, email } = users
//         return `<div class="single-user ">
// <h5><span><i class="far fa-check-circle"></i></span>${firstname}</h5>
// <div class="task-links">

// </div>
// </div>`
//       })
     
//   } catch (error) {
//     usersDOM.innerHTML =
//       '<h5 class="empty-list">There was an error, please try later....</h5>'
//   }
//   loadingDOM.style.visibility = 'hidden'
// }

// showUsers()


form1DOM.addEventListener('submit', async (e) => {
  e.preventDefault()
  // const {firstname, lastname, email, password, termsCheckbox} = userInputDOM.value
  const firstname = firstnameInputDOM.value
  const lastname = lastnameInputDOM.value
  const email = emailInputDOM.value
  const password = passwordInputDOM.value
  const termsCheckbox = termsCheckboxInputDOM.value
  

  try {
    const person = {firstname:firstname, lastname:lastname,
    email:email, password:password, termsCheckbox:termsCheckbox}

    await axios.post(url, person);
    
    // userInputDOM.value = ''
    // firstnameInputDOM.value = ''
    // lastnameInputDOM.value = ''
    // emailInputDOM.value = ''
    // passwordInputDOM.value = ''
    // termsCheckboxInputDOM.value = ''

    formAlertDOM.style.display = 'block'
    formAlertDOM.textContent = `success, task added`
    formAlertDOM.classList.add('text-success')
  } catch (error) {
    // formAlertDOM.style.display = 'block'
    formAlertDOM.innerHTML = `error, please try again`
  }
  setTimeout(() => {
    // formAlertDOM.style.display = 'none'
    // formAlertDOM.classList.remove('text-success')
  }, 3000)
})
