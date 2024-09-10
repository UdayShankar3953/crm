# CRM | Node.js React.js
<div align="center">
    <a href="https://www.example.com/">
        <img src="/frontend/src/style/images/idurar-crm-erp.svg" width="128px" />
    </a>
    <h1>Open Source CRM | Node.js React.js</h1>
    <p align="center">
        <p>Easy-to-Use CRM Solution</p>
    </p>

</div>

## Features

- Invoice Management 💰
- Accounting Management 📈
- HR Management 🧑‍🤝‍🧑
- Ant Design Framework (AntD) 🐜
- Based on MERN Stack (Node.js / Express.js / MongoDb / React.js) 👨‍💻

## Live App
[Live Demo](https://crm-frontend-7345.onrender.com)

### Can I use this for Commercial purposes?

- Yes, you can use this project for free for both personal and commercial use.

### For custom development service or premium support:

[Get in touch](mailto:212g1a3953@gmail.com)


## Getting Started

**Step 1: Clone the repository**

```bash
git clone https://github.com/UdayShankar3953/crm.git
cd crm
```

**Step 2: Create Your MongoDB Account and Database Cluster**

Create your own MongoDB account by visiting the MongoDB website and signing up for a new account.

Create a new database or cluster by following the instructions provided in the MongoDB documentation. Remember to note down the "Connect to your application URI" for the database, as you will need it later. Also, make sure to replace <password> with your own password.

Add your current IP address to the MongoDB database's IP whitelist to allow connections (this is needed whenever your IP changes).

**Step 3: Edit the Environment File**

Check the file named .env in the /backend directory. This file will store environment variables for the project to run.

**Step 4: Update MongoDB URI**

In the .env file, find the line that reads:
```bash
DATABASE="your-mongodb-uri"
```
Replace "your-mongodb-uri" with the actual URI of your MongoDB database.

**Step 5: Install Backend Dependencies**

In your terminal, navigate to the /backend directory:

```bash
cd backend
```
Then run the following command to install the backend dependencies:

```bash
npm install
```
This command will install all the required packages specified in the package.json file.

**Step 6: Run Setup Script**

While still in the /backend directory of the project, execute the following command to run the setup script:
```bash
npm run setup
```
This setup script may perform necessary database migrations or any other initialization tasks required for the project.

**Step 7: Run the Backend Server**

In the same terminal, run the following command to start the backend server:
```bash
npm run dev
```
This command will start the backend server, and it will listen for incoming requests.

**Step 8: Install Frontend Dependencies**

Open a new terminal window, and run the following command to install the frontend dependencies:
```bash
cd frontend
npm install
```
Step 9: Run the Frontend Server

After installing the frontend dependencies, run the following command in the same terminal to start the frontend server:
```bash
npm run dev
```
This command will start the frontend server, and you'll be able to access the website on localhost:3000 in your web browser.

**Dashboard**

<img src="frontend/Screenshots/Screenshot (202).png" alt="Invoice Management" width="800"/>

**Profile**

<img src="frontend/Screenshots/Screenshot (205).png" alt="Invoice Management" width="800"/>

**About**

<img src="frontend/Screenshots/Screenshot (204).png" alt="Invoice Management" width="800"/>

