// Add your code here
/*const userData = {
    userName: "James",
    userEmail: "omendajames0317@gmail.com",
  };*/

/*const inputForm = document.querySelector('form');
inputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const user_name = document.querySelector('#user_name').value;
    const user_email = document.querySelector('#user_eail').value;
    submitData(user_name, user_email);

})*/
const userData = {
    name: "Steve",
    email: "steve@steve.com",
};

const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    body: JSON.stringify(userData),
};

function submitData(name, email) {
    return fetch('http://localhost:3000/users', configurationObject)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        let details = document.createElement('p')
        details.textContent = `${data.id}`
        document.querySelector('body').appendChild(details)
       
    })
    .catch(function (error){
        console.log(error.message)
        let message = document.createElement('p')
        message.textContent = `"Unauthorized Access"`
        document.querySelector('body').appendChild(message)
    })
};
submitData();