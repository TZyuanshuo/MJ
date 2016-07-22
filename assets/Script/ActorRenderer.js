cc.Class({
    extends: cc.Component,

    properties: {
        //玩家信息
          playerInfo: cc.Node,
        //手牌数量
          cardsArray: {
            default: [],
            serializable: false,
            visible: false
        },
     
    },
    
    
    //牌的排序
    compare: function(propertyName) { 
        return function (object1, object2) { 
            var value1 = object1[propertyName]; 
            var value2 = object2[propertyName]; 
            if (value2 < value1) { 
                return -1; 
            } 
            else if (value2 > value1) {
                return 1;
            } 
            else {
                return 0; 
            } 
        } 
    },
    //当前玩家手牌 - 发牌
    showCards: function(){
        this.cardsArray.sort(this.compare('point'));
        for(var i=0;i<this.cardsArray.length;i++){
            var newCard = cc.instantiate(this.cardPrefab).getComponent('Card');
            this.anchorCards.addChild(newCard.node);
            newCard.init(this.cardsArray[i],i);
            newCard.reveal(true);
            // this.newCardsArray.push(newCard);
            var startPos = cc.p(0, 0);
            var index = this.cardsArray.length;
            this.labelCardInfo.string = index;
            var endPos = cc.p(30 * i, 0);
            newCard.node.setPosition(startPos);
            var endPosX = endPos.x;

            this._updatePointPos(endPosX);
            
            var moveAction = cc.moveTo(0.5, endPos);
            var callback = cc.callFunc(this._onDealEnd, this);
            newCard.node.runAction(cc.sequence(moveAction, callback));
        }
        
    },
    // use this for initialization
    onLoad: function () {

    },

    
});
