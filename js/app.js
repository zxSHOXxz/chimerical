let content = document.querySelectorAll(".faq .col .tab .content")
let contentBtn = document.querySelectorAll(".faq .col .tab .tittle i")
let contactBtn = document.querySelectorAll(".contac-btn")
console.log(content,contentBtn);



contentBtn.forEach(element => {
    element.addEventListener("click", _ =>{
        contentBtn.forEach(e => {
            e.classList.remove("active")
        });
        element.classList.add("active")
        content.forEach(e => {
            e.classList.remove("active")
            e.parentElement.classList.remove("bg-light")
        });
        element.parentElement.nextElementSibling.classList.add("active")
        element.parentElement.parentElement.classList.add("bg-light")
    })
});


contactBtn.forEach(element => {
    element.addEventListener("click", _ =>{
        window.open("../pages/contact.html")
    
    })
});

