'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "2f205fdd698da1a65fa633e72020382c",
"version.json": "2aa3c57100564158890f8d71e4f523a9",
"splash/img/light-2x.png": "a05816164f51c9f149c5c4f989a0152d",
"splash/img/dark-1x.gif": "569f2ec3012794bfe494706aec80ccdc",
"splash/img/dark-4x.png": "ca4091b55c7e88f56fa7cfb58cc0d1dd",
"splash/img/light-3x.png": "28ea726b2f6208d070a5ecfb555a80ac",
"splash/img/dark-3x.png": "28ea726b2f6208d070a5ecfb555a80ac",
"splash/img/light-4x.png": "ca4091b55c7e88f56fa7cfb58cc0d1dd",
"splash/img/light-1x.gif": "569f2ec3012794bfe494706aec80ccdc",
"splash/img/dark-2x.png": "a05816164f51c9f149c5c4f989a0152d",
"splash/img/light-2x.gif": "3b1378c7d656db498095517489066c91",
"splash/img/dark-1x.png": "186c56b04a8c6bd7e8f84106b40786ec",
"splash/img/dark-4x.gif": "0df3d2517c042c1c5e3198aac7762d88",
"splash/img/light-3x.gif": "bfedff4fd7da7d50d34ee676876af569",
"splash/img/dark-3x.gif": "bfedff4fd7da7d50d34ee676876af569",
"splash/img/light-4x.gif": "0df3d2517c042c1c5e3198aac7762d88",
"splash/img/light-1x.png": "186c56b04a8c6bd7e8f84106b40786ec",
"splash/img/dark-2x.gif": "3b1378c7d656db498095517489066c91",
"index.html": "189ec7c59e21565768b3988c7632119a",
"/": "189ec7c59e21565768b3988c7632119a",
"main.dart.js": "adcf81c83e1b1e6cbcad9773f6404e4b",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "73a61c925c76f6a0909e3e962b2f9adf",
".git/config": "35d0314181d7f8387bad38ffb71c3b81",
".git/objects/0c/57a63bd902dc1ed96ba55bf3225b36bb07198e": "9656edddfc333f2f6ab3156e14f8d8a6",
".git/objects/0c/70ba836eee9efde5bef0ced7e133711115b0a2": "5af8ba87087b99ab54d031207510fada",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/58/31c5a1441394291e69bcd42288fd889e9a0a1f": "4067b8d01fe37ce656460ae83ee9a1e9",
".git/objects/0b/38ed146946fdcc0f445bded50fe8311594c1f8": "4f2d272f668c028d1d523cf2394c27b6",
".git/objects/60/c6bdface1ed2fb49eff3f3943ffd4e6e513de5": "605fc33b0bc7b90424b36af094ca083b",
".git/objects/34/97842ba9ea308aa4cb3e3fdaeedcb4640263ea": "0207ba1be5d479b81543557f2fd72d23",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/be/8317a041f3c8ff97c45ff75350aa270b58bfc3": "53bc11e8e26ec91bb36503692ab40856",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/282bdfa68ec5576c06516c22fdcf1ba15c6ddb": "42750a72173c1f894f59252bf38df813",
".git/objects/bc/3951a21a22ee8939f1d0945636ec8bf97840bf": "87e2757e1bde2b6ff901ff95507b12c8",
".git/objects/d8/1196db03fb46eb5590ecc74c6c1a2f65b07fa1": "5357ddaa2562c9e9c8ba72cea551a52d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/224f6456cf4c4f73c4de2de5c57bf85b0fea6c": "f45780c49fe05a4436dc67eb40345ef1",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/e4/9d64e2b1f87518a3117c655ac86d2a0100a70d": "350828bdc278023518a32c784706a54b",
".git/objects/ed/de959e520954faa2fae7ff7151411360ebd906": "172098f0c9a7d5567393e04e2ef5a352",
".git/objects/ec/bc90c988d6a326328f500b55291a0cbbcbcd53": "b11444dd74646498acc24a9cc9114b27",
".git/objects/20/7de90784479d1cf08ae2c53c3b9f7eaf995cb1": "05aaa88b124de0fc6933948595f9eccd",
".git/objects/18/415d2faf4b122c2b7d62f37e98ca920ecceb05": "48ed7fcfeb1fd67f210137ab597f82e3",
".git/objects/89/e81a2f7e8fa7c90fec1aad2bcd33605feb80f0": "757b047c497393571a96f127f151c3cb",
".git/objects/45/5838e98c6d682606b350aa1aa7b98112320c60": "e5ebcb1415fc0e57c86be8dd4e7bc6b1",
".git/objects/73/84e767608acb032653fa923b9b4c0fdbf76e1c": "ac381a9fa95de25c99c2da842da2132d",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/3a31f4492a9f5ccf3c8169589a2a31f7b8d1d9": "f96aa78945adebc30270d98ee58746dc",
".git/objects/75/70ea5c3a383c263af44853522e99bc1d4ae9cc": "e8c920e8e4241f23d5e41bf5cf969b93",
".git/objects/43/d6c199c30d725b04f625bfee16d61539e9ccc7": "3a613dde8eb5c72aebce8befb87ca5d4",
".git/objects/43/20c2b2fa3ae87d09c494fd3c361e178a60ffa4": "a4d98630ce32709f768db41713b1d554",
".git/objects/43/21be4c25ee3976c45efc09872c5e6be7929cbf": "bce923b6ace62f0d725caf3eb65aeb80",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/38/a58e45456ddad4a82bd9c1847f57da243250cc": "ad86340fb0c6b3a9d4d1e4986ed6b68f",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/65/d268853febd21a6e2577ba85955af7c1f8d84f": "3acc20c589526ad6f7fee9f1533f97b1",
".git/objects/96/190b40052e07445d2abccc6f66d9130a98e603": "9fffb6d64cbdc957be9eb0b321506756",
".git/objects/96/7efb1586fe2d6cc3b134585e06ec852a18f530": "59a6f9a620387caedbfbc0579e11eb4b",
".git/objects/54/6cc6d540dc4b669668691c750d710988f828fe": "be7ba3022551f6fec837d092afeb1574",
".git/objects/3f/d144224e0799c485fe3e8e1b9ec315a6f16354": "ca18dabf3469dc113b3213b95ee87d48",
".git/objects/5e/e3fb35e0c314c97ea527d8f0e05ebd89783f47": "86edec26a3c04b80eba7c50dcef2da2d",
".git/objects/08/d76bc93014f1b22f48bed1021785bc1503bb25": "c4d66f798033b85b7cfba0e1f4c5cbb7",
".git/objects/08/59942e92f8728276fd837d3245681a26f6d18f": "59fdaf6cc444082385e0708d85d6dff7",
".git/objects/01/c785977b689e06f5d58579b9232800323b0365": "fbfc907758f7f38d7428af9d9a257edd",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/99/8dc280ddf6362bae326c6549e26db9e94b8587": "99c4d3a9e6a5610dfdf66782fa548c34",
".git/objects/97/c14da118abcafcece498dfba73de3ad157df65": "fee95b954849a77aef1340bdc23955bc",
".git/objects/63/32ac85bee3003fe111a2cc4e32312eaa31f926": "a259d700c547b9bf971b9250753e335a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/ae1be1a8c0d28c9b27f5a1d3dff8329c50d263": "67828417977800a9c958f648c52fba3d",
".git/objects/ba/2d6f3f2f7bf3c1be4b4d39c6b13fff556e768a": "2f6c0cbd8d0c6dc81ab3b74500e5984c",
".git/objects/dc/f83695f71da8c6278eb914cdd42692c427924e": "9ca7f32e12839dea4610032ada023058",
".git/objects/a9/2153d53cb3144b77d1631517276cd7f52b32b0": "9d45a5b47b5a63617c1529259a732560",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b0/7f590eb52d45d53b10161b703ec6d4a0aca07c": "a92d3908f61f12d0cb009f0d6494d2a9",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/0442629f7f05b5f36fa475cf026beb35da5f21": "528dc3e05a2e79aeb209dfeb8f5cefbc",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/c2/79d25227a51fac8c10b934c121586ae87f94f1": "49616ef66a1941b96d441ddfd5776453",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/f8/0a432b10c80dd9d6e4ec05a6052d4300dcacbe": "81a2a691cc15b0af3736950d7e6c1ed4",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/41/0bac92c3211231f9d2759e3171b69771ab21bc": "d34d7caea7ed15289104fd7bcb670a14",
".git/objects/83/f473fb521574ae38d64e9e423cb508b96cccff": "b6617d8f215530674e35000245076738",
".git/objects/84/64a61ea59a6e5617e91930f82d4e2aa17765a1": "92a1050369da5e38109c2b3e55d300fa",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/1d/7eb11979e969b93e9dfb57f6a01d00cc5e11d4": "e12c61bf4d4e79359d75988df5800c3e",
".git/objects/1d/aa71d9f11c8010cf8158343632c62ed1c06a15": "207cbf301340a330e98508e3fdd210bb",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/8e/6ece706321cdbb725f917d57a5fc2732e3fe80": "68d1e027ef8439db36ff34fdbc588571",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "533d25eb9dc4a192598346d86930c61f",
".git/logs/refs/heads/main": "533d25eb9dc4a192598346d86930c61f",
".git/logs/refs/remotes/origin/main": "89fd7346d5e2669e21d9ed48531046a8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "839277009748cc72e321fd110831f785",
".git/refs/remotes/origin/main": "839277009748cc72e321fd110831f785",
".git/index": "dd195eb82f00d59ab7a7f4ecd6cb1ef8",
".git/COMMIT_EDITMSG": "d2ab8142095c879f69b8d3d0f93a66a8",
"assets/map.html": "c9ba3e13299ba8a0c130874e63d9865d",
"assets/AssetManifest.json": "ee0d20e96e374786b2d185ae58c94881",
"assets/NOTICES": "5e7f69d17bf7d3c76578b7ac98f3d5e4",
"assets/FontManifest.json": "3cb9dbd6c54df540ab658113eafbdfb9",
"assets/AssetManifest.bin.json": "383f8d19b5d0061b05bd7b67f1068a88",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "2a901380bfd040517dfff023ebd88753",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/assets/images/flower1.png": "f528ed459f370c42fa11bda224d78ad8",
"assets/assets/images/naver_icon.png": "9b8bbec2b446ff566ce2df35bc2d7905",
"assets/assets/images/8.jpg": "a771a4d68ce0c775c46d1d76bc6b51eb",
"assets/assets/images/9.jpg": "f76709bac66bc0ca057c8e427f2e8f11",
"assets/assets/images/12.jpg": "c1f6c6703ae70cee446580e6dda4e553",
"assets/assets/images/loading.gif": "92156aaac22d1d9974808ad9670881cb",
"assets/assets/images/11.jpg": "4310d48749fbaa5aadcadc965c1bb409",
"assets/assets/images/10.jpg": "d3bd2079d534170d70ba764fdb029e40",
"assets/assets/images/bubu.jpg": "34072a4203caa35258d8e56e98e68518",
"assets/assets/images/bubu2.jpg": "0e30d5e4a06dc5ac8f83fda15a4ffd74",
"assets/assets/images/eb496a83edd1d.jpg": "1a126da9ce83b09fdf58bf266f3ffffc",
"assets/assets/images/4.jpg": "6a2d38ec44b5922a51d867a91992e8f9",
"assets/assets/images/5.jpg": "e6aaa02b2d7c1c0e1f5360a7db415f9e",
"assets/assets/images/7.jpg": "ce4a6a9cce7722d3a75d2d20bf2c9002",
"assets/assets/images/6.jpg": "1143f3389f898dd4ce382e287987dd21",
"assets/assets/images/2.jpg": "e8d64086c54770697a716560baba27da",
"assets/assets/images/3.jpg": "7d25342a9604689403b33246c6b8dbf1",
"assets/assets/images/1.jpg": "1a126da9ce83b09fdf58bf266f3ffffc",
"assets/assets/fonts/42dotSans-SemiBold.ttf": "ef64f5264184ddf3c058658b21cb442d",
"assets/assets/fonts/42dotSans-Regular.ttf": "3fcb5f08666f813b30b6c747c8105ee0",
"assets/assets/fonts/GowunDodum.ttf": "7b97b0ecc1dff537f516227c5d68d37c",
"assets/assets/fonts/PlaywriteAUSA-Regular.ttf": "bd45087c37105053d5167a685da75471",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
