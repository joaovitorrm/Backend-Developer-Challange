# Backend Amazon Challange

### About the project

First i need to warn you about a error that might happen with the request using axios to the Amazon store, you might get a error when searching because you are not using an api from Amazon. If it happens just try some time later and it should work (i hope).
Second, i use nested CSS in the project and some browsers do not yet support it natively. If the style of the page is not right you might want to try other browsers.

Briefly, this is a project where it is made a request to the Amazon store using axios and a keyword for the search product, then retrieving the data and using JSDOM to get the specific elements that will be shown on the page.

### How to setup

This project uses NodeJS to run so you need to have it.

After you have the project folder, in your computer, you need to open a terminal and type `npm i` inside the folder to download de dependecies of the project. 

With the depencencies installed type `npm run dev` to start the server. Then if everything went right it should show in the terminal that the server is running at the port `3000`

Just type `localhost:3000` in your browser and you are good to go.

From now on just make a research and if it all goes well you should see the products on the page.
