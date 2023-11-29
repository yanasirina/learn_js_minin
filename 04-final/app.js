const usersPath = 'https://jsonplaceholder.typicode.com/users'
const usersDiv = document.querySelector('#list')
const filterInput = document.querySelector('#filter')
let allUsers = []


filterInput.addEventListener('input', (event) => 
    {   
        const value = event.target.value.toLowerCase()
        const filteredUsers = allUsers.filter((user) => user.name.toLowerCase().includes(value))
        renderUsers(filteredUsers)
    }
)

async function startApp() {
    usersDiv.innerHTML = 'loading...'
    try {
        const resp = await fetch(usersPath, {method: 'GET'})  // Get используется по умолчанию
        const data = await resp.json()
        allUsers = data
        setTimeout(() => renderUsers(data), 2000)
    } catch (error) {
        usersDiv.style.color = 'red'
        usersDiv.innerHTML = 'failed'
    }
}

function renderUsers(users) {
    if (users.length === 0) {
        usersDiv.innerHTML = 'no users'
        return
    }
    const html = users.map(userToHTML).join('')
    usersDiv.innerHTML = html
}

function userToHTML(user) {
    return `
        <li class="list-group-item">${user.name}</li>
    `
}

users = startApp()