var Ship = function(src, width, height, x, y, id) {
    this.src = src;
    this.h = height;
    this.w = width;
    this.id = id;
    this.x = x;
    this.y = y;
    this.createShip();
};
Ship.prototype.createShip = function() {
    // this.element = document.createElement('span');
    this.element = document.createElement('img');
    this.element.src = this.src;
    this.element.id = this.id
    this.element.style.left = this.x + "px";
    this.element.style.top = this.y + "px";
    this.element.style.width = this.w + "px";
    this.element.style.height = this.h + "px";
    this.element.classList.add(this.elementClass);



    // this.element.appendChild(image);
    var gamediv = document.getElementById("container")
    gamediv.appendChild(this.element);
};