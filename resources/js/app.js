var list = [1,2,3,4,5,6,7,8,9,10];
var userCon = document.querySelector('#userCon');

list.forEach(function(sayi){
    var newOption = document.createElement('option');
    newOption.value = sayi;
    newOption.innerHTML = sayi;
    userCon.appendChild(newOption);
});
