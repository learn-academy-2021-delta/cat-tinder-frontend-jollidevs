$ yarn create react-app cat-tinder-frontend
$ cd cat-tinder-frontend
$ yarn add react-router-dom
$ yarn add bootstrap
$ yarn add reactstrap
$ yarn start

//If you ever go into the wrong repository and need to move the app
$ mv react-challenges/chicken-pd-cb-tinder-frontend chicken-tinder-frontend
$ cd chicken-tinder-frontend
$ ls -a
$ git init

//added github repository
$ git remote add origin https://github.com/learn-academy-2021-delta/cat-tinder-frontend-jollidevs.git
$ git checkout -b main
$ git add .
$ git commit -m "it is our default branch"
$ git push origin main

Notes from Phil and Charlean
1. Put more notes in Readme.
2. Make sure we put trello card in "doing" column while working.
3. PR review.
4. CSS we can add styles by separating class names with commas.
5. We can add CSS by putting class name, however, we need to ensure that it is encapsulated by the switch, so that it does not populate outside.
6. Do not delete all boiler plate in index.js, or you'll get a white screen.
7. Opened the folder for assets and transfered images into it.
8. Make sure that the images source titles coincide within the curly braces.
9. When we are pulling from the repository make sure that we are on the current branch.
10. Remember that everything will be ok.
11.  test.todo is trickery  Fail code suggested. After review, found it is a placeholder
12. ensure that the yarn test enzyme is ran before yarn test
13. make sure import the component page at the top
14. Rinse, repeat
15. Like for real, really really, don't forget that import it helps define the Navlink and photos
16. use the regular terminal to be the server and the terminal in vs code to run test
17. JSX is not rendered then check imports
18. Click the lightbulb near the error
19. Rerun the test sometimes it is acting ridiculous
20. Grab a form code snippet from react strap
21. To send info up the river from a child, a function/method needs to be created.--->functional props
22. Createchicken takes an argument...needs to be in app.js and chickennew
23. Handle change stores the changed info, it gets called for every submission
24. handle submit will store the input, called when we are ready to send a forn up --->handle by the button...parent will call the function
25. redirect needs a specific moment to be triggered....conditional rendering with a toggle, true----->a setstate method and false on the constructor. Then the toggle has the JSX tag that is truthy and then the info that will become truthy after it is passed
26. You can use inline styling by adding CSS to the attributestyle <h1 style={{backgroundColor: "lightblue"}}>Hello Style!</h1>
27. https://www.pluralsight.com/guides/change-page-background-color-each-route
28. Remember to import images on the current working page