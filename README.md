# Shopify Cart Fetch
Shopify Cart API with zero dependencies, TypeScript, lightweight and modular.

# Install
```shell script
yarn add @hayes0724/shopify-cart-fetch
```

```shell script
npm install @hayes0724/shopify-cart-fetch
```
# Usage
You can use the class which implements all methods or import only the functions you need

## Class
```javascript
import Cart from '@hayes0724/shopify-cart-fetch';
const shopifyCart = new Cart();
shopifyCart.getState().then(state => console.log(state))
```

## Modules
```javascript
import {getState, removeItem, updateItem, addItem, clearItems} from '@hayes0724/shopify-cart-fetch'
getState().then(state => console.log(state))
```

# API
>
> <a name="api-Cart"></a>
> ### Class [`Cart`](#api-Cart)
> <em>Cart API</em>  
> <em>------------------------------------------------------------------------------</em>  
> <em>The Cart class with all methods. You can also import the functions individually</em>  
> Source code: [`<>`](http://github.com/hayes0724/shopify-cart-fetch/blob/master/src/index.esm.ts#L32-L47)  
>  
> Properties:  
> > **.state**<sub>?</sub> <sup><code>CartState</code></sup>  
> > **.getState** <sup><code>() =&gt; Promise&lt;CartState&gt;</code></sup>  
> > **.addItem** <sup><code>(items: CartItemAdd) =&gt; Promise&lt;CartLineItem&gt;</code></sup>  
> > **.addItemFromForm** <sup><code>(productForm: HTMLFormElement) =&gt; Promise&lt;CartLineItem&gt;</code></sup>  
> > **.clearItems** <sup><code>() =&gt; Promise&lt;CartState&gt;</code></sup>  
> > **.removeItem** <sup><code>(item: CartItemRemove) =&gt; Promise&lt;CartState&gt;</code></sup>  
> > **.updateItem** <sup><code>(item: CartItemUpdate) =&gt; Promise&lt;CartState&gt;</code></sup>  
> > **.updateItemById** <sup><code>(item: CartItemUpdateById) =&gt; Promise&lt;CartState&gt;</code></sup>  
> > **.getAttributes** <sup><code>() =&gt; Promise&lt;Attributes&gt;</code></sup>  
> > **.updateAttributes** <sup><code>(attributes: Attributes) =&gt; Promise&lt;CartState&gt;</code></sup>  
> > **.clearAttributes** <sup><code>() =&gt; Promise&lt;CartState&gt;</code></sup>  
> > **.getNote** <sup><code>() =&gt; Promise&lt;string&gt;</code></sup>  
> > **.updateNote** <sup><code>(note: string) =&gt; Promise&lt;CartState&gt;</code></sup>  
> > **.clearNote** <sup><code>() =&gt; Promise&lt;CartState&gt;</code></sup>  
>
> <a name="api-addItem"></a>
> ### Function [`addItem`](#api-addItem)
> <em>Use the POST /cart/add.js endpoint to add product to cart.</em>  
> Source code: [`<>`](http://github.com/hayes0724/shopify-cart-fetch/blob/master/src/lib/functions.ts#L30-L32)  
> > **addItem( )** <sup>&rArr; <code>Promise&lt;CartLineItem&gt;</code></sup> [`<>`](http://github.com/hayes0724/shopify-cart-fetch/blob/master/src/lib/functions.ts#L30-L32)  
> > &emsp;&#x25aa; items <sup><code>CartItemAdd</code></sup>  
>
> <a name="api-addItemFromForm"></a>
> ### Function [`addItemFromForm`](#api-addItemFromForm)
> <em>Adds an item to your cart from a product form. The form must contain an input with name="id".</em>  
> <em>If the quantity specified is more than what is available, the promise will be rejected and the cart state will remain unchanged</em>  
> Source code: [`<>`](http://github.com/hayes0724/shopify-cart-fetch/blob/master/src/lib/functions.ts#L41-L49)  
> > **addItemFromForm( )** <sup>&rArr; <code>Promise&lt;CartLineItem&gt;</code></sup> [`<>`](http://github.com/hayes0724/shopify-cart-fetch/blob/master/src/lib/functions.ts#L41-L49)  
> > &emsp;&#x25aa; productForm <sup><code>HTMLFormElement</code></sup>  
>
> <a name="api-clearAttributes"></a>
> ### Function [`clearAttributes`](#api-clearAttributes)
> <em>Clear all cart attributes from Shopify and return the state</em>  
> Source code: [`<>`](http://github.com/hayes0724/shopify-cart-fetch/blob/master/src/lib/functions.ts#L121-L132)  
> > **clearAttributes( )** <sup>&rArr; <code>Promise&lt;CartState&gt;</code></sup> [`<>`](http://github.com/hayes0724/shopify-cart-fetch/blob/master/src/lib/functions.ts#L121-L132)  
>
> <a name="api-clearItems"></a>
> ### Function [`clearItems`](#api-clearItems)
> <em>Use the POST /cart/clear.js endpoint to set all quantities of all line items in the cart to zero.</em>  
> Source code: [`<>`](http://github.com/hayes0724/shopify-cart-fetch/blob/master/src/lib/functions.ts#L56-L58)  
> > **clearItems( )** <sup>&rArr; <code>Promise&lt;CartState&gt;</code></sup> [`<>`](http://github.com/hayes0724/shopify-cart-fetch/blob/master/src/lib/functions.ts#L56-L58)  
>
> <a name="api-clearNote"></a>
> ### Function [`clearNote`](#api-clearNote)
> <em>Remove the cart note</em>  
> Source code: [`<>`](http://github.com/hayes0724/shopify-cart-fetch/blob/master/src/lib/functions.ts#L158-L160)  
> > **clearNote( )** <sup>&rArr; <code>Promise&lt;CartState&gt;</code></sup> [`<>`](http://github.com/hayes0724/shopify-cart-fetch/blob/master/src/lib/functions.ts#L158-L160)  
>
> <a name="api-getAttributes"></a>
> ### Function [`getAttributes`](#api-getAttributes)
> <em>Get the current cart state from Shopify and return the attributes</em>  
> Source code: [`<>`](http://github.com/hayes0724/shopify-cart-fetch/blob/master/src/lib/functions.ts#L100-L102)  
> > **getAttributes( )** <sup>&rArr; <code>Promise&lt;Attributes&gt;</code></sup> [`<>`](http://github.com/hayes0724/shopify-cart-fetch/blob/master/src/lib/functions.ts#L100-L102)  
>
> <a name="api-getNote"></a>
> ### Function [`getNote`](#api-getNote)
> <em>Get the current cart state from Shopify and return the note</em>  
> Source code: [`<>`](http://github.com/hayes0724/shopify-cart-fetch/blob/master/src/lib/functions.ts#L139-L141)  
> > **getNote( )** <sup>&rArr; <code>Promise&lt;string&gt;</code></sup> [`<>`](http://github.com/hayes0724/shopify-cart-fetch/blob/master/src/lib/functions.ts#L139-L141)  
>
> <a name="api-getState"></a>
> ### Function [`getState`](#api-getState)
> <em>Use the GET /cart.js endpoint to get the cart as JSON.</em>  
> Source code: [`<>`](http://github.com/hayes0724/shopify-cart-fetch/blob/master/src/lib/functions.ts#L17-L21)  
> > **getState( )** <sup>&rArr; <code>Promise&lt;CartState&gt;</code></sup> [`<>`](http://github.com/hayes0724/shopify-cart-fetch/blob/master/src/lib/functions.ts#L17-L21)  
>
> <a name="api-removeItem"></a>
> ### Function [`removeItem`](#api-removeItem)
> <em>Removes an item from the cart using line item key or product id. Returns a promise which fulfills with the updated cart state.</em>  
> Source code: [`<>`](http://github.com/hayes0724/shopify-cart-fetch/blob/master/src/lib/functions.ts#L91-L93)  
> > **removeItem( )** <sup>&rArr; <code>Promise&lt;CartState&gt;</code></sup> [`<>`](http://github.com/hayes0724/shopify-cart-fetch/blob/master/src/lib/functions.ts#L91-L93)  
> > &emsp;&#x25aa; item <sup><code>({ quantity: 0; } &amp; { id: CartItemPropertyID; }) | ({ quantity: 0; } &amp; { line: string; })</code></sup>  
>
> <a name="api-updateAttributes"></a>
> ### Function [`updateAttributes`](#api-updateAttributes)
> <em>Update cart attributes from Shopify and return the state</em>  
> Source code: [`<>`](http://github.com/hayes0724/shopify-cart-fetch/blob/master/src/lib/functions.ts#L110-L114)  
> > **updateAttributes( )** <sup>&rArr; <code>Promise&lt;CartState&gt;</code></sup> [`<>`](http://github.com/hayes0724/shopify-cart-fetch/blob/master/src/lib/functions.ts#L110-L114)  
> > &emsp;&#x25aa; attributes <sup><code>Attributes</code></sup>  
>
> <a name="api-updateItem"></a>
> ### Function [`updateItem`](#api-updateItem)
> <em>The /cart/change.js endpoint changes the quantity and properties object of a cart line item.</em>  
> <em>Only items already in your cart can be changed, and only one line item at a time can be changed.</em>  
> Source code: [`<>`](http://github.com/hayes0724/shopify-cart-fetch/blob/master/src/lib/functions.ts#L67-L69)  
> > **updateItem( )** <sup>&rArr; <code>Promise&lt;CartState&gt;</code></sup> [`<>`](http://github.com/hayes0724/shopify-cart-fetch/blob/master/src/lib/functions.ts#L67-L69)  
> > &emsp;&#x25aa; item <sup><code>({ quantity: number; properties?: LineItemProperties; } &amp; { line: string; }) | ({ quantity: number; properties?: LineItemProperties; } &amp; { id: number; })</code></sup>  
>
> <a name="api-updateItemById"></a>
> ### Function [`updateItemById`](#api-updateItemById)
> <em>The /cart/change.js endpoint changes the quantity.</em>  
> <em>Only items already in your cart can be changed, and only one line item at a time can be changed.</em>  
> Source code: [`<>`](http://github.com/hayes0724/shopify-cart-fetch/blob/master/src/lib/functions.ts#L78-L82)  
> > **updateItemById( )** <sup>&rArr; <code>Promise&lt;CartState&gt;</code></sup> [`<>`](http://github.com/hayes0724/shopify-cart-fetch/blob/master/src/lib/functions.ts#L78-L82)  
> > &emsp;&#x25aa; item <sup><code>CartItemUpdateById</code></sup>  
>
> <a name="api-updateNote"></a>
> ### Function [`updateNote`](#api-updateNote)
> <em>Update or create the cart note</em>  
> Source code: [`<>`](http://github.com/hayes0724/shopify-cart-fetch/blob/master/src/lib/functions.ts#L149-L151)  
> > **updateNote( )** <sup>&rArr; <code>Promise&lt;CartState&gt;</code></sup> [`<>`](http://github.com/hayes0724/shopify-cart-fetch/blob/master/src/lib/functions.ts#L149-L151)  
> > &emsp;&#x25aa; note <sup><code>string</code></sup>  
