cc.Class({
    extends: cc.Component,

    properties: {
        audioMng:cc.Node,
        userName:cc.Label,
        user:cc.Node,
    },

    // use this for initialization
    onLoad: function () {
        this.audioMng = this.audioMng.getComponent('AudioMng');
        this.audioMng.playMusic();
        // this.user=cc.find('User');
        // this.userName.string=this.user.userName;
    },
    
    playGame: function () {
        cc.director.loadScene('wait');
    },

});
