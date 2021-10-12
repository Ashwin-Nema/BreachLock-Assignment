# Installation Guide
Please make sure that you have cloned the main repo and you are inside the folder BreachLock-Assignment folder\
\
Step 1: 

Type these commands in the terminal for going to question-two folder, if you are not inside question-two folder. 
```bash
cd question-two/
```
Note: In the question-two folder in the root directory make a .env.sample file and include these three variables: \
\
1.slotsavailable: This represents the total number of slots in the parking lot\
\
2.MONGODB_URL:This is your mondodb url\
\
3.PORT: The server will be running on port 3000 but if you want to change the port then you can change it here. Then the server will be running on that port. This is optional.\
\
Step 1: 

Install all the node modules
```bash
npm i
```

Step 2:


In the index.js file there is a function CreateNewParkingLot (starting from line number 13 till line number 18) which I have written in comment please uncomment this function for a while and then start the server in the terminal by typing the following command

```bash
node index.js
```

Step 3:

Now in the terminal you will get an id this is the id you can use for testing all the endpoints.Comment the lines from 13 to 18 again stop there server and start the server again
```bash
node index.js
```

# Introduction
Now you have an id of the parking lot id, you can now check all the endpoints in the postman or any other api testing tool 
<br> </br>
1.post("/:id"): Through this endpoint you can add a new car in your slot. Here id is the id of Parking lot that you got earlier. A car is added to an empty slot if slots in between are empty, else they are added at the last. If all the slots are filled you get an error message "Parking lot is full". In case if there is already a car with this number errormessage becomes "Car with this car number is already parked in the parking lot" and in case your car is successfully parked you get message "Your car is successfully parked and your slot number is slotnumber", slotnumber is the slot at which the car is parked

2.get("/:id/:carnumberorslotnumber"): Through this endpoint you get slot number and car number for a given parking lot id. carnumberorslotnumber represents that this can either by the slotnumber number or the car number. If no car is parked at the slot number or the given car number is not present then you get the message 
"Sorry no information is available for the given details"

3.delete("/:id/:slotnumber"): Through this endpoint you can remove a car at a given slot number for a given parking  lot id. If that position is already empty you get the message "Slot at this position is already empty"

For each of these endpoints if the the id is not present in the database then you get the message 

"Sorry the parking lot id provided does not exists in our database"

# Key frameworks used:
<ul>
 <li> Express</li>
</ul>

# Key libraries used:
<ul>
 <li> Mongoose</li>
</ul>

# Key packages used:
<ul>
<li>dotenv </li>
</ul>

