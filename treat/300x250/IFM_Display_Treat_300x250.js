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


(lib.patternirisBLUE30 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E9AA7").s().p("EAedAuJQBCgoA0gmQAKjohfjmQg4iIiTjoQhaiPgkhHQg9hzgRhgQgYh/AIh2QAGhYAbhpIgsAyIgDAIQgxCEgRBQQgbCHAPCUQAKBdAxB1QAeBGBMCTQB3DkAtCDQBMDbgKDVIgkAAQAKjOhLjYQgsiAh1jgQhOiWgehJQgzh4gKhgQgOiDATh3QANhYAkhoIgUAUQgJAKgSARIgGAOQg8B/gWBPQgnCFAECUQADBdAoB4QAZBJBBCWQBXDKAiBuQA5C8gBCrIgkAAQAAing4i3QgihvhVjDQhDibgYhKQgqh7gChiQgEiDAch2QAVhWAshmIg1AvIgGALQhFB7gdBMQgxCCgHCUQgFBdAfB6QASBIA0CcQA8CvAXBeQAoCdADCLIgkAAQgEiHgnibQgXhcg6irQg1iegThMQgfh+AFhhQAGiCAkhyQAbhUA0hhIg5AqIgFAIQhOB0gjBKQg6B9gUCTQgMBdAWB8QANBOApCcQAmCTARBRQAaCDAEBxIglAAQgEhugaiCQgPhPgmiQQgriigNhNQgViBAMhgQARiCAthuQAihTA7hbQgfASgaAOIgJAMQhXBvgoBGQhFB4geCRQgUBbAKB+QAGBLAbCjQAUB8AJBEQANBvABBdIgkAAQgBhcgOhtQgIhDgUh6QgbikgGhQQgKiAAUhgQAciEA5hvQAphPBGhcQgYAMgZAJIgdAfQhgBnguBEQhNBzgqCOQgbBZACB+QAABLAQCkQAKBtADA5QAGBegBBOIglAAQAChNgGhdQgDg5gKhrQgQimgBhPQgBiCAchdQAqiPBLhyQAxhKBahhIgmAIIhIBFQhoBfgzA/QhWBtg1CKQgiBXgHB8QgEBLAGChIADCUQABBUgFBFIgkAAQAFhFgBhUQAAg0gEhfQgFilAEhMQAIiAAjhcQA0iHBRhrQA3hGBdhXQgsAcgyAVIgOAMQhvBXg4A7QheBlhACGQguBhgICQQgDA6ADB+QACBegBAxQgBBSgIBEIglAAQAIhDABhSQABgxgCheQgChaABgsQABhJAIg4QANhlAlhOQA3hyBKhaQA5hEBRhEQgeAJgqAKQhyBMg+A4QhkBdhKB/QguBRgbB6QgPBLgUChQgVCngUBhIglAAQAThcAXiwQAUilARhNQAch+AwhVQA/htBRhUQA+g/BVg9IhEAJQh6BEhBAzQhsBVhUB6Qg0BNgnB5QgXBKgkChQgqC3gbBXIgmAAQAghlAnixQAmilAYhMQAnh8A3hRQBJhqBYhNQBDg6Bdg3IhCAEIgIADQh+A7hFAtQh0BMhdBzQg7BJgwB1QgdBIgxCcQg9DCgtBqIgoAAQAfhFAehYQASgzAghnQAyifAfhKQAxh4A9hMQBThmBhhHQBIg2BigvIhCAAIgOAFQiDAwhJAoQh5BDhmBsQhABDg4ByQgjBEg8CYQgrBvgbA9QgrBhgrBMIgrAAQAvhPAthkQAbg+Auh1QA+ibAjhHQA6h0BDhHQBbhgBmg/QBMgvBngoIhGgFIgMAEQiHAlhLAiQh+A5huBkQhFA9hBBtQgnBAhJCUQhECKgmBDQhBB0hGBXIgvAAQBLhZBGh6QAphGBGiPQBKiWAohDQBDhvBIhBQBhhXBqg3QBPgpBoggIhGgKIgIABQiJAbhOAcQiBAwh2BaQhKA5hJBmQgtA/hSCOQhiCmg7BTQhkCLhvBgIg6AAQB6hgBriRQBAhYBmitQBTiPAvhCQBLhrBOg7QBnhPBugvQBSgiBqgXIhAgRIgMABQiMAQhPAWQiFAlh9BRQhOAzhSBgQgzA7heCEQieDchnBnQiuCujXBUIACABIhFAAQkQixiUi2QhXhtgbhVQhwgiiEh0QjajBjElpIAAhPQAWAsATAhQDnAcDshNQCMgtDzh+QCVhOBJgeQB5gzBggJQCDgPB3ATQBYAOBoAkIgUgVIgbgbIgOgGQiAg7hOgXQiFgniVAFQhcACh4AoQhKAZiWBBQjHBWhvAjQi7A4iqAAQg/ABg5gIIAAgkQDKAYDXg6QCBgjDjhiQCbhDBKgZQB7gqBhgCQCEgEB1AcQBXAVBlAtIgug1IgLgHQh7hFhMgdQiCgwiUgIQhdgEh6AeQhIASidA1Qi1A9hjAYQilApiSAAQgyAAgogEIAAglQCnAPC8gpQBwgZDKhEQCfg2BMgTQB+gfBhAFQCCAHByAkQBUAbBhAzIgqg5IgHgEQh3hPhIgjQh+g6iTgUQhcgMh9AWQhKANigApQi2AwhiARQilAciPgJIAAglQCLAKCjgcQBggRC1gvQCigrBOgNQCAgVBhAMQCBASBvAsQBSAiBcA7Ighg5IgLgIQhuhXhHgpQh4hEiSgfQhagUh+AKQhLAGijAbQiiAahWAJQiQAOh5gJIAAglQB3AJCPgNQBVgJCggZQClgcBOgGQCCgKBfAUQCEAdBuA4QBQApBbBGIgUgxIgggdQhnhghEguQhyhNiOgqQhZgah/ABQhLABikAPQiPANhOAEQh/AFhqgLIAAglQBoALB/gEQBJgDCTgOQCngQBOgBQCBAABeAbQCOAqByBLQBKAxBiBaIgIgmQgXgWgugyQhfhohAgzQhshWiLg1QhXghh8gIQhKgDihAFQiEAEhIAAQh1gChhgQIAAgkQBgAPB1ACQBFABCHgFQClgFBMAEQCAAIBbAjQCIA0BqBSQBHA2BXBdQgcgqgVgzIgMgPQhShpg4g1Qhehah5g+IgcgPQhWgoh1gLQhIgHiWAEQiEAChEgDQhzgFhfgXIAAglQAjAIAjAGQBfAQB+ABQA8AAA6gCQB9gDA+AEQBkAFBNAXQAnALAmATQBzA2BaBLQBEA4BDBRQgJgegJgqQhMhyg4g9Qhdhlh/hJQhRguh7gbQhLgQihgUQh/gQg8gKQhrgShWgZIAAgnQBXAbBsASQBBAMB9APQClAUBMARQB/AcBVAyQBtA/BUBQQA/A9A9BVIgKhDQhDh6gzhAQhVhth7hVQhMg0h5gnQhKgWihglQh9gchCgSQhtgdhXgiIAAgoQBYAkBvAfQBGASB+AdQCmAmBKAXQB9AnBQA3QBqBKBOBYQA6BEA3BcIgEhCIgEgIQg7iBgshDQhMh0h0hdQhIg7h1gvQhIgeidgxQiJgrhGgaQh1grhcgyIAAgqQBeA1B4AtQBKAcCLArQCgAyBKAfQB4AxBMA9QBmBTBHBhQA0BIAxBjIAAhDIgFgOQgxiFgnhGQhDh6hshmQhDhAhxg4QhGgjiYg8QiYg7hPgmQiDg/hjhHIAAguQBkBNCIBBQBQAnCfA+QCbA+BHAjQB0A6BHBDQBgBbA/BmQAvBNAoBmIAFhFIgEgNQgmiIgihJQg5h+hjhvQg+hFhshBQhDgoiRhIQizhXhag4QiXhdhphuIAAg2QBqB3CcBjQBcA6C7BcQCWBKBDAoQBvBEBBBIQBXBhA3BpQApBPAgBpIAKhGIgCgIQgaiKgdhNQgviChah2Qg5hKhnhJQg/gtiNhSQjaiAhohTQixiPhmi1IAAhPQBhDLC4CbQBuBbDkCGQCRBVBAAtQBqBMA8BNQBPBnAuBuQAjBSAXBrIARhAIgCgOQgQiLgWhPQgkiFhRh9QgzhOhghRQg6gxiFhgQjcifhnhmQiuivhUjXQg+Blg4BpIAAhNQDRl7DhjJQCEh1BoghQANgsAdgzQAshOBIhPIBGAAQAKDkBwDTQBCB/CiDPQBmCEAqBCQBGBtAZBfQAhB6ACB0QABBYgSBoIAqg3QAmiHAKhRQARiJgbiSQgRhbg6hxQgkhEhYiNQh2i6gzhpQhXiygaipIAlAAQAbCjBUCtQAyBnByC0QBbCPAkBGQA8B0ASBhQAXB+gIB2QgGBYgbBoIAsgxIADgIQAxiFARhQQAciHgQiTQgJhcgyh2QgdhHhNiSQhQiagkhTQg9iLgbh+IAlAAQAcB4A7CIQAkBRBNCUQBOCXAeBHQAyB5AKBgQAOCDgSB3QgOBYgkBoIAwgwIAGgMQA7iBAXhOQAmiFgEiUQgChdgoh4QgZhJhBiWQg0h4gYhAQgphqgYhcIAmAAQAXBYAnBnQAYA8AyB0QBDCbAZBKQApB8ADBhQADCEgcB1QgUBXgtBlIA1gvIAGgLQBFh6AdhNQAxiCAIiUQAEhdgeh6QgShJg1icQg9i0gYhfIAmAAQAZBjA4ClQA2CeATBMQAfB+gFBhQgHCCgkByQgbBWg0BfIA5gqIAFgHQBOh1AjhKQA7h9ATiTQAMhdgVh8QgNhLgqifQgiiJgLguIAmAAQAPBGAcBoQAqCkANBLQAWCBgNBgQgRCBgtBvQghBTg7BcQAfgTAZgOIAJgLQBXhvAphHQBEh4AfiRQAThbgKh+QgGhMgbiiIgRhrIAlAAIAQBlQAbCkAGBQQAKCAgUBgQgcCEg4BvQgqBPhGBcIAxgVIAegfQBghoAthDQBOhzAqiOQAahZgBh+QgBhLgPikIgFgxIAlAAIAEAtQAQCmAABPQABCCgbBeQgqCOhMBxQgwBJhbBjIAmgIQAWgWAzguQBnhfAzhAQBWhtA2iKQAhhXAHh9QAEhKgFihIgBgMIAlAAIAAALQAGClgFBNQgHB/gjBcQg0CHhRBqQg3BHhdBWQAogaA1gWIAPgLQBuhXA4g8QBfhlA/iGQAfg/ANhPQALhAABhZQABgqgChYIAAgEIAkAAIABA9QACB7gJBLQgNBpgnBRQg2ByhLBaQg4BEhSBEQAdgJArgKQBzhLA9g5QBlhcBJiAQAthNAahzQARhMASiSIAkAAQgTCZgRBNQgbB4gwBTQg/BthRBTQg9A/hWA9IBEgJQB6hEBBgzQBthVBTh6QAzhKAlh0QAYhKAiiWIAmAAQgkCegZBNQgnB5g2BPQhJBqhYBNQhDA6hdA3IBCgEIAJgDQB/g7BEgtQBzhMBeh0QA6hIAwh1QAdhHAyidIADgLIAmAAIgHAWQgyCegeBLQgyB5g9BLQhSBmhhBHQhJA1hiAwIBDAAIANgFQCFgxBHgnQB5hDBnhsQBAhDA4hxQAihFA8iYIAWg4IAoAAIgcBFQg+CdgjBFQg6B1hDBGQhbBghmBAQhMAuhnAoIBHAFIALgDQCIgmBKgiQB+g5BvhkQBFg+BBhsQAmhBBJiTIA8h3IApAAIhECHQhLCWgoBDQhDBvhIBBQhhBXhpA3QhQAphnAfIBGALIAHgBQCKgbBNgcQCCgwB2haQBJg4BJhnQAtg/BSiOQBKh9AuhGIAsAAQgtBBhXCUQhVCSgtA/QhMBrhNA7QhnBPhtAuQhSAihqAYQAhAIAeAJIAMgBQCLgRBQgVQCFglB9hRQBNgzBShgQAxg6BgiFQBHhiAmgxQBAhTA8g/IAzAAQhDBDhGBZQgsA4hJBmQhiCJgzA7QhUBihSA2QhwBJh2AlQhVAchxAPQAaAKAWAKIAqgBQCNgGBPgPQCIgaCChHQBSgsBYhaQA1g2Bph/QB1iNBDhEQBxh0BzhMIBGAAQiCBMh8B7QhLBLh9CXQhsCBg2A3QhbBdhVAuQiCBGiFAdQhWARiFAFQARALAPALQAfAABDADQCNAFBRgJQCJgPCIg9QBVgmBdhSQA3gyBvh2QCyi/BxhWQDAiPDhgxQgdgggZgZIA1AAQBTBWAxBTQAfA1AOAqQB2AkCMB/QDoDUDNGQIAABRQgrhWgjhAQjngcjtBNQiNAtjyB+QiWBOhIAeQh4AyhhAKQg6AHg0gBQhdAAhZgSQhEgNhRgdIAvAwIANAGQB/A7BQAXQCEAnCVgFQBcgCB5goQBHgYCYhCQDxhpCIgiQDmg8DaAhIAAAlQjVghjiA6QiHAjjsBmQibBDhKAZQh8AqhhACIgeAAQh4AAhugbQhSgUhfgrIAvA1IAKAHQB7BFBNAdQCBAwCUAIQBdAEB6geQBLgTCag0QDZhKB3gYQDJgqC2AVIAAAlQiygWjGApQh1AZjWBIQiUAzhHATQh2AehcAAIgcgBQiCgHhygkQhVgbhggzQAXAdASAbIAIAFQB0BPBLAiQB9A7CTAUQBcAMB9gWQBLgNCfgpQDDgzBngRQCwgbCYAPIAAAlQiWgQitAbQhpARi9AyQiFAjhCANQhrAVhSAAQgmAAgngEQiBgRhugtQhTgihcg7QATAgAOAYIALAJQBvBYBHAoQB4BECRAfQBbAUB+gLQBLgFCjgbQCrgcBegJQCbgOCCAOIAAAmQiBgPiZANQhcAIiqAcQikAchQAFQiBAKhfgUQiEgchvg4QhPgphchHIAUAxIAgAeQBnBgBEAuQByBNCPAqQBZAaB+gBQBLAACkgQQCcgPBTgDQCKgEBzAPIAAAlQhygQiJAFQhUACiaAPQimAQhOABQiCAAhegbQiOgqhyhLQhKgxhihbIAIAnQAcAcApAsQBgBoA/AzQBsBWCLA1QBXAhB8AIQBKAECigGQCQgFBOACQB/ADBqAUIAAAlQhpgUiAgEQhMgCiRAGQilAFhNgEQh/gIhcgjQiIg0hphRQhHg2hXheQAaAoAXA1IALAPQBXBvA8A3QBlBfCGBAQBTAnBxAMQBJAGCNgCIAPgBQCNgDBMAEQB+AHBoAeIAAAmQhogeh+gIQhLgFiNADIh6ACQhfgBhGgLQhVgOhGghQhzg3hZhLQhEg4hEhRQAJAdAKArQBLByA5A9QBcBlCABJQBRAvB6AbQBLAQChAUQCGARBIAMQB1AVBfAfIAAAmQhfggh4gVQhFgMiKgSQilgUhNgRQh/gchVgyQhtg+hThSQg/g9g9hVIAJBDQBEB7AzBAQBUBtB7BVQBMA0B6AmQBKAWChAlQCOAgBDATQB5AhBeAoIAAApQhggrh6giQhIgUiOghQimglhLgYQh8gohRg2QhqhIhNhaQg6hCg4heIAEBDIAEAIQA6B/AuBFQBMByBzBeQBIA6B2AwQBHAdCdAyQCTAuBPAeQCAAwBkA6IAAAqQhlg9iEgyQhOgeiagwQiggyhJgfQh5gxhMg9QhlhThHhgQg2hIgvhjIgBBDIAGAOQAvCBApBJQBCB5BsBnQBDBAByA4QBFAjCYA7QCnBDBUApQCPBFBpBTIAAAvQhrhZiThJQhXgqirhEQidg/hGgjQh0g6hHhDQhfhbhAhlQgvhNgohlQgBAkgDAgIADANQAmCHAiBKQA5B/BjBuQA+BFBtBBQBAAmCUBKQDBBfBgA9QCjBnBuCBIAAA5QhuiLiohuQhjhBjJhjQiXhLhCgnQhvhDhChJQhXhgg2hqQgphPgghpIgLBGIACAIQAbCKAcBOQAvCBBbB2QA4BJBnBKQA9AqCPBVQDoCHBvBdQC8CdBlDPIAHgPIAABQQjbGhjvDcQiLB/huAjQgbBahXBuQiLCvj/CmgAq7cmQiMAFhRAQQiHAaiDBHQhRAshZBaQg1A2hpB/QisDQhtBeQi5CgjcBEQBWBEBnBDQDbhRCwitQBohoCfjcQBjiJAyg6QBVhjBRg2QBxhJB2glQBWgcBxgPIgxgUgAZxRaQgnCHgKBRQgRCJAbCSQARBbA7BxQAjBEBZCNQCRDmA5CGQBgDkgDDmQBshQBWhVQgHjrhxjZQhCiAiljUQhmiDgrhDQhFhtgahfQghh6gBh0QgBhYARhogAwybuQiJAPiIA8QhVAmhcBUQg3AwhvB3QizDAhxBVQi/CPjhAxQBFBPBfBPQDfg/C7igQBuheCsjRQBqiAA4g4QBbhcBWgvQCChGCFgcQBWgSCFgFQgSgMgOgKQgfABhEgEQg1gCgtAAQhJAAgzAGgAbNPYQgbCGgDBTQgGCJAmCOQAYBaBEBqQAqBBBjB/QCjDSBDB+QBxDVAODlQBThbAthVQAbgzAHggQgZjlh7i3QhJhsisilQhHhEgkgmQg5g8gkg1QgvhCgYhFQgrh3gKh0QgIhYAJhpQgNAZgZAngAzFaVQiKAFiMAyQhWAehXBHQg5AwhgBkIgNAMQiOCUhZBEQiVBxitAvQhHAThIAIQAfBNBOBfQDiguC/iOQBxhUCyi/QByh5A4gzQBghVBagoQCEg6CEgSQBYgMB/AFQgwgLg0gUIgSgDQh5gOhOAAIgWAAgAcjM0IgCASQgRCKADBSQAFCKAxCMQAYBFAvBAQAjAxA2A5QAhAiBFBDQCuCnBLBuQB+C6AcDoQBNgfBehNQgtjiiOi/QhUhxi/izQh5hwgzg6QhVhggohZQg6iEgSiDQgMhZAFh/QgLAwgVA0gA5qZRQhaAZhqBEQhBApiABjQjRCjh+BDQjUByjlAOQBaBTBWAsQAyAcAgAGQBMgIBIgTQCfgsCLhkQBahDB9iCIAYgZQBrhwA5gvQBehOBfgiQB4grB0gKQBYgIBpAJIhAgmQiHgbhTgDIgigBQh4AAh8AhgAdrJOQAAAggDBDQgFCOAJBQQAPCKA8CHQAmBVBTBdQAyA4B2BtQDAC0BUBxQCQC/AxDhQBMhEBRhgQg/jfifi7QhfhujQisQiAhqg4g4QhdhbguhWQhHiCgciGQgRhVgGiGQgKASgLAOgEgscAh9QDqgHDZhxQCAhCDUilQCDhmBDgrQBthFBegaQB6ghB1gBQBYgBBoARQgfgVgYgUQiGgnhSgKQiJgQiSAbQhbARhxA7QhFAjiMBYQjiCPiEA5QjfBfjgAAIgRAAQBRBuBVBUgAeiHtIACAsQAFCMAQBRQAaCHBHCCQAsBSBaBYQA1A1B/BqQDQCrBfBtQCgC5BDDdQBIhbA/hjQhQjaiuixQhmhojeifQiIhig7gzQhjhUg1hRQhJhxgmh3QgchUgPhzQgHAVgNAbgEgvdAeVQDoAKDmhfQCIg4DoiTQCPhaBGgkQB0g9BggRQB/gYB2AJQBZAFBoAcIgygsIgIgEQiFgwhQgRQiHgciUAQQhcAJh1AxQhHAeiSBMQjaBxh4AsQjOBLjFAAQgwAAg5gGQBDB0BCBdgAAeIfQABCCAlDsQAZCkAEBJQAGB6gbBbQg6DEgoBWQgiBIhTByQA1ADBUABIACAAQBKAABNgGIgTgKQBCiBAWhJQAbhZAbjMQAMhYgZhzQgPhHgxiYQhHjcgWh/QgmjaAgjQQhGDJACDdgAiichIgOgKQBWh2AhhEQAphUA5jFQAahVgHh2QgEhIgYifQgjjhgCiDQgDjdA/jJQhkC8ggDaQgUCBAADvQgBCmgHBIQgNB5gpBWQhZC5g2BPQgsBBhlBlQB+AdCfALgACJIOQAVCBBJDjQAzCcAPBKQAaB3gNBfQgbDLgbBcQgXBLhBCAQCogLB/glIgbgIQAuiLAKhMQANhcgFjNQgDhZgqhuQgbhFhIiNQhojOgph6QhIjRgBjTQgmDSAlDZgAfRFtIACAOQAQCMAWBPQAlCFBRB9QAyBNBgBSQA6AxCGBhQDcCeBmBnQCuCuBVDXQBAhmA/h5QhhjTi7ifQhvhdjqiKQiRhVhAgtQhqhLg7hOQhPhngvhuQgihSgYhrQgIAhgJAegAnTbzIgNgNQBnhnArg+QA2hOBYi4QAnhRAMh1QAHhIAAigQABjlASiBQAfjbBfi7QiBCphCDSQgnB8gmDsQgaCigUBJQgfB2g2BOQhsCcg+BFQg4A9hcBDQAeAaAvAYQBGAkBgAZgADwHuQApB8BsDVQBLCTAaBFQAsByACBeQAFDOgNBiQgKBOgtCJQBqgfBFgvQAngaARgWIAbARQAWiKgChNQgChdgkjHQgRhYg7hmQglg/hdiBQiHi6g8hzQhojDghjQQgFDVBGDRgAr/aBQBxhSA2g4QBAhDByimQAzhKAehxQAThHAZieQAkjiAnh9QBBjTB7irQiaCThiDFQg7B1hKDjQg0CdgeBEQgxBwhCBEQiOCWhMA6Qg+AviDBDQBiA0BRARQAtAIAdgEgAFQG9QA9B1CLDAQBhCGAlBBQA9BpARBeQAjC7AEBcQAEBSgRBxQAngCAzgRQBKgYBVgxIgSAAQABiSgOhLQgRhchEjBQgehUhKhcQgtg3hyhzQiiijhOhnQiFixhBjIQAdDUBlDCgAwMYSIgMgYQCChCA8guQBLg5CNiUQA+hBAvhsQAehCAxiYQBHjaA6h1QBhjGCViWQivB6iACzQhNBqhsDVQhMCUgoA8QhCBnhMA6QijB8hUAuQhFAmiJAsQB+BtB0BBgAGoF/QBOBoCoCqQB0B1AvA5QBNBfAgBaQBEDBARBeQAPBOgBCOQBxhEB2hpIgRADQgXiQgYhIQgfhZhii0QgqhOhYhPQg1gviChfQi5iHhehbQifiahgi7QA9DMCDCxgA0LVZIgHgVQCMgtBCgkQBTgsCih8QBHg3BAhjQAng8BKiPQBojMBLhrQB/i1Cqh8QjABcibCeQhbBdiNDAQhhCFgyA4QhRBahUAtQi0BihZAgQhLAbiLAVQAtAyAxAyQA3A2A5A0gAH1EzQBdBcDBCMQCFBhA3AyQBbBRAtBUQBhCzAhBcQAaBLAWCKQAygtAxgxQA8g7Avg2IgVAHQgtiLgkhCQgthTh8iiQg2hIhjg/Qg7gniRhKQjLhohrhLQi1iAh9ipQBdDACdCagA3pR6IgCgRQCQgXBIgYQBZgfCzhhQBPgrBPhYQAvg1BfiCQCHi4BbheQCaifC7hhQjMA+ixCDQhoBNiqCoQh0B0g7AwQheBMhaAgQi9BChdATQhOAOiFAAIgOAAQBDBwBpB3gAI2DcQBqBMDUBtQCUBLA9AoQBnBCA5BMQB9CjAuBWQAmBGArCHQBuh+BBh0IgZAMQhBiCgug8Qg5hLiUiNQhBg+hsgvQhCgdiYgzQjahHh1g5QjHhhiViUQB6CvCzB/gA7qLiQAYBLAyBVIAAgTQCSAABKgNQBegRDAhEQBUgdBchKQA4gvBxhxQCjihBohOQCxiFDIhBQjUAcjDBmQh1A8jACLQiFBhhBAlQhqA9hdASQh2AVhGAJQhJAJg5AAQg8ABhhgOQADAnAQAygAJoB8QB1A7DiBJQCeA1BDAdQBvAyBFBBQCWCPA6BMQAvA+BCCDQA1hiAQhRQAJgugEgcIABADIAggJQhShzg4g1QhEg/imh0QhKgyhygfQhGgSiegZQjigkh9gnQjThAirh8QCUCaDFBigA9DIKQAbAoAWAQIADACIgSAaQCJAWBNgCQBdgDDFgkQBZgQBlg8QBAgkCBheQC6iHByg8QDEhoDQghQjWgFjQBGQh8ApjVBsQiTBLhFAaQhyAshfACIh6ACQiEAAhRgOQhAgMh3gnQAfBrAuBEgAKKAWQB8AnDrAmQCiAaBJAUQB2AfBOA1QCcBsBFA/QA+A4BDBbQAageAYguQAkhGAZhgIgNANQhnhng+grQhNg2i5hYQhRgmh1gMQhJgIifAAQjlAAiBgTQjbgei8hgQCqCBDSBCgA60FuQBcANDNgFQBZgCBugrQBFgaCOhJQDNhoB6gpQDShIDSgBQjSgkjZAjQiAAVjkBJQiEArg/AQQhmAZhPAAQglgBgegEQjNgbhbgbQhMgWh/hCQAMCnAkCAIAJgbQCKAuBMAKgAKchUQCBAUDuAAQCmAABJAIQB5ANBWApQC4BXBQA3QBCAuBjBjQAeh+ALifIgKANQh2hVhEggQhVgpjEg6QhVgbh2AIQhHADigAZQjjAkiBABQjeAEjIhBQC8BmDaAggA7vBeQBaAbDKAbQBZANBzgZQBHgQCYgxQDbhGCAgWQDagmDQAhQjKhHjcACQiCABjsAlQikAahJADQh6AGhbgbQjDg5hYgqQhIgjhxhSQgDA2gBBTQAABTAFBGIAKgTQCCBCBJAWgAXMjuQDFA6BWApQBHAiByBTQAEg8AAhNQAAhTgFhHIgKATQiChChIgXQhagajLgbQhZgMhzAYQhGAQiZAxQiqA3hfAVQijAmiWgBQhhABhhgPQDJBGDdgCQCDgBDqglQClgZBJgEIAugBQBdAABJAWgA7/i3QBVApDDA6QBWAaB2gHQBIgECegYQDigkCDgCQDdgDDJBBQi8hmjaggQiBgUjuAAQimAAhKgIQh5gNhVgpQi6hZhOg2QhCgshkhlQgfCBgKCdIALgPQB2BWBEAhgA7jnMQBNA2C4BYQBRAnB1AMQBJAICgAAQDlAACBATQDbAeC8BgQiqiBjShDQh8gnjsgmQijgahIgUQh2gfhOg2QidhshEg+Qg8g3hFhcQgZAdgYAvQgkBGgaBgIAOgNQBnBnA+ArgAkzifQiUibjFhiQh1g7jihKQieg0hDgdQhwgyhEhCQiWiOg6hMQgwg/hCiCQg1BigQBRQgJAuAEAdIgfAHIAJANIASAIIgEALQBDBcA8A1QBBA8CcBsQBKAyBxAfQBGASCfAaQDiAkB8AmQDUBBCrB8IAAAAgA4svYQA5BMCUCMQBAA+BsAwQBBAcCaAzQDaBHB1A5QDHBiCVCUQh6iwiziAQhqhLjVhtQiRhKhAgpQhmhDg6hLQh8ijgvhWQgmhGgriHQhuB/hBBzIAZgMQBCCCAuA8gA2WzCQAtBTB8CiQA3BIBiA/QA9AnCPBKQDLBoBsBMQC1B+B8CrQhdjBidiaQhehcjAiMQiGhjg2gwQhbhSgthTQhhi0gghaQgbhKgWiMQg5A1gqApQg3A3gzA5IAVgGQAsCKAkBDgAVmqWQhZAChuArQhEAaiOBJQjNBnh7AqQjRBIjSAAQDSAmDZgkQCAgWDjhIQCcgzBKgQQB3gZBeAMQDLAbBeAcQBNAYB9BAQgLipglh/IgIAbQiKgthMgKQhCgJh8AAIhsABgAzc2RQAfBZBhC0QArBOBYBPQA1AwCCBeQC6CJBdBZQCfCbBgC7Qg+jMiDiyQhNhoipiqQh1h2gug5QhNhegfhaQhEjBgSheQgOhOAAiOQhvBDh4BpIARgCQAXCRAZBHgAjzlIQgcjThmjDQg8hyiMjDQhgiFgmhBQg9hpgRhdQgii7gEhdQgEhTAQhwIgGAAQgnAEgzAQQhIAYhRAwIASAAQAACSANBLQARBdBEDAQAeBVBKBbQAtA3ByBzQCiCiBOBoQCFCwBBDIIAAAAgAYnuSQhdACjGAlQhYAQhmA8Qg+AjiCBfQi6CGhzA9QjEBnjQAiQDWAFDRhGQB6gpDWhsQCUhLBFgbQBxgrBfgCQDPgFBfANQBOAKCLAtQgghqguhFQgagngXgRIARgcQh+gUhMAAIgNAAgAsU7KQADBeAkDGQAQBYA7BmQAkA+BfCCQCGC6A9BzQBnDDAiDRQAFjWhGjRQgph7hsjWQhLiSgbhGQgrhygDhfQgFjNANhiQALhPAtiIQhqAghFAtQgoAbgQAWIgcgQQgWCKACBMgAWfyDQhcARjBBFQhVAdhbBKQg4AuhyBxQiiCihoBOQixCFjIBCQDTgdDEhmQBzg8DBiLQCGhhBBgmQBpg8BdgSQC7ghBdgFQBTgEBwAQQgCgmgRgzQgYhLgxhVIgBATIgTgBQiCAAhHANgEgHzggRIAaAJQgtCKgLBMQgMBdAFDNQACBZAqBuQAbBDBICPQBoDNAqB7QBHDRABDSQAmjRgkjaQgViAhKjkQgyibgQhKQgZh3AMhfQAbjKAcheQAXhNBBh9QioALh/AkgAXH2KQiRAYhHAYQhZAfi0BiQhOAqhPBYQgwA1hfCCQiHC5haBdQiaCgi8BgQDNg+CxiDQBohNCqipQB0h0A6gvQBfhMBZggQDDhEBdgSQBOgOCOABQhChthrh7gEgC8ghBIAUAKQhDCBgWBJQgbBagbDLQgLBYAYBzQAQBHAxCYQBGDbAXCAQAmDaghDPQBHjIgCjdQgBiDgljqQgailgDhJQgHh6AbhaQA6jDAqhZQAihIBShwQg8gEhMAAIgEAAQhRAAhGAFgATt5kQiLAthDAkQhSAsijB8QhHA3hABiQgoA+hICOQhoDMhLBrQiAC1iqB8QDAhdCbicQBchfCMjAQBhiFAyg3QBRhaBUguQCzhgBcghQBMgbCJgWQg0g5gqgqQg+g9gzgtgEACLgg3QhWB2ghBFQgoBUg6DEQgaBVAHB2QAEBHAZCgQAjDjACCBQAEDdhBDJQBki8AhjaQATiBABjvQAAimAIhIQANh5AphWQBYi5A3hPQAthCBkhkQiCgeicgKgAP08ZQiDBBg8AuQhLA5iNCUQg9BBgwBsQgdBAgyCaQhIDag5B1QhhDHiVCVQCwh6CAizQBMhrBsjUQBMiSAog/QBChmBMg6QCjh8BVgvQBHgmCHgrQh/huh0hAgEAG8ggGQhnBmgsBAQg1BMhZC5QgmBRgMB1QgIBIAACfQgBDmgSCBQgfDbheC7QCAipBDjSQAnh8AmjsQAaiiAThJQAgh2A1hOQBtidA9hDQA4g+BbhDIgEgEQgegagwgYQhEghhbgYgAI28ZQhBBDh0CoQgyBKgfByQgSBFgaCfQgkDigmB9QhBDTh7CrQCaiTBijGQA7h1BJjiQA0ieAehDQAxhvBChFQCOiWBNg6QA+gvCChDQhgg0hRgQQgugKgcAEIgEgjQh0BUg1A4gEgwSghZQBQDbCuCwQBmBoDeCgQCIBiA8AzQBiBUA1BRQBKByAmB1QAbBWAPBxIAUgwIgBgrQgGiNgPhQQgaiIhHiBQgshShahYQg3g2h+hpQjQirhehuQigi5hEjcQhFBXhCBmgEgtvgk4QA/DfCfC7QBfBuDQCsQCBBqA4A4QBcBcAvBVQBGCCAcCFQASBWAFCGQAGgKAPgWQAAgfADhEQAGiOgJhRQgQiJg8iHQgmhVhThdQgxg4h2huQjAiyhVhyQiPi/gxjhQhNBEhRBggEgqygn3QAtDiCPC/QBUByC/CyQB4BwAzA6QBVBfAoBaQA7CEASCFQAMBYgFCBQAJgwAWg2IACgSQARiLgChSQgFiLgyiMQgYhEgxhDQgog4hBhCIhUhSQiuinhKhuQh+i6gcjpQhNAfhfBOgEgnCgrFQgZAwgJAiQAaDlB7C3QBIBsCsClIArApQBYBVAuA8QBBBTAeBVQAqB3ALB0QAIBXgKBqQASggAUggQAbiGAEhUQAFiIgmiOQgYhahEhqQgog/hliBQiijRhDh+QhxjVgPjlQhSBbguBVgAVO6vIAIAEQCEAwBQARQCIAcCTgQQBdgJB1gxQBHgeCRhNQDyh9CLguQDrhNDmAXQhCh0hDhdQjogLjlBfQiIA4joCUQiPBahHAkQh0A9hgARQhdARhZAAQh2AAiJgigATY8TQCGAnBSAKQCJARCSgbQBbgSBxg6QBEgkCMhYQDniRCGg5QDjhgDnADQhShuhVhUQjqAHjZBwQiABDjUClQiEBmhBAqQhtBGhfAaQiAAih7AAQhUAAhfgQgARV9wQCHAcBTADQCJAFCOglQBagYBphEQBAgqCBhjQDSijB9hDQDVhxDlgPQhbhShWguQgxgagggHQjlAZi3B7QhtBJikCsQhqBug7AxQhdBOhgAiQiiA5ieAAQgxAAg8gGQAlAVAbARgAOw/GIATADQCLAQBSgCQCKgFCMgyQBbgfBdhPQAjgeAsgrIBNhPQCmitBvhLQC6h+DogcQgfhNhNhfQjiAui/COQhyBUiyC/QhxB4g5A0QhgBVhZAoQhuAwhtAUQhVARhjgBIhPgBQAwAKA1AVg");
	this.shape.setTransform(323.325,295.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.patternirisBLUE30, new cjs.Rectangle(0,0,646.7,590.6), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgJAKQgDgEAAgGQAAgFADgEQAEgDAFAAQAFAAAEADQAFAEAAAFQAAAGgFAEQgEADgFAAQgFAAgEgDg");
	this.shape.setTransform(88.1,24.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgbA+QgOgHgHgNIAOgKQAGAKAKAGQAKAFALAAIALgCQAFgBAEgDIAHgIQADgEAAgGQAAgJgGgEQgGgFgIgCIgSgFQgKgBgIgDQgJgEgFgHQgGgGAAgNQAAgJAEgHQAEgHAGgFQAGgEAIgDQAIgCAHAAQAQAAAMAGQALAGAHAMIgPAJQgFgJgHgEQgHgFgMAAIgIACIgJAEQgEACgDAEQgCAEAAAFQAAAJAFAEQAGAEAJACIARAEQAKACAJAEQAIADAGAHQAFAHAAANQAAAKgDAIQgEAHgHAFQgGAFgJADQgIACgJAAQgQAAgOgGg");
	this.shape_1.setTransform(78.275,19.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABRBCIAAhKIgCgQQgBgHgDgGQgEgGgHgDQgGgEgJAAQgMAAgIAFQgIAEgEAGQgEAHgCAIQgCAIAAAHIAABHIgQAAIAAhMQABgSgHgLQgHgLgOAAQgIAAgJADQgJADgFAHQgGAHgEAKQgEAJAAANIAABAIgQAAIAAhcIAAgIIgBgKIAAgKIgBgIIARAAIABAOIAAAJIACAAQAEgLAMgIQAMgHAPAAQANAAALAGQAKAHAFAPQAFgOANgIQAMgGAOAAQAOAAAKAEQAKAFAFAIQAGAIACAJQABALAAALIAABLg");
	this.shape_2.setTransform(60.55,18.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaA/QgNgFgJgJQgJgJgFgNQgFgMAAgPQAAgOAFgMQAFgNAJgJQAJgJANgFQANgFANAAQAPAAAMAFQANAFAJAJQAJAJAFANQAFAMAAAOQAAAPgFAMQgFANgJAJQgJAJgNAFQgMAFgPAAQgNAAgNgFgAgUgwQgJAFgIAHQgGAHgEAJQgDAKAAAKQAAALADAKQAEAJAGAHQAIAIAJAEQAJAEALAAQAMAAAKgEQAJgEAHgIQAGgHAEgJQADgKAAgLQAAgKgDgKQgEgJgGgHQgHgHgJgFQgKgEgMAAQgLAAgJAEg");
	this.shape_3.setTransform(40.4,19.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAFBSQgGgDgEgEQgEgEgCgHQgBgFAAgIIAAhTIgcAAIAAgPIAcAAIAAglIAPAAIAAAlIAlAAIAAAPIglAAIAABTQAAAJAFAFQAFAEAIAAIAKAAIAJgEIABAPIgKAEIgLABQgJAAgGgDg");
	this.shape_4.setTransform(27.35,17.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhEBiIAAjAIARAAIAAAXIABAAQAEgHAGgFIAMgIQAHgDAIgBIAOgCQAPgBAMAGQAMAFAJAJQAKAJAFAMQAFANAAAPQAAAPgFAMQgFAMgKAJQgJAJgMAFQgMAFgPAAIgOgBQgIgCgHgEQgGgDgGgFQgGgEgEgHIgBAAIAABWgAgUhOQgJAFgIAHQgHAHgEAJQgEAKAAALQAAALAEAJQAEAJAHAHQAIAHAJAFQAKADALAAQALAAAKgDQAJgFAHgHQAHgHADgJQAEgJAAgLQAAgLgEgKQgDgJgHgHQgHgHgJgFQgKgEgLAAQgLAAgKAEg");
	this.shape_5.setTransform(14.425,22.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABRBCIAAhKIgCgQQgBgHgDgGQgEgGgGgDQgHgEgJAAQgMAAgIAFQgHAEgFAGQgEAHgCAIQgCAIAAAHIAABHIgPAAIAAhMQAAgSgHgLQgGgLgOAAQgJAAgJADQgIADgHAHQgFAHgEAKQgEAJABANIAABAIgRAAIAAhcIAAgIIgBgKIAAgKIAAgIIAQAAIABAOIABAJIABAAQAEgLAMgIQAMgHAQAAQANAAAKAGQAKAHAEAPQAGgOAMgIQANgGAOAAQAOAAAKAEQAJAFAGAIQAFAIACAJQACALAAALIAABLg");
	this.shape_6.setTransform(-6.3,18.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgxBhIgIgBIACgQIAHACIAIABQAEAAAEgCIAGgFIAEgHIADgIIAMgdIg1iCIATAAIAqBtIAqhtIASAAIhCCpQgFAMgIAIQgJAIgOgBg");
	this.shape_7.setTransform(-24.625,22.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgbA+QgOgHgHgNIAOgKQAGAKAKAGQAKAFALAAIALgCQAFgBAEgDIAHgIQADgEAAgGQAAgJgGgEQgGgFgIgCIgSgFQgKgBgIgDQgJgEgFgHQgGgGAAgNQAAgJAEgHQAEgHAGgFQAGgEAIgDQAIgCAHAAQAQAAAMAGQALAGAHAMIgPAJQgFgJgHgEQgHgFgMAAIgIACIgJAEQgEACgDAEQgCAEAAAFQAAAJAFAEQAGAEAJACIARAEQAKACAJAEQAIADAGAHQAFAHAAANQAAAKgDAIQgEAHgHAFQgGAFgJADQgIACgJAAQgQAAgOgGg");
	this.shape_8.setTransform(-37.275,19.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAFBSQgGgDgEgEQgEgEgCgHQgBgFAAgIIAAhTIgcAAIAAgPIAcAAIAAglIAPAAIAAAlIAlAAIAAAPIglAAIAABTQAAAJAFAFQAFAEAIAAIAKAAIAJgEIABAPIgKAEIgLABQgJAAgGgDg");
	this.shape_9.setTransform(-55,17.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgaA/QgNgFgJgJQgJgJgFgNQgFgMAAgPQAAgOAFgMQAFgNAJgJQAJgJANgFQAMgFAOAAQAPAAANAFQAMAFAJAJQAJAJAFANQAFAMAAAOQAAAPgFAMQgFANgJAJQgJAJgMAFQgNAFgPAAQgOAAgMgFgAgUgwQgJAFgIAHQgGAHgEAJQgDAKAAAKQAAALADAKQAEAJAGAHQAIAIAJAEQAJAEALAAQAMAAAJgEQAKgEAHgIQAGgHAEgJQAEgKgBgLQABgKgEgKQgEgJgGgHQgHgHgKgFQgJgEgMAAQgLAAgJAEg");
	this.shape_10.setTransform(-67.85,19.025);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAnBCIAAhKIgBgQQgCgHgDgGQgEgGgGgDQgGgEgKAAQgIAAgJADQgIADgGAHQgGAHgEAKQgDAJAAANIAABAIgRAAIAAhcIAAgIIgBgKIAAgKIAAgIIAQAAIABAOIABAJIABAAQAFgLALgIQAMgHAPAAQAPAAAJAEQAKAFAFAIQAGAIACAJQACALAAALIAABLg");
	this.shape_11.setTransform(-83.975,18.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

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
	this.shape.graphics.f("#FFFFFF").s().p("AgSAgIASg/IATAAIgVA/g");
	this.shape.setTransform(78.4,-7.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXA/QgMgFgJgJQgIgJgFgNQgFgMAAgPQAAgOAFgMQAFgMAJgJQAIgKAMgFQAMgFANAAQAPAAALAFQAMAFAHAJQAIAIAEALQAEALAAAMIAAAKIhsAAIACAOQACAIAGAIQAGAIAJAFQAJAGAOAAQANAAAMgGQAMgGAHgLIAMAKQgKAPgOAHQgPAGgRAAQgOAAgMgFgAAugKQAAgIgDgIQgEgIgGgFQgGgGgIgEQgJgDgJAAQgNAAgJAGQgJAFgFAIQgFAHgDAHIgCAJIBbAAIAAAAg");
	this.shape_1.setTransform(67.325,-14.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgIBqIAAjTIARAAIAADTg");
	this.shape_2.setTransform(56.2,-18.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhEBiIAAjAIARAAIAAAXIABAAQAEgHAGgFIAMgIQAHgDAIgCIAOgCQAPABAMAFQAMAFAJAJQAKAJAFANQAFAMAAAPQAAAOgFANQgFALgKAJQgJAKgMAFQgMAFgPAAIgOgCQgIgBgHgDQgGgEgGgEQgGgGgEgGIgBAAIAABWgAgUhOQgJAEgIAIQgHAGgEAKQgEAKAAALQAAALAEAJQAEAJAHAHQAIAIAJADQAKAEALABQALgBAKgEQAJgDAHgIQAHgHADgJQAEgJAAgLQAAgLgEgKQgDgKgHgGQgHgIgJgEQgKgEgLAAQgLAAgKAEg");
	this.shape_3.setTransform(44.475,-11.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaA/QgNgFgJgJQgJgJgFgNQgFgMAAgPQAAgOAFgMQAFgNAJgJQAJgJANgFQANgFANAAQAPAAANAFQAMAFAJAJQAJAJAFANQAFAMAAAOQAAAPgFAMQgFANgJAJQgJAJgMAFQgNAFgPAAQgNAAgNgFgAgUgwQgJAFgIAHQgGAHgEAJQgDAKAAAKQAAALADAKQAEAJAGAHQAIAIAJAEQAJAEALAAQAMAAAKgEQAJgEAHgIQAGgHAEgJQAEgKgBgLQABgKgEgKQgEgJgGgHQgHgHgJgFQgKgEgMAAQgLAAgJAEg");
	this.shape_4.setTransform(27.45,-14.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgXA/QgMgFgJgJQgIgJgFgNQgFgMAAgPQAAgOAFgMQAFgMAJgJQAIgKAMgFQAMgFANAAQAPAAALAFQAMAFAHAJQAIAIAEALQAEALAAAMIAAAKIhsAAIACAOQACAIAGAIQAGAIAJAFQAJAGAOAAQANAAAMgGQAMgGAHgLIAMAKQgKAPgOAHQgPAGgRAAQgOAAgMgFgAAugKQAAgIgDgIQgEgIgGgFQgGgGgIgEQgJgDgJAAQgNAAgJAGQgJAFgFAIQgFAHgDAHIgCAJIBbAAIAAAAg");
	this.shape_5.setTransform(11.375,-14.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhEBiIAAjAIARAAIAAAXIABAAQAEgHAGgFIAMgIQAHgDAIgCIAOgCQAPABAMAFQAMAFAJAJQAKAJAFANQAFAMAAAPQAAAOgFANQgFALgKAJQgJAKgMAFQgMAFgPAAIgOgCQgIgBgHgDQgGgEgGgEQgGgGgEgGIgBAAIAABWgAgUhOQgJAEgIAIQgHAGgEAKQgEAKAAALQAAALAEAJQAEAJAHAHQAIAIAJADQAKAEALABQALgBAKgEQAJgDAHgIQAHgHADgJQAEgJAAgLQAAgLgEgKQgDgKgHgGQgHgIgJgEQgKgEgLAAQgLAAgKAEg");
	this.shape_6.setTransform(-4.775,-11.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAFBSQgGgDgEgEQgEgFgBgGQgCgFAAgHIAAhUIgcAAIAAgPIAcAAIAAglIAPAAIAAAlIAlAAIAAAPIglAAIAABUQAAAIAFAFQAEAFAJAAIAKgCIAJgDIACAQIgLACIgMACQgIAAgGgDg");
	this.shape_7.setTransform(-25.5,-15.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgYBCQgIgCgHgFQgGgEgEgIQgFgHAAgKQAAgPAIgJQAHgIALgEQALgEANgBIAVgCIATAAIAAgIQAAgQgKgIQgKgHgQAAQgVAAgRAPIgKgMQAJgJAOgEQAOgFALAAQAYAAAOALQAOALAAAZIAAAeIAAASIAAAOIABAMIABALIgPAAQgCgKAAgLIgBAAQgHAMgLAGQgKAGgQAAQgJAAgHgCgAgBABQgKACgIADQgIADgFAGQgEAFgBAJQABAGACAEQACAFAFADQAEADAFABIALACQAMAAAJgEQAJgEAEgGQAGgHACgHQABgIAAgJIAAgIIgSAAg");
	this.shape_8.setTransform(-37.45,-14.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgXA/QgMgFgJgJQgIgJgFgNQgFgMAAgPQAAgOAFgMQAFgMAJgJQAIgKAMgFQAMgFANAAQAPAAALAFQAMAFAHAJQAIAIAEALQAEALAAAMIAAAKIhsAAIACAOQACAIAGAIQAGAIAJAFQAJAGAOAAQANAAAMgGQAMgGAHgLIAMAKQgKAPgOAHQgPAGgRAAQgOAAgMgFgAAugKQAAgIgDgIQgEgIgGgFQgGgGgIgEQgJgDgJAAQgNAAgJAGQgJAFgFAIQgFAHgDAHIgCAJIBbAAIAAAAg");
	this.shape_9.setTransform(-52.325,-14.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AggBDIAAhcIAAgJIgBgLIAAgKIAAgHIAQAAIABAOIABAJQAGgLAJgIQAKgHAOgBIAGABIAEABIgCAQIgGgBQgLABgIADQgHADgFAGQgFAHgDAIQgDAIABAKIAABGg");
	this.shape_10.setTransform(-63.35,-14.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgIBjIAAi1IhEAAIAAgQICZAAIAAAQIhEAAIAAC1g");
	this.shape_11.setTransform(-74.3,-17.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

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
	this.shape.graphics.f("#0067AF").s().p("AgQAqQgHgDgGgGIAMgLQADAEAEADQAFACAFAAIAEAAIAFgDIAEgEIABgEQAAgGgDgCQgDgCgEgCIgJgDIgKgFQgEgCgDgEQgEgFAAgHQAAgHADgFQADgEAEgEQAFgDAGgBQAFgCAFAAQAGABAHACQAGACAFAEIgLAMQgCgEgEgCQgFgBgEAAIgEAAIgEACIgEAEIgBAFQAAAFADACQADACAEABIAJAEQAGABAEADQAEACADAFQADAEABAHQAAAHgDAGQgCAFgEADQgFADgGACQgFABgGAAQgHAAgIgCg");
	this.shape.setTransform(55.6,14.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0067AF").s().p("AAfAqIAAhFIAAAAIgaBFIgJAAIgahFIAABFIgPAAIAAhTIAXAAIAWA6IAXg6IAXAAIAABTg");
	this.shape_1.setTransform(44.275,14.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0067AF").s().p("AAaAqIgIgTIgkAAIgHATIgRAAIAlhTIAMAAIAkBTgAANAKIgNghIgMAhIAZAAg");
	this.shape_2.setTransform(31.875,14.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0067AF").s().p("AAOAqIgTgkIgLAAIAAAkIgPAAIAAhTIAeAAIAKABIAKADQAFADACAFQADAEAAAIQAAAJgFAGQgFAGgKABIAXAlgAgQgFIAMAAIAFgBIAHgBIADgEQACgCABgEQAAgEgCgCIgEgEQgDgBgDAAIgFgBIgNAAg");
	this.shape_3.setTransform(21.65,14.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0067AF").s().p("AgMApQgJgDgFgFQgHgGgCgJQgEgHAAgLQAAgJAEgIQACgJAHgFQAFgGAJgDQAIgDAJgBQAKABAIACQAJACAGAGIgLAMQgEgEgGgDQgGgCgGAAQgGAAgFACQgGACgDAFQgEAEgCAFQgCAGgBAGQABAHACAFQACAGAEAEQADAEAGADQAFACAGAAIALgBQAFgBAEgDIAAgUIgRAAIAAgMIAgAAIAAAqQgQAIgTAAQgJAAgIgDg");
	this.shape_4.setTransform(10.2,14.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0067AF").s().p("AgRApQgIgDgHgFQgFgGgEgJQgDgHAAgLQAAgJADgIQAEgJAFgFQAHgGAIgDQAIgDAJgBQAKABAIADQAIACAHAHQAFAFAEAIQADAJAAAJQAAAKgDAIQgEAIgFAGQgHAGgIADQgIAEgKgBQgJAAgIgDgAgLgcQgGACgDAFQgEAEgCAFQgDAGABAGQgBAHADAFQACAGAEAEQADAEAGADQAGACAFAAQAGAAAGgCQAGgDADgEQAEgEACgGQACgGAAgGQAAgGgCgGQgCgFgEgEQgDgFgGgCQgGgCgGAAQgFAAgGACg");
	this.shape_5.setTransform(-1.75,14.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0067AF").s().p("AAOAqIgTgkIgLAAIAAAkIgPAAIAAhTIAeAAIAKABIAKADQAFADADAFQACAEAAAIQAAAJgFAGQgFAGgKABIAXAlgAgQgFIAMAAIAFgBIAHgBIADgEQACgCAAgEQAAgEgBgCIgEgEQgDgBgDAAIgFgBIgNAAg");
	this.shape_6.setTransform(-12.65,14.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0067AF").s().p("AgdAqIAAhTIAdAAIAKABQAGABAEADQAEADAEAEQACAFAAAHQAAAIgDAFQgDAEgFADQgEACgGABIgMABIgLAAIAAAjgAgOgEIAJAAIAGgBQADAAAEgBQADgCABgCQACgDAAgEQAAgEgCgCIgEgEQgCgBgEAAIgFgBIgLAAg");
	this.shape_7.setTransform(-22.65,14.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0067AF").s().p("AgcAqIAAhTIA3AAIAAANIgoAAIAAAVIAmAAIAAANIgmAAIAAAXIAqAAIAAANg");
	this.shape_8.setTransform(-38.575,14.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0067AF").s().p("AgcAqIAAhTIA3AAIAAANIgoAAIAAAVIAmAAIAAANIgmAAIAAAXIAqAAIAAANg");
	this.shape_9.setTransform(-48.375,14.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0067AF").s().p("AgPAqQgIgDgGgGIAMgLQADAEAFADQAEACAFAAIAEAAIAFgDIADgEIACgEQAAgGgDgCQgDgCgFgCIgJgDIgJgFQgFgCgDgEQgCgFAAgHQgBgHADgFQADgEAFgEQAEgDAFgBQAGgCAFAAQAGABAHACQAGACAFAEIgLAMQgDgEgEgCQgDgBgFAAIgEAAIgFACIgCAEIgBAFQAAAFADACQADACADABIAKAEQAFABAEADQAEACAEAFQACAEAAAHQAAAHgCAGQgDAFgEADQgEADgFACQgGABgFAAQgJAAgGgCg");
	this.shape_10.setTransform(-58.3,14.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// box
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AqdCOQgeAAAAgeIAAjfQAAgeAeAAIU7AAQAeAAAAAeIAADfQAAAegeAAg");
	this.shape_11.setTransform(0,14.2869,1,1.0018);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA, new cjs.Rectangle(-70,0.1,140,28.5), null);


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
	this.shape.graphics.f("#2BB0A3").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");

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
(lib.IFM_Display_Treat_300x250 = function(mode,startPosition,loop,reversed) {
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
	this.instance_5 = new lib.patternirisBLUE30();
	this.instance_5.setTransform(176.25,215.9,0.51,0.51,0,0,0,374.8,457.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:457.7,scaleX:2.4999,scaleY:2.4999,x:278.65,y:571},191,cjs.Ease.sineInOut).wait(1));

	// bkgd
	this.instance_6 = new lib.BKGD();
	this.instance_6.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(192));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-508.4,-448.5,1466.6999999999998,1351.8);
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