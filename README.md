# employees

Downloading and Using the Application.
Note : You should use git bash terminal.
	Here is the link to download and install https://git-scm.com/downloads


1. Clone application. 
     Copy the link "git clone https://github.com/mikelcop/employees.git".     
     Open a bash terminal window.
     Make directory of your choice and get inside to that directory.
     paste the link that you copy.
    
2.  Running Server.
Go to Server Folder from directory that you created
    Ex. C:\CREATED_DIRECTORY\server.
    then run these commands.
        npm install
        npm start
when successful you should see something like "MongoDB database connection thru Internet established successfully!"
     
 3. Running Angular App.
 Go to Client Folder from directory that you created
    Ex. C:\CREATED_DIRECTORY\client.
    then run these commands.
        npm install
        ng serve --open
 when successful you should see something like "Compiled successfully." and your browser will open automatically
if browser did not open. Open your browser and type this URL "http://localhost:4200".
     
 4. Using the Application
 you should be in the Login Page by now
 
 use this Credential to login  
Username: admin  
Password: password.
after logging you will be redirected to Employees List Page. if the loading will take too long try refreshing the page by clicking the refresh button or hitting Ctrl+f5.
 
 Employee Page has a Capable of 
      Adding New Record.
      Searching Record.         
      Faltering the Record by Clicking the Header Title.
      Edit Record.
      Delete Record
