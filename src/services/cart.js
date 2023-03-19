const localStorageKey = "cart";

function getCurrentUser() {
  const value = localStorage.getItem("current-user");

  if (!value) {
    return "anonymous";
  }

  return value;
}

function getCartItems() {
  const value = localStorage.getItem(localStorageKey);
  if (!value) {
    return {};
  }

  return JSON.parse(value);
}

function getCartItemsForCurrentUser() {
  const currentUser = getCurrentUser();
  const cartItems = getCartItems();

  const currentUserCartItems = cartItems[currentUser] ?? [];

  return currentUserCartItems;
}

function addToCart(productId) {
  const currentUser = getCurrentUser();
  const cartItems = getCartItems();

  const currentUserCartItems = cartItems[currentUser] ?? [];

  cartItems[currentUser] = [...currentUserCartItems, { productId: productId }];

  localStorage.setItem(localStorageKey, JSON.stringify(cartItems));
}

function removeFromCart(productId) {
  const currentUser = getCurrentUser();
  const cartItems = getCartItems();

  const currentUserCartItems = cartItems[currentUser] ?? [];

  cartItems[currentUser] = [
    ...currentUserCartItems.filter((x) => x.productId !== productId),
  ];

  localStorage.setItem(localStorageKey, JSON.stringify(cartItems));
}

export default {
  getForCurrentUser: getCartItemsForCurrentUser,
  add: addToCart,
  remove: removeFromCart,
};
