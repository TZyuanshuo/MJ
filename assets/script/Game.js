var Game = cc.Class({
    extends: cc.Component,

    properties: {
        audioMng: cc.Node,
        userName:cc.Node,
        player0:cc.Node,
        player1:cc.Node,
        player2:cc.Node,
        player3:cc.Node,
        alertView:cc.Node,
        bgLayer:cc.Node,
    },

    // use this for initialization
    onLoad: function () {
        Game.instance = this;
        this.audioMng =  this.audioMng.getComponent('AudioMng');
        
        this.alertView.active=false;
        
        this.audioMng.playMusic();
        
    },
    
    btnBack: function(){
        this.alertView.active=true;
        var color=cc.Color.GRAY;
        // color.setA(0.9);
        this.bgLayer.color=color;
        
    },
    
    cancleBack: function(){
      this.alertView.active=false;
      this.audioMng.playMusic();
      var color=cc.Color.WHITE;
        this.bgLayer.color=color;
    },
    
    okBack: function(){
        cc.director.loadScene('table');
    },
    
});
