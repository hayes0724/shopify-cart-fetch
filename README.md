# Shopify Cart Fetch

# Install

# API
Docs generated using [`docts`](https://github.com/charto/docts)
>
> <a name="api-Cart"></a>
> ### Class [`Cart`](#api-Cart)
> Source code: [`<>`](http://github.com/hayes0724/shopify-cart-fetch/blob/master/src/index.ts#L3-L13)  
>  
> Methods:  
> > **.get( )** <sup>&rArr; <code>Promise&lt;string | [CartState](#api-CartState)&gt;</code></sup> [`<>`](http://github.com/hayes0724/shopify-cart-fetch/blob/master/src/index.ts#L8-L12)  
> > &emsp;<em>Use the GET /cart.js endpoint to get the cart as JSON.</em>  
>
> <a name="api-CartState"></a>
> ### Class [`CartState`](#api-CartState)
> <em>The current cart object from Shopify</em>  
> <em>https://shopify.dev/docs/themes/ajax-api/reference/cart#get-cart-js</em>  
> Source code: [`<>`](http://github.com/hayes0724/shopify-cart-fetch/blob/master/src/state.ts#L5-L17)  
>  
> Properties:  
> > **.token**<sub>?</sub> <sup><code>string</code></sup>  
> > **.note**<sub>?</sub> <sup><code>string</code></sup>  
> > **.attributes**<sub>?</sub> <sup><code>Attributes</code></sup>  
> > **.total_price**<sub>?</sub> <sup><code>number</code></sup>  
> > **.total_weight**<sub>?</sub> <sup><code>number</code></sup>  
> > **.item_count**<sub>?</sub> <sup><code>number</code></sup>  
> > **.items**<sub>?</sub> <sup><code>Items[]</code></sup>  
> > **.requires_shipping**<sub>?</sub> <sup><code>boolean</code></sup>  
> > **.currency**<sub>?</sub> <sup><code>string</code></sup>  
> > **.items_subtotal_price**<sub>?</sub> <sup><code>number</code></sup>  
> > **.cart_level_discount_applications**<sub>?</sub> <sup><code>CartLevelDiscountApplications[]</code></sup>  
