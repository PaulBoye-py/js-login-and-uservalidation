const userDataBase = {
    "padartech" : {
        firstName : "Paul",
        lastName : "Ade",
        email : "paul.ade@mail.com",
        accountActivated : true,
        password : "padartech"
    },
    "ezesomto" : {
        firstName : "Anthony",
        lastName : "Eze",
        email : "tony.eze@mail.com",
        accountActivated : true,
        password : "ezesomto"
    },
    "abims123" : {
        firstName : "Abim",
        lastName : "Yemi",
        email : "abim.yemi@mail.com",
        accountActivated : false,
        password : "abim123"
    }
}


function displayUserDetails(){
    // Get username
    let username = prompt("What is your username")
    while (validateUserName(username) == false) {
        username = prompt("Please enter a valid username")
    }

    if (username == null) {
        return
    }

    // Get Password
    let password = prompt("Enter your password")
    while (validatePassword(password) == false) {
        password = prompt("Enter a valid password")
    }


    if (password == null) {
        return
    }


    //Confirm password
    let confirmPassword = prompt("Confirm your password")
    // if (confirmPassword == password){
    //     alert("Password Success")
    //     return true
    // }else if (confirmPassword != password){
    //     alert("Please confirm your password again")
    //     confirmPassword = prompt("You did not enter the right password. Confirm your password again")
    //     if (confirmPassword == password) {
    //         alert("Password Success")
    //         return
    //     }else {
    //         alert("You did not enter the right password.")
    //         return
    //     }
    // }else if(confirmPassword == null) {
    //     return
    // }
    // Alternate way to confirm password
    while (confirmPassword !== password) {
        confirmPassword = prompt("You did not enter the right password. Confirm your password again")
    }
    
    if (confirmPassword == null) {
        return
    }

    user = userDataBase[username]
    if (user == undefined) {
        alert("User not found. Please register on the app!")
        return
    }

    //Display user details
    alert(`User found with the following details:
        First Name: ${user.firstName}
        Last Name: ${user.lastName}
        Email Address: ${user.email}
        Password: ${user.password}
        Activated: ${user.accountActivated}

    `)

    // console.log(username, password, confirmPassword)
    
}
displayUserDetails()
// alert("Everything looks good, all valid")
alert("Thank you for using the login")






function validateUserName(username) {
    if (username == null) {
        return true
    }
    if (username.length > 10) {
            alert("Please enter a username of 10 characters or less")
            return false
    }else {
        return true
    }
}

function validatePassword(password) {
    if (password == null) {
        return true
    
    }
    if (password.length < 6) {
        alert("Please enter a password of at least 6 characters")
        return false
    }else {
        return true
    }
}

