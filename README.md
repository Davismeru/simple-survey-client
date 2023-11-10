# How to run this application locally on your pc

## how to run the frontend of the application

- Before starting, ensure that node, git and mysql are installed in your pc
- Create an empty folder on your pc and give at a name, "Survey App"
- Open the folder and right click on an empty space and select the option, "Open Gitbash here" on the menu that shows
- On the command line interface that pops, enter the comand "$ git clone https://github.com/Davismeru/simple-survey-client.git", this will import the frontend repository into your local machine.
- Open the imported folder, "simple-survey-client" on your IDE, eg visual studio code and open the terminal from there, ensure you are inside the "simple-survey-client" directory.
- In the terminal run the command "npm install" to install all the required dependancies
- VERY IMPORTANT STEP: Now open the folder "simple-survey-client", and enter on the folder "src". Open the file "App.jsx" and inside the code you will find a variable, "const base_api_url = "https://survey-app-92kq.onrender.com";" . Replace it with, "const base_api_url = "http://localhost:3000";"
- Finally, on the terminal run the command "npm run dev". This will give you alink to access the application locally into your pc: e.g "http://localhost:5173/".
- Open this link into your browser
- However not all the information will be displayed since you need to install the database and the server.

## How to install the database

- On the root of the folder "Survey App" that you created, right click once again and select, "Open Gitbash here"
- On the command line interface that opens, enter the command, "$ git clone https://github.com/Davismeru/simple-survey-api.git" . This will import the folder, "simple-survey-api". At this point you should be having two folders inside the "Survey App" folder, i.e the "simple-survey-client" folder and the "simple-survey-api" folder.
- Inside the "simple-survey-api" folder, you should find a file named "sky_survey_db". Copy this file somewhere you can easily access it, e.g desktop.
- Now open the "MySQL Workbench" application (download it if you dont have it) and select the "Local Instance MysQL" option.
- This will prompt for your "root" user password that you set up when installing MySQL into your PC, enter your correct password
- Create a new Schema buy clicking on the create schema icon at the top of the Workbench application. (the icon should a label "Create new schema in the conneected server" when you hover on it.). You must name the schema, "sky_survey_db".
- Now click on the "Server" option on the menu bar inside the application and select the "Data import" option on the menu that populates.
- Under the "Import Options" in the Data Import wizard, select the option, "Import from Self-Contained File" and select the directory where you kept the "sky_survey_db" file, e.g "C:\Users\ADMIN\Desktop\sky_survey_db.sql"
- Finally, click on the "Default Target Schema:" dropdown and select, "sky_survey db". Click on the button, "Start Import" and the the datbase schema should be imported into MySQL workbench

## How to run server

- Open the "simple-survey-api" folder in Visual Studio Code and the terminal, run the command, "npm run dev", this should start your server using nodemon
