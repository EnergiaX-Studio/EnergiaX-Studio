document.addEventListener("DOMContentLoaded", function() {
  fetch("/src/partial/header.html")
    .then(response => response.text())
    .then(data => {
      document.body.insertAdjacentHTML("afterbegin", data);
    })
    .catch(error => console.log(error));
});
