class CustomerFormHandler {

        constructor(){
        this.form = document.getElementById("guestForm");

        this.form.addEventListener("submit",(e)=>{
        e.preventDefault();

        if(this.validateForm()){
            this.saveToLocalStorage();
            this.showMessage("Data Saved Successfully","success");
            this.clearForm();
        }
    });
}

validateForm(){

        let name = document.getElementById("name").value;
        let phone = document.getElementById("phone").value;
        let email = document.getElementById("email").value;
        let address = document.getElementById("address").value;
        let aadhar = document.getElementById("aadhar").value;
        let checkin = document.getElementById("checkin").value;
        let checkout = document.getElementById("checkout").value;
        let adults = document.getElementById("adults").value;
        let purpose = document.getElementById("purpose").value;

        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(name.length < 3){
            this.showMessage("Name must be at least 3 characters","danger");
            return false;
        }

        if(phone.length != 10){
            this.showMessage("Phone must be 10 digits","danger");
            return false;
        }

        if(!emailRegex.test(email)){
            this.showMessage("Invalid email format","danger");
            return false;
        }

        if(address === ""){
            this.showMessage("Address required","danger");
            return false;
        }

        if(aadhar.length != 12){
            this.showMessage("Aadhar must be 12 digits","danger");
            return false;
        }

        if(adults === "" || adults <=0){
            this.showMessage("Enter valid number of adults","danger");
            return false;
        }

        if(purpose === ""){
            this.showMessage("Purpose required","danger");
            return false;
        }

        let today = new Date().toISOString().split("T")[0];

        if(checkin < today || checkout < today){
            this.showMessage("Dates must be future","danger");
            return false;
        }
        return true;
    }

        saveToLocalStorage(){

        let guest = {
            name:document.getElementById("name").value,
            phone:document.getElementById("phone").value,
            email:document.getElementById("email").value,
            address:document.getElementById("address").value,
            aadhar:document.getElementById("aadhar").value,
            checkin:document.getElementById("checkin").value,
            checkout:document.getElementById("checkout").value,
            adults:document.getElementById("adults").value,
            purpose:document.getElementById("purpose").value

        };

            let data = JSON.parse(localStorage.getItem("guests")) || [];
            data.push(guest);
            localStorage.setItem("guests",JSON.stringify(data));
        }

            clearForm(){
            this.form.reset();
        }

        showMessage(msg,type){

            let message = document.getElementById("message");
            message.innerHTML = `
                    <div class="alert alert-${type}">
                    ${msg}
                    </div>
            `;

            setTimeout(()=>{
                message.innerHTML="";
            },3000);
    }
}

new CustomerFormHandler();