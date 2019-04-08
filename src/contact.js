

function appendContact(parent) {
  parent.appendChild(contactTitle());
  parent.appendChild(phoneNumber());
  parent.appendChild(contactForm());
}


function contactTitle() {
  let title = document.createElement('h3');
  title.appendChild(document.createTextNode("Reach out to us"));

  return title;
}

function phoneNumber() {
  let container = document.createElement('div');

  let phoneNumberMessage = document.createElement('h5');
  phoneNumberMessage.appendChild(document.createTextNode("Give us a call"));
  container.appendChild(phoneNumberMessage);

  let phoneNumber = document.createElement('h6');
  phoneNumber.appendChild(document.createTextNode("(555) 555-1234"));
  container.appendChild(phoneNumber);

  return container;
}

function contactForm() {
  let form = document.createElement('form');
  form.setAttribute('method', 'post');

  let userName = document.createElement('input');
  userName.setAttribute("type", "text");
  userName.setAttribute("name", "username")
  userName.placeholder = "Your Name";

  let title = document.createElement('input');
  title.setAttribute("type", "text");
  title.setAttribute("name", "title")
  title.placeholder = "Your Title";

  let message = document.createElement('input');
  message.setAttribute("type", "textarea");
  message.setAttribute("name", "title")
  message.placeholder = "Enter your Message";

  let submit = document.createElement('input');
  submit.setAttribute("type", "submit");
  submit.setAttribute("value", "Submit");

  form.appendChild(userName);
  form.appendChild(title);
  form.appendChild(message);
  form.appendChild(submit);

  return form;
}


export {appendContact};