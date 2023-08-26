# PELICO CASE STUDY

## Introduction

This repository is a case study developed for Pelico.

This case study utilizes React with TypeScript and Material to solve the following exercise :

>You are tasked with building a Github search interface using React and TypeScript. The interface
should allow users to search for repositories on Github and mark them as favorites. The favorites list
should be maintained in memory while the user is on the app.
>
>Requirements:
>1. Use either GraphQL (preferred) or REST API to query Github for repositories based on the
user's search input.
>2. Display the search results as the user types in the search field, possibly with debounce
functionality to avoid excessive API calls.
>3. Each search result item should have a button to set it as a favorite. If an item is already set as
a favorite, it should be rendered as a favorite again.
>4. Implement a navigation feature to allow users to access the list of favorites.
>5. In the favorites list, each item should have a rating evaluation feature, from 1 to 5 , allowing
users to rate their favorite repositories.
>6. Users should also be able to remove items from the favorites list.

*Personal note :*
- I don't use GraphQL as I know Pelico is not or will not use it anymore.
- That was my first time with Material in React, that should explain some mix with some html tags and classes.
- I hadn't coded in React for two years, which was during my formation.

---

## Install

Clone the repository and execute ```npm install```.

No ```.env``` file needed.

---

## Run in local

```npm run dev```

Then click on localhost link that appears in your terminal.
It should be : ```http://127.0.0.1:5173/```

---

## Possible Improvements

All the functionalities have been implemented successfully, but :
- I'm clearly lacking experience to build a nice component architecture and code with the best practices in React.
- With more time to learn Material, the UI could improve a lot.
- I went for the props and 'lift up state' solution, but it could prove best to go for Context or Redux for the state management.

---