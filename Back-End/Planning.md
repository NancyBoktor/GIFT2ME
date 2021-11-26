## Planning

# Backend Routes #url #req #queries

api/users
api/events
api/events/event_id
api/gifts
api/gifts/gift_id

# Frontend Routes #url #req #queries

homepage / GET

register /register GET  
 POST - check if the email is in the db - alert - add a new user
login /login GET
/login/:id POST check if the email is in the db - alert

dashboard /dashboard GET render all created events
/dashboard/:id _ POST redirect to the create event
_ DELETE deletes event  
 \* PUT edit an event -> redirect create event

create event /event GET
/event/:event*id * POST create a new event in db -> form for invitation info -> redirect to dashboard
\_ EDIT

event /events/:event_id/gifts GET render the event with the gifts -> the event info with the buttons for selected gifts
/events/:events_id/gifts/:id POST reserve the gifts -> the gifter can press the button to select the gift and quantity.

# Queries

Register/login
1 - Checking if the user exist by email
2 - Checking if the password matches confirm password and is a valid length
3 - Create a new user account

Dashboard
4 - SELECT all records from events table for specific user
5 - Delete Event
6 - Edit Event

Create event
5 - CREATE new record in events table (INSERT INTO EVENTS TABLE)
6 - CREATE new record in gifts table (INSERT INTO GIFTS TABLE)

invitation

Components
- button
- event-form -> the name, address
- share-link 
- gift
- giftList
- gifter - form
- footer
- navbar
