# Rateify

## Project Overview
   _Rateify_ is a full stack MERN application (MongoDB, Express, React and Node) .The site allows users to discover and rate music, post their own reviews about a release, and upload a release for others to comment on. The app also allows users to listen to samples of the posted music by listening to the release's associated Spotify playlist .  _Rateify_ was a week-long group project in which I worked with [Calum MacEachen](https://github.com/calum-m708) and [JT Black](https://github.com/JT-Black) to create our finished site. 

You can check it out for yourself [here!](https://rateify.netlify.app/) 
   
<img width="1439" alt="Screenshot 2022-05-17 at 13 48 20" src="https://user-images.githubusercontent.com/98101603/168835148-cae98c17-b2d1-4258-bfed-989dc85d0d84.png">

## The Brief
- Build a full-stack application by making a back-end and a front-end.
- Use an Express API to serve your data from a Mongo database.
- Consume your API with a separate front-end built with React. 
- Be a complete product with multiple relationships and CRUD functionality.
- Implement wireframes that show the user journey and functionality of the application.
- Be deployed online so it’s publicly accessible.

## Technologies Used 

### Front End
- React Framework (Single Page Application)
- API Handling: Axios
- Pure CSS with Sass
- React-Router-Dom

### Back End
- Server: Node.js & Express
- Database: MongoDB & Mongoose
- Safeguarding from injection attacks: Express Mongo Sanitize
- Password Encryption: Bcrypt
- Authentication: JSON Web Token (JWT)

### Development
- Git, GitHub
- Postman for API testing
- Excalidraw for wireframing
- Npm
- Deployment:
  - Front End: Netlify
  - Back End: Heroku (& Mongo Atlas)

## 1) Planning

In the planning stage we discussed many different ideas but in the end we all decided on a music based app as we all had a shared passion for music. 
We wanted to build something that would be both fun and useful to people and wanted there to be an emphasis on user interaction for music fans looking to share their favorite releases and opinions about the music and artists who created it.

<img width="1300" alt="Screenshot 2022-05-18 at 10 47 03" src="https://user-images.githubusercontent.com/98101603/169011418-719c4d07-d92d-4970-984a-b7cea84494ed.png">

## 2) Back-End 

The below code snippet shows the router structure and the Admin privileges within (creating, updating and deleting can only be completed by an Admin): 

<img width="484" alt="Screenshot 2022-05-20 at 12 57 42" src="https://user-images.githubusercontent.com/98101603/169523791-e7854295-35a7-4c19-b380-eaebac0c4228.png">

The code snippet below shows that data.js file with our functions for creating both artist and releases. Below this you can see the start of the raw data: 

<img width="402" alt="Screenshot 2022-05-20 at 13 07 04" src="https://user-images.githubusercontent.com/98101603/169524998-1f7f7f33-cccc-4247-a1d6-fe0988158a02.png">



## 3) Front-End 

The below code snippet shows the getAllArtists, getArtistById and createArtist functions  which implemented axios requests, async await and authorisation with bearer tokens:   

<img width="522" alt="Screenshot 2022-05-20 at 12 34 20" src="https://user-images.githubusercontent.com/98101603/169520631-0399ad3c-7e10-47ef-8925-38ac4fe0024c.png">

The below code snippet shows a component file(ShowArtist.js) which shows the use of useState, useEffect and a try...catch block to produce the 'Show Artist' page:

<img width="369" alt="Screenshot 2022-05-20 at 12 36 13" src="https://user-images.githubusercontent.com/98101603/169520653-b415da82-6d23-4796-b3f6-babc23725f3a.png">

Below is a gif that shows the Home Page, the movement of the carousel, the Artist Index, The Show Artist Page and then their Release Page complete with the embedded Spotify link. If you're not logged in to Spotify it will still play but it will only play a snippet of 30 seconds but if you're logged in to Spotify you can play entire albums.  

![ezgif-1-a84f7849b8](https://user-images.githubusercontent.com/98101603/169519343-434bbf75-6abd-4f15-aaf7-6b8914d778ea.gif)


## Application Walkthrough
### Home  Page

<img width="700" alt="Screenshot 2022-05-17 at 13 48 20" src="https://user-images.githubusercontent.com/98101603/168835148-cae98c17-b2d1-4258-bfed-989dc85d0d84.png">


### Artist Index

<img width="700" alt="Screenshot 2022-05-20 at 12 23 00" src="https://user-images.githubusercontent.com/98101603/169517854-38236929-4964-454c-bccb-1a29002f434a.png">


### Release Index

<img width="700" alt="Screenshot 2022-05-17 at 15 28 08" src="https://user-images.githubusercontent.com/98101603/168836427-2b76529a-ad74-4029-a2f9-8bd24fe92f82.png">


### Artist Page

<img width="700" alt="Screenshot 2022-05-17 at 15 42 41" src="https://user-images.githubusercontent.com/98101603/168839259-51166133-1003-40f9-bb34-eb36a6d942ac.png">

### Release Page

<img width="700" alt="Screenshot 2022-05-17 at 15 42 24" src="https://user-images.githubusercontent.com/98101603/168839440-1388cbba-d2a3-40be-8e80-18d58ae087d9.png">


### Register

<img width="700" alt="Screenshot 2022-05-20 at 12 25 14" src="https://user-images.githubusercontent.com/98101603/169518183-4f129bc0-d2fd-4b1b-be8e-7aa0ec9c4bc8.png">


### Login

<img width="700" alt="Screenshot 2022-05-20 at 12 25 25" src="https://user-images.githubusercontent.com/98101603/169518202-4345977a-557e-441e-9c5e-54592d0c24b8.png">


### About

<img width="700" alt="Screenshot 2022-05-20 at 12 25 34" src="https://user-images.githubusercontent.com/98101603/169518226-b5093ec8-fed4-426f-a656-89632bfc3b42.png">


## Architecture:
### Front End: 
  - React Components using Hooks for state management and handling side effects
  - Bulma CSS framework for styling
  - Single Page Application (`react-router-dom`) using `Link`, `useNavigate`, `useLocation` and `useParams`
### Back End:
  - All security checks done in the back end:
    - Email validation
    - Password validation
  - Secure routing middleware
  - Error handling middleware
  - Interlinked schema models in MongoDB

## Challenges and Wins

Adding releases requires using a spotify link currently. An unsolved issue we had was a better way to add releases and artists that would validate, unfortunately we ran out of time. We wanted to add an average star rating and reviews section as well, however the time constraint limited what we were able to add with our deadline. We were able to add carousels on the homepage for a bit of fun movement.

# Wins & Blockers
### **Wins**
- First time using a variety of new technologies. 
- First time working in a group of more than two.
- Complete application that delivers many features as designed.
- Complete application that strongly resembles the wireframes.

### **Blockers**
- The single biggest blocker was the variety of new technologies we had to use for this project and learning each of their idiosyncrasies. 

# Bugs
- After deployment registration has stopped working.

# Future Improvements
- Adding an average star rating and reviews section. 
- Fix the registration bug. 

# Key Takeaways
Building 'Rateify' was a great way to build my knowledge of new technologies and was also a great experience of working in a group as both Calum and JT were fantastic to work with. 


