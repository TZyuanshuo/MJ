cc.Class({
    extends: cc.Component,

    properties: {
        FrontBG: cc.SpriteFrame,
        RightBG: cc.SpriteFrame,
        LeftBG: cc.SpriteFrame,
        TakeBG: cc.SpriteFrame,
        Faces: {
            default: [],
            type: cc.SpriteFrame
        },

    },

    init:function(card){
        this.mainPic.SpriteFrame = this.Faces[card.point - 1];
        
    },
    reveal: function(isFaceUp){
      this.mainPic.node.active = isFaceUp;  
    },
});

