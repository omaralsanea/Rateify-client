# Rateify

## Project Overview
   _Rateify_ is a full stack MERN application (MongoDB, Express, React and Node) .The site allows users to discover and rate music, post their own reviews about a release, and upload a release for others to comment on. The app also allows users to listen to samples of the posted music by listening to the release's associated Spotify playlist .  _Rateify_ was a week-long group project in which I worked with [Calum MacEachen](https://github.com/calum-m708) and [JT Black](https://github.com/JT-Black) to create our finished site.

## The Brief
- Build a full-stack application by making a back-end and a front-end.
- Use an Express API to serve your data from a Mongo database.
- Consume your API with a separate front-end built with React. 
- Be a complete product with multiple relationships and CRUD functionality.
- Implement wireframes that show the user journey and functionality of the application.
- Be deployed online so it’s publicly accessible.

## Concept
   Our first discussions centred around the fact that we wanted to build something that would be useful to people and that was different to other applications that we had built before. We focused on music as it was an area that we were all interested in and decided to create a site that blended musical content with user interaction for music fans looking to share their favorite releases and opinions about the music and artists who created it.

You can check it out for yourself [here!](https://rateify.netlify.app/) 

## Application Walkthrough
### Home  Page

<img width="1439" alt="Screenshot 2022-05-17 at 13 48 20" src="https://user-images.githubusercontent.com/98101603/168835148-cae98c17-b2d1-4258-bfed-989dc85d0d84.png">


### Artist Index
<p align="center">
	<img src="./src/img/artists.png" width="96%"  />
</p>

### Release Index

<img width="1440" alt="Screenshot 2022-05-17 at 15 28 08" src="https://user-images.githubusercontent.com/98101603/168836427-2b76529a-ad74-4029-a2f9-8bd24fe92f82.png">


### Artist Page

<img width="1440" alt="Screenshot 2022-05-17 at 15 42 41" src="https://user-images.githubusercontent.com/98101603/168839259-51166133-1003-40f9-bb34-eb36a6d942ac.png">

### Release Page

<img width="1440" alt="Screenshot 2022-05-17 at 15 42 24" src="https://user-images.githubusercontent.com/98101603/168839440-1388cbba-d2a3-40be-8e80-18d58ae087d9.png">


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


## Tech Stack
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

## Featured Code Snippets
### Front End




### Back End



## Challenges and Wins

Adding releases requires using a spotify link currently. An unsolved issue we had was a better way to add releases and artists that would validate, unfortunately we ran out of time. We wanted to add an average star rating and reviews section as well, however the time constraint limited what we were able to add with our deadline. We were able to add carousels on the homepage for a bit of fun movement.



