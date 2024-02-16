//Vue.config.devtools = true;
new Vue({
  el: "#app",
  data: {
    products: [
      {
        id: 1,
        imgSrc:
          "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=cc37ced2e51f9f58430dfed1192067cd",
        name: "Learn Vue",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, nobis minus! Dicta perferendis rem pariatur sapiente nobis.",
        price: 50,
        inStock: 3
      },

      {
        id: 2,
        imgSrc:
          "https://images.unsplash.com/photo-1516101922849-2bf0be616449?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=506cdfe576a1dd5545a2850ac143b2be",
        name: "Vue for Beginners",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, nobis minus! Dicta perferendis rem pariatur sapiente nobis.",
        price: 150,
        inStock: 1
      },

      {
        id: 3,
        imgSrc:
          "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=c9cebb448c07815ac2a1c4141b4cdd18",
        name: "Advanced Vue Development",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, nobis minus! Dicta perferendis rem pariatur sapiente nobis.",
        price: 180,
        inStock: 10
      },

      {
        id: 4,
        imgSrc:
          "https://images.unsplash.com/photo-1485856407642-7f9ba0268b51?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=5a819fb0cd534e9c1af5d38c4983eeb3",
        name: "ES6 for Everybody",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, nobis minus! Dicta perferendis rem pariatur sapiente nobis.",
        price: 40,
        inStock: 8
      },

      {
        id: 5,
        imgSrc:
          "https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=1174b1ff26fccde5cdfda64087bfc6ac",
        name: "Advanced JavaScript",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, nobis minus! Dicta perferendis rem pariatur sapiente nobis.",
        price: 99,
        inStock: 20
      },

      {
        id: 6,
        imgSrc:
          "https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=070ca0d38724c4382129ae8e0004a5ba",
        name: "Vue and Vuex",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, nobis minus! Dicta perferendis rem pariatur sapiente nobis.",
        price: 199,
        inStock: 0
      }
    ],

    cartItems: [],

    isCartView: false,
    pageTitle: "Our Books"
  },

  methods: {
    // responsible for showing the cart page
    // when View cart button is clicked
    displayCartView() {
      this.isCartView = true;
      this.pageTitle = "Your Cart";
    },

    // responsible for showing products page
    // when logo is clicked
    goToHomePage() {
      this.isCartView = false;
      this.pageTitle = "Our Books";
    },

    getCartItems(prod) {
      if (this.cartItems.length > 0) {
        for (let i = 0; i < this.cartItems.length; i++) {
          if (this.cartItems[i].item.id === prod.id) {
            this.cartItems[i].quantity++;
          } else {
            this.cartItems.push({
              item: prod,
              quantity: 1
            });
          }
        }
      }
    },

    // if the product is already in the cart,
    // increase its quantity by 1
    // else create a new object with the
    // selected product info and push it
    // into the cartItems array.
    // Decrease stock quantity when item is
    // added to the cart
    addProdToCart(prod) {
      for (let i = 0; i < this.cartItems.length; i++) {
        if (this.cartItems[i].item.id === prod.id) {
          this.cartItems[i].quantity++;
          return;
        }
      }
      this.cartItems.push({
        item: prod,
        quantity: 1
      });

      // decrease stock when product
      // is added to the cart
      //console.log(this.cartItems);
      prod.inStock--;
    },

    // + button functionality in the
    // cart: quantity goes up by 1,
    // in stock goes down by 1
    increaseQuantity(prod) {
      prod.quantity++;
      prod.item.inStock--;
    },

    // when the quantity reaches 0, the item
    // is removed from the cart
    removeProdFromCart(prod) {
      const prodIndex = this.cartItems.indexOf(prod);
      this.cartItems.splice(prodIndex, 1);
    },

    // - button functionality in the cart:
    // quantity is decreased by 1,
    // in stock is increased by 1,
    // if quantity = 0, product is removed
    // from the cart
    decreaseQuantity(prod) {
      prod.quantity--;
      prod.item.inStock++;
      if(prod.quantity <= 0) {
        this.removeProdFromCart(prod);
      }
    },

    checkout() {
      // remove all products from the cart
      this.cartItems = [];
    }
  },

  computed: {
    // this function keeps an eye on the quantity in
    // the cart, which may vary as users add or remove
    // products and calculates the total each time
    calculateTotal() {
      let total = 0;
      for (let i = 0; i < this.cartItems.length; i++) {
        total += this.cartItems[i].item.price * this.cartItems[i].quantity;
      }
      return total;
    }
  }
});
