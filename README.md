# 20 12 16 JS Classes 02 Practice

Add comments above each exercise solution (at minium). HTML and JS files have already been included in the assignment. Push after completing each exercise. Comment out any broken code before 9PM submission and provide context on what's not working. 

## Task List 
Define a `TaskList` class with properties `listName`, `listDue`, `isListComplete`, and `tasks`. `listName` and `listDue` should be passed in when an instance of the class is defined while `isListComplete` should be set the false and `tasks` should be an empty array.

The `TaskList` class will also have four methods `addTask`, `completeList`, `viewListInfo` and `viewTasks`. The `addTask` method will accept a new task and add it to the `tasks` array property. The `completeList` method will update the `isListComplete` property from false to true then alert the message : You have completed all tasks!. The `viewListInfo` method will output a `TaskList` object's properties in the formatted string : [LIST_NAME] List. Due : [LIST_DUE]. Complete : [TRUE_OR_FALSE]. Number of tasks : [ITEMS_IN_TASKS_ARRAY]. The `viewTasks` method will iterate through the list of `tasks` outputting the message : "Tasks : [TASKS_ITEM]" on each iteration.

Create an instance of the `TaskList` object called `tasksToday` with a list name and a due date. Add three tasks to the `tasks` array using the correct class method. 

View all tasks after adding using the correct class method. 

Update the value of the `isListComplete` property using the correct class method.

View the `TaskList` object's properties using the correct class method. 