(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- <app-mind-map></app-mind-map> -->\n<!-- <app-testmind></app-testmind> -->\n\n    <app-mymindmap [mindmapdata]=\"mydata\"></app-mymindmap>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/mind-map/mind-map.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mind-map/mind-map.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mindmap-wrapper\">\n    <svg class=\"mindmapsvg\"></svg>\n    <svg class=\"movingsvg\"></svg>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/mymindmap/mymindmap.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mymindmap/mymindmap.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mindmap-wrapper\" #svgwrapper>\n    <svg class=\"mindmapsvg\" #gcontainer>\n        <g class=\"pathgroup\"></g>\n    </svg>\n    <svg class=\"dragSurface\"></svg>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/mytest/mytest.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mytest/mytest.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>mytest works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/testmind/testmind.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/testmind/testmind.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mindmap-wrapper\">\n    <svg class=\"mindmapsvg\"></svg>\n    <svg class=\"movingsvg\"></svg>\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'mindmapdemo';
        this.mydata = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.mydata = [
                {
                    text: '123',
                    parttenInfo: [
                        { width: 100, y0: 0 }, { width: 100, y0: 50 }
                    ],
                    id: '0',
                    position: { x: 0, y: 0 },
                    children: [
                        {
                            text: '122',
                            parttenInfo: [
                                { width: 100, y0: 0 }, { width: 100, y0: 50 }
                            ],
                            id: '1',
                            position: { x: 0, y: 150 },
                            children: [
                                {
                                    text: '大发大水发射',
                                    parttenInfo: [
                                        { width: 100, y0: 0 }, { width: 100, y0: 50 }
                                    ],
                                    id: '6',
                                    position: { x: 0, y: 300 },
                                    children: []
                                },
                            ]
                        },
                        {
                            text: '811',
                            parttenInfo: [
                                { width: 200, y0: 0 }, { width: 200, y0: 150 }
                            ],
                            id: '5',
                            position: { x: 300, y: 350 },
                            children: []
                        }
                    ]
                },
                {
                    text: '111',
                    parttenInfo: [
                        { width: 200, y0: 0 }, { width: 200, y0: 150 }
                    ],
                    id: '3',
                    position: { x: 300, y: 150 },
                    children: [
                        {
                            text: '911',
                            parttenInfo: [
                                { width: 200, y0: 0 }, { width: 200, y0: 150 }
                            ],
                            id: '4',
                            position: { x: 0, y: 350 },
                            children: []
                        },
                    ]
                }
            ];
        }, 0);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _mind_map_mind_map_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mind-map/mind-map.module */ "./src/app/mind-map/mind-map.module.ts");
