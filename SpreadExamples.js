let todos = [
    {user : "QWE", completed: false, task: "remove"},
    {user : "IGR", completed: false, task: "add"},
    {user : "MNO", completed: true, task: "bring"}
];


function addTodos(user, task) {
    let newTodo = {user, task};
    todos.push(newTodo);
    // const todoList = [...todos, {...newTodo, completed:false}];
    // const todoList = [...todos, newTodo];
    // todos = todoList;
}


console.log(todos);
addTodos("GHI", "hold");
console.log(todos);