import {appendFrame} from './base-frame'
import {appendAbout} from './about'

const content = document.getElementById('content');

appendFrame(content);
const mainContent = document.querySelector('.main-content');
appendAbout(mainContent);