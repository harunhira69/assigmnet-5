

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?
 .............................
** .answer to the question no:1**
 .............................
 Difference between getElementId,getElementsByClassName, and querySelector / querySelectorAll
 getElementId = Finds only one element with specific id.It always return single element or null if not found.
getElementsByClassName = Finds all elements with that class name and returns an HTML collection(looks like array but not )

querySelector= Finds the first element that matches CSS selector (id, class, tag,).if find the target then do not check other selector

querySelectorAll = Finds all elements that match CSS selector and returns a NodeList.it check multiple selector

**answer to the question no:2**
............................
 How do you **create and insert a new element into the DOM = 
 const addCard = document.getElementById('new-card-1')
const newCard = document.createElement('div')
newCard.innerHTML = `  <div class="mt-2">
      <h2 class="font-semibold">Hello</h2>
      <p>new element</p>
    </div>    
     addCard.append(newCard);
     
     `

**Answer question no:3**
....................
 What is Event Bubbling and how does it work?

Event bubbling means that when you trigger an event (like clicking a button inside a div), the event doesn’t just stay on that button.
Events move from the target element up through parents until document
**Answer question no:4 Event Delegation=**
Add one listener on a parent and use event.target to handle children. Saves memory and works for dynamic elements.

**Answer question no:5= preventDefault vs stopPropagation**

preventDefault() :stops browser’s default action .
stopPropagation():stops event from bubbling to parent elements.






