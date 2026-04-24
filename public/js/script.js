// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    "use strict";
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll(".needs-validation");
  
    // Loop over them and prevent submission
    Array.from(forms).forEach((form )=> {
      form.addEventListener("submit", (event )=> {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
  
        form.classList.add("was-validated");
      }, false);

    });
  })();

document.querySelectorAll(".review-stars").forEach((starGroup) => {
  const inputSelector = starGroup.dataset.ratingInput;
  const ratingInput = inputSelector
    ? document.querySelector(inputSelector)
    : null;

  if (!ratingInput) return;

  const starButtons = Array.from(
    starGroup.querySelectorAll(".review-star-btn")
  );

  const paintStars = (selectedValue) => {
    starButtons.forEach((button) => {
      const isActive = Number(button.dataset.value) <= selectedValue;
      button.classList.toggle("is-active", isActive);
    });
  };

  starButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedValue = Number(button.dataset.value);
      ratingInput.value = String(selectedValue);
      paintStars(selectedValue);
    });
  });
});
