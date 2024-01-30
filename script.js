// Get all elements with class="tabcontent" and hide them

// var tabcontent = document.getElementsByClassName("tabcontent");
// for (var i = 0; i < tabcontent.length; i++) {
//   tabcontent[i].style.display = "none";
// }

function deleting() {
  var cityName = this.textContent;
  var tabcontent = document.getElementsByClassName("tabcontent");
  for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  var selectedTab = document.getElementById(cityName);
  if (selectedTab) {
    selectedTab.style.display = "block";
  }
}

// Get all elements with class="tablink" and attach event listeners
var tablinks = document.getElementsByClassName("tablink");
for (var i = 0; i < tablinks.length; i++) {
  tablinks[i].addEventListener("click", deleting);
}

// Function to open the default tab
function openDefaultTab() {
  document.getElementById("defaultOpen").click();
}

// Call the function to open the default tab
openDefaultTab();
