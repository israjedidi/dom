var premier = document.getElementsByTagName("h1")
for (let i = 0 ; i<premier.length ; i++){
    console.log (premier[i].innerHTML)
    if (premier[i].innerHTML == "Hello  Esraa"){
        premier[i].innerHTML = "Hello oussama"
        console.log("finded")
    }
}