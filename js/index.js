//variables
const dressData = [
  {
    name: `Skirt with Belt Zara`,
    imageUrl: `img/img1.jpeg`,
    productCode: 200,
    category: `Dress`,
    price: `300`,
    rating: 3.1,
    brand: `Zara`,
    colors: [`red`, `blue`, `balck`],
    stock: 10,
    sizes: [6, 7, 8, 9],
    discount: 40,
    onSale: true
  },
  
  {
    name: `Peach Flare Dress Zara`,
    imageUrl: `img/img2.jpeg`,
    productCode: 200,
    category: `Skirt`,
    price: `100`,
    rating: 3.1,
    brand: `Zara`,
    colors: [`red`, `blue`, `balck`],
    stock: 10,
    sizes: [6, 7, 8, 9],
    discount: 40,
    onSale: true
  },
  
   {
    name: `Dress with Pleats Zara`,
    imageUrl: `img/img16.jpeg`,
    productCode: 200,
    category: `Skirt`,
    price: `230`,
    rating: 3.1,
    brand: `Zara`,
    colors: [`red`, `blue`, `black`],
    stock: 10,
    sizes: [6, 7, 8, 9],
    discount: 40,
    onSale: true
  },
  
 {
    name: `Floral Maxi Dress Zara`,
    imageUrl: `img/img7.jpeg`,
    productCode: 100,
    category: `Skirt`,
    price: `200`,
    rating: 3.1,
    brand: `Zara`,
    colors: [`red`, `blue`, `balck`],
    stock: 10,
    sizes: [6, 7, 8, 9],
    discount: 40,
    onSale: true
  },
  
   {
    name: `Solid Maxi Dress Zara`,
    imageUrl: `img/img17.jpeg`,
    productCode: 80,
    category: `Skirt`,
    price: `200`,
    rating: 3.1,
    brand: `Zara`,
    colors: [`red`, `blue`, `balck`],
    stock: 10,
    sizes: [6, 7, 8, 9],
    discount: 40,
    onSale: true
  },
  
   {
    name: `Black Solid Bodycon Dress`,
    imageUrl: `img/img4.jpeg`,
    productCode: 120,
    category: `Skirt`,
    price: `200`,
    rating: 3.1,
    brand: `Zara`,
    colors: [`red`, `blue`, `balck`],
    stock: 10,
    sizes: [6, 7, 8, 9],
    discount: 40,
    onSale: true
  },
  
 {
    name: `Fit and Flare Dress Zara`,
    imageUrl: `img/img6.jpeg`,
    productCode: 300,
    category: `Skirt`,
    price: `200`,
    rating: 3.1,
    brand: `Zara`,
    colors: [`red`, `blue`, `balck`],
    stock: 10,
    sizes: [6, 7, 8, 9],
    discount: 40,
    onSale: true
  },
   {
    name: `Printed Maxi Dress`,
    imageUrl: `img/img5.jpeg`,
    productCode: 170,
    category: `Skirt`,
    price: `200`,
    rating: 3.1,
    brand: `Zara`,
    colors: [`red`, `blue`, `balck`],
    stock: 10,
    sizes: [6, 7, 8, 9],
    discount: 40,
    onSale: true
  },
  
{
    name: `Shift Orange Dress`,
    imageUrl: `img/img8.jpeg`,
    productCode: 111,
    category: `casual`,
    price: `210`,
    rating: 2,
    brand: `gap`,
    colors: [`red`, `blue`],
    stock: 10,
    sizes: [7, 8, 9, 10],
    discount: 5,
    onSale: true
  },
   {
    name: `Fit Blue Dress`,
    imageUrl: `img/img9.jpeg`,
    productCode: 112,
    category: `casual`,
    price: `110`,
    rating: 4.2,
    brand: `gap`,
    colors: [`red`, `blue`],
    stock: 6,
    sizes: [8, 9],
    discount: 5,
    onSale: false
  },
  {
    name: `High Low Black Dress `,
    imageUrl: `img/img10.jpeg`,
    productCode: 113,
    category: `casual`,
    price: `180`,
    rating: 3.7,
    brand: `gap`,
    colors: [`red`, `blue`, 'black'],
    stock: 112,
    sizes: [6, 7, 8],
    discount: 5,
    onSale: true
  },
   {
    name: `Pinafore Red Dress`,
    imageUrl: `img/img11.jpeg`,
    productCode: `PUMA103`,
    category: `casual`,
    price: `130`,
    rating: 2,
    brand: `gap`,
    colors: [`red`, `blue`],
    stock: 10,
    sizes: [7, 8, 9],
    discount: 5,
    onSale: true
  },
  {
    name: `Sheath Maroon Dress`,
    imageUrl: `img/img12.jpeg`,
    productCode: 113,
    category: `casual`,
    price: `180`,
    rating: 3.7,
    brand: `gap`,
    colors: [`red`, `blue`, 'black'],
    stock: 112,
    sizes: [6, 7, 8],
    discount: 5,
    onSale: true
  },
   {
    name: `Shirt Multicolor Dress`,
    imageUrl: `img/img13.jpeg`,
    productCode: `PUMA103`,
    category: `casual`,
    price: `130`,
    rating: 2,
    brand: `gap`,
    colors: [`red`, `blue`],
    stock: 10,
    sizes: [7, 8, 9],
    discount: 5,
    onSale: true
  },
  {
    name: `Skirt with Tie Belt`,
    imageUrl: `img/img14.jpeg`,
    productCode: `PUMA103`,
    category: `casual`,
    price: `130`,
    rating: 2,
    brand: `gap`,
    colors: [`red`, `blue`],
    stock: 10,
    sizes: [7, 8, 9],
    discount: 5,
    onSale: true
  },
  {
    name: `Maxi White Dress`,
    imageUrl: `img/img15.jpeg`,
    productCode: `PUMA103`,
    category: `casual`,
    price: `130`,
    rating: 2,
    brand: `gap`,
    colors: [`red`, `blue`],
    stock: 10,
    sizes: [7, 8, 9],
    discount: 5,
    onSale: true
  },
  {
    name: `Skirt with Tie Belt`,
    imageUrl: `img/img18.jpeg`,
    productCode: `PUMA103`,
    category: `casual`,
    price: `130`,
    rating: 2,
    brand: `gap`,
    colors: [`red`, `blue`],
    stock: 10,
    sizes: [7, 8, 9],
    discount: 5,
    onSale: true
  },
  {
    name: `Bodycon Multicolor Dress`,
    imageUrl: `img/img19.jpeg`,
    productCode: `PUMA103`,
    category: `casual`,
    price: `130`,
    rating: 2,
    brand: `gap`,
    colors: [`red`, `blue`],
    stock: 10,
    sizes: [7, 8, 9],
    discount: 5,
    onSale: true
  },
  {
    name: `Fit and Flare Pink Dress`,
    imageUrl: `img/img20.jpeg`,
    productCode: `PUMA103`,
    category: `casual`,
    price: `130`,
    rating: 2,
    brand: `gap`,
    colors: [`red`, `blue`],
    stock: 10,
    sizes: [7, 8, 9],
    discount: 5,
    onSale: true
  },
  {
    name: ` Wrap White Dress`,
    imageUrl: `img/img21.jpeg`,
    productCode: `PUMA103`,
    category: `casual`,
    price: `130`,
    rating: 2,
    brand: `gap`,
    colors: [`red`, `blue`],
    stock: 10,
    sizes: [7, 8, 9],
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
      <p class="productCardListItem"><h3>Price: ${dressData.price}</h3></p>
      <p class="productCardListItem"><h3>Average rating: ${dressData.rating}</h3></p>

        <a type="button" class="btn" id="addtocart"> Add to Cart</a> 
        </div>
</section>`;
}

function SearchAsHtml(){
  return `<div class="search">
  <input placeholder="Search for products, brands and more" type="search" name="find" id="find" >
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
  
//execution
window.addEventListener('load', () => {
  renderDresses(dressData);
  document.getElementById("searchMain").innerHTML = SearchAsHtml();
  document.getElementById("find").addEventListener("input",searchDresses);
  document.getElementById(`HighToLowBtn`).addEventListener("click", ProductHighToLow);
document.getElementById(`LowToHighBtn`).addEventListener("click", ProductLowToigh);
document.getElementById(`availabilityBtn`).addEventListener("click", ProductsByAvailability);

});