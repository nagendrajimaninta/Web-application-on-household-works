function validation(){
    var name = document.myform.name.value;
    var password = document.myform.password.value;
    var password2 = document.myform.password2.value;
    
    if(name==null||name==""){
        alert("Name can't be blank");
        return false;
    }else if(password.length<6){
        alert("Password must be atleast 6 characters");
        return false;
    }
    else if(password!=password2){
        alert("Yours is wrong.Passwords must be same")
        return false;
    }
    
}