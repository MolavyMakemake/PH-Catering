let menu = document.querySelector("#menu");

let opened_catagory = null;
let closed_catagory = null;
let closed_catagory_index = null;

function create_menu(){
    let content = "";
    
    for (let i = 0; i < menu_catagories.length; i++) 
        content += catagory_HTML(i)
    
    menu.innerHTML = content;
}

function close_opened_catagory(){
    opened_catagory.remove();
    menu.insertBefore(closed_catagory, menu.children[closed_catagory_index]);

    opened_catagory = null;
}

function expand_catagory(e){
    id = Number(e.target.id[1]);
    catagory = menu_catagories[id];

    if (opened_catagory != null)
        close_opened_catagory();

    closed_catagory_index = id;

    closed_catagory = e.target;
    opened_catagory = opened_catagory_HTML(id);
    menu.insertBefore(opened_catagory, menu.children[0]);
    closed_catagory.remove();

    update_event_listener();

    opened_catagory.scrollIntoView({
        behavior: 'smooth',
        block: "center"
    });
}


create_menu();
document.querySelectorAll(".menu-catagory").forEach(e => {
    $(e).on("touchstart mousedown", (e) => {
        expand_catagory(e);
        e.preventDefault();
    })
})

function update_order_counter(){

    let e = document.querySelector(".order-counter")
    let sum = 0;
    for (item in items)
        if (items[item].in_cart)
            sum++;
        

    e.parentElement.style.visibility = sum == 0 ? "hidden" : "visible";
    e.innerHTML = sum;
}


function add_item(e){
    let item = items[e.target.id];
    let subs = e.originalEvent.path[1].querySelectorAll("input");

    if (item.in_cart){
        item.in_cart = false;
        e.target.innerHTML = "Legg til";
        e.target.className = "menu-item-btn add-item";
    }
    else {
        item.in_cart = true;
        animate_order_btn();
        e.target.innerHTML = "Fjern";
        e.target.className = "menu-item-btn remove-item";
        let checked = false;
        subs.forEach(sub => checked |= sub.checked);
        if (!checked)
        {
            subs[0].checked = true;
            item.types.push(subs[0].id)
        }
    }

    localStorage.setItem("items", JSON.stringify(items))
    update_order_counter();
}

function update_types(e){
    let item = items[document.querySelector(".menu-item-btn").id];
    let target = e.originalEvent.path[1].querySelector("input");

    console.log(item);

    if (!target.checked){
        item.types.push(target.id);
    }
    else
        item.types.splice(item.types.indexOf(target.id), 1);
    
    localStorage.setItem("items", JSON.stringify(items))
}

function update_event_listener(){
    document.querySelectorAll(".menu-item-btn").forEach(e => {
        $(e).on("touchstart mousedown", (e) => {
            add_item(e);
            e.preventDefault();
        })
    })
    document.querySelectorAll(".menu-item-sub").forEach(e => {
        $(e).on("touchstart mousedown", (e) => {
            e.preventDefault();
            update_types(e);
        })
    })
}

update_order_counter();