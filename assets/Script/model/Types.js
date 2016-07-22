/*var Suit = cc.Enum({
    Tong: 1, // 筒
    Tiao: 2, // 条
    Wan: 3, // 万
    Feng: 4, //风
    Hong:5, // 红中
    Fa: 6, // 发财
    Bai:7, // 白板
<<<<<<< HEAD
});*/
//t:筒,s:条,w:万
var tmp = 't1,t2,t3,t4,t5,t6,t7,t8,t9,s1,s2,s3,s4,s5,s6,s7,s8,s9,w1,w2,w3,w4,w5,w6,w7,w8,w9,ef,wf,sf,nf,z,f,b'.split(',');

 function Card (point){
     Object.defineProperties(this,{
        point:{
           value:point,
           writable: false
         },
         
         id:{
           value: point - 1,
           writable: false
         },
         
         cardName:{
             get:function(){
                 return tmp[this.point];
             }
         },
         
     });
 }
=======
});


>>>>>>> 69357cf10913b4203c550a353733638f7b02f490

var cards = new Array(34);

Card.formId = function(id){
    return cards[id];
};

(function craetCards(){
    for(var p = 1; p <=34; p++ ){
        var card = new Card(p);
        cards[card.id] = card;
    }
})();

module.exports = {
    Card: Card,
};