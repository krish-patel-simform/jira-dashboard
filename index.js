import {tasks} from './data.js'

// create local storage 
/*
id
name
title
status 
category 
*/

// create card
function createCard(task)
{
    let tagColor;
    if(task.tag ==='Billing')
        tagColor = 'highlight-blue'
    else if(task.tag === 'Feedback')
        tagColor = 'highlight-yellow'
    else if(task.tag === 'Accounts')
        tagColor = 'highlight-green'
    else if(task.tag === 'Forms')
        tagColor = 'highlight-purple'
    else
        tagColor = 'highlight-blue'

   const html = `
   <article class="card" id=${task.id} data-status=${task.status} data-priority=${task.priority}>
                            <p>${task.title}</p>
                            <p>mobile app</p>
                            <p class="highlight ${tagColor}">${task.tag}</p>
                            <div class="flex justify-space-between">
                                <div class="flex icons align-item-center gap-05">
                                    <figure class="icon-container task-icon-container bg-green">
                                        <svg fill="#000000" width="100%" height="100%" viewBox="0 0 24 24" id="bookmark" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" class="icon flat-color"><path id="primary" d="M18,2H6A2,2,0,0,0,4,4V21a1,1,0,0,0,.5.86,1,1,0,0,0,1,0L12,18.15l6.5,3.72A1,1,0,0,0,19,22a.9.9,0,0,0,.5-.14A1,1,0,0,0,20,21V4A2,2,0,0,0,18,2Z" style="fill: #FFF;"></path></svg>
                                    </figure>
                                    <p>${task.jiraId}</p>
                                </div>
                                <div class="flex">
                                    <figure class="icon-container task-icon-container">
                                        <svg width="100%" height="100%" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path fill="#000000" fill-rule="evenodd" d="M6,3 C6,3.74028 5.5978,4.38663 5,4.73244 L5,7.99963 C5.83566,7.37194 6.87439,7 8,7 C9.42133,7 10.6118,6.01158 10.9215,4.6846 C10.3673,4.32903 10,3.70741 10,3 C10,1.89543 10.8954,1 12,1 C13.1046,1 14,1.89543 14,3 C14,3.76403 13.5716,4.42799 12.9419,4.76478 C12.5738,7.16318 10.5014,9 8,9 C6.57867,9 5.3882,9.98842 5.07847,11.3154 C5.63273,11.671 6,12.2926 6,13 C6,14.1046 5.10457,15 4,15 C2.89543,15 2,14.1046 2,13 C2,12.2597 2.4022,11.6134 3,11.2676 L3,4.73244 C2.4022,4.38663 2,3.74028 2,3 C2,1.89543 2.89543,1 4,1 C5.10457,1 6,1.89543 6,3 Z"/>
    </svg>
                                    </figure>
                                    <figure class="icon-container task-icon-container">
                                        <svg fill="#000000" width="100%" height="100%" viewBox="-4 -2 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" class="jam jam-merge"><path d='M8 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM7 5.83a3.001 3.001 0 1 1 2.033-.013v2.028c0 .074-.003.148-.008.221a1 1 0 0 0 .462.637l3.086 1.846a3 3 0 0 1 1.46 2.575v1.059a3.001 3.001 0 1 1-2-.024v-1.035a1 1 0 0 0-.487-.858L8.46 10.42a3 3 0 0 1-.444-.324 3 3 0 0 1-.443.324l-3.086 1.846a1 1 0 0 0-.487.858v1.047a3.001 3.001 0 1 1-2 0v-1.047a3 3 0 0 1 1.46-2.575l3.086-1.846a1 1 0 0 0 .462-.637A3.006 3.006 0 0 1 7 7.845V5.829zM3 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z'/></svg>
                                    </figure>
                                    <figure class="icon-container task-icon-container">
                                        <svg width="100%" height="100%" viewBox="0 0 24 24" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/">
          <g transform="translate(0 -1028.4)">
            <path d="m12 0c-0.405 0-0.805 0.060326-1.188 0.15625-0.224 0.05678-0.44 0.13135-0.656 0.21875-0.083 0.03401-0.1679 0.05534-0.2498 0.09375-0.034 0.01583-0.06 0.04594-0.0937 0.0625-0.2032 0.10058-0.4021 0.21704-0.5937 0.34375-0.027 0.0174-0.0671 0.01339-0.0938 0.03125-0.0563 0.03864-0.101 0.08419-0.1562 0.12495-0.1569 0.1126-0.3216 0.216-0.4688 0.3438-0.1342 0.1207-0.2494 0.2724-0.375 0.4062-0.4251 0.4359-0.7936 0.8971-1.0938 1.4376-0.5154 0.9034-0.9002 1.9205-1.0624 2.9687-0.0783-0.0165-0.1501-0.0224-0.2188 0-0.5251 0.171-0.6545 1.1685-0.3125 2.2187 0.2007 0.6163 0.5346 1.1015 0.875 1.375 0.4573 1.7778 1.4257 3.2598 2.6875 4.1878v1.031l-1 1-2 1c-1.6173 0.801-3.2284 1.605-4.8438 2.406-0.89513 0.54-1.2415 1.6-1.1562 2.594 0.041664 0.626-0.18448 1.427 0.4375 1.844 0.5909 0.304 1.2959 0.106 1.9375 0.156 1.8766-0.001 3.7484 0 5.625 0 2.669 0.001 5.331 0 8 0 2.367 0 4.727 0.004 7.094 0 0.768-0.054 0.981-0.865 0.906-1.5 0.014-0.932 0.069-1.976-0.656-2.688-0.592-0.602-1.434-0.84-2.156-1.25-1.061-0.525-2.128-1.037-3.188-1.562l-2-1-1-1v-1.031c1.262-0.928 2.23-2.41 2.688-4.1878 0.34-0.2736 0.674-0.7588 0.874-1.375 0.342-1.0502 0.213-2.0477-0.312-2.2187-0.069-0.0224-0.14-0.0165-0.219 0-0.162-1.0482-0.547-2.0653-1.062-2.9687-0.3-0.5405-0.669-1.0017-1.094-1.4376-0.126-0.1338-0.241-0.2855-0.375-0.4062-0.006-0.0055-0.025 0.0055-0.031 0-0.392-0.3499-0.827-0.61894-1.281-0.84375-0.115-0.05622-0.227-0.10854-0.344-0.15625-0.084-0.03401-0.165-0.06426-0.25-0.09375-0.255-0.08848-0.516-0.17356-0.782-0.21875-0.02-0.003405-0.042 0.003148-0.062 0-0.249-0.039144-0.495-0.06525-0.75-0.0625z" transform="translate(0 1028.4)" fill="#34495e"/>
            <path d="m0 1051.4c0.026419 0.3 0.12651 0.6 0.4375 0.8 0.5909 0.3 1.2959 0.1 1.9375 0.2h5.625 8 7.094c0.576-0.1 0.842-0.5 0.906-1h-24z" fill="#2c3e50"/>
          </g>
                                    </svg>
                                </figure>
                                </div>
                            </div>
                        </article>`

    return html;
}

const todoContainerEle = document.querySelector('#todo > .card-list')
const inProgressContainerEle = document.querySelector('#in-progress > .card-list')
const inReviewContainerEle = document.querySelector('#in-review > .card-list')
const doneContainerEle = document.querySelector('#done > .card-list')


console.log(todoContainerEle)
console.log(inProgressContainerEle)
console.log(inReviewContainerEle)
console.log(doneContainerEle)


// filter data based on status
// const todoTasks = tasks.filter((task)=> task.status === 'todo') 
// const inProgressTasks = tasks.filter((task)=> task.status === 'inProgress') 
// const inReviewTasks = tasks.filter((task)=> task.status === 'inReview') 
// const doneTasks = tasks.filter((task)=> task.status === 'done') 


for(const task of tasks)
{
    const card = createCard(task)

    switch(task.status)
    {
        case 'todo':
            todoContainerEle.insertAdjacentHTML('beforeend',card)
            break;
        case 'inProgress':
            inProgressContainerEle.insertAdjacentHTML('beforeend',card)
            break;
        case 'inReview':
            inReviewContainerEle.insertAdjacentHTML('beforeend',card)
            break;
        case 'done':
            doneContainerEle.insertAdjacentHTML('beforeend',card)
            break;
    }

}