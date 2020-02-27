if (document.getElementById("actual_status").textContent === "Online") {
document.getElementById("actual_status").style.color="green";
}
else if  (document.getElementById("actual_status").textContent === "Offline") {
document.getElementById("actual_status").style.color="red";
}
else {document.getElementById("actual_status").style.color="black";
}