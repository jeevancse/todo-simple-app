const SignUpError = (value) => {
  let error = {};
  if (!value.name) {
    error.message = "Name is required !";
  }
  else if (!value.email) {
    error.message = "Email is required !";
  }
  else if (!value.password) {
    error.message = "Password is required !";
  }
return error;
  
};

export default SignUpError;
