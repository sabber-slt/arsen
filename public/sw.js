if(!self.define){let e,s={};const c=(c,n)=>(c=new URL(c+".js",n).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(n,a)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>c(e,i),o={module:{uri:i},exports:t,require:r};s[i]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(a(...e),t)))}}define(["./workbox-6a1bf588"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Arsen Mobile.apk",revision:"b1cad0f8a5b20a97fb6e8b2818632cea"},{url:"/_next/static/chunks/78e521c3-3c27df7214335ba3.js",revision:"3c27df7214335ba3"},{url:"/_next/static/chunks/936-76191fca0e086328.js",revision:"76191fca0e086328"},{url:"/_next/static/chunks/953-6e057622b2374501.js",revision:"6e057622b2374501"},{url:"/_next/static/chunks/framework-715a76d8b0695da7.js",revision:"715a76d8b0695da7"},{url:"/_next/static/chunks/main-048f193507c85df5.js",revision:"048f193507c85df5"},{url:"/_next/static/chunks/pages/_app-a312cf1bca520b92.js",revision:"a312cf1bca520b92"},{url:"/_next/static/chunks/pages/_error-7397496ca01950b1.js",revision:"7397496ca01950b1"},{url:"/_next/static/chunks/pages/about-7298c12daa408664.js",revision:"7298c12daa408664"},{url:"/_next/static/chunks/pages/admin-d5b26e8ff79e229e.js",revision:"d5b26e8ff79e229e"},{url:"/_next/static/chunks/pages/admin/add-68894e565b173bd0.js",revision:"68894e565b173bd0"},{url:"/_next/static/chunks/pages/admin/parcham-2263b9f9bd829d0e.js",revision:"2263b9f9bd829d0e"},{url:"/_next/static/chunks/pages/admin/portarafdar-7c3706c323e3e8c7.js",revision:"7c3706c323e3e8c7"},{url:"/_next/static/chunks/pages/admin/product-6d239327df611c10.js",revision:"6d239327df611c10"},{url:"/_next/static/chunks/pages/admin/sales-726610abf6fa6e54.js",revision:"726610abf6fa6e54"},{url:"/_next/static/chunks/pages/admin/shegeftangiz-a34bfcdc4ddd3ce8.js",revision:"a34bfcdc4ddd3ce8"},{url:"/_next/static/chunks/pages/admin/total-bbe3cd3ce76c739c.js",revision:"bbe3cd3ce76c739c"},{url:"/_next/static/chunks/pages/counsel-694647f4f97b9271.js",revision:"694647f4f97b9271"},{url:"/_next/static/chunks/pages/index-790e2de3c8e83776.js",revision:"790e2de3c8e83776"},{url:"/_next/static/chunks/pages/payment-c72b09097bf914d6.js",revision:"c72b09097bf914d6"},{url:"/_next/static/chunks/pages/products-024cc612de5ef528.js",revision:"024cc612de5ef528"},{url:"/_next/static/chunks/pages/products/%5Bid%5D-46c44bebb4ab8c97.js",revision:"46c44bebb4ab8c97"},{url:"/_next/static/chunks/pages/products/compare-053c9fef628b4762.js",revision:"053c9fef628b4762"},{url:"/_next/static/chunks/pages/products/filter-a828d6b6abe3d738.js",revision:"a828d6b6abe3d738"},{url:"/_next/static/chunks/pages/result-70cdbc537308d9a9.js",revision:"70cdbc537308d9a9"},{url:"/_next/static/chunks/pages/result/%5B...slug%5D-f8a3398acbd3cc6c.js",revision:"f8a3398acbd3cc6c"},{url:"/_next/static/chunks/pages/shop-0be0175d70f1145c.js",revision:"0be0175d70f1145c"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-2c644d3580cecc35.js",revision:"2c644d3580cecc35"},{url:"/_next/static/css/8e6ef1ea75c1a8bc.css",revision:"8e6ef1ea75c1a8bc"},{url:"/_next/static/media/Lalezar.3ae96930.ttf",revision:"3ae96930"},{url:"/_next/static/tNuvlp-DRUDPcZdALJqMC/_buildManifest.js",revision:"8a79066ef62b885578230518dc82d182"},{url:"/_next/static/tNuvlp-DRUDPcZdALJqMC/_ssgManifest.js",revision:"5352cb582146311d1540f6075d1f265e"},{url:"/arsen.png",revision:"a0db33d337cefe01255f029110181e65"},{url:"/enam.png",revision:"d2503a17da61f50052cf50abc7146ef4"},{url:"/filter.jpeg",revision:"84cad64cb4169ab2be50e16f83ea29f7"},{url:"/icons/icon-128x128.png",revision:"63dd91c3bc2479673b52a70fa8195856"},{url:"/icons/icon-144x144.png",revision:"69996c2328b2e56453f8c3eb54bc8a09"},{url:"/icons/icon-152x152.png",revision:"5d15c3c6921ea01ea14d62642170d382"},{url:"/icons/icon-192x192.png",revision:"80134962331b975dd0b6005884681e39"},{url:"/icons/icon-384x384.png",revision:"eec9b60e0db03c85ce4cfbae4d0b94cb"},{url:"/icons/icon-512x512.png",revision:"a0db33d337cefe01255f029110181e65"},{url:"/icons/icon-72x72.png",revision:"2dea68cf5e4ecb3fcfd7f1c1d35644f1"},{url:"/icons/icon-96x96.png",revision:"10dc33862f9899c279327c08c81871ea"},{url:"/manifest.json",revision:"1b42f8bbbe3633147b21bb50ea862d98"},{url:"/star1.png",revision:"76554e9164693ef34a9495437515c900"},{url:"/video.webm",revision:"296acdf8cce8ca330c88ecf621b90e98"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
