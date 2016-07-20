cc.Class({
    extends: cc.Component,

    properties: {
        winAudio:{
          default:null,
          url: cc.AudioClip
        },
        loseAudio:{
            default: null,
            url: cc.AudioClip
        },
        buttonAudio: {
            default:null,
            url: cc.AudioClip
        },
        backgroundAudio:{
            default: null,
            url: cc.AudioClip
        },
    },
    
    _playSFX: function(clip){
        cc.audioEngine.playMusic(clip, false);
    },

    playMusic:function(){
      cc.audioEngine.playMusic(this.backgroundAudio, true); 
    },
    playButton:function(){
      this._playSFX(this.buttonAudio);  
    },
    playWin:function(){
        this._playSFX(this.winAudio);
    },
    playLost:function(){
        this._playSFX(this.loseAudio);
    },
    
});
