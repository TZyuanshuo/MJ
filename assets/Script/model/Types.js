var Suit = cc.Enum({
    Tong: 1, // 筒
    Tiao: 2, // 条
    Wan: 3, // 万
    Feng: 4, //风
    Hong:5, // 红中
    Fa: 6, // 发财
    Bai:7, // 白板
});
var tmp=["t1","t2","t3","t4","t5","t6","t7","t8","t9","s1","s2","s3",
"s4","s5","s6","s7","s8","s9","w1","w2","w3","w4","w5","w6","w7","w8","w9",
"t1","t2","t3","t4","t5","t6","t7","t8","t9","s1","s2","s3","s4","s5","s6","s7","s8","s9",
"w1","w2","w3","w4","w5","w6","w7","w8","w9","t1","t2","t3","t4","t5","t6","t7","t8","t9",
"s1","s2","s3","s4","s5","s6","s7","s8","s9","w1","w2","w3","w4","w5","w6","w7","w8","w9",
"t1","t2","t3","t4","t5","t6","t7","t8","t9","s1","s2","s3","s4","s5","s6","s7","s8","s9",
"w1","w2","w3","w4","w5","w6","w7","w8","w9"]; // 图片数组 

 function Card (point,suit){
     Object.defineProperties(this,{
         suit:{
           value:suit,
           writable: false
         },
         
         suitName:{
             get:function(){
                 return Suit[this.suit];
             }
         },
         
     });
 }

