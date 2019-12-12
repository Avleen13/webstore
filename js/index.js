//variable declaration
const dressData = [
  {
    name: `Skirt with Belt Zara`,
    imageUrl: `img/img1.jpeg`,
    productCode: 200,
    category: `Custom`,
    price: `300`,
    rating: 3,
    brand: `Zara`,
    colors: [`Black`, `Purple`,`Green`,`Red`,`Blue`],
    stock: 3,
    sizes: `XS`,
    discount: 40,
    onSale: true
  },
  
  {
    name: `Flare Dress Zara`,
    imageUrl: `img/img2.jpeg`,
    productCode: 200,
    category: `Casual`,
    price: `100`,
    rating: 4,
    brand: `Zara`,
    colors: [`Green`],
    stock: 9,
    sizes: `S`,
    discount: 40,
    onSale: true
  },
  
   {
    name: `Dress with Pleats Zara`,
    imageUrl: `img/img16.jpeg`,
    productCode: 200,
    category: `Party Wear`,
    price: `230`,
    rating: 5,
    brand: `Zara`,
    colors: [`Red`],
    stock: 4,
    sizes: `M`,
    discount: 40,
    onSale: true
  },
  
 {
    name: `Floral Maxi Dress Zara`,
    imageUrl: `img/img7.jpeg`,
    productCode: 100,
    category: `Casual`,
    price: `200`,
    rating: 4,
    brand: `Zara`,
    colors: [`Blue`],
    stock: 9,
    sizes: `XL`,
    discount: 40,
    onSale: true
  },
  
   {
    name: `Solid Maxi Dress Zara`,
    imageUrl: `img/img17.jpeg`,
    productCode: 80,
    category: `Custom`,
    price: `200`,
    rating: 2,
    brand: `Zara`,
    colors: [`Red`, `Blue`],
    stock: 78,
    sizes: `XS`,
    discount: 40,
    onSale: true
  },
  
   {
    name: `Solid Bodycon Dress`,
    imageUrl: `img/img4.jpeg`,
    productCode: 120,
    category: `Casual`,
    price: `200`,
    rating: 4,
    brand: `Zara`,
    colors: [`Green`,`Red`],
    stock: 36,
    sizes: `S`,
    discount: 40,
    onSale: true
  },
  
 {
    name: `Fit and Flare Dress Zara`,
    imageUrl: `img/img6.jpeg`,
    productCode: 300,
    category: `Custom`,
    price: `200`,
    rating: 3,
    brand: `Zara`,
    colors: [`Blue`, `Black`],
    stock: 87,
    sizes: `M`,
    discount: 40,
    onSale: true
  },
   {
    name: `Printed Maxi Dress`,
    imageUrl: `img/img5.jpeg`,
    productCode: 170,
    category: `Custom`,
    price: `200`,
    rating: 5,
    brand: `Zara`,
    colors: [`Red`],
    stock: 89,
    sizes: `L`,
    discount: 40,
    onSale: true
  },
  
{
    name: `Straight fit Dress H&M`,
    imageUrl: `img/img8.jpeg`,
    productCode: 111,
    category: `Casual`,
    price: `210`,
    rating: 2,
    brand: `gap`,
    colors: [`Green`],
    stock: 76,
    sizes: `XL`,
    discount: 5,
    onSale: true
  },
   {
    name: `Stripes Dress Gap`,
    imageUrl: `img/img9.jpeg`,
    productCode: 112,
    category: `Custom`,
    price: `110`,
    rating: 4,
    brand: `gap`,
    colors: [`Blue`],
    stock: 6,
    sizes: `XS`,
    discount: 5,
    onSale: false
  },
  {
    name: `Low fit Dress H&M`,
    imageUrl: `img/img10.jpeg`,
    productCode: 113,
    category: `Casual`,
    price: `180`,
    rating: 3,
    brand: `gap`,
    colors: [`Black`],
    stock: 112,
    sizes: `S`,
    discount: 5,
    onSale: true
  },
   {
    name: `Pinafore hign waist Dress`,
    imageUrl: `img/img11.jpeg`,
    productCode: `Gap103`,
    category: `Party Wear`,
    price: `130`,
    rating: 2,
    brand: `gap`,
    colors: [`Blue`],
    stock: 10,
    sizes: `M`,
    discount: 5,
    onSale: true
  },
  {
    name: `Sheath Maroon Dress`,
    imageUrl: `img/img12.jpeg`,
    productCode: 113,
    category: `Party Wear`,
    price: `180`,
    rating: 5,
    brand: `gap`,
    colors: [`Black`],
    stock: 112,
    sizes: `L`,
    discount: 5,
    onSale: true
  },
   {
    name: `Shirt Multicolor Dress`,
    imageUrl: `img/img13.jpeg`,
    productCode: `Gap103`,
    category: `Casual`,
    price: `130`,
    rating: 2,
    brand: `gap`,
    colors: [`Red`, `Blue`],
    stock: 10,
    sizes: `XL`,
    discount: 5,
    onSale: true
  },
  {
    name: `Skirt with Tie Belt`,
    imageUrl: `img/img14.jpeg`,
    productCode: `Gap103`,
    category: `Custom`,
    price: `130`,
    rating: 4,
    brand: `gap`,
    colors: [`Red`],
    stock: 34,
    sizes: `L`,
    discount: 5,
    onSale: true
  },
  {
    name: `Long Maxi Dress`,
    imageUrl: `img/img15.jpeg`,
    productCode: `Gap103`,
    category: `Party Wear`,
    price: `130`,
    rating: 3,
    brand: `gap`,
    colors: [`Red`, `Green`,`Blue`],
    stock: 10,
    sizes: `XL`,
    discount: 45,
    onSale: true
  },
  {
    name: `Skirt with Tie Belt`,
    imageUrl: `img/img18.jpeg`,
    productCode: `Gap103`,
    category: `Party Wear`,
    price: `130`,
    rating: 4,
    brand: `gap`,
    colors: [`Blue`],
    stock: 43,
    sizes: `M`,
    discount: 5,
    onSale: true
  },
  {
    name: `Bodycon Multicolor Dress`,
    imageUrl: `img/img19.jpeg`,
    productCode: `Gap103`,
    category: `Casual`,
    price: `130`,
    rating: 5,
    brand: `gap`,
    colors: [`Purple`, `Black`],
    stock: 10,
    sizes: `S`,
    discount: 5,
    onSale: true
  },
  {
    name: `Fit and Flare Dress Zara`,
    imageUrl: `img/img20.jpeg`,
    productCode: `Gap103`,
    category: `Party Wear`,
    price: `130`,
    rating: 2,
    brand: `gap`,
    colors: [`Green`,`Red`],
    stock: 10,
    sizes: `XL`,
    discount: 5,
    onSale: true
  },
  {
    name: `Body Wrap Dress`,
    imageUrl: `img/img21.jpeg`,
    productCode: `Gap103`,
    category: `Casual`,
    price: `130`,
    rating: 1,
    brand: `gap`,
    colors: [`Black`],
    stock: 67,
    sizes: `L`,
    discount: 5,
    onSale: true
  }
];



