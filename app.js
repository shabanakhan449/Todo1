var list = document.getElementById("list");
firebase.database().ref('todos').on('child_added',function(data){
   
    var li = document.createElement('li');
    var liText = document.createTextNode(data.val().value)
    li.appendChild(liText)
    list.appendChild(li)
    var delBtn = document.createElement("button")
    var delText = document.createTextNode("Delete")
    delBtn.appendChild(delText)
    li.appendChild(delBtn)
    delBtn.setAttribute("class","btn")
    delBtn.setAttribute("id",data.val().key)
    delBtn.setAttribute("onclick","deleteItem(this)")

    var editBtn = document.createElement("button")
    var editText = document.createTextNode("Edit")
    editBtn.setAttribute("class","btn")
    editBtn.setAttribute('id',data.val().key)
    editBtn.setAttribute("onclick","editItem(this)")
    editBtn.appendChild(editText)
    li.appendChild(editBtn)
})

function addTodo(){
    var todo_item = document.getElementById("todo-item")

    var key = firebase.database().ref('todos').push().key

    var todo = {
        value: todo_item.value,
        key: key
    }
     
   firebase.database().ref('todos').child(key).set(todo)
    todo_item.value = ""
}

function deleteItem(e){
    firebase.database().ref('todos').child(e.id).remove()
    e.parentNode.remove()
}
function editItem(e){
 var editValue = prompt("Enter updated value","e.parentNode.firstChild.nodeValue")
  var editTodo = {
      value: editValue,
      key: e.id
  } 
  firebase.database().ref('todos').child(e.id).set(editTodo)
 e.parentNode.firstChild.nodeValue = editValue;
}
function deleteAll(){
    list.innerHTML = ""
}

firebase.database().ref('todos').on('child_added',function(data){

    var todo_item = document.getElementById("todo-item")
    
    
})