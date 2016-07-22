cc.Class({
    extends: cc.Component,

    properties: {
        userPhoto:cc.Label,
        userName:cc.Label,
        cards:{
          default:[],
          serializable:false,
          visible:false
        },
        
    },
    
    init: function(){
      this.userName="张三";
    },

    // use this for initialization
    onLoad: function () {

    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
