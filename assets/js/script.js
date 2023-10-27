document.addEventListener("DOMContentLoaded", () => {
  // Toggle modal
  document.querySelector("#modalBtn").addEventListener("click", () => {
    document.querySelector("div.modal").classList.toggle("modal-show");
  });

  // Contact Form submit

  document
    .querySelector("#contactForm")
    .addEventListener("submit", async (e) => {
      e.preventDefault();

      const data = {
        firstname: document.querySelector("#firstname").value,
        lastname: document.querySelector("#lastname").value,
        email: document.querySelector("#email").value,
        message: document.querySelector("#message").value,
      };

      const response = await axios.post("http://localhost:3000/form", data);
      console.log(response);
    });
});
