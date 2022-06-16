const valid = (email, password) => {
  if (!email || !password) return 'Please add all Fields';

  if (!validateEmail(email)) return 'Invalid Emails';

  if (password.length < 6) return 'Password must be at least 6 characters';
};

function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export default valid;
