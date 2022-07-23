var firebaseConfig = {
      apiKey: "AIzaSyCQxOSwgXOEMNRY9Q1sRy0wt4Tw6VdrBl8",
      authDomain: "kwitter-8c3a8.firebaseapp.com",
      databaseURL: "https://kwitter-8c3a8-default-rtdb.firebaseio.com",
      projectId: "kwitter-8c3a8",
      storageBucket: "kwitter-8c3a8.appspot.com",
      messagingSenderId: "781064214148",
      appId: "1:781064214148:web:e6819aa2bd1f3bdc3fd4d1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//YOUR FIREBASE LINKS

room_name = localStorage.getItem("room_name")
user_name = localStorage.getItem("user_name")

function send() {
      msg = document.getElementById("msg").value
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      })
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        console.log(message_data)
                        name1=message_data["name"]
                        message=message_data["message"]
                        like=message_data["like"]
                        //End code
                  }
            });
      });
}
getData();

function logOut() {
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")

      window.location = "index.html"
}