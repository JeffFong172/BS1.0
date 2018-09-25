var a = document.getElementsByClassName("hog-button");
//alert(a.length);

for (var i = 0, n = a.length; i < n; i++) {
    a[i].flat = 0;
    a[i].onclick = function() {
        this.flat++;
        if (this.flat % 2) {
            this.style.backgroundColor = "black";
            this.style.color = "white";
        } else {
            this.style.backgroundColor = "white";
            this.style.color = "black";
        }
        //alert(this.flat);
    }
}