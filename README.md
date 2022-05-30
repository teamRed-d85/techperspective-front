# **The Tech Prospective Survey**
[Team Collaboration Agreement](https://docs.google.com/document/d/1Ei7RcvOaHzeyUDbDCYfNEVa91ktPXAih2gQk4I0Fmmc/edit#heading=h.y52avp42q2jv)

## **Survey URL**

[Tech Perspective Survey](https://tech-perspective-survey.netlify.app/admin)

## **The vision**

![Survey](./public/assets/survey.png)

- The vision compiling diversity data and using it as a teaching tool to bring to light internal biases and ways to be more conscious with regard to inclusivity and diversity .

## **The Problem Domain**

- This project will revolutionize the existing survey data, making it more user friendly and potentially caching historical data.

## **The Importance**

- This product will drastically improve the awareness of internalized biases, discrimination and privilege based on a multitude of factors. This product will serve to bring about a more inclusive and self-aware team.

### **The Project Scope (In/Out)**

![Survey Admin](./public/assets/surveyadmin.png)

#### *In Scope*

*Allow the Admin user to...*

- Access the survey.
- Complete the survey.
- View data on a stylized graph.
- Compare data by multiple students in one class.
- See how many students participate in the survey.

#### *Out of Scope*

- Data from other schools and students will not be visible.
- New students' data from other schools cannot be added.

### Minimum Viable Product

![Survey Questions](./public/assets/surveyquestion.png)

- **What will your MVP functionality be?**
  - Access and complete the survey.
  - Store immediate survey data in the DB.
  - Render a stylized graph of the immediate data.

### Stretch Goals

- **What are your stretch goals?**
  - Cache historical data.
  - Develop a graph modeling historical data.
  - Allow the user to access historical data and trends.
- **What stretch goals are you going to aim for?**
  - The ability to store historical data.

## **Software Requirements**

### **Functional Requirements**

- User will be able to complete the survey and submit data.
- User will be able to access a stylized graph of the immediate data.
- User will be able to secure data and login information.

### **Non-Functional Requirements**

- **Security**
  - Our app will use Auth0 to make sure we have authorized users
  - This will allow us to track and personalize to our users
  - Our backend will validate requests to make sure it is coming from our front end
  - Managing the uses of our api and databases so only our users are able to access those resources

- **Database**
  - Each item belongs to a single location
  - The two databases will be a Student database and a Class database
    - There will be a identifier in the DB associated with the class
  - Each student will have a single class

### **Data Flow**

![Data flow for the survey](./public/assets/surveydata.png)

### DataBase Schemas

```js

ClassSurvey = {
  ClassNumber : Number,
  Identifier : String,
  ClassCount : Number,
  Instructor : String,
  thumbnail : String, //url
  note: String //optional
}
```

## How To Use **The Tech Perspective Survey**

## Step One

- begin by running:
- `git clone` then copy and paste `git@github.com:Meltingpot-Data/techperspective-front.git`

- Do the same for the backend repo:
- `git clone` then copy and paste `git@github.com:Meltingpot-Data/techperspective-back.git`

## Step Two

- run: `cd techperspective-front`
- then (installs node modules): `npm install`
- then (installs dependencies): `npm i express bootstrap nodemon cors dotenv mongoose jwt bcrypt base-64 supertest sqlite3 jsonwebtoken`
- repeat **step two** for 'back'

## Step Three

- Your are going to need to create a `.env` in order to use the server, follow the guide in the provided `.sample.env` file.

## How to Use

- Click on the provided link here: [Survey Admin Portal](https://tech-perspective-survey.netlify.app/admin)

## To start server

- run: `npm start`
*To test the server*

- run: `npm run test`
*To run the tests*
