const Details = document.querySelectorAll(".Detail");

Details.forEach(Detail => {
    Detail.addEventListener("click", () => {
        Detail.classList.toggle("active");
    });
});


var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}


const checkbox = document.querySelector('input[type="checkbox"]');
const content = document.querySelector('.content');

checkbox.addEventListener('change', function() {
    if(this.checked) {
        document.body.classList.add('dark-theme');
        content.classList.add('dark-content');
    } else {
        document.body.classList.remove('dark-theme');
        content.classList.remove('dark-content');
    }
});


