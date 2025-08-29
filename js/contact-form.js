const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", async function (e) {
    e.preventDefault(); // Prevent page reload

    const formData = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value
    };

    try {
      const response = await fetch("https://formspree.io/f/mnnzplyb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        status.style.color = "green";
        status.textContent = "✅ Your message has been sent successfully!";
        form.reset();
      } else {
        status.style.color = "red";
        status.textContent = "❌ Something went wrong. Please try again.";
      }
    } catch (error) {
      status.style.color = "red";
      status.textContent = "❌ An error occurred. Please try again.";
    }
  });