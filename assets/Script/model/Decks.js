var Types = require('Types');

/** 麻将管理类，管理麻将x4
 * numberOfDecks：4 - 34张牌数量 x 4
 */

function Decks(numberOfDecks) {
    this._numberOfDecks = 4;
    
    this._cardIds = new Array(numberOfDecks * 34);
    
    this.reset();
}
/**
 * 重置所有牌
 * @mathod reset
 */
 Decks.prototype.reset = function(){
     this._cardIds.length = this._numberOfDecks * 34;
     var index = 0;
     var fromId = Types.Card.fromId;
     for(var i = 0; i<this._numberOfDecks; i++){
         for(var cardId = 0 ; cardId < 34; cardId++){
             this,_cardIds[index] = fromId(cardId);
             ++index;
         }
     }
 };
 
/**
 * 随意抽一张牌，如果已经没有牌了，将返回null
 * @method draw
 * @return{Card}
 */
 Decks.prototype.draw = function(){
      var cardIds = this._cardIds;
    var len = cardIds.length;
    if (len === 0) {
        return null;
    }

    var random = Math.random();
    var index = (random * len) | 0;
    var result = cardIds[index];

    // 保持数组紧凑
    var last = cardIds[len - 1];
    cardIds[index] = last;
    cardIds.length = len - 1;

    return result;
 };
 
 ///**
// * 发一张牌
// * @method deal
// * @return {Card}
// */
//Decks.prototype.deal = function () {
//    this._cardIds.pop();
//};

///**
// * 洗牌
// * @method shuffle
// */
//Decks.prototype.shuffle = function () {
//    shuffleArray(this._cardIds);
//};
//
///**
// * Randomize array element order in-place.
// * Using Durstenfeld shuffle algorithm.
// * http://stackoverflow.com/a/12646864
// */
//function shuffleArray(array) {
//    for (var i = array.length - 1; i > 0; i--) {
//        var j = (Math.random() * (i + 1)) | 0;
//        var temp = array[i];
//        array[i] = array[j];
//        array[j] = temp;
//    }
//    return array;
//}

module.exports = Decks;