const CACHE='flycompare-stage115-offline-diagnostics-v3';
const PREFIX='flycompare-';
const ASSETS=['./','./index.html','./manifest.webmanifest','./icon.svg','./privacy.html'];
const appURL=new URL('./index.html',self.registration.scope);
self.addEventListener('install',event=>event.waitUntil((async()=>{
 const cache=await caches.open(CACHE);
 // Cache the app shell first. Optional assets must not prevent installation.
 await cache.add(new Request(appURL,{cache:'reload'}));
 await Promise.all(ASSETS.filter(asset=>asset!=='./index.html').map(asset=>cache.add(new Request(new URL(asset,self.registration.scope),{cache:'reload'})).catch(()=>{})));
 await self.skipWaiting();
})()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{
 const keys=await caches.keys();
 await Promise.all(keys.filter(key=>key.startsWith(PREFIX)&&key!==CACHE).map(key=>caches.delete(key)));
 await self.clients.claim();
})()));
self.addEventListener('fetch',event=>{
 const request=event.request;
 if(request.method!=='GET')return;
 const url=new URL(request.url),scope=new URL(self.registration.scope);
 if(url.origin!==scope.origin||!url.pathname.startsWith(scope.pathname))return;
 if(request.mode==='navigate'){
  event.respondWith((async()=>{
   const cache=await caches.open(CACHE);
   // The cached shell also handles the manifest start URL and query-string variants.
   const shell=await cache.match(appURL);
   if(shell){
    // Refresh for future visits without making offline startup depend on the network.
    event.waitUntil(fetch(request).then(response=>{if(response.ok)return cache.put(appURL,response.clone())}).catch(()=>{}));
    return shell;
   }
   try{const response=await fetch(request);if(response.ok)event.waitUntil(cache.put(appURL,response.clone()).catch(()=>{}));return response}
   catch(error){return new Response('FlyCompare has not been cached yet. Reconnect and open it once.',{status:503,headers:{'Content-Type':'text/plain; charset=utf-8'}})}
  })());
  return;
 }
 event.respondWith((async()=>{
  const cache=await caches.open(CACHE);
  try{const response=await fetch(request);if(response.ok&&ASSETS.some(asset=>new URL(asset,scope).pathname===url.pathname))event.waitUntil(cache.put(request,response.clone()).catch(()=>{}));return response}
  catch(error){return await cache.match(request)||Response.error()}
 })());
});