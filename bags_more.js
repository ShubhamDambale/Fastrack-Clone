var bags = [

    {
       image: "https://staticimg.titan.co.in/Fastrack/Catalog/A1094PBK01_1.jpg?pView=listing",
       name: "TEXTURED BLACK WALLET",
       price: 1295,
       new: "NEW ARRIVAL",
       
       
    },
 
    {
     image: "https://staticimg.titan.co.in/Fastrack/Catalog/A1094PMB01_1.jpg?pView=listing",
     name: "TEXTURED MINT BLUE WALLET",
     price: 1295,
     new: "NEW ARRIVAL",
     
  },
 
  {
     image: "https://staticimg.titan.co.in/Fastrack/Catalog/A1094PTN01_1.jpg?pView=listing",
     name: "TEXTURED TAN WALLET",
     price: 1295,
     new: "NEW ARRIVAL",
     
  },
 
  {
     image: "https://staticimg.titan.co.in/Fastrack/Catalog/A3014PMU01_1.jpg?pView=listing",
     name: "WILLOW MUSTARD SATCHEL",
     price: 2895,
     new: "NEW ARRIVAL",
     
  },
 
  {
     image: "https://staticimg.titan.co.in/Fastrack/Catalog/A3014PTL01_1.jpg?pView=listing",
     name: "wILLOW TEAL SATCHEL",
     price: 2895,
     new: "NEW ARRIVAL",
     
  },
 
  {
     image: "https://staticimg.titan.co.in/Fastrack/Catalog/A3016POL01_1.jpg?pView=listing",
     name: "SKYLAR OLIVE SLING BAG",
     price: 2795,
     new: "NEW ARRIVAL",
     
  },
 
  {
     image: "https://staticimg.titan.co.in/Fastrack/Catalog/A3017PTL01_1.jpg?pView=listing",
     name: "SAGE TEAL SATCHEL",
     price: 3595,
     new: "NEW ARRIVAL",
     
  },
 
  {
     image: "https://staticimg.titan.co.in/Fastrack/Catalog/A3018PBK01_1.jpg?pView=listing",
     name: "MERLOT BLACK SATCHEL",
     price: 2695,
     new: "NEW ARRIVAL",
     
  },
 
  {
     image: "https://staticimg.titan.co.in/Fastrack/Catalog/A3018PGD01_1.jpg?pView=listing",
     name: "MERLOT GoLD SATCHEL",
     price: 2695,
     new: "NEW ARRIVAL",
     
  },
 
  {
     image: "https://staticimg.titan.co.in/Fastrack/Catalog/A1091PMB01_1.jpg?pView=listing",
     name: "TEXTURED MINT BLUE WALLET",
     price: 1295,
     new: "NEW ARRIVAL",
     
  },
 
  {
     image: "https://staticimg.titan.co.in/Fastrack/Catalog/A1091PNB01_1.jpg?pView=listing",
     name: "TEXTURED NAVY BLUE WALLET",
     price: 1295,
     new: "NEW ARRIVAL",
     
  },
 
  {
     image: "https://staticimg.titan.co.in/Fastrack/Catalog/A2089PBK01_1.jpg?pView=listing",
     name: "ELM BLACK SLING BAG",
     price: 1895,
     new: "NEW ARRIVAL",
     
  },
 
  {
     image: "https://staticimg.titan.co.in/Fastrack/Catalog/A2090POL01_1.jpg?pView=listing",
     name: "OPAL OLIVE BUCKET BAG",
     price: 2495,
     new: "NEW ARRIVAL",
  },
 
 ];


 var cartData = JSON.parse(localStorage.getItem("cart")) || [];





 DisplayData(bags);
  
 function DisplayData(bags){
   document.querySelector("#container").innerHTML= "";


 

bags.map(function(elem){

    var box = document.createElement("div");

    var img = document.createElement("img");
    img.src = elem.image;

    var names = document.createElement("p");
    names.setAttribute("class", "names_div")
    names.textContent = elem.name;

    var prices = document.createElement("p");
    prices.setAttribute("class", "prices_div")
    prices.innerText = elem.price;

    

     var news = document.createElement("p");
     news.setAttribute("class", "news_div");
     news.innerText = elem.new;

    

     var btn = document.createElement("button");
     btn.setAttribute("class", "buttons_div");
     btn.innerText = "Add To Cart";
     btn.addEventListener("click", function() {
        addToCart(elem);
     })

     
    

    box.append(img,names,prices,news,btn);

    document.querySelector("#container").append(box);
})

function addToCart(elem){
    console.log(elem);
    cartData.push(elem);
    localStorage.setItem("cart", JSON.stringify(cartData));
}

}



// Sorting
function sortItems(){
    var sorting = document.getElementById("sorter").value;
       
    console.log(sorting);

    if (sorting=="h2l"){
        bags.sort(function(a, b){
            return b.price - a.price
        });

        DisplayData(bags);
    }
    else  if (sorting=="l2h"){
        bags.sort(function(a, b){
            return a.price - b.price
        });

        DisplayData(bags);
    }
  }