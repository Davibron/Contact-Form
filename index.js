//CHECKBOX FUNCTIONALITY!!
// Function to toggle the active class on both container and checkbox
function toggleActiveClass(event) {
  const element = event.currentTarget;
  element.classList.toggle('active');
  const checkbox = element.querySelector('.checkbox');
  if (checkbox) {
    // Check if checkbox already has 'active' class
    if (checkbox.classList.contains('active')) {
      checkbox.classList.remove('active');
    } else {
      checkbox.classList.add('active');
    }
  }
}
// Add event listeners to all checkbox containers
const containers = document.querySelectorAll('.checkbox-container');
containers.forEach(container => {
  container.addEventListener('click', toggleActiveClass);
});

// Function to handle consent checkbox separately
function toggleConsentCheckbox(event) {
  const checkbox = event.currentTarget;
  const consentContainer = checkbox.closest('#consent');
  consentContainer.classList.toggle('active');
  checkbox.classList.toggle('active');
  event.stopPropagation();
}

// Add event listener to the consent container
const consentContainer = document.getElementById('consent');
consentContainer.addEventListener('click', () => {
  consentContainer.classList.toggle('active');
  const checkbox = consentContainer.querySelector('.checkbox');
  checkbox.classList.toggle('active');
});
consentContainer.querySelector('.checkbox').addEventListener('click', toggleConsentCheckbox);
consentContainer.querySelector('img').addEventListener('click', (event) => {
  const checkbox = event.currentTarget.parentElement;
  const consentContainer = checkbox.closest('#consent');
  consentContainer.classList.toggle('active');
  checkbox.classList.toggle('active');
  event.stopPropagation();
});
//END!!

//REFRESH AND SUCCESS MESSAGE!!
const submitButton = document.getElementById('submit');
const successMessage = document.getElementById('success-message');
const formInputs = document.querySelectorAll('input[type="text"], input[type="email"], textarea');

submitButton.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default form submission

  let hasError = false; // Flag to track validation errors

  // Validate input fields
  formInputs.forEach(input => {
    if (input.value.trim() === '') {
      hasError = true;
      showError(input.parentElement);
    } else {
      hideError(input.parentElement);
    }
  });
  
  // Show success message or display validation errors
  if (!hasError) {
    // Form is valid, potentially submit form data (replace with your logic)
    console.log('Form submitted successfully!'); // Simulate form submission
    successMessage.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => successMessage.style.display = 'none', 3000); // Changed to 3 seconds for demonstration
  } else {
    console.log('Validation errors!'); // Log for debugging purposes
  }
});

function showError(container) {
  container.querySelector('.error-message').style.display = 'block';
}

function hideError(container) {
  container.querySelector('.error-message').style.display = 'none';
}