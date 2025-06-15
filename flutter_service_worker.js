'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "1fa8ed7159c10c41d55867c4e620c44f",
"version.json": "2aa3c57100564158890f8d71e4f523a9",
"splash/img/light-2x.png": "a05816164f51c9f149c5c4f989a0152d",
"splash/img/dark-1x.gif": "1aa0202c99d9672a7e16a25720db46a8",
"splash/img/dark-4x.png": "ca4091b55c7e88f56fa7cfb58cc0d1dd",
"splash/img/light-3x.png": "28ea726b2f6208d070a5ecfb555a80ac",
"splash/img/dark-3x.png": "28ea726b2f6208d070a5ecfb555a80ac",
"splash/img/light-4x.png": "ca4091b55c7e88f56fa7cfb58cc0d1dd",
"splash/img/light-1x.gif": "1aa0202c99d9672a7e16a25720db46a8",
"splash/img/dark-2x.png": "a05816164f51c9f149c5c4f989a0152d",
"splash/img/light-2x.gif": "3d495936cf10d93c160f26bd948e5f64",
"splash/img/dark-1x.png": "186c56b04a8c6bd7e8f84106b40786ec",
"splash/img/dark-4x.gif": "b123089b5eeabd7c96c08959bd3d0aa4",
"splash/img/light-3x.gif": "d5683d5d15482a07d25eae6435c36f79",
"splash/img/dark-3x.gif": "d5683d5d15482a07d25eae6435c36f79",
"splash/img/light-4x.gif": "b123089b5eeabd7c96c08959bd3d0aa4",
"splash/img/light-1x.png": "186c56b04a8c6bd7e8f84106b40786ec",
"splash/img/dark-2x.gif": "3d495936cf10d93c160f26bd948e5f64",
"index.html": "f866417e77609da10e40efe978755154",
"/": "f866417e77609da10e40efe978755154",
"main.dart.js": "71286d08a3b00c050212c31360fb985a",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "73a61c925c76f6a0909e3e962b2f9adf",
".git/config": "d6e5199b2643b5c06cf36bed0367f364",
".git/objects/0c/57a63bd902dc1ed96ba55bf3225b36bb07198e": "9656edddfc333f2f6ab3156e14f8d8a6",
".git/objects/3e/94687f95d7a1cbda3817229a11584c756597f2": "76c048264e12d1b3a47c795775b1fd1a",
".git/objects/50/7072d4f2fd65297fbf0b247b2d6e56a2262407": "69bf478dae3a879e5a54373fdf7665f6",
".git/objects/57/5255743e56ca7b1aff8cab5946d91c7da117c5": "9bc3b9a9824c08e874e0e96dfaacd93c",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/3b/346ab8f137117c73a482c6ab19199e449ff57b": "ec576532041b5eec6711fca98d1170ca",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/04/a83478c0ba6b17ce13d8b6f87abba235ff2edb": "e4d50c1b5743906d0c45484ddb8fcf83",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/35/52853d90bcdfe56de7f0fbeb6b34a0d029da1c": "246d4b3ed7b30b4349f49301c0eff2f9",
".git/objects/3c/15e10171340dce855ad0e9f454bdbfd1049cdb": "58af4906397a06210e9680e348cdbcff",
".git/objects/58/31c5a1441394291e69bcd42288fd889e9a0a1f": "4067b8d01fe37ce656460ae83ee9a1e9",
".git/objects/60/a80a64d79aef31a97ee4f6349598463f4ea0ca": "32ce26308c9138560a7c07818777fa99",
".git/objects/60/c6bdface1ed2fb49eff3f3943ffd4e6e513de5": "605fc33b0bc7b90424b36af094ca083b",
".git/objects/5a/b83b65719ee736cd0e4573c4b62d2eeec8c3ea": "705be0564d157b847c68b0c3f850d586",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/a3/aebbb06fb1bdaafaeea730a3719f17c8ecd16c": "2cd135d784b9234eb4ba80ce297faa58",
".git/objects/b2/d6c10ba64bf69b8466ec25d20ed187ee684914": "d664fd275c636be787df68ec2b8ddea7",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/bb/219c34cb32ebdcfba89d92989713f7fa02f9b2": "98b8f6d864940c688a80ba206c2ed7d7",
".git/objects/be/c6d13bb2ec8edafb47379100bf95f6c1d8ed76": "d9c67286fad1c6c59f96f9797955e587",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/d1/bc08303664bf976bab25088a76b6d513df69f1": "d82fed8306039e95a86155f85f668f00",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/01df91ff30d5e206c8db2c4e1b4ecdd625822e": "e01d3502a2a69756f4e39532ee7edd52",
".git/objects/e2/e23a75f73fe67ed3be8eb7cc51dcf259a047e8": "91c0a9887465cb447809553f5bd6957e",
".git/objects/f4/880ba734965b12f6d10c8546b9faab264097d0": "8b37f77a49a49903850ebc94d8f85282",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/224f6456cf4c4f73c4de2de5c57bf85b0fea6c": "f45780c49fe05a4436dc67eb40345ef1",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c9/a3efc8eb7c22b223130bd980c5d7c953dc28b4": "e4a5fa9076a2b509d7e430643af7986b",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/ca/926cd519a06331595f72f40dbe7076be049789": "b05346151d2f9d92e78311bedcc0d3a8",
".git/objects/ed/de959e520954faa2fae7ff7151411360ebd906": "172098f0c9a7d5567393e04e2ef5a352",
".git/objects/18/f3d9a43f220283381b2c223f710c4b9797c501": "6c97cae0585528e44b0f47e6aa934bcb",
".git/objects/27/3d2b29e455aaa711120ad4f1611f7613145490": "177ae705534fac72536dc76926354af4",
".git/objects/4b/cc7a4e60e21439a07e6a819c4f4011932d1385": "e63e3b67a5913d3819b41595d1cd58cd",
".git/objects/89/e81a2f7e8fa7c90fec1aad2bcd33605feb80f0": "757b047c497393571a96f127f151c3cb",
".git/objects/7b/e7966130f0a187775a5d2bb5b09d64a9d5abca": "d5bace04d74929867969406bce620171",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/447bd2e0181765239eb61126fa8d517a660955": "a3a9e7b355c3fd4e7b01580fb7bec0f7",
".git/objects/7e/2b2cdc4f0e226fe9f1fd471873ba2e610d5bf0": "4d2a7693bf98c1be892013b848cac486",
".git/objects/75/8a0d52d47d75f053a732f65b0fafd0d5e58e69": "e04c90cdde08839457f02a86f3dd2733",
".git/objects/43/21be4c25ee3976c45efc09872c5e6be7929cbf": "bce923b6ace62f0d725caf3eb65aeb80",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/07/96e64ba0130aa7c81564053d0c9cfc51f68379": "485d8fb7e5d1aadb313af0538b0cf60d",
".git/objects/07/3855124a0fd35e78861e27d481ec7979e75e27": "3be199fb269473999c6afeb6104aed50",
".git/objects/6e/4a895ba4a0ed6be474a6fcb4d67290dc145255": "5bb016da349e16f715b295e5a2a2f143",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/96/5ea117f14a960766643417ce30b8d0acf335fc": "9246ab9f2fe63de5b8570d7c00655fb9",
".git/objects/96/a2a0124103946bab0a429203b0284db8c55d06": "f0efdfe6027845635cf8409bff19b2f8",
".git/objects/96/7efb1586fe2d6cc3b134585e06ec852a18f530": "59a6f9a620387caedbfbc0579e11eb4b",
".git/objects/08/d76bc93014f1b22f48bed1021785bc1503bb25": "c4d66f798033b85b7cfba0e1f4c5cbb7",
".git/objects/08/59942e92f8728276fd837d3245681a26f6d18f": "59fdaf6cc444082385e0708d85d6dff7",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/99/a91ba2ba6becbae64b63a7ed42b722a1c196f3": "887c40a2173cfabcff698e7a3e82aa93",
".git/objects/0a/3aa427e2309ebac4ce788c45443b905655f5a5": "fbdc7f94ed117ddf16bc606dd9f6fc29",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/2d6f3f2f7bf3c1be4b4d39c6b13fff556e768a": "2f6c0cbd8d0c6dc81ab3b74500e5984c",
".git/objects/dd/69fd6b4e63d5f67b234b906ae5686310df5a0d": "d3361cac3edaad4f2bc05844be9bac48",
".git/objects/dc/f83695f71da8c6278eb914cdd42692c427924e": "9ca7f32e12839dea4610032ada023058",
".git/objects/a9/2153d53cb3144b77d1631517276cd7f52b32b0": "9d45a5b47b5a63617c1529259a732560",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/de/9cf4819a6e5ad6bbd92d84486351a2093b5dcc": "1d71e2f82304dfee70c0ac6dc29f638d",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/c4/2cf0b603d9fe48defe8c327d91d50d4dd2134e": "ad56e9ffc575041741febd8ddad112af",
".git/objects/c4/bd09babedb4c79d797f4a42efd7840cdff51b2": "dea469635a78e154a0a940202110e28e",
".git/objects/c4/1437eae0b48c7b5012dfd5c2e5b90f912f1053": "7e3e41ad37e49c2f2d79b336c5359c5f",
".git/objects/cd/f40633e18eeec13cda715e5ccbe884508dc647": "02b514ce5ec9d60a02a4ccab7cb743e4",
".git/objects/ff/972912845626cb19e9391907030f2f322902f8": "ad651640ca701ce076777fadacd6de45",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/f1/df0f12c28fb58a0bfd3cea0dfcdcfdc52337e5": "7f21e39ac007025a2f9c220fc952a622",
".git/objects/f1/e90004f122416bd3e684f7f8dfebca58172eaa": "c6a2275b9a79e5104acf1484d823e1e0",
".git/objects/ce/4a159143392aa40b928d5b85e7043affc75135": "df3d762d7e0e8ecec1071d760ca09deb",
".git/objects/e0/4d1b1d88439feb6ca132ea6f07e17272fcc349": "4ddf369fd8917e6ceb566af5e6dd15f8",
".git/objects/2c/c857c808018bb867c386c2e0c37d189783fd79": "7c1cea3f50dd73fa70802457acc4c403",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/41/0bac92c3211231f9d2759e3171b69771ab21bc": "d34d7caea7ed15289104fd7bcb670a14",
".git/objects/41/9449d9297ea1146cc8fb27052c2fc9c6585e7b": "b4ea030a874c4222510d1b8f7f5ad4c8",
".git/objects/77/5eaa8ff23655fb1e0d232ed1e57f6c203b8d7a": "65dfbaa1af54a987d6058324caffeff1",
".git/objects/84/64a61ea59a6e5617e91930f82d4e2aa17765a1": "92a1050369da5e38109c2b3e55d300fa",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/1d/7eb11979e969b93e9dfb57f6a01d00cc5e11d4": "e12c61bf4d4e79359d75988df5800c3e",
".git/objects/1d/aa71d9f11c8010cf8158343632c62ed1c06a15": "207cbf301340a330e98508e3fdd210bb",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/2e/7eaaabbd59d645f3fbe06794af486cbed6abfa": "0680d4b462606388535760de77db1016",
".git/objects/47/344ed56b3cf14314aa06157799b3d324583dd5": "b3280b61c6728490d42a8f4fb3f21ab0",
".git/objects/13/195b7e84617943d5cf661769ea93aef6f2d8ed": "e47521e42d19eddd915974efb5bee664",
".git/objects/7a/fe2a436c629da6afb534936d464903b123e539": "4686eff7af16c408ea8bedf5c63b02ba",
".git/objects/8e/14122150f78a5a7da873688d7ebfc12aa3632c": "9e62d1236a937c1be07ec9bb429ce589",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "efcec8e0c26fe345b73b9ea6dada63c3",
".git/logs/refs/heads/main": "efcec8e0c26fe345b73b9ea6dada63c3",
".git/logs/refs/remotes/origin/main": "8d449f39e53f8e00e6ef3679334179e9",
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
".git/refs/heads/main": "60157862f38725ddbfe4cf9846e33fd6",
".git/refs/remotes/origin/main": "60157862f38725ddbfe4cf9846e33fd6",
".git/index": "61c9e3b343b88ca93dc31ffd7508524a",
".git/COMMIT_EDITMSG": "d8e8fca2dc0f896fd7cb4cb0031ba249",
"assets/map.html": "c9ba3e13299ba8a0c130874e63d9865d",
"assets/AssetManifest.json": "dce57d40c94750e03ef63b5ffab8a0cc",
"assets/NOTICES": "009282809e89c7391821c46ead858f0d",
"assets/FontManifest.json": "3cb9dbd6c54df540ab658113eafbdfb9",
"assets/AssetManifest.bin.json": "4bbe9a5a48d0c8abb63ce87dbfad84aa",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "866fca4b7702252237cc97a2171ef45b",
"assets/fonts/MaterialIcons-Regular.otf": "1ec31aa71b57bde8cfac4485c7a2fa6f",
"assets/assets/images/flower1.png": "f528ed459f370c42fa11bda224d78ad8",
"assets/assets/images/naver_icon.png": "76285da67acdeaeb82c41119c81130ce",
"assets/assets/images/mail.png": "3b7b51b1df874a470fece74bd070f3fa",
"assets/assets/images/8.jpg": "247bed0b68383fe1347c665033a318ee",
"assets/assets/images/promise.jpg": "753227df0f51e58724957dfeb297f481",
"assets/assets/images/9.jpg": "72fc77d2609e6387062dba8553823ed8",
"assets/assets/images/14.jpg": "564271e84df91b9267385ced49118575",
"assets/assets/images/15.jpg": "ac650e2805c08ff54710fa41037c04f4",
"assets/assets/images/family.jpg": "17f4144c4b30c4b349e974bfafeff931",
"assets/assets/images/letter.png": "7f86b90b95f63ca8ac0843712843c67a",
"assets/assets/images/12.jpg": "96ca5dd38500a2bf56419a2b8299221d",
"assets/assets/images/loading.gif": "92156aaac22d1d9974808ad9670881cb",
"assets/assets/images/13.jpg": "fc0095f9b3717a595ec05d2c69b2e3b6",
"assets/assets/images/11.jpg": "d77507bd4a7fa8fe9690b5fa6a9f7921",
"assets/assets/images/10.jpg": "33db7c352342e34d8148faf2771c1c08",
"assets/assets/images/load.gif": "609a49efb7fa72a48ba193aaada287bf",
"assets/assets/images/kakaonavi_icon.png": "92bfea26ac50d96940782ff08b1e0f3f",
"assets/assets/images/bubu.jpg": "73560b7fd776b94130771d67116e226c",
"assets/assets/images/4.jpg": "42b385a63eba1043bd6d8bac08301a96",
"assets/assets/images/buffet_1.jpg": "f19965c12d8c37dca8f91fe136539a20",
"assets/assets/images/5.jpg": "de0447d7728128b5320b81bd81eaa2d6",
"assets/assets/images/7.jpg": "0b020cdae294e60bd0651d74b7dbfa3a",
"assets/assets/images/photobooth.jpg": "b3428468e2d02990968ad8bc8e12304c",
"assets/assets/images/6.jpg": "cf68f24ab1e68cb420e6f7e792288343",
"assets/assets/images/2.jpg": "65ac6e1a7b1751276d86195385603315",
"assets/assets/images/paper-plane.png": "e594586e4846c06f98878ffe0adfbc31",
"assets/assets/images/loveletter.jpeg": "31b799ae0c0d5f30803111c42f3cc870",
"assets/assets/images/3.jpg": "c18a125da44f1cbd91741313a60966ca",
"assets/assets/images/1.jpg": "d53a50166c50edcf65d62a72ac1756d1",
"assets/assets/images/tmap_icon.jpeg": "76731d07f90ca8c92123903d9f849131",
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
