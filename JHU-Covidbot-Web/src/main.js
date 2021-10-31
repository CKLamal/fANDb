import Vue from "vue";
import App from "./Views/App.vue";

import config from "./Config";
import translations from "./Translations/translations.json";
import { register_service_worker } from "./Utils";
import axios from 'axios';

register_service_worker();

Vue.config.productionTip = false;
Vue.prototype.config = config; // <- set config to global scope
Vue.prototype.translations = translations; // <- set translations to global scope

/* (global) This code is going to tell us, if history mode can be activated on the client, so the application can be consumed without sessionStorage */
Vue.prototype.history = () => {
  //return false;
  console.log("enter histroy function")
  try {
    sessionStorage.getItem("check");
    console.log("exit histroy function")
    return true;
  } catch {
    return false;
  }
  
};

/* (global) Currently selected language or fallback language (en). Needs to be a function, since it's reactive. No need for vuex there */
Vue.prototype.lang = () => {
  if (Vue.prototype.history())
    return sessionStorage.getItem("lang") || config.fallback_lang;
  return config.fallback_lang;
};

Vue.use(
  {
    install (Vue){
      Vue.prototype.$api = axios.create(
        {baseURL: "http://127.0.0.1:5000/api/"}
      )
    }
  }
)

new Vue({ render: (h) => h(App) }).$mount("#app");
