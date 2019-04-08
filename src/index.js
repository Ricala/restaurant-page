import {appendFrame} from './base-frame'
import {appendAbout} from './about'
import {appendMenu} from './menu'
import {appendContact} from './contact'

const content = document.getElementById('content');
appendFrame(content);

const mainContent = document.querySelector('.main-content');
appendAbout(mainContent)

const aboutBtn = document.querySelector('#aboutTab');
const menuBtn = document.querySelector('#menuTab');
const contactBtn = document.querySelector('#contactTab');

const switchTabs = (() => {
  aboutBtn.addEventListener('click',function(){manageChildren('about'), switchButtons('about')}, false);
  menuBtn.addEventListener('click',function(){manageChildren('menu'), switchButtons('menu')}, false);
  contactBtn.addEventListener('click',function(){manageChildren('contact'), switchButtons('contact')}, false);

  //set initial tab to about
  switchButtons("about");

  function manageChildren(child) {
    removeChildren();
    addChild(child);
  }

  function removeChildren() {
    while(mainContent.firstChild) {
        mainContent.removeChild(mainContent.firstChild);
       }
  }

  function addChild(child) {
    if(child == "about") { 
      appendAbout(mainContent); }
    else if(child == "menu") {
      appendMenu(mainContent);
    }
    else{
      appendContact(mainContent);
    }
  }

  function switchButtons(btn) {
    if (btn == "about") {
      aboutBtn.style.backgroundColor= "rgb(238, 211, 188)";
      menuBtn.style.backgroundColor= "rgb(202, 164, 134)"
      contactBtn.style.backgroundColor= "rgb(202, 164, 134)"

    } else if (btn == "menu") {
      menuBtn.style.backgroundColor = "rgb(238, 211, 188)";
      aboutBtn.style.backgroundColor= "rgb(202, 164, 134)";
      contactBtn.style.backgroundColor= "rgb(202, 164, 134)"

    } else {
      contactBtn.style.backgroundColor= "rgb(238, 211, 188)"
      aboutBtn.style.backgroundColor= "rgb(202, 164, 134)";
      menuBtn.style.backgroundColor= "rgb(202, 164, 134)"
    }
  }
})();




