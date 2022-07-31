let addbtn = document.querySelector(".add-btn");
let modalcont = document.querySelector (".modal-cont");
let maincont = document.querySelector (".main-cont");
let textareacont = document.querySelector (".textarea-cont");
let addFlag = false;

addbtn.addEventListener("click",(e) => {

//addFlag, true -> modal display
//addFlag, false ->modal none
addFlag = !addFlag;
if (addFlag) {
    modalcont.style.display = "flex";
}
else {

    modalcont.style.display = "none";
}

})
modalcont.addEventListener("keydown", (e) => {
    let key = e.key;
    if (key === "Enter") {
        createTicket();
modalcont.style.display = "none";
addFlag = false;
textareacont.value = ""

    }
})

function createTicket(){
let ticketcont = document.createElement("div");
ticketcont.setAttribute("class", "ticket-cont");
ticketcont.innerHTML  = `  
<div class="ticket-cont">
<div class="ticket-color"></div>
<div class="ticket-id ">#sample_id</div>
<div class="task-area">
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae est, doloribus sunt illo labore ipsum minima optio illum expedita ex sit aspernatur facilis rerum nostrum recusandae debitis necessitatibus dolorum veritatis.

</div>
`;
maincont.appendChild(ticketcont);
}

