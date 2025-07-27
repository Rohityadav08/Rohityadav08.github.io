let send_button = document.getElementById("send_message");

send_button.addEventListener("click", function(event){
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    let link = `sms:+917738754182?body=Name %3A ${name}%0AEmail %3A ${email}%0ASubject %3A ${subject}%0A${message}`;
    window.location.href = link;
})