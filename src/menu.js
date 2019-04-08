

function appendMenu(parent) {

  parent.appendChild(setMenu())
}

function setMenu(){
  let container = document.createElement('div');

  container.appendChild(menuItem("burger"));
  container.appendChild(menuItem("ribs"));
  container.appendChild(menuItem("steak"));
  container.appendChild(menuItem("fish"));
  container.appendChild(menuItem("ice-cream"));
  container.appendChild(menuItem("pie"));

  return container;
}

function menuItem(menuItem) {
  
  let item = document.createElement('div');
  item.className = "menu-items";

  let itemImg = document.createElement('div');
  itemImg.className = "menu-imgs";
  itemImg.id = `menu-${menuItem}`;

  item.appendChild(itemImg);

  let details = document.createElement('div');
  details.className = "menu-details";

  let detailsHead = document.createElement('h3');
  detailsHead.appendChild(document.createTextNode(menuHeader(menuItem)));
  details.appendChild(detailsHead);

  let detailsIngred = document.createElement('p');
  detailsIngred.appendChild(document.createTextNode(menuIngredients(menuItem)));
  details.appendChild(detailsIngred);

  let detailsPrice = document.createElement('h4');
  detailsPrice.appendChild(document.createTextNode(menuPrice(menuItem)));
  details.appendChild(detailsPrice);

  item.appendChild(details);
  return item;

  function menuHeader(item) {
    let title = "";
  
    switch(item){
      case "burger":
        title = "Big Burger"
        break;
      case "ribs":
        title = "Lamb Ribs"
        break;
      case "steak":
        title = "New York Strip"
        break;
      case "fish":
        title = "Swordfish"
        break;
      case "ice-cream":
        title = "Raspberry Delight"
        break;
      case "pie":
        title = "Lemon Pie"
        break;
    }
  
    return title;
  }
  
  function menuIngredients(item) {
    let details = "";
  
    switch(item){
      case "burger":
        details = "Brioche Bun | 1/2 Patty | Lettuce | Tomato | Onion Crisps | Bacon | House Fries";
        break;
      case "ribs":
        details = "Half Slab | Honey BBQ | House Fries | Tomato | Green Onions";
        break;
      case "steak":
        details = "House BBQ Seasonings | Asparagus | Carrots | Onions";
        break;
      case "fish":
        details = "House Red Wine Sauce | Zucchini | Red Peppers | Onions | Spinach";
        break;
      case "ice-cream":
        details = "Raspberry Ice Cream | Raspberries | Blueberries | Caramel | Granola";
        break;
      case "pie":
        details = "Lemon Filling | Granola Crust | Whipped Cream | Powdered Sugar Cane";
        break;
    }
  
    return details;
  }
  
  function menuPrice(item) {
    let price = "";
  
    switch(item){
      case "burger":
        price= "$15";
        break;
      case "ribs":
        price= "$20";
        break;
      case "steak":
        price= "$25";
        break;
      case "fish":
        price= "$20";
        break;
      case "ice-cream":
        price= "$10";
        break;
      case "pie":
        price= "$10";
        break;
    }
  
    return price;
  }
}








export{appendMenu};