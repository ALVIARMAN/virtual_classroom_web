'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "f46592606c4c7fa0164012e45b5a9c82",
"version.json": "cc7ba5bfa896168e906acf571cf09e54",
"index.html": "0bdd97fb13ed22511de5403bcc4b8c03",
"/": "0bdd97fb13ed22511de5403bcc4b8c03",
"main.dart.js": "bba0feaec2720a931b2c0c91d406633e",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c8da7aa4d064f3ed8f0209cd4021390d",
".git/config": "ef0741bc5474f83b03e57e35f00a950c",
".git/objects/61/69c52c13c8a23e9a0dfe392fc87891450e3485": "27105cf53ec2c22ea3feb2ae5baf71af",
".git/objects/0d/1c3123bb50e7c8ceae7f524031c07e849696ff": "b06d487a73dcf52dbf41f1d3b905828f",
".git/objects/95/8d6fda2d48d0cec55d18e57188b0b5909e998d": "66bb75ed96bb7193c6fa82f9c84d4ca7",
".git/objects/92/fc96cf728143464225523e316cd97d036a6111": "d4bddfcb5e77f3cdbe0a5af8067ad4bd",
".git/objects/92/88e38dfc7069da786f46aa61be7e821054a15c": "b6474883cc654345a5acd6e687b0fcb0",
".git/objects/66/a2b99fa55e40537074bb46ce11227854e37219": "6bb2a3e3bc7a3426e23df4ed79ee83fc",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/50/862d8b193b74a5971d728cd227ef35e110c359": "7e298257e233ef8e40db7f7f6f9dfec4",
".git/objects/50/f75451d8b8d1502e51028de5ea499b2cb0bfb9": "4e7f902c1dbb18deb9bb54b74530e491",
".git/objects/68/736eba18c3da8c4d572410f54ded9123aa219c": "8c84c9e4b8bb49e2f5b71a29beeeb5e5",
".git/objects/57/cda36b686f8b3120d6b47fdc685a610f290caa": "a71029fa512ca6808dcabd5a6c74d79b",
".git/objects/3b/9c698a6d9aac3de756ec2154d105c38798ab02": "d6a3f428dade960b0e3c5dbd71185b9f",
".git/objects/3b/3838801e22b01b17aa2e31f7d2749319aae2a5": "e07e1bbb611db0705340d92543c3dff9",
".git/objects/6f/925e96203f4dd15994cbde7440ad83689f2696": "2a90f4987e61c36c32cf8725953b81eb",
".git/objects/03/d87079d1ccf0c5a58b36f17b68e6f12ddfb6c4": "5863e3ec327dc96e7cdde32af2a13536",
".git/objects/03/a50ec79930741dfe8c5bbc222c5bf737a805dc": "26c89676aa2f246b0de37920a15f3c0f",
".git/objects/9b/449823fc05999ef336004a6659f1b2a106f85c": "9a6ebe25421e5c475ca6d438f62b59f8",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9b/0c5e24064b23c72fb1ac141ac6e2506e7217bd": "6968b625c7012fe99b7434120445ae0b",
".git/objects/9b/47319ad33d27c5d4e800923ea633fd5e6b88ad": "5b902a53c7090e705a7246915751601c",
".git/objects/9e/789687bae9db1fa9da1b62088bf70c54a1c729": "1495ef2558562c7b9c1cc1f2dfd68013",
".git/objects/9e/fa69168af98224a65c3dcb0a3f7720dac821a2": "6a6d5103a0869a4abc7226e7d18ae7b7",
".git/objects/9e/bb581c6c7bf24bd56124706b54c9d22fb3655a": "90f8e06bb299ea3b40c85bae36259d8e",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/04/823a68beca807299bf74cc39ced44185a57d22": "b7966d7ff14c580d4e98392fb58f6a7e",
".git/objects/32/fe6412f7a42701709987c36ea1dc63694403f3": "8ff57e4fd63c9e184852cd3d5b16ced3",
".git/objects/69/2b14697be9bf242c23ceead56fecf32fdf0579": "70dd2d6b3a14a8aa51de48545283f27d",
".git/objects/3c/01cac840317f346abbe114afd6f7da9f8502d6": "260ba048dbb04013a6ff672b784b845b",
".git/objects/3c/b55ad01ce08d13e8e4228b568f25d05c5a80f5": "8bb6e3dd069065b76e0e5909951ccaea",
".git/objects/56/efd84342f0ee983f55dc0fcfe4bc2b7362b590": "e6880fa9fbfaa602c77196af5107bea9",
".git/objects/56/caedb62930d02e15604bb902353b8103003123": "ed50c5d48d84424fc5229e86d9a9092a",
".git/objects/58/76a2a9a3cb489a805dcb114b2acb4bb3c353c1": "116b901fe707e105be1bbcbb5fa1a9bd",
".git/objects/93/c81b673d086ca034c2ff107ec8a0016dd42767": "630164c0f341fd61b1a827b3a7c60653",
".git/objects/0e/676d7f44d0aadab3c9b1cab98201afbe212ace": "b96bd1bd7b494e031a176fbeed8dc631",
".git/objects/60/17ea3a32e41ff8f2824b7ff70d1ecf7772094b": "78ff4394765360cba8daaeca1c8a99dd",
".git/objects/34/136c738165412d186124d2f7992d28820e15e1": "f039575fdecbaede00be880723eb08bc",
".git/objects/33/d3cca6bfba73a28009c483890904eb3d4fc88f": "8974415c1613fd670d9025ee2893f9be",
".git/objects/05/9e6c73426784a96ad7aaeb94751b51a7c40608": "f63540bc7115b68aac9ebe3c4b804626",
".git/objects/05/a278b3c1044a6ce5db24c78e0ce310f884d9a6": "175a41339bc0d1c6f74451e1c07a14e5",
".git/objects/9c/1d0180baa1986cf79f5dc62c2a880156275681": "d1fd5446233b3be245a7397a3b230393",
".git/objects/02/06a4677846a39be99b9c2c07e331d0d6822d1a": "df38f36cb65d26197a911f1d016c88ae",
".git/objects/b5/01f35ea11f16ffff2044b6ceb67ebe6decdbb0": "338b543647ed8ee974377a4f2f87ed4b",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d7/4953d535dcb4668bd990528dab56424d3f1663": "eebde999874b25dc330314a44661df62",
".git/objects/d0/88c8e0565e1039bb961c753a0802bc7efc25a1": "028a9bbc5b917d85f88818f470ea92ef",
".git/objects/d0/da8664e4f7fd1680f75b848731afc5710e25bb": "073f07b9d8d5669c178bff1c8be62de8",
".git/objects/b3/d2cd0908073b47f2e7bc8ebca2c396d5cf0241": "c7913049e2f8fdcbc6f15fe27d618c45",
".git/objects/b3/72abef6c1315f54df943ade35dbb7df7c6572a": "d5714afc26b79ba62c97731b68eeb062",
".git/objects/df/950c83a9b5ad1e9988f71d1c083939cf0e0728": "e98efbe716d58d2e95aa087340fd3367",
".git/objects/da/0d5aa44a8c93eda469f7a99ed8feac32d5b19d": "25d25e93b491abda0b2b909e7485f4d1",
".git/objects/da/957a7b92ddbd17ce07af8b7efe9cf9026f4ffd": "527ead39b948fd880cdee35e6c73438f",
".git/objects/b4/8f8e19066c58b3e91db22f62b00e0522e2b78b": "89da4c7e9a8360446b3689d2dd68261c",
".git/objects/a2/0368ff22f2844e9a54c0d940eff3f9fb69e120": "e4921165c48c15de52f6ef9a487d977b",
".git/objects/d1/1c1b79faf0f45f7aadb12b3af434fa658e7b9a": "7e2446538e524d696b02bb78509f9a2e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/dc5c90a90f1b1b594f0b460079c0d87b27009a": "1628969f2b42b13bd2cf9c2013d8a5c0",
".git/objects/ae/affcc462c04181803e5aa51df900c76559a338": "48a17e297219875dd0ea7155da222b04",
".git/objects/d8/8128adaad90d2fd7cdabe7b36eaaaed0d3a25b": "3d15963af0d77c1cd40702fb7c18fa93",
".git/objects/d8/6fbc5c23715e71ace9d931546450ffdccaa0e7": "e81fe6a3b14c716350a6a51eda8974c3",
".git/objects/d8/749b799d71136c52c9715e4d856176d8c5231d": "2d713199f277310b766c9e87b3ed023a",
".git/objects/ab/f386766d8ba82c3e14a03a8dc342fa7b680020": "f28d8919faca2f08f859e27bf36af368",
".git/objects/e5/91159d9a8118053b787177fa85cfd6c4561615": "c99b624b3df213edb6908e5c41d849a4",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/af6d03e07db764ef47e1abd4f4194504bf4ed8": "8442c409fb865731485407ee8408fd15",
".git/objects/ee/4dc135dba4d4bc2ed13237a5effec5273e28d9": "87eff307e08e902d3a3f1b3e7bcc7f96",
".git/objects/c9/364b56d05e699b36884914d544beb8fcf1b176": "479781e9db1de7d1c753a28870630c17",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/01d8cb7ab8bf7ab967481414327f736c1904ed": "282bfd2e7254e19c2fb412a87468b993",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/e3/22793f08ef82831025e89f2d63575243f8207b": "ae7a67e76cf60cc4b757c6bbf3de3b77",
".git/objects/e3/e4bcc22d83ce3513e9dccf86cce0cd92b9cf1c": "3f7aa074e4041bd5e391fd8f71bfc867",
".git/objects/e3/3a62f76872a9fb1249441420d8a3fe24d4446f": "4e84fd429d9a992964378b2d29698e8e",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/e4/be70cdc7d02833d0514225059a10fb635375c6": "5ebaa3f864574e6986b058a599567d5c",
".git/objects/fe/d6507907ca0299596b9ae2e86841fa46f5a1d8": "7969765a4c585623964b34a23d6f6459",
".git/objects/fe/6e8c275423294d0e1da0d549e07c2e166161ce": "080865468cba0f278adc039ff37e9115",
".git/objects/fe/c70ee49fb7dd034435eeda937bfaaa3fd13ef7": "e5a4a7067a7bd504fab8bcc100b6b836",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/c8/0f952e1ec3bf10702c9b726bfb77be52cd65a8": "c328e1b9fc8a39ca3d5714251cebb27e",
".git/objects/fb/878d888c1136eaed73ce777effa5624b8dab56": "d4d02e9e12187f1cfdcc64e9ac9c352f",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/ec/3b3e528aa5d271b2668b7074bf257dee4aae52": "8fe29e230690f4e26f948c9da3f818d4",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/20/46b561bb76d802c838f3c276f95ff0d1a4c21f": "7163e2d11abf5f8b691334a46e8669b6",
".git/objects/20/90bf61b0251665f2009a24238fc7ad7d408035": "4203aead0ca6808dd1dc4fb73e9597a1",
".git/objects/18/c57b10e1cbc34228aa937fb932244c6f29ac01": "afeb46b7a6329500afcdb8968ab6ca04",
".git/objects/27/f9040bec2646eb97d9f0787f6c1ced03588447": "3085e357adf74c81b648f4356feff5f5",
".git/objects/27/7d6c7992b37e3d94c74b3ab529234fa89656a5": "8c95a30ff300807b42af205cee276cd2",
".git/objects/4b/9cba4edcf1537cc3ae3fd6eb8ab6d58f7a206d": "eb20405df877fd26f00583340f61a7b0",
".git/objects/7d/30cd0af213bb51143ce1e4745ab357c2cf2544": "5387670947a4336a740d8a6aae639f44",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/29/d305fe726d49aa13ecaec57a46a20f5fe02455": "aa354cc974b7e3bfd675223c7f535e34",
".git/objects/7c/142566d16204df8826a439a98489b6eb8aa1a3": "7fd6bfe6407fa8006b889c676fbdb91b",
".git/objects/16/9c7758ad13d104d4a8748fcf1307ff39301db2": "71a4df6662719374674061e9fe0f0114",
".git/objects/16/6d96998ec3665d1577f13aa540b70cb3d3c987": "85928187ce4cf86956411303045ed8a5",
".git/objects/42/ca35d9ab6a18b324e2bf852144ee4693ed8aa6": "6d60ac51cb7346018135595d16b0b457",
".git/objects/42/f1f5ec07dade514a497cb92ca38e655a873d83": "e244305c7fc2a0ba20496cd053da218c",
".git/objects/89/2eb77ab8b1fdded401c4132a14ce4f293158f4": "21acda15628723bfb108eca8a22b95b4",
".git/objects/89/a00417d3b465071957f153a5d78d058c730bfb": "c4c9d6d5d14a01fac7448af866b345cf",
".git/objects/89/20abb28f7fe2b9dc8387a1a7d3873a41c8e24a": "d06e926061efb6c7d2e715b07521243e",
".git/objects/89/9275a0ff8fcfdf03379f7abc9406abe7f3f885": "b2fdb5f52beace8a8366433f798567ff",
".git/objects/45/ace23a49ed8afb318a38e5f242f496e56b6f0c": "71c229ca83cd379974478b2b457d07b8",
".git/objects/87/fbfef95edecf64d65b6a1e9d72f4fbb15e3e83": "a8b257bbc14422f156aefb9ee21d94eb",
".git/objects/87/8dd4fee337a200e11f2a6c18afff8088c975ec": "0459cb40c1c90ed9fc3a39a363c9ca8e",
".git/objects/1a/23ed95f50de3e99ff5273ee5909681a2e6865e": "f5754bb6bc46d144db7d5746047801fb",
".git/objects/28/a62449d56d8122521f016b9cdb8e2d445a3cb0": "7ae354225c6223582ef18bdacc395543",
".git/objects/7b/835c96a531f1b93377e715a13823804c8a7223": "69399e8e6c7557f3b3efef94bc249153",
".git/objects/7b/f2d4653a01ffdd4dd422f3d09139e7a34a5ee2": "2dc6c4c3a29e5b117314ae1a608a89e3",
".git/objects/7b/5c288d6e88e04251647146c44dd5c76cf8e936": "55a403f624164a3bf9a26292f698cf03",
".git/objects/8f/327322556122893a653775b5a427f7b07a1a9c": "4da5504c0ab2232dd8218f42a65a87f0",
".git/objects/8f/54c1f6c0e49f1e4bca168e5bab06150149268b": "3983aef69e5760752eb8cf3a0fffa1d6",
".git/objects/8a/3469983b00cdfcf6a1e09f04a92ba8900f6d13": "f1de0ea5b5fab8a444555cf6b98719e5",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/a80db2958d98fe4644f4d0cac1289d79ee4221": "409fa5a5ee46bb72dc376f71ab4a1d67",
".git/objects/19/9764d4146195fcab0eb0a07ed13d00332c1b07": "14601d7fef7a16e29ba9d019da63a128",
".git/objects/19/f2001cea5a0db83704a7f67b7c427a5b66339c": "d3c5b63465eb2f71b6d812c5a4f08d32",
".git/objects/4c/e975858014c82338ed9642af563bb8cee62c47": "e81959f458eaf502f74ad8f2c3cf59ea",
".git/objects/26/291f6b5658e86ca8ebd78159d7e8977cae1a29": "e9670c7862366b1afd90d185d3fea9fe",
".git/objects/26/091cc245c4b6ae468e4765707401c1339256b6": "4924eb2f0dce03c4a1c2fb0ff426371a",
".git/objects/21/574e2f3abc516f5fa81d2d89f643230e5175ed": "6a5f90896f3ce7932ec082e26d76f714",
".git/objects/21/aec0c1e902b5820eb5a687b967ba8fe4692771": "8a9079f9eb9037fc41e00049ceaa1806",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/75/fa8b586df603c34a4e0bfe4075a8f0da05f6ec": "41fbfd88e1b42bb7e9574566f1071b95",
".git/objects/81/f15ed32238238a38e59de2f1c2e81ff65a2a21": "0e84614d0ce9cb92d6a055359f1da265",
".git/objects/72/3ef335a01efc7e427c50c81baf8a3e4c90779c": "e1639ed7c3d134aee318afc88ef43d25",
".git/objects/44/97751f0c7390269c0c49e01813f79b68c1d7ca": "b73c663b4016be223d972f8f4a369630",
".git/objects/44/b2c3bd764e128911dfd1b8397885e1e6670c36": "eda31488c12bf732803cb21b05366ff3",
".git/objects/2a/7dbcc01060d976fcda24ceccefb20499362d66": "c4e440700914012bc6cb672ce127b1a2",
".git/objects/2a/83d3dd2451398bb19b56b9d0f848dc636b5f1f": "4ecbbd9260a1b4879b084cecca4d5675",
".git/objects/43/13b96e5c41cd19d2de61669cda105a5fd29d76": "4de10ce6eb4f030b0435abefffe82f3e",
".git/objects/88/6e1b32f9e20959010bf589ec85ce67474bdc24": "cfe5556b463118c24db81b95294cdcd0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/07/123eae4b744dbad536d71c0b93a703b93f3fda": "142b70f50e2aa2c6c4fbe8136df1624f",
".git/objects/07/98c6119fe2ef6f23b2afa2ee561006ccbb8c85": "d7626961c02eec3f78d22e9782ac6cfe",
".git/objects/38/0530aee8de2388f5413fe4e7ff629740914002": "77ee9469bc3941f7411654443dfd1e17",
".git/objects/00/21f6d1a34cfe2ecca82822cfaf11a35af60d3f": "3d6b1b2d7e39dda1e76a74752257d806",
".git/objects/00/c57e2b5a8fab929b977d14363f77cfa3f0c181": "00670217b5bc506dbcc28c693432bf4d",
".git/objects/9a/cb616d7f728f923e445158a1dfbed2da84df7c": "f381fe3594500543a4e0ebcd64c14ae5",
".git/objects/5c/99a287eaa7caba65b7116d0b3c9fe225270c57": "19679b495881553c441d9699f1580756",
".git/objects/5c/718693dd386ae5c04477413a029433bc8c80a1": "b5741053d15dae60e9cbc4dda361cd1c",
".git/objects/09/47f1687f6b29f41ffef62d21d46d09d6fd809e": "6426cf3d58dd4127cb6bce94446c565e",
".git/objects/09/9e78c109ba0397b5b8808bd6451decb0b90ab4": "cc5a229283ca292e218a28624efae950",
".git/objects/5d/ad3a607a8b0f8df2a8674348f13d6306eff17d": "f89ce273f0cdb9ad5767a7c571d0d164",
".git/objects/5d/625958c79cafdd840eac601bc255bc40c79541": "803d5d3b59a97bebb8da85b6df48d3e5",
".git/objects/5d/d96a9b4c19ea34d7868944d882032afd9ed8d6": "73881b329e906966f5e3cbea417fa6bc",
".git/objects/5d/5bae7f3ebd2c7029d9e04e36849ab4d539c3fe": "e85d2e04470d304dc82f016f86ea1f65",
".git/objects/65/5d85df1bbd8e76325b4d5484b1815aa5818611": "6f8667566b640a7997074d17dec6acbd",
".git/objects/65/9776721c60e63e2e622a29eafc41d2ef54e220": "bcb8018d808d4bcbdff1ea18ee0e7c77",
".git/objects/62/d8f04de842e54f5090870882eb0176b333ec62": "6f4a0ec8b5332c6051b62ecd3b15d4c1",
".git/objects/96/1bcbdbe666a5eb73b25a32875025e1ba5315c3": "17a07818fa2b596ce6e7e3aaf3703f4c",
".git/objects/3a/4f4ec7bf5aab5ec79ceddbf857cf4851680f57": "aea3714174fffec1f3b37ee8798e475d",
".git/objects/3a/ed21f728cd48e756850e17168935fd02cd1e08": "a23d4b7bd87224d12bd65a75829a5305",
".git/objects/54/7f26bc3d2464c6e18d47548a45d6f816ca0c34": "686be38a1dfcb01b00f7b315ecdc9a46",
".git/objects/54/c2c9c201af563d05fa218f4b6b5b4a0b98d3c7": "a22124f2d4277ad79e28d9cbc62056af",
".git/objects/98/0e8384008199f5b8cacd2a342c4160c0282b69": "c3daac9268af76e0c13f7f4083515f8e",
".git/objects/98/efeb7530ecd6aca025b63a217cea9312fcb765": "3d8abb3a62bc87e27efb74c0548a91cc",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/53/377f956ad04652cf91d6194372674b47be01d8": "cc83be7eb6f2dd5980ccb4ff0c351411",
".git/objects/53/8c7865a6217111642909a856fa38b1ac50a73d": "bdf3d844e902d9144460074842c5b05a",
".git/objects/3f/f3c2c9411b8e2d6dc35bcd752b0a81c97da4fe": "9a8e5145c48123310b8255b6abc9e819",
".git/objects/3f/959df4140a79972130f71a1d85e075dd9644e8": "9d5803feee92297298ed751ce0f2af81",
".git/objects/5e/94b3a6ae01a4e68f65efa37bcc38dfc50f5546": "20ecd24fc889d8f8b58b2ca97e59ebdc",
".git/objects/08/104f36c2fb25ccf0b26298aa6e492dd3b9ea71": "a367aa1ddc464dca12970c3f63b3348d",
".git/objects/08/45dfe45ef5953d38a0984528d83603846b0715": "adf767050910aa3fb147f9abf7cb67b7",
".git/objects/6d/3681929b66c866dee34b42f4fe1d0fc3f12a78": "3034acb9d5dbd139c0ca9bff045534bc",
".git/objects/6d/2337a2f05a434f5d1d4741894b7cbe6c1986fb": "807138881d122be2e6773dd7fdb500da",
".git/objects/6d/1a6b29e55a18ad3fb58a55dd7d015154adb777": "4c73f51017e9760b4e3e302ee1dbd8ca",
".git/objects/06/5f0a34b79051a3bc4f0dbca8406060b4025b1e": "35041db06168a2e8d5b75bf5ce3994cd",
".git/objects/6c/6b48face38f9cbaa79d0e5e617a6799794c180": "49887b2066c11ff938e9fb2d01179794",
".git/objects/55/7875653a4e26f05fe74026227692a7cdd9b920": "4af4851d30ce1ba3732c4c0f418ab1be",
".git/objects/64/be081f7acda111826258383c0a14eea16b201f": "e85707ecbc3dbc349a387628209a7bdf",
".git/objects/64/ce560912acfc53b5cc4b8cc44b737833bdb92c": "5c3efadab10296815667d73ddacc6589",
".git/objects/90/98a03d17f7e0adbab2e3e8a44a1ee3e1fd9d31": "c29c15c1ba2be76a0b914086f1399e46",
".git/objects/bf/02d867d2189efa4256b6cee0a66e9b28034a76": "5f2f48a3b90dbfd7b30e9a8b59ea9d1f",
".git/objects/d3/385fe7b97d0f15dabebe9223f79f17e1c1b89e": "53014bb988a9544236b4b2750be0a18d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/0e8bc050318836df449773b1ab1882c617a033": "fd27267f83bcc535fb637a91f1f6908d",
".git/objects/a0/50812ff147715cfbf84645bcb5f369666bfa2d": "84796ffa07b94d9003ed55e4b7c0f8c6",
".git/objects/a0/885f53fa179412e1880938e6cc20a10b1808ba": "8a2a2d76371ed34c42cf235830d13875",
".git/objects/a7/0eb2d110f3bdc6c569e23e8cf1ea248f98c00b": "fd72af5478a42712ec06969f913bcd0a",
".git/objects/a7/d7693edb0ed8bc0df7e9b895da66818f59a265": "16d65e73618aea6047dacb2870555c9c",
".git/objects/b8/4e37ef69f8ecc35e5d0b60de4652d1ee9e8584": "7b4d8a701e19d9211122995f3f3faf19",
".git/objects/b1/5aba2f8fb385a6a534433ebeeb759bee663354": "071f1cfd07722e15ec6998e84de00d52",
".git/objects/b1/3565ad58f2b8b032ee2fc42527886737f0e2e9": "8d2437a502c9daac263e6c5fb1f82869",
".git/objects/dd/a4f257526271b8cb4b2f60b4007032955ddc5a": "5a511848625e54e33e1a639af62c0c5d",
".git/objects/dd/132a7013ce5af48e04c136a5be07505093515b": "2e41b25647f7f462db610d8d9db09154",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b6/c03f80ffd63969a412f5fc0e049eca1c1e2c24": "d234ca27fcd9a6f3b8f8f8af2994436b",
".git/objects/d5/52bb7c830dfb0d383be42dc5f7a1fd6ed761ff": "c59c011f015a28934deb203c1536bd42",
".git/objects/aa/12e7359c113c2cb31ac041ee454806c12e0a2c": "4ddbc1f4592926e680ffb106d3eafe21",
".git/objects/aa/acbb496c4d10bced881e0f2732e65db3dcd88a": "8dcf25e84baa2625d31b88554195c4e3",
".git/objects/af/f11028f890de5e4c882823b0b69a855915f376": "0c74f9294ec3ccde06507e2a812790c6",
".git/objects/b7/d6f0692667873e9023f47c7d04edc1d95302b6": "42cacb66c867b646c659d4f9231287ab",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/311992e578682181e939ef4f91ba324970c49e": "eeaee008d6bc3c959687fa655231c618",
".git/objects/db/63c6e4cdac7fc07c02cd2b8e3569ecbc1b583d": "87f0aa89d58e3aebacebe73745bd83e7",
".git/objects/a8/f40d38260acd0bb4914d385abb4e89eaf17779": "c2d5bfb6f531a2a22736dd346fa8326a",
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
".git/objects/e8/ffbbb685da84c6b280d66a405fa61e7510e287": "a46b8c187de8cde4aa153de6a02e6462",
".git/objects/fa/06b6275e8849b31781da39d44021ae88d2dc90": "ebf583db03c0c582b32187e963c3d573",
".git/objects/fa/dcc2b16892e577e61607ead05c0c7467554d5c": "f5ea65784c1058bc27893bc0a3ebf48f",
".git/objects/f6/4cb5dde83bb9119bddb1b87851c2ef6263b004": "906edb1d7f3b9faa76470dc8730b3d8a",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/f1/26f33e2caea49002faa18381501bb9612ac49a": "095118a717ed6830d29eb219f9d37f7c",
".git/objects/cb/bb1c8d3bf1110954b126ad9a62ef7b23a15064": "f0b52c4a2925728dbfef9c1de1b605b5",
".git/objects/cb/254b6a55c0841b4f566002e33ed51a8918b23c": "7be7b86ed8d02db86371e59efce55a9b",
".git/objects/f8/7db44a57479a5383f9e18828f28196904e6be1": "f53988e2941e0c024dda192b70b33091",
".git/objects/f8/a6d431d2dbffccf75dfc9d40dd188e34f521b1": "1a9f23697996751cbfffbbe7db1d9587",
".git/objects/46/6781f98c1d1bc66efc075c99ea8ad3004857df": "0801c98ba347393900b8958ff61f068f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/52f829609cb2269115fb628aa53081ea886077": "15be2885b190eb538f3c90a8ad38d3de",
".git/objects/46/6ad5b054ee7e8995ddaac2b12656038571baf9": "b47902c80ead2331dbb7de2bcf86fcd9",
".git/objects/46/4732df22b083ce2ae635c653c46ea031ab5224": "0188832fd99f7538b53347062e1ac5c7",
".git/objects/2c/12ba0a7e478fa318a61228c548dccd1b2fba94": "5ac471354aad5856546c95be350fa315",
".git/objects/2d/e12ba75e659a1442c6e8f9b42c936d1d598c59": "a41a27935332be02fa8e7b8b9f1910b9",
".git/objects/2d/32dfaccd5d2397d944999a8cd08ef3f6f16c90": "cff43af665d01ea37dbdd1a942efda80",
".git/objects/2d/48e03541325ec6f40078135daafb55c0342a21": "cc4b7625fa0c32cd99d1ca77c3187627",
".git/objects/2d/33d0eb8ae17f0edc8ab657233f2b5b5c5909ad": "7655554ca970b7db35e4d51fd757e30d",
".git/objects/41/b81e24eea257d0bd7a6fe66b79052b12116197": "94f23f89fd0cb627c7dd2eecc40dc9c9",
".git/objects/83/d8e85cf53bf7a833ecfdb0eda06b6f59fdad6d": "0c2dc6b9b98afab53017eed8fdd1bfa0",
".git/objects/83/449c7888609cc80d189aec3af06412a127cecc": "5ed5aa96888b9430da7c5290fc545e23",
".git/objects/77/8bf38e89190278b63f0247cf69d13ac315a4a5": "8031745f5ba80ab60b161d228514806e",
".git/objects/77/9f82e8c0275e61488faca4343cdeae0fc0379a": "3c050f1d88a5efa081b606a8359aa36a",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/4f/ca7665b615e697d12f29077f3a00afa69ef2dd": "3d407178a27f36b2016b5a63509b7902",
".git/objects/15/1bde909282c5e928c61641d575d21d6476c561": "ff1829aa1bbb78f2afec4a88e6a4a901",
".git/objects/12/799cf33054346ad492d1524070ca46527c21bc": "864f57407b3d84ee3eb947eef092b4f9",
".git/objects/8c/a1529bb59bfe29d79c34afd550ca2dae2cc21c": "8a52ce11c04d1130a4f9547d97e21503",
".git/objects/8c/c73450981d505a070a2b4e62c68ec5a3d397ca": "08665d3480a348dac196040ef53cd040",
".git/objects/85/644998cc6c336aaed9bf554813fa1b3eaa8709": "5443692941f4e735e4eceef4c2604f98",
".git/objects/1d/4cf3d61d681c2d91926a26cd640d74bde95fcc": "6200aaf358665334b167c2aebf68a058",
".git/objects/1d/27c4e23b705285e1d8f516af1768c2b7a0e478": "74bab5fc4a95f0a5058ecda0cb64df20",
".git/objects/71/012a1e61cf11f3df8186d68cc7f3191e04421f": "7f7abd160f3efad4bb306155d300d960",
".git/objects/71/dc10a1327f6c904df69515ad7c7113439c4395": "59e8ff17850c2bd7b8b4541b717931fe",
".git/objects/76/3bc41744872d894077bd958ac1dedcbe03d0b1": "3895ca2569ff63b280d685eb5ca10f81",
".git/objects/76/b36c289aa1165cf9dc303aa6f234742770423d": "f97d98273fce49e52a1a5e8461c4b035",
".git/objects/1c/e59ee3948d05bbd4eccc393ff54b14e19237a9": "5476896dc58bedc7e0d6296cc3f23bd0",
".git/objects/1c/afa8a15a7e497e0bc0c2008aeac4ddc2e31209": "161aa34e92f9c9bf48a78fef828ce709",
".git/objects/49/a3e78ec67deb83865faecbdc7846fa2d7f7127": "d53951f85572e9dc28df593e7f1f1d73",
".git/objects/49/cb10b4cf69716d3254ffe496bf129a3dfc189f": "2da59bcfee19a8a2e9ee42f927c04b10",
".git/objects/40/6c61c0107c338f9275e90cd7d307a99cf9f1f7": "10ab0aa218d200baf42637531996c520",
".git/objects/40/137291092ba10959fb7edb98bf7054d5aaa0bd": "011d89ba8e400244cfc590d05da0d93c",
".git/objects/40/85cd7f22eadefe5884409c5a6c13fdf85fe81f": "26d8cf2d77aefe187e2996b3f687e72a",
".git/objects/2b/80c21aa65bd0ea9de4740fd2a1bcbacc6a9b6b": "b7c213bfc5e7ec6dcc4d9f1fb66fcdd8",
".git/objects/47/c81e8217b0eecf720d143f6b88133c5721e0ec": "a3f6f6b6ea06592ecd57107ae452a9fc",
".git/objects/8b/c60f41a2ccae3335c4aa5fc0918cc73b982616": "a2d71e42efd7c825ef14686635d44bf3",
".git/objects/13/1253d2dba7b08a8c85a3366e6d1685e60f92d3": "37c6f5bc0db1e0a247cddf9b5aabf415",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7a/35ecdb0db5def844cb9f740a51be08201001fc": "a1fc6fb4a42e9dbc1fac52dcea045c70",
".git/objects/22/c0c294a34275f1919803457b86aa83b2881eec": "3fee9eb8b3ae4cc3dde32e77b7d47ba5",
".git/objects/22/44682dfd4d14b315ecdd6990b0c578130c6eed": "539638a03a59b09e4413e41ea4858772",
".git/objects/25/5de46ef6814c1d40fdd5028e412f81baf23142": "454b0bf1dd0fb7ef7318c5e805249377",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f584e9771a86cdaa69bc5a76d85677d9",
".git/logs/refs/heads/main": "e2e423b3e2d571c318a86b0c1c3c909d",
".git/logs/refs/remotes/origin/main": "94f9ac4aa5c13e467521b951500b3881",
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
".git/refs/heads/main": "7f3e6e3431c272ad7e7beeb28ec643b0",
".git/refs/remotes/origin/main": "7f3e6e3431c272ad7e7beeb28ec643b0",
".git/index": "124adbb4d717e57e291c1cbab8c39fd3",
".git/COMMIT_EDITMSG": "a71c91b4762186c4beaf32083db57418",
"assets/AssetManifest.json": "4ebc5b7f2759b3ec415a5c719b107c10",
"assets/NOTICES": "9d6595e051bc44cdbf3bea63455611ac",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "75b58430e0b2e9f6877c3217e808b3a0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "1d68a9ccdfbd525f7f5fccfd6e306d7e",
"assets/fonts/MaterialIcons-Regular.otf": "5bccbe40a0f7a361d831ee833e4d3136",
"assets/assets/images/app_logo.png": "d3d759d998d7087c0cc0fe26cf2a29f7",
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
