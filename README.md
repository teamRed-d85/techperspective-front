# **The Tech Prospective Survey**
[Team Collaboration Agreement](https://docs.google.com/document/d/1Ei7RcvOaHzeyUDbDCYfNEVa91ktPXAih2gQk4I0Fmmc/edit#heading=h.y52avp42q2jv)

## **Survey URL**

[Tech Perspective Survey](https://tech-perspective-survey.netlify.app/admin)

## **The vision**

- The vision compiling diversity data and using it as a teaching tool to bring to light internal biases and ways to be more conscious with regard to inclusivity and diversity .

## **The Problem Domain**

- This project will revolutionize the existing survey data, making it more user friendly and caching historical data.

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
- Have multiple active surveys each being for an individual class


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
