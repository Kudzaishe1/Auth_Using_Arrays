var Users = [];
function addUser(name,surname,email,age,password)
{
    Users.push({Name:name,
                Surname:surname,
                Email:email,
                Age:age,
                Password:password
               });
}

function Validate()
{
    var Password = document.getElementById("Pssw").value;
    
    var Confirm_Password = document.getElementById("Con-Pssw").value;
    
    if(Password === Confirm_Password)
    {
        window.alert("Congratulations. you have successfuly signed up!");
        addUser(document.getElementById("name").value,
                document.getElementById("srname").value,
                document.getElementById("email").value,
                document.getElementById("age").value,
                Password);
        
    }
    else
    {
         window.alert("Oops! your passwords do not match, please try again");
    }
    
}
