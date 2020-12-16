console.log("20 12 16 JS Classes 02 Practice"); // files linked


class TaskList {
    // Define a TaskList class with properties listName, listDue, isListComplete, and tasks. 
    constructor(listName, listDue){
        // // listName and listDue should be passed in when an instance of the class is defined
        this.listName = listName;
        this.listDue = listDue;
        // isListComplete should be set the false and tasks should be an empty array.
        this.isListComplete = false;
        this.tasks = [];
    }
    // The addTask method will accept a new task and add it to the tasks array property. 
    addTask(newTask){
        this.tasks.push(newTask);
    }
    // The completeList method will update the isListComplete property from false to true then alert the message : You have completed all tasks!. 
    completeList(){
        this.isListComplete = true;
        alert(`You have completed all tasks!`);
    }
    // The viewListInfo method will output a TaskList object's properties in the formatted string : [LIST_NAME] List. Due : [LIST_DUE]. Complete : [TRUE_OR_FALSE]. Number of tasks : [ITEMS_IN_TASKS_ARRAY]. 
    viewListInfo(){
        console.log(`${this.listName} List. Due : ${this.listDue}. Complete : ${this.isListComplete}. Number of tasks : ${this.tasks.length}.`);
    }
    // The viewTasks method will iterate through the list of tasks outputting the message : "Task : [TASKS_ITEM]" on each iteration.
    viewTasks(){
        for(let i = 0; i < this.tasks.length; i++){
            console.log(`Tasks : ${this.tasks[i]}`);
        }
    }
}

// Create an instance of the TaskList object called tasksToday with a list name and a due date. 
let tasksToday = new TaskList("Part Time Program Items", "Tonight at 10PM");
// console.log(tasksToday);

// Add three tasks to the tasks array using the correct class method.
tasksToday.addTask("Grade Primary Assignment");
tasksToday.addTask("Record Primary Video");
tasksToday.addTask("Update Attendance");
// console.log(tasksToday);
// View all tasks after adding using the correct class method.
tasksToday.viewTasks();

// Update the value of the isListComplete property using the correct class method.
tasksToday.completeList();
// console.log(tasksToday);

// View the TaskList object's properties using the correct class method.
tasksToday.viewListInfo();
