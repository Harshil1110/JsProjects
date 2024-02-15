const products = [
  {
    name: "Smartphone",
    heading: "Latest Model",
    price: 599.99,
    imageUrl:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c21hcnRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Laptop",
    heading: "High Performance",
    price: 1299.99,
    imageUrl:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGFwdG9wfGVufDB8fDB8fHww",
  },
  {
    name: "Headphones",
    heading: "Wireless",
    price: 149.99,
    imageUrl:
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGVhZHBob25lfGVufDB8fDB8fHww",
  },
];

const popular = [
  {
    name: "Smartphone",
    heading: "Latest Model",
    price: 599.99,
    imageUrl:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c21hcnRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Laptop",
    heading: "High Performance",
    price: 1299.99,
    imageUrl:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGFwdG9wfGVufDB8fDB8fHww",
  },
  {
    name: "Headphones",
    heading: "Wireless",
    price: 149.99,
    imageUrl:
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGVhZHBob25lfGVufDB8fDB8fHww",
  },
];

const cart = [];

// show the products on the page
function addProducts() {
  var clutter = "";

  products.map((obj, index) => {
    clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
    <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
        <img class="w-full h-full object-cover" src=${obj.imageUrl} />
    </div>
    <div class="data w-full px-2 py-5">
        <h1 class="font-semibold text-xl leading-none tracking-tight">${obj.name}</h1>
        <div class="flex justify-between w-full items-center mt-2">
            <div class="w-1/2">
                <h3 class="font-semibold opacity-20">${obj.heading}</h3>
                <h4 class="font-semibold mt-2"> &#8377 ${obj.price}</h4>
            </div>
            <button data-index  =${index} class="add w-10 h-10 rounded-full shader text-yellow-400"><i data-index=${index}
                    class=" add ri-add-line"></i></button>
        </div>
    </div>
</div>`;
  });
  document.querySelector(".products").innerHTML = clutter;
  //   console.log(clutter);
}

// show the popular on the page
function addPopular() {
  var clutter = "";

  popular.map((obj) => {
    clutter += ` <div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
        <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
            <img class="w-full h-full object-cover"
                src=${obj.imageUrl}}
                alt="">
        </div>
        <div class="data py-2 w-full">
            <h1 class="leading-none font-semibold">${obj.name}</h1>
            <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${obj.heading}</h4>
            <h4 class="mt-3 font-semibold text-zinc-500">&#8377 ${obj.price}</h4>
        </div>
    </div>`;
  });
  document.querySelector(".populars").innerHTML = clutter;
}

// add to cart functionality
function addToCart() {
  document.querySelector(".products").addEventListener("click", (details) => {
    if (details.target.classList.contains("add")) {
      cart.push(products[details.target.dataset.index]);
    }
  });
}

//show cart items
function showCart() {
  const cartIcon = document.querySelector(".carticon");
  let isCartVisible = false;

  cartIcon.addEventListener("click", () => {
    isCartVisible = !isCartVisible; // Toggle the cart visibility state
    if (isCartVisible) {
      // If cart is visible, show it
      document.querySelector(".cartexpnd").style.display = "block";

      var clutter = "";
      cart.map((obj, index) => {
        clutter += `<div class="flex gap-2 bg-white p-2 rounded-lg">
            <div class="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden">
            <img class="w-full h-full object-cover" src=${obj.imageUrl}/>
            </div>
            <div>
                <h3 class="font-semibold">${obj.name}</h3>
                <h5 class="text-sm font-semibold opacity-80">${obj.price}</h5>
            </div></div>`;
      });
      document.querySelector(".cartexpnd").innerHTML = clutter;
    } else {
      // If cart is hidden, hide it
      document.querySelector(".cartexpnd").style.display = "none";
    }
  });
}

showCart();
addToCart();
addPopular();
addProducts();
