let nameList = ["Zita", "Péter", "Viktória", "Balázs", "Klára", "Ágnes"];

nameList.forEach(name =>{
console.log(name);
});

nameList.forEach(function(name) {
  let li = document.createElement("li");
  let text = document.createTextNode(name);
  li.appendChild(text);
  document.getElementById("myUl").appendChild(li);
});

let post = {
    title: "Beillesztve JavaScripttel",
    text: "Ez a blokk a JavaScript jQuery könyvtárával lett beillesztve. Király!",
  };

$('body').append(
    `<h1>${post.title}</h1>`
    );

  $('body').append(
    `<p>${post.text}</p>`
  );