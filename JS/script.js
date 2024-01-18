document.body.onclick = (event)=> {
    const elem = event.target;
    if (elem.classList.contains('token')) {
        console.log(elem); 
        navigator.clipboard.writeText('0x13db4966643bf4182d49475ec905f354e386e048b375d2cd6e3822bd228d8f1')
    }

    if (elem.classList.contains('token')) {
        const tooltip = document.getElementById("token");
        tooltip.innerHTML = "Copied to clipboard!";
    }
    

}