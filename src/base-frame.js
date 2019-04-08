
function appendFrame(content) {
  content.appendChild(heroLeft());
  content.appendChild(heroMain());
  content.appendChild(heroRight());
  content.appendChild(heroCaption());
  content.appendChild(mainTabs());
  content.appendChild(mainContent());
  content.appendChild(footerContent());
}

function heroLeft() {
  let heroLeft = document.createElement('div');
  heroLeft.className = "hero-left";
  return heroLeft;
}

function heroMain() {
  let heroMain = document.createElement('div');
  heroMain.className = "hero-main";

  let title = document.createElement('h1');
  title.appendChild(document.createTextNode("Fine Dining Restaurant"));

  heroMain.appendChild(title);
  return heroMain;
}

function heroRight() {
  let heroRight = document.createElement('div');
  heroRight.className = "hero-right";
  return heroRight;
}

function heroCaption() {
  let heroCaption = document.createElement('div');
  heroCaption.className = "hero-caption";

  let captionText = document.createElement('h2');
  captionText.appendChild(document.createTextNode("- With a name like Restaurant, it has to be good -"));

  heroCaption.appendChild(captionText);
  return heroCaption;
}

function mainTabs() {
  let tabDiv = document.createElement('div');
  tabDiv.className = "tabs"

  let aboutTab = document.createElement('button');
  aboutTab.className = "tabLinks";
  aboutTab.id = "aboutTab";
  aboutTab.onclick = ""
  aboutTab.appendChild(document.createTextNode("About"));
  tabDiv.appendChild(aboutTab);

  let menuTab = document.createElement('button');
  menuTab.className = "tabLinks";
  menuTab.id = "menuTab";
  menuTab.appendChild(document.createTextNode("Menu"));
  tabDiv.appendChild(menuTab);

  let contactTab = document.createElement('button');
  contactTab.className = "tabLinks";
  contactTab.id = "contactTab";
  contactTab.appendChild(document.createTextNode("Contact"));
  tabDiv.appendChild(contactTab);

  return tabDiv;
}

function mainContent() {
  let mainContent = document.createElement('div');
  mainContent.className = "main-content";
  return mainContent;
}

function footerContent() {
  let footerContent = document.createElement('footer');
  
  let footText = document.createElement('h5')
  footText.appendChild(document.createTextNode("-  The finest food you will never eat  -  Created by Eric Szywala @github/ricala"));
  
  footerContent.appendChild(footText);
  return footerContent;
}

export {
  appendFrame
}