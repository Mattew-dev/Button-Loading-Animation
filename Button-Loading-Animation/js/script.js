confirm = document.querySelector(".btn-confirm");

confirm.onclick = function(){
    this.innerHTML = "<div class='loader'></div>";
    setTimeout(() => {
        this.innerHTML = "Order Confirmed!!";
        this.style = "background: rgb(81, 96, 231); color: white; pointer-events: none";
    }, 2200);
}