/* harmony import */ var _testmind_testmind_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./testmind/testmind.component */ "./src/app/testmind/testmind.component.ts");
/* harmony import */ var _mymindmap_mymindmap_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mymindmap/mymindmap.component */ "./src/app/mymindmap/mymindmap.component.ts");
/* harmony import */ var _mytest_mytest_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mytest/mytest.component */ "./src/app/mytest/mytest.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _testmind_testmind_component__WEBPACK_IMPORTED_MODULE_6__["TestmindComponent"],
                _mymindmap_mymindmap_component__WEBPACK_IMPORTED_MODULE_7__["MymindmapComponent"],
                _mytest_mytest_component__WEBPACK_IMPORTED_MODULE_8__["MytestComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _mind_map_mind_map_module__WEBPACK_IMPORTED_MODULE_5__["MindMapModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/mind-map/mind-map.component.css":
/*!*************************************************!*\
  !*** ./src/app/mind-map/mind-map.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mindmap-wrapper{\r\n    height: 100%;\r\n}\r\n.mindmapsvg{\r\n    height:100%;\r\n    width: 100%;\r\n}\r\n.movingsvg{\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    display: none;\r\n    overflow: visible !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWluZC1tYXAvbWluZC1tYXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLGFBQWE7SUFDYiw0QkFBNEI7QUFDaEMiLCJmaWxlIjoic3JjL2FwcC9taW5kLW1hcC9taW5kLW1hcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1pbmRtYXAtd3JhcHBlcntcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4ubWluZG1hcHN2Z3tcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLm1vdmluZ3N2Z3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/mind-map/mind-map.component.ts":
/*!************************************************!*\
  !*** ./src/app/mind-map/mind-map.component.ts ***!
  \************************************************/
/*! exports provided: MindMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MindMapComponent", function() { return MindMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);




var MindMapComponent = /** @class */ (function () {
    function MindMapComponent() {
        this.mindmapData = [];
        this.formatMindmapData = [];
        this.preMindmapData = [];
        this.preFormatMindmapData = [];
        this.currentDraggingData = null;
        this.currentDraggingDataDirectParentId = null;
        this.movingMindmapData = [];
        this.formatMovingMindmapData = [];
    }
    MindMapComponent.prototype.ngOnInit = function () {
        this.movingMindmapsvg = d3__WEBPACK_IMPORTED_MODULE_2__["select"]('svg.movingsvg');
        this.getData();
    };
    MindMapComponent.prototype.getData = function () {
        this.mindmapData = [
            {
                text: '123',
                parttenInfo: [
                    { width: 200, y0: 0 }, { width: 200, y0: 150 }
                ],
                id: 0,
                position: { x: 0, y: 0 },
                children: [
                    {
                        text: '122',
                        parttenInfo: [
                            { width: 200, y0: 0 }, { width: 200, y0: 150 }
                        ],
                        id: 1,
                        position: { x: 0, y: 150 },
                        children: [
                            {
                                text: '111',
                                parttenInfo: [
                                    { width: 200, y0: 0 }, { width: 200, y0: 150 }
                                ],
                                id: 3,
                                position: { x: 0, y: 150 },
                                children: []
                            }
                        ]
                    },
                ]
            },
        ];
        this.formatMindmapData = this.doFormatArrayData(this.mindmapData[0]);
        this.mindmapsvg = d3__WEBPACK_IMPORTED_MODULE_2__["select"]('svg.mindmapsvg')
            .append('g')
            .classed('originwrap', true);
        this.initMindMapSvg();
    };
    MindMapComponent.prototype.initMindMapSvg = function () {
        var _this = this;
        // this.mindmapsvg = D3.select('svg.mindmapsvg')
        // .append('g')
        // .classed('originwrap',true)
        var node = this.mindmapsvg.selectAll('g')
            .data([_this.formatMindmapData]);
        this.initNode(node);
    };
    MindMapComponent.prototype.initNode = function (node) {
        console.log(this.formatMindmapData);
        var _this = this;
        var drawtype = d3__WEBPACK_IMPORTED_MODULE_2__["area"]()
            .x0(function (d) {
            return 0;
        })
            .x1(function (d) {
            return d.width;
        })
            .y(function (d) {
            return d.y0;
        });
        var wrappernode = node.enter().append('g')
            .each(function (d) {
            d3__WEBPACK_IMPORTED_MODULE_2__["select"](this).classed("blocklyDraggable" + d.data.id, true);
        });
        // .classed('blocklyDraggable',true)
        // node.exit().remove()
        node.exit()
            .each(function (d) {
            if (d.data.id == _this.currentDraggingData.id) {
                d3__WEBPACK_IMPORTED_MODULE_2__["select"](this).remove();
            }
        });
        wrappernode
            .attr("transform", function (d) {
            return "translate(" + d.data.position.x + "," + d.data.position.y + ")";
        })
            .append('path')
            .attr("stroke", "#555")
            .attr("stroke-opacity", 0.4)
            .attr("stroke-width", 1.5)
            .attr('fill', '#ffee4d')
            .classed('mytest', function (d) {
            return true;
        })
            .attr('d', function (d) {
            return drawtype(d.data.parttenInfo);
        })
            .each(function (data) {
            // debugger
            if (data.children) {
                var t = d3__WEBPACK_IMPORTED_MODULE_2__["select"](this.parentNode).selectAll('g')
                    .data(data.children, function (data) {
                    return data.data.id;
                });
                _this.initNode(t);
            }
        })
            .on('click', function (data) {
            console.log(data);
        })
            .call(d3__WEBPACK_IMPORTED_MODULE_2__["drag"]()
            .container(function (d) {
            return this.farthestViewportElement;
        })
            .subject(function (data) {
            var t = d3__WEBPACK_IMPORTED_MODULE_2__["select"](this.parentNode).attr('transform').split(',');
            var clientx = Number(t[0].split('(')[1]);
            var clienty = Number(t[1].split(')')[0]);
            return { x: clientx, y: clienty };
        })
            .on('start', function (d) {
            //找出当前的this代表的数据在总的mindmapdata中归属于哪个对象
            // console.log(d)
            var nodelist = d.ancestors();
            var parent = nodelist[nodelist.length - 1];
            var self = nodelist[0];
            var selfDirectParent = nodelist[1];
            _this.changeMindMapData(parent, self, selfDirectParent);
            _this.activeMovingSvg();
        })
            .on('drag', function (data) {
            var t = d3__WEBPACK_IMPORTED_MODULE_2__["select"](this.parentNode);
            t.attr('transform', "translate(" + (d3__WEBPACK_IMPORTED_MODULE_2__["event"].subject.x += d3__WEBPACK_IMPORTED_MODULE_2__["event"].dx) + "," + (d3__WEBPACK_IMPORTED_MODULE_2__["event"].subject.y += d3__WEBPACK_IMPORTED_MODULE_2__["event"].dy) + ")");
        })
            .on('end', function (d) {
            d.data.position.x = (d3__WEBPACK_IMPORTED_MODULE_2__["event"].subject.x += d3__WEBPACK_IMPORTED_MODULE_2__["event"].dx);
            d.data.position.y = (d3__WEBPACK_IMPORTED_MODULE_2__["event"].subject.x += d3__WEBPACK_IMPORTED_MODULE_2__["event"].dx);
            _this.movingMindmapData = [];
            _this.resetMindMapData();
        }));
        wrappernode
            .append('text')
            .attr("y", function (d) {
            return 10;
        })
            .style("fill", "red")
            .text(function (d) {
            return d.data.text;
        })
            .attr('dy', '.35em');
    };
    MindMapComponent.prototype.changeMindMapData = function (parentdata, selfdata, selfDirectParentdata) {
        // let _this = this
        var parentid = parentdata.data.id;
        var selfid = selfdata.data.id;
        //self的祖先parent
        var parent = lodash__WEBPACK_IMPORTED_MODULE_3__["find"](this.mindmapData, { id: parentid });
        var self = this.getSelfFromTree(parent, selfid);
        // console.log(self)
        //首先将当前的mindmapdata深拷贝保存一下 然后改变mindmapdata 将正在拖拽的东西及其children删除 并将其添加到movingsvg中进行运动
        this.preMindmapData = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](this.mindmapData);
        this.preFormatMindmapData = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](this.formatMindmapData);
        this.currentDraggingData = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](self);
        //self没有直接父元素的时候（可能这时候self本身没有父元素）
        if (!selfDirectParentdata) {
            //此时没有父元素 那么 它的父元素就是mindmapdata
            lodash__WEBPACK_IMPORTED_MODULE_3__["remove"](this.mindmapData, { id: self.id });
            // this.movingMindmapData.push(this.currentDraggingData)
        }
        else {
            //此时有直接父元素 对直接父元素进行操作，将其children删除
            var directParent = this.getSelfFromTree(parent, selfDirectParentdata.data.id);
            this.currentDraggingDataDirectParentId = directParent.id;
            lodash__WEBPACK_IMPORTED_MODULE_3__["remove"](directParent.children, { id: self.id });
            // this.movingMindmapData.push(this.currentDraggingData)
        }
        this.movingMindmapData.push(this.currentDraggingData);
        //更新一下formatmindmapdata
        this.formatMindmapData = this.doFormatArrayData(this.mindmapData[0]);
        //去除多余的mindmapsvg
        var newnode = this.mindmapsvg.selectAll('g')
            .data(this.formatMindmapData, function (d) {
            return d.data.id;
        });
        this.initNode(newnode);
    };
    MindMapComponent.prototype.updateSvgNode = function (node) {
        var _this = this;
        var drawtype = d3__WEBPACK_IMPORTED_MODULE_2__["area"]()
            .x0(function (d) {
            return 0;
        })
            .x1(function (d) {
            return d.width;
        })
            .y(function (d) {
            return d.y0;
        });
    };
    MindMapComponent.prototype.getSelfFromTree = function (data, targetid, target) {
        var _this_1 = this;
        if (target === void 0) { target = null; }
        if (!target) {
            if (lodash__WEBPACK_IMPORTED_MODULE_3__["isArray"](data)) {
                var t = lodash__WEBPACK_IMPORTED_MODULE_3__["find"](data, { id: targetid });
                if (t) {
                    target = t;
                }
                else {
                    data.forEach(function (element) {
                        var t = _this_1.getSelfFromTree(element, targetid, target);
                        if (t) {
                            target = t;
                        }
                    });
                }
                return target;
            }
            else if (lodash__WEBPACK_IMPORTED_MODULE_3__["isPlainObject"](data)) {
                if (data.id == targetid) {
                    target = data;
                }
                else {
                    data.children.forEach(function (element) {
                        var t = _this_1.getSelfFromTree(element, targetid, target);
                        if (t) {
                            target = t;
                        }
                    });
                }
                return target && target;
            }
        }
        // else{
        //   return target
        // }
    };
    MindMapComponent.prototype.activeMovingSvg = function () {
        //将movingmindmapdata格式化再对应视图
        var _this = this;
        var drawtype = d3__WEBPACK_IMPORTED_MODULE_2__["area"]()
            .x0(function (d) {
            return 0;
        })
            .x1(function (d) {
            return d.width;
        })
            .y(function (d) {
            return d.y0;
        });
        this.movingMindmapsvg
            .classed('actived', true);
        this.formatMovingMindmapData = this.doFormatArrayData(this.movingMindmapData);
        var node = this.movingMindmapsvg
            .append('g')
            .classed('movingwrapper', true)
            .selectAll('g')
            .data(_this.formatMovingMindmapData, function (d) {
            return d.data.id;
        });
        var wrapnode = node.enter().append('g').classed('blocklyDraggable', true);
        node.exit().remove();
        wrapnode
            .attr("transform", function (d) {
            return "translate(" + d.data.position.x + "," + d.data.position.y + ")";
        })
            .append('path')
            .attr("stroke", "#555")
            .attr("stroke-opacity", 0.4)
            .attr("stroke-width", 1.5)
            .attr('fill', '#ffee4d')
            .classed('mytest', function (d) {
            return true;
        })
            .attr('d', function (d) {
            return drawtype(d.data.parttenInfo);
        });
    };
    MindMapComponent.prototype.resetMindMapData = function () {
        var _this = this;
        if (lodash__WEBPACK_IMPORTED_MODULE_3__["find"](this.preMindmapData, { id: this.currentDraggingData.id })) {
            this.mindmapData.push(lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](this.currentDraggingData));
        }
        else {
            //currentDraggingData有直接父元素
            this.mindmapData;
            var directparent = this.getSelfFromTree(this.mindmapData, this.currentDraggingDataDirectParentId);
            directparent.children.push(lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](this.currentDraggingData));
            var test = this.doFormatArrayData(this.currentDraggingData);
            var node = this.mindmapsvg.select('g.blocklyDraggable1').selectAll('g')
                .data([test], function (d) {
                return d.data.id;
            });
            // .each(
            //   function(d){
            //     debugger
            //   }
            // )
            // .enter()
            // .append('g')
            this.initNode(node);
        }
        //更新一下formatmindmapdata
        this.formatMindmapData = this.doFormatArrayData(this.mindmapData[0]);
        debugger;
        //  去除多余的mindmapsvg
        // this.mindmapsvg.select('g').remove()
        // this.initMindMapSvg()
        this.movingMindmapsvg
            .classed('actived', false)
            .select('g')
            .remove();
    };
    MindMapComponent.prototype.doFormatArrayData = function (data) {
        //格式化数据
        var target = [];
        var tree = d3__WEBPACK_IMPORTED_MODULE_2__["cluster"]();
        // data.forEach((item)=>{
        //   item = D3.hierarchy(item) 
        //   target.push(item)
        // })
        target = d3__WEBPACK_IMPORTED_MODULE_2__["hierarchy"](data);
        // debugger
        return target;
    };
    MindMapComponent.prototype.mytest = function (data) {
        var _this = this;
        data
            .each(function (data) {
            if (data.children) {
                var t = d3__WEBPACK_IMPORTED_MODULE_2__["select"](this.parentNode).selectAll('g')
                    .data(data.children, function (data) {
                    return data.data.id;
                });
                _this.mytest(t);
            }
        });
    };
    MindMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mind-map',
            template: __webpack_require__(/*! raw-loader!./mind-map.component.html */ "./node_modules/raw-loader/index.js!./src/app/mind-map/mind-map.component.html"),
            styles: [__webpack_require__(/*! ./mind-map.component.css */ "./src/app/mind-map/mind-map.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MindMapComponent);
    return MindMapComponent;
}());



