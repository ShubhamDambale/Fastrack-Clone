var cartData = JSON.parse(localStorage.getItem("cart"));

var total = cartData.reduce(function(sum,elem,index,arr){
      return sum+elem.price
},0)

var length = cartData.length;

console.log(total)

document.querySelector("h2").innerText ="You Have    "+length+"    Item In The Cart and"+"Total is Rs     "+ total;


cartData.map(function(elem,index){

    var box = document.createElement("div");

    var img = document.createElement("img");
    img.src = elem.image;

    var names = document.createElement("p");
    names.setAttribute("class", "names_div")
    names.textContent = elem.name;

    var prices = document.createElement("p");
    prices.setAttribute("class", "prices_div")
    prices.innerText = elem.price;

    // var div1 = document.createElement("div");
    //  div1.setAttribute("id", "extra_div");

    //  var emis = document.createElement("p");
    //  emis.setAttribute("class", "emis_div");
    //  emis.innerText = elem.emi;

    //  var smarts = document.createElement("p");
    //  smarts.setAttribute("class", "smarts_div");
    //  smarts.innerText = elem.smart;

    //  var btn = document.createElement("button");
    //  btn.setAttribute("class", "buttons_div");
    //  btn.innerText = "Add To Cart";
    //  btn.addEventListener("click", function() {
    //     addToCart(elem);
    //  })

    var btn = document.createElement("button");
    btn.innerText = "Remove";
    btn.setAttribute("class", "buttons_div");
    btn.addEventListener("click", function() {
        removeItem(elem,index)
    })

    //  div1.append(emis, smarts);
    

    box.append(img,names,prices,btn);

    document.querySelector("#container").append(box);
});


function removeItem(elem,index){
    cartData.splice(index,1);
    console.log(cartData);
    localStorage.setItem("cart",JSON.stringify(cartData))
    window.location.reload()
}