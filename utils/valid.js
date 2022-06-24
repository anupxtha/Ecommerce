export const validRegister = (email, password, name, phone) => {
  if (!email || !password || !name || !phone) return 'Please add all Fields';

  if (!validateEmail(email)) return 'Invalid Emails';

  const validationPassword = validatePassword(password);

  if (!validationPassword.status) return validationPassword.errors[0];
  // if (password.length < 6) return 'Password must be at least 6 characters';
};

export const validLogin = (email, password) => {
  if (!email || !password) return 'Please add all Fields';
};

function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validatePassword(p) {
  //var p = document.getElementById('newPassword').value,
  const errors = [];
  if (p.length < 8) {
    errors.push('Password must be at least 8 characters');
  }
  if (p.length > 32) {
    errors.push('Password must be at max 32 characters');
  }
  if (p.search(/[a-z]/) < 0) {
    errors.push('Password must contain at least one lower case letter.');
  }
  if (p.search(/[A-Z]/) < 0) {
    errors.push('Password must contain at least one upper case letter.');
  }

  if (p.search(/[0-9]/) < 0) {
    errors.push('Password must contain at least one digit.');
  }
  if (p.search(/[!@#\$%\^&\*_]/) < 0) {
    errors.push(
      'Password must contain at least special char from -[ ! @ # $ % ^ & * _ ]'
    );
  }
  if (errors.length > 0) {
    console.log(errors.join('\n'));
    return { status: false, errors: errors };
  }
  return { status: true, errors: [] };
}
