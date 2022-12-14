const formRef = document.querySelector('.login-form');


formRef.addEventListener('submit', onFormSubmit);



function onFormSubmit(event) {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;
  if (email.length === 0 || password.length === 0) {
    alert('Заповніть всі поля');
  };

  const formData = {
    email,
    password
  };

  console.log(formData);

  formRef.reset();

}