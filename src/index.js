import {getUsers, deleteUser} from './api/userAPI'

getUsers().then(results => {
    let usersBody = ""

    results.forEach(users => {
        usersBody += `<tr>
        <td><a href="#" data-id="${users.id}" class="deleteUser">Delete</td>
        <td>${users.id}</td>
        <td>${users.firstName}</td>
        <td>${users.lastName}</td>
        <td>${users.email}</td>
        </tr>
        `
    })

    global.document.getElementById('users').innerHTML= usersBody

    const deleteLinks = global.document.getElementsByClassName('deleteUser');

    Array.from(deleteLinks, link => {
        link.onclick = function(event){
            const element = event.target;
            event.preventDefault()
            deleteUser(element.attributes["data-id"].value)
            const row = element.parentNode.parentNode
            row.parentNode.removeChild(row)
        }
    })
})


// import './index.css';
// import numeral from 'numeral';

// const courseValue = numeral(1000).format('$0, 0.00')
// // eslint-disable-next-line no-console
// console.log(`I would pay ${courseValue} for this awesome course`)