//functions
function getDressesAsHtml(dressData) {
  return `
  <section class="productCard">
  <div class="container">
    <img clas="images" src="${dressData.imageUrl}" alt="${dressData.name}" style="width:100%;">
      <button type="button" class="favBtn" id="favBtn"><span class="material-icons">favorite</span></button>
  </div>
    <div class="content_x">
    <p class="p-heading"><strong>${dressData.name}</strong></p>
      <p class="productCardListItem"><h3>${dressData.category}</h3></p>
      <p class="productCardListItem"><h3>Price: $${dressData.price}</h3></p>
      <p class="productCardListItem"><h3>Average rating: ${dressData.rating}</h3></p>

        <a type="button" class="btn" id="addtocart"> Add to Cart</a> 
        </div>
</section>`;
}

function SearchAsHtml(){
  return `<div class="search">
  <input placeholder="Search for products" type="search" name="find" id="find" >
  <a class="searchSubmit" >
      <span class="material-icons search-span">search</span>
  </a>
</div>`
}

function ProductHighToLow() {
  const HighToLowBtnArr = dressData
    .slice(0)
    .sort((a, b) => (a.price < b.price ? 1 : -1));
    renderDresses(HighToLowBtnArr);
}

function ProductLowToigh() {
  const LowToHighBtnArr = dressData
    .slice(0)
    .sort((a, b) => (a.price > b.price ? 1 : -1));
    renderDresses(LowToHighBtnArr);
}

