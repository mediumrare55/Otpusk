alert("Если Вы не являетесь Юрием Юрьевичем Чащиным, покиньте страницу          https://static.tildacdn.com/tild6431-3436-4636-a664-336134393863/photo.png");
document.addEventListener("click",overflow);
function overflow(){
    bb=document.getElementById("PASS").value;
    if (bb=="qwerty799"){
    document.getElementById("vid").style.opacity=100;
    document.getElementById("TT").innerText="Доступ к документам разрешен";
    document.getElementById("TT").style.color="green";
    } else if (bb==""){
        document.getElementById("TT").innerText="";
    }
    else{
        document.getElementById("TT").innerText="НЕВЕРНО ВВЕЛ ДИДЖИК";
    }
}