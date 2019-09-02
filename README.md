# Front end developer assignment
##STAR WARS
###How to use
npm start (on terminal)
###errors 
To test the handle errors type a wrong query like this in the file config.json->  "endPoint":"https://swapi.co/api/PPPpeople/" (expected error 404)
for unexpected errors "endPoint":"https://SSSswapi.co/api/people/" , you should get different messages.
###http service
I'm using axios library to fetch data.
###Log errors
I'm using sentry.io https://sentry.io/organizations/no-company-just-testing/issues/?project=1547627 , you can try this by creating a user in sentry.io and change in index.js
```Sentry.init({ dsn: "https://52d04aed80c44c13a7ddcbbf28ab8c8a@sentry.io/1547627" });```for one provided on your account.

###CSS Styling:
I used Styled components technique (CSS-in-JS)https://medium.com/@dtinth/how-to-organize-css-in-multiple-files-21952654711
