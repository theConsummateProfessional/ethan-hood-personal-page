var type_writer_element = document.getElementById("typewriter");

text_array = ["Ethan Hood", "Software Engineer", "in training..."];

function type_writer(text, i, cb) {

}

var about = document.getElementById("about");
var exp = document.getElementById("exp");
var proj = document.getElementById("proj");
var contact = document.getElementById("contact");

about.addEventListener("click", () => {

    document.getElementById("text_display").innerHTML = `
        eph$ cat about_me.txt <br>
        My name is Ethan Hood, and I am currently a Computer Science Major at the University of North Alabama
    `;
});

exp.addEventListener("click", () => {
    document.getElementById("text_display").innerHTML = `
    eph$ cat experience.txt <br />
    I worked at a few places...
    `
})

proj.addEventListener("click", () => {
    document.getElementById("text_display").innerHTML = `
    eph$ open projects.pdf <br />
    Here are projects with some pictures
    `
})

contact.addEventListener("click", () => {
    document.getElementById("text_display").innerHTML = `
    eph$ ./contact_form <br />
    Here is a contact form
    `
})