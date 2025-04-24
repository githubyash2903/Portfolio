document.getElementById("nav-items")?.addEventListener("click", function (event) {
    const targetId = event.target.getAttribute("data-target");
    if (targetId) {
        document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    }
});


document.getElementById("contact").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var formData = new FormData(event.target);
    var formValues = {};
    
    formData.forEach(function(value, key) {
      formValues[key] = value;
    });

    console.log(formValues); 

    event.target.reset();
  });