function ProductsByAvailability() {
  const availabilityBtnArr = dressData
    .slice(0)
    .sort((a, b) => (a.stock < b.stock ? 1 : -1));
  renderDresses(availabilityBtnArr);
}



const searchDresses=() => {
    const search = document.getElementById("find").value;
    const lowerVersion = search.trim().toLowerCase();
    const results = dressData.filter(c => c.name.toLowerCase().includes(lowerVersion));
    renderDresses(results);
}

const renderDresses = (arr) => {
  document.getElementById("places-block").innerHTML = arr.map(getDressesAsHtml).join("\n");
}



const colorBlackFilter = () =>{
  const redDresses = dressData.filter(c => c.colors == "Black");
  renderDresses(redDresses);

}

const colorPurpleFilter = () => {
  const purpleDresses = dressData.filter(c => c.colors == "Purple");
  renderDresses(purpleDresses);

}

const colorGreenFilter = () => {
  const greenDresses = dressData.filter(c => c.colors == "Green");
  renderDresses(greenDresses);

}

const colorRedFilter = () => {
  const redDresses = dressData.filter(c => c.colors == "Red");
  renderDresses(redDresses);

}

const colorBlueFilter = () => {
  const blueDresses = dressData.filter(c => c.colors == "Blue");
  renderDresses(blueDresses);

}

const sizeXsFilter = () =>{
  const xsDresses = dressData.filter(c => c.sizes =="XS");
  renderDresses(xsDresses)
}

const sizeSFilter = () =>{
  const sDresses = dressData.filter(c => c.sizes =="S");
  renderDresses(xsDresses)
}

const sizeMFilter = () =>{
  const mDresses = dressData.filter(c => c.sizes =="M");
  renderDresses(mDresses)
}

const sizeLFilter = () =>{
  const lDresses = dressData.filter(c => c.sizes =="L");
  renderDresses(lDresses)
}

const sizeXlFilter = () =>{
  const xlDresses = dressData.filter(c =>c.sizes =="XL");
  renderDresses(xlDresses)
}

const fiveStarFilter = () => {
  const fiveStars = dressData.filter(c => c.rating >=4)
  renderDresses(fiveStars)
}

const fourStarFilter = () => {
  const fourStars = dressData.filter(c => c.rating >=3 && c.rating < 4)
  renderDresses(fourStars)
}

const threeStarFilter = () => {
  const threeStars = dressData.filter(c => c.rating >=2 &&  c.rating < 3)
  renderDresses(threeStars)
}

const twoStarFilter = () => {
  const twoStars = dressData.filter(c => c.rating >=1  &&  c.rating < 2)
  renderDresses(twoStars)
}
  
//execution
window.addEventListener('load', () => {
  renderDresses(dressData);
  document.getElementById("searchMain").innerHTML = SearchAsHtml();

  document.getElementById("find").addEventListener("input",searchDresses);

  document.getElementById(`HighToLowBtn`).addEventListener("click", ProductHighToLow);
  document.getElementById(`LowToHighBtn`).addEventListener("click", ProductLowToigh);
  document.getElementById(`availabilityBtn`).addEventListener("click", ProductsByAvailability);

  document.getElementById("black").addEventListener("click",colorBlackFilter);
  document.getElementById("purple").addEventListener("click",colorPurpleFilter);
  document.getElementById("green").addEventListener("click",colorGreenFilter);
  document.getElementById("red").addEventListener("click",colorRedFilter);
  document.getElementById("blue").addEventListener("click",colorBlueFilter);

    document.getElementById("xs").addEventListener("click",sizeXsFilter);
    document.getElementById("sm").addEventListener("click",sizeSFilter);
    document.getElementById("md").addEventListener("click",sizeMFilter);
    document.getElementById("lg").addEventListener("click",sizeLFilter);
    document.getElementById("xl").addEventListener("click",sizeXlFilter);

    document.getElementById("aboveFour").addEventListener("click",fiveStarFilter);
    document.getElementById("aboveThree").addEventListener("click",fourStarFilter);
    document.getElementById("aboveTwo").addEventListener("click",threeStarFilter);
    document.getElementById("aboveOne").addEventListener("click",twoStarFilter);

});