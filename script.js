function submitForm(event) {
  event.preventDefault();
  const phone = document.getElementById("phone").value;
  const query = document.getElementById("query").value;
  if (phone === "" || query === "") {
    alert("Please fill all the fields!");
    return;
  }
  if (phone.length !== 10) {
    alert("Please enter a valid phone number!");
    return;
  }

  document.getElementById("phone").value = "";
  document.getElementById("query").value = "";
  alert("Your query has been submitted successfully!");
}

function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("hidden");
}
