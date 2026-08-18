'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "29dfe1ac225e722254cde99dfb63bd83",
"version.json": "cc7ba5bfa896168e906acf571cf09e54",
"index.html": "0bdd97fb13ed22511de5403bcc4b8c03",
"/": "0bdd97fb13ed22511de5403bcc4b8c03",
"main.dart.js": "e68d174db9f827e4bf92752f61d724d3",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c8da7aa4d064f3ed8f0209cd4021390d",
".git/config": "ef0741bc5474f83b03e57e35f00a950c",
".git/objects/95/8d6fda2d48d0cec55d18e57188b0b5909e998d": "66bb75ed96bb7193c6fa82f9c84d4ca7",
".git/objects/66/a2b99fa55e40537074bb46ce11227854e37219": "6bb2a3e3bc7a3426e23df4ed79ee83fc",
".git/objects/50/862d8b193b74a5971d728cd227ef35e110c359": "7e298257e233ef8e40db7f7f6f9dfec4",
".git/objects/68/736eba18c3da8c4d572410f54ded9123aa219c": "8c84c9e4b8bb49e2f5b71a29beeeb5e5",
".git/objects/3b/9c698a6d9aac3de756ec2154d105c38798ab02": "d6a3f428dade960b0e3c5dbd71185b9f",
".git/objects/6f/925e96203f4dd15994cbde7440ad83689f2696": "2a90f4987e61c36c32cf8725953b81eb",
".git/objects/03/a50ec79930741dfe8c5bbc222c5bf737a805dc": "26c89676aa2f246b0de37920a15f3c0f",
".git/objects/9b/449823fc05999ef336004a6659f1b2a106f85c": "9a6ebe25421e5c475ca6d438f62b59f8",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9b/0c5e24064b23c72fb1ac141ac6e2506e7217bd": "6968b625c7012fe99b7434120445ae0b",
".git/objects/9b/47319ad33d27c5d4e800923ea633fd5e6b88ad": "5b902a53c7090e705a7246915751601c",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/04/823a68beca807299bf74cc39ced44185a57d22": "b7966d7ff14c580d4e98392fb58f6a7e",
".git/objects/3c/01cac840317f346abbe114afd6f7da9f8502d6": "260ba048dbb04013a6ff672b784b845b",
".git/objects/3c/b55ad01ce08d13e8e4228b568f25d05c5a80f5": "8bb6e3dd069065b76e0e5909951ccaea",
".git/objects/56/efd84342f0ee983f55dc0fcfe4bc2b7362b590": "e6880fa9fbfaa602c77196af5107bea9",
".git/objects/56/caedb62930d02e15604bb902353b8103003123": "ed50c5d48d84424fc5229e86d9a9092a",
".git/objects/0e/676d7f44d0aadab3c9b1cab98201afbe212ace": "b96bd1bd7b494e031a176fbeed8dc631",
".git/objects/33/d3cca6bfba73a28009c483890904eb3d4fc88f": "8974415c1613fd670d9025ee2893f9be",
".git/objects/05/9e6c73426784a96ad7aaeb94751b51a7c40608": "f63540bc7115b68aac9ebe3c4b804626",
".git/objects/02/06a4677846a39be99b9c2c07e331d0d6822d1a": "df38f36cb65d26197a911f1d016c88ae",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d0/da8664e4f7fd1680f75b848731afc5710e25bb": "073f07b9d8d5669c178bff1c8be62de8",
".git/objects/df/950c83a9b5ad1e9988f71d1c083939cf0e0728": "e98efbe716d58d2e95aa087340fd3367",
".git/objects/da/0d5aa44a8c93eda469f7a99ed8feac32d5b19d": "25d25e93b491abda0b2b909e7485f4d1",
".git/objects/b4/8f8e19066c58b3e91db22f62b00e0522e2b78b": "89da4c7e9a8360446b3689d2dd68261c",
".git/objects/d1/1c1b79faf0f45f7aadb12b3af434fa658e7b9a": "7e2446538e524d696b02bb78509f9a2e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/8128adaad90d2fd7cdabe7b36eaaaed0d3a25b": "3d15963af0d77c1cd40702fb7c18fa93",
".git/objects/d8/749b799d71136c52c9715e4d856176d8c5231d": "2d713199f277310b766c9e87b3ed023a",
".git/objects/e5/91159d9a8118053b787177fa85cfd6c4561615": "c99b624b3df213edb6908e5c41d849a4",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/e4/be70cdc7d02833d0514225059a10fb635375c6": "5ebaa3f864574e6986b058a599567d5c",
".git/objects/fe/d6507907ca0299596b9ae2e86841fa46f5a1d8": "7969765a4c585623964b34a23d6f6459",
".git/objects/fe/c70ee49fb7dd034435eeda937bfaaa3fd13ef7": "e5a4a7067a7bd504fab8bcc100b6b836",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/c8/0f952e1ec3bf10702c9b726bfb77be52cd65a8": "c328e1b9fc8a39ca3d5714251cebb27e",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/20/90bf61b0251665f2009a24238fc7ad7d408035": "4203aead0ca6808dd1dc4fb73e9597a1",
".git/objects/18/c57b10e1cbc34228aa937fb932244c6f29ac01": "afeb46b7a6329500afcdb8968ab6ca04",
".git/objects/27/7d6c7992b37e3d94c74b3ab529234fa89656a5": "8c95a30ff300807b42af205cee276cd2",
".git/objects/7d/30cd0af213bb51143ce1e4745ab357c2cf2544": "5387670947a4336a740d8a6aae639f44",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/29/d305fe726d49aa13ecaec57a46a20f5fe02455": "aa354cc974b7e3bfd675223c7f535e34",
".git/objects/7c/142566d16204df8826a439a98489b6eb8aa1a3": "7fd6bfe6407fa8006b889c676fbdb91b",
".git/objects/16/6d96998ec3665d1577f13aa540b70cb3d3c987": "85928187ce4cf86956411303045ed8a5",
".git/objects/42/ca35d9ab6a18b324e2bf852144ee4693ed8aa6": "6d60ac51cb7346018135595d16b0b457",
".git/objects/42/f1f5ec07dade514a497cb92ca38e655a873d83": "e244305c7fc2a0ba20496cd053da218c",
".git/objects/89/a00417d3b465071957f153a5d78d058c730bfb": "c4c9d6d5d14a01fac7448af866b345cf",
".git/objects/89/20abb28f7fe2b9dc8387a1a7d3873a41c8e24a": "d06e926061efb6c7d2e715b07521243e",
".git/objects/89/9275a0ff8fcfdf03379f7abc9406abe7f3f885": "b2fdb5f52beace8a8366433f798567ff",
".git/objects/87/fbfef95edecf64d65b6a1e9d72f4fbb15e3e83": "a8b257bbc14422f156aefb9ee21d94eb",
".git/objects/87/8dd4fee337a200e11f2a6c18afff8088c975ec": "0459cb40c1c90ed9fc3a39a363c9ca8e",
".git/objects/28/a62449d56d8122521f016b9cdb8e2d445a3cb0": "7ae354225c6223582ef18bdacc395543",
".git/objects/7b/5c288d6e88e04251647146c44dd5c76cf8e936": "55a403f624164a3bf9a26292f698cf03",
".git/objects/8f/327322556122893a653775b5a427f7b07a1a9c": "4da5504c0ab2232dd8218f42a65a87f0",
".git/objects/8f/54c1f6c0e49f1e4bca168e5bab06150149268b": "3983aef69e5760752eb8cf3a0fffa1d6",
".git/objects/8a/3469983b00cdfcf6a1e09f04a92ba8900f6d13": "f1de0ea5b5fab8a444555cf6b98719e5",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/a80db2958d98fe4644f4d0cac1289d79ee4221": "409fa5a5ee46bb72dc376f71ab4a1d67",
".git/objects/19/9764d4146195fcab0eb0a07ed13d00332c1b07": "14601d7fef7a16e29ba9d019da63a128",
".git/objects/19/f2001cea5a0db83704a7f67b7c427a5b66339c": "d3c5b63465eb2f71b6d812c5a4f08d32",
".git/objects/21/574e2f3abc516f5fa81d2d89f643230e5175ed": "6a5f90896f3ce7932ec082e26d76f714",
".git/objects/21/aec0c1e902b5820eb5a687b967ba8fe4692771": "8a9079f9eb9037fc41e00049ceaa1806",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/44/97751f0c7390269c0c49e01813f79b68c1d7ca": "b73c663b4016be223d972f8f4a369630",
".git/objects/2a/7dbcc01060d976fcda24ceccefb20499362d66": "c4e440700914012bc6cb672ce127b1a2",
".git/objects/2a/83d3dd2451398bb19b56b9d0f848dc636b5f1f": "4ecbbd9260a1b4879b084cecca4d5675",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/00/21f6d1a34cfe2ecca82822cfaf11a35af60d3f": "3d6b1b2d7e39dda1e76a74752257d806",
".git/objects/9a/cb616d7f728f923e445158a1dfbed2da84df7c": "f381fe3594500543a4e0ebcd64c14ae5",
".git/objects/5c/718693dd386ae5c04477413a029433bc8c80a1": "b5741053d15dae60e9cbc4dda361cd1c",
".git/objects/09/47f1687f6b29f41ffef62d21d46d09d6fd809e": "6426cf3d58dd4127cb6bce94446c565e",
".git/objects/09/9e78c109ba0397b5b8808bd6451decb0b90ab4": "cc5a229283ca292e218a28624efae950",
".git/objects/5d/ad3a607a8b0f8df2a8674348f13d6306eff17d": "f89ce273f0cdb9ad5767a7c571d0d164",
".git/objects/5d/625958c79cafdd840eac601bc255bc40c79541": "803d5d3b59a97bebb8da85b6df48d3e5",
".git/objects/65/5d85df1bbd8e76325b4d5484b1815aa5818611": "6f8667566b640a7997074d17dec6acbd",
".git/objects/3a/4f4ec7bf5aab5ec79ceddbf857cf4851680f57": "aea3714174fffec1f3b37ee8798e475d",
".git/objects/54/7f26bc3d2464c6e18d47548a45d6f816ca0c34": "686be38a1dfcb01b00f7b315ecdc9a46",
".git/objects/54/c2c9c201af563d05fa218f4b6b5b4a0b98d3c7": "a22124f2d4277ad79e28d9cbc62056af",
".git/objects/98/0e8384008199f5b8cacd2a342c4160c0282b69": "c3daac9268af76e0c13f7f4083515f8e",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/53/377f956ad04652cf91d6194372674b47be01d8": "cc83be7eb6f2dd5980ccb4ff0c351411",
".git/objects/53/8c7865a6217111642909a856fa38b1ac50a73d": "bdf3d844e902d9144460074842c5b05a",
".git/objects/3f/f3c2c9411b8e2d6dc35bcd752b0a81c97da4fe": "9a8e5145c48123310b8255b6abc9e819",
".git/objects/3f/959df4140a79972130f71a1d85e075dd9644e8": "9d5803feee92297298ed751ce0f2af81",
".git/objects/08/104f36c2fb25ccf0b26298aa6e492dd3b9ea71": "a367aa1ddc464dca12970c3f63b3348d",
".git/objects/6d/3681929b66c866dee34b42f4fe1d0fc3f12a78": "3034acb9d5dbd139c0ca9bff045534bc",
".git/objects/06/5f0a34b79051a3bc4f0dbca8406060b4025b1e": "35041db06168a2e8d5b75bf5ce3994cd",
".git/objects/6c/6b48face38f9cbaa79d0e5e617a6799794c180": "49887b2066c11ff938e9fb2d01179794",
".git/objects/64/be081f7acda111826258383c0a14eea16b201f": "e85707ecbc3dbc349a387628209a7bdf",
".git/objects/90/98a03d17f7e0adbab2e3e8a44a1ee3e1fd9d31": "c29c15c1ba2be76a0b914086f1399e46",
".git/objects/bf/02d867d2189efa4256b6cee0a66e9b28034a76": "5f2f48a3b90dbfd7b30e9a8b59ea9d1f",
".git/objects/d3/385fe7b97d0f15dabebe9223f79f17e1c1b89e": "53014bb988a9544236b4b2750be0a18d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/0e8bc050318836df449773b1ab1882c617a033": "fd27267f83bcc535fb637a91f1f6908d",
".git/objects/a0/885f53fa179412e1880938e6cc20a10b1808ba": "8a2a2d76371ed34c42cf235830d13875",
".git/objects/b1/3565ad58f2b8b032ee2fc42527886737f0e2e9": "8d2437a502c9daac263e6c5fb1f82869",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b6/c03f80ffd63969a412f5fc0e049eca1c1e2c24": "d234ca27fcd9a6f3b8f8f8af2994436b",
".git/objects/d5/52bb7c830dfb0d383be42dc5f7a1fd6ed761ff": "c59c011f015a28934deb203c1536bd42",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/bc21fdaf39823ba36c7919c7edb2c4d9a989b7": "46f04e0423874a1bd4e964499b8f3834",
".git/objects/a6/4034028c4e73fbcadbe2521d3bb49161639aee": "7dc9a8f5b2e008b62c12c2ff1a0ddcd6",
".git/objects/a1/d44d5dfad186b451b501487b9fef9b0176ea6a": "66ff9bf30b4dcb698e162788f5403e16",
".git/objects/ef/806fe82b75043c535ed63fbc87c523aa3c5241": "76bea90f8675eadf93212305b2116359",
".git/objects/ef/cf563a960839351bef9e56184226379fd9926c": "90f62fb8c5d28d2729b7fb61fa000bbe",
".git/objects/ef/9446d3905b80e6ab1dbf5dfc8604aca0c4693f": "99806fd5bebe34956b6027b546627c18",
".git/objects/c4/531edb68b69c8c2390c2b3d617f5ed1ae46389": "8f9580375cca2817cc4e180918d77656",
".git/objects/c4/9590a668fe937b6b16b7ea6bf502b6714511dd": "371773ca563a7505aeeaf5391c12ca91",
".git/objects/c4/6457f51a2c45b956841b76582e023b4f9d2858": "5262c8dfcc73460377cb504e9f38141d",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/f9/17c204149a87b7647c2036193a68ff143dac88": "2e6c3e5f8a76ec2042f2cc96000cab07",
".git/objects/fa/06b6275e8849b31781da39d44021ae88d2dc90": "ebf583db03c0c582b32187e963c3d573",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/f1/26f33e2caea49002faa18381501bb9612ac49a": "095118a717ed6830d29eb219f9d37f7c",
".git/objects/cb/bb1c8d3bf1110954b126ad9a62ef7b23a15064": "f0b52c4a2925728dbfef9c1de1b605b5",
".git/objects/cb/254b6a55c0841b4f566002e33ed51a8918b23c": "7be7b86ed8d02db86371e59efce55a9b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/52f829609cb2269115fb628aa53081ea886077": "15be2885b190eb538f3c90a8ad38d3de",
".git/objects/46/4732df22b083ce2ae635c653c46ea031ab5224": "0188832fd99f7538b53347062e1ac5c7",
".git/objects/2d/32dfaccd5d2397d944999a8cd08ef3f6f16c90": "cff43af665d01ea37dbdd1a942efda80",
".git/objects/83/d8e85cf53bf7a833ecfdb0eda06b6f59fdad6d": "0c2dc6b9b98afab53017eed8fdd1bfa0",
".git/objects/83/449c7888609cc80d189aec3af06412a127cecc": "5ed5aa96888b9430da7c5290fc545e23",
".git/objects/77/8bf38e89190278b63f0247cf69d13ac315a4a5": "8031745f5ba80ab60b161d228514806e",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/8c/a1529bb59bfe29d79c34afd550ca2dae2cc21c": "8a52ce11c04d1130a4f9547d97e21503",
".git/objects/8c/c73450981d505a070a2b4e62c68ec5a3d397ca": "08665d3480a348dac196040ef53cd040",
".git/objects/85/644998cc6c336aaed9bf554813fa1b3eaa8709": "5443692941f4e735e4eceef4c2604f98",
".git/objects/1d/4cf3d61d681c2d91926a26cd640d74bde95fcc": "6200aaf358665334b167c2aebf68a058",
".git/objects/1d/27c4e23b705285e1d8f516af1768c2b7a0e478": "74bab5fc4a95f0a5058ecda0cb64df20",
".git/objects/76/3bc41744872d894077bd958ac1dedcbe03d0b1": "3895ca2569ff63b280d685eb5ca10f81",
".git/objects/76/b36c289aa1165cf9dc303aa6f234742770423d": "f97d98273fce49e52a1a5e8461c4b035",
".git/objects/40/137291092ba10959fb7edb98bf7054d5aaa0bd": "011d89ba8e400244cfc590d05da0d93c",
".git/objects/2b/80c21aa65bd0ea9de4740fd2a1bcbacc6a9b6b": "b7c213bfc5e7ec6dcc4d9f1fb66fcdd8",
".git/objects/47/c81e8217b0eecf720d143f6b88133c5721e0ec": "a3f6f6b6ea06592ecd57107ae452a9fc",
".git/objects/13/1253d2dba7b08a8c85a3366e6d1685e60f92d3": "37c6f5bc0db1e0a247cddf9b5aabf415",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/25/5de46ef6814c1d40fdd5028e412f81baf23142": "454b0bf1dd0fb7ef7318c5e805249377",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "423db4ca895fd1dcc3249e58b305a97d",
".git/logs/refs/heads/main": "d56bb70baa33a023cf25fb8d0a372fd7",
".git/logs/refs/remotes/origin/main": "ed55d023cf4ac15d81b9cb8ff06678e8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
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
".git/refs/heads/main": "e1571fb1a99785410eb9e55f07e81466",
".git/refs/remotes/origin/main": "e1571fb1a99785410eb9e55f07e81466",
".git/index": "1a46433eddbbc93b32bdb33c3b5ffb0f",
".git/COMMIT_EDITMSG": "d2231509c9e67f8c473af9a362c42bf7",
"assets/AssetManifest.json": "fd83cdb521196aa7371a8f32fb46784b",
"assets/NOTICES": "9d6595e051bc44cdbf3bea63455611ac",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "56d73e3e741b510fe3a4e740795142ea",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "252112102db2f3f85ab994e515c67c12",
"assets/fonts/MaterialIcons-Regular.otf": "7b95543488db60be17c88b13a7330a20",
"assets/assets/sounds/notification.mp3": "627c0e8b5b8ef0417ace4d759284a51d",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
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
