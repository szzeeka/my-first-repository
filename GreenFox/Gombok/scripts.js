$('.firstbutton').click(() => {

    console.log("Igen, most rámkattintottál");
});

$('.secondbutton').click(() => {

    $('.firstbutton').text('Vicces gomb');
});

$('.thirdbutton').click(() => {

    $("button").css("background", "yellow");
});


function changeBackground() {
    let color = document.getElementById("color").value;

    document.getElementById("submitColor").style.background=color;
}
document.getElementById("submitColor").addEventListener
("click", changeBackground, false);
