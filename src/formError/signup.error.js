const SignUpError = (value, setErrorFocus) => {
  let error = {};
  let regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!value.name) {
    error.message = "Name is required field.";
    error.key = "name";
  } else if (!value.email) {
    error.message = "Email is required field";
    error.key = "email";
  } else if (!value.password) {
    error.message = "Password is required field.";
    error.key = "password";
  } else if (!regEmail.test(value?.email)) {
    error.message = "Please enter a valid email.";
    error.key = "email";
  }
  return error;
};

export default SignUpError;
