const firebaseConfig = {
    apiKey: "AIzaSyAm21lktRnj9PHBq3CoN4NEaiNTYxdO1CQ",
    authDomain: "registratin-form.firebaseapp.com",
    databaseURL: "https://registratin-form-default-rtdb.firebaseio.com",
    projectId: "registratin-form",
    storageBucket: "registratin-form.firebasestorage.app",
    messagingSenderId: "759946761288",
    appId: "1:759946761288:web:7bcb3b72be22995420347d"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var registrationFormDB = firebase.database().ref("registrationForm");
  
  document.getElementById("registrationForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var FirstName = getElementVal("firstName");
    var lastName = getElementVal("lastName");
    var phoneNumber = getElementVal("phoneNumber");
    var parentName = getElementVal("parentName");
    var address = getElementVal("address");
    var classs = getElementVal("class");
    var semester = getElementVal("semester");
    var branch = getElementVal("branch");

    const output = document.getElementById('output');
    const form = document.getElementById('registrationForm');

    function capitalizeWords(str) {
        return str.replace(/\b\w/g, char => char.toUpperCase());
    }
  
    saveMessages(FirstName,lastName, phoneNumber,parentName, address,classs,semester,branch);
    const formData = new FormData(form);
            let outputHTML = '<h2>Form Details</h2>';
            for (let [key, value] of formData.entries()) {
               
                outputHTML += `<p><strong>${capitalizeWords(key.replace(/([A-Z])/g, ' $1'))}:</strong> ${capitalizeWords(value)}</p>`;
                
            }
            output.innerHTML = outputHTML;
            output.classList.remove('hidden');
            
  
     //   reset the form
    document.getElementById("registrationForm").reset();
  }
  
  const saveMessages = (FirstName,lastName, phoneNumber,parentName, address,classs,semester,branch) => {
    var newregistrationForm = registrationFormDB.push();
  
    newregistrationForm.set({
      firstName: FirstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      parentName:parentName,
      address: address,
      class:classs,
      semester:semester,
      branch:branch,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };