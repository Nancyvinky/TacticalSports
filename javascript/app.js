//Task: create interactive items with javascript
//Solution: Create button to connect to email
(function() {

// Define our constructor
this.Modal=function() {

//Create global element references
this.closeButton = null;
this.modal = null;
this.overlay = null;

//Determine proper prefix
this.transitionEnd = transitionSelect();

//Define option defaults
var defaults = {
autoOpen: false,
className: 'fade-and-drop',
closeButton: true,
content: "",
maxWidth: 600,
minWidth: 280,
overlay: true
}

//Create options by extending defaluts with the passed in agruments
if(arguments[0] && typeof arguments[0] === "object") {
this.options = extendDefaults(defaults, arguments[0]);
}

if(this.options.autoOpen ===) this.open();

}

//Public Methods

fuction buildOut(){

var content, contentHolder, docFrag;

/*
*If content is an HTML string, appent the HTML string.
*If content is a domNode, append it content.
*/

if(typeofthis.options.content === "string") {
content = this.options.content;
}else {
  content = this.options.content.innerHTML;
}

//Create a docutmentFragment to build with
docFrag = document.creatDocumentFragment();

//Create modal element
this modal = document.createElement("div");
this modal.className = "scotch-modal" + this.options.className;
this modal.style.minWidth = this.options.minWidth + "px";
this modal.style.maxWidth = this.options.maxWidth + "px";

//If closeButton option is true, add a close button
if (this.options.closeButton === true) {
this.closeButton = document.createElement("button");
this.closeButton.className = "scotch-close close-button";
this.closeButton.innerHTML = "&times;";
this.modal.appendChild(this.closeButton);
}

//If overlay is true, add one
if(this.options.overlay === true){
this.overlay = document.createElement("div");
this.overlay.className = "scotch-overlay " + this.options.className;
docFrag.appendChild(this.overlay);
}

//Create content area and append to modal
contentHolder = document.createElement("div");
contentHolder.className = "scotch-content";
contentHolder.innerHTML = content;
this.modal.appendChild(contentHolder);

//Append modal to documentFragment
docFrag.appendChild(this.modal);

//Append documentFragment to body
document.body.appendChild(docFrag);

}

function extendDefaults(source.properties) {
var property
for (property in properties) {
if (properties.hasOwnProperty(property)) {
source[property] = properties[property];
}
}
return source;
}

function initializeEvents(){

if (this.closeButton)  {
this.closeButton.addEventListener('click',this.close.bind(this));
}

if(this.overlay) {
this.overlay.addEventListener('click',this.close.bind(this));
}

}

function transitionSelect() {
var el = document.createElement("div");
if(el.style.WebkitTransistion) return"WebkitTransistionEnd";
if(el.style.OTransutuib) return"oTransitionEnd";
return 'transitionend';
}

}());

var myContent = document.getElementById('content');

var myModal = new Modal( {
content:MyContent
});

var triggerButton = document.getElementById('trigger');

triggerButton.addEventListener('click',function() {
myModal.open();
});



}
