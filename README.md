# Registration Form
This is a simple registration form that is designed to get data from the users such as their names, age, phone numbers, etc. Also, it validates those data and makes sure the user enters all the fields. 

Some of the validation that the program checks are:

1. All fields except Phone No are required. 
This means, if the user doesn’t fill up the fields, a corresponding error message will be shown in red just after that field. 
If multiple fields are left blank, the same error message would be shown adjacent to the fields

2. The Phone number should be valid and should not contain anything other than numbers. 
If it does, show the appropriate message showing the error (look for isNaN function)

3. The Phone No should have an exact length of 11. If it doesn’t, then it shows the proper error message adjacent to the field.

4. When the user corrects the errors and submits, the previous errors would be cleared (if any) and then would show an 
Alert saying “Submission Successful”

<img width="367" alt="Screen Shot 2022-03-07 at 9 09 40 PM" src="https://user-images.githubusercontent.com/67757251/157158850-4fbe4c55-da5d-4433-9e25-2dacd61b65ed.png">

**I am using vanilla JavaScript and HTML to create the form.**

**I am planning to add CSS in the future.**
