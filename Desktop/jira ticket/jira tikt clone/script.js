let addbtn = document.querySelector(".add-btn");
let removebtn = document.querySelector(".remove-btn");

let modalcont = document.querySelector (".modal-cont");
let maincont = document.querySelector (".main-cont");
let textareacont = document.querySelector (".textarea-cont");
let allprioritycolors= document.querySelectorAll("priority-color")
let lockElem= document.querySelector(".ticket-lock")

let colors=[ "lightpink","lightblue","lightgreen","black" ];
let modalprioritycolor = colors[colors.length-1];

let addFlag = false;
let removeFlag=false;

let lockclass= "fa-lock";
let unlockclass= "fa-lock-open";
allprioritycolors.forEach((colorElem, idx) => {
    colorElem.addEventListener("click", (e) => {
        allprioritycolors.forEach((prioritycolorElem, idx) => {
            prioritycolorElem.classList.remove("border");
        })
        colorElem.classList.add("border");
        modalprioritycolor= colorElem.classList[0];

    })
})



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
removebtn.addEventListener("click",(e) =>{
removeFlag =!removeFlag
})

modalcont.addEventListener("keydown", (e) => {
    let key = e.key;
    if (key === "Enter") {
        createTicket(modalprioritycolor,textareacont.value,shortid());
modalcont.style.display = "none";
addFlag = false;
textareacont.value = ""

    }
})

function createTicket(ticketcolor,ticketTask,ticketID){
let ticketcont = document.createElement("div");
ticketcont.setAttribute("class", "ticket-cont");
ticketcont.innerHTML  = ` 
<div class="ticket-color ${ticketcolor}"></div>
<div class="ticket-id">#${ticketID}</div>
<div class="task-area"> ${ticketTask}</div>
<div class="ticket-lock">
<i class="fa-solid fa-lock"></i>
</div>

`;
maincont.appendChild(ticketcont);

handleRemoval (ticketcont)
handlelock (ticketcont);

}
function handleRemoval(ticket) {

    if (removeFlag) ticket.remove();
} 
function handlelock (ticket) {
    let ticketlockElem= ticket.querySelector(".ticket-lock");
    let ticketlock= ticketlockElem.children[0];
ticketlock.addEventListener("click",(e) =>{
if(ticketlock.classList.contains(lockclass)){
    ticketlock.classList.remove(lockclass); 
    ticketlock.classList.add(unlockclass); 

}
else {
    ticketlock.classList.remove(unlockclass); 
    ticketlock.classList.add(lockclass); 
}
})


























}
