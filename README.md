# Contact Book

Add to the Contact Book application the ability to register, login, and user
updates, and work with a private collection of contacts.

## Backend.

There is a ready-made backend for this task. Check out the documentation. It
supports all necessary operations on the contact collection, as well as
registering, logging in and user update with JWT. Use it instead of your backend
created with the service mockapi.io.

## Routing

Add routing with the React Router library. The application should have several
pages:

`/register` - public route to register a new user with a form `/login` - public
login route of an existing user with a form `/contacts` - a private route for
your contact list Add a navigation component `Navigation` with links to navigate
routes.

## User menu

Create a component `UserMenu`, that displays the user's email and a logout
button. Here's what its markup might look like.

```
<div>
  <p>mango@mail.com</p>
  <button>Logout</button>
</div>
```

## Styling.

This is the final version of the application, so work on styling the interface.
You can use a styling library or components such as Chakra UI or Material UI.
