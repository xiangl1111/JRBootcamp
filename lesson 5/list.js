function clearList() {
    let ul = document.getElementById('user_list');
    while(ul.hasChildNodes()){
        ul.removeChild(ul.lastChild);
    }
}

function getList() {
    // console.log('getList');
    const url = 'http://127.0.0.1:8080/api/users';
    
    try{
        axios.get(url).then((res)=>{
            const users = res.data.data;
            // console.log(users);
            clearList();
            users.forEach((user) => {
                const li = document.createElement('li');
                li.innerHTML = `${user.name} ${user.age}`;
                document.getElementById('user_list').appendChild(li);
            });
        })
    } catch(error){

    }
    // axios
    // .ger(url)
    // .then((res)=>{
    //     const users = res.data.data;
    //     // console.log(users);

    // })
    // .catch((err)=>{
    //     console.log(err);
    // })
}

function deleteList() {
    const url = 'http://http://127.0.0.1:8080/api/delete';
    axios.delete(url).then((res)=>{
        const msg = res.data.msg;
        clearList();
        const li = document.createElement('li');
        li.innerHTML = msg;
        document.getElementById('user_list').appendChild(li);
    })
    .catch((err)=>{
        console.log(err);
    });
}

function postUser() {
    const url = 'http://127.0.0.1:8080/api/user';
    const nameInput = document.getElementById('name');
    const nameValue = nameInput.value;
    const ageInput = document.getElementById('age');
    const ageValue = ageInput.value;
    if (!nameValue || !ageValue) return;
    
    const body = {
        name: nameValue,
        age: ageValue,
    };
    console.log(body);

    axios.post(url,body)
    .then((res)=>{
        const updatedUsers = res.data.data;
        clearList();
        updatedUsers.forEach((user)=>{
            const li = document.createElement('li');
            li.innerHTML = `${user.name} ${user.age}`;
            document.getElementById('user_list').appendChild(li);
        })
    })
    .catch((err)=>{
        console.log(err);
    })

    nameInput.value = '';
    ageInput.value = '';
}