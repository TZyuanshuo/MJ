cc.Class({
    extends: cc.Component,

    properties: {
        pressedScale:0,
        transDuration:0
    },

    // use this for initialization
    onLoad: function () {
        var self=this;
        var audioMng = cc.find('Game/AudioMng');
        if(audioMng){
            audioMng = audioMng.getComponent('AudioMng');
        }
        self.initScale = this.node.scale;
        self.button = self.getComponent(cc.Button);
        self.scaleDownAction = cc.scaleTo(self.transDuration, self.pressedScale);
        self.scaleUpAction = cc.scaleTo(self.transDuration,self.initScale);
         function onTouchDown(event){
             this.stopAllActions();
         }
    },

    
});
