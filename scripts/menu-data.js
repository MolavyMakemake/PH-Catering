const menu_items = 
{
    "Rød Karri" : { "types" : ["Kylling", "And", "Vegeteriansk"], "ingredients" : "Gryte med kokosmelk, bambus skudd, basilikum og frisk frukt" },
    "Gul Karri" : { "types" : ["Biff", "Kylling lår", "Vegeteriansk"], "ingredients" : "Gryte med massaman karri, kokosmelk, poteter gulerøtter og peanøtter" },
    "Phaneng" : { "types" : ["Kylling", "Svinekjøtt", "Vegeteriansk"], "ingredients" : "Kokosmelk, limeblader og eggplanter" },
    "Grønn Karri": { "types" : ["Kylling", "Reker", "Vegeteriansk"], "ingredients" : "Kokosmelk basilikum og bambus skudd" },

    "Tom Kha Gai" : { "types" : ["Kylling", "Reker", "Vegeteriansk"], "ingredients" : "Sitrongress, kokosmelk, lime, tomater og koreander" },
    "Tom Yam Kung" : { "types" : [""], "ingredients" : "Sitrongress, limeblader, galangal, melk og koreander" },

    "Salat" : { "types" : ["Biff", "Reker", "Svinekjøtt", "Vegeteriansk"], "ingredients" : "Glassnudler, rødløk, lime, chili, hvitløk og koreander (Sterk om ønskelig)" },
    "Tofu Salat" : { "types" : [""], "ingredients" : "Glassnudler, rødløk, lime, chili, hvitløk, koreander, peanøtter og tomater (Sterk om ønskelig)" },
    "Papaya Salat" : { "types" : [""], "ingredients" : "Chili hvitløk palmsokker lime og tomater (Sterk om ønskelig)" },
    "Skaldyr Salat" : { "types" : [""], "ingredients" : "Spesiel thai dressing, inneholder lime, chili, hvitløk, fiskesaus og grønnsaker" },
    "Tunfisk Salat" : { "types" : [""], "ingredients" : "Tunfisk blandet med bønner og quinoe rød/hvit blandet med hjemmelaget dressing" },
    "Grillet tofu Salat" : { "types" : [""], "ingredients" : "Grillet tofu med chili, lime, grønnsaker og fiske" },
    "Reke Salat" : { "types" : [""], "ingredients" : "Chili, vitløk, rødløk, koriander. Serveres med hjemmelaget plommesaus" },

    "Wok" : { "types" : [ "Biff", "Kylling", "Reker og cashewnøtter", "Vegeteriansk"], "ingredients" : "Paprika, østersaus og chili" },
    "Wok Pepper" : { "types" : ["Biff", "Kylling", "Vegeteriansk"], "ingredients" : "Grønnsaker, hvitløk, svart pepper, soya og østersaus" },
    "Wok Sterk" : { "types" : ["Biff", "Kylling", "Reker", "Vegeteriansk"], "ingredients" : "Hvitløk chili bambus skudd og basilikum (sterk)" },
    "Wok Strimlet" : { "types" : ["Kylling", "Reker", "Vegeteriansk"], "ingredients" : "Ananas augurk løk og tomater" },
    "Wok Rød Karri" : { "types" : ["Kylling", "Svinekjøtt", "Reker", "Vegeteriansk"], "ingredients" : "Bønnestengler, chili hvitløk basilikum (sterk)" },
    "Stekt ris" : { "types" : ["Kylling", "Reker", "Vegeteriansk"], "ingredients" : "Ris egg gulerøtter tomater lime, chili og fiskesaus" },

    "Pad Thai" : { "types" : ["Kylling", "Reker", "Vegeteriansk"], "ingredients" : "Risnudler egg, tamarind saus soya peanøtter og chili" },
    "Eggnudler" : { "types" : ["Kylling", "Reker", "Tofu", "Vegeteriansk"], "ingredients" : "Eggnudler grønnsaker soya og østersaus" },
    "Risnudler" : { "types" : ["Kylling", "Reker", "Vegeteriansk"], "ingredients" : "Risnudler med hvitløk chili og whisky (sterk)" },
    "Store Risnudler" : { "types" : ["Kylling", "Svinekjøtt", "Vegeteriansk"], "ingredients" : "Brokkoli, svart soya og østers saus" },

    "Grill Spyd (Satay)" : { "types" : ["Kylling", "Svinekjøtt", "Vegeteriansk"], "ingredients" : "Serveres med peanøttsaus" },
    "Grill Spyd" : { "types" : ["Kylling", "Reker", "Vegeteriansk"], "ingredients" : "Gurkemeie, rød kurry, fiskesaus, tamarind. Serveres med jordnøtter" },
    "Vårruller" : { "types" : ["Kylling", "Reker", "Vegeteriansk"], "ingredients" : "Serveres med søt chilisaus" },
    "Thai Vårruller" : { "types" : ["Kylling", "Vegeteriansk"], "ingredients" : "Serveres med sursøt saus" },
    "Kjøttboller" : { "types" : [""], "ingredients" : "Kjøtt, hvitpepper, soja, koriander, vitløk. Serveres med hjemmelaget plommesaus." },

    "Eggnudel Suppe" : { "types" : ["Kylling", "Bigg", "Reker", "Tofu (Vegetariansk)", "Vegeteriansk"], "ingredients" : "" },
    "Risnudel Suppe" : { "types" : ["Kylling", "Bigg", "Reker", "Tofu (Vegetariansk)", "Vegeteriansk"], "ingredients" : "" },
    "Glassnudel Suppe" : { "types" : ["Kylling", "Bigg", "Reker", "Tofu (Vegetariansk)", "Vegeteriansk"], "ingredients" : "" },
}

