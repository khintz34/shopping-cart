function sortCart(cart) {
  let newCart = cart.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  console.log(newCart);
}

export default sortCart;
