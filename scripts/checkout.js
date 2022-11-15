function price(item){
    if (menu_catagories[1].items.includes(item))
        return 100;
    
    if (menu_catagories[5].items.includes(item))
        return 100;

    return 140;
}

function order_HTML(item){
     
    let _price = price(item);
    items[item].types = [...new Set(items[item].types)]

    let out = "";
    if (items[item].types.length > 0)
        items[item].types.forEach(type => {

            out += `
            <div class="order">
                <p class="order-item">${item} med ${type.toLowerCase()}</p>
                <div class="order-info">
                    <p>kr ${_price}</p>
                    <div class="order-vars">
                        <input class="order-amount" id="${item}" type="number" name="porsjoner" min="1" step="1" value="2">
                        <div class="remove-order" id="${item};${type}"></div>
                    </div>
                </div>
            </div>` 
        } );
    else
    {
        out = `
        <div class="order">
            <p class="order-item">${item}</p>
            <div class="order-info">
                <p>kr ${_price}</p>
                <div class="order-vars">
                    <input class="order-amount" id="${item}" type="number" name="porsjoner" min="1" step="1" value="2">
                    <div class="remove-order" id="${item}"></div>
                </div>
            </div>
        </div>`
    }

    return out;
}

console.log(items);

let total_price = 0;
function update_price(){
    total_price = 0
    document.querySelectorAll(".order-amount").forEach(e => {
        total_price += Number(e.value) * price(e.id);
    })
    document.querySelector("#order-total").innerHTML = "kr " + total_price + "*";
}

let content = ""
for (item in items)
    if (items[item].in_cart)
        content += order_HTML(item)

document.querySelector(".order-list").innerHTML = content;

update_price();

document.querySelectorAll(".order-amount").forEach(e => {
    e.addEventListener("change", update_price)
})

function set_all_counters(){
    let n = Number(document.querySelector(".order-amount-master").value);
    if (n == 0)
        return;

    document.querySelectorAll(".order-amount").forEach(e => e.value = n);

    update_price();
}

function remove_item(e){
    let id = e.target.id.split(";");
    let item = items[id[0]];

    if (id[1] != undefined)
        item.types.splice(item.types.indexOf(id[1]), 1)

    if (item.types.length == 0)
        item.in_cart = false;

    localStorage.setItem("items", JSON.stringify(items));

    e.originalEvent.path[3].remove();

    update_price();
}

function send_mail(){
    form = document.querySelector("form");

    m_subject = "Bestilling til "
    date = form["date"].value;

    fname = form["fname"].value;
    pnum = form["pnum"].value;
    address = form["address"].value;
    details = form["details"].value;
    if (!date || !fname || !pnum || !address)
    {
        alert("Fyll ut alle feltene")
        return;
    }

    m_body = "navn: " + fname + "   tlf: " + pnum + "   adr: " + address + "\n\n";

    document.querySelectorAll(".order").forEach(e => {
        m_body += "\n" + e.querySelector(".order-amount").value + " " + e.children[0].innerHTML;
    })

    m_body += "\n\n" + details;

    m_subject += date + "\n";

    m_subject = encodeURIComponent(m_subject);
    m_body = encodeURIComponent(m_body);


    // Email obfuscator script 2.1 by Tim Williams, University of Arizona
    // Random encryption key feature by Andrew Moulden, Site Engineering Ltd
    // This code is freeware provided these four comment lines remain intact
    // A wizard to generate this code is at http://www.jottings.com/obfuscator/
   
    coded = "HaiLeaaFR@qQPXqqH.pqw"
    key = "RQJ4lMUGn0Vx8gKEPIpyL9rkmX52BeTZvFoN3WC7s1ubHwjOdAaD6SYqzthcfi"
    shift=coded.length
    link=""
    for (i=0; i<coded.length; i++) {
        if (key.indexOf(coded.charAt(i))==-1) {
        ltr = coded.charAt(i)
        link += (ltr)
        }
        else {     
        ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length
        link += (key.charAt(ltr))
        }
    }

    window.location.href = `mailto:${link}?subject=${m_subject}&body=${m_body}`;
    window.location.href = "./checkout-done.html";
}



document.querySelectorAll(".remove-order").forEach(e => {
    $(e).on("touchstart mousedown", (e) => {
        remove_item(e);
        e.preventDefault();
    })
})