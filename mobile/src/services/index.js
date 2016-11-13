import Resources  from './Resources';

let Alert = (msg, t=5000) => { setTimeout(() => { alert(msg); }, t) }


export function userSignUp (data, callback) {
  xhr = new XMLHttpRequest();
  xhr.open('POST', Resources.user);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function(response) {
    if (xhr.status === 201) {
      console.log('New user has been created :', data, response);
      Alert(`Congratulation ${data.username} ! You created a new account.`);
    }
    if (xhr.status === 409) {
      console.log('This email already used :', data, response);
      Alert(`Conflict Error ! This Email ${data.email} is already used.`);
    }
    if (xhr.status === 500) {
      console.log('Internal Server Error !', data, response);
      Alert('Internal Server Error ! An unexpected condition was encountered.');
    }
    callback();
  };
  xhr.onerror = function(error) {
    console.log('User register account error :', error.target._response, error);
    Alert("Network Problem ! External services can't be reached.");
    callback();
  };
  xhr.send(JSON.stringify(data));
}

export function userSignIn (data, callback) {
  xhr = new XMLHttpRequest();
  xhr.open('POST', Resources.login);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function(response) {
    if (xhr.status === 200) {
      console.log('User Logged in :', data, response);
      Alert(`Congratulation ${data.username} ! You created a new account.`);
    }
    if (xhr.status === 500) {
      console.log('Internal Server Error !', data, response);
      Alert('Internal Server Error ! An unexpected condition was encountered.');
    }
    if (xhr.status !== 200 && xhr.status !== 500) {
      console.log('Let treat this error:', data, response);
      Alert(`New Error to treat.`);
    }
    callback();
  };
  xhr.onerror = function(error) {
    console.log('User register account error :', error.target._response, error);
    Alert("Network Problem ! External services can't be reached.");
    callback();
  };
  xhr.send(JSON.stringify(data));
}
