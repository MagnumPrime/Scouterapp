import Vue from "nativescript-vue";

import Home from "./components/Home";
import Login from "./components/Login";

let firebase = require("nativescript-plugin-firebase");
firebase
  .init({
    // Optionally pass in properties for database, authentication and cloud messaging,
    // see their respective docs.
  })
  .then(
    function(instance) {
      console.log("firebase.init done");
    },
    function(error) {
      console.log("firebase.init error: " + error);
    }
  );

new Vue({

    template: `
        <Frame>
            <Login />
        </Frame>`,

    components: {
        Home,
        Login
    }
}).$start();