const menu_catagories = 
[
    { "name" : "Karri", "image" : "curry.jpg", "items" : ["Rød Karri", "Gul Karri", "Phaneng", "Grønn Karri"], 
        "description" : "Thai karri skiller seg ut ved sin unike blanding av urter og kryddre. Det er lite som slår god karri med ferske grønnsaker." },

    { "name" : "Supper", "image" : "soup.jpg", "items" : ["Tom Kha Gai", "Tom Yam Kung"], 
        "description" : "Thai supper er utrolig unike og smakfulle. Tom kha gai er Thailands nasjonalrett." },

    { "name" : "Salater", "image" : "salad.jpg", "items" : ["Salat", "Tofu Salat", "Papaya Salat", "Reke Salat"], 
        "description" : "Thai salater er ikke som vanlige salater i deres unike blandinger. Parret med litt ekstra kick fra chilli blir det utrolig godt." + 
        "Den mest populære salat-retten i thailand er uten tvil papaya salat." },

    { "name" : "Wok", "image" : "wok.jpg", "items" : ["Wok", "Wok Pepper", "Wok Sterk", "Wok Strimlet", "Wok Rød Karri", "Stekt ris"],
       "description" : "Wok har en karakteristisk smak som kommer fra at den er stekt under høy varme. Så kalt \"stir frying\" er en viktig del av thai matlagning." },

    { "name" : "Nudler", "image" : "nudles.jpg", "items" : ["Pad Thai", "Eggnudler", "Risnudler", "Store Risnudler"], 
        "description" : "Nudler har vært en del av matkulturen i Thailand i århundre. Blant dem er Pad Thai den mest kjente." +
        "Risnudler stekes i en wok med peanøtter, egg og den ikonske tamarind sausen." },

    { "name" : "Grill mat", "image" : "grill.jpg", "items" : ["Grill Spyd (Satay)", "Vårruller", ],
        "description" : "Med nydelige sauser og marinader er grillmat et populært valg." },

    { "name" : "Nudelsuppe", "image" : "noodlesoup.jpg", "items" : ["Eggnudel Suppe", "Risnudel Suppe", "Glassnudel Suppe"],
        "description" : "Nudel suppene utmerker seg med ferske grønnsaker og hjemmelaget buljong" },

    { "name" : "Kald mat", "image" : "cold-dish.jpg", "items" : ["Skaldyr Salat", "Grillet tofu Salat", "Tunfisk Salat"],
        "description" : "Veldige gode og enkle retter. Passer seg veldig til den balanserte sure, søte thai smaken." },

    { "name" : "Finger mat", "image" : "finger-food.jpg", "items" : ["Grill Spyd", "Thai Vårruller"],
        "description" : "Finger mat er utrolig populært i Thailand og for god grunn." },
]

function retrieve_cookies(){
    items = JSON.parse(sessionStorage.getItem("items"));
    isValid = items != null
    if (isValid)
        for (item in menu_items)
            isValid &= items[item] != undefined;
    
    if (!isValid)
    {
        items = {};
        for (item in menu_items)
        {
            items[item] = { "in_cart" : false, "types" : [] }
        }
    }
}
retrieve_cookies();


function item_HTML(item_key){
    let item = menu_items[item_key]
    let types = "";
    let btn_html = items[item_key].in_cart ?
    `
    <div class="menu-item-btn remove-item" id="${item_key}">
        Fjern
    </div>
    ` : `
    <div class="menu-item-btn add-item" id="${item_key}">
        Legg til
    </div>
    `

    item.types.forEach(type => {
        if (type != "")
        types += `
        <div class="menu-item-sub">
            <input type="checkbox" id="${type}" ${items[item_key].types.includes(type) ? "checked" : ""}>
            <label for="${type}">${type}</label>
        </div>
        `
    })

    return`
    <div class="item-description">
        <h3 class="item-title">${item_key}</h3>
        <h6 class="item-ingredients">${item.ingredients}</h6>
    </div>
    <div class="menu-item-subs">
        ${btn_html}
        <div class="menu-item-subs-con"><div>${types}</div></div>
    </div>
    `
}

function change_item(e){
    opened_catagory.querySelector(".menu-item").innerHTML = item_HTML(e.innerHTML);
    update_event_listener();
}

function opened_inner_HTML(i){
    let catagory = menu_catagories[i];
    let items_HTML = "";
    catagory.items.forEach(item => items_HTML += `<div class="catagory-item-btn" onclick="change_item(this)">${item}</div>`)

    return `
    <img src="images/${catagory.image}">
    <div class="menu-item-img-cover"></div>
    <div class="catagory-info">
        <h2>${catagory.name}</h2>
        <h5>
            ${catagory.description}
        </h5>
    </div>
    <div class="catagory-items">
        <div class="menu-items">
            <div class="scroll-edge se-left"></div>
            <div class="scroll-edge"></div>
            <div class="fading-edge"></div>
            ${items_HTML}
        </div>
        <div class="menu-item">${item_HTML(catagory.items[0])}</div>
    </div>
    <div class="cross" onclick="close_opened_catagory()"></div>
    `;
}

function opened_catagory_HTML(i){
    
    let e = document.createElement("div");
    e.innerHTML = opened_inner_HTML(i);
    e.className = "menu-opened";
    return e;
}

function catagory_HTML(i){
    let catagory = menu_catagories[i];
    return `
    <div class="menu-catagory" id="c${i}" style="background-image: url(images/${catagory.image})">
        <h1 class="menu-catagory-title">${catagory.name}</h1>
    </div>
    `
}