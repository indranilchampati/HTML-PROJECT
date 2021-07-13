(function (cjs,sf) {
    function ABCIndexController(view){
        this.view  = view;
        this.view.gotoAndStop(0);
        stage.enableMouseOver();
        cjs.Touch.enable(stage);
        this.buttons = SpecialDefinitions.buttons;
        starfall.Resize.events.addEventListener("resize",this.resizeHanndler.bind(this));
        this.resizeHanndler();
        this.initButtons();
    }

    var p = ABCIndexController.prototype;

     p.resizeHanndler = function(){
        if(window.innerWidth<=1024){
            this.view.gotoAndStop(1);
        } else {
            this.view.gotoAndStop(0);
        }
    }

    p.buttonClickHandler = function(e) {
        var b = e.currentTarget;
        window.location.href = b.link;
    };

    p.toggleButtons = function(enable) {
        for(var i=0;i<this.buttons.length;i++){
            this.view[this.buttons[i].id].mouseEnabled = enable;
        }
    };
    
    p.initButtons = function(){
        for(var i=0;i<this.buttons.length;i++){
            this.view[this.buttons[i].id].cursor = "pointer";
            this.view[this.buttons[i].id].link = this.buttons[i].link;
            this.view[this.buttons[i].id].addEventListener("mousedown",this.buttonClickHandler.bind(this));
        }
    };

    sf.ABCIndexController = ABCIndexController;
})(createjs=createjs||{},starfall=starfall||{});
var createjs, starfall;