## Technologies Used

This program runs primarily on Express and sequelize (through the utilisation of postgres). It also uses a third-party library called bcrypt to ensure that any password that a user has, is well encrypted and cannot be easily hacked.

## How to install

```js
npm install

npx sequelize-cli db:create

npx sequelize-cli db:migrate

npx nodemon index

go to localhost:3000 in your browser

use the program!

```

To run tests, run the above commands and then run:

```js 
npx cypress open
```

## Process

I created this program using test-driven development. I used Cypress testing to test each feature. I would initally fail the test and then write code to ensure that my tests passed.
I started by ensuring that the actual functioning of the Chitter website would work (so a user could add a peep and their username and the creation time would appear next to the peep). After completing this I moved onto the login/logout function of the website. This eventually resulted in me having to change the way my Chitter website was coded to ensure a higher quality program. The integration of my database tables using a foreign key contributed to this outcome.
Now a user can sign up or log into my Chitter site, post a peep and also see the peeps that other users have posted. 


Chitter Challenge
=================

* Feel free to use Google, your notes, books, etc. but work on your own
* If you refer to the solution of another coach or trainee, please put a link to that in your README
* If you have a partial solution, **still check in a partial solution**
* You must submit https://airtable.com/shrUGm2T8TYCFAmjNa your work by 9:30am Monday morning

Challenge:
-------

As usual please start by forking this repo.

We are going to write a small twitter clone that will allow users to post messages to a public wall.

Good luck and let the chitter begin!

Features:
-------

### Standard Acceptance Criteria
```
As a trainee software engineer
So that I can let people know what I am doing  
I want to post a message (peep) to chitter

As a trainee
So that I can see what others are saying  
I want to see all peeps in reverse chronological order

As a trainee
So that I can better appreciate the context of a peep
I want to see the time at which it was made

As a trainee
So that I can post messages on Chitter as me
I want to sign up for Chitter

As a trainee
So that only I can post messages on Chitter as me
I want to log in to Chitter

As a trainee
So that I can avoid others posting messages on Chitter as me
I want to log out of Chitter
```

Additional requirements:
------

* You don't have to be logged in to see the peeps.
* Trainee software engineers sign up to chitter with their email, password, name and a username (e.g. ewithers@digitalfutures.com, password123, Edward Withers, dearshrewdwit).
* The username and email are unique.
* Peeps (posts to chitter) have the name of the trainee and their user handle.
* Your README should indicate the technologies used, and give instructions on how to install and run the tests.

### Extended Acceptance Criteria

```
As a trainee
So that I can stay constantly tapped in to the shouty box of Chitter
I want to receive an email if I am tagged in a Peep

As a trainee
In order to start a conversation as a DFA trainee Software Engineer
I want to reply to a peep from another trainee.
```
