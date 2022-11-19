jQuery(function ($) {
    $(function () {
        $('.mask').mask("+38(999)-999-99-99", {'translation': {9: {pattern: /[0-9*]/}, 0: {pattern: /[0-9*]/}},});
    });
});

let birth = document.getElementById("birth")
let email = document.getElementById("email")
let err = document.getElementById("e_error")
email.addEventListener("input", function () {
    let mail = email.value
    if (!/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(mail)) {
        err.style.display = "block"
        email.style.border = "solid red 2.5px";
        email.setCustomValidity("Wrong Mail");
    } else {
        email.style.border = "solid #B7950B 2.5px";
        err.style.display = "none"
        email.setCustomValidity("");
    }
})
let pas = document.getElementById("password")
let erp = document.getElementById("p_error")
pas.addEventListener("input", function(){
    if(pas.value.length<8){
        erp.style.display = "block"
        pas.style.border = "solid red 2.5px";
        pas.setCustomValidity("Wrong Pas");
    } else {
        pas.style.border = "solid #B7950B 2.5px";
        erp.style.display = "none"
        pas.setCustomValidity("");
    }
})

let name = document.getElementById("name")
let ern = document.getElementById("n_error")
name.addEventListener("input", function () {
    if (!/\D/.test(name.value)) {
        ern.style.display = "block"
        name.style.border = "solid red 2.5px";
        name.setCustomValidity("Wrong Name");
    } else {
        name.style.border = "solid #B7950B 2.5px";
        ern.style.display = "none"
        name.setCustomValidity("");
    }
})

let surname = document.getElementById("surname")
let ers = document.getElementById("s_error")
surname.addEventListener("input", function () {
    if (!/\D/.test(surname.value)) {
        ers.style.display = "block"
        surname.style.border = "solid red 2.5px";
        surname.setCustomValidity("Wrong SurName");
    } else {
        surname.style.border = "solid #B7950B 2.5px";
        ers.style.display = "none"
        surname.setCustomValidity("");
    }
})

let telep = document.getElementById("mask")
let ert = document.getElementById("t_error")
telep.addEventListener("input", function () {
    if (!/^(\+38)([(]0\d{2}[)])-(\d{3})-(\d{2})-(\d{2})/.test(telep.value)) {
        ert.style.display = "block"
        telep.style.border = "solid red 2.5px";
        telep.setCustomValidity("Wrong Tel");
    } else {
        ert.style.display = "none"
        telep.style.border = "solid #B7950B 2.5px";
        telep.setCustomValidity("");
    }
})

let gena
let m1;
let m2;
let calc = 0
let but = document.getElementById("but1")
let group = document.getElementById("group")
let gender = document.querySelector("input[type=radio]:checked")
let email1= document.getElementById("email")
let telnumber= document.getElementById("mask")
let rad=document.getElementsByName('stats');
    for (let i=0;i<rad.length; i++) {
        if(rad[i].checked){
            gena = rad[i].value
        }
    }
but.addEventListener("click", function () {
if (!/^(\+38)([(]0\d{2}[)])-(\d{3})-(\d{2})-(\d{2})/.test(telep.value)) {
        ert.style.display = "block"
        telep.style.border = "solid red 2.5px";
        telep.setCustomValidity("Wrong Tel");
        alert("egg")
        return;
    } else {
        ert.style.display = "none"
        telep.style.border = "solid #B7950B 2.5px";
        telep.setCustomValidity("");
    }
 if (!/\D/.test(surname.value)) {
        ers.style.display = "block"
        surname.style.border = "solid red 2.5px";
        surname.setCustomValidity("Wrong SurName");
        alert("egg")
        return;
    } else {
        surname.style.border = "solid #B7950B 2.5px";
        ers.style.display = "none"
        surname.setCustomValidity("");
    }
if (!/\D/.test(name.value)) {
        ern.style.display = "block"
        name.style.border = "solid red 2.5px";
        name.setCustomValidity("Wrong Name");
        alert("egg")
        return;
    } else {
        name.style.border = "solid #B7950B 2.5px";
        ern.style.display = "none"
        name.setCustomValidity("");
    }
 // if (!/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(mail)) {
 //        err.style.display = "block"
 //        email.style.border = "solid red 2.5px";
 //        email.setCustomValidity("Wrong Mail");
 //        alert("egg")
 //        return;
 //    } else {
 //        email.style.border = "solid #B7950B 2.5px";
 //        err.style.display = "none"
 //        email.setCustomValidity("");
 //    }



    calc+=1
    let table = document.getElementById("table1")
    let row = table.insertRow(-1)
    row.id="tr"+calc
    let ema = row.insertCell(0)
    let pasw = row.insertCell(1)
    let na = row.insertCell(2)
    let surn = row.insertCell(3)
    let dateofb = row.insertCell(4)
    let gend = row.insertCell(5)
    let numb = row.insertCell(6)
    let box = row.insertCell(7)
    let checkbox = document.createElement("input")
    checkbox.type="checkbox"
    checkbox.id=calc
    box.appendChild(checkbox)
    ema.innerHTML=email1.value
    pasw.innerHTML=pas.value
    na.innerHTML=name.value
    surn.innerHTML=surname.value
    dateofb.innerHTML=birth.value
    numb.innerHTML = telnumber.value
    gend.innerHTML=gena





    // let tbody = document.getElementById("table_body").getElementsByTagName("tbody")[0];
    // let row = document.createElement("tr")
    // let th1 = document.createElement("th")
    // th1.appendChild(document.createTextNode(email.value))
    // let th2 = document.createElement("th")
    // th2.appendChild (document.createTextNode(pas.value))
    // row.appendChild(th1);
    // row.appendChild(th2);
    // let th3 = document.createElement("th")
    // th3.appendChild(document.createTextNode(name.value))
    // let th4 = document.createElement("th")
    // th4.appendChild (document.createTextNode(surname.value))
    // row.appendChild(th3);
    // row.appendChild(th4);
    // let th5 = document.createElement("th")
    // th5.appendChild(document.createTextNode(birth.value))
    // let th6 = document.createElement("th")
    // th6.appendChild (document.createTextNode("Не визначено"));
    // let th7 = document.createElement("th")
    // th7.appendChild (document.createTextNode("Не визначено"));
    // // document.querySelector("stat").value
    // row.appendChild(th5);
    // row.appendChild(th3);
    // row.appendChild(th3);
    // alert("lol")
    // tbody.appendChild(row);
    // alert("lol2")
})
// function function5(){
//     alert("egg")
//      let tbody = document.getElementById("table_body").getElementsByTagName("tbody")[0];
//     let row = document.createElement("tr")
//     let th1 = document.createElement("th")
//     td1.appendChild(document.createTextNode(email.value))
//     let th2 = document.createElement("th")
//     td2.appendChild (document.createTextNode(password.value))
//     row.appendChild(th1);
//     row.appendChild(th2);
//     let th3 = document.createElement("th")
//     td1.appendChild(document.createTextNode(name.value))
//     let th4 = document.createElement("th")
//     td2.appendChild (document.createTextNode(surname.value))
//     row.appendChild(th3);
//     row.appendChild(th4);
//     let th5 = document.createElement("th")
//     td1.appendChild(document.createTextNode(birth.value))
//     let th6 = document.createElement("th")
//     td2.appendChild (document.createTextNode(document.querySelector('').value));
//     row.appendChild(th5);
//     row.appendChild(th6);
//     tbody.appendChild(row);
//     alert("egg")
//
// }