

var Game = cc.Class({
    extends: cc.Component,

    properties: {
        audioMng: cc.Node,
    },

    // use this for initialization
    onLoad: function () {
        Game.instance = this;
        this.audioMng =  this.audioMng.getComponent('AudioMng');
        
        this.audioMng.playMusic();
    },

    
});
