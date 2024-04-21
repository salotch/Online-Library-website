function checkEquality() {
        var input1 = document.getElementById('passd1').value;
        var input2 = document.getElementById('passd2').value;
        var m = document.getElementById('m');

        if (input1 !== input2) {
            m.textContent = "Confirm Passwords do not match Password!";
            return false;
        }
        else
        {
            window.open("login.html","-blank");
            
        }
    }
