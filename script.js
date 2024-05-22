const btns = document.querySelectorAll('.btn'),
forms = document.forms;
console.log(forms[0]);
btns[0].addEventListener('click',(e) => {
    e.preventDefault()
    const newUser = {
        'login': forms[0].login.value,
        'Pass': forms[0].pass.value
    }
    console.log(newUser);
    fetch('https://artdata-d7a5a-default-rtdb.firebaseio.com/users.json',{
        method:"POST",
        body:JSON.stringify(newUser),
        headers:{
            "Content-type": "aplication/json",
        }
    })
})
btns[1].addEventListener('click',async() => {

    async function getData () {
        return fetch('https://artdata-d7a5a-default-rtdb.firebaseio.com//users.json')
        .then(response =>response.json())
        .then (data => Object.values(data))
        // .then(data =>console.log(data));
    }
    let info = await getData()
    console.log(info);
})

// async function getData () {
//     fetch('https://artdata-d7a5a-default-rtdb.firebaseio.com//users.json')
//     .then(response =>response.json())
//     .then (data => Object.values(data))
//     .then(data =>console.log(data));
// }
// let info = await getData()
// console.log(info)
// console.log("info -posle")