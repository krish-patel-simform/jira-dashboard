const taskContainerEle = document.querySelector('.tasks-container')

// const cardEle = document.querySelector('.card')

function cardMouseDownHandler(e)
{

    let droppableEle = null;
    let lastDroppable = null;

    console.log("mouse down event called")
    e.preventDefault();
    // find on which card mouse is there
    const topEle = document.elementFromPoint(e.clientX,e.clientY);
    console.log('Top Element')
    console.dir(topEle)

    const cardEle = topEle?.closest('.card')

    console.log("child Ele found:",cardEle)

    // find the mouse position and find shift position
    const shiftX = e.clientX - cardEle.getBoundingClientRect().left;
    const shiftY = e.clientY - cardEle.getBoundingClientRect().top;

    cardEle.style.position = 'absolute';

    // add mouse move handle
    function onMouseMove(e)
    {
        //bound the with only task container ele,emt 
        let newX = e.pageX - shiftX;
        let newY = e.pageY - shiftY;

        const taskContainerEleClientRact = taskContainerEle.getBoundingClientRect();

        // bounging from the left and right
        if(newX < taskContainerEleClientRact.left)
        {
            newX  = taskContainerEleClientRact.left
        }
        else if(newX+cardEle.getBoundingClientRect().width > (taskContainerEleClientRact.left + taskContainerEleClientRact.width))
        {
            newX = taskContainerEleClientRact.left + taskContainerEleClientRact.width - cardEle.getBoundingClientRect().width
        }
       
        // bounding from top and bottom
        if(newY < taskContainerEleClientRact.top)
        {
            newY = taskContainerEleClientRact.top;
        }
        else if(newY + cardEle.getBoundingClientRect().height > (taskContainerEleClientRact.top + taskContainerEleClientRact.height))
        {
            newY = taskContainerEleClientRact.top + taskContainerEleClientRact.height - cardEle.getBoundingClientRect().height;
        }

        cardEle.style.left = newX + 'px';
        cardEle.style.top = newY + 'px';

        cardEle.hidden = true;
        // now check for drappable area 
        const eleBelow = document.elementFromPoint(e.clientX,e.clientY)
        cardEle.hidden = false;

        droppableEle = eleBelow?.closest('.droppable');
    }

    // add mouse up handle
    function onMouseUp(e)
    {
        document.removeEventListener('mousemove',onMouseMove);
        document.removeEventListener('mouseup',onMouseUp);

        // find nearest card-list and append that card 
        // const cardListEle = document.elementFromPoint(e.clientX,e.clientX)?.closest('.card-list')
        // console.log(document.elementFromPoint(e.clientX,e.clientX))
        // console.log(cardListEle)
        console.log("mouse up called")
        
        if(droppableEle)
        {
            cardEle.hidden = true;
            const topCard = document.elementFromPoint(e.clientX,e.clientY).closest('.card')
            cardEle.hidden = false;
            if(topCard)
            {
                console.log("topcard found")
                topCard.before(cardEle);
            }
            else
            {
                console.log("inside an else did not find an card")
                // cardListEle?.append(cardEle)
                const cardListEle = droppableEle.querySelector('.card-list')
                cardListEle?.append(cardEle)
            }
            //   const cardListEle = droppableEle.querySelector('.card-list')
            //     cardListEle?.append(cardEle)
            cardEle.style.position = 'static'
            cardEle.style.left = ''
            cardEle.style.top = ''

        }
    }

    document.addEventListener('mousemove',onMouseMove);
    document.addEventListener('mouseup',onMouseUp,{once : true});
}

taskContainerEle.addEventListener('mousedown',cardMouseDownHandler)

taskContainerEle.ondragstart = function()
{
    return false;
}
