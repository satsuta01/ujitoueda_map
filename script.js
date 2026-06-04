// ============ DATA ============
const SPOTS = [
  {id:1,name:"スワンナプーム国際空港",country:"タイ",city:"バンコク",lat:13.68191464,lng:100.7468379,tags:["移動"],people:["うじ","うえだ"],videos:[{title:"【氏原/上田】海外初心者のくせに、イキってノープランでタイに行ってみた。",url:"https://youtu.be/Ken4Fq3Dcmg?si=ILouYH6pvPpQWR4X",time:"0:01"}],gmapUrl:"https://maps.app.goo.gl/NtJB2W5sDsaRxDuB7",note:"タイのロケ最初の空港"},
  {id:2,name:"ナナシーフード",country:"タイ",city:"バンコク",lat:13.74202193,lng:100.5543672,tags:["グルメ"],people:["うじ","うえだ"],videos:[{title:"【氏原/上田】海外初心者のくせに、イキってノープランでタイに行ってみた。",url:"https://youtu.be/Ken4Fq3Dcmg?si=ILouYH6pvPpQWR4X",time:"16:05"}],gmapUrl:"https://www.google.com/maps/place/%E3%83%8A%E3%83%BC%E3%83%8A%E3%83%BC+%E3%82%B7%E3%83%BC%E3%83%95%E3%83%BC%E3%83%89/@13.7415217,100.5440461,3504m/data=!3m1!1e3!4m14!1m7!3m6!1s0x30e29f661173b4f3:0xaad99b10e3a90d4a!2z44OK44O844OK44O8IOOCt-ODvOODleODvOODiQ!8m2!3d13.7415219!4d100.5543244!16s%2Fg%2F11sb5mjmb6!3m5!1s0x30e29f661173b4f3:0xaad99b10e3a90d4a!8m2!3d13.7415219!4d100.5543244!16s%2Fg%2F11sb5mjmb6?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D",note:"シーフードとお酒のお店、2回来ている"},
  {id:3,name:"コインランドリー",country:"タイ",city:"バンコク",lat:13.74137384,lng:100.5599188,tags:["チラ映り"],people:["うじ","うえだ"],videos:[{title:"【氏原/上田】海外初心者のくせに、イキってノープランでタイに行ってみた。",url:"https://youtu.be/Ken4Fq3Dcmg?si=ILouYH6pvPpQWR4X",time:"36:00"}],gmapUrl:"https://www.google.com/maps/place/Laundry+Empire/@13.7405818,100.5496835,3504m/data=!3m2!1e3!4b1!4m6!3m5!1s0x30e29ee45d40d725:0x899f1fee26389be1!8m2!3d13.740582!4d100.5599618!16s%2Fg%2F11gyxhxkvg?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D",note:"服をギリギリしか持ってこなかったうえだのため訪問"},
  {id:4,name:"ザンジバルレストラン",country:"タイ",city:"バンコク",lat:13.740951,lng:100.5561817,tags:["お酒"],people:["うじ","うえだ"],videos:[{title:"【氏原 / 上田】べろべろの状態から動画をはじめてみた inタイ",url:"https://youtu.be/F-FPHc1RCz4?si=AIaKBQmmTRbPJMWN",time:"0:01"}],gmapUrl:"https://www.google.com/maps/place/%E3%82%B6%E3%83%B3%E3%82%B8%E3%83%90%E3%83%AB%E3%83%AC%E3%82%B9%E3%83%88%E3%83%A9%E3%83%B3/@13.7409041,100.5561897,19z/data=!4m14!1m7!3m6!1s0x30e29f7bcbfe776f:0xa1775ff335ebbaae!2z44K244Oz44K444OQ44Or44Os44K544OI44Op44Oz!8m2!3d13.7409041!4d100.5561897!16s%2Fg%2F11j2f44_z0!3m5!1s0x30e29f7bcbfe776f:0xa1775ff335ebbaae!8m2!3d13.7409041!4d100.5561897!16s%2Fg%2F11j2f44_z0!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D",note:"色々話したバー"},
  {id:5,name:"オニックス",country:"タイ",city:"バンコク",lat:13.75201607,lng:100.5750056,tags:["夜遊び","クラブ"],people:["うじ","うえだ"],videos:[{title:"【氏原 / 上田】べろべろの状態から動画をはじめてみた inタイ",url:"https://youtu.be/F-FPHc1RCz4?si=AIaKBQmmTRbPJMWN",time:"16:10"}],gmapUrl:"https://www.google.com/maps/place/%E3%82%AA%E3%83%8B%E3%83%83%E3%82%AF%E3%82%B9/@13.7519014,100.5752282,19z/data=!4m6!3m5!1s0x30e29e5f7c3336c1:0xe0fba8c18a0018b4!8m2!3d13.7519737!4d100.5750013!16s%2Fg%2F11bbrkx22f?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D",note:"VIPを取って上田をエスコートしたクラブ"},
  {id:6,name:"ホテル",country:"タイ",city:"バンコク",lat:13.74020752,lng:100.553628,tags:["ホテル"],people:["うじ","うえだ"],videos:[{title:"二日酔いじゃなかったら、絶対に楽しめるタイの観光スポットを紹介！",url:"https://youtu.be/r7YQUoot9UA?si=A3MyESeqgW8H4zK0",time:"5:50"}],gmapUrl:"https://www.google.com/maps/place/Sukhumvit+Beds/@13.7401828,100.553616,20z/data=!4m22!1m11!2m10!1z44Ob44OG44Or!3m5!2sOrbit+Hostel!3s0x30e29f0195bbbd51:0x4c516101ac9f170b!4m2!1d100.5535298!2d13.7400863!5m2!5m1!1s2026-06-06!3m9!1s0x30e29fb299ef31f7:0x86b26cdbd4cec04d!5m3!1s2026-06-06!4m1!1i2!8m2!3d13.7401828!4d100.553616!16s%2Fg%2F11tdk_q0nz?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D",note:"泊まったホテル"},
  {id:7,name:"涅槃像",country:"タイ",city:"バンコク",lat:13.75579442,lng:100.4909294,tags:["観光"],people:["うじ","うえだ"],videos:[{title:"二日酔いじゃなかったら、絶対に楽しめるタイの観光スポットを紹介！",url:"https://youtu.be/r7YQUoot9UA?si=A3MyESeqgW8H4zK0",time:"15:00"}],gmapUrl:"https://www.google.com/maps/place/%E6%B6%85%E6%A7%83%E4%BB%8F/@13.7756208,100.4266512,11.66z/data=!4m19!1m11!2m10!1z5raF5qeD5YOP!3m5!2sOrbit+Hostel!3s0x30e29f0195bbbd51:0x4c516101ac9f170b!4m2!1d100.5535298!2d13.7400863!5m2!5m1!1s2026-06-06!3m6!1s0x30e2992eeec3a399:0x171a6b616b0a447f!8m2!3d13.7465252!4d100.4916607!15sCgnmtoXmp4Plg49aDCIK5raF5qeDIOWDj5IBD2J1ZGRoaXN0X3RlbXBsZeABAA!16s%2Fg%2F11j0b0qzl4?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D",note:"紹介された涅槃像、全長46m、高さ15mもある"},
  {id:8,name:"weed city",country:"タイ",city:"バンコク",lat:13.75864529,lng:100.4984262,tags:["チラ映り","観光"],people:["うじ","うえだ"],videos:[{title:"二日酔いじゃなかったら、絶対に楽しめるタイの観光スポットを紹介！",url:"https://youtu.be/r7YQUoot9UA?si=A3MyESeqgW8H4zK0",time:"15:40"}],gmapUrl:"https://www.google.com/maps/place/Plantopia+-+Weed+City/@13.7583257,100.4984903,17z/data=!4m14!1m7!3m6!1s0x30e299489c328d7b:0xee89cae3669c33f5!2sPlantopia+-+Weed+City!8m2!3d13.7584473!4d100.4984906!16s%2Fg%2F11s85sw4gc!3m5!1s0x30e299489c328d7b:0xee89cae3669c33f5!8m2!3d13.7584473!4d100.4984906!16s%2Fg%2F11s85sw4gc?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D",note:"すごい名前のフードコートみたいなマリファナショップ、この前の露店でサソリを食べた"},
  {id:9,name:"バーガーキング",country:"タイ",city:"バンコク",lat:13.7604333,lng:100.4964356,tags:["グルメ"],people:["うじ","うえだ"],videos:[{title:"二日酔いじゃなかったら、絶対に楽しめるタイの観光スポットを紹介！",url:"https://youtu.be/r7YQUoot9UA?si=A3MyESeqgW8H4zK0",time:"18:05"}],gmapUrl:"https://www.google.com/maps/place/%E3%83%90%E3%83%BC%E3%82%AC%E3%83%BC%E3%82%AD%E3%83%B3%E3%82%B0/@13.7603291,100.4939036,17z/data=!3m1!4b1!4m9!3m8!1s0x30e2996d5dbc7067:0xa64cd3708dec090d!5m2!4m1!1i2!8m2!3d13.7603291!4d100.4964785!16s%2Fg%2F12hkgfv03?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D",note:"悪い意味で静かなバーガーキング"},
  {id:10,name:"アソーク・トンロー地域",country:"タイ",city:"バンコク",lat:13.7401781,lng:100.565629,tags:["チラ映り"],people:["うじ","うえだ"],videos:[{title:"【氏原 / 上田】タイのスナックではしゃいでたら、喧嘩になりました。",url:"https://youtu.be/vCM5yIyZCYI?si=Q4CRVWMaud-MoNVg",time:"2:51"}],gmapUrl:"https://www.google.com/maps/@13.7401651,100.5656987,3a,75y,287.45h,90t/data=!3m7!1e1!3m5!1spp03FLqlh4IDZkQAgzhlRQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D0%26panoid%3Dpp03FLqlh4IDZkQAgzhlRQ%26yaw%3D287.4511727079622!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D",note:"日本人向けの店が多いエリア"},
  {id:11,name:"ヤングプレイスビル",country:"タイ",city:"バンコク",lat:13.74039941,lng:100.5655965,tags:["夜遊び","スナック"],people:["うじ","うえだ"],videos:[{title:"【氏原 / 上田】タイのスナックではしゃいでたら、喧嘩になりました。",url:"https://youtu.be/vCM5yIyZCYI?si=Q4CRVWMaud-MoNVg",time:"2:56"}],gmapUrl:"https://www.google.com/maps/place/Young+Place/@13.7402149,100.5650884,19.28z/data=!4m14!1m7!3m6!1s0x30e29efb0e1dc16f:0xc4705542098cc388!2sYoung+Place!8m2!3d13.7403546!4d100.5656005!16s%2Fg%2F11bzv3fwj1!3m5!1s0x30e29efb0e1dc16f:0xc4705542098cc388!8m2!3d13.7403546!4d100.5656005!16s%2Fg%2F11bzv3fwj1?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D",note:"うじの知り合いの店が入っているビル、怒ってるうじが見れる"},
  {id:12,name:"蓮(Len)",country:"タイ",city:"バンコク",lat:13.74034525,lng:100.5654632,tags:["夜遊び","スナック"],people:["うじ","うえだ"],videos:[{title:"【氏原 / 上田】タイのスナックではしゃいでたら、喧嘩になりました。",url:"https://youtu.be/vCM5yIyZCYI?si=Q4CRVWMaud-MoNVg",time:"14:12"}],gmapUrl:"https://www.google.com/maps/place/LEN%EF%BD%9E%E8%93%AE%EF%BD%9E+Snack+Bar/@13.7400587,100.5647605,18z/data=!4m10!1m2!2m1!1z6JOu!3m6!1s0x30e29f0017d349d7:0x5cea6b1422d4afa8!8m2!3d13.7403045!4d100.5654679!15sCgPok65aBSID6JOukgELa2FyYW9rZV9iYXLgAQA!16s%2Fg%2F11y674f75h?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D",note:"うじの知り合い(同級生)がやっているスナック"},
  {id:13,name:"羽田空港",country:"日本",city:"東京",lat:35.54886933,lng:139.7778439,tags:["移動"],people:["うじ","うえだ"],videos:[{title:"【海外初心者】ノープランでタイに行った結果、見たことないVlogが仕上がりました。",url:"https://youtu.be/z1Kesj3yAYY?si=LkuCyDPeqa0zO3o5",time:"0:01"}],gmapUrl:"https://www.google.com/maps/place/%E7%BE%BD%E7%94%B0%E7%A9%BA%E6%B8%AF/@35.5476821,139.7581887,14z/data=!3m1!4b1!4m6!3m5!1s0x6018640ba43192e3:0xd32c3a9d146f8df!8m2!3d35.5482964!4d139.7779951!16zL20vMDFubG1t?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D",note:"移動の際によく使われる空港、遅刻がよく起きる"},
  {id:14,name:"和処  秀",country:"日本",city:"東京",lat:35.69539991,lng:139.7052656,tags:["グルメ"],people:["うじ","うえだ","サカモト","たかさき"],videos:[{title:"【飲みトーク】タイの反省会で、いろいろバラされる氏原と上田。",url:"https://youtu.be/7kehCMEmAo8?si=xO8skSpVz81xwk1q",time:"0:01"}],gmapUrl:"https://www.google.com/maps/place/%E5%92%8C%E5%87%A6+%E7%A7%80/@35.6952431,139.7026585,17z/data=!4m14!1m7!3m6!1s0x60188dd5e1fd40a5:0x35ded0d549c067ff!2z5ZKM5YemIOengA!8m2!3d35.6952431!4d139.7052334!16s%2Fg%2F11sq_7nxk_!3m5!1s0x60188dd5e1fd40a5:0x35ded0d549c067ff!8m2!3d35.6952431!4d139.7052334!16s%2Fg%2F11sq_7nxk_?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D",note:"居酒屋がっつりトーク回で使われる居酒屋、新宿で一番美味い"},
  {id:15,name:"成田空港",country:"日本",city:"千葉",lat:35.77110952,lng:140.3840899,tags:["移動"],people:["うじ","うえだ","たかさき"],videos:[{title:"【韓国旅行】海外初心者のクセに、イキってノープランで韓国に行ってみた",url:"https://youtu.be/h34PBIzWtlc?si=iI99Yad98mRhCJQl",time:"0:01"}],gmapUrl:"https://maps.app.goo.gl/gria85pcEwE84Niv8",note:"韓国旅行の始まり、遅刻がよく起きる"},
  {id:16,name:"仁川国際空港",country:"韓国",city:"仁川広域市",lat:37.47322552,lng:126.4381621,tags:["移動"],people:["うじ","うえだ","たかさき"],videos:[{title:"【韓国旅行】海外初心者のクセに、イキってノープランで韓国に行ってみた",url:"https://youtu.be/h34PBIzWtlc?si=iI99Yad98mRhCJQl",time:"7:03"}],gmapUrl:"https://maps.app.goo.gl/RC2w86JgtnDn3uG29",note:"韓国ロケの最初の空港、韓国の成田"},
  {id:17,name:"somyung drug",country:"韓国",city:"梨泰院",lat:37.53414562,lng:126.9953917,tags:["チラ映り"],people:["うじ","うえだ","たかさき"],videos:[{title:"【韓国旅行】海外初心者のクセに、イキってノープランで韓国に行ってみた",url:"https://youtu.be/h34PBIzWtlc?si=iI99Yad98mRhCJQl",time:"38:50"}],gmapUrl:"https://www.google.com/maps/place/%EC%86%8C%EB%AA%85%EC%95%BD%EA%B5%AD/@37.5340816,126.9956898,15z/data=!4m6!3m5!1s0x357ca24ae8ac50ad:0x403c431276177fdd!8m2!3d37.5340946!4d126.9954132!16s%2Fg%2F1tj6rs6s?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D",note:"うじ、たかさきが2kmに渋っていた場所"},
  {id:18,name:"弘大の大通り",country:"韓国",city:"弘大",lat:37.55471148,lng:126.9228642,tags:["移動"],people:["うじ","うえだ","たかさき"],videos:[{title:"【韓国旅行】海外初心者のクセに、イキってノープランで韓国に行ってみた",url:"https://youtu.be/h34PBIzWtlc?si=iI99Yad98mRhCJQl",time:"50:00"}],gmapUrl:"https://maps.app.goo.gl/CsQCzqkcjPjLpezT7",note:"路上で歌っていたり、カピバラ一本勝負のお店があったりする"},
  {id:19,name:"梨泰院のBar",country:"韓国",city:"梨泰院",lat:37.53501988,lng:126.9947259,tags:["夜遊び","お酒"],people:["うじ","うえだ","たかさき"],videos:[{title:"【韓国旅行】べろべろの状態から動画をはじめてみた in 韓国",url:"https://youtu.be/bNfT358l1lk?si=3AcZBul7bV3ZXIEQ",time:"0:01"}],gmapUrl:"https://maps.app.goo.gl/rmzzftQryddGCn9KA",note:"おじさんたちと話していたBar、飲みすぎて記憶がないらしい"},
  {id:20,name:"Times",country:"韓国",city:"ソウル",lat:37.52623216,lng:127.0393049,tags:["夜遊び","クラブ"],people:["うじ","うえだ","たかさき"],videos:[{title:"【韓国旅行】べろべろの状態から動画をはじめてみた in 韓国",url:"https://youtu.be/bNfT358l1lk?si=3AcZBul7bV3ZXIEQ",time:"17:25"}],gmapUrl:"https://www.google.com/maps/place/Times/@37.5262917,127.0392191,18z/data=!4m6!3m5!1s0x357ca38415a6f2f3:0xd561ac7dd972a075!8m2!3d37.5261933!4d127.0393215!16s%2Fg%2F11ryj3pltk?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D",note:"うじが行きたかったが、開いていなかったクラブ"},
  {id:21,name:"WAP",country:"韓国",city:"ソウル",lat:37.52626414,lng:127.0376948,tags:["夜遊び","クラブ"],people:["うじ","うえだ","たかさき"],videos:[{title:"【韓国旅行】べろべろの状態から動画をはじめてみた in 韓国",url:"https://youtu.be/bNfT358l1lk?si=3AcZBul7bV3ZXIEQ",time:"18:30"}],gmapUrl:"https://www.google.com/maps/place/WAP+LOUNGE+(%EC%99%91+%EB%9D%BC%EC%9A%B4%EC%A7%80)+HIPHOP+R%26B/@37.5261761,127.0327439,15.95z/data=!4m10!1m2!2m1!1sWAP++club!3m6!1s0x357ca3ffe3222577:0x540fc2a85c6212ca!8m2!3d37.5261875!4d127.0377277!15sCglXQVAgIGNsdWJaCiIId2FwIGNsdWKSAQZsb3VuZ2XgAQA!16s%2Fg%2F11y3_w0c_v?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D",note:"うじが行きたかったクラブがやっておらず、たどり着いたクラブ、ここもやっていなかった"},
  {id:22,name:"THE RACE",country:"韓国",city:"ソウル",lat:37.51503123,lng:127.0190027,tags:["夜遊び","クラブ"],people:["うじ","うえだ","たかさき"],videos:[{title:"【韓国旅行】べろべろの状態から動画をはじめてみた in 韓国",url:"https://youtu.be/bNfT358l1lk?si=3AcZBul7bV3ZXIEQ",time:"22:10"}],gmapUrl:"https://www.google.com/maps/place/CLUBRACE/@37.5149981,127.0164303,17z/data=!3m1!4b1!4m6!3m5!1s0x357ca331f32fad17:0xa725920d73a33f2d!8m2!3d37.5149981!4d127.0190052!16s%2Fg%2F11ss6gnnz5?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D",note:"うじの最後の希望のクラブ、やっていなかった"},
  {id:23,name:"広蔵市場",country:"韓国",city:"ソウル",lat:37.5701078,lng:126.9996036,tags:["観光","グルメ"],people:["うじ","うえだ","たかさき"],videos:[{title:"【二日酔い】韓国初日に飲み過ぎた男３人が、２日目をなんとか楽しもうとする全記録。【広蔵市場】",url:"https://youtu.be/w9UpAsJG9tI?si=7ly_E2r6HwjSLyls",time:"15:30"}],gmapUrl:"https://www.google.com/maps/place/%E5%BA%83%E8%94%B5%E5%B8%82%E5%A0%B4/@37.5700398,126.9970287,17z/data=!3m1!4b1!4m6!3m5!1s0x357ca2ed7e74759b:0xd656a34831089f44!8m2!3d37.5700398!4d126.9996036!16s%2Fm%2F012r1x6q?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D",note:"韓国の古い市場、屋台が並ぶ観光スポット"},
  {id:24,name:"DOOKUPSAM Myeongdong",country:"韓国",city:"明洞",lat:37.561931,lng:126.9865224,tags:["グルメ"],people:["うじ","うえだ","たかさき"],videos:[{title:"【韓国vlog】旅行を楽しむ才能ゼロの男３人の韓国旅行最終日。",url:"https://youtu.be/dWy0YQHOlO4?si=wuqg2LMWPKK77suQ",time:"30:20"}],gmapUrl:"https://www.google.com/maps/place/DOOKUPSAM+Myeongdong/@37.5618072,126.9864225,21z/data=!4m9!1m2!2m1!1z5aSn5a62YmJx!3m5!1s0x357ca38ab489fae3:0x30aff11729487e75!8m2!3d37.5619247!4d126.9865258!16s%2Fg%2F11tsxkfz8m?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D",note:"店員さんが肉を焼いてくれる焼肉屋さん"},
  {id:25,name:"長池自然公園",country:"日本",city:"浜松",lat:34.76769061443795,lng:137.7301949958386,tags:["観光","思い出"],people:["うじ","うえだ","サカモト"],videos:[{title:"【地獄】氏原の地元の嫌な思い出だけを案内してもらった。",url:"https://youtu.be/VadRfBorR_M?si=Ebm1QBrkyLsJCSOg",time:"0:01"}],gmapUrl:"https://www.google.com/maps/place/%E9%95%B7%E6%B1%A0%E8%87%AA%E7%84%B6%E5%85%AC%E5%9C%92/@34.7757324,137.7244883,3a,75y,186.23h,90t/data=!3m7!1e1!3m5!1s42rIf6tHYWck8L0g-sW1gg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D0%26panoid%3D42rIf6tHYWck8L0g-sW1gg%26yaw%3D186.22731!7i16384!8i8192!4m14!1m7!3m6!1s0x601adf86a2d990e3:0x6edd31e366e68aa7!2z6ZW35rGg6Ieq54S25YWs5ZyS!8m2!3d34.7677263!4d137.7303238!16s%2Fg%2F11c3yw52pt!3m5!1s0x601adf86a2d990e3:0x6edd31e366e68aa7!8m2!3d34.7677263!4d137.7303238!16s%2Fg%2F11c3yw52pt?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D",note:"うじがNo.2になった公園、詳しくは動画をチェック"},
  {id:26,name:"浜松明神池運動公園",country:"日本",city:"浜松",lat:34.83269119190225,lng:137.76427738968226,tags:["観光","思い出"],people:["うじ","うえだ","サカモト"],videos:[{title:"【地獄】氏原の地元の嫌な思い出だけを案内してもらった。",url:"https://youtu.be/VadRfBorR_M?si=Ebm1QBrkyLsJCSOg",time:"13:00"}],gmapUrl:"https://www.google.com/maps/place/%E6%98%8E%E7%A5%9E%E6%B1%A0%E9%81%8B%E5%8B%95%E5%85%AC%E5%9C%92+%E6%B5%9C%E5%8C%97%E7%90%83%E5%A0%B4/@34.8326796,137.7643069,17z/data=!4m15!1m8!3m7!1s0x601b1f62b9c4ab61:0xc58fbaa9fcb4ded5!2z5piO56We5rGg6YGL5YuV5YWs5ZySIOa1nOWMl-eQg-WgtA!8m2!3d34.8326796!4d137.7643069!10e5!16s%2Fg%2F1tdft689!3m5!1s0x601b1f62b9c4ab61:0xc58fbaa9fcb4ded5!8m2!3d34.8326796!4d137.7643069!16s%2Fg%2F1tdft689?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D",note:"うじがファーストキスした場所、詳しくは動画をチェック"},
  {id:27,name:"佐鳴予備校",country:"日本",city:"浜松",lat:34.79716176395529,lng:137.78424400125536,tags:["観光","思い出"],people:["うじ","うえだ","サカモト"],videos:[{title:"【地獄】氏原の地元の嫌な思い出だけを案内してもらった。",url:"https://youtu.be/VadRfBorR_M?si=Ebm1QBrkyLsJCSOg",time:"27:30"}],gmapUrl:"https://www.google.com/maps/place/%E4%BD%90%E9%B3%B4%E4%BA%88%E5%82%99%E6%A0%A1%E6%B5%9C%E5%8C%97%E6%9C%AC%E9%83%A8%E6%A0%A1/@34.7935555,137.7848344,3a,75y,31.69h,82.05t/data=!3m7!1e1!3m5!1s4ObTo6rK0bUv05jMSKzhBw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D7.949746300448936%26panoid%3D4ObTo6rK0bUv05jMSKzhBw%26yaw%3D31.692951572338828!7i16384!8i8192!4m10!1m2!2m1!1z5L2Q6bO05LqI5YKZ5qCh44CA5rWc5p2-!3m6!1s0x601ae02014ecb039:0x90ba15d001dceaf6!8m2!3d34.7936596!4d137.7846538!15sChjkvZDps7TkuojlgpnmoKHjgIDmtZzmnb4iA4gBAZIBD2NyYW1taW5nX3NjaG9vbOABAA!16s%2Fg%2F1w0p5prm?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D",note:"うじとサカモトが出会った塾、とんでもない小噺もある"},
  {id:28,name:"アントニオ B. ウォン・パット国際空港",country:"アメリカ",city:"グアム",lat:13.485436030355999,lng:144.80009481579233,tags:["移動","観光"],people:["うじ","うえだ","たかさき"],videos:[{title:"全く笑えないトラブルから開幕した、海外初心者たちのグアム旅行【たかさき】",url:"https://youtu.be/jGa0hkJfFeg?si=VDQN49kapq4OV_VO",time:"5:30"}],gmapUrl:"https://www.google.com/maps/place/%E3%82%A2%E3%83%B3%E3%83%88%E3%83%8B%E3%82%AA+B.+%E3%82%A6%E3%82%A9%E3%83%B3%E3%83%BB%E3%83%91%E3%83%83%E3%83%88%E5%9B%BD%E9%9A%9B%E7%A9%BA%E6%B8%AF/@13.4856447,144.7898595,15z/data=!3m1!4b1!4m6!3m5!1s0x671f82b0860a153d:0x971b4be40b4e879d!8m2!3d13.4856449!4d144.8001378!16zL20vMDFxbW0x?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D",note:"うえだが遅れて到着した空港、グアムはアメリカの領土である"},
  {id:29,name:"サークルK",country:"アメリカ",city:"グアム",lat:13.520703908096902,lng:144.8081074954394,tags:["お酒"],people:["うじ","うえだ","たかさき"],videos:[{title:"全く笑えないトラブルから開幕した、海外初心者たちのグアム旅行【たかさき】",url:"https://youtu.be/jGa0hkJfFeg?si=VDQN49kapq4OV_VO",time:"38:30"}],gmapUrl:"https://www.google.com/maps/place/76+%E3%82%B5%E3%83%BC%E3%82%AF%E3%83%AB+K+%E3%82%B5%E3%83%B3%E3%83%97%E3%83%A9%E3%82%B6/@13.4757698,144.6952109,11.87z/data=!4m10!1m2!2m1!1scircle+k!3m6!1s0x671f82f536e3a039:0x188c7d9483e0acbc!8m2!3d13.5170395!4d144.8077142!15sCghjaXJjbGUgayIDiAEBkgERY29udmVuaWVuY2Vfc3RvcmXgAQA!16s%2Fg%2F11c59nswz2?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D",note:"三人でお酒を買ったスーパー、現在は閉業している"},
  {id:30,name:"デュシット・ビーチ・リゾート・グアム",country:"アメリカ",city:"グアム",lat:13.515204529370497,lng:144.80570236117254,tags:["ホテル"],people:["うじ","うえだ","たかさき"],videos:[{title:"全く笑えないトラブルから開幕した、海外初心者たちのグアム旅行【たかさき】",url:"https://youtu.be/jGa0hkJfFeg?si=VDQN49kapq4OV_VO",time:"16:00"}],gmapUrl:"https://www.google.com/maps/place/%E3%83%87%E3%83%A5%E3%82%B7%E3%83%83%E3%83%88%E3%83%BB%E3%83%93%E3%83%BC%E3%83%81%E3%83%BB%E3%83%AA%E3%82%BE%E3%83%BC%E3%83%88%E3%83%BB%E3%82%B0%E3%82%A2%E3%83%A0/@13.5147389,144.8021035,16.52z/data=!3m1!5s0x671f828b4076e1d1:0xdb78b1e32a180c0!4m13!1m2!2m1!1sDusit+!3m9!1s0x671f828b872566f3:0xecdf337887c7297b!5m2!4m1!1i2!8m2!3d13.5152325!4d144.8057305!15sCgVEdXNpdCIDiAEBWgciBWR1c2l0kgEFaG90ZWzgAQA!16s%2Fg%2F11b75hk0sk!5m1!1e4?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D",note:"グアム２日目に泊まったホテル、すごくいい"},
  {id:31,name:"TGIフライデーズ",country:"アメリカ",city:"グアム",lat:13.515319615863348,lng:144.80729285337463,tags:["グルメ"],people:["うじ","うえだ","たかさき"],videos:[{title:"【グアム】恐ろしいほど上手くいかない男３人のグアム旅",url:"https://youtu.be/ZwsD3pocRmE?si=Xyd5eDhYsGgD1lzS",time:"16:30"}],gmapUrl:"https://www.google.com/maps/place/TGI%E3%83%95%E3%83%A9%E3%82%A4%E3%83%87%E3%83%BC%E3%82%BA/@13.5153144,144.8073009,18z/data=!3m1!5s0x671f82f4d2294ae5:0x95977fdcbdcf7e10!4m17!1m10!3m9!1s0x671f82f4cd0fbe0d:0x7757350f162ad63e!2zVEdJ44OV44Op44Kk44OH44O844K6!8m2!3d13.5153144!4d144.8073009!10e5!14m1!1BCgIgAQ!16s%2Fg%2F1tjtjdch!3m5!1s0x671f82f4cd0fbe0d:0x7757350f162ad63e!8m2!3d13.5153144!4d144.8073009!16s%2Fg%2F1tjtjdch!5m1!1e4?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D",note:"昼ごはんを食べたレストラン"},
  {id:32,name:"ザ・ビーチ",country:"アメリカ",city:"グアム",lat:13.524285218158019,lng:144.80416479042773,tags:["お酒"],people:["うじ","うえだ","たかさき"],videos:[{title:"【グアム】恐ろしいほど上手くいかない男３人のグアム旅",url:"https://youtu.be/ZwsD3pocRmE?si=Xyd5eDhYsGgD1lzS",time:"47:20"}],gmapUrl:"https://www.google.com/maps/place/%E3%82%B6%E3%83%BB%E3%83%93%E3%83%BC%E3%83%81/@13.5039392,144.7236225,12z/data=!4m11!1m3!2m2!1sBar!6e5!3m6!1s0x671f8266e4810b11:0x3d0e34808862bd05!8m2!3d13.5242632!4d144.8040965!15sCgNCYXJaBSIDYmFykgENYmFyX2FuZF9ncmlsbJoBI0NoWkRTVWhOTUc5blMwVkpRMEZuVFVSM01ITlBTR0ZSRUFF4AEA-gEECCgQFQ!16s%2Fg%2F1tfjfnsv!5m1!1e4?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D",note:"DJの音楽を聴きながら呑めるBar、うじの好きなテラス席がある"},
  {id:33,name:"ZOH  ナイトクラブ",country:"アメリカ",city:"グアム",lat:13.5128402091319,lng:144.8058025939487,tags:["夜遊び","クラブ"],people:["うじ","うえだ","たかさき"],videos:[{title:"【グアム】恐ろしいほど上手くいかない男３人のグアム旅",url:"https://youtu.be/ZwsD3pocRmE?si=Xyd5eDhYsGgD1lzS",time:"52:37"}],gmapUrl:"https://www.google.com/maps/place/ZOH+Nightclub%2FClub+ZOH/@13.5124571,144.7957935,15z/data=!4m10!1m2!2m1!1sZOH!3m6!1s0x671f828b3f465725:0x79df002888e3f172!8m2!3d13.5128486!4d144.8058183!15sCgNaT0iSAQpkYW5jZV9jbHVi4AEA!16s%2Fg%2F11d_tk3k80!5m1!1e4?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D",note:"グアム旅行で行ったクラブ、フロアに人がいなかった"},
  {id:34,name:"横綱レストラン",country:"アメリカ",city:"グアム",lat:13.516915970410782,lng:144.80720221580142,tags:["グルメ"],people:["うじ","うえだ","たかさき"],videos:[{title:"【グアム最終日】うどん食って財布なくしてたら終わってた海外旅行",url:"https://youtu.be/8wI9-nmA4Z4?si=IhUDs0PfpWtW1V8Y",time:"17:00"}],gmapUrl:"https://www.google.com/maps/place/%E6%A8%AA%E7%B6%B1%E3%83%AC%E3%82%B9%E3%83%88%E3%83%A9%E3%83%B3/@13.5167908,144.7969669,15z/data=!3m1!4b1!4m6!3m5!1s0x671f82f533453d33:0x2f13d467e74bb49e!8m2!3d13.516791!4d144.8072452!16s%2Fg%2F1hc16bxby!5m1!1e4?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D",note:"グアム最終日に行った美味しいレストラン"},
  {id:35,name:"牛タンの通り",country:"日本",city:"仙台",lat:38.26456307179302,lng:140.8700030157165,tags:["グルメ"],people:["うじ","うえだ","サカモト"],videos:[{title:"【大神回】夜中の酔ったノリで、徹夜で仙台に行ってみた。",url:"https://youtu.be/zh6aF2eTtFo?si=1K0V_jk1I_exX7C6",time:"21:40"}],gmapUrl:"https://maps.app.goo.gl/z1KUwcA56RqgGFUi6",note:"牛タンを食べに行ったエリア、うじは牛タンが好きらしい"},
  {id:36,name:"伊達政宗像",country:"日本",city:"仙台",lat:38.25359925612968,lng:140.85672995492638,tags:["観光"],people:["うじ","うえだ","サカモト"],videos:[{title:"【大神回】夜中の酔ったノリで、徹夜で仙台に行ってみた。",url:"https://youtu.be/zh6aF2eTtFo?si=1K0V_jk1I_exX7C6",time:"33:10"}],gmapUrl:"https://www.google.com/maps/place/%E4%BC%8A%E9%81%94%E6%94%BF%E5%AE%97%E5%85%AC+%E9%A8%8E%E9%A6%AC%E5%83%8F/@38.253406,140.8484224,15.06z/data=!4m10!1m2!2m1!1z5LyK6YGU5pS_5a6X!3m6!1s0x5f8a2842e1ffaaab:0x6c0546528d2ed132!8m2!3d38.2532768!4d140.8568!15sCgzkvIrpgZTmlL_lrpdaDyIN5LyK6YGUIOaUv-Wul5IBCXNjdWxwdHVyZZoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VOeU5XVnRWR2RuUlJBQuABAPoBBQiRAxAm!16s%2Fg%2F11byxg_hng!5m1!1e4?entry=ttu&g_ep=EgoyMDI2MDUzMS4wIKXMDSoASAFQAw%3D%3D",note:"三人で見に行った伊達政宗の像"},
  {id:37,name:"NIGHT CLUB 101 SENDAI",country:"日本",city:"仙台",lat:38.26385239068061,lng:140.8706955110033,tags:["夜遊び","クラブ"],people:["うじ","うえだ","サカモト"],videos:[{title:"【大神回】夜中の酔ったノリで、徹夜で仙台に行ってみた。",url:"https://youtu.be/zh6aF2eTtFo?si=1K0V_jk1I_exX7C6",time:"1:00:00"}],gmapUrl:"https://www.google.com/maps/place/NIGHT+CLUB+101+SENDAI/@38.242958,140.8261494,13z/data=!3m1!5s0x5f8a283ad6caf091:0xd2d404b48a4a7ce6!4m10!1m2!2m1!1s101!3m6!1s0x5f8a2900365396b7:0xf4890e95e5c30624!8m2!3d38.2638918!4d140.8706834!15sCgMxMDFaBSIDMTAxkgEKbmlnaHRfY2x1YuABAA!16s%2Fg%2F11w3n24v04!5m1!1e4?entry=ttu&g_ep=EgoyMDI2MDUzMS4wIKXMDSoASAFQAw%3D%3D",note:"CHARIにVIPをとってもらったクラブ"},
  {id:38,name:"ART NIGHT CLUB",country:"日本",city:"仙台",lat:38.26285728175617,lng:140.869731440497,tags:["夜遊び","クラブ"],people:["うじ","うえだ","サカモト"],videos:[{title:"【大神回】夜中の酔ったノリで、徹夜で仙台に行ってみた。",url:"https://youtu.be/zh6aF2eTtFo?si=1K0V_jk1I_exX7C6",time:"1:04:00"}],gmapUrl:"https://www.google.com/maps/place/ART+NIGHT+CLUB/@38.261621,140.8668166,16.19z/data=!4m10!1m2!2m1!1sART!3m6!1s0x5f8a29582a1f522b:0x1a8792d7f0db63bd!8m2!3d38.2628612!4d140.8697068!15sCgNBUlRaBSIDYXJ0kgEKbmlnaHRfY2x1YpoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VSTU9GOTJXVmhCRUFF4AEA-gEECAAQHg!16s%2Fg%2F11sw_5xjsx!5m1!1e4?entry=ttu&g_ep=EgoyMDI2MDUzMS4wIKXMDSoASAFQAw%3D%3D",note:"CHARIがおすすめしてくれたクラブ"},
  {id:39,name:"国分町のガールズバー",country:"日本",city:"仙台",lat:38.26556268975577,lng:140.86833211155874,tags:["夜遊び","ガールズバー"],people:["うじ","うえだ","サカモト"],videos:[{title:"酔った勢いで栃木旅行して、遂に氏原が「成功」した全記録。",url:"https://youtu.be/0VmPT_68znw?si=tgC5xved5IHSPkDY",time:"8:00"}],gmapUrl:"https://www.google.com/maps/place/%E3%80%92980-0803+%E5%AE%AE%E5%9F%8E%E7%9C%8C%E4%BB%99%E5%8F%B0%E5%B8%82%E9%9D%92%E8%91%89%E5%8C%BA%E5%9B%BD%E5%88%86%E7%94%BA/@38.2645298,140.8687221,16z/data=!3m1!4b1!4m6!3m5!1s0x5f8a283aa680ec99:0xdec9f70280af189a!8m2!3d38.2663221!4d140.8681849!16s%2Fg%2F1222cm0l!5m1!1e4?entry=ttu&g_ep=EgoyMDI2MDUzMS4wIKXMDSoASAFQAw%3D%3D",note:"限られた時間で行ったガールズバー、ねねちゃんがいる"}
];

