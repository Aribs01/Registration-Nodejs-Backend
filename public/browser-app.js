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


form1DOM.addEventListener('submit', async (e) => {
  e.preventDefault()
  
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
