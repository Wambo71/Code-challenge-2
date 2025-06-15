
# Event Guest List Manager

This is a dynamic web application that allows users to manage a guest list for an event. Users can add, edit, and remove guests, categorize them, and track their RSVP status—all with a clean, responsive interface built using HTML, CSS, and JavaScript.

---

##  Features

###  Add Guest
- Users can input a guest's name and add it to the list.
- Prevents adding blank names with input validation.

### Guest Limit
- The list accepts a **maximum of 10 guests**.
- If the limit is reached, a user is alerted and no additional guests can be added.

###  Timestamp
- Each guest entry includes a timestamp of when they were added, formatted as the local time.

###  Edit Guest Name
- Each guest entry includes an **Edit** button.
- Clicking allows users to change the name using a prompt dialog.

###  Remove Guest
- Guests can be removed individually by clicking the **Remove** button.

###  RSVP Toggle
- A **"not attending" / "attending"** button lets users toggle RSVP status.
- Button label updates and status logs to the console.

###  (Optional) Category Tag (Friend, Family, Colleague)
- Designed to support categorizing guests (though UI styling may vary).

---

###  Requirements
No external libraries required — just a modern browser!

###  Setup Instructions

1. **Clone the repository** or download the files manually.
   ```bash
   git clone https://github.com/your-username/guest-list-app.git


 ### Code Structure
 - # HTML(index html)
 -Form with input fields: guestName, guestCategory

 -Unordered list for displaying guest items: #guests

 - # JAVASCRIPT(index.js)
 -DOM manipulation for form submission

 -Event listeners for buttons (submit, edit, remove, RSVP)

 -Logic to enforce guest limit, update timestamps, and handle validation

 - # CSS(style.css)
  -Basic styling for layout, buttons, guest list, and category tags
 
  Example Guest Entry Behavior
  When a guest is added:

 -Their name appears as a list item

 -A timestamp is shown

 -Buttons appear to:

 -Remove guest

 Future Improvements

 -Style guests differently based on their category (color-coded tags)

 -Display RSVP stats (e.g., total attending vs. not attending)


 - ## Author

-Wambui Karanja
   ## License
   Copyright (c) 2025,Wambui karanja
   permission is hereby granted free of charge to anyperson obtaining a copy of this software and associated documentation files
    

📜 License