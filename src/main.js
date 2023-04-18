import { createApp } from 'vue'
import './style.css'
import './reset.css'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
/* import specific icons */
import { faFacebook, faWhatsapp, faInstagram, faYoutube, faVk } from '@fortawesome/free-brands-svg-icons';
/* add icons to the library */
library.add(faFacebook, faWhatsapp, faInstagram, faYoutube, faVk);

	

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
