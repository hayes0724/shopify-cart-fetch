# Shopify Cart Fetch
Shopify Cart API with zero dependencies, written in TypeScript, and under 1kb gzipped.

# Documentation
For more detailed documentation, see the [docs](https://hayes0724.github.io/shopify-cart-fetch/)

# Install
```shell script
yarn add @hayes0724/shopify-cart-fetch
```

```shell script
npm install @hayes0724/shopify-cart-fetch
```
# Usage

```javascript
import { ShopifyCart } from '@hayes0724/shopify-cart-fetch';

// use default settings
const shopifyCart = new ShopifyCart();
// provide custom settings
const shopifyCart = new ShopifyCart(settings);
```

## Cart state
Get the cart from Shopify, which is stored in the state property.

**Returns** [`Promise<CartState>`](https://hayes0724.github.io/shopify-cart-fetch/modules.html#CartState)

```javascript
shopifyCart
  .getState()
  .then(state => console.log(state))

console.log(shopifyCart.state)
```

## Add items
Add one or more items to the cart.

#### Parameters
- items: [`CartItems`](https://hayes0724.github.io/shopify-cart-fetch/modules.html#CartItems)

**Returns** [`Promise<CartItemsResponse>`](https://hayes0724.github.io/shopify-cart-fetch/modules.html#CartItemsResponse)

```javascript
shopifyCart
  .addItem({id: 39766656254012})
  .then(lineItems => console.log(lineItems))
```

```javascript
shopifyCart
  .addItem([
    {id: 39766656254012},
    {id: 39766656254013}
  ])
  .then(lineItems => console.log(lineItems))
```

## Add item from form
Adds an item to your cart from a product form. The form must contain an 
input with name="id". If the quantity specified is more than what is available, 
the promise will be rejected and the cart state will remain unchanged

#### Parameters
- form: `HTMLFormElement`

**Returns** [`Promise<CartItemsResponse>`](https://hayes0724.github.io/shopify-cart-fetch/modules.html#CartItemsResponse)


### HTML
```html
<form>
  <input type="hidden" name="id" value="39766656254012">
  <input type="hidden" name="quantity" value="1">
</form>
```
### JS
```javascript
const form = document.querySelector("form")

form.addEventListener("submit", () => {
  shopifyCart
    .addItemFromForm(form)
    .then(lineItems => console.log(lineItems))
});
```

## Clear attributes
Clear all cart attributes from Shopify and return the state.

**Returns** [`Promise<CartState>`](https://hayes0724.github.io/shopify-cart-fetch/modules.html#CartState)

```javascript
  shopifyCart
    .clearAttributes()
    .then(state => console.log(state))
```

## Clear items
Set all quantities of all line items in the cart to zero.

**Returns** [`Promise<CartState>`](https://hayes0724.github.io/shopify-cart-fetch/modules.html#CartState)

```javascript
  shopifyCart
    .clearItems()
    .then(state => console.log(state))
```

## Clear note
Remove the cart note.

**Returns** [`Promise<CartState>`](https://hayes0724.github.io/shopify-cart-fetch/modules.html#CartState)

```javascript
  shopifyCart
    .clearNote()
    .then(state => console.log(state))
```

## Remove item
Removes an item from the cart using line item key or product id. 

#### Parameters
- items: [`CartItemRemove`](https://hayes0724.github.io/shopify-cart-fetch/modules.html#CartItemRemove)

**Returns** [`Promise<CartState>`](https://hayes0724.github.io/shopify-cart-fetch/modules.html#CartState)

Remove an item from cart using a variant id.
```javascript
  shopifyCart
    .removeItem({id: 39766656254012})
    .then(state => console.log(state))
```
Remove an item from cart using the line number.
```javascript
  shopifyCart
    .removeItem({line: 0})
    .then(state => console.log(state))
```

## Update attributes
Update the cart attributes.

#### Parameters
- attributes: [`Attributes`](https://hayes0724.github.io/shopify-cart-fetch/modules.html#Attributes)

**Returns** [`Promise<CartState>`](https://hayes0724.github.io/shopify-cart-fetch/modules.html#CartState)

```javascript
  shopifyCart
    .updateAttributes({'gift wrap': 'true'})
    .then(state => console.log(state))
```

## Update item
Changes the quantity and properties object of a cart line item. Only items already in 
your cart can be changed, and only one line item at a time can be changed.

#### Parameters
- item: [`CartItemUpdate`](https://hayes0724.github.io/shopify-cart-fetch/modules.html#CartItemUpdate)

**Returns** [`Promise<CartState>`](https://hayes0724.github.io/shopify-cart-fetch/modules.html#CartState)

```javascript
  shopifyCart
    .updateItem({id: 39766656254012, quantity: 3})
    .then(state => console.log(state))
```

## Update note
Update or create a cart note.

#### Parameters
- note: string

**Returns** [`Promise<CartState>`](https://hayes0724.github.io/shopify-cart-fetch/modules.html#CartState)

```javascript
  shopifyCart
    .updateNote("updated note")
    .then(state => console.log(state))
```

# Events
The cart will create events for requests and when it's initialized. 
The cart class and api route are included in all events.

- cart: [`ShopifyCart`](https://hayes0724.github.io/shopify-cart-fetch/docs/classes/ShopifyCart.html)
- route: [`CartRoute`](https://hayes0724.github.io/shopify-cart-fetch/modules.html#CartRoute)

## cart:ready
Triggered after Shopify Cart has completed initialising.
```javascript
document.addEventListener('cart:ready', (event) => {
  const { cart, route } = event.details
  // Event handling here.
})
```

## cart:requestStarted
Triggered after Shopify Cart has completed initialising.
```javascript
document.addEventListener('cart:requestStarted', (event) => {
  const { cart, route } = event.details
  // Event handling here.
})
```

## cart:requestComplete
Triggered after Shopify Cart has completed initialising.
```javascript
document.addEventListener('cart:requestComplete', (event) => {
  const { cart, route } = event.details
  // Event handling here.
})
```
