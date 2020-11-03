(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.patterngiraffe30 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#007B9F").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.patterngiraffe30, new cjs.Rectangle(-644.9,-644.9,1289.8,1289.8), null);


(lib.IFMlogoreversedRTRGBai = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// KO
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgIAAgGgGgAgNgNQgFAGAAAHQAAAIAFAGQAGAFAHAAQAIAAAFgFQAHgGgBgIQABgHgHgGQgFgFgIAAQgHAAgGAFgAAHANIgIgMIgDAAIAAAJQAAAAABABQAAAAAAAAQABAAAAABQABAAABAAIAAABIgLAAIAAgBQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBIAAgRQAAgBAAAAQAAgBgBAAQAAAAgBgBQAAAAgBAAIAAgBIALAAQAJAAAAAHQgBAFgGAAIAHAJQAAABAAAAQABABAAAAQABAAAAABQABAAAAAAIAAABgAgEgKIAAAKIACAAQAGAAAAgFQAAgGgFAAg");
	this.shape.setTransform(124.6,31.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgmAsIAAgCIAEAAQAJAAACgDQADgCAAgHIAAg7QgBgGgCgDQgCgCgHAAIgDAAIAAgDIBEAAIABAUIgDAAQgCgPgJAAIgcAAIAAAjIAYAAQAIAAAAgLIADAAIAAAaIgDAAQgBgHgCgCQgCgCgEAAIgXAAIAAAeQgBAFACACQACABAEAAIAVAAQAHAAADgDQAEgDACgKIADAAIgDAVg");
	this.shape_1.setTransform(117.4,33.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAmAtIhJhMIAAA8QAAAIADACQACACAJAAIAAADIghAAIAAgDIABAAQAMAAAAgJIAAhFQgFgEgHAAIAAgDIAWAAIBCBFIAAg3QAAgHgCgCQgDgCgIAAIAAgDIAgAAIAAADQgHAAgDACQgCABgBAEIAABPg");
	this.shape_2.setTransform(107.9,33.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgQAsIAAgCQAGgBACgCQACgCAAgIIAAg7QAAgGgCgCQgCgCgGAAIAAgDIAhAAIAAADQgHAAgCACQgDACAAAHIAAA7QAAAHADACQACADAHAAIAAACg");
	this.shape_3.setTransform(99.575,33.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgeAiQgPgNAAgUQAAgTAPgOQAOgNAVAAQALAAAJACIAKADIADgBIACAAIABAVIgCAAQgIgWgZAAQgRAAgKALQgKAMAAASQgBASAMANQANANAPAAQAXAAALgVIADAAQgEAMgFAJQgEgBgJACQgKACgJAAQgUABgOgNg");
	this.shape_4.setTransform(92.15,33.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQAsIAAgCQAGgBACgCQACgCAAgIIAAg7QAAgGgCgCQgCgCgGAAIAAgDIAhAAIAAADQgHAAgCACQgDACAAAHIAAA7QAAAHADACQACADAHAAIAAACg");
	this.shape_5.setTransform(84.825,33.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgwAtIAAgDIACAAQAGAAADgCQACgCAAgGIAAg8QAAgHgCgDQgCgCgGAAIgDAAIAAgDIAsgBQAaAAAOANQANALAAATQAAARgNANQgPAQgYAAgAgXgpIAABLQAAAFACACQACABAIAAQANAAAIgCQAHgDAHgGQAMgLAAgUQAAgSgMgMQgLgLgYAAg");
	this.shape_6.setTransform(77.125,33.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgmAsIAAgCIAEAAQAIAAADgDQACgCAAgHIAAg7QAAgHgCgCQgCgCgHAAIgDAAIAAgDIBDAAIABAUIgCAAQgDgPgIAAIgdAAIAAAjIAZAAQAHAAABgLIADAAIAAAaIgDAAQgBgHgCgCQgCgCgFAAIgXAAIAAAeQAAAFACACQACABAEAAIAVAAQAHAAADgDQAEgDACgKIADAAIgCAVg");
	this.shape_7.setTransform(67.475,33.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAaAsIAAgCQANAAAAgKIgEg+IgBAAIgiBKIgDAAIgkhKIgFA/QAAAIAMABIAAACIgeAAIAAgCQAIAAACgDQACgDABgKIADg2QABgHgBgCQgCgDgHAAIAAgDIAWAAIAhBHIAihHIAVAAIAAADIgHABQgBAAAAAAQAAABgBAAQAAABAAABQAAAAAAABIAFBAQAAAJACACQACACAIAAIAAACg");
	this.shape_8.setTransform(56.95,33.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgkAsIAAgCIAEAAQAJAAAAgKIAAg+QAAgGgCgCQgCgCgHAAIgCAAIAAgDIApAAIAAADIgFAAQgGAAgCABQgDACAAAGIAABBQAAAFAGAAIAUAAQAGAAAEgDQADgCAHgKIACAAIgLAUg");
	this.shape_9.setTransform(140.275,20.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAIAtIAAgCIAEAAQALAAAAgFIgCgGIgJgaIgdAAIgIAXIgCAIQAAAGALAAIACAAIAAACIggAAIAAgCQAGAAADgDQACgCADgJIAahGIgBgDIAMAAIAeBOQABAFADACQADACAFAAIAAACgAAJAAIgLggIgMAgIAXAAg");
	this.shape_10.setTransform(131.45,20.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAmAtIhJhMIAAA8QAAAIADACQACACAJAAIAAADIghAAIAAgDIABAAQAMAAAAgJIAAhFQgFgEgIAAIAAgDIAXAAIBCBFIAAg3QAAgHgDgCQgCgCgJAAIAAgDIAiAAIAAADQgJAAgCACQgCABgBAFIAABOg");
	this.shape_11.setTransform(121.5,20.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgjAiQgPgNAAgTQAAgVAPgNQAPgOAVAAQAVAAAOANQAPANAAASQAAAVgPAOQgPANgVAAQgUAAgPgMgAgcgcQgJALABAPQgBATAMANQAMANAQAAQARAAAJgNQAJgMAAgQQAAgTgMgMQgLgNgQAAQgRAAgKAOg");
	this.shape_12.setTransform(110.3,20.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgQAsIAAgCQAGgBADgCQABgCAAgHIAAg8QABgGgDgCQgDgCgFAAIAAgDIAiAAIAAADQgIAAgCACQgDACAAAHIAAA8QAAAGADACQACADAIAAIAAACg");
	this.shape_13.setTransform(102.45,20.475);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgWAtIAAgCIAGAAQAHAAACgCQACgDAAgGIAAhFIgZAAQgEAAgCADQgCAEgCAJIgCAAIABgXIAEAAQAAAAAAAAQAAABAAAAQAAAAAAAAQABAAAAAAIADABIBEAAQABAAAAAAQABgBAAAAQABAAAAAAQAAgBAAAAIADAAIADAXIgDAAQgBgJgCgEQgDgDgEAAIgZAAIAABFQAAAGADADQACACAGAAIAFAAIAAACg");
	this.shape_14.setTransform(95.25,20.375);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgeAiQgPgNAAgUQAAgUAPgNQAPgOAUAAQALAAAKADIAKADIADAAIACAAIAAAUIgCAAQgDgKgJgGQgJgGgMAAQgQAAgLAMQgKALAAASQAAASAMAOQAMAMAPAAQAWAAANgVIACAAQgDAMgGAJQgDgBgKACQgKACgIAAQgWAAgNgMg");
	this.shape_15.setTransform(85.4,20.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAmAtIhIhMIAAA8QAAAIACACQADACAIAAIAAADIggAAIAAgDIAAAAQAMAAAAgJIAAhFQgFgEgHAAIAAgDIAWAAIBDBFIAAg3QAAgHgDgCQgDgCgIAAIAAgDIAhAAIAAADQgJAAgBACQgDABAAAFIAABOg");
	this.shape_16.setTransform(75.25,20.525);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgeAjQgLgJAAgRIAAgoQAAgGgCgCQgDgCgHAAIAAgEIAlAAIAAAEIgCAAQgGAAgCACQgDABAAAHIAAAmQAAAfAfAAQAhAAAAgfIAAggQAAgKgDgDQgCgDgJAAIAAgEIAhAAIAAAEQgNAAAAAMIAAAmQAAAPgJAKQgLAMgVgBQgTABgLgLg");
	this.shape_17.setTransform(63.775,20.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgfAsIAAgCQAHgBACgCQACgDAAgIIAAg3QAAgIgCgCQgCgDgHAAIAAgDIA/AAIAAARIgCAAQgBgHgCgCQgDgDgGAAIgaAAIAAAhIAbAAQAIAAAAgJIADAAIAAAYIgDAAQAAgKgKAAIgZAAIAAAfQAAAGACACQACADAHAAIAAACg");
	this.shape_18.setTransform(54.275,20.475);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAGAXIgNgVIAAAVIgHAAIAAgtIAOAAQAHAAAEAEQAFAEgBAHQABAHgGADQgEADgEAAIANARgAgHABIAEAAQALAAAAgIQAAgJgJAAIgGAAg");
	this.shape_19.setTransform(128.7,9.525);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgQARQgHgHAAgKQAAgIAHgIQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHgAgMgLQgEAGAAAFQAAAGAEAGQAFAGAHAAQAIAAAFgGQAEgFAAgHQAAgFgEgGQgFgGgIAAQgHAAgFAGg");
	this.shape_20.setTransform(122.425,9.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgLAXIAAgtIAXAAIAAAGIgQAAIAAAOIAQAAIAAAFIgQAAIAAAUg");
	this.shape_21.setTransform(116.625,9.525);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgMAXIAAgtIAYAAIAAAGIgRAAIAAAOIARAAIAAAFIgRAAIAAAOIARAAIAAAGg");
	this.shape_22.setTransform(108.2,9.525);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgCAXIAAgnIgJAAIAAgGIAXAAIAAAGIgIAAIAAAng");
	this.shape_23.setTransform(103.525,9.525);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgKAUQgFgFAAgHIAAgfIAHAAIAAAeQAAALAIAAQAJAAAAgLIAAgeIAHAAIAAAfQAAAHgFAFQgFADgGAAQgFAAgFgDg");
	this.shape_24.setTransform(98.525,9.55);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgCAXIAAgnIgJAAIAAgGIAXAAIAAAGIgJAAIAAAng");
	this.shape_25.setTransform(93.475,9.525);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgDAXIAAgtIAGAAIAAAtg");
	this.shape_26.setTransform(89.65,9.525);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgCAXIAAgnIgJAAIAAgGIAXAAIAAAGIgJAAIAAAng");
	this.shape_27.setTransform(85.825,9.525);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgIAUQgFgDAAgIIAHAAQAAAJAGAAQAIAAAAgIQAAgDgDgCIgFgDQgHgCgCgBQgDgDAAgGQAAgFADgEQAEgEAFAAQANAAAAANIgGAAQAAgHgHAAQgFAAAAAHQAAADAFADIAKAEQAEADAAAHQAAAGgEAEQgDAEgHAAQgEAAgEgEg");
	this.shape_28.setTransform(81.225,9.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AALAXIgVgjIgBAAIAAAjIgHAAIAAgtIAIAAIAVAiIAAgiIAHAAIAAAtg");
	this.shape_29.setTransform(75.75,9.525);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgCAXIAAgtIAFAAIAAAtg");
	this.shape_30.setTransform(70.875,9.525);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgMAXIAAgtIAYAAIAAAGIgRAAIAAAOIARAAIAAAFIgRAAIAAAOIARAAIAAAGg");
	this.shape_31.setTransform(63.2,9.525);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAJAXIAAgUIgSAAIAAAUIgGAAIAAgtIAGAAIAAAUIASAAIAAgUIAHAAIAAAtg");
	this.shape_32.setTransform(57.875,9.525);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgCAXIAAgnIgJAAIAAgGIAXAAIAAAGIgIAAIAAAng");
	this.shape_33.setTransform(52.725,9.525);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgGAGQAAgEAFgDQADgFAEAAIAAAAQADABgGAGQgEAGgDAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAAAg");
	this.shape_34.setTransform(25.1368,20.65);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AACAJQgCAAgCgGQgCgEABgDQAAgBAAgBQAAgBAAAAQABgBAAAAQAAAAABAAIAAAAQACACACAGQACAHgCACg");
	this.shape_35.setTransform(23.9021,24.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgIgBQAAgBAAAAQAAAAABAAQAAgBABAAQABAAABAAIAEAAIAIADQAAAAABAAQAAABAAAAQAAABAAAAQAAABgBAAIgDABQgLAAgCgFg");
	this.shape_36.setTransform(21.4318,21.375);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgIAFQgEgGgBgIQAAgGAEgDIACAAQAHAAAJAPQADAGABAHQABAGgEACIgCABQgIAAgIgOg");
	this.shape_37.setTransform(39.1,22.75);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgMAKQgFgJAAgIQAAgKAGgEQACgCAEAAQAKAAAIAOQAFAJAAAIQAAAJgGAEQgDADgEAAQgJAAgIgOg");
	this.shape_38.setTransform(35.8523,25.025);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAAAKQgIAAgGgDQgGgDAAgEQAAgDAGgDQAGgDAIAAIAAAAQAJAAAGADQAGADAAADQAAAEgGADQgGADgJAAg");
	this.shape_39.setTransform(15.075,35.225);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AACAQQgJAAgIgEQgIgFgBgHQgBgGAHgFQAGgEALgBQAJABAIAEQAIAFABAGQABAHgHAFQgHAEgKAAg");
	this.shape_40.setTransform(14.7746,31.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgKATQgDgCAAgHQABgIAEgGQAIgOAIAAIADABQADACgBAHQAAAGgFAHQgIAOgHAAg");
	this.shape_41.setTransform(16.308,8.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgLAVQgHgCAAgIQgBgJAEgHQAKgQANAAIAEABQAHACAAAJQABAIgEAHQgKAQgNAAIgEgBg");
	this.shape_42.setTransform(19.85,9.875);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgaAbQgLgBAEgLQADgMAPgLQAWgSARAAQAGAAADACQAJAMgYAUQgWATgTAAg");
	this.shape_43.setTransform(33.5961,41.35);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgRAeQgLgLAGgWQAHgWAPgGIAHgCQAIAAAFAGQAFAIAAANQgBAQgKANQgKALgKAAQgHAAgEgEg");
	this.shape_44.setTransform(35.4793,34.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgLAbQgGAAACgLQABgLAIgNQAMgSAGAAIADABQAFAJgKAUQgJAUgKADg");
	this.shape_45.setTransform(39.7212,35.925);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgPAOQgGgRAJgOQAHgMAIAAQAEAAAEADQAJAMgCAUQgCAUgMAEIgDAAQgKAAgGgQg");
	this.shape_46.setTransform(40.0769,29.15);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAEApQgOAAgFggQgFgeALgPQAEgEADAAQAFAAAFAJQAFAJADANQACAPgCAPQgCARgJADg");
	this.shape_47.setTransform(1.7138,21.125);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgFAaQgUgNgCgTQgDgTAPgFIAFAAQAOAAANAPQANAPgCAQQgCAPgPAAQgIAAgIgFg");
	this.shape_48.setTransform(7.0629,26.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAPAWQgPAAgOgMQgPgKADgLQADgKAOAAQAJAAAIAFQAKAFAFAJQAEAGAAAHQAAAJgJACg");
	this.shape_49.setTransform(8.9528,32.975);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgHAHQgNgRADgKQABgFADAAQAFAAAHAHQAGAHAGAKQANAZgJACQgKgBgMgSg");
	this.shape_50.setTransform(3.3633,29.175);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AABATQgPgGgLgJQgOgKACgJQADgIAMAAQAPAAATALQAUALAFAKQAGAPgTAAQgKAAgNgFg");
	this.shape_51.setTransform(35.1738,3.65);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgbAQQgIgGABgKQACgJAOgIQALgGAMABQAPAAAIAGQAJAIgCAJQgDAKgMAGQgMAHgMAAQgOAAgJgIg");
	this.shape_52.setTransform(27.9409,5.65);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgHAWQgIgBgGgDQgIgEADgJQAEgJANgIQALgJALAAQAHABAFAEQAIAJgMANQgLAPgRABg");
	this.shape_53.setTransform(21.2343,4.05);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgDAKQgcgBACgJQAEgDAKgEQAKgCAKgBQARABAGAFQAFAFgJAFQgJAEgPAAg");
	this.shape_54.setTransform(27.3658,1.05);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgPAHQgJgHADgIQAEgFAKgBQATAAAJANQAEAEgFAFQgEAEgGACIgGABQgLgBgIgHg");
	this.shape_55.setTransform(34.3231,19.75);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgPAFQgEgCACgDQAFgGAQAAQAKAAAEAEQADAEgRAEIgJABQgHAAgDgCg");
	this.shape_56.setTransform(29.1356,18);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgJATQgGAAgCgGQgCgFACgGQACgIAJgGQAGgGAIAAQAGAAADAEQAFAIgKAMQgKAMgKABg");
	this.shape_57.setTransform(20.1708,32.625);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgIAKIACgKQACgGAEgFQADgFADAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQACAGgGALQgFANgGABQgDAAABgHg");
	this.shape_58.setTransform(24.2243,28.975);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AADAWQgIAAgGgOQgFgOAEgLQADgEAFgBQAFABAGAFQAJAKgBAOQgCANgJABg");
	this.shape_59.setTransform(16.084,13.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAIAQQgGgBgHgMQgIgKACgHIACgBQAFAAAHAKQAHAGACAIQACAGgFABg");
	this.shape_60.setTransform(17.1825,19.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AAAAEQgEgBgDgDQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAgBABAAIADgBQAEAAAEACQAEABABACQAAAAAAABQAAAAgBAAQgBABAAAAQgBAAgCAAg");
	this.shape_61.setTransform(25.5578,22.75);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgFAHQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBABgBIACgDQAEgGAEAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAAAQAAAEgFAEQgEAEgDAAg");
	this.shape_62.setTransform(21.8625,23.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AABAJQgCgCgBgGQgCgGACgCIABgBQABAAADAHQADAKgEAAg");
	this.shape_63.setTransform(23.0817,19.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgKASQgDgBABgIQAAgGAFgHQAHgOAIAAIADABQADACgBAGQAAAIgFAGQgHAOgIAAg");
	this.shape_64.setTransform(30.675,35.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgLAVQgHgCgBgJQAAgHAFgJQAJgPANAAIAFABQAGACABAJQAAAHgFAJQgJAQgNAAg");
	this.shape_65.setTransform(27.125,34.25);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgIAFQgEgHAAgGQgBgHADgCIADgBQAIAAAHAOQAFAHABAHQAAAHgEACIgCAAQgIAAgIgOg");
	this.shape_66.setTransform(7.9,21.35);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgMAKQgFgJAAgIQAAgKAGgEQACgCAEAAQAKAAAIAOQAFAJAAAIQAAAJgGAEQgDADgDAAQgKAAgIgOg");
	this.shape_67.setTransform(11.125,19.125);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgOAHQgGgDAAgEQAAgDAGgDQAGgDAIAAIAAAAQAJAAAGADQAGADAAADQAAAEgGADQgGADgJAAQgIAAgGgDg");
	this.shape_68.setTransform(31.8982,8.925);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgPALQgIgEgBgHQAAgGAGgFQAHgEAKAAQAJAAAIAEQAIAFABAHQABAGgHAFQgHAFgKAAQgJgBgIgFg");
	this.shape_69.setTransform(32.2295,12.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgLANQgUgLgFgLQgFgNATAAQAKAAAMAEQAPAGAMAJQANAKgCAJQgCAHgMAAQgQAAgTgKg");
	this.shape_70.setTransform(11.796,40.475);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgbAQQgJgHACgJQADgKAMgHQALgGANAAQANAAAKAHQAIAHgBAJQgCAKgOAIQgMAGgLAAQgPAAgIgIg");
	this.shape_71.setTransform(19.0591,38.475);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgXARQgJgJAMgOQAMgOAQAAQAIAAAGADQAIAFgCAIQgFAJgMAIQgMAIgLAAQgHAAgEgEg");
	this.shape_72.setTransform(25.7491,40.075);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgbAFQgFgFAJgFQAKgEAPgBIACAAQAJAAAIACQAKAEgBAEQgDAFgLACQgKADgKABQgQgBgHgFg");
	this.shape_73.setTransform(19.5835,43.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AggAZQgJgMAYgUQAWgTATgBIACAAQAMACgEALQgEALgOALQgJAIgKAFQgMAHgIgBQgGABgDgDg");
	this.shape_74.setTransform(13.4023,2.75);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgTAcQgFgIAAgNQABgQAKgNQAKgLAKAAQAGAAAFAEQALAMgGAVQgHAWgQAGIgGACQgIAAgFgGg");
	this.shape_75.setTransform(11.5207,10);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgKAaQgJgMACgUQACgUANgDIACAAQAKAAAGARQAGAQgJAOQgCAEgEAEQgFAEgEAAQgEAAgEgEg");
	this.shape_76.setTransform(6.881,15);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgOAZQgFgIAKgUQAJgUAJgCIACgBQAHAAgCALQgBAMgIAMQgLASgHAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQgBAAAAgBg");
	this.shape_77.setTransform(7.2779,8.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgHAgQgFgJgDgNQgDgPADgPQACgRAJgDIABAAQAOAAAFAgQAFAegLAPQgDAEgEAAQgFAAgFgJg");
	this.shape_78.setTransform(45.2738,22.975);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgQAPQgOgPADgPQACgPAOAAQAIAAAJAFQATANADATQADATgPAEIgFABQgOAAgNgQg");
	this.shape_79.setTransform(39.9305,17.725);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgHARQgKgFgFgJQgEgFAAgHQAAgJAIgDIAEAAQAOAAAPAMQAPALgEALQgDAJgNAAQgKAAgHgFg");
	this.shape_80.setTransform(38.0081,11.125);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AACATQgGgHgGgKQgEgHgCgIQgDgKAFgCQAKABAMASQANARgDALQgBAEgDAAQgFAAgHgHg");
	this.shape_81.setTransform(43.6389,14.925);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgFAQQgKgJACgOQABgOAKAAIAAAAQAJAAAFAPQAFANgEALQgCAEgFAAQgGAAgFgGg");
	this.shape_82.setTransform(30.8899,30.225);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgCAGQgHgGgCgIQgCgGAFgBIAAAAQAHACAHALQAIAKgCAHIgCABQgFAAgHgKg");
	this.shape_83.setTransform(29.8142,24.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgIALQgIgDgEgGQgEgEAFgFQAEgEAFgCIAHgBQALAAAIAIQAJAHgEAHQgDAHgLAAQgHAAgIgEg");
	this.shape_84.setTransform(12.66,24.375);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgRADQgDgEASgEIAIgBQAHAAADACQAEACgCACQgFAHgQAAQgLAAgDgEg");
	this.shape_85.setTransform(17.8207,26.125);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgQAPQgFgIAKgLQAKgMAKgCIABAAQAGAAACAHQABAEgBAGQgCAIgJAHQgHAFgHAAQgGAAgDgEg");
	this.shape_86.setTransform(26.8042,11.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgIAPQgDgGAGgLQAFgNAHgBQAGAAgGAQQgGARgGAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBg");
	this.shape_87.setTransform(22.7815,15.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,144,44.2);


(lib.HEAD2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAnBqIAAhMIgCgQQgBgHgEgGQgEgFgFgDQgHgEgKAAQgIAAgJADQgIAEgGAFQgGAHgEAKQgDAKAAANIAABBIgRAAIAAjTIARAAIAABpIABAAQAFgLAMgHQAMgIAOAAQAPAAAKAFQAJAFAFAHQAGAIACAJQACAKAAALIAABNg");
	this.shape.setTransform(30.85,14.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAFBSQgGgDgEgEQgEgEgBgHQgCgFAAgIIAAhTIgcAAIAAgPIAcAAIAAglIAPAAIAAAlIAlAAIAAAPIglAAIAABTQAAAJAFAFQAEAEAJAAIAKAAIAJgEIACAPIgLAEIgMABQgIAAgGgDg");
	this.shape_1.setTransform(18.25,17.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHBqIAAjTIAPAAIAADTg");
	this.shape_2.setTransform(10.35,14.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgZBCQgHgCgHgFQgGgEgFgIQgEgHAAgKQABgPAHgJQAIgIALgEQALgEAMgBIAVgCIATAAIAAgIQABgQgKgIQgLgHgQAAQgVAAgRAPIgKgMQAKgJANgEQAOgFALAAQAYAAAOALQAOALAAAZIAAAeIAAASIABAOIAAAMIABALIgPAAQgCgKAAgLIgBAAQgHAMgLAGQgLAGgPAAQgIAAgJgCgAgBABQgKACgIADQgIADgFAGQgEAFAAAJQgBAGADAEQADAFAEADQAEADAFABIALACQAMAAAJgEQAJgEAEgGQAGgHACgHQACgIgBgJIAAgIIgSAAg");
	this.shape_3.setTransform(-0.4,19.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXA/QgMgFgJgJQgIgJgFgNQgFgMAAgPQAAgOAFgMQAFgMAJgJQAIgKAMgFQAMgFANAAQAPAAALAFQAMAFAHAJQAIAIAEALQAEALAAAMIAAAKIhsAAIACAOQACAIAGAIQAGAIAJAFQAJAGAOAAQANAAAMgGQAMgGAHgLIAMAKQgKAPgOAHQgPAGgRAAQgOAAgMgFgAAugKQAAgIgDgIQgEgIgGgFQgGgGgIgEQgJgDgJAAQgNAAgJAGQgJAFgFAIQgFAHgDAHIgCAJIBbAAIAAAAg");
	this.shape_4.setTransform(-15.275,19.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAnBqIAAhMIgCgQQgBgHgEgGQgEgFgFgDQgHgEgKAAQgIAAgJADQgIAEgGAFQgGAHgEAKQgDAKAAANIAABBIgRAAIAAjTIARAAIAABpIABAAQAFgLAMgHQAMgIAOAAQAPAAAKAFQAJAFAFAHQAGAIACAJQACAKAAALIAABNg");
	this.shape_5.setTransform(-30.8,14.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AggBDIAAhcIAAgJIgBgLIAAgKIgBgHIARAAIABAOIAAAJQAHgLAJgIQAKgHAOgBIAGABIAEABIgBAQIgHgBQgLABgIADQgHADgFAGQgFAHgDAIQgDAIAAAKIAABGg");
	this.shape_6.setTransform(55.6,-14.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgXA/QgMgFgJgJQgIgJgFgNQgFgMAAgPQAAgOAFgMQAFgMAJgJQAIgKAMgFQAMgFANAAQAPAAALAFQAMAFAHAJQAIAIAEALQAEALAAAMIAAAKIhsAAIACAOQACAIAGAIQAGAIAJAFQAJAGAOAAQANAAAMgGQAMgGAHgLIAMAKQgKAPgOAHQgPAGgRAAQgOAAgMgFgAAugKQAAgIgDgIQgEgIgGgFQgGgGgIgEQgJgDgJAAQgNAAgJAGQgJAFgFAIQgFAHgDAHIgCAJIBbAAIAAAAg");
	this.shape_7.setTransform(42.275,-14.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAnBBIgnhpIAAAAIgkBpIgRAAIgoiBIASAAIAfBsIABAAIAlhsIAOAAIAnBsIAAAAIAehsIASAAIgmCBg");
	this.shape_8.setTransform(24.65,-14.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgaA/QgNgFgJgJQgJgJgFgNQgFgMAAgPQAAgOAFgMQAFgNAJgJQAJgJANgFQAMgFAOAAQAPAAANAFQAMAFAJAJQAJAJAFANQAFAMAAAOQAAAPgFAMQgFANgJAJQgJAJgMAFQgNAFgPAAQgOAAgMgFgAgUgwQgKAFgGAHQgHAHgEAJQgDAKAAAKQAAALADAKQAEAJAHAHQAGAIAKAEQAKAEAKAAQAMAAAJgEQAKgEAHgIQAGgHAEgJQADgKAAgLQAAgKgDgKQgEgJgGgHQgHgHgKgFQgJgEgMAAQgKAAgKAEg");
	this.shape_9.setTransform(6.5,-14.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhEBiIAAjAIARAAIAAAXIABAAQAEgHAGgFIAMgIQAHgDAIgCIAOgCQAPABAMAFQAMAFAJAJQAKAJAFANQAFAMAAAPQAAAOgFANQgFALgKAJQgJAKgMAFQgMAFgPAAIgOgCQgIgBgHgDQgGgEgGgEQgGgGgEgGIgBAAIAABWgAgUhOQgJAEgIAIQgHAGgEAKQgEAKAAALQAAALAEAJQAEAJAHAHQAIAIAJADQAKAEALABQALgBAKgEQAJgDAHgIQAHgHADgJQAEgJAAgLQAAgLgEgKQgDgKgHgGQgHgIgJgEQgKgEgLAAQgLAAgKAEg");
	this.shape_10.setTransform(-10.175,-11.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ABRBDIAAhMIgCgPQgBgHgEgGQgDgGgHgEQgGgDgJAAQgNAAgHAEQgIAFgEAGQgEAHgCAIQgCAHAAAIIAABIIgQAAIAAhOQABgRgHgLQgGgLgPAAQgIAAgJADQgJADgFAHQgHAGgDAKQgEALAAAMIAABBIgQAAIAAhcIgBgJIAAgLIAAgKIgBgHIARAAIABAOIAAAJIABAAQAGgLALgIQAMgIAPAAQAOAAAKAIQAKAGAFAPQAFgPANgGQAMgIAOAAQAPAAAJAGQAJAEAGAIQAGAIACAJQABALAAAKIAABNg");
	this.shape_11.setTransform(-30.9,-14.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag+BjIAAjFIB5AAIAAAQIhnAAIAABHIBgAAIAAAQIhgAAIAABNIBrAAIAAARg");
	this.shape_12.setTransform(-50.35,-17.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD2, new cjs.Rectangle(-150,-37.7,300,75.5), null);


(lib.HEAD1b = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIAKQgFgEAAgGQAAgFAFgEQAEgDAEAAQAGAAAEADQADAEAAAFQAAAGgDAEQgEADgGAAQgEAAgEgDg");
	this.shape.setTransform(93.25,24.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAmBqIAAhMIgBgQQgCgHgDgGQgDgFgHgDQgGgEgKAAQgIAAgIADQgJAEgGAFQgGAHgEAKQgDAKAAANIAABBIgQAAIAAjTIAQAAIAABpIABAAQAFgLAMgHQALgIAPAAQAPAAAJAFQAKAFAGAHQAFAIACAJQADAKgBALIAABNg");
	this.shape_1.setTransform(81.85,14.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgQA/QgNgFgJgJQgJgJgFgNQgFgMAAgPQAAgOAFgMQAFgNAJgJQAJgJANgFQAMgFAOAAQAOAAAMAGQANAGAJAKIgNALQgIgJgIgEQgJgFgKAAQgLAAgJAEQgKAFgHAHQgGAHgEAJQgDAKAAAKQAAALADAKQAEAJAGAHQAHAIAKAEQAJAEALAAQALAAAIgFQAJgFAHgIIAMALQgJALgMAGQgMAFgOAAQgOAAgMgFg");
	this.shape_2.setTransform(67.925,19.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYBCQgJgCgGgFQgHgEgEgIQgDgHAAgKQgBgPAIgJQAIgIAKgEQAMgEAMgBIAVgCIAUAAIAAgIQgBgQgJgIQgLgHgPAAQgWAAgRAPIgKgMQAJgJAOgEQAOgFAMAAQAXAAAOALQAOALAAAZIAAAeIAAASIAAAOIABAMIACALIgQAAQgCgKAAgLIAAAAQgIAMgKAGQgMAGgPAAQgJAAgHgCgAgBABQgKACgIADQgIADgFAGQgFAFAAAJQAAAGADAEQACAFAFADQAEADAFABIALACQAMAAAJgEQAIgEAGgGQAFgHACgHQACgIAAgJIAAgIIgSAAg");
	this.shape_3.setTransform(53.2,19.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaA/QgNgFgJgJQgJgJgFgNQgFgMAAgPQAAgOAFgMQAFgNAJgJQAJgJANgFQANgFANAAQAPAAANAFQAMAFAJAJQAJAJAFANQAFAMAAAOQAAAPgFAMQgFANgJAJQgJAJgMAFQgNAFgPAAQgNAAgNgFgAgUgwQgJAFgIAHQgGAHgEAJQgDAKAAAKQAAALADAKQAEAJAGAHQAIAIAJAEQAJAEALAAQAMAAAKgEQAJgEAHgIQAGgHAEgJQAEgKgBgLQABgKgEgKQgEgJgGgHQgHgHgJgFQgKgEgMAAQgLAAgJAEg");
	this.shape_4.setTransform(37.8,19.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AggBCIAAhcIgBgIIAAgKIAAgKIgBgIIARAAIABAOIAAAJQAHgMAJgHQAKgIAPABIAEAAIAFABIgBARIgHgCQgLAAgIAEQgHAEgFAGQgFAGgDAIQgDAJAAAJIAABFg");
	this.shape_5.setTransform(26.25,18.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhEBiIAAjAIARAAIAAAXIABAAQAEgHAGgFIAMgIQAHgDAIgBIAOgCQAPgBAMAGQAMAFAJAJQAKAJAFAMQAFANAAAPQAAAPgFAMQgFAMgKAJQgJAJgMAFQgMAFgPAAIgOgBQgIgCgHgEQgGgDgGgFQgGgEgEgHIgBAAIAABWgAgUhOQgJAFgIAHQgHAHgEAJQgEAKAAALQAAALAEAJQAEAJAHAHQAIAHAJAFQAKADALAAQALAAAKgDQAJgFAHgHQAHgHADgJQAEgJAAgLQAAgLgEgKQgDgJgHgHQgHgHgJgFQgKgEgLAAQgLAAgKAEg");
	this.shape_6.setTransform(12.325,22.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhEBiIAAjAIARAAIAAAXIABAAQAEgHAGgFIAMgIQAHgDAIgBIAOgCQAPgBAMAGQAMAFAJAJQAKAJAFAMQAFANAAAPQAAAPgFAMQgFAMgKAJQgJAJgMAFQgMAFgPAAIgOgBQgIgCgHgEQgGgDgGgFQgGgEgEgHIgBAAIAABWgAgUhOQgJAFgIAHQgHAHgEAJQgEAKAAALQAAALAEAJQAEAJAHAHQAIAHAJAFQAKADALAAQALAAAKgDQAJgFAHgHQAHgHADgJQAEgJAAgLQAAgLgEgKQgDgJgHgHQgHgHgJgFQgKgEgLAAQgLAAgKAEg");
	this.shape_7.setTransform(-4.775,22.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgZBCQgHgCgHgFQgGgEgEgIQgFgHAAgKQAAgPAIgJQAHgIALgEQALgEANgBIAVgCIATAAIAAgIQAAgQgKgIQgKgHgQAAQgVAAgRAPIgKgMQAKgJANgEQAOgFALAAQAYAAAOALQAOALAAAZIAAAeIAAASIAAAOIABAMIABALIgPAAQgCgKAAgLIgBAAQgHAMgLAGQgKAGgQAAQgJAAgIgCgAgBABQgKACgIADQgIADgFAGQgEAFgBAJQABAGACAEQACAFAFADQAEADAFABIALACQAMAAAJgEQAJgEAEgGQAGgHACgHQABgIAAgJIAAgIIgSAAg");
	this.shape_8.setTransform(-20.9,19.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AggBCIAAhcIgBgIIAAgKIAAgKIgBgIIARAAIABAOIAAAJQAHgMAJgHQAKgIAPABIAEAAIAFABIgBARIgHgCQgLAAgIAEQgHAEgFAGQgFAGgDAIQgDAJAAAJIAABFg");
	this.shape_9.setTransform(-39,18.85);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgfA+QgJgFgGgIQgFgIgCgKQgCgJAAgMIAAhMIAQAAIAABMIACAPQABAIAEAFQADAHAHACQAGAEAKAAQAIAAAJgDQAIgDAGgHQAGgGADgLQAEgKAAgLIAAhCIARAAIAABdIAAAJIAAAKIABAKIAAAHIgRAAIAAgOIgBgJIgBAAQgFALgLAHQgMAJgPgBQgPAAgKgEg");
	this.shape_10.setTransform(-52.375,19.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgaA/QgNgFgJgJQgJgJgFgNQgFgMAAgPQAAgOAFgMQAFgNAJgJQAJgJANgFQANgFANAAQAPAAANAFQAMAFAJAJQAJAJAFANQAFAMAAAOQAAAPgFAMQgFANgJAJQgJAJgMAFQgNAFgPAAQgNAAgNgFgAgUgwQgJAFgIAHQgGAHgEAJQgDAKAAAKQAAALADAKQAEAJAGAHQAIAIAJAEQAJAEALAAQAMAAAKgEQAJgEAHgIQAGgHAEgJQAEgKgBgLQABgKgEgKQgEgJgGgHQgHgHgJgFQgKgEgMAAQgLAAgJAEg");
	this.shape_11.setTransform(-68.4,19.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgxBhIgIgBIACgQIAHACIAIABQAEAAAEgCIAGgFIAEgHIADgIIAMgdIg1iCIATAAIAqBtIAqhtIASAAIhCCpQgFAMgIAIQgJAIgOgBg");
	this.shape_12.setTransform(-83.175,22.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1b, new cjs.Rectangle(-150,-37.7,300,75.5), null);


(lib.HEAD1a = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgXA/QgMgFgJgJQgIgJgFgNQgFgMAAgPQAAgOAFgMQAFgMAJgJQAIgKAMgFQAMgFANAAQAPAAALAFQAMAFAHAJQAIAIAEALQAEALAAAMIAAAKIhsAAIACAOQACAIAGAIQAGAIAJAFQAJAGAOAAQANAAAMgGQAMgGAHgLIAMAKQgKAPgOAHQgPAGgRAAQgOAAgMgFgAAugKQAAgIgDgIQgEgIgGgFQgGgGgIgEQgJgDgJAAQgNAAgJAGQgJAFgFAIQgFAHgDAHIgCAJIBbAAIAAAAg");
	this.shape.setTransform(46.325,-14.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQA/QgNgFgJgJQgJgJgFgNQgFgMAAgPQAAgOAFgMQAFgNAJgJQAJgJANgFQAMgFAOAAQAOAAAMAGQANAGAJAKIgNALQgIgJgIgEQgJgFgKAAQgLAAgJAEQgKAFgHAHQgGAHgEAJQgDAKAAAKQAAALADAKQAEAJAGAHQAHAIAKAEQAJAEALAAQALAAAIgFQAJgFAHgIIAMALQgJALgMAGQgMAFgOAAQgOAAgMgFg");
	this.shape_1.setTransform(32.425,-14.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAnBDIAAhMIgBgPQgCgHgDgGQgEgGgGgEQgGgDgKAAQgIAAgJADQgIADgGAHQgGAGgEAKQgDALAAAMIAABBIgRAAIAAhcIAAgJIgBgLIAAgKIAAgHIAQAAIABAOIABAJIABAAQAFgLALgIQAMgIAPAAQAPAAAJAGQAKAEAFAIQAGAIACAJQACALAAAKIAABNg");
	this.shape_2.setTransform(17.275,-14.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYBCQgIgCgHgFQgGgEgEgIQgFgHAAgKQAAgPAIgJQAHgIALgEQALgEANgBIAVgCIATAAIAAgIQAAgQgKgIQgKgHgQAAQgVAAgRAPIgKgMQAJgJAOgEQAOgFALAAQAYAAAOALQAOALAAAZIAAAeIAAASIAAAOIABAMIABALIgPAAQgCgKAAgLIgBAAQgHAMgLAGQgKAGgQAAQgJAAgHgCgAgBABQgKACgIADQgIADgFAGQgEAFgBAJQABAGACAEQACAFAFADQAEADAFABIALACQAMAAAJgEQAJgEAEgGQAGgHACgHQABgIAAgJIAAgIIgSAAg");
	this.shape_3.setTransform(2.15,-14.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHBBIg1iBIATAAIArBvIAqhvIARAAIgzCBg");
	this.shape_4.setTransform(-11.425,-14.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgbBmQgNgEgJgKQgJgJgFgNQgFgMAAgPQAAgOAFgNQAFgMAJgIQAJgJANgGQANgFAOAAIAOACQAIABAHADIAMAIQAGAGAEAHIABAAIAAhpIARAAIAADSIgRAAIAAgWIgBAAQgEAGgGAFQgGAFgGADQgHAEgIABIgOACQgOAAgNgGgAgVgIQgJAEgHAGQgHAHgDAKQgEAJAAALQAAALAEAKQADAKAHAGQAHAIAJAEQAKAEALAAQALAAAKgEQAKgEAHgIQAHgGAEgKQAFgKAAgLQAAgLgFgJQgEgKgHgHQgHgGgKgEQgKgFgLAAQgLAAgKAFg");
	this.shape_5.setTransform(-26.625,-18.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABKBjIgWg0IhoAAIgWA0IgUAAIBXjFIASAAIBTDFgAAuAeIgthsIguBsIBbAAg");
	this.shape_6.setTransform(-44.55,-17.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1a, new cjs.Rectangle(-150,-37.7,300,42.2), null);


(lib.CTA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// type
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0067AF").s().p("AgcAqIAAhTIA3AAIAAANIgoAAIAAAVIAmAAIAAANIgmAAIAAAXIAqAAIAAANg");
	this.shape.setTransform(45.925,14.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0067AF").s().p("AAOAqIgTgkIgLAAIAAAkIgPAAIAAhTIAeAAIAKABIAKADQAFADACAFQADAEAAAIQAAAJgFAGQgFAGgKABIAXAlgAgQgFIAMAAIAFgBIAGgBIAEgEQADgCAAgEQAAgEgCgCIgFgEQgCgBgDAAIgFgBIgNAAg");
	this.shape_1.setTransform(36.15,14.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0067AF").s().p("AgRApQgJgDgFgFQgHgGgCgJQgEgHAAgLQAAgJAEgIQACgJAHgFQAFgGAJgDQAIgDAJgBQAKABAIADQAIACAHAHQAFAFAEAIQADAJAAAJQAAAKgDAIQgEAIgFAGQgHAGgIADQgIAEgKgBQgJAAgIgDgAgLgcQgFACgEAFQgEAEgCAFQgCAGAAAGQAAAHACAFQACAGAEAEQAEAEAFADQAFACAGAAQAGAAAGgCQAGgDADgEQAEgEACgGQACgGAAgGQAAgGgCgGQgCgFgEgEQgDgFgGgCQgGgCgGAAQgGAAgFACg");
	this.shape_2.setTransform(24.55,14.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0067AF").s().p("AAfAqIAAhFIAAAAIgaBFIgJAAIgahFIAABFIgPAAIAAhTIAXAAIAWA6IAXg6IAXAAIAABTg");
	this.shape_3.setTransform(11.525,14.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0067AF").s().p("AATAqIgpg/IAAAAIAAA/IgPAAIAAhTIAUAAIAoA+IAAAAIAAg+IAPAAIAABTg");
	this.shape_4.setTransform(-7.375,14.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0067AF").s().p("AAOAqIgTgkIgLAAIAAAkIgPAAIAAhTIAeAAIAKABIAKADQAFADADAFQACAEAAAIQAAAJgFAGQgFAGgKABIAXAlgAgQgFIAMAAIAFgBIAHgBIADgEQACgCAAgEQAAgEgBgCIgEgEQgDgBgDAAIgFgBIgNAAg");
	this.shape_5.setTransform(-18.05,14.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0067AF").s().p("AAaAqIgIgTIgkAAIgHATIgRAAIAlhTIAMAAIAkBTgAANAKIgNghIgMAhIAZAAg");
	this.shape_6.setTransform(-29.025,14.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0067AF").s().p("AgcAqIAAhTIA3AAIAAANIgoAAIAAAVIAmAAIAAANIgmAAIAAAXIAqAAIAAANg");
	this.shape_7.setTransform(-39.275,14.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0067AF").s().p("AgZAqIAAhTIAPAAIAABGIAjAAIAAANg");
	this.shape_8.setTransform(-48.35,14.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// box
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ApDCOQgeAAAAgeIAAjfQAAgeAeAAISHAAQAeAAAAAeIAADfQAAAegeAAg");
	this.shape_9.setTransform(0,14.2869,1,1.0018);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA, new cjs.Rectangle(-61,0.1,122,28.5), null);


(lib.BKGD = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3267AE").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BKGD, new cjs.Rectangle(-150,-125,300,250), null);


(lib.Logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.IFMlogoreversedRTRGBai("synched",0);
	this.instance.setTransform(0,0.05,1,1,0,0,0,72,22.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Logo, new cjs.Rectangle(-72,-22,144,44.1), null);


// stage content:
(lib.IFM_Display_Advance_300x250 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,191];
	// timeline functions:
	this.frame_0 = function() {
		//if(!this.alreadyyExecuted){
		//this.alreadyyExecuted=true;
		//	this.clickthru_btn.on("click", function(evt){
		//  window.open(clickTag, "_blank");
		//});
		//} else {
		//gotoAndPlay(2);
		//}
	}
	this.frame_191 = function() {
		//if(!this.alreadyExecuted){
		//this.alreadyExecuted=true;
		//this.loopNum=1;
		//} else {
		//this.loopNum++;
		//if(this.loopNum==2){
		this.stop();
		//}
		//}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(191).call(this.frame_191).wait(1));

	// LOGO
	this.instance = new lib.Logo();
	this.instance.setTransform(150,92.45,1.6,1.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(143).to({_off:false},0).to({alpha:1},10).wait(39));

	// CTA
	this.instance_1 = new lib.CTA();
	this.instance_1.setTransform(150,172,1,1,0,0,0,0,10);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(167).to({_off:false},0).to({alpha:1},10).wait(15));

	// HEAD1a
	this.instance_2 = new lib.HEAD1a();
	this.instance_2.setTransform(150,115);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).to({alpha:1},10).to({_off:true},81).wait(97));

	// HEAD1b
	this.instance_3 = new lib.HEAD1b();
	this.instance_3.setTransform(150,115);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(37).to({_off:false},0).to({alpha:1},10).to({_off:true},48).wait(97));

	// HEAD2
	this.instance_4 = new lib.HEAD2();
	this.instance_4.setTransform(150,115);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(95).to({_off:false},0).to({alpha:1},10).to({_off:true},38).wait(49));

	// bkgd-pattern
	this.instance_5 = new lib.patterngiraffe30();
	this.instance_5.setTransform(243.7,239.45,0.25,0.25,0,0,0,374.8,457.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:375,regY:457.6,scaleX:0.446,scaleY:0.446,x:322.6,y:349.7},191,cjs.Ease.sineInOut).wait(1));

	// bkgd
	this.instance_6 = new lib.BKGD();
	this.instance_6.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(192));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(17.8,-17.1,425.3,450.3);
// library properties:
lib.properties = {
	id: '0957C5EC3B874C629166840920B09671',
	width: 300,
	height: 250,
	fps: 24,
	color: "#333333",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['0957C5EC3B874C629166840920B09671'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;