var watches = [

   {
      image: "https://staticimg.titan.co.in/Fastrack/Catalog/38072AP01_1.jpg?pView=listing",
      name: "REFLEX VOx DIGITAL SILICONE BLACK STRAP WATCH",
      price: 6995,
      emi: "NO COST EMI",
      smart: "SMART WATCH",
      
   },

   {
    image: "https://staticimg.titan.co.in/Fastrack/Catalog/38072AP02_1.jpg?pView=listing",
    name: "REFLEX Vox DIGITAL SILICONE BLUESTRAP WATCH",
    price: 6595,
    emi: "NO COST EMI",
    smart: "SMART WATCH",
    
 },

 {
    image: "https://staticimg.titan.co.in/Fastrack/Catalog/38072AP03_1.jpg?pView=listing",
    name: "REFLEX vox DIGITAL SILICONE PINKSTRAP WATCH",
    price: 1995,
    emi: "NO COST EMI",
    smart: "SMART WATCH",
    
 },

 {
    image: "https://staticimg.titan.co.in/Fastrack/Catalog/38072AP04_1.jpg?pView=listing",
    name: "REFLEX vox DIGITAL SILICONE RED STRAP WATCH",
    price: 3095,
    emi: "NO COST EMI",
    smart: "SMART WATCH",
    
 },

 {
    image: "https://staticimg.titan.co.in/Fastrack/Catalog/3210NL02_1.jpg?pView=listing",
    name: "BATMAN BLACK DIAL LEATHER STRAR WATCH",
    price: 2995,
    emi: "NO COST EMI",
    smart: "SMART WATCH",
    
 },

 {
    image: "https://staticimg.titan.co.in/Fastrack/Catalog/3210NL03_1.jpg?pView=listing",
    name: "BATMAN BLUE DIAL LEATHER STRAP WATCH",
    price: 6995,
    emi: "NO COST EMI",
    smart: "SMART WATCH",
    
 },

 {
    image: "https://staticimg.titan.co.in/Fastrack/Catalog/3210SL01_1.jpg?pView=listing",
    name: "BATMAN GREY DIAL LEATHER STRAP WATCH",
    price: 6995,
    emi: "NO COST EMI",
    smart: "SMART WATCH",
    
 },

 {
    image: "https://staticimg.titan.co.in/Fastrack/Catalog/3264KM01_1.jpg?pView=listing",
    name: "BATMAN BLACK DIAL STAINLESS STEEL STRAP WATCH",
    price: 6995,
    emi: "NO COST EMI",
    smart: "SMART WATCH",
    
 },

 {
    image: "https://staticimg.titan.co.in/Fastrack/Catalog/3269KM01_1.jpg?pView=listing",
    name: "BATMAN BLACK DIAL STAINLESs STEEL STRAP WATCH",
    price: 6995,
    emi: "NO COST EMI",
    smart: "SMART WATCH",
    
 },

 {
    image: "https://staticimg.titan.co.in/Fastrack/Catalog/3269NL01_1.jpg?pView=listing",
    name: "BATMAN BLACK DIAL LEATHER STRAP WATCH",
    price: "6995",
    emi: "NO COST EMI",
    smart: "SMART WATCH",
    
 },

 {
    image: "https://staticimg.titan.co.in/Fastrack/Catalog/6215QL01_1.jpg?pView=listing",
    name: "wONDER wOMAN RED DIAL LEATHER STRAP WATCH",
    price: "6995",
    emi: "NO COST EMI",
    smart: "SMART WATCH",
    
 },

 {
    image: "https://staticimg.titan.co.in/Fastrack/Catalog/6238QL01_1.jpg?pView=listing",
    name: "wONDER WoMAN BLACK DIAL LEATHER STRAP WATCH",
    price: "6995",
    emi: "NO COST EMI",
    smart: "SMART WATCH",
    
 },

 {
    image: "https://staticimg.titan.co.in/Fastrack/Catalog/6240KM01_1.jpg?pView=listing",
    name: "wONDER wOMAN BLACK DIAL LEATHER STRAP WATCH",
    price: "6995",
    emi: "NO COST EMI",
    smart: "SMART WATCH",
    
 },

];




var cartData = JSON.parse(localStorage.getItem("cart")) || [];




DisplayData(watches);
  
function DisplayData(watches){
  document.querySelector("#container").innerHTML= "";







watches.map(function(elem){

    var box = document.createElement("div");

    var img = document.createElement("img");
    img.src = elem.image;

    var names = document.createElement("p");
    names.setAttribute("class", "names_div")
    names.textContent = elem.name;

    var prices = document.createElement("p");
    prices.setAttribute("class", "prices_div")
    prices.innerText = elem.price;

    var div1 = document.createElement("div");
     div1.setAttribute("id", "extra_div");

     var emis = document.createElement("p");
     emis.setAttribute("class", "emis_div");
     emis.innerText = elem.emi;

     var smarts = document.createElement("p");
     smarts.setAttribute("class", "smarts_div");
     smarts.innerText = elem.smart;

     var btn = document.createElement("button");
     btn.setAttribute("class", "buttons_div");
     btn.innerText = "Add To Cart";
     btn.addEventListener("click", function() {
        addToCart(elem);
     })

     div1.append(emis, smarts);
    

    box.append(img,names,prices,div1,btn);

    document.querySelector("#container").append(box);
});





function addToCart(elem){
    console.log(elem);
    cartData.push(elem);
    localStorage.setItem("cart", JSON.stringify(cartData));
    alert("item added to cart")
}

}



// Sorting
function sortItems(){
    var sorting = document.getElementById("sorter").value;
       
    console.log(sorting);

    if (sorting=="h2l"){
        watches.sort(function(a, b){
            return b.price - a.price
        });

        DisplayData(watches);
    }
    else  if (sorting=="l2h"){
        watches.sort(function(a, b){
            return a.price - b.price
        });

        DisplayData(watches);
    }
  }