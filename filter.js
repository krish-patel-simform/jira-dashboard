let count = 0
const priorityOrder = {
    'high' : 1,
    'medium':2,
    'low':3
}

function filterBasedOnPriority(priority)
{
    let tasks = JSON.parse(localStorage.getItem('tasks'))
    switch(priority)
    {
        case 'high':
        case 'medium':
        case 'low':
            tasks = tasks.filter((task)=> task.priority === priority)
            break;
        default:
            // get all data from local storage
            tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    console.log(tasks)
    return tasks
}

// function filterBasedOntag(tag,tasks)
// {
//     tasks = tasks.filter((task)=> task.tag === tag)
//     return tasks;
// }

function sortTask(sortProperty,tasks)
{
    switch(sortProperty)
    {
        case 'title':
            tasks = tasks.sort((a,b) => a.title.localeCompare(b.title));
            return tasks;
        case 'tag':
            tasks = tasks.sort((a,b)=>  a.tag.localeCompare(b.tag));
            return tasks;
        case 'priority':
            tasks = tasks.sort((a,b)=> priorityOrder[a.priority] - priorityOrder[b.priority] )
            console.log(tasks)
            return tasks;
        default:
            // tasks = tasks
            return tasks
    }
}

function searchTasks(searhQuery)
{
    let tasks = JSON.parse(localStorage.getItem('tasks'))
    if(!searhQuery)
        return tasks;

    console.log("Dbounce called:",searhQuery)
    tasks = tasks.filter((task)=> task.title.toLowerCase().includes(searhQuery.toLowerCase()))
    return tasks;

}

export {filterBasedOnPriority,sortTask,searchTasks}