// ★ SPOTSから動画一覧を動的に生成するための配列
let VIDEOS = [];

// SPOTSをスキャンしてVIDEOSデータを自動構築する関数
function generateVideosFromSpots() {
  const videoMap = new Map();
  
  SPOTS.forEach(spot => {
    if (!spot.videos) return;
    spot.videos.forEach(v => {
      if (!v.title) return;
      
      if (!videoMap.has(v.title)) {
        videoMap.set(v.title, {
          title: v.title,
          url: v.url,
          date: "動画参照", // 必要であれば固定文字列
          people: [],
          spotIds: []
        });
      }
      
      const vData = videoMap.get(v.title);
      // スポットIDを登録
      if (!vData.spotIds.includes(spot.id)) {
        vData.spotIds.push(spot.id);
      }
      // 出演者を登録（重複排除）
      if (spot.people) {
        spot.people.forEach(p => {
          if (!vData.people.includes(p)) vData.people.push(p);
        });
      }
    });
  });
  
  // 連番のIDを振りながら配列に展開
  VIDEOS = Array.from(videoMap.values()).map((v, index) => {
    return {
      id: index + 1,
      title: v.title,
      date: v.date,
      people: v.people,
      spotIds: v.spotIds,
      url: v.url
    };
  });
}
//編集履歴更新履歴
const HISTORY = [
  {type:"add",action:"スポット追加",detail:"最初の方の動画のスポットを追加",time:"2026-06-03 20:30"}
];

