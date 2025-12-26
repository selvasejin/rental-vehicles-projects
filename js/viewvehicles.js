
document.querySelectorAll(".vehicle-section").forEach(div => {
    div.addEventListener("click", function () {
      localStorage.setItem("vehicleId",this.id)
      window.location.href = "viewvehicles.html"
    });
  });


