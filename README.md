# STAR WARS
### How to use
1 - npm start (on terminal) and your default Browser will pop up if not use ```http://localhost:3000/```  
2 - Now you are in Home Page, the input will automatically focus so you can type straight away, click ```Search``` button.  
3 - When you go to the Home page you can notice that you are getting the default values(i choose to do it just because i thought was nice).  
4 - I wasn't asked to do it, but i did a small menu bar with Routing just for fun.  

### errors 
5 - To test the handle errors type a wrong query like this in the file config.json->  ```"endPoint":"https://swapi.co/api/PPPpeople/"```  
(expected error 404) **in this case doesen't make to much sense to use 404 because is just a search option, but if it was a delete button would be fundamental.**  
for unexpected errors:  
```"endPoint":"https://SSSswapi.co/api/people/"``` , you should get different messages.

### http service
I'm using axios library to fetch data.  
Did in a different file so if we need to change someting or copy the file to other project is easy. 
### Log errors
I'm using sentry.io https://sentry.io/organizations/no-company-just-testing/issues/?project=1547627 , you can try this by creating a user in sentry.io and change in index.js  
```Sentry.init({ dsn: "https://52d04aed80c44c13a7ddcbbf28ab8c8a@sentry.io/1547627" });```  
for one provided on your account.

### CSS Styling:
I used Styled components technique (CSS-in-JS)https://medium.com/@dtinth/how-to-organize-css-in-multiple-files-21952654711
