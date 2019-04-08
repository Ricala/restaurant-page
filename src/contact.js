

function appendContact(parent) {
  parent.appendChild(contactTitle());
  parent.appendChild(phoneNumber());
  parent.appendChild(contactForm());
}


function contactTitle() {
  let title = document.createElement('h3');
  title.id = "contact-title"
  title.appendChild(document.createTextNode("Reach Out To Us"));

  return title;
}

function phoneNumber() {
  let container = document.createElement('div');
  container.id = "phone";

  let phoneNumber = document.createElement('h6');
  phoneNumber.appendChild(document.createTextNode("(555) 555-1234"));
  container.appendChild(phoneNumber);

  return container;
}

function contactForm() {
  let form = document.createElement('form');
  form.setAttribute('method', 'post');
  form.className ="contact-form";

  let userNameDisplay = document.createElement('h4');
  userNameDisplay.appendChild(document.createTextNode("Name:"))

  let userName = document.createElement('input');
  userName.setAttribute("type", "text");
  userName.setAttribute("name", "username")
  userName.placeholder = "John Smith";

  let emailDisplay = document.createElement('h4');
  emailDisplay.appendChild(document.createTextNode("Email:"))

  let email = document.createElement('input');
  email.setAttribute("type", "text");
  email.setAttribute("name", "email")
  email.placeholder = "Jsmith@fake.com";

  let messageDisplay = document.createElement('h4');
  messageDisplay.appendChild(document.createTextNode("Message:"))

  let message = document.createElement('textarea');
  message.setAttribute("type", "textarea");
  message.setAttribute("name", "title");
  message.id = "message-area"
  message.placeholder = "Your message..";

  let submit = document.createElement('input');
  submit.setAttribute("type", "submit");
  submit.setAttribute("value", "Send your message");

  form.appendChild(userNameDisplay);
  form.appendChild(userName);
  form.appendChild(emailDisplay);
  form.appendChild(email);
  form.appendChild(messageDisplay);
  form.appendChild(message);
  form.appendChild(submit);

  return form;
}


export {appendContact};