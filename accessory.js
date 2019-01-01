// EVENT DELEGATION
//event bubbling - event bubbles up from nested part inside the DOM tree 
//attach event handler to a parent element and wait for the event to bubble up

// USE CASES--------------------------------------------------------------------
    //The first case is when we have an element with lots of child elements that we are interested in. we only determine from which child the event was fire
    //The second use case for event delegation is when we want an event handler attached to an element that is not yet in the DOM when our page is loaded.