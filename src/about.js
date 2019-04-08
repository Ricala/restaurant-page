

function appendAbout(parent){
  
  parent.appendChild(hoursAndLocation());
  parent.appendChild(orderOptions());
  parent.appendChild(testimonials());
}

function hoursAndLocation() {
  let container = document.createElement('section');
  container.className = "hours-loc"
  
  let descripContainer = document.createElement('div');
  descripContainer.className = "main-descrip";
  let descriptText = document.createElement('p');
  descriptText.appendChild(document.createTextNode("Lorem ipsum dolor sit amet, quo vidit dignissim cu, movet rationibus pro in, ut movet repudiandae definitionem sea. In vix illud dicit option, ei alii decore integre pro, est ea affert vituperatoribus. Et per stet viderer vocibus, mea id tale scaevola. Vim choro soleat intellegat ad, vel eu graecis vivendo verterem. Ius delicata efficiendi no."));
  descriptText.appendChild(document.createTextNode(" Lorem ipsum dolor sit amet, quo vidit dignissim cu, movet rationibus pro in, ut movet repudiandae definitionem sea. In vix illud dicit option, ei alii decore integre pro, est ea affert vituperatoribus. Et per stet viderer vocibus, mea id tale scaevola. Vim choro soleat intellegat ad, vel eu graecis vivendo verterem. Ius delicata efficiendi no."));

  descripContainer.appendChild(descriptText);
  container.appendChild(descripContainer);
  
  let hoursContainer = document.createElement("div");
  let hoursText = document.createElement('h4');
  hoursText.appendChild(document.createTextNode("Everyday: Noon - 12 am"));
  hoursContainer.appendChild(hoursText);
  container.appendChild(hoursContainer);

  let addressContainer = document.createElement('div');
  let addressText = document.createElement('h4');
  addressText.appendChild(document.createTextNode("345 Notreal Blvd, West FakeField, CS 45678"));
  addressContainer.appendChild(addressText);
  container.appendChild(addressContainer);



  return container;
}

function orderOptions() {
  let container = document.createElement('section');
  container.className = "order-options"
  let dine = document.createElement('h3');
  dine.appendChild(document.createTextNode("-Dine In-"));
  container.appendChild(dine);

  let delivery = document.createElement('h3');
  delivery.appendChild(document.createTextNode("-Delivery-"));
  container.appendChild(delivery);

  let carryOut = document.createElement('h3');
  carryOut.appendChild(document.createTextNode("-Carry Out-"));
  container.appendChild(carryOut);

  return container;
}

function testimonials() {
  let container = document.createElement('section');
  container.id = "testimonials";

  let firstTest = document.createElement('div');
  firstTest.className = "test-section";

  let firstTestImg = document.createElement('div');
  firstTestImg.className = "test-img";
  firstTestImg.id = "chick-img";
  firstTest.appendChild(firstTestImg);

  let firstTestPara = document.createElement('p');
  firstTestPara.appendChild(document.createTextNode("\"Cluck cluck, worth every buck\""));
  firstTest.appendChild(firstTestPara);

  let firstTestSmall = document.createElement('small');
  firstTestSmall.appendChild(document.createTextNode("-Mr. Chicken"));
  firstTest.appendChild(firstTestSmall);

  container.appendChild(firstTest);

  let secondTest = document.createElement('div');
  secondTest.className = "test-section";

  let secondTestImg = document.createElement('div');
  secondTestImg.className = "test-img";
  secondTestImg.id = "cow-img";
  secondTest.appendChild(secondTestImg);

  let secondTestPara = document.createElement('p');
  secondTestPara.appendChild(document.createTextNode("\"I scream for MOOre ice cream\""));
  secondTest.appendChild(secondTestPara);

  let secondTestSmall = document.createElement('small');
  secondTestSmall.appendChild(document.createTextNode("-Dr. Cow"));
  secondTest.appendChild(secondTestSmall);

  container.appendChild(secondTest);

  let thirdTest = document.createElement('div');
  thirdTest.className = "test-section";

  let thirdTestImg = document.createElement('div');
  thirdTestImg.className = "test-img";
  thirdTestImg.id = "pig-img";
  thirdTest.appendChild(thirdTestImg);

  let thirdTestPara = document.createElement('p');
  thirdTestPara.appendChild(document.createTextNode("\"These burgers make me want to oink\""));
  thirdTest.appendChild(thirdTestPara);

  let thirdTestSmall = document.createElement('small');
  thirdTestSmall.appendChild(document.createTextNode("-Ms. Pig"));
  thirdTest.appendChild(thirdTestSmall);

  container.appendChild(thirdTest);

  return container;
}

export {appendAbout}