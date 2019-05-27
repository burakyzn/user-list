var list = [1,2,3,4,5,6,7,8,9,10];
const userList = document.querySelector('#user-list');

list.forEach(function(sayi){
    var userCon = document.querySelector('#userCon');
    var newOption = document.createElement('option');
    newOption.value = sayi;
    newOption.innerHTML = sayi;
    userCon.appendChild(newOption);
});

function getUser(){
    var userCon = document.querySelector('#userCon');
    var apiAddress = 'https://randomuser.me/api/?results=' + userCon.value;
    
    const connect = new XMLHttpRequest();
    connect.open('GET', apiAddress);


    connect.onload = function(){
        if(this.status){
            const responce = JSON.parse(this.responseText);
            console.log(responce.results);

            for(var user = 0; user < responce.results.length; user++){
                var userObj = {
                    name: responce.results[user].name.first + ' ' + responce.results[user].name.last ,
                    image: responce.results[user].picture.medium,
                    address: responce.results[user].location.street,
                    phone: responce.results[user].cell,
                    mail : responce.results[user].email
                }

                console.log(userObj);
    
                const newUser = document.createElement('div');
                newUser.className = 'col-lg-3 card-col';
                newUser.innerHTML += '<div class="card userCard" style="width: 18rem;"><img class="card-img-top" src="' + userObj.image + '"alt="Card image cap"><div class="card-body"><h5 class="card-title">' + userObj.name + '</h5></div><ul class="list-group list-group-flush"><li class="list-group-item">Mail : ' + userObj.mail + '</li><li class="list-group-item">Phone : ' + userObj.phone + '</li><li class="list-group-item">Address : ' + userObj.address + '</li></ul>';
                newUser.id = "user" + userList.childElementCount;
                userList.appendChild(newUser);
            }
            
                   
        }
    }

    connect.send();
}