/***/ }),

/***/ "./src/app/mind-map/mind-map.module.ts":
/*!*********************************************!*\
  !*** ./src/app/mind-map/mind-map.module.ts ***!
  \*********************************************/
/*! exports provided: MindMapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MindMapModule", function() { return MindMapModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _mind_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mind-map.component */ "./src/app/mind-map/mind-map.component.ts");




var MindMapModule = /** @class */ (function () {
    function MindMapModule() {
    }
    MindMapModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_mind_map_component__WEBPACK_IMPORTED_MODULE_3__["MindMapComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [_mind_map_component__WEBPACK_IMPORTED_MODULE_3__["MindMapComponent"]]
        })
    ], MindMapModule);
    return MindMapModule;
}());



/***/ }),

/***/ "./src/app/mymindmap/mymindmap.component.css":
/*!***************************************************!*\
  !*** ./src/app/mymindmap/mymindmap.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mindmap-wrapper{\r\n    height:100%;\r\n    width: 100%;\r\n}\r\n.mindmapsvg{\r\n    height:100%;\r\n    width: 100%;\r\n}\r\n.dragSurface{\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    display: none;\r\n    overflow: visible !important;\r\n    /* background: red; */\r\n}\r\n.actived.dragSurface{\r\n    display: block;\r\n \r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXltaW5kbWFwL215bWluZG1hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7QUFDZjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsYUFBYTtJQUNiLDRCQUE0QjtJQUM1QixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGNBQWM7O0FBRWxCIiwiZmlsZSI6InNyYy9hcHAvbXltaW5kbWFwL215bWluZG1hcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1pbmRtYXAtd3JhcHBlcntcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLm1pbmRtYXBzdmd7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5kcmFnU3VyZmFjZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcclxuICAgIC8qIGJhY2tncm91bmQ6IHJlZDsgKi9cclxufVxyXG4uYWN0aXZlZC5kcmFnU3VyZmFjZXtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/mymindmap/mymindmap.component.ts":
/*!**************************************************!*\
  !*** ./src/app/mymindmap/mymindmap.component.ts ***!
  \**************************************************/
/*! exports provided: MymindmapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MymindmapComponent", function() { return MymindmapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var MymindmapComponent = /** @class */ (function () {
    function MymindmapComponent(document) {
        this.document = document;
        this._mindmapdata = [];
        this.formatMindmapLinklist = []; //经过格式化后的link数据集合
        this.mindmapSvg = null;
        this.dragSurface = null;
        this.currentDraggingDataId = null;
        this.currentDraggingData = null;
        this.currentDraggingCoor = null;
        //最后将要落点的id
        this.currentAboutToDropTargetId = null;
        this.positionCompareTrigger$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.wrapperClientTop = 0;
        this.wrapperClientLeft = 0;
    }
    Object.defineProperty(MymindmapComponent.prototype, "mindmapdata", {
        get: function () {
            return this._mindmapdata;
        },
        set: function (data) {
            this._mindmapdata = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](data);
            this.initMindmapData(this._mindmapdata);
        },
        enumerable: true,
        configurable: true
    });
    MymindmapComponent.prototype.ngOnInit = function () {
        this.initToolList();
    };
    MymindmapComponent.prototype.initToolList = function () {
        this.mindmapSvg = d3__WEBPACK_IMPORTED_MODULE_2__["select"]('svg.mindmapsvg').append('g').classed('originWrapper', true);
        d3__WEBPACK_IMPORTED_MODULE_2__["select"]('svg.mindmapsvg').append('g').classed('originPathWrapper', true);
        this.dragSurface = d3__WEBPACK_IMPORTED_MODULE_2__["select"]('svg.dragSurface').attr('transform', "translate(0,0)");
        this.initComparePositionWatcher();
    };
    MymindmapComponent.prototype.initComparePositionWatcher = function () {
        var _this_1 = this;
        //初始化位置比较的观察者
        this.positionCompareTrigger$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounce"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["interval"])(300); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function () {
            if (_this_1.currentDraggingData.length == 0) {
                //给一定的响应时间 如果在响应时间之前就已经drop了 那么这个时候不应该再去执行位置检测操作
                return false;
            }
            else {
                return true;
            }
        }))
            .subscribe(function (res) {
            var _this = _this_1;
            var list = d3__WEBPACK_IMPORTED_MODULE_2__["select"]('svg.mindmapsvg').selectAll('g.draggingwrapper');
            _this_1.currentDraggingCoor = res;
            _this_1.currentAboutToDropTargetId = null;
            _this_1.doCheckDataChange();
            if (_this_1.currentAboutToDropTargetId) {
                list.each(function (d) {
                    if (d.data.id == _this.currentAboutToDropTargetId) {
                        d3__WEBPACK_IMPORTED_MODULE_2__["select"](this).classed('aboutToDrop', true);
                    }
                    else {
                        d3__WEBPACK_IMPORTED_MODULE_2__["select"](this).classed('aboutToDrop', false);
                    }
                });
            }
            else {
                list.each(function (d) {
                    d3__WEBPACK_IMPORTED_MODULE_2__["select"](this).classed('aboutToDrop', false);
                });
            }
        });
    };
    MymindmapComponent.prototype.initMindmapData = function (target) {
        //在此处理一下mindmap的数据，下一步再进行渲染
        this.countMindmapLinks();
        var array = [];
        var linksArray = [];
        target.forEach(function (item) {
            var root = d3__WEBPACK_IMPORTED_MODULE_2__["hierarchy"](item);
            var list = root.links();
            linksArray = lodash__WEBPACK_IMPORTED_MODULE_3__["concat"](linksArray, list);
            array.push(root);
        });
        linksArray;
        // debugger
        // console.log(this.formatMindmapLinklist)
        this.initMindmapSvg(array);
        this.initMindmapLinks(linksArray);
    };
    MymindmapComponent.prototype.countMindmapLinks = function () {
        //在这里需要根据每个方块的位置和大小 计算出其对应的坐标，然后将其中的link整理出来 放在统一个数组里面保存 每次渲染mindmap的时候 都需要重新计算 并渲染相应的link
        //输入口和输出口应该是有对应关系的 目前暂定模式为水平和竖直 先写死竖直
        //清理之前的link数据 后面重新计算生成
        // this.formatMindmapLinklist = []
        this.countOutputAndImportData(this._mindmapdata, 'vertical');
    };
    MymindmapComponent.prototype.countOutputAndImportData = function (data, type) {
        var _this_1 = this;
        if (type == 'vertical') {
            //垂直方向
            if (lodash__WEBPACK_IMPORTED_MODULE_3__["isArray"](data)) {
                data.forEach(function (element) {
                    _this_1.countOutputAndImportData(element, type);
                });
            }
            else if (lodash__WEBPACK_IMPORTED_MODULE_3__["isPlainObject"](data)) {
                var height = data.parttenInfo[0].y0 > data.parttenInfo[1].y0 ? data.parttenInfo[0].y0 : data.parttenInfo[1].y0;
                var width = data.parttenInfo[0].width > data.parttenInfo[1].width ? data.parttenInfo[0].width : data.parttenInfo[1].width;
                data.importNode = {
                    x: data.position.x + width / 2,
                    y: data.position.y
                },
                    data.outputNode = {
                        x: data.position.x + width / 2,
                        y: data.position.y + height
                    };
                if (data.children && data.children.length > 0) {
                    this.countOutputAndImportData(data.children, type);
                }
            }
        }
    };
    MymindmapComponent.prototype.initMindmapSvg = function (target) {
        var _this = this;
        // 长方形area
        var drawtype = d3__WEBPACK_IMPORTED_MODULE_2__["area"]()
            .x0(function (d) {
            return 0;
        })
            .x1(function (d) {
            return d.width;
        })
            .y(function (d) {
            return d.y0;
        });
        var svg = d3__WEBPACK_IMPORTED_MODULE_2__["select"]('svg.mindmapsvg')
            .selectAll('g.originWrapper')
            .selectAll('g.block')
            .data(target, function (d) {
            return d.data.id;
        });
        svg
            .enter()
            .append('g')
            .classed('block', true);
        svg.exit().remove();
        d3__WEBPACK_IMPORTED_MODULE_2__["select"]('svg.mindmapsvg')
            .selectAll('g.originWrapper')
            .selectAll('g.block')
            .each(function (d) {
            var mydata = d.descendants();
            var mynode = d3__WEBPACK_IMPORTED_MODULE_2__["select"](this)
                .selectAll('g')
                .data(mydata, function (d) {
                return d.data.id;
            });
            mynode.exit().remove();
            var wrapper = mynode
                .enter()
                .append('g')
                .classed('draggingwrapper', true)
                .attr("transform", function (d) {
                return "translate(" + d.data.position.x + "," + d.data.position.y + ")";
            });
            wrapper
                .append('path')
                // .attr("stroke","#555")
                .attr("stroke-opacity", 0.4)
                .attr("stroke-width", 1.5)
                // .attr('fill', '#ffee4d')
                .classed('mydragpath', function (d) {
                return true;
            })
                .attr('d', function (d) {
                return drawtype(d.data.parttenInfo);
            })
                .call(d3__WEBPACK_IMPORTED_MODULE_2__["drag"]()
                .container(function (d) {
                return _this.gcontainer.nativeElement;
                // return this.ownerDocument
            })
                .subject(function (data) {
                var t = d3__WEBPACK_IMPORTED_MODULE_2__["select"](this.parentNode)
                    .attr('transform').split(',');
                var clientx = Number(t[0].split('(')[1]);
                var clienty = Number(t[1].split(')')[0]);
                return { x: clientx, y: clienty };
            })
                .on('start', function (d) {
                //找出当前的this代表的数据在总的mindmapdata中归属于哪个对象
                // console.log(d)
                _this.changeMindmapSvg(d);
                _this.initDragSurface();
                // _this.initMindmapData(_this._mindmapdata)
            })
                .on('drag', function (data) {
                // let t = D3.select(this.parentNode)
                // console.log('drag')
                var t = d3__WEBPACK_IMPORTED_MODULE_2__["select"]('svg.dragSurface')
                    .attr('transform').split(',');
                // let clientx = Number(t[0].split('(')[1])
                // let clienty = Number(t[1].split(')')[0])    
                var dragsurfaceCoor = d3__WEBPACK_IMPORTED_MODULE_2__["mouse"](_this.gcontainer.nativeElement);
                d3__WEBPACK_IMPORTED_MODULE_2__["select"]('svg.dragSurface').attr('transform', "translate(" + (d3__WEBPACK_IMPORTED_MODULE_2__["event"].subject.x + _this.wrapperClientLeft) + "," + (d3__WEBPACK_IMPORTED_MODULE_2__["event"].subject.y + _this.wrapperClientTop) + ")");
                d3__WEBPACK_IMPORTED_MODULE_2__["select"](this.parentNode).attr('transform', "translate(" + (d3__WEBPACK_IMPORTED_MODULE_2__["event"].subject.x += d3__WEBPACK_IMPORTED_MODULE_2__["event"].dx) + "," + (d3__WEBPACK_IMPORTED_MODULE_2__["event"].subject.y += d3__WEBPACK_IMPORTED_MODULE_2__["event"].dy) + ")");
                //dragsurface的相对于mindmapsvg的坐标和鼠标坐标
                var obj = {
                    x: d3__WEBPACK_IMPORTED_MODULE_2__["event"].subject.x + _this.wrapperClientLeft,
                    y: d3__WEBPACK_IMPORTED_MODULE_2__["event"].subject.y + _this.wrapperClientTop,
                    mousecoor: dragsurfaceCoor,
                    parttenInfo: lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](data.data.parttenInfo)
                };
                _this.positionCompareTrigger$.next(obj);
            })
                .on('end', function (d) {
                var dragsurfaceCoor = d3__WEBPACK_IMPORTED_MODULE_2__["mouse"](_this.gcontainer.nativeElement);
                var mydata = {
                    x: d3__WEBPACK_IMPORTED_MODULE_2__["event"].subject.x + _this.wrapperClientLeft,
                    y: d3__WEBPACK_IMPORTED_MODULE_2__["event"].subject.y + _this.wrapperClientTop,
                    mousecoor: dragsurfaceCoor,
                    parttenInfo: lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](d.data.parttenInfo)
                };
                _this.doCheckDataChange(mydata);
                // debugger
                var obj = {
                    x: d.data.position.x - (d3__WEBPACK_IMPORTED_MODULE_2__["event"].subject.x += d3__WEBPACK_IMPORTED_MODULE_2__["event"].dx),
                    y: d.data.position.y - (d3__WEBPACK_IMPORTED_MODULE_2__["event"].subject.y += d3__WEBPACK_IMPORTED_MODULE_2__["event"].dy)
                };
                _this.rewriteMindmapData(d, obj);
                // D3.select('svg.dragSurface').attr('transform', `translate(${0},${0})`)
                d3__WEBPACK_IMPORTED_MODULE_2__["select"]('svg.dragSurface').classed('actived', false);
                d3__WEBPACK_IMPORTED_MODULE_2__["select"]('g.aboutToDrop').classed('aboutToDrop', false);
                _this.reset();
            }))
                .each(function (d) {
                d3__WEBPACK_IMPORTED_MODULE_2__["select"](this.parentNode)
                    .append('text')
                    .attr("y", function (d) {
                    return 10;
                })
                    .style("fill", "red")
                    .classed('textbox', true)
                    .html(function (d) {
                    return "" + d.data.text;
                })
                    .attr('dy', '.35em');
                // D3.select(this.parentNode)
                // .append('text')
                // .attr("y",function(d){
                //   return 20
                // })
                // .style("fill", "red")
                // .classed('textbox',true)
                // .html(function(d){
                //   return `${d.data.text}`
                // })
                // .attr('dy','.35em')
                // D3.select(this.parentNode)
                // .append('foreignObject')
                // .attr('width', '60px')
                // .attr('height', '50px')
                // .attr('x', 0) 
                // .append('xhtml:div').style('height','100%').style('width','100%').style('overflow','scroll')
                // .append('xhtml:app-mytest')
                // .html(`asdfas
                // dadsf
                // asdfas
                // dfa
                // sdf`)
                // .on('click',function(d){
                //   console.log(d)
                // })
            });
        });
    };
    MymindmapComponent.prototype.initMindmapLinks = function (data) {
        // debugger
        var target = [];
        data.forEach(function (element) {
            var obj = {
                source: {
                    x: element.source.data.outputNode.x,
                    y: element.source.data.outputNode.y
                },
                target: {
                    x: element.target.data.importNode.x,
                    y: element.target.data.importNode.y
                }
            };
            target.push(obj);
        });
        var linktype = d3__WEBPACK_IMPORTED_MODULE_2__["linkVertical"]()
            .x(function (d) {
            // debugger
            return d.x;
        })
            .y(function (d) {
            return d.y;
        });
        d3__WEBPACK_IMPORTED_MODULE_2__["select"]('svg.mindmapsvg')
            .select('g.originPathWrapper')
            .attr("fill", "none")
            .selectAll('path')
            .data(target)
            .join('path')
            .attr('stroke', 'red')
            // .attr("stroke", "#555")
            .attr("stroke-opacity", 0.4)
            .attr("stroke-width", 2)
            .attr('d', linktype);
    };
    MymindmapComponent.prototype.initDragSurface = function () {
        //拖拽时候的浮层
        this.handleAddRelativeCoor(this.currentDraggingData, true);
        d3__WEBPACK_IMPORTED_MODULE_2__["select"]('svg.dragSurface').attr('transform', "translate(" + (this.currentDraggingData.position.x + this.wrapperClientLeft) + "," + (this.currentDraggingData.position.y + this.wrapperClientTop) + ")");
        d3__WEBPACK_IMPORTED_MODULE_2__["select"]('svg.dragSurface').classed('actived', true);
        var drawtype = d3__WEBPACK_IMPORTED_MODULE_2__["area"]()
            .x0(function (d) {
            return 0;
        })
            .x1(function (d) {
            return d.width;
        })
            .y(function (d) {
            return d.y0;
        });
        var array = [];
        var root = d3__WEBPACK_IMPORTED_MODULE_2__["hierarchy"](this.currentDraggingData);
        array.push(root);
        var svg = d3__WEBPACK_IMPORTED_MODULE_2__["select"]('svg.dragSurface')
            .selectAll('g.block')
            .data(array, function (d) {
            return d.data.id;
        });
        svg
            .enter()
            .append('g')
            .classed('block', true);
        svg.exit().remove();
        d3__WEBPACK_IMPORTED_MODULE_2__["select"]('svg.dragSurface')
            .selectAll('g.block')
            .each(function (d) {
            var mydata = d.descendants();
            var mynode = d3__WEBPACK_IMPORTED_MODULE_2__["select"](this)
                .selectAll('g')
                .data(mydata, function (d) {
                return d.data.id;
            });
            mynode.exit().remove();
            mynode
                .enter()
                .append('g')
                .classed('draggingwrapper', true)
                .attr("transform", function (d) {
                if (d.data.relativecoor) {
                    return "translate(" + d.data.relativecoor.x + "," + d.data.relativecoor.y + ")";
                }
            })
                .append('path')
                .attr("stroke", "#555")
                .attr("stroke-opacity", 0.4)
                .attr("stroke-width", 1.5)
                .attr('fill', '#ffee4d')
                .attr('d', function (d) {
                return drawtype(d.data.parttenInfo);
            })
                .each(function (d) {
                d3__WEBPACK_IMPORTED_MODULE_2__["select"](this.parentNode)
                    .append('text')
                    .attr("y", function (d) {
                    return 10;
                })
                    .style("fill", "red")
                    .text(function (d) {
                    return d.data.text;
                })
                    .attr('dy', '.35em');
            });
        });
        //删除mindmap多余部分
        this.initMindmapData(this._mindmapdata);
    };
    MymindmapComponent.prototype.handleAddRelativeCoor = function (data, isAncestor, parentcoor) {
        var _this_1 = this;
        //计算拖拽物体每个的相对距离
        if (!data || data.length == 0)
            return;
        if (isAncestor) {
            data.relativecoor = { x: 0, y: 0 };
        }
        else {
            data.relativecoor = {
                x: data.position.x - parentcoor.x,
                y: data.position.y - parentcoor.y,
            };
        }
        if (data.children) {
            data.children.forEach(function (element) {
                var obj = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](data.position);
                var coor = {
                    x: obj.x - data.relativecoor.x,
                    y: obj.y - data.relativecoor.y
                };
                _this_1.handleAddRelativeCoor(element, false, coor);
            });
        }
    };
    MymindmapComponent.prototype.rewriteMindmapData = function (data, obj) {
        //拖拽结束后触发
        //重写mindmapdata  在这里可能改变mindmap的嵌套关系
        if (this.currentAboutToDropTargetId) {
            //如果id为数字0的时候 可能会逃过这个分支 所以需要另作判断
            var directparent = this.getSelfFromTree(this._mindmapdata, this.currentAboutToDropTargetId);
            this.handleCountCurrentDraggingData(this.currentDraggingData, obj);
            directparent.children.push(lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](this.currentDraggingData));
            this.currentAboutToDropTargetId = null;
        }
        else {
            //没有droptargetid  就不改变结构
            var formatnodelist = data.ancestors();
            this.handleCountCurrentDraggingData(this.currentDraggingData, obj);
            if (formatnodelist.length > 1) {
                //祖先不是自己
                var parent_1 = this.getSelfFromTree(this._mindmapdata, formatnodelist[1].data.id);
                parent_1.children.push(lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](this.currentDraggingData));
            }
            else {
                //祖先就是自己
                this._mindmapdata.push(lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](this.currentDraggingData));
            }
        }
    };
    MymindmapComponent.prototype.handleCountCurrentDraggingData = function (target, data) {
        var _this_1 = this;
        if (!target)
            return;
        target.position.x -= data.x;
        target.position.y -= data.y;
        if (target.children.length > 0) {
            target.children.forEach(function (element) {
                _this_1.handleCountCurrentDraggingData(element, data);
            });
        }
        this.handleRemoveRelativeCoor(this.currentDraggingData);
    };
    MymindmapComponent.prototype.handleRemoveRelativeCoor = function (data) {
        var _this_1 = this;
        if (!data || data.length == 0)
            return;
        delete data.relativecoor;
        if (data.children) {
            data.children.forEach(function (element) {
                _this_1.handleRemoveRelativeCoor(element);
            });
        }
    };
    MymindmapComponent.prototype.getSelfFromTree = function (data, targetid, target) {
        var _this_1 = this;
        if (target === void 0) { target = null; }
        if (!target) {
            if (lodash__WEBPACK_IMPORTED_MODULE_3__["isArray"](data)) {
                var t = lodash__WEBPACK_IMPORTED_MODULE_3__["find"](data, { id: targetid });
                if (t) {
                    target = t;
                }
                else {
                    data.forEach(function (element) {
                        var t = _this_1.getSelfFromTree(element, targetid, target);
                        if (t) {
                            target = t;
                        }
                    });
                }
                return target;
            }
            else if (lodash__WEBPACK_IMPORTED_MODULE_3__["isPlainObject"](data)) {
                if (data.id == targetid) {
                    target = data;
                }
                else {
                    data.children.forEach(function (element) {
                        var t = _this_1.getSelfFromTree(element, targetid, target);
                        if (t) {
                            target = t;
                        }
                    });
                }
                return target && target;
            }
        }
    };
    MymindmapComponent.prototype.reset = function () {
        this.initMindmapData(this._mindmapdata);
        // this.initMindmapSvg([])
        // let array = []
        // this._mindmapdata.forEach((item)=>{
        //   let root = D3.hierarchy(item)
        //   array.push(root)
        // })
        this.currentDraggingCoor = null;
        // this.initMindmapSvg(array)
        this.clearDragSurface();
    };
    MymindmapComponent.prototype.changeMindmapSvg = function (data) {
        //该点的祖先元素
        var formatnodelist = data.ancestors();
        var self;
        if (formatnodelist.length > 1) {
            //将自身从直接父元素种删除
            var directparent = this.getSelfFromTree(this._mindmapdata, formatnodelist[1].data.id);
            self = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](this.getSelfFromTree(directparent.children, data.data.id));
            lodash__WEBPACK_IMPORTED_MODULE_3__["remove"](directparent.children, { id: data.data.id });
        }
        else {
            //他本身即是祖先
            self = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](this.getSelfFromTree(this._mindmapdata, data.data.id));
            lodash__WEBPACK_IMPORTED_MODULE_3__["remove"](this._mindmapdata, { id: data.data.id });
        }
        this.currentDraggingData = self;
        // this.initMindmapData(this._mindmapdata)
    };
    MymindmapComponent.prototype.clearDragSurface = function () {
        this.currentDraggingData = [];
        d3__WEBPACK_IMPORTED_MODULE_2__["select"]('svg.dragSurface').selectAll('g').remove();
    };
    MymindmapComponent.prototype.doCheckDataChange = function (checkBeforeEnd) {
        //检查是否可以变更mindmap数据
        //如果可以 将可以变更的父元素记录下来 然后rewrite的时候 将拖拽的data加入其种
        //如果不行则为null  防止这种情况发生 就是一开始有选中的目标 但是我又移动了 这时候应该取消选中目标 
        //这情况应该是在drop发生的时候，如果有目标了 再进行一次检查 来做二次保险 以drop时候的结果为准
        // console.log(this.currentDraggingCoor)
        if (checkBeforeEnd) {
            //drop前的最后检测
            this.currentAboutToDropTargetId = null;
            var draggingDataCircleInfo = this.getDraggingUnrealCircleInfo(checkBeforeEnd);
            //深拷贝一份用来做判定的mindmap数据
            var compareData = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](this._mindmapdata);
            this.getUnrealCircleInfo(compareData);
            this.doDeepCompare(compareData, draggingDataCircleInfo);
        }
        else {
            if (!this.currentDraggingCoor)
                return;
            var draggingDataCircleInfo = this.getDraggingUnrealCircleInfo(this.currentDraggingCoor);
            //深拷贝一份用来做判定的mindmap数据
            var compareData = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](this._mindmapdata);
            this.getUnrealCircleInfo(compareData);
            this.doDeepCompare(compareData, draggingDataCircleInfo);
        }
    };
    MymindmapComponent.prototype.getDraggingUnrealCircleInfo = function (data) {
        //只是获取拖拽的那个path的长宽 
        var height = data.parttenInfo[0].y0 > data.parttenInfo[1].y0 ? data.parttenInfo[0].y0 : data.parttenInfo[1].y0;
        var width = data.parttenInfo[0].width > data.parttenInfo[1].width ? data.parttenInfo[0].width : data.parttenInfo[1].width;
        var obj = {
            center: {
                x: data.x + width / 2,
                y: data.y + height / 2
            },
            radius: height > width ? width / 2 : height / 2
        };
        return obj;
    };
    MymindmapComponent.prototype.getUnrealCircleInfoOfObject = function (data) {
        var height = data.parttenInfo[0].y0 > data.parttenInfo[1].y0 ? data.parttenInfo[0].y0 : data.parttenInfo[1].y0;
        var width = data.parttenInfo[0].width > data.parttenInfo[1].width ? data.parttenInfo[0].width : data.parttenInfo[1].width;
        var obj = {
            center: {
                x: data.position.x + width / 2,
                y: data.position.y + height / 2
            },
            radius: height > width ? width / 2 : height / 2
        };
        return obj;
    };
    MymindmapComponent.prototype.getUnrealCircleInfo = function (data) {
        var _this_1 = this;
        //赋予虚拟的圆心信息 ，圆心用来比较是否两块path是否重叠 重叠了即产生了可drop的target
        if (lodash__WEBPACK_IMPORTED_MODULE_3__["isArray"](data)) {
            data.forEach(function (item) {
                item.unrealCircleInfo = _this_1.getUnrealCircleInfoOfObject(item);
                if (item.children && item.children.length > 0) {
                    _this_1.getUnrealCircleInfo(item.children);
                }
            });
        }
        else if (lodash__WEBPACK_IMPORTED_MODULE_3__["isPlainObject"](data)) {
            data.unrealCircleInfo = this.getUnrealCircleInfoOfObject(data);
            if (data.children && data.children.length > 0) {
                this.getUnrealCircleInfo(data.children);
            }
        }
    };
    MymindmapComponent.prototype.doDeepCompare = function (comparedata, draggingdata) {
        //深度检测符合条件的droptarget的id  如果已经有了的话  就return掉  此处后续可能会做细化处理 比如说有了之后 后面又出来一个满足条件的 这时候比较两者谁更小 但是我想一般脑图也没有这样的需求
        // if(this.currentAboutToDropTargetId) return
        var _this_1 = this;
        if (lodash__WEBPACK_IMPORTED_MODULE_3__["isArray"](comparedata)) {
            comparedata.forEach(function (item) {
                _this_1.doDeepCompare(item, draggingdata);
            });
        }
        else if (lodash__WEBPACK_IMPORTED_MODULE_3__["isPlainObject"](comparedata)) {
            // console.log(comparedata)
            var distance = Math.sqrt(Math.pow((comparedata.unrealCircleInfo.center.x - draggingdata.center.x), 2) + Math.pow((comparedata.unrealCircleInfo.center.y - draggingdata.center.y), 2));
            var maxDistanceIfCross = comparedata.unrealCircleInfo.radius + draggingdata.radius;
            if (distance <= maxDistanceIfCross) {
                this.currentAboutToDropTargetId = comparedata.id;
            }
            else {
                if (comparedata.children && comparedata.children.length > 0) {
                    this.doDeepCompare(comparedata.children, draggingdata);
                }
            }
        }
    };
    MymindmapComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], MymindmapComponent.prototype, "mindmapdata", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], MymindmapComponent.prototype, "wrapperClientTop", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], MymindmapComponent.prototype, "wrapperClientLeft", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('svgwrapper', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MymindmapComponent.prototype, "svgwrapper", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gcontainer', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MymindmapComponent.prototype, "gcontainer", void 0);
    MymindmapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mymindmap',
            template: __webpack_require__(/*! raw-loader!./mymindmap.component.html */ "./node_modules/raw-loader/index.js!./src/app/mymindmap/mymindmap.component.html"),
            styles: [__webpack_require__(/*! ./mymindmap.component.css */ "./src/app/mymindmap/mymindmap.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], MymindmapComponent);
    return MymindmapComponent;
}());



/***/ }),

