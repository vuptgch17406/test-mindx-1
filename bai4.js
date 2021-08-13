let users = []
function create(){
    let str = prompt("Input data: ")
    let data = str.split(", ")
    users.push(data)
    
}
function read(){
    alert(users)
}
function update(){
    let updateStr = prompt("New data: ")
    users[users.length -1] = updateStr
    console.log(users)
}
function del(){
    users.splice(0, 4)
    console.log(users)
}

while(true){
    let action = +prompt("Choose number: ")
    switch(action){
        case 1: create()
                break
        case 2: read()
                break
        case 3: update()
                break
        case 4: del()
                break
        default:
            console.log(`Invalid`)
            break

    }
}