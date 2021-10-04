function checkFields() {
    let business_name = document.getElementById("business_name");

    if(business_name.value.length > 0) {
        alert("CHECK PASSED");
    }
    else {
        alert("Please fill all the fields");
    }
}