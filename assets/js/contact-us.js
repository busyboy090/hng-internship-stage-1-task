const contatctForm = document.querySelector("#contact-form");

contatctForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let valid = true;

  // Get inputs
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");
  const successMessage = document.querySelector(".success-message");

  // Get error spans
  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const subjectError = document.getElementById("subject-error");
  const messageError = document.getElementById("message-error");

  // Reset error messages
  nameError.textContent = "";
  emailError.textContent = "";
  subjectError.textContent = "";
  messageError.textContent = "";
  successMessage.textContent = "";

  // Validate Name
  if (name.value.trim() === "") {
    nameError.textContent = "Name is required.";
    valid = false;
  }

  // Validate Email
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email.value.trim() === "") {
    emailError.textContent = "Email is required.";
    valid = false;
  } else if (!email.value.match(emailPattern)) {
    emailError.textContent = "Please enter a valid email address.";
    valid = false;
  }

  // Validate Subject
  if (subject.value.trim() === "") {
    subjectError.textContent = "Subject is required.";
    valid = false;
  }

  // Validate Message
  if (message.value.trim() === "") {
    messageError.textContent = "Message is required.";
    valid = false;
  } else if (message.value.trim().length < 10) {
    messageError.textContent = "Message must be at least 10 characters long.";
    valid = false;
  }

  if (valid == true) {
    successMessage.style.display = "block";
    successMessage.textContent =
      "Thank you for contacting us! We will get back to you shortly.";
    contatctForm.reset();
  }

});

// test script
function test () {
    const testIds = [
        "test-contact-name",
        "test-contact-email",
        "test-contact-subject",
        "test-contact-message",
        "test-contact-submit",
        "test-contact-error-name",
        "test-contact-error-email",
        "test-contact-error-subject",
        "test-contact-error-message",
        "test-contact-success"
    ]

    for (const id of testIds) {
        const element = document.querySelector(`[data-testid="${id}"]`);
        if(element) {
            console.log(`Element with data-testid="${id}" found.`);
        } else {
            console.log(`Element with data-testid="${id}" not found.`)
        }
    }
}

test()
