

let list = []

 function addUser(){
       
            let name = prompt("enter your name");
            let id = prompt("enter your id");
            let balance= Number(prompt("enter your balance"));

         let user = {
            name : name,
            id : id,
            balance : balance
         }

        list.push(user)
}

 addUser()
 addUser()

 console.log(list)

function editUserBalanceById(){
    let yourId = prompt("enter your id")
    let newBalance = Number(prompt("enter your newBalance"))
    let indexUser = list.findIndex(item => item.id == yourId)
    list[indexUser].balance = newBalance
}
// editUserBalanceById()
// console.log(list)

function transferBalance(){
    let fromUser = prompt("enter Fromid")
    let toUser = prompt("enter Toid")
    let transfered = Number(prompt("enter transfered balance"))
    
    let User1 = list.findIndex(item => item.id == fromUser)
    list[User1].balance -=  transfered

    let User2 = list.findIndex(item => item.id == toUser)
    list[User2].balance +=  transfered


}
transferBalance()
console.log(list)

function deleteUser(){
    let deletedIdUser = prompt("enter your deletedUser id")
    let deletedUser = list.findIndex(item => item.id == deletedIdUser)
    list.splice(deletedUser,1)
}
// deleteUser()
// console.log(list)