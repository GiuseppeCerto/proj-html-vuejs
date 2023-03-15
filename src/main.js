import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faNetworkWired } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faChartSimple } from '@fortawesome/free-solid-svg-icons'
import { faPlane } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons'
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'


library.add(faClock,faPhone,faEnvelope,faFacebookF,faTwitter,faLinkedinIn,faUser,faPlay,faNetworkWired,faArrowRight,faBriefcase,faChartSimple,faPlane,
    faGlobe,faBoxOpen,faQuoteRight,faChevronDown,faLocationDot,faChevronRight,faCopyright)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
