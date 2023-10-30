document.addEventListener("DOMContentLoaded", () => {
  // Toggle modal

  const toggleModal = () => {
    document.querySelector("div.modal").classList.toggle("modal-show");
  };

  document.querySelector("#modalBtn").addEventListener("click", toggleModal);
  document.querySelector(".icon-times").addEventListener("click", toggleModal);

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
