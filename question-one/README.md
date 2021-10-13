# Introduction
This is a simple note taking application which displays notes in descending order of time. In the left side, there is a calendar for selecting date and on the right side we have all the notes which a user has written. You have to add your title in the title field and body content in the body content field and click on the Save Note button for saving your note.\
I have used the hook useMindatestyle for styling the starting date if user has selected a different date. The background for this date was becoming yellow and I did not wanted that to happen to prevent this behaviour I have used this hook.\
In the utils folder I have a function makenewuserdateobject. When I am using react-calendar I am getting right date, month and year but not the right time in hours, minutes and seconds. This function is helping me in getting the right time in hours, minutes and seconds.\
For persisting all the user notes I am using redux-persist.

# Key libraries used:
<ul>

 <li>React </li>
 <li>Redux </li>
 <li> Bootstrap</li>
</ul>

# Key packages used:
<ul>
<li>react-redux </li>
<li>redux-thunk </li>
<li> redux-persist</li>
<li>react-calendar </li>
</ul>

# Installation Guide
Please make sure that you have cloned the main repo and you are inside the folder BreachLock-Assignment folder
Step 1: 

Type these commands in the terminal for going to question-one folder
```bash
cd question-one/
```

Step 1: 

Install all the node modules
```bash
npm i
```

Step 3:\
\
Start the server

```bash
npm start
```