//  Prototypical Inheritance pre-ES6

function HtmlElement() {
  this.click = () => console.log("clicked");
}

HtmlElement.prototype.focus = () => console.log("focused");

const htmlElement = new HtmlElement();

function HtmlSelectElement(...items) {
  this.items = items.length > 0 ? items : [];

  this.addItem = item => this.items.push(item);
  this.removeItem = item => this.items.splice(items.indexOf(item), 1);
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

const s = new HtmlSelectElement();
