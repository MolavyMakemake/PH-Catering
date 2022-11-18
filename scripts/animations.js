function animate_order_btn(){
    document.querySelector(".order-btn").style.scale = 1.1;
    setTimeout(() => document.querySelector(".order-btn").style.scale = 1, 200)
}

function toggle_tab(){
    let hl = document.querySelector(".header-links");
    let hidden = hl.style.visibility == "hidden";

    if (hidden){
        hl.style.visibility = "visible";
        $(hl).animate({
            opacity: "1"
        }, 300)
    }
    else{
        $(hl).animate({
            opacity: "0"
        }, 300, () => {
            hl.style.visibility = "hidden";
        })
    }
}

function scroll_to(query){
    document.querySelector(query).scrollIntoView({
        behavior: 'smooth',
        block: "start"
    });
}