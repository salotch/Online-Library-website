function storeData(){
    data={
        Password :document.getElementById('Passd').value,
        username :document.getElementById('user').value,

    };
    var me= document.getElementById('eml');
    var mesg= document.getElementById('pd');
    if(data.username=="")
    {
        me.innerHTML = "Email cannot be empty!";
        return false;
    }
    else
    {
        mesg.innerHTML=""
    }
    if(data.Password=="")
    {
        mesg.innerHTML = "Passwword cannot be empty!";
        return false;
    }
    else
    {
        me.innerHTML=""
    }
    
    var userData = JSON.parse(localStorage.getItem('userData'));
    var flag=false;
    for(let i=0;i<userData.length;i++)
    {
        if(data.username===userData[i].email)
        {
            flag=true;
            if(data.Password!==userData[i].Password){
                mesg.innerHTML="Wrong password!";
                return false;
            }
            else{
                mesg.innerHTML="";
                if(userData[i].is_admin)
                window.open("AdminNavBar.htm","_blank");
                else
                window.open("UserNavBar.html","_blank");
                return true;
            }

        }
    }
    if(!flag){
    me.innerHTML = "Email does not exist!";
    return false;
    }
}