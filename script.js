function maskaadhar()
{
    const input=document.getElementById("aadharinput").value.trim();
    const output=document.getElementById("maskedoutput");
    if(input.length!==12 )
    {
        output.textContent="Please enter a valid 12-digit aadhar number";
        output.style.color="red";
        return;
    }
     
        const last4=input.slice(-4)
        const masked="********"+last4;
        output.textContent=`masked aadhar:${masked}`;
        output.style.color="green"
    
}