/***/ "./src/app/mytest/mytest.component.css":
/*!*********************************************!*\
  !*** ./src/app/mytest/mytest.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215dGVzdC9teXRlc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/mytest/mytest.component.ts":
/*!********************************************!*\
  !*** ./src/app/mytest/mytest.component.ts ***!
  \********************************************/
/*! exports provided: MytestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MytestComponent", function() { return MytestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MytestComponent = /** @class */ (function () {
    function MytestComponent() {
    }
    MytestComponent.prototype.ngOnInit = function () {
    };
    MytestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mytest',
            template: __webpack_require__(/*! raw-loader!./mytest.component.html */ "./node_modules/raw-loader/index.js!./src/app/mytest/mytest.component.html"),
            styles: [__webpack_require__(/*! ./mytest.component.css */ "./src/app/mytest/mytest.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MytestComponent);
    return MytestComponent;
}());



/***/ }),

/***/ "./src/app/testmind/testmind.component.css":
/*!*************************************************!*\
  !*** ./src/app/testmind/testmind.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mindmap-wrapper{\r\n    height: 100%;\r\n}\r\n.mindmapsvg{\r\n    height:100%;\r\n    width: 100%;\r\n}\r\n.movingsvg{\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    display: none;\r\n    overflow: visible !important;\r\n    /* background: red; */\r\n}\r\n.actived.movingsvg{\r\n    display: block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVzdG1pbmQvdGVzdG1pbmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvdGVzdG1pbmQvdGVzdG1pbmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5taW5kbWFwLXdyYXBwZXJ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLm1pbmRtYXBzdmd7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5tb3Zpbmdzdmd7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiByZWQ7ICovXHJcbn1cclxuLmFjdGl2ZWQubW92aW5nc3Zne1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/testmind/testmind.component.ts":
/*!************************************************!*\
  !*** ./src/app/testmind/testmind.component.ts ***!
  \************************************************/
/*! exports provided: TestmindComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestmindComponent", function() { return TestmindComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);




var TestmindComponent = /** @class */ (function () {
    function TestmindComponent() {
        this.mindmapdata = [
            {
                text: '123',
                parttenInfo: [
                    { width: 200, y0: 0 }, { width: 200, y0: 150 }
                ],
                id: 0,
                position: { x: 0, y: 0 },
                children: [
                    {
                        text: '122',
                        parttenInfo: [
                            { width: 200, y0: 0 }, { width: 200, y0: 150 }
                        ],
                        id: 1,
                        position: { x: 0, y: 150 },
                        children: [
                            {
                                text: '1223',
                                parttenInfo: [
                                    { width: 200, y0: 0 }, { width: 200, y0: 150 }
                                ],
                                id: 6,
                                position: { x: 0, y: 300 },
                                children: []
                            },
                        ]
                    },
                ]
            },
        ];
        this.movingMindmapData = [];
        this.prevMindmapData = [];
        this.currentDraggingData = null;
        this.currentDraggingDataPrevParent = null;
    }
    TestmindComponent.prototype.ngOnInit = function () {
        var target = [];
        this.mindmapdata.forEach(function (d) {
            var root = d3__WEBPACK_IMPORTED_MODULE_2__["hierarchy"](d);
            target.push(root);
        });
        this.initsvg(target);
    };
    TestmindComponent.prototype.initsvg = function (target) {
        // console.log(target)
        var _this = this;
        var drawtype = d3__WEBPACK_IMPORTED_MODULE_2__["area"]()
            .x0(function (d) {
            return 0;
        })
            .x1(function (d) {
            return d.width;
        })
            .y(function (d) {
            return d.y0;
        });
        var svg = d3__WEBPACK_IMPORTED_MODULE_2__["select"]('svg.mindmapsvg')
            .selectAll('g.block')
            .data(target, function (d) {
            return d.data.id;
        });
        svg
            .enter()
            .append('g')
            .classed('block', true);
        svg.exit().remove();
        d3__WEBPACK_IMPORTED_MODULE_2__["select"]('svg.mindmapsvg')
            .selectAll('g.block')
            .each(function (d) {
            var mydata = d.descendants();
            var mynode = d3__WEBPACK_IMPORTED_MODULE_2__["select"](this)
                .selectAll('g')
                .data(mydata, function (d) {
                return d.data.id;
            });
            mynode.exit().remove();
            mynode
                .enter()
                .append('g')
                .classed('draggingwrapper', true)
                .attr("transform", function (d) {
                return "translate(" + d.data.position.x + "," + d.data.position.y + ")";
            })
                .append('path')
                .attr("stroke", "#555")
                .attr("stroke-opacity", 0.4)
                .attr("stroke-width", 1.5)
                .attr('fill', '#ffee4d')
                .classed('mytest', function (d) {
                return true;
            })
                .attr('d', function (d) {
                return drawtype(d.data.parttenInfo);
            })
                .call(d3__WEBPACK_IMPORTED_MODULE_2__["drag"]()
                .container(function (d) {
                return this.farthestViewportElement;
            })
                .subject(function (data) {
                var t = d3__WEBPACK_IMPORTED_MODULE_2__["select"](this.parentNode)
                    .attr('transform').split(',');
                var clientx = Number(t[0].split('(')[1]);
                var clienty = Number(t[1].split(')')[0]);
                return { x: clientx, y: clienty };
            })
                .on('start', function (d) {
                //找出当前的this代表的数据在总的mindmapdata中归属于哪个对象
                // console.log(d)
                _this.currentDraggingData = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](d);
                _this.prevMindmapData = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](_this.mindmapdata);
                _this.temporaryChange(d);
            })
                .on('drag', function (data) {
                // let t = D3.select(this.parentNode)
                var t = d3__WEBPACK_IMPORTED_MODULE_2__["select"]('svg.movingsvg')
                    .attr('transform').split(',');
                var clientx = Number(t[0].split('(')[1]);
                var clienty = Number(t[1].split(')')[0]);
                d3__WEBPACK_IMPORTED_MODULE_2__["select"]('svg.movingsvg').attr('transform', "translate(" + (clientx += d3__WEBPACK_IMPORTED_MODULE_2__["event"].dx) + "," + (clienty += d3__WEBPACK_IMPORTED_MODULE_2__["event"].dy) + ")");
                d3__WEBPACK_IMPORTED_MODULE_2__["select"](this.parentNode).attr('transform', "translate(" + (d3__WEBPACK_IMPORTED_MODULE_2__["event"].subject.x += d3__WEBPACK_IMPORTED_MODULE_2__["event"].dx) + "," + (d3__WEBPACK_IMPORTED_MODULE_2__["event"].subject.y += d3__WEBPACK_IMPORTED_MODULE_2__["event"].dy) + ")");
            })
                .on('end', function (d) {
                // d.data.position.x = (D3.event.subject.x += D3.event.dx)
                // d.data.position.y = (D3.event.subject.y += D3.event.dy)
                var obj = {
                    x: d.data.position.x - (d3__WEBPACK_IMPORTED_MODULE_2__["event"].subject.x += d3__WEBPACK_IMPORTED_MODULE_2__["event"].dx),
                    y: d.data.position.y - (d3__WEBPACK_IMPORTED_MODULE_2__["event"].subject.y += d3__WEBPACK_IMPORTED_MODULE_2__["event"].dy)
                };
                _this.handleCountCurrentDraggingData(_this.currentDraggingData.data, obj);
                // .attr('transform', `translate(${clienx},${clieny})`)
                _this.handleResetMindmapData();
            }))
                .each(function (d) {
                d3__WEBPACK_IMPORTED_MODULE_2__["select"](this.parentNode)
                    .append('text')
                    .attr("y", function (d) {
                    return 10;
                })
                    .style("fill", "red")
                    .text(function (d) {
                    return d.data.text;
                })
                    .attr('dy', '.35em');
            });
        });
    };
    TestmindComponent.prototype.temporaryChange = function (selfdata) {
        var nodelist = selfdata.ancestors();
        var ancestorsparent = lodash__WEBPACK_IMPORTED_MODULE_3__["find"](this.mindmapdata, { id: nodelist[nodelist.length - 1].data.id });
        var directparent = nodelist[1] ? this.getSelfFromTree(ancestorsparent, nodelist[1].data.id) : null;
        var self = this.getSelfFromTree(ancestorsparent, selfdata.data.id);
        // debugger
        if (directparent) {
            lodash__WEBPACK_IMPORTED_MODULE_3__["remove"](directparent.children, { id: self.id });
            this.currentDraggingDataPrevParent = directparent;
        }
        else {
            lodash__WEBPACK_IMPORTED_MODULE_3__["remove"](this.mindmapdata, { id: self.id });
            this.currentDraggingDataPrevParent = this.mindmapdata;
        }
        var target = [];
        this.mindmapdata.forEach(function (d) {
            var root = d3__WEBPACK_IMPORTED_MODULE_2__["hierarchy"](d);
            target.push(root);
        });
        this.initsvg(target);
        this.movingMindmapData.push(lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](this.currentDraggingData));
        this.handleMovingMindmapData();
        this.initMovingMindmapSvg();
    };
    TestmindComponent.prototype.getSelfFromTree = function (data, targetid, target) {
        var _this_1 = this;
        if (target === void 0) { target = null; }
        if (!target) {
            if (lodash__WEBPACK_IMPORTED_MODULE_3__["isArray"](data)) {
                var t = lodash__WEBPACK_IMPORTED_MODULE_3__["find"](data, { id: targetid });
                if (t) {
                    target = t;
                }
                else {
                    data.forEach(function (element) {
                        var t = _this_1.getSelfFromTree(element, targetid, target);
                        if (t) {
                            target = t;
                        }
                    });
                }
                return target;
            }
            else if (lodash__WEBPACK_IMPORTED_MODULE_3__["isPlainObject"](data)) {
                if (data.id == targetid) {
                    target = data;
                }
                else {
                    data.children.forEach(function (element) {
                        var t = _this_1.getSelfFromTree(element, targetid, target);
                        if (t) {
                            target = t;
                        }
                    });
                }
                return target && target;
            }
        }
    };
    TestmindComponent.prototype.handleResetMindmapData = function () {
        if (lodash__WEBPACK_IMPORTED_MODULE_3__["isPlainObject"](this.currentDraggingDataPrevParent)) {
            this.currentDraggingDataPrevParent.children.push(lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](this.currentDraggingData.data));
        }
        else {
            this.mindmapdata.push(lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](this.currentDraggingData.data));
        }
        this.mindmapdata;
        // this.currentDraggingData = null
        var target = [];
        this.mindmapdata.forEach(function (d) {
            var root = d3__WEBPACK_IMPORTED_MODULE_2__["hierarchy"](d);
            target.push(root);
        });
        this.initsvg(target);
        d3__WEBPACK_IMPORTED_MODULE_2__["select"]('svg.movingsvg').classed('actived', false);
        d3__WEBPACK_IMPORTED_MODULE_2__["select"]('svg.movingsvg')
            .selectAll('g.block')
            .remove();
        this.movingMindmapData = [];
    };
    TestmindComponent.prototype.handleCountCurrentDraggingData = function (target, data) {
        var _this_1 = this;
        target.position.x -= data.x;
        target.position.y -= data.y;
        console.log(target.position);
        if (target.children.length > 0) {
            target.children.forEach(function (element) {
                _this_1.handleCountCurrentDraggingData(element, data);
            });
        }
    };
    TestmindComponent.prototype.initMovingMindmapSvg = function () {
        var _this = this;
        // this.handleMovingMindmapData()
        var drawtype = d3__WEBPACK_IMPORTED_MODULE_2__["area"]()
            .x0(function (d) {
            return 0;
        })
            .x1(function (d) {
            return d.width;
        })
            .y(function (d) {
            return d.y0;
        });
        d3__WEBPACK_IMPORTED_MODULE_2__["select"]('svg.movingsvg').classed('actived', true);
        var array = [];
        _this.currentDraggingData.descendants().forEach(function (element) {
            array.push(lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](element.data.position));
        });
        var clienx = lodash__WEBPACK_IMPORTED_MODULE_3__["sortBy"](array, 'x')[0].x;
        var clieny = lodash__WEBPACK_IMPORTED_MODULE_3__["sortBy"](array, 'y')[0].y;
        d3__WEBPACK_IMPORTED_MODULE_2__["select"]('svg.movingsvg').attr('transform', "translate(" + clienx + "," + clieny + ")");
        var svg = d3__WEBPACK_IMPORTED_MODULE_2__["select"]('svg.movingsvg')
            .selectAll('g.block')
            .data(this.movingMindmapData, function (d) {
            return d.data.id;
        });
        svg
            .enter()
            .append('g')
            .classed('block', true);
        svg.exit().remove();
        d3__WEBPACK_IMPORTED_MODULE_2__["select"]('svg.movingsvg')
            .selectAll('g.block')
            .each(function (d) {
            var mydata = d.descendants();
            var mynode = d3__WEBPACK_IMPORTED_MODULE_2__["select"](this)
                .selectAll('g')
                .data(mydata, function (d) {
                return d.data.id;
            });
            mynode.exit().remove();
            mynode
                .enter()
                .append('g')
                .classed('draggingwrapper', true)
                .attr("transform", function (d) {
                console.log(d.data.position);
                return "translate(" + d.data.position.x + "," + d.data.position.y + ")";
            })
                .append('path')
                .attr("stroke", "#555")
                .attr("stroke-opacity", 0.4)
                .attr("stroke-width", 1.5)
                .attr('fill', '#ffee4d')
                .attr('d', function (d) {
                return drawtype(d.data.parttenInfo);
            })
                .each(function (d) {
                d3__WEBPACK_IMPORTED_MODULE_2__["select"](this.parentNode)
                    .append('text')
                    .attr("y", function (d) {
                    return 10;
                })
                    .style("fill", "red")
                    .text(function (d) {
                    return d.data.text;
                })
                    .attr('dy', '.35em');
            });
        });
        // console.log(this.movingMindmapData)
    };
    TestmindComponent.prototype.handleMovingMindmapData = function () {
        var array = [];
        this.currentDraggingData.descendants().forEach(function (element) {
            array.push(lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](element.data.position));
        });
        var clienx = lodash__WEBPACK_IMPORTED_MODULE_3__["sortBy"](array, 'x')[0].x;
        var clieny = lodash__WEBPACK_IMPORTED_MODULE_3__["sortBy"](array, 'y')[0].y;
        var obj = {
            x: clienx,
            y: clieny
        };
        // debugger
        this.handleCountCurrentDraggingData(this.movingMindmapData[0].data, obj);
    };
    TestmindComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-testmind',
            template: __webpack_require__(/*! raw-loader!./testmind.component.html */ "./node_modules/raw-loader/index.js!./src/app/testmind/testmind.component.html"),
            styles: [__webpack_require__(/*! ./testmind.component.css */ "./src/app/testmind/testmind.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TestmindComponent);
    return TestmindComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\nglab\mindmapdemo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map