function clearList() {
    let ul = document.getElementById('user_list');
    while(ul.hasChildNodes()){
        ul.removeChild(ul.lastChild);
    }
}

function getList() {
    // console.log('getList');
    const url = 'http://localhost:8080/api/users';
    
    try{
        axios.ger(url).then((res)=>{
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
    const url = 'http://localhost:8080/api/delete';
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