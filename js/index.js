const init = () => {
  var firebaseConfig = {
    apiKey: "AIzaSyANQhA4crepnHHockTDu0a67enD_EHfZJk",
    authDomain: "chat-app-2a578.firebaseapp.com",
    databaseURL: "https://chat-app-2a578.firebaseio.com",
    projectId: "chat-app-2a578",
    storageBucket: "chat-app-2a578.appspot.com",
    messagingSenderId: "171019426687",
    appId: "1:171019426687:web:8797beda76531ee55fd84a",
    measurementId: "G-770R74E9NK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log(firebase.app().name)

  firebase.auth().onAuthStateChanged(user => {
    if(user) {
      document.getElementById('app').innerHTML
      = components.loginSuccess
      view.setErrorMessage('loginSuccess')         
    } else {
      view.setActiveScreen('registerPage')
    }
  })
}
window.onload = init
