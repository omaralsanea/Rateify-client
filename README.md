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

Our first discussions centred around the fact that we wanted to build something that would be useful to people and that was different to other applications that we had built before. We focused on music as it was an area that we were all interested in and decided to create a site that blended musical content with user interaction for music fans looking to share their favorite releases and opinions about the music and artists who created it.

<img width="1300" alt="Screenshot 2022-05-18 at 10 47 03" src="https://user-images.githubusercontent.com/98101603/169011418-719c4d07-d92d-4970-984a-b7cea84494ed.png">

## 2) Back-End 




## 3) Front-End 



## 4) Styling



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
<p align="center">
	<img src="./src/img/register.png" width="96%"  />
</p>

### Login
<p align="center">
	<img src="./src/img/login.png" width="96%"  />
</p>

### About
<p align="center">
	<img src="./src/img/about.png" width="96%"  />
</p>

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
- Complete application that stronngly resembles the wireframes.

### **Blockers**
- The single biggest blocker was the variety of new technologies we had to use for this project and learning each of their idiosyncrasies. 

# Bugs
-After deployment registration has stopped working.

# Future Improvements
-Adding an average star rating and reviews section. 
-Fix the registration bug. 

# Key Takeaways
Building 'Rateify' was a great way to build my knowledge of new technologies and was also a great experience of working in a group as both Calum and JT were fatastic to work with. 


