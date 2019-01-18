//  Prototypical Inheritance pre-ES6

function HtmlElement() {
  this.click = () => console.log("clicked");
}

HtmlElement.prototype.focus = () => console.log("focused");

function HtmlSelectElement(...items) {
  this.items = items.length > 0 ? items : [];

  this.addItem = item => this.items.push(item);
  this.removeItem = item => this.items.splice(items.indexOf(item), 1);
  this.render = () => `
  <select>${this.items
    .map(
      item => `
    <option>${item}</option>`
    )
    .join("")}
  </select>`;
}

function HtmlImageElement(src) {
  this.src = src;

  this.render = () => `<img src="${this.src}" />`;
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;

const elements = [
  new HtmlSelectElement(1, 2, 34),
  new HtmlImageElement("http://...")
];

for (let element of elements) console.log(element.render());
