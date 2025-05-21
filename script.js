const validationForm = () => {
  document.getElementById('submitBtn').addEventListener('click', () => {
    if (
      !document.getElementById('name').value ||
      !document.getElementById('email').value ||
      !document.getElementById('message').value
    ) {
      console.error('Please fill all required fields!');
    } else {
      console.log(
        'Thank you, We received your message & will get back to you soon'
      );
    }
  });
};


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript is working!');
  validationForm();
});
