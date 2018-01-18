# api_spirithunter
API (nodeJS &amp; Express) for my Epitech Innovative Project : Spirit Hunter. 

# How that works ?

Different routes are availables :

**GET:**

    /users
-> return the list of users
  
    /user/:userId
-> return the profile of the user defined by this userId

    /user/:userId/success
-> return the array of the success of the user defined by this userId
  
    /user/:userId/premium
-> return a boolean (true if the user has bought this application, false otherwise)

**POST:**

    /user/:userId/success
-> add the name of the success (given in the body of the request) in the profile of the user defined by the userId 
