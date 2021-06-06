(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(t,e,n){t.exports={item:"CartItem_item__1mlhX",details:"CartItem_details__1tZHj",quantity:"CartItem_quantity__2nA7v",price:"CartItem_price__1rpOr",itemprice:"CartItem_itemprice__3_JK9",actions:"CartItem_actions__2JWbW"}},,,,function(t,e,n){t.exports={item:"ProductItem_item__3Y_W-",price:"ProductItem_price__2BoNx",actions:"ProductItem_actions__3VMxC"}},function(t,e,n){t.exports={notification:"Notification_notification__2DA3q",error:"Notification_error__3_8nL",success:"Notification_success__lvIy5"}},,,function(t,e,n){t.exports={button:"CartButton_button__1Ms3B",badge:"CartButton_badge__so6ad"}},,function(t,e,n){t.exports={card:"Card_card__1npml"}},function(t,e,n){t.exports={cart:"Cart_cart__3n3Ui"}},function(t,e,n){t.exports={header:"MainHeader_header__3nTJk"}},function(t,e,n){t.exports={products:"Products_products__h_o8k"}},,,,,function(t,e,n){},,,,,,,,,function(t,e,n){"use strict";n.r(e);var c=n(7),i=n.n(c),r=(n(22),n(1)),a=n(2),s=n(14),o=n.n(s),u=n(0),d=function(t){return Object(u.jsx)("section",{className:"".concat(o.a.card," ").concat(t.className?t.className:""),children:t.children})},l=n(15),j=n.n(l),b=n(4),p=n.n(b),f=n(5),h=Object(f.b)({name:"cart",initialState:{items:[],totalQuantity:0,changed:!1},reducers:{replaceCart:function(t,e){t.totalQuantity=e.payload.totalQuantity,t.items=e.payload.items},addItemToCart:function(t,e){var n=e.payload,c=t.items.find((function(t){return t.id==n.id}));t.totalQuantity++,t.changed=!0,c?(c.quantity++,c.totalPrice=c.totalPrice+n.price):t.items.push({id:n.id,price:n.price,quantity:1,totalPrice:n.price,name:n.title})},removeItemFromCart:function(t,e){var n=e.payload,c=t.items.find((function(t){return t.id===n}));t.totalQuantity--,t.changed=!0,1===c.quantity?t.items=t.items.filter((function(t){return t.id!==n})):(c.quantity--,c.totalPrice=c.totalPrice-c.price)}}}),m=h.actions,x=h,O=function(t){var e=Object(a.b)(),n=t.item,c=n.title,i=n.quantity,r=n.total,s=n.price,o=n.id;return Object(u.jsxs)("li",{className:p.a.item,children:[Object(u.jsxs)("header",{children:[Object(u.jsx)("h3",{children:c}),Object(u.jsxs)("div",{className:p.a.price,children:["$",r.toFixed(2)," ",Object(u.jsxs)("span",{className:p.a.itemprice,children:["($",s.toFixed(2),"/item)"]})]})]}),Object(u.jsxs)("div",{className:p.a.details,children:[Object(u.jsxs)("div",{className:p.a.quantity,children:["x ",Object(u.jsx)("span",{children:i})]}),Object(u.jsxs)("div",{className:p.a.actions,children:[Object(u.jsx)("button",{onClick:function(){e(m.removeItemFromCart(o))},children:"-"}),Object(u.jsx)("button",{onClick:function(){e(m.addItemToCart({id:o,title:c,price:s}))},children:"+"})]})]})]})},_=function(t){var e=Object(a.c)((function(t){return t.cart.items}));return Object(u.jsxs)(d,{className:j.a.cart,children:[Object(u.jsx)("h2",{children:"Your Shopping Cart"}),Object(u.jsx)("ul",{children:e.map((function(t){return Object(u.jsx)(O,{item:{id:t.id,title:t.name,quantity:t.quantity,total:t.totalPrice,price:t.price}},t.id)}))})]})},y=Object(f.b)({name:"ui",initialState:{cartIsVisible:!1,notification:null},reducers:{toggle:function(t){t.cartIsVisible=!t.cartIsVisible},showNotification:function(t,e){t.notification={status:e.payload.status,title:e.payload.title,message:e.payload.message}}}}),v=y.actions,g=y,N=n(12),C=n.n(N),w=function(t){var e=Object(a.c)((function(t){return t.cart.totalQuantity})),n=Object(a.b)();return Object(u.jsxs)("button",{className:C.a.button,onClick:function(){n(v.toggle())},children:[Object(u.jsx)("span",{children:"My Cart"}),Object(u.jsx)("span",{className:C.a.badge,children:e})]})},k=n(16),I=n.n(k),P=function(t){return Object(u.jsxs)("header",{className:I.a.header,children:[Object(u.jsx)("h1",{children:"ReduxCart"}),Object(u.jsx)("nav",{children:Object(u.jsx)("ul",{children:Object(u.jsx)("li",{children:Object(u.jsx)(w,{})})})})]})},q=function(t){return Object(u.jsxs)(r.Fragment,{children:[Object(u.jsx)(P,{}),Object(u.jsx)("main",{children:t.children})]})},Q=n(8),S=n.n(Q),B=function(t){var e=Object(a.b)(),n=t.title,c=t.price,i=t.description,r=t.id;return Object(u.jsx)("li",{className:S.a.item,children:Object(u.jsxs)(d,{children:[Object(u.jsxs)("header",{children:[Object(u.jsx)("h3",{children:n}),Object(u.jsxs)("div",{className:S.a.price,children:["$",c.toFixed(2)]})]}),Object(u.jsx)("p",{children:i}),Object(u.jsx)("div",{className:S.a.actions,children:Object(u.jsx)("button",{onClick:function(){e(m.addItemToCart({id:r,price:c,title:n}))},children:"Add to Cart"})})]})})},F=n(17),E=n.n(F),J=[{id:"p1",price:6,title:"My First Book",description:"The first book i ever wrote"},{id:"p2",price:5,title:"My second Book",description:"I am inspired"}],M=function(t){return Object(u.jsxs)("section",{className:E.a.products,children:[Object(u.jsx)("h2",{children:"Buy your favorite products"}),Object(u.jsx)("ul",{children:J.map((function(t){return Object(u.jsx)(B,{id:t.id,title:t.title,price:t.price,description:t.description},t.id)}))})]})},T=n(9),V=n.n(T),A=function(t){var e="";"error"===t.status&&(e=V.a.error),"success"===t.status&&(e=V.a.success);var n="".concat(V.a.notification," ").concat(e);return Object(u.jsxs)("section",{className:n,children:[Object(u.jsx)("h2",{children:t.title}),Object(u.jsx)("p",{children:t.message})]})},W=n(3),$=n.n(W),H=n(6),U=!0;var Y=function(){var t=Object(a.b)(),e=Object(a.c)((function(t){return t.ui.cartIsVisible})),n=Object(a.c)((function(t){return t.cart})),c=Object(a.c)((function(t){return t.ui.notification}));return Object(r.useEffect)((function(){t(function(){var t=Object(H.a)($.a.mark((function t(e){var n,c;return $.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=function(){var t=Object(H.a)($.a.mark((function t(){var e,n;return $.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://react-http-17270-default-rtdb.firebaseio.com/cart.json");case 2:return e=t.sent,t.next=5,e.json();case 5:if(n=t.sent,e.ok){t.next=8;break}throw new Error("Could not fetch cart data");case 8:return t.abrupt("return",n);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),t.prev=1,t.next=4,n();case 4:c=t.sent,e(m.replaceCart({items:c.items||[],totalQuantity:c.totalQuantity})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(v.showNotification({status:"error",title:"Error",message:"Something went wrong."}));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}())}),[t]),Object(r.useEffect)((function(){U?U=!1:n.changed&&t(function(t){return function(){var e=Object(H.a)($.a.mark((function e(n){var c;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(v.showNotification({status:"Pending",title:"Pending",message:"Sending cart data"})),c=function(){var e=Object(H.a)($.a.mark((function e(){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://react-http-17270-default-rtdb.firebaseio.com/cart.json",{method:"PUT",body:JSON.stringify({items:t.items,totalQuantity:t.totalQuantity})});case 2:if(e.sent.ok){e.next=5;break}throw new Error("Sending cart data failed");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.prev=2,e.next=5,c();case 5:n(v.showNotification({status:"success",title:"Success",message:"Sent cart data"})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),n(v.showNotification({status:"error",title:"Error",message:"Something went wrong."}));case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}()}(n))}),[n,t]),Object(u.jsxs)(u.Fragment,{children:[c&&Object(u.jsx)(A,{status:c.status,title:c.title,message:c.message}),Object(u.jsxs)(q,{children:[e&&Object(u.jsx)(_,{}),Object(u.jsx)(M,{})]})]})},D=Object(f.a)({reducer:{ui:g.reducer,cart:x.reducer}});i.a.render(Object(u.jsx)(a.a,{store:D,children:Object(u.jsx)(Y,{})}),document.getElementById("root"))}],[[31,1,2]]]);
//# sourceMappingURL=main.94a354eb.chunk.js.map