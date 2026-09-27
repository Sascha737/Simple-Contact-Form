# Simple Contacts

A compact contact form with client-side validation, a contact preview, and separate sign-up and login screens.

## Features

- Validates names and phone numbers before showing a contact preview.
- Clears the form and confirms the action with a status message.
- Provides `/signup` and `/login` pages with navigation in the shared header.
- Adapts to narrow screens and supports keyboard navigation.

## Run locally

```sh
npm install
npm start
```

Run the checks and production build with `npm test -- --watchAll=false` and `npm run build`.

The sign-up and login screens are interface demos. Authentication and contact persistence are not connected to a service.
