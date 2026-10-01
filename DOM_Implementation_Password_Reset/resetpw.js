/***
  code for show/hide password
***/

// getting span object
const sp = document.querySelector("#msg");

// attaching event handler
sp.onclick = function () {

    // getting new-pwd object
    const npw = document.querySelector("#npwd");

    console.log(npw.type, npw.id, npw.name, npw.placeholder);

    // checking input type
    if (npw.type === 'password') {

        // changing input type to textbox
        npw.type = `text`;

        // updating span msg
        sp.textContent = `Hide`;

    } else if (npw.type === 'text') {

        // changing input type to password
        npw.type = `password`;

        // updating span msg
        sp.textContent = `Show`;
    }
}


/***
  checking new password & confirm password
***/

// getting form object & event handler
// document.forms[0] Or
document.querySelector("#frm").addEventListener("submit", function (evnt) {

    // local vars
    let npw, cpw;

    // getting password & confirm password values
    npw = document.getElementById("npwd").value;
    cpw = document.getElementById("cpwd").value;

    // checking passwords are matching or not
    if (npw !== cpw) {
        alert("Both Passwords are not same!!!");
        evnt.preventDefault(); // don't submit the form
    }
});