# BitBazaar
A MERN application for Buying and Selling of items for students of Birla Institute of Technology, MESRA. Aimed for a college environment where physical communication is very easy between sellers and buyers. Hence it can be used very effectively. For example, selling of novels, buying second-hand electronic gadget from your college mate.

## Features

### Seller
- upload items
  - add description
  - add single or multiple images for the item
  - specify expected price
- manage uploaded items
- view interested buyers
- remove items / update status of items

### Buyer
- search for items
- show interest on items, which are then notified to the seller
- add requirements (specific items that buyers may require)


## Usage
To run the code on localhost,

### Install requirements
<pre><code> npm install </code></pre>

### File structure
The project is divided into two parts. One is the server side code (Nodejs) and other is the client side server (React).
`client` and `server` folder contain the code for client and server side respectively.


### Start Node server
From the root directory of the project run.
<pre><code> node app.js </code></pre>

### Start React server
Now, move to the `client` directory and run.
<pre><code> npm start </code></pre>
This initiates a script to run the React server on the `localhost:3000`.

Open browser and go to `http://localhost:3000` to view the application.

## Technologies used
- MongoDB for database management 
- Express and Nodejs for server side
- React for client side