// ============ MAP ============
const map = L.map('map', {zoomControl: true}).setView([25, 115], 4);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors',
  maxZoom: 19
}).addTo(map);

function makeIcon() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 40">
    <path d="M16 0C9.37 0 4 5.37 4 12c0 9.33 12 28 12 28s12-18.67 12-28C28 5.37 22.63 0 16 0z" fill="#1a1a1a"/>
    <circle cx="16" cy="12" r="5" fill="white"/>
  </svg>`;
  return L.divIcon({
    html: `<div style="width:28px;height:35px">${svg}</div>`,
    className: '',
    iconSize: [28, 35],
    iconAnchor: [14, 35],
    popupAnchor: [0, -35]
  });
}

SPOTS.forEach(s => {
  const marker = L.marker([s.lat, s.lng], {icon: makeIcon()}).addTo(map);
  const vHtml = s.videos.length
    ? s.videos.map(v => `
        <a class="video-link" href="${v.url}" target="_blank">
          <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          ${v.title} <span style="color:var(--text3);font-size:11px">${v.time}</span>
        </a>`).join('')
    : '<span style="font-size:12px;color:var(--text3)">動画なし</span>';
  const peopleHtml = s.people.map(p => `<span class="person-chip">${p}</span>`).join('');
  const tagsHtml = s.tags.map(t => `<span class="popup-tag">${t}</span>`).join('');
  const popupHtml = `
    <div class="popup-inner">
      <div class="popup-header">
        <div>
          <div class="popup-title">${s.name}</div>
          <div class="popup-country">${s.country} · ${s.city}</div>
        </div>
      </div>
      <div class="popup-tags">${tagsHtml}</div>
      <hr class="popup-divider">
      <div class="popup-row">
        <span class="popup-row-label">出演者</span>
        <div class="popup-people">${peopleHtml}</div>
      </div>
      <div class="popup-row" style="align-items:flex-start">
        <span class="popup-row-label">動画</span>
        <div class="popup-videos" style="flex:1">${vHtml}</div>
      </div>
      <div class="popup-row">
        <span class="popup-row-label">地図</span>
        <a href="${s.gmapUrl}" target="_blank">Google Mapで開く →</a>
      </div>
      ${s.note ? `<div style="font-size:12px;color:var(--text3);margin-top:8px;padding-top:8px;border-top:1px solid var(--border)">メモ:${s.note}</div>` : ''}
    </div>`;
  marker.bindPopup(popupHtml, {maxWidth: 320, minWidth: 300});
});

// ============ SPOTS PAGE ============
function getAllTags() {
  const tags = new Set();
  SPOTS.forEach(s => s.tags.forEach(t => tags.add(t)));
  return [...tags];
}
function getAllCountries() {
  const countries = new Set();
  SPOTS.forEach(s => countries.add(s.country));
  return [...countries];
}

let activeTagFilter = '';

function initSpotFilters() {
  const sel = document.getElementById('spot-country-filter');
  getAllCountries().forEach(c => {
    const o = document.createElement('option');
    o.value = c; o.textContent = c;
    sel.appendChild(o);
  });
  const tagBar = document.getElementById('tag-filters');
  const allBtn = document.createElement('button');
  allBtn.className = 'filter-tag-btn active';
  allBtn.textContent = 'すべて';
  allBtn.onclick = () => {
    activeTagFilter = '';
    document.querySelectorAll('.filter-tag-btn').forEach(b => b.classList.remove('active'));
    allBtn.classList.add('active');
    renderSpots();
  };
  tagBar.appendChild(allBtn);
  getAllTags().forEach(t => {
    const btn = document.createElement('button');
    btn.className = 'filter-tag-btn';
    btn.textContent = t;
    btn.onclick = () => {
      activeTagFilter = t;
      document.querySelectorAll('.filter-tag-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderSpots();
    };
    tagBar.appendChild(btn);
  });
}

function renderSpots() {
  const q = document.getElementById('spot-search').value.toLowerCase();
  const country = document.getElementById('spot-country-filter').value;
  const filtered = SPOTS.filter(s => {
    if (q && !s.name.toLowerCase().includes(q) && !s.country.toLowerCase().includes(q) && !s.city.toLowerCase().includes(q)) return false;
    if (country && s.country !== country) return false;
    if (activeTagFilter && !s.tags.includes(activeTagFilter)) return false;
    return true;
  });
  const grid = document.getElementById('spots-grid');
  if (!filtered.length) {
    grid.innerHTML = '<div class="empty-state">該当するスポットが見つかりません</div>';
    return;
  }
  grid.innerHTML = filtered.map(s => `
    <div class="spot-card" onclick="openSpotModal(${s.id})">
      <div class="spot-card-header">
        <div>
          <div class="spot-card-name">${s.name}</div>
          <div class="spot-card-country">${s.country} · ${s.city}</div>
        </div>
      </div>
      <div class="spot-card-tags">${s.tags.map(t => `<span class="spot-card-tag">${t}</span>`).join('')}</div>
      <div class="spot-card-people">出演: ${s.people.join('・')}</div>
    </div>`).join('');
}

function openSpotModal(id) {
  const s = SPOTS.find(x => x.id === id);
  if (!s) return;
  document.getElementById('modal-name').textContent = s.name;
  const vHtml = s.videos.length
    ? s.videos.map(v => `<a class="video-link" href="${v.url}" target="_blank"><svg viewBox="0 0 24 24" style="width:14px;height:14px;fill:var(--accent)"><path d="M8 5v14l11-7z"/></svg>${v.title} <span style="color:var(--text3)">${v.time}</span></a>`).join('')
    : '<span style="font-size:13px;color:var(--text3)">関連動画なし</span>';
  document.getElementById('modal-body').innerHTML = `
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:14px">
      ${s.tags.map(t => `<span class="popup-tag">${t}</span>`).join('')}
    </div>
    <div style="font-size:13px;color:var(--text2);margin-bottom:14px">${s.country} · ${s.city}</div>
    <div style="margin-bottom:12px">
      <div style="font-size:12px;color:var(--text3);margin-bottom:6px">出演者</div>
      <div style="display:flex;gap:6px">${s.people.map(p => `<span class="person-chip">${p}</span>`).join('')}</div>
    </div>
    <div style="margin-bottom:12px">
      <div style="font-size:12px;color:var(--text3);margin-bottom:6px">関連動画</div>
      <div style="display:flex;flex-direction:column;gap:6px">${vHtml}</div>
    </div>
    <a href="${s.gmapUrl}" target="_blank" style="display:inline-flex;align-items:center;gap:6px;color:var(--accent);font-size:13px;font-weight:500;text-decoration:none">📍 Google Mapで開く</a>
    ${s.note ? `<div style="font-size:12px;color:var(--text3);margin-top:12px;padding:10px;background:var(--bg2);border-radius:8px">メモ:${s.note}</div>` : ''}
  `;
  document.getElementById('spot-modal').classList.add('open');
}

function closeModal(e) {
  if (e.target.id === 'spot-modal') document.getElementById('spot-modal').classList.remove('open');
}

// ============ VIDEOS PAGE ============
function initVideoFilters() {
  const sel = document.getElementById('video-person-filter');
  const people = new Set();
  VIDEOS.forEach(v => v.people.forEach(p => people.add(p)));
  people.forEach(p => {
    const o = document.createElement('option');
    o.value = p; o.textContent = p;
    sel.appendChild(o);
  });
}

function renderVideos() {
  const q = document.getElementById('video-search').value.toLowerCase();
  const person = document.getElementById('video-person-filter').value;
  const filtered = VIDEOS.filter(v => {
    if (q && !v.title.toLowerCase().includes(q) && !v.people.some(p => p.toLowerCase().includes(q))) return false;
    if (person && !v.people.includes(person)) return false;
    return true;
  });
  const list = document.getElementById('videos-list');
  if (!filtered.length) {
    list.innerHTML = '<div class="empty-state">該当する動画が見つかりません</div>';
    return;
  }
  list.innerHTML = filtered.map(v => {
    const spots = v.spotIds.map(id => SPOTS.find(s => s.id === id)).filter(Boolean);
    return `<div class="video-card">
      <div class="video-card-header">
        <div>
          <div class="video-card-title">${v.title}</div>
          <div class="video-card-date">${v.date}</div>
        </div>
      </div>
      <div class="video-card-people">${v.people.map(p => `<span class="video-person">${p}</span>`).join('')}</div>
      <div style="font-size:12px;color:var(--text3);margin-bottom:6px">関連スポット</div>
      <div class="video-spots">${spots.length
        ? spots.map(s => `
          <span class="video-spot-chip" onclick="goToSpot(${s.id})">
            <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            ${s.name}
          </span>`).join('')
        : '<span style="font-size:12px;color:var(--text3)">スポット情報なし</span>'}
      </div>
      <a href="${v.url}" target="_blank" class="video-card-link">▶ YouTubeで見る</a>
    </div>`;
  }).join('');
}

function goToSpot(id) {
  const s = SPOTS.find(x => x.id === id);
  if (!s) return;
  showPage('map-page', document.querySelector('.tab'));
  setTimeout(() => { map.setView([s.lat, s.lng], 14); }, 100);
}

// ============ HISTORY PAGE ============
function renderHistory() {
  document.getElementById('history-list').innerHTML = HISTORY.map((h, i) => `
    <div class="history-item">
      <div class="history-dot-col">
        <div class="history-dot ${h.type}"></div>
        ${i < HISTORY.length - 1 ? '<div class="history-line"></div>' : ''}
      </div>
      <div class="history-body">
        <div class="history-action">${h.action}<span class="history-badge ${h.type}">${h.type === 'add' ? '追加' : '編集'}</span></div>
        <div class="history-detail">${h.detail}</div>
        <div class="history-time">🕐 ${h.time}</div>
      </div>
    </div>`).join('');
}



// ============ PAGE SWITCHING ============
function showPage(pageId, clickedBtn) {
  document.querySelectorAll('.page').forEach(p => {
    p.classList.remove('active');
    p.style.display = 'none';
  });
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  const page = document.getElementById(pageId);
  page.classList.add('active');
  page.style.display = (pageId === 'map-page' ? 'flex' : 'block');
  if (clickedBtn) clickedBtn.classList.add('active');
  if (pageId === 'map-page') setTimeout(() => map.invalidateSize(), 50);
}

// ============ INIT ============
document.addEventListener('DOMContentLoaded', () => {
  // 1. 画面表示の前に、SPOTSを走査してVIDEOS配列を完全自動ビルドする
  generateVideosFromSpots();

  document.querySelectorAll('.page').forEach(p => {
    if (!p.classList.contains('active')) p.style.display = 'none';
  });
  document.getElementById('map-page').style.display = 'flex';

  const total = SPOTS.length;
  document.getElementById('spot-count-header').textContent = `登録スポット: ${total}件`;
  document.getElementById('spots-badge').textContent = total;
  document.getElementById('videos-badge').textContent = VIDEOS.length;
  document.getElementById('version-spot-count').textContent = total;
  document.getElementById('version-video-count').textContent = VIDEOS.length;

  initSpotFilters();
  renderSpots();
  initVideoFilters();
  renderVideos();
  renderHistory();
});
