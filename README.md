# Dice Life

### A Project by James, Phuong, Guy, Edi and Hayden



# Information For The Team:


### TODOs:
A place for me to remember what to
* link to heroku
* fill in blank spaces on this readme


## Tech Expectations:

### Git Stuff:
    Before each pull request, pull down from dev to assure that your local changes don't overwrite dev with an outdated dev.

### Comment Your Code:
    A brief description of what your code is doing.
    If stuck, describe the problem in comments before handover.


## People Expectations:

### We WILL get stressed. This is a stressful time:
 * Taking breaks is good for team morale.
 * Be aware of people's triggers.
 * Communication is key. Take 5 minutes to talk to someone, it will help to ensure that nothing snowballs.
 * Clarity: If unclear about something, ask.

 ### Conflict Resolution:
 * already taken a break
 * already had a chat with someone face to face
 * talk to Project manager to initiate a conversation where a mediator is present.
 * If needed, a full team meeting
 * A team bonding activity to clear the air.
 * It is ok to take a break. Even a big break.


### Hours:
 * 9am Start
 * 1pm Lunch (group lunch not mandatory)
 * 5pm Summary meeting (go home if you want)
 * weekends negotiable
 * If you cannot make it at these times, let the team know.

## Roles:
    New roles assigned at start of day. Product Owner will be James for the entire 7 days. If someone wants to change roles before end of day, this can be discussed.

### Project Manager:
 Here are some expectations of this role:
  * Facilitates meetings
  * Not buried too deep in code.
  * Looking out for the people in the team.
  * Checking in on how different parts of the project are going.
  * Summary meeting in afternoon: where are we now, what happened today?
  * Morning meeting , what do we want to do today? Does everyone have something to do? What are our goals?
  * Bolstering the team: doing overviews of what is going on, being vocal about problems.
  * Resolutions for how to improve the next day.
  * Doing a handover to the next PM to keep people up to speed.

### GIT Person:
 Here are some expectations of this role:
 * Review Pull Requests
 * Check for merge conflicts, if there are any, reject the pull request.
 * Ensure people are rebasing before pull requests.

 ### Product Owner:
 Here are some expectations of this role:
 * Communicate your ideas
 * Final say on What The App IS
 * It's ok to not know exactly
 * People will ask you questions
 * Saying yes or no to new features
 * MVP
 * User Stories
 * Prioritising what needs to be done.

### Dependency Manager:
 Here are some expectations of this role:
 * check with this person if you want to add a dependency
 * if there is a dependency issue, talk to this person.



# Information About The App:


## User Stories

### MVP

As a user:
  * I want to see a list of what will happen if I roll a certain number.
  * I want to be able to click on a button that will roll a dice, resulting in a number between 2 and 12.
  * I want to see an outcome based on my roll that will tell me what to do with my Friday Night.


### Stretch
  * I want to be able to pick a different category to roll for. One for meals, one for weekends, and one for a night out.
  * I want to be able to create my own category and input different outcomes.
  * I want to save and go back to some dice I previously made.
  * I want to be able to see outcomes of my previous dice rolls.
  * I want a guide so that I know how to use this app.

  ---

## Views (Client Side)
  | name | purpose |
  | --- | --- |
  | Home | Brief description of the app, also has a login and register button. |
  | Login | View for user to enter their login credentials |
  | Register | View for user to sign up for the app. |
  | HowTo | View to explain to user how the app works. |
  | AllDice | View where user selects which dice to roll (meal, friday night, or weekend) |
  | SpecificDice | Displays a table of possible outcomes, and a back button, and a ROLL button. An animation of a rolling dice. |
  | Result | Displays the result of the dice roll e.g. "You should go for a walk!" |


## Reducers (Client Side)

  | name | purpose |
  | --- | --- |
  | auth | Store information regarding user logins, auth status and auth errors |
  | diceNames | handle the individual dice names |
  | diceOutcomes | Handle dice options and add them to store |

 ## Actions

 ### login

 | type | data | purpose |
 | --- | --- | --- |
 | LOGIN_REQUEST | none | Requests info  about user |
 | LOGIN_SUCCESS | user | Authenticates the user |
 | LOGIN_FAILURE | message | displays an error message. |

 ### logout
 | type | data | purpose |
 | --- | --- | --- |
 | LOGOUT_REQUEST | none | sends the request to remove the user. |
 | LOGOUT_SUCCESS | none | reverts the user to having no authentication (being logged out) |

 ### diceOutcomes
  | type | data | purpose |
| --- | --- | --- |
| REQUEST_DICE_OUTCOME | dice options and dice | Request all the dice names |
| RECEIVE_DICE_OUTCOME | dice options and dice | Add all dice options with the respective name to store |  
| ADD_DICE_OUTCOME | ? | ? |
| EDIT_DICE_OUTCOME | ? | ? |
| SHOW_ERROR | ? | ? |

### diceNames
| type | data | purpose |
| --- | --- | --- |
| REQUEST_DICE_NAMES | dice_names | Request all the dice names |
| RECEIVE_DICE_NAMES | dice_names |Add individual dice objects to store |
| SHOW_ERROR | | Display an error |

## API (Client - Server)

| Method | Endpoint | Protected | Usage | Response |
| --- | --- | --- | --- | --- |
| POST | /api/auth/login | Yes | Log In a User | The Users JWT Token |
| POST | /api/auth/register | Yes | Register a User | The Users JWT Token |
| GET | /api/diceoptions | Yes | Request all dices and all options for each dice | An object containing an array of dice option objects |
| GET | /api/diceoptions | Yes | Add a new dice object | Send back id of the new dice |
| GET | /api/dicenames | YES | Request all dice names | Send back an array of dice objects |


## DB (Server Side)
  There should be three tables for MVP

### users
  | Column Name | Data Type |
  | --- | --- |
  | id | Integer(autoincrement) |
  | user_name | String |
  | first_name | String |
  | last_name | String |
  | hash | String |

### dice_names
  | Column Name | Data Type |
  | --- | --- |
  | dice_id | Integer(autoincrement) |
  | dice_name | String |
  | user_id | Integer |


### dice_options

 | Column Name | Data Type |
 | --- | --- |
 | id | Integer(autoincrement) |
 | dice_option | String |
  | position | Integer |
   | dice_names_id | Integer |

 ---


## Setup

Run the following commands in your terminal:

```sh
npm install (or yarn install)
knex migrate:latest
knex seed:run

```

  `npm run dev` || `yarn dev` for bundling, watch and nodemon

  `npm start` only runs server (setup for heroku)


## Heroku!!!

### Creating app

Create app with `heroku create [name]`

You can check that this was successful by running `heroku apps` to view a list of your apps


### Adding postgres

Add postgresql (hobby dev) to your app at `https://dashboard.heroku.com/apps/[APP NAME HERE]/resources`

Check that pg has been added by running `heroku addons` to ensure the postgresql db is on your app


### Deploying!

`npm run h:deploy` will push your local master branch to your heroku app

`npm run h:migrate` will run your knex migrations on your deployed heroku app

`npm run h:seed` will run your seeds on your deployed app

If ever you need to rollback, you can also just use `npm run h:rollback`


### Ta-Da!
Your app should be deployed!


# Remember to have fun and take care of yourselves and each other! Go Team.
