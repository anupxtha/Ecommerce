const valid = (email, password, name, phone) => {
  if (!email || !password || !name || !phone) return 'Please add all Fields';

  if (!validateEmail(email)) return 'Invalid Emails';

  if (!isValidPassword(password))
    return 'Password must be Minimum 8 characters, at least 1 letter, 1 number and 1 special character';
  // if (password.length < 6) return 'Password must be at least 6 characters';
};

function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function isValidPassword(password) {
  const strongRegex = new RegExp(
    '^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$'
  );
  return strongRegex.test(password);
}
export default valid;
