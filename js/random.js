const loadLover = () =>{
    fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(data => displayUser(data.results))
}

const displayUser = users => {
    const userContainer = document.getElementById('user-container');
    for(const user of users) {
        console.log(user)
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerHTML = `
            <img class = "img" src='${user.picture.medium}' >;
            <h3>User Name:${user.name.title} ${user.name.first} ${user.name.last}</h3>
            <p>Email:${user.email}</p>
            <p>Contact No: ${user.phone}</p>
            <p>Registered: ${user.registered.date} ${user.registered.age} </p>
            <p>User Location: ${user.location.city} ${user.location.country}</p>
           

        `;
        userContainer.appendChild(userDiv)
    }

} 

loadLover()