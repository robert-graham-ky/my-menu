entrees = new Map();
entrees.set("salmon", 4.95);
entrees.set("chicken", 2.45);

sides = new Map();
sides.set("green beans", 1);
sides.set("fries", 1);
sides.set("salad", 1.5);
sides.set("macaroni", 1.5);

function entreeComment(entreeChoice){
    if (entreeChoice == "salmon") {
        return ("Ooh I like salmon");
    }
    else{
        return (entreeChoice + ", gross...");
    }
}

function sideComment(sideChoice){
    if (sideChoice == "green beans"){
        return ("Seriously? Okay.");
    }
    else if (sideChoice == "macaroni"){
        return ("Delicious macaroni!");
    }
    else{
        return (sideChoice + ", nasty...");
    }
}

function menu(type, foodMap){
    let foodMenu = type + "\n" + "\n";
    for (let [key, value] of foodMap) {
        const nameCapitalized = key.charAt(0).toUpperCase() + key.slice(1);
        const menuItem = nameCapitalized + " - $" + String(value) + "\n";
        foodMenu = foodMenu.concat(menuItem);
    }
    return foodMenu;
}

function entreeAlert(entree){
    const comment = entreeComment(entree);
    const price = "$" + String(entrees.get(entree));

    alert(comment + "\n" + "That'll be " + price);
}

function sideAlert(side){
    const comment = sideComment(side);
    const price = "$" + String(sides.get(side));

    alert(comment + "\n" + "That'll be " + price);
}

/* Alert the menu, with okay button*/

alert("Hi there! Here is our menu. Choose an entree and two sides.");

alert(menu("Entrees", entrees) + "\n" + menu("Sides", sides));


//Prompt Entree choice

let entree = prompt("Please enter your entree", "chicken").toLowerCase();

//alert entree comment, plus entree price

entreeAlert(entree);
//prompt side1 choice

let side1 = prompt("Please enter your first side choice", "green beans").toLowerCase();

// alert side comment, price

sideAlert(side1);

//prompt side2 choice

let side2 = prompt("Please enter your second side choice", "fries").toLowerCase();

//alert side comment, price

sideAlert(side2);

//alert total
total = entrees.get(entree) + sides.get(side1) + sides.get(side2);
alert("Your total is:" + "\n" + "$" + String(total));
