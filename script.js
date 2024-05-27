const myPassword = document.getElementById('myPassword');
const myButton = document.getElementById('myButton');
const contaiNer = document.getElementById('contaiNer');
generate();
function generatePassword(length,includeLowercase,includeUppercase , includeNumbers,includeSymbols )
{
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "@!#$%^&*()?";

    let allowedChars = '';
    let password = '';

    allowedChars += includeLowercase ? lowerChars : '';
    allowedChars += includeUppercase ? upperChars : '';
    allowedChars += includeNumbers ? numberChars : '';
    allowedChars += includeSymbols ? symbolChars : '';

    if(length<=0)
    {
        return `password length atleast 1`;
    }
    if(allowedChars.length === 0)
    {
            return `Atleast one set of character need to be selected`;
    }

    for(let i = 0; i < length ; i++)
        {
            const randomIndex = Math.floor(Math.random()*allowedChars.length);
            password+=allowedChars[randomIndex];
        }
    myPassword.textContent = password;
    function random_bg_color() {
        var box = "0123456789abcdef"; 
        var code = "";
        for(var i = 0;i<6;i++){
            code+=box.charAt(Math.floor(Math.random()*box.length));
        }
        return code;
    }
    function generate(){
        var deg = Math.floor(Math.random()*360);
        var gradient = "linear-gradient("+deg+"deg,"+"#"+random_bg_color()+", "+"#"+ random_bg_color()+")";
        document.body.style.background = gradient;
        document.contaiNer.style.background = gradient;
    }
    window.onload = generate();
}
var passwordLength;
let includeLowercase;
let includeUppercase;
let includeNumbers;
let includeSymbols;
