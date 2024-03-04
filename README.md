# Pittsburgh Closet & Doors

## New Here? To Download Dependencies & Libraries

0. Use 2 terminals to do scripts in both pittsburgh and client.
1. On Terminal 1: When in the project base directory run `npm install`
2. On Terminal 2: run `cd client`. This will change directory to the client directory (React Application)
3. On Terminal 2: run `npm install`. This install the React Application libraries and dependencies.
4. On Terminal 1: at the project base directory run `npm run dev`. This will run the server for development.
5. On Terminal 2: on the client's directory run `npm run dev`. This will run the client React Application for development.

## Make your own branch

On the terminal type the following `git checkout -b namelastname` this will create a branch and check it out so you can make changes independently

## React Snippet Extension

Go to extensions, type react snip, click the first one "3.7mil downloads" click install.

## Basic Architectural information

The project is broken into server and client, the client directory contains a vite application that builds into HTML CSS & JavaScript files that then are hosted by the server in production. This means that to properly use the server locally yo will likely have to install and build the client first, so that the build files exist when starting up the server for development. The server contains API endpoints in the `/api/*` routes and those do not interfere with the hosting of files for the browser vite application. The server uses mongoose to connect to a Mongo Database where it will store JSON document information for different configurations used by the vite application, this will allow administrative users to configure how the Front End renders certain pages. The front end will obtain configurations in the form of JSON documents from the server, which we explained earlier that are saved into Mongo DB. The authentication will be kept strictly basic with username and password and the password encryption will be handled with Bcrypt, once a user is authenticated a JSON Web Token (JWT) is issued to the browser and from that point the JWT will be utilized to verify the user and allow access to administrative routes.

## Installation and Running Using Scripts

- Run in your terminal at the root of the project: `npm install`
- Run in the terminal `npm run client-install`
- Run in the terminal `npm run client-build`

At this point your project is both installed and the client is built so that it may be served by the node js server.

- To run the server for development run in your terminal: `npm run dev`
  - This will make it so that if you change the Node JS Express server code it will automatically be restarted and you can test those changes.
- To run the client for development run in another terminal: `npm run dev-client`
  - This will make it so that if you change the code inside the /client directory the browser application will be updated and served on `localhost:5173`

## Testing the API (Node JS Express Server)

- Using Postman or Insomnia you can test the local server by submitting a get request to: `http://localhost:8080/api/configurations/default/blog`
  - This will request the default base blog configuration from the server.
- There are ways to update and even delete configurations built into the server, please refer to the `/routes/configRoutes.js` file to understand more.
