function validation() {
    let firstname = document.getElementById("firstname")
    let username = document.getElementById("username")
    let password = document.getElementById("password")
    let confirm = document.getElementById("confirm")
    let nationality = document.getElementById("nationalty")
    let daraga = document.getElementById("daraga")
    let deyana = document.getElementById("deyana")
    fname = valfn(firstname.value)
    passwd = valpass(password.value, confirm.value)
    usernm = valusername(username.value)


    test(fname, passwd, usernm)
}

function valfn(firstname) {
    if (/\d/.test(firstname)) {
        return false
    } else {
        return firstname.length > 8 ? false : true
        // (condition)'true/false' ?  (if true) : (if false )
    }
}

function valusername(username) {
    return true
}

function valpass(password, confirm) {
    r = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])([A-Za-z\d@#$%^&£*\-_+=[\]{}|\\:',?/`~"();!]|\.(?!@)){8,16}$/
    return password == confirm ? r.test(password) : false
    // if (password == confirm) {
    //     return r.test(password)
    // } else {
    //     return false
    // }
}

function test(x, y, z) {

    console.log(x, y, z)
     if (x == true && y == true && z == true) {
        window.location.href = "index.html";

    }

}