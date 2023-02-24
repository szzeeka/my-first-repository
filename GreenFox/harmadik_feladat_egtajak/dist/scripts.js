let number = 10;
if (number > 100) {
    $(".east").text('wow, de nagy szám');
} else {
    $(".east").text('ez csak egy közönséges szám');
};

let color = 'purple';
if (color==="purple") {
    $(".north").css("background", "purple");
};

let word = 'cool'
if (word==="cool") {
    $(".south").text('A DOM Ereje');
} else {
    $(".west").text('A DOM Ereje');
};
