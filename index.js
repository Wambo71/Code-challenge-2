//DOM elements
let form = document.getElementById('guest-form')
console.log('guest-form')

let guestNameInput = document.getElementById('guestName')
console.log('enter guest name')
//create form submission
let guestList = document.getElementById('guests')

  form.addEventListener('submit',function (e){     
    e.preventDefault();

  let guestName = guestNameInput.value;   //check if there is a name,if not alert to enter a name
    if(!guestName){
      alert('please enter a name')
      return;
    }

    if(guestList.children.length >=10){     //limits guests to add to 10
   alert('guest limit reached!');
   return;
    
}
//get time
let timestamp = new Date().toLocaleTimeString();
  let timestampSpan = document.createElement('span') 
  timestampSpan.textContent = `Added at ${timestamp}`;
  //styling timestamp
  timestampSpan.style.color = 'yellow'
  timestampSpan.style.fontSize  ='0.8em'

  
//creates list items
let li = document.createElement('li')
li.textContent = guestName + " "
//creates remove button
let removeBtn = document.createElement('button')
removeBtn.textContent = 'remove';

removeBtn.addEventListener('click', () => {
    li.remove();
   
});
  li.appendChild(timestampSpan);

  li.appendChild(removeBtn);

//creates edit button
let editBtn = document.createElement('button');
  editBtn.textContent = 'edit';
  
  editBtn.addEventListener('click', () => {
    let newName = prompt('Enter new guest name:',
      li.firstChild.textContent)
      if(newName )
        li.firstChild.textContent = newName
      
      
      }
    
    
    
  );

let rsvpBtn = document.createElement('button')   //create RSVP button
rsvpBtn.textContent = 'not attending'

rsvpBtn.addEventListener('click',() =>{       
if(rsvpBtn.textContent ==='not attending'){  // functioning button showing guest attending,not attending
  rsvpBtn.textContent = 'attending'               
  console.log('attending')
}else{rsvpBtn.textContent = 'not attending'
  console.log('not attending')
}
})
//appends elements to list item
 
  
  li.appendChild(editBtn);
  
  li.appendChild(rsvpBtn);

  guestList.appendChild(li)

  guestNameInput.value = ''
  });