const btnSubmit = document.querySelector("button");

const fName = document.querySelector("#fname");
const lName = document.querySelector("#lname");
const age = document.querySelector("#age");
const gender = document.querySelector('#gender');
const phoneNumber = document.querySelector('#phonenumber');
const presentAddress = document.querySelector('#presentaddress');
const sameAddressCheckBox = document.querySelector("#sameaddress");
const permanentAddress = document.querySelector('#permanentaddress');

//Getting span for showing a message if the field is empty
const spanFName = document.querySelector("#iferrorfname")
const spanLName = document.querySelector("#iferrorlname")
const spanAge = document.querySelector("#iferrorage")
const spanGender = document.querySelector("#iferrorgender")
const spanPhoneNumber = document.querySelector("#iferrorphone")
const spanPresentAdd = document.querySelector("#iferrorpresentadd")
//No need for CheckBox
const spanPermanentAdd = document.querySelector("#iferrorpermanentadd")

//This function shows a message if the field is empty
let addColorText = (element) => {
    let n = element.getAttribute("title")  //getting title to show respective last name or first name or age at the end
    element.innerHTML = "Please enter your " + n   //adding n here
    element.style.color = "red"
}

let removeColorText = (element) => {
    element.innerHTML ="";
}

//This method check if the filled is empty or not
let required = (element) =>{
    if (element.value.length == 0){
        return false;
    }
    else{
        return true;
    }
}

//Check phone number length
let phoneNumberLength = (element) => {

    if (element.value.length == 0){
        spanPhoneNumber.innerHTML= ""
        return true;
    }
   
    if (isNaN(element.value)) {
        spanPhoneNumber.innerHTML = "The phone number should not contain letters"
        spanPhoneNumber.style.color = "red"
        return false;
    }
    else{
        spanPhoneNumber.innerHTML= ""
    }

    if (element.value.length != 11){
        spanPhoneNumber.innerHTML = "The length of the phone number should be 11"
        spanPhoneNumber.style.color = "red"
        return false;
    }
    else{
        spanPhoneNumber.innerHTML= ""
        return true;
    }
     
}

//Check if the address is same
let sameAddress = () => {
    let presentAddressValue = presentAddress.value
    permanentAddress.setAttribute("value",presentAddressValue)
    return

}

//Add event lsitener to the button
btnSubmit.addEventListener('click', (element) => {
    element.preventDefault();   //This doesn't let the page to refresh

    if (!required(fName)){  
        addColorText(spanFName);
    }
    else{
        removeColorText(spanFName);
    }

    if (!required(lName)){
        addColorText(spanLName);
    }
    else{
        removeColorText(spanLName);
    }

    if (!required(age)){
        addColorText(spanAge);
    }
    else{
        removeColorText(spanAge);
    }

    if (sameAddressCheckBox.checked){
        sameAddress();
    }
    else{
        let presentAddressValue = presentAddress.value
        permanentAddress.setAttribute("value","")
    }

    phoneNumberLength(phoneNumber);

    if (!required(presentAddress)){
        addColorText(spanPresentAdd);
    }
    else{
        removeColorText(spanPresentAdd);
    }

    if (!required(permanentAddress)){
        addColorText(spanPermanentAdd);
    }
    else{
        removeColorText(spanPermanentAdd);
    }

    check()

});

let check = () =>{
    if(required(fName) && required(lName) && required(age) && phoneNumberLength(phoneNumber) && required(presentAddress) && required(permanentAddress)){
        alert("Submission Successful");
    }
}

