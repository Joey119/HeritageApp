(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_dialogs/activation-mode-add/activation-mode.add.dialog.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/_dialogs/activation-mode-add/activation-mode.add.dialog.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h3 mat-dialog-title>新建活化模式</h3>\r\n  \r\n    <form class=\"mat-dialog-content\" (ngSubmit)=\"submit\" #formControl=\"ngForm\">\r\n   \r\n      <div class=\"form\">\r\n        <mat-form-field color=\"accent\">\r\n          <input matInput #input class=\"form-control\" placeholder=\"名称\" [(ngModel)]=\"data.activationModeName\" name=\"actModeName\" required />\r\n          <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"form\">\r\n        <mat-form-field color=\"accent\">\r\n          <input matInput #input class=\"form-control\" placeholder=\"上界\" [(ngModel)]=\"data.upperBound\" name=\"upperBound\" required />\r\n          <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"form\">\r\n        <mat-form-field color=\"accent\">\r\n          <input matInput #input class=\"form-control\" placeholder=\"下界\" [(ngModel)]=\"data.lowerBound\" name=\"lowerBound\" required />\r\n          <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"form\">\r\n        <mat-form-field color=\"accent\">\r\n          <textarea matInput #input class=\"form-control\" placeholder=\"描述\" [(ngModel)]=\"data.activationModeDescription\" name=\"actModeDescription\" required matTextareaAutosize matAutosizeMinRows=5 matAutosizeMaxRows=25></textarea>\r\n          <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n  \r\n      <div mat-dialog-actions>\r\n        <button mat-button [type]=\"submit\" [disabled]=\"!formControl.valid\" [mat-dialog-close]=\"1\" (click)=\"confirmAdd()\">保存</button>\r\n        <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\">取消</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/_dialogs/activation-mode-add/activation-mode.add.dialog.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/_dialogs/activation-mode-add/activation-mode.add.dialog.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  min-width: 450px; }\n\n.container > * {\n  width: 100%; }\n\n.form {\n  display: flex;\n  padding-top: 6px; }\n\n.mat-form-field {\n  font-size: 16px;\n  flex-grow: 1; }\n"

/***/ }),

/***/ "./src/app/_dialogs/activation-mode-add/activation-mode.add.dialog.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/_dialogs/activation-mode-add/activation-mode.add.dialog.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ActivationModeAddDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivationModeAddDialogComponent", function() { return ActivationModeAddDialogComponent; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_shared */ "./src/app/_shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var ActivationModeAddDialogComponent = /** @class */ (function () {
    function ActivationModeAddDialogComponent(dialogRef, data, actModeService, toastr, userService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.actModeService = actModeService;
        this.toastr = toastr;
        this.userService = userService;
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            // Validators.email,
        ]);
    }
    ActivationModeAddDialogComponent.prototype.getErrorMessage = function () {
        return this.formControl.hasError('required') ? 'Required field' :
            this.formControl.hasError('email') ? 'Not a valid email' :
                '';
    };
    ActivationModeAddDialogComponent.prototype.submit = function () {
        // emppty stuff
    };
    ActivationModeAddDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ActivationModeAddDialogComponent.prototype.confirmAdd = function () {
        var _this = this;
        if (!this.userService.canEdit()) {
            this.toastr.error("您没有添加及修改活化模式的权限。", "权限验证失败");
            return;
        }
        var userId = this.userService.currentUserId();
        this.data.createdUserId = userId;
        this.data.modifiedUserId = userId;
        this.actModeService.addActMode(_shared__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_ACTIVATION_MODE_ENDPOINT, this.data)
            .subscribe(function (data) {
            _this.newActMode = data;
            _this.toastr.success("活化模式添加成功。", "操作成功");
        }, function (error) {
            _this.toastr.error("活化模式添加失败。", "操作失败");
        });
    };
    ActivationModeAddDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'activation-mode-add.dialog',
            template: __webpack_require__(/*! ../activation-mode-add/activation-mode.add.dialog.component.html */ "./src/app/_dialogs/activation-mode-add/activation-mode.add.dialog.component.html"),
            styles: [__webpack_require__(/*! ../activation-mode-add/activation-mode.add.dialog.component.scss */ "./src/app/_dialogs/activation-mode-add/activation-mode.add.dialog.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"], Object, _services__WEBPACK_IMPORTED_MODULE_2__["ActivationModeService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _services__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], ActivationModeAddDialogComponent);
    return ActivationModeAddDialogComponent;
}());



/***/ }),

/***/ "./src/app/_dialogs/activation-mode-delete/activation-mode.delete.dialog.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/_dialogs/activation-mode-delete/activation-mode.delete.dialog.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h3 mat-dialog-title>确认删除</h3>\r\n    <div mat-dialog-content>\r\n      <p></p>\r\n      您确认要从系统中删除活化模式： {{data.activationModeName}} ？\r\n      <p></p>\r\n    </div>\r\n  \r\n    <div mat-dialog-actions>\r\n      <button mat-button [mat-dialog-close]=\"1\" (click)=\"confirmDelete()\">删除</button>\r\n      <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\">取消</button>\r\n    </div>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/_dialogs/activation-mode-delete/activation-mode.delete.dialog.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/_dialogs/activation-mode-delete/activation-mode.delete.dialog.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: flex;\n  flex-direction: column; }\n\n.container > * {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/_dialogs/activation-mode-delete/activation-mode.delete.dialog.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/_dialogs/activation-mode-delete/activation-mode.delete.dialog.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ActivationModeDeleteDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivationModeDeleteDialogComponent", function() { return ActivationModeDeleteDialogComponent; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_shared */ "./src/app/_shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var ActivationModeDeleteDialogComponent = /** @class */ (function () {
    function ActivationModeDeleteDialogComponent(dialogRef, data, actModeService, toastr, userService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.actModeService = actModeService;
        this.toastr = toastr;
        this.userService = userService;
    }
    ActivationModeDeleteDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ActivationModeDeleteDialogComponent.prototype.confirmDelete = function () {
        var _this = this;
        if (!this.userService.canEdit()) {
            this.toastr.error("您没有删除活化模式的权限。", "权限验证失败");
            return;
        }
        this.actModeService.deleteActMode(_shared__WEBPACK_IMPORTED_MODULE_4__["Global"].BASE_ACTIVATION_MODE_ENDPOINT, this.data.id)
            .subscribe(function (data) {
            _this.toastr.success("活化模式删除成功。", "操作成功");
        }, function (error) {
            _this.toastr.error("活化模式删除失败。", "操作失败");
        });
    };
    ActivationModeDeleteDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'activation-mode-delete.dialog',
            template: __webpack_require__(/*! ../activation-mode-delete/activation-mode.delete.dialog.component.html */ "./src/app/_dialogs/activation-mode-delete/activation-mode.delete.dialog.component.html"),
            styles: [__webpack_require__(/*! ../activation-mode-delete/activation-mode.delete.dialog.component.scss */ "./src/app/_dialogs/activation-mode-delete/activation-mode.delete.dialog.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"], Object, _services__WEBPACK_IMPORTED_MODULE_3__["ActivationModeService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _services__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], ActivationModeDeleteDialogComponent);
    return ActivationModeDeleteDialogComponent;
}());



/***/ }),

/***/ "./src/app/_dialogs/activation-mode-edit/activation-mode.edit.dialog.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/_dialogs/activation-mode-edit/activation-mode.edit.dialog.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h3 mat-dialog-title>活化模式: {{data.activationModeName}}</h3>\r\n  \r\n    <form class=\"mat-dialog-content\" (ngSubmit)=\"submit\" #formControl=\"ngForm\">\r\n  \r\n      <!--Contains mat-hint for characters count and has maxLengt set-->\r\n      <div class=\"form\">\r\n        <mat-form-field color=\"accent\">\r\n          <input matInput #input class=\"form-control\" placeholder=\"名称\" [(ngModel)]=\"data.activationModeName\" name=\"actModeName\" required />\r\n          <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"form\">\r\n        <mat-form-field color=\"accent\">\r\n          <input matInput #input class=\"form-control\" placeholder=\"上界\" [(ngModel)]=\"data.upperBound\" name=\"upperBound\" required />\r\n          <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"form\">\r\n        <mat-form-field color=\"accent\">\r\n          <input matInput #input class=\"form-control\" placeholder=\"下界\" [(ngModel)]=\"data.lowerBound\" name=\"lowerBound\" required />\r\n          <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"form\">\r\n        <mat-form-field color=\"accent\">\r\n          <textarea matInput #input class=\"form-control\" placeholder=\"描述\" [(ngModel)]=\"data.activationModeDescription\" name=\"actModeDescription\" required matTextareaAutosize matAutosizeMinRows=5 matAutosizeMaxRows=25></textarea>\r\n          <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div mat-dialog-actions>\r\n        <button mat-button [type]=\"submit\" [disabled]=\"!formControl.valid\" [mat-dialog-close]=\"1\" (click)=\"stopEdit()\">保存</button>\r\n        <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\">取消</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/_dialogs/activation-mode-edit/activation-mode.edit.dialog.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/_dialogs/activation-mode-edit/activation-mode.edit.dialog.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  min-width: 450px; }\n\n.container > * {\n  width: 100%; }\n\n.form {\n  display: flex;\n  padding-top: 6px; }\n\n.mat-form-field {\n  font-size: 16px;\n  flex-grow: 1; }\n"

/***/ }),

/***/ "./src/app/_dialogs/activation-mode-edit/activation-mode.edit.dialog.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/_dialogs/activation-mode-edit/activation-mode.edit.dialog.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ActivationModeEditDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivationModeEditDialogComponent", function() { return ActivationModeEditDialogComponent; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_shared */ "./src/app/_shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var ActivationModeEditDialogComponent = /** @class */ (function () {
    function ActivationModeEditDialogComponent(dialogRef, data, actModeService, toastr, userService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.actModeService = actModeService;
        this.toastr = toastr;
        this.userService = userService;
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            // Validators.email,
        ]);
    }
    ActivationModeEditDialogComponent.prototype.getErrorMessage = function () {
        return this.formControl.hasError('required') ? 'Required field' :
            this.formControl.hasError('email') ? 'Not a valid email' :
                '';
    };
    ActivationModeEditDialogComponent.prototype.submit = function () {
        // emppty stuff
    };
    ActivationModeEditDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ActivationModeEditDialogComponent.prototype.stopEdit = function () {
        var _this = this;
        if (!this.userService.canEdit()) {
            this.toastr.error("您没有添加及修改活化模式的权限。", "权限验证失败");
            return;
        }
        var userId = this.userService.currentUserId();
        this.data.modifiedUserId = userId;
        if (this.data.id < 1)
            return;
        this.actModeService.updateActMode(_shared__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_ACTIVATION_MODE_ENDPOINT + this.data.id, this.data)
            .subscribe(function (data) {
            _this.actMode = data;
            _this.toastr.success("活化模式修改成功。", "操作成功");
        }, function (error) {
            _this.toastr.error("活化模式修改失败。", "操作失败");
        });
    };
    ActivationModeEditDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-baza.dialog',
            template: __webpack_require__(/*! ../activation-mode-edit/activation-mode.edit.dialog.component.html */ "./src/app/_dialogs/activation-mode-edit/activation-mode.edit.dialog.component.html"),
            styles: [__webpack_require__(/*! ../activation-mode-edit/activation-mode.edit.dialog.component.scss */ "./src/app/_dialogs/activation-mode-edit/activation-mode.edit.dialog.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"], Object, _services__WEBPACK_IMPORTED_MODULE_4__["ActivationModeService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _services__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], ActivationModeEditDialogComponent);
    return ActivationModeEditDialogComponent;
}());



/***/ }),

/***/ "./src/app/_dialogs/add/add.dialog.component.html":
/*!********************************************************!*\
  !*** ./src/app/_dialogs/add/add.dialog.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h3 mat-dialog-title>新建用户</h3>\r\n  \r\n    <form class=\"mat-dialog-content\" (ngSubmit)=\"submit\" #formControl=\"ngForm\">\r\n   \r\n      <div class=\"form\">\r\n        <mat-form-field color=\"accent\">\r\n          <input matInput #input class=\"form-control\" placeholder=\"用户名\" [(ngModel)]=\"data.userName\" name=\"userName\" required />\r\n          <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"form\">\r\n        <mat-form-field color=\"accent\">\r\n          <input matInput #input class=\"form-control\" placeholder=\"名\" [(ngModel)]=\"data.firstName\" name=\"firstName\" required />\r\n          <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"form\">\r\n        <mat-form-field color=\"accent\">\r\n          <input matInput #input class=\"form-control\" placeholder=\"姓\" [(ngModel)]=\"data.lastName\" name=\"lastName\" required />\r\n          <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n  \r\n      <!--Contains mat-hint for characters count and has maxLengt set-->\r\n      <div class=\"form\">\r\n        <mat-form-field color=\"accent\">\r\n          <input type=\"password\" matInput #inputstate class=\"form-control\" placeholder=\"密码\" [(ngModel)]=\"data.password\" name=\"password\" maxlength=\"10\" />\r\n          <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n  \r\n      <div class=\"form\">\r\n        <mat-form-field color=\"accent\">\r\n          <input matInput style=\"display: none\">\r\n          <mat-checkbox [(ngModel)]=\"data.isReadOnly\" name=\"isReadOnly\">只读</mat-checkbox>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"form\">\r\n        <mat-form-field color=\"accent\">\r\n          <input matInput style=\"display: none\">\r\n          <mat-checkbox [(ngModel)]=\"data.canComment\" name=\"canComment\">评论</mat-checkbox>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"form\">\r\n        <mat-form-field color=\"accent\">\r\n          <input matInput style=\"display: none\">\r\n          <mat-checkbox [(ngModel)]=\"data.isContributer\" name=\"isContributer\">编辑</mat-checkbox>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"form\">\r\n        <mat-form-field color=\"accent\">\r\n          <input matInput style=\"display: none\">\r\n          <mat-checkbox [(ngModel)]=\"data.isAdmin\" name=\"isAdmin\">管理</mat-checkbox>\r\n        </mat-form-field>\r\n      </div>\r\n  \r\n      <div mat-dialog-actions>\r\n        <button mat-button [type]=\"submit\" [disabled]=\"!formControl.valid\" [mat-dialog-close]=\"1\" (click)=\"confirmAdd()\">Save</button>\r\n        <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\">Cancel</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/_dialogs/add/add.dialog.component.scss":
/*!********************************************************!*\
  !*** ./src/app/_dialogs/add/add.dialog.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  min-width: 450px; }\n\n.container > * {\n  width: 100%; }\n\n.form {\n  display: flex;\n  padding-top: 6px; }\n\n.mat-form-field {\n  font-size: 16px;\n  flex-grow: 1; }\n"

/***/ }),

/***/ "./src/app/_dialogs/add/add.dialog.component.ts":
/*!******************************************************!*\
  !*** ./src/app/_dialogs/add/add.dialog.component.ts ***!
  \******************************************************/
/*! exports provided: AddDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDialogComponent", function() { return AddDialogComponent; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_shared */ "./src/app/_shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var AddDialogComponent = /** @class */ (function () {
    function AddDialogComponent(dialogRef, data, userService, toastr) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.userService = userService;
        this.toastr = toastr;
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            // Validators.email,
        ]);
    }
    AddDialogComponent.prototype.getErrorMessage = function () {
        return this.formControl.hasError('required') ? 'Required field' :
            this.formControl.hasError('email') ? 'Not a valid email' :
                '';
    };
    AddDialogComponent.prototype.submit = function () {
        // emppty stuff
    };
    AddDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddDialogComponent.prototype.confirmAdd = function () {
        var _this = this;
        if (!this.userService.isAdmin()) {
            this.toastr.error("您没有添加及修改用户信息的权限。", "权限验证失败");
            return;
        }
        this.userService.addUser(_shared__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT + 'add', this.data)
            .subscribe(function (data) {
            _this.newUser = data;
            _this.toastr.success("用户添加成功。", "操作成功");
        }, function (error) {
            _this.toastr.error("用户添加失败。", "操作失败");
        });
    };
    AddDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add.dialog',
            template: __webpack_require__(/*! ../add/add.dialog.component.html */ "./src/app/_dialogs/add/add.dialog.component.html"),
            styles: [__webpack_require__(/*! ../add/add.dialog.component.scss */ "./src/app/_dialogs/add/add.dialog.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"], Object, _services__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], AddDialogComponent);
    return AddDialogComponent;
}());



/***/ }),

/***/ "./src/app/_dialogs/delete/delete.dialog.component.html":
/*!**************************************************************!*\
  !*** ./src/app/_dialogs/delete/delete.dialog.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h3 mat-dialog-title>确认删除</h3>\r\n    <div mat-dialog-content>\r\n      <p></p>\r\n      您确认要从系统中删除用户 {{data.userName}} ？\r\n      <p></p>\r\n    </div>\r\n  \r\n    <div mat-dialog-actions>\r\n      <button mat-button [mat-dialog-close]=\"1\" (click)=\"confirmDelete()\">删除</button>\r\n      <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\">取消</button>\r\n    </div>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/_dialogs/delete/delete.dialog.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/_dialogs/delete/delete.dialog.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: flex;\n  flex-direction: column; }\n\n.container > * {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/_dialogs/delete/delete.dialog.component.ts":
/*!************************************************************!*\
  !*** ./src/app/_dialogs/delete/delete.dialog.component.ts ***!
  \************************************************************/
/*! exports provided: DeleteDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteDialogComponent", function() { return DeleteDialogComponent; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_shared */ "./src/app/_shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var DeleteDialogComponent = /** @class */ (function () {
    function DeleteDialogComponent(dialogRef, data, userService, toastr) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.userService = userService;
        this.toastr = toastr;
    }
    DeleteDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DeleteDialogComponent.prototype.confirmDelete = function () {
        var _this = this;
        if (!this.userService.isAdmin()) {
            this.toastr.error("您没有删除用户的权限。", "权限验证失败");
            return;
        }
        this.userService.deleteUser(_shared__WEBPACK_IMPORTED_MODULE_4__["Global"].BASE_USER_ENDPOINT, this.data.id)
            .subscribe(function (data) {
            _this.toastr.success("用户删除成功。", "操作成功");
        }, function (error) {
            _this.toastr.error("用户删除失败。", "操作失败");
        });
    };
    DeleteDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delete.dialog',
            template: __webpack_require__(/*! ../delete/delete.dialog.component.html */ "./src/app/_dialogs/delete/delete.dialog.component.html"),
            styles: [__webpack_require__(/*! ../delete/delete.dialog.component.scss */ "./src/app/_dialogs/delete/delete.dialog.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"], Object, _services__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], DeleteDialogComponent);
    return DeleteDialogComponent;
}());



/***/ }),

/***/ "./src/app/_dialogs/edit/edit.dialog.component.html":
/*!**********************************************************!*\
  !*** ./src/app/_dialogs/edit/edit.dialog.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h3 mat-dialog-title>用户: {{data.userName}}</h3>\r\n  \r\n    <form class=\"mat-dialog-content\" (ngSubmit)=\"submit\" #formControl=\"ngForm\">\r\n  \r\n      <!--Contains mat-hint for characters count and has maxLengt set-->\r\n      <div class=\"form\">\r\n        <mat-form-field color=\"accent\">\r\n          <input matInput #input class=\"form-control\" placeholder=\"名\" [(ngModel)]=\"data.firstName\" name=\"firstName\" required />\r\n          <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"form\">\r\n        <mat-form-field color=\"accent\">\r\n          <input matInput #input class=\"form-control\" placeholder=\"姓\" [(ngModel)]=\"data.lastName\" name=\"lastName\" required />\r\n          <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      \r\n      <div class=\"form\">\r\n        <mat-form-field color=\"accent\">\r\n          <input type=\"password\" matInput #inputstate class=\"form-control\" placeholder=\"密码\" [(ngModel)]=\"data.password\" name=\"password\" maxlength=\"10\" >\r\n          <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n  \r\n      <div class=\"form\">\r\n        <mat-form-field color=\"accent\">\r\n          <input matInput style=\"display: none\">\r\n          <mat-checkbox [(ngModel)]=\"data.isReadOnly\" name=\"isReadOnly\">只读</mat-checkbox>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"form\">\r\n        <mat-form-field color=\"accent\">\r\n          <input matInput style=\"display: none\">\r\n          <mat-checkbox [(ngModel)]=\"data.canComment\" name=\"canComment\">评论</mat-checkbox>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"form\">\r\n        <mat-form-field color=\"accent\">\r\n          <input matInput style=\"display: none\">\r\n          <mat-checkbox [(ngModel)]=\"data.isContributer\" name=\"isContributer\">编辑</mat-checkbox>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"form\">\r\n        <mat-form-field color=\"accent\">\r\n          <input matInput style=\"display: none\">\r\n          <mat-checkbox [(ngModel)]=\"data.isAdmin\" name=\"isAdmin\">管理</mat-checkbox>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div mat-dialog-actions>\r\n        <button mat-button [type]=\"submit\" [disabled]=\"!formControl.valid\" [mat-dialog-close]=\"1\" (click)=\"stopEdit()\">保存</button>\r\n        <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\">取消</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/_dialogs/edit/edit.dialog.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/_dialogs/edit/edit.dialog.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  min-width: 450px; }\n\n.container > * {\n  width: 100%; }\n\n.form {\n  display: flex;\n  padding-top: 6px; }\n\n.mat-form-field {\n  font-size: 16px;\n  flex-grow: 1; }\n"

/***/ }),

/***/ "./src/app/_dialogs/edit/edit.dialog.component.ts":
/*!********************************************************!*\
  !*** ./src/app/_dialogs/edit/edit.dialog.component.ts ***!
  \********************************************************/
/*! exports provided: EditDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDialogComponent", function() { return EditDialogComponent; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_shared */ "./src/app/_shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var EditDialogComponent = /** @class */ (function () {
    function EditDialogComponent(dialogRef, data, userService, toastr) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.userService = userService;
        this.toastr = toastr;
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            // Validators.email,
        ]);
    }
    EditDialogComponent.prototype.getErrorMessage = function () {
        return this.formControl.hasError('required') ? 'Required field' :
            this.formControl.hasError('email') ? 'Not a valid email' :
                '';
    };
    EditDialogComponent.prototype.submit = function () {
        // emppty stuff
    };
    EditDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EditDialogComponent.prototype.stopEdit = function () {
        var _this = this;
        if (!this.userService.isAdmin()) {
            this.toastr.error("您没有添加及修改用户信息的权限。", "权限验证失败");
            return;
        }
        if (this.data.id < 1)
            return;
        this.userService.updateUser(_shared__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT + this.data.id, this.data)
            .subscribe(function (data) {
            _this.user = data;
            _this.toastr.success("用户信息修改成功。", "操作成功");
        }, function (error) {
            _this.toastr.error("用户信息修改失败。", "操作失败");
        });
    };
    EditDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-baza.dialog',
            template: __webpack_require__(/*! ../edit/edit.dialog.component.html */ "./src/app/_dialogs/edit/edit.dialog.component.html"),
            styles: [__webpack_require__(/*! ../edit/edit.dialog.component.scss */ "./src/app/_dialogs/edit/edit.dialog.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"], Object, _services__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], EditDialogComponent);
    return EditDialogComponent;
}());



/***/ }),

/***/ "./src/app/_dialogs/heritage-delete/heritage-delete.dialog.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/_dialogs/heritage-delete/heritage-delete.dialog.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h3 mat-dialog-title>确认删除</h3>\r\n    <div mat-dialog-content>\r\n      <p></p>\r\n      您确认要从系统中删除非遗 {{data.name}} ?\r\n      <p></p>\r\n    </div>\r\n  \r\n    <div mat-dialog-actions>\r\n      <button mat-button [mat-dialog-close]=\"1\" (click)=\"confirmDelete()\">删除</button>\r\n      <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\">取消</button>\r\n    </div>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/_dialogs/heritage-delete/heritage-delete.dialog.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/_dialogs/heritage-delete/heritage-delete.dialog.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: flex;\n  flex-direction: column; }\n\n.container > * {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/_dialogs/heritage-delete/heritage-delete.dialog.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/_dialogs/heritage-delete/heritage-delete.dialog.component.ts ***!
  \******************************************************************************/
/*! exports provided: HeritageDeleteDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeritageDeleteDialogComponent", function() { return HeritageDeleteDialogComponent; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_shared */ "./src/app/_shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var HeritageDeleteDialogComponent = /** @class */ (function () {
    function HeritageDeleteDialogComponent(dialogRef, data, heritageService, toastr, userService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.heritageService = heritageService;
        this.toastr = toastr;
        this.userService = userService;
    }
    HeritageDeleteDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    HeritageDeleteDialogComponent.prototype.confirmDelete = function () {
        var _this = this;
        if (!this.userService.canEdit()) {
            this.toastr.error("您没有删除非物质文化遗产的权限。", "用户权限验证失败");
            return;
        }
        this.heritageService.deleteHeritage(_shared__WEBPACK_IMPORTED_MODULE_4__["Global"].BASE_HERITAGE_ENDPOINT, this.data.id)
            .subscribe(function (data) {
            _this.toastr.success("非物质文化遗产删除成功。", "操作成功");
        }, function (error) {
            _this.toastr.error("非物质文化遗产删除失败。", "操作失败");
        });
    };
    HeritageDeleteDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'heritage-delete.dialog',
            template: __webpack_require__(/*! ../heritage-delete/heritage-delete.dialog.component.html */ "./src/app/_dialogs/heritage-delete/heritage-delete.dialog.component.html"),
            styles: [__webpack_require__(/*! ../heritage-delete/heritage-delete.dialog.component.scss */ "./src/app/_dialogs/heritage-delete/heritage-delete.dialog.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"], Object, _services__WEBPACK_IMPORTED_MODULE_3__["HeritageService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _services__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], HeritageDeleteDialogComponent);
    return HeritageDeleteDialogComponent;
}());



/***/ }),

/***/ "./src/app/_dialogs/index.ts":
/*!***********************************!*\
  !*** ./src/app/_dialogs/index.ts ***!
  \***********************************/
/*! exports provided: AddDialogComponent, EditDialogComponent, DeleteDialogComponent, HeritageDeleteDialogComponent, ActivationModeAddDialogComponent, ActivationModeEditDialogComponent, ActivationModeDeleteDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_add_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add/add.dialog.component */ "./src/app/_dialogs/add/add.dialog.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddDialogComponent", function() { return _add_add_dialog_component__WEBPACK_IMPORTED_MODULE_0__["AddDialogComponent"]; });

/* harmony import */ var _edit_edit_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit/edit.dialog.component */ "./src/app/_dialogs/edit/edit.dialog.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditDialogComponent", function() { return _edit_edit_dialog_component__WEBPACK_IMPORTED_MODULE_1__["EditDialogComponent"]; });

/* harmony import */ var _delete_delete_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete/delete.dialog.component */ "./src/app/_dialogs/delete/delete.dialog.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteDialogComponent", function() { return _delete_delete_dialog_component__WEBPACK_IMPORTED_MODULE_2__["DeleteDialogComponent"]; });

/* harmony import */ var _heritage_delete_heritage_delete_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./heritage-delete/heritage-delete.dialog.component */ "./src/app/_dialogs/heritage-delete/heritage-delete.dialog.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeritageDeleteDialogComponent", function() { return _heritage_delete_heritage_delete_dialog_component__WEBPACK_IMPORTED_MODULE_3__["HeritageDeleteDialogComponent"]; });

/* harmony import */ var _activation_mode_add_activation_mode_add_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./activation-mode-add/activation-mode.add.dialog.component */ "./src/app/_dialogs/activation-mode-add/activation-mode.add.dialog.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActivationModeAddDialogComponent", function() { return _activation_mode_add_activation_mode_add_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ActivationModeAddDialogComponent"]; });

/* harmony import */ var _activation_mode_edit_activation_mode_edit_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./activation-mode-edit/activation-mode.edit.dialog.component */ "./src/app/_dialogs/activation-mode-edit/activation-mode.edit.dialog.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActivationModeEditDialogComponent", function() { return _activation_mode_edit_activation_mode_edit_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ActivationModeEditDialogComponent"]; });

/* harmony import */ var _activation_mode_delete_activation_mode_delete_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./activation-mode-delete/activation-mode.delete.dialog.component */ "./src/app/_dialogs/activation-mode-delete/activation-mode.delete.dialog.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActivationModeDeleteDialogComponent", function() { return _activation_mode_delete_activation_mode_delete_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ActivationModeDeleteDialogComponent"]; });










/***/ }),

/***/ "./src/app/_directives/alert.component.html":
/*!**************************************************!*\
  !*** ./src/app/_directives/alert.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>\r\n"

/***/ }),

/***/ "./src/app/_directives/alert.component.ts":
/*!************************************************!*\
  !*** ./src/app/_directives/alert.component.ts ***!
  \************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.alertService.getMessage().subscribe(function (message) {
            _this.message = message;
        });
    };
    AlertComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/_directives/alert.component.html")
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/_directives/index.ts":
/*!**************************************!*\
  !*** ./src/app/_directives/index.ts ***!
  \**************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.component */ "./src/app/_directives/alert.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return _alert_component__WEBPACK_IMPORTED_MODULE_0__["AlertComponent"]; });




/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_guards/index.ts":
/*!**********************************!*\
  !*** ./src/app/_guards/index.ts ***!
  \**********************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });




/***/ }),

/***/ "./src/app/_helpers/error.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/_helpers/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/_services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this.authenticationService.logout();
                location.reload(true);
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/_helpers/index.ts":
/*!***********************************!*\
  !*** ./src/app/_helpers/index.ts ***!
  \***********************************/
/*! exports provided: ErrorInterceptor, JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error.interceptor */ "./src/app/_helpers/error.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return _error_interceptor__WEBPACK_IMPORTED_MODULE_0__["ErrorInterceptor"]; });

/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jwt.interceptor */ "./src/app/_helpers/jwt.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__["JwtInterceptor"]; });





/***/ }),

/***/ "./src/app/_helpers/jwt.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/_helpers/jwt.interceptor.ts ***!
  \*********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor() {
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + currentUser.token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/_layout/app-header/app-header.component.html":
/*!**************************************************************!*\
  !*** ./src/app/_layout/app-header/app-header.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-inverse bg-inverse\" title=\"This Header is rendered by /app/_layout/app-header/app-header.component.html\">\r\n    <div class=\"container d-flex justify-content-between\">\r\n      <a href=\"#\" class=\"navbar-brand\">App Page</a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarHeader\" aria-controls=\"navbarHeader\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      \r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/_layout/app-header/app-header.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/_layout/app-header/app-header.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/_layout/app-header/app-header.component.ts":
/*!************************************************************!*\
  !*** ./src/app/_layout/app-header/app-header.component.ts ***!
  \************************************************************/
/*! exports provided: AppHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHeaderComponent", function() { return AppHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppHeaderComponent = /** @class */ (function () {
    function AppHeaderComponent() {
    }
    AppHeaderComponent.prototype.ngOnInit = function () {
    };
    AppHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./app-header.component.html */ "./src/app/_layout/app-header/app-header.component.html"),
            styles: [__webpack_require__(/*! ./app-header.component.scss */ "./src/app/_layout/app-header/app-header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppHeaderComponent);
    return AppHeaderComponent;
}());



/***/ }),

/***/ "./src/app/_layout/app-layout/app-layout.component.html":
/*!**************************************************************!*\
  !*** ./src/app/_layout/app-layout/app-layout.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/_layout/app-layout/app-layout.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/_layout/app-layout/app-layout.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/_layout/app-layout/app-layout.component.ts":
/*!************************************************************!*\
  !*** ./src/app/_layout/app-layout/app-layout.component.ts ***!
  \************************************************************/
/*! exports provided: AppLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppLayoutComponent", function() { return AppLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppLayoutComponent = /** @class */ (function () {
    function AppLayoutComponent() {
    }
    AppLayoutComponent.prototype.ngOnInit = function () {
    };
    AppLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-app-layout',
            template: __webpack_require__(/*! ./app-layout.component.html */ "./src/app/_layout/app-layout/app-layout.component.html"),
            styles: [__webpack_require__(/*! ./app-layout.component.scss */ "./src/app/_layout/app-layout/app-layout.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppLayoutComponent);
    return AppLayoutComponent;
}());



/***/ }),

/***/ "./src/app/_layout/index.ts":
/*!**********************************!*\
  !*** ./src/app/_layout/index.ts ***!
  \**********************************/
/*! exports provided: AppHeaderComponent, AppLayoutComponent, SiteHeaderComponent, SiteFooterComponent, SiteLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_header_app_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-header/app-header.component */ "./src/app/_layout/app-header/app-header.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppHeaderComponent", function() { return _app_header_app_header_component__WEBPACK_IMPORTED_MODULE_0__["AppHeaderComponent"]; });

/* harmony import */ var _app_layout_app_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-layout/app-layout.component */ "./src/app/_layout/app-layout/app-layout.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppLayoutComponent", function() { return _app_layout_app_layout_component__WEBPACK_IMPORTED_MODULE_1__["AppLayoutComponent"]; });

/* harmony import */ var _site_header_site_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./site-header/site-header.component */ "./src/app/_layout/site-header/site-header.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SiteHeaderComponent", function() { return _site_header_site_header_component__WEBPACK_IMPORTED_MODULE_2__["SiteHeaderComponent"]; });

/* harmony import */ var _site_footer_site_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./site-footer/site-footer.component */ "./src/app/_layout/site-footer/site-footer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SiteFooterComponent", function() { return _site_footer_site_footer_component__WEBPACK_IMPORTED_MODULE_3__["SiteFooterComponent"]; });

/* harmony import */ var _site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./site-layout/site-layout.component */ "./src/app/_layout/site-layout/site-layout.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SiteLayoutComponent", function() { return _site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_4__["SiteLayoutComponent"]; });








/***/ }),

/***/ "./src/app/_layout/site-footer/site-footer.component.html":
/*!****************************************************************!*\
  !*** ./src/app/_layout/site-footer/site-footer.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n        <footer>\r\n          <p>&copy; 北京联合大学 2018.</p>\r\n        </footer>\r\n      </div>"

/***/ }),

/***/ "./src/app/_layout/site-footer/site-footer.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/_layout/site-footer/site-footer.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/_layout/site-footer/site-footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/_layout/site-footer/site-footer.component.ts ***!
  \**************************************************************/
/*! exports provided: SiteFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteFooterComponent", function() { return SiteFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SiteFooterComponent = /** @class */ (function () {
    function SiteFooterComponent() {
    }
    SiteFooterComponent.prototype.ngOnInit = function () {
    };
    SiteFooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'site-footer',
            template: __webpack_require__(/*! ./site-footer.component.html */ "./src/app/_layout/site-footer/site-footer.component.html"),
            styles: [__webpack_require__(/*! ./site-footer.component.scss */ "./src/app/_layout/site-footer/site-footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SiteFooterComponent);
    return SiteFooterComponent;
}());



/***/ }),

/***/ "./src/app/_layout/site-header/site-header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/_layout/site-header/site-header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\r\n  <mat-sidenav  #sidenav mode=\"side\"\r\n        [fixedInViewport]=\"options.value.fixed\" [fixedTopGap]=\"options.value.top\"\r\n        [fixedBottomGap]=\"options.value.bottom\">\r\n    <mat-nav-list>\r\n      <a mat-list-item\r\n         *ngIf=\"!auth.isAuthenticated()\"\r\n         routerLink=\"/login\">\r\n        <mat-icon class=\"icon\">input</mat-icon>\r\n        <span class=\"label\">登录</span>\r\n      </a>\r\n      <a mat-list-item         \r\n         routerLink=\"/\">\r\n        <mat-icon class=\"icon\">home</mat-icon>\r\n        <span class=\"label\">主页</span>\r\n      </a>\r\n      <a mat-list-item\r\n         *ngIf=\"auth.isAuthenticated()\"\r\n         routerLink=\"/heritagelist\">\r\n        <mat-icon class=\"icon\">view_list</mat-icon>\r\n        <span class=\"label\">非遗列表</span>\r\n      </a>\r\n      <a mat-list-item\r\n         *ngIf=\"canEdit()\"\r\n         routerLink=\"/activationmodelist\">\r\n        <mat-icon class=\"icon\">view_list</mat-icon>\r\n        <span class=\"label\">活化模式列表</span>\r\n      </a>\r\n      <a mat-list-item\r\n         *ngIf=\"isAdmin()\"\r\n         routerLink=\"/users\">\r\n        <mat-icon class=\"icon\">account_box</mat-icon>\r\n        <span class=\"label\">用户管理</span>\r\n      </a>\r\n      <a  mat-list-item\r\n          *ngIf=\"auth.isAuthenticated()\"\r\n          (click)=\"auth.logout()\" type=\"button\">\r\n        <mat-icon class=\"icon\">input</mat-icon>\r\n        <span class=\"label\">退出</span>\r\n      </a>\r\n    </mat-nav-list>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content [formGroup]=\"options\">\r\n    <mat-toolbar color=\"primary\">\r\n      <div fxHide.gt-xs=\"false\">\r\n        <button mat-icon-button (click)=\"sidenav.toggle()\">\r\n          <mat-icon>menu</mat-icon>\r\n        </button>\r\n      </div>\r\n      <div>\r\n        <a routerLink=\"/\">\r\n          非遗博弈旅游软件 1.0\r\n        </a>\r\n      </div>\r\n      <div fxFlex fxLayout fxLayoutAlign=\"flex-end\"  fxHide.xs>\r\n        <ul fxLayout fxLayoutGap=\"20px\" class=\"navigation-items\">\r\n          <li>\r\n            <a\r\n              *ngIf=\"!auth.isAuthenticated()\"\r\n              routerLink=\"/login\">\r\n              <mat-icon class=\"icon\">input</mat-icon>\r\n              <span  class=\"label\">登录</span>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a              \r\n              routerLink=\"/\">\r\n              <mat-icon class=\"icon\">home</mat-icon>\r\n              <span class=\"label\">主页</span>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a\r\n              *ngIf=\"auth.isAuthenticated()\"\r\n              routerLink=\"/heritagelist\">\r\n              <mat-icon class=\"icon\">view_list</mat-icon>\r\n              <span class=\"label\">非遗列表</span>\r\n            </a>\r\n          </li>\r\n          <li>\r\n              <a\r\n                *ngIf=\"canEdit()\"\r\n                routerLink=\"/activationmodelist\">\r\n                <mat-icon class=\"icon\">view_list</mat-icon>\r\n                <span class=\"label\">活化模式列表</span>\r\n              </a>\r\n            </li>\r\n          <li>\r\n            <a\r\n              *ngIf=\"isAdmin()\"\r\n              routerLink=\"/users\">\r\n              <mat-icon class=\"icon\">account_box</mat-icon>\r\n              <span class=\"label\">用户管理</span>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a\r\n              *ngIf=\"auth.isAuthenticated()\"\r\n              (click)=\"auth.logout()\">\r\n              <mat-icon class=\"icon\">input</mat-icon>\r\n              <span class=\"label\">退出</span>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </mat-toolbar>\r\n\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n"

/***/ }),

/***/ "./src/app/_layout/site-header/site-header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/_layout/site-header/site-header.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-sidenav-container, mat-sidenav-content, mat-sidenav {\n  height: 100%; }\n\nmat-sidenav {\n  width: 250px; }\n\na {\n  text-decoration: none;\n  color: white; }\n\na:hover,\na:active {\n  color: lightgray; }\n\n.navigation-items {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  cursor: pointer; }\n\n.icon {\n  display: inline-block;\n  height: 30px;\n  margin: auto;\n  padding-right: 10px;\n  text-align: center;\n  vertical-align: middle;\n  width: 15%; }\n\n.label {\n  display: inline-block;\n  line-height: 30px;\n  text-align: center;\n  margin: 0;\n  width: 85%; }\n"

/***/ }),

/***/ "./src/app/_layout/site-header/site-header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/_layout/site-header/site-header.component.ts ***!
  \**************************************************************/
/*! exports provided: SiteHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteHeaderComponent", function() { return SiteHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SiteHeaderComponent = /** @class */ (function () {
    function SiteHeaderComponent(auth, usr, fb) {
        this.auth = auth;
        this.usr = usr;
        this.title = 'HerritageApp';
        auth.handleAuthentication();
        this.options = fb.group({
            bottom: 0,
            fixed: true,
            top: 0
        });
    }
    SiteHeaderComponent.prototype.ngOnInit = function () {
    };
    SiteHeaderComponent.prototype.isAdmin = function () {
        if (this.auth.isAuthenticated() && this.usr.isAdmin()) {
            return true;
        }
        else {
            return false;
        }
    };
    SiteHeaderComponent.prototype.canEdit = function () {
        if (this.auth.isAuthenticated() && this.usr.canEdit()) {
            return true;
        }
        else {
            return false;
        }
    };
    SiteHeaderComponent.prototype.isReadOnly = function () {
        if (this.auth.isAuthenticated() && this.usr.isReadOnly()) {
            return true;
        }
        else {
            return false;
        }
    };
    SiteHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'site-header',
            template: __webpack_require__(/*! ./site-header.component.html */ "./src/app/_layout/site-header/site-header.component.html"),
            styles: [__webpack_require__(/*! ./site-header.component.scss */ "./src/app/_layout/site-header/site-header.component.scss")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"],
            _services__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], SiteHeaderComponent);
    return SiteHeaderComponent;
}());



/***/ }),

/***/ "./src/app/_layout/site-layout/site-layout.component.html":
/*!****************************************************************!*\
  !*** ./src/app/_layout/site-layout/site-layout.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<site-header></site-header>\r\n<router-outlet></router-outlet>\r\n<site-footer></site-footer>"

/***/ }),

/***/ "./src/app/_layout/site-layout/site-layout.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/_layout/site-layout/site-layout.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/_layout/site-layout/site-layout.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/_layout/site-layout/site-layout.component.ts ***!
  \**************************************************************/
/*! exports provided: SiteLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteLayoutComponent", function() { return SiteLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SiteLayoutComponent = /** @class */ (function () {
    function SiteLayoutComponent() {
    }
    SiteLayoutComponent.prototype.ngOnInit = function () {
    };
    SiteLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-site-layout',
            template: __webpack_require__(/*! ./site-layout.component.html */ "./src/app/_layout/site-layout/site-layout.component.html"),
            styles: [__webpack_require__(/*! ./site-layout.component.scss */ "./src/app/_layout/site-layout/site-layout.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SiteLayoutComponent);
    return SiteLayoutComponent;
}());



/***/ }),

/***/ "./src/app/_pipes/EvaluationOptionPipe.ts":
/*!************************************************!*\
  !*** ./src/app/_pipes/EvaluationOptionPipe.ts ***!
  \************************************************/
/*! exports provided: EvaluationOptionPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluationOptionPipe", function() { return EvaluationOptionPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EvaluationOptionPipe = /** @class */ (function () {
    function EvaluationOptionPipe() {
    }
    EvaluationOptionPipe.prototype.transform = function (id) {
        var evaluationOptions = [
            { id: 1, option: '不同意' },
            { id: 2, option: '不太同意' },
            { id: 3, option: '介于中间' },
            { id: 4, option: '比较同意' },
            { id: 5, option: '非常同意' }
        ];
        return evaluationOptions.filter(function (x) { return x.id == id; })[0].option;
    };
    EvaluationOptionPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'evaluationoption' })
    ], EvaluationOptionPipe);
    return EvaluationOptionPipe;
}());



/***/ }),

/***/ "./src/app/_pipes/EvaluatorTypePipe.ts":
/*!*********************************************!*\
  !*** ./src/app/_pipes/EvaluatorTypePipe.ts ***!
  \*********************************************/
/*! exports provided: EvaluatorTypePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluatorTypePipe", function() { return EvaluatorTypePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EvaluatorTypePipe = /** @class */ (function () {
    function EvaluatorTypePipe() {
    }
    EvaluatorTypePipe.prototype.transform = function (id) {
        var evaluatorTypes = [
            { id: 1, type: '传承人' },
            { id: 2, type: '企业' },
            { id: 3, type: '专家' },
            { id: 4, type: '政府' },
            { id: 5, type: '消费者' }
        ];
        return evaluatorTypes.filter(function (x) { return x.id == id; })[0].type;
    };
    EvaluatorTypePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'evaluatortype' })
    ], EvaluatorTypePipe);
    return EvaluatorTypePipe;
}());



/***/ }),

/***/ "./src/app/_pipes/index.ts":
/*!*********************************!*\
  !*** ./src/app/_pipes/index.ts ***!
  \*********************************/
/*! exports provided: EvaluationOptionPipe, EvaluatorTypePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EvaluationOptionPipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EvaluationOptionPipe */ "./src/app/_pipes/EvaluationOptionPipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EvaluationOptionPipe", function() { return _EvaluationOptionPipe__WEBPACK_IMPORTED_MODULE_0__["EvaluationOptionPipe"]; });

/* harmony import */ var _EvaluatorTypePipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EvaluatorTypePipe */ "./src/app/_pipes/EvaluatorTypePipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EvaluatorTypePipe", function() { return _EvaluatorTypePipe__WEBPACK_IMPORTED_MODULE_1__["EvaluatorTypePipe"]; });





/***/ }),

/***/ "./src/app/_services/activationmode.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_services/activationmode.service.ts ***!
  \*****************************************************/
/*! exports provided: ActivationModeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivationModeService", function() { return ActivationModeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var ActivationModeService = /** @class */ (function () {
    function ActivationModeService(http) {
        this.http = http;
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    Object.defineProperty(ActivationModeService.prototype, "data", {
        get: function () {
            return this.dataChange.value;
        },
        enumerable: true,
        configurable: true
    });
    ActivationModeService.prototype.getDialogData = function () {
        return this.dialogData;
    };
    ActivationModeService.prototype.getAllActModes = function (url) {
        var _this = this;
        this.http.get(url, httpOptions).subscribe(function (data) {
            _this.dataChange.next(data);
        }, function (err) {
            console.log(err.name + ' ' + err.message);
        });
    };
    ActivationModeService.prototype.getActModeById = function (url) {
        var _this = this;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actMode) {
            _this.activationMode = actMode;
            return _this.activationMode;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ActivationModeService.prototype.getHeritageActModeById = function (url) {
        var _this = this;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actModes) {
            _this.activationModes = actModes;
            return _this.activationModes;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ActivationModeService.prototype.addActMode = function (url, actMode) {
        var _this = this;
        return this.http.post(url, actMode)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actMode) {
            _this.activationMode = actMode;
            return _this.activationMode;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ActivationModeService.prototype.updateActMode = function (url, actMode) {
        var _this = this;
        return this.http.put(url, actMode)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actMode) {
            _this.activationMode = actMode;
            return _this.activationMode;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ActivationModeService.prototype.deleteActMode = function (url, id) {
        return this.http.delete(url + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // custom handler
    ActivationModeService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    ActivationModeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ActivationModeService);
    return ActivationModeService;
}());



/***/ }),

/***/ "./src/app/_services/alert.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/alert.service.ts ***!
  \********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/_services/authentication.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_services/authentication.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
    }
    AuthenticationService.prototype.login = function (url, username, password) {
        return this.http.post(url, { username: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            return user;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.router.navigate(['/login']);
    };
    AuthenticationService.prototype.isAuthenticated = function () {
        var user = JSON.parse(localStorage.getItem('currentUser'));
        if (user != null && user != rxjs__WEBPACK_IMPORTED_MODULE_4__["empty"]) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthenticationService.prototype.handleAuthentication = function () {
        if ((this.router.url == '/') || this.isAuthenticated()) {
            this.router.navigate(['/welcome']);
        }
        else {
            this.router.navigate(['/login']);
            console.log("Please log in.");
        }
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/_services/comment.service.ts":
/*!**********************************************!*\
  !*** ./src/app/_services/comment.service.ts ***!
  \**********************************************/
/*! exports provided: CommentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentService", function() { return CommentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* * * ./app/comments/components/comment.service.ts * * */
// Imports




// Import RxJs required methods


var CommentService = /** @class */ (function () {
    // Resolve HTTP using the constructor
    function CommentService(http) {
        this.http = http;
    }
    // Fetch all existing comments
    CommentService.prototype.getComments = function (url) {
        var _this = this;
        // ...using get request
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (comment) {
            _this.heritageComment = comment;
            return _this.heritageComment;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    // Add a new comment
    CommentService.prototype.addComment = function (url, body) {
        var _this = this;
        return this.http.post(url, body) // ...using post request
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (comment) {
            _this.comment = comment;
            return _this.comment;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    // Update a comment
    CommentService.prototype.updateComment = function (url, body) {
        var _this = this;
        return this.http.put(url, body) // ...using put request
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (comment) {
            _this.comment = comment;
            return _this.comment;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    CommentService.prototype.updateVote = function (url, body) {
        var _this = this;
        return this.http.put(url, body) // ...using put request
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (comment) {
            _this.comment = comment;
            return _this.comment;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    // Delete a comment
    CommentService.prototype.removeComment = function (url) {
        return this.http.delete(url) // ...using put request
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    // custom handler
    CommentService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.' || 'Server error');
    };
    CommentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CommentService);
    return CommentService;
}());



/***/ }),

/***/ "./src/app/_services/emitter.service.ts":
/*!**********************************************!*\
  !*** ./src/app/_services/emitter.service.ts ***!
  \**********************************************/
/*! exports provided: EmitterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmitterService", function() { return EmitterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* * * ./app/emitter.service.ts * * */
// https://gist.github.com/sasxa
// Imports

var EmitterService = /** @class */ (function () {
    function EmitterService() {
    }
    // Set a new event in the store with a given ID
    // as key
    EmitterService.get = function (ID) {
        if (!this._emitters[ID])
            this._emitters[ID] = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return this._emitters[ID];
    };
    // Event store
    EmitterService._emitters = {};
    EmitterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], EmitterService);
    return EmitterService;
}());



/***/ }),

/***/ "./src/app/_services/evaluationoption.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/_services/evaluationoption.service.ts ***!
  \*******************************************************/
/*! exports provided: EvaluationOptionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluationOptionService", function() { return EvaluationOptionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* * * ./app/comments/components/comment.service.ts * * */
// Imports




// Import RxJs required methods


var EvaluationOptionService = /** @class */ (function () {
    // Resolve HTTP using the constructor
    function EvaluationOptionService(http) {
        this.http = http;
    }
    EvaluationOptionService.prototype.getEvaluationOptions = function (url) {
        var _this = this;
        // ...using get request
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (evaluationOption) {
            _this.evaluationOption = evaluationOption;
            return _this.evaluationOption;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    // custom handler
    EvaluationOptionService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.' || 'Server error');
    };
    EvaluationOptionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EvaluationOptionService);
    return EvaluationOptionService;
}());



/***/ }),

/***/ "./src/app/_services/evaluationparameter.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/_services/evaluationparameter.service.ts ***!
  \**********************************************************/
/*! exports provided: EvaluationParameterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluationParameterService", function() { return EvaluationParameterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* * * ./app/comments/components/comment.service.ts * * */
// Imports




// Import RxJs required methods


var EvaluationParameterService = /** @class */ (function () {
    // Resolve HTTP using the constructor
    function EvaluationParameterService(http) {
        this.http = http;
    }
    EvaluationParameterService.prototype.getEvaluationParameter = function (url) {
        var _this = this;
        // ...using get request
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (evaluationParameter) {
            _this.evaluationParameter = evaluationParameter;
            return _this.evaluationParameter;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    EvaluationParameterService.prototype.updateEvaluationParameter = function (url, evaluationParameter) {
        var _this = this;
        return this.http.put(url, evaluationParameter) // ...using put request
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resultEvaluationParam) {
            _this.evaluationParameter = resultEvaluationParam;
            return _this.evaluationParameter;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    // custom handler
    EvaluationParameterService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.' || 'Server error');
    };
    EvaluationParameterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EvaluationParameterService);
    return EvaluationParameterService;
}());



/***/ }),

/***/ "./src/app/_services/evaluatortype.service.ts":
/*!****************************************************!*\
  !*** ./src/app/_services/evaluatortype.service.ts ***!
  \****************************************************/
/*! exports provided: EvaluatorTypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluatorTypeService", function() { return EvaluatorTypeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* * * ./app/comments/components/comment.service.ts * * */
// Imports




// Import RxJs required methods


var EvaluatorTypeService = /** @class */ (function () {
    // Resolve HTTP using the constructor
    function EvaluatorTypeService(http) {
        this.http = http;
    }
    EvaluatorTypeService.prototype.getEvaluatorTypes = function (url) {
        var _this = this;
        // ...using get request
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (evaluatorType) {
            _this.evaluatorType = evaluatorType;
            return _this.evaluatorType;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    // custom handler
    EvaluatorTypeService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.' || 'Server error');
    };
    EvaluatorTypeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EvaluatorTypeService);
    return EvaluatorTypeService;
}());



/***/ }),

/***/ "./src/app/_services/file.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/file.service.ts ***!
  \*******************************************/
/*! exports provided: FilesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesService", function() { return FilesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var FilesService = /** @class */ (function () {
    function FilesService(http) {
        this.http = http;
    }
    FilesService.prototype.getFiles = function (url) {
        var _this = this;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (files) {
            _this.files = files;
            return _this.files;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    FilesService.prototype.deleteFile = function (url) {
        return this.http.delete(url) // ...using put request
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    FilesService.prototype.downloadFile = function (url) {
        return this.http
            .get(url, { responseType: "blob"
        })
            //this.getAuthHeader(false, true))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // custom handler
    FilesService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.' || 'Server error');
    };
    FilesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FilesService);
    return FilesService;
}());



/***/ }),

/***/ "./src/app/_services/heritage.service.ts":
/*!***********************************************!*\
  !*** ./src/app/_services/heritage.service.ts ***!
  \***********************************************/
/*! exports provided: HeritageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeritageService", function() { return HeritageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var HeritageService = /** @class */ (function () {
    function HeritageService(http) {
        this.http = http;
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    Object.defineProperty(HeritageService.prototype, "data", {
        get: function () {
            return this.dataChange.value;
        },
        enumerable: true,
        configurable: true
    });
    /*
    getAllHeritage(url: string): Observable<IHeritage[]> {
        return this.http.get<IHeritage[]>(url)
        .pipe(
            catchError(this.handleError)
        );
    }
    */
    HeritageService.prototype.getAllHeritage = function (url) {
        var _this = this;
        this.http.get(url).subscribe(function (data) {
            _this.dataChange.next(data);
        }, function (error) {
            console.log(error.name + ' ' + error.message);
        });
    };
    HeritageService.prototype.getHeritage = function (url) {
        var _this = this;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (heritage) {
            _this.heritage = heritage;
            return _this.heritage;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    HeritageService.prototype.addHeritage = function (url, heritage) {
        var _this = this;
        return this.http.post(url, heritage)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (heritage) {
            _this.heritage = heritage;
            return _this.heritage;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        /*
        this.http.post<IHeritage>(url, heritage, httpOptions).subscribe(data => {
            this.heritage = data;
        },
        (err: HttpErrorResponse) => {
            console.log (err.name + ' ' + err.message);
        });
        */
    };
    HeritageService.prototype.updateHeritage = function (url, heritage) {
        var _this = this;
        return this.http.put(url, heritage) // ...using put request
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (heritage) {
            _this.heritage = heritage;
            return _this.heritage;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        /*
        this.http.put<IHeritage>(url, heritage, httpOptions).subscribe(data => {
            this.heritage = data;
        },
        (err: HttpErrorResponse) => {
            console.log (err.name + ' ' + err.message);
        });
        */
    };
    HeritageService.prototype.deleteHeritage = function (url, id) {
        return this.http.delete(url + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        /*
        this.http.delete(url + id, httpOptions).subscribe(data => {
            console.log('Heritage was successfully deleted');
        },
        (err: HttpErrorResponse) => {
            console.log (err.name + ' ' + err.message);
        });
        */
    };
    // custom handler
    HeritageService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    HeritageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HeritageService);
    return HeritageService;
}());



/***/ }),

/***/ "./src/app/_services/heritageevaluation.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/_services/heritageevaluation.service.ts ***!
  \*********************************************************/
/*! exports provided: HeritageEvaluationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeritageEvaluationService", function() { return HeritageEvaluationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var HeritageEvaluationService = /** @class */ (function () {
    function HeritageEvaluationService(http) {
        this.http = http;
    }
    HeritageEvaluationService.prototype.getHeritageEvaluations = function (url) {
        var _this = this;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (evaluations) {
            _this.heritageEvaluations = evaluations;
            return _this.heritageEvaluations;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    HeritageEvaluationService.prototype.evaluateHeritage = function (url) {
        var _this = this;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (heritage) {
            _this.heritage = heritage;
            return _this.heritage;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    HeritageEvaluationService.prototype.addHeritageEvaluation = function (url, evaluation) {
        var _this = this;
        return this.http.post(url, evaluation)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resultEvaluation) {
            _this.heritageEvaluation = resultEvaluation;
            return _this.heritageEvaluation;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    HeritageEvaluationService.prototype.updateHeritageEvaluation = function (url, evaluation) {
        var _this = this;
        return this.http.put(url, evaluation) // ...using put request
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resultEvaluation) {
            _this.heritageEvaluation = resultEvaluation;
            return _this.heritageEvaluation;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    HeritageEvaluationService.prototype.deleteHeritageEvaluation = function (url, id) {
        return this.http.delete(url + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // custom handler
    HeritageEvaluationService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    HeritageEvaluationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HeritageEvaluationService);
    return HeritageEvaluationService;
}());



/***/ }),

/***/ "./src/app/_services/heritagegameanalysis.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/_services/heritagegameanalysis.service.ts ***!
  \***********************************************************/
/*! exports provided: HeritageGameAnalysisService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeritageGameAnalysisService", function() { return HeritageGameAnalysisService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm5/add/observable/of.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var HeritageGameAnalysisService = /** @class */ (function () {
    function HeritageGameAnalysisService(http) {
        this.http = http;
    }
    HeritageGameAnalysisService.prototype.getHeritageGameAnalysis = function (url) {
        var _this = this;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (gameAnalysis) {
            _this.heritageGameAnalysis = gameAnalysis;
            return _this.heritageGameAnalysis;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    HeritageGameAnalysisService.prototype.getHeritageAnalysisBestRoute = function (url) {
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (gameAnalysisBestRoute) {
            return gameAnalysisBestRoute;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    HeritageGameAnalysisService.prototype.addHeritageGameAnalysis = function (url, gameAnalysis) {
        var _this = this;
        return this.http.post(url, gameAnalysis)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resultGameAnalysis) {
            _this.heritageGameAnalysis = resultGameAnalysis;
            return _this.heritageGameAnalysis;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    HeritageGameAnalysisService.prototype.updateHeritageGameAnalysis = function (url, gameAnalysis) {
        var _this = this;
        return this.http.put(url, gameAnalysis) // ...using put request
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resultGameAnalysis) {
            _this.heritageGameAnalysis = resultGameAnalysis;
            return _this.heritageGameAnalysis;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    HeritageGameAnalysisService.prototype.deleteHeritageGameAnalysis = function (url, id) {
        return this.http.delete(url + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    // custom handler
    HeritageGameAnalysisService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    HeritageGameAnalysisService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HeritageGameAnalysisService);
    return HeritageGameAnalysisService;
}());



/***/ }),

/***/ "./src/app/_services/index.ts":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: AlertService, AuthenticationService, UserService, HeritageService, FilesService, EmitterService, CommentService, ActivationModeService, EvaluationOptionService, EvaluatorTypeService, HeritageEvaluationService, HeritageGameAnalysisService, EvaluationParameterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.service */ "./src/app/_services/alert.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_service__WEBPACK_IMPORTED_MODULE_0__["AlertService"]; });

/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/_services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]; });

/* harmony import */ var _heritage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./heritage.service */ "./src/app/_services/heritage.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeritageService", function() { return _heritage_service__WEBPACK_IMPORTED_MODULE_3__["HeritageService"]; });

/* harmony import */ var _file_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./file.service */ "./src/app/_services/file.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilesService", function() { return _file_service__WEBPACK_IMPORTED_MODULE_4__["FilesService"]; });

/* harmony import */ var _emitter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./emitter.service */ "./src/app/_services/emitter.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmitterService", function() { return _emitter_service__WEBPACK_IMPORTED_MODULE_5__["EmitterService"]; });

/* harmony import */ var _comment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comment.service */ "./src/app/_services/comment.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommentService", function() { return _comment_service__WEBPACK_IMPORTED_MODULE_6__["CommentService"]; });

/* harmony import */ var _activationmode_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./activationmode.service */ "./src/app/_services/activationmode.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActivationModeService", function() { return _activationmode_service__WEBPACK_IMPORTED_MODULE_7__["ActivationModeService"]; });

/* harmony import */ var _evaluationoption_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./evaluationoption.service */ "./src/app/_services/evaluationoption.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EvaluationOptionService", function() { return _evaluationoption_service__WEBPACK_IMPORTED_MODULE_8__["EvaluationOptionService"]; });

/* harmony import */ var _evaluatortype_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./evaluatortype.service */ "./src/app/_services/evaluatortype.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EvaluatorTypeService", function() { return _evaluatortype_service__WEBPACK_IMPORTED_MODULE_9__["EvaluatorTypeService"]; });

/* harmony import */ var _heritageevaluation_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./heritageevaluation.service */ "./src/app/_services/heritageevaluation.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeritageEvaluationService", function() { return _heritageevaluation_service__WEBPACK_IMPORTED_MODULE_10__["HeritageEvaluationService"]; });

/* harmony import */ var _heritagegameanalysis_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./heritagegameanalysis.service */ "./src/app/_services/heritagegameanalysis.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeritageGameAnalysisService", function() { return _heritagegameanalysis_service__WEBPACK_IMPORTED_MODULE_11__["HeritageGameAnalysisService"]; });

/* harmony import */ var _evaluationparameter_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./evaluationparameter.service */ "./src/app/_services/evaluationparameter.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EvaluationParameterService", function() { return _evaluationparameter_service__WEBPACK_IMPORTED_MODULE_12__["EvaluationParameterService"]; });
















/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    Object.defineProperty(UserService.prototype, "data", {
        get: function () {
            return this.dataChange.value;
        },
        enumerable: true,
        configurable: true
    });
    UserService.prototype.getDialogData = function () {
        return this.dialogData;
    };
    UserService.prototype.getAllUsers = function (url) {
        var _this = this;
        this.http.get(url, httpOptions).subscribe(function (data) {
            _this.dataChange.next(data);
        }, function (err) {
            console.log(err.name + ' ' + err.message);
        });
    };
    UserService.prototype.getUserById = function (url, id) {
        var _this = this;
        this.http.get(url, httpOptions).subscribe(function (data) {
            _this.dialogData = data;
        }, function (err) {
            console.log(err.name + ' ' + err.message);
        });
    };
    UserService.prototype.addUser = function (url, user) {
        var _this = this;
        return this.http.post(url, user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            _this.user = user;
            return _this.user;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        /*
        this.http.post(url, user, httpOptions).subscribe(data => {
            this.dialogData = data;
        },
        (err: HttpErrorResponse) => {
            console.log (err.name + ' ' + err.message);
        });
        */
    };
    UserService.prototype.register = function (url, user) {
        var _this = this;
        return this.http.post(url, user, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            _this.user = user;
            return _this.user;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    UserService.prototype.updateUser = function (url, user) {
        var _this = this;
        return this.http.put(url, user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            _this.user = user;
            return _this.user;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        /*
        this.http.put(url, user, httpOptions).subscribe(data => {
            this.dialogData = data;
        },
        (err: HttpErrorResponse) => {
            console.log (err.name + ' ' + err.message);
        });
        */
    };
    UserService.prototype.deleteUser = function (url, id) {
        return this.http.delete(url + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        /*
        this.http.delete(url + id, httpOptions).subscribe(data => {
            console.log('User was successfully deleted');
        },
        (err: HttpErrorResponse) => {
            console.log (err.name + ' ' + err.message);
        });
        */
    };
    UserService.prototype.currentUserId = function () {
        var user = JSON.parse(localStorage.getItem('currentUser'));
        if (user != null && user != rxjs__WEBPACK_IMPORTED_MODULE_2__["empty"]) {
            return user.id;
        }
        else {
            return 0;
        }
    };
    UserService.prototype.currentUserName = function () {
        var user = JSON.parse(localStorage.getItem('currentUser'));
        if (user != null && user != rxjs__WEBPACK_IMPORTED_MODULE_2__["empty"]) {
            return user.userName;
        }
        else {
            return 'Unknown';
        }
    };
    UserService.prototype.isReadOnly = function () {
        var user = JSON.parse(localStorage.getItem('currentUser'));
        if (user != null && user != rxjs__WEBPACK_IMPORTED_MODULE_2__["empty"]) {
            return user.isReadOnly;
        }
        else {
            return true;
        }
    };
    UserService.prototype.canComment = function () {
        var user = JSON.parse(localStorage.getItem('currentUser'));
        if (user != null && user != rxjs__WEBPACK_IMPORTED_MODULE_2__["empty"]) {
            return user.canComment || user.isContributer;
        }
        else {
            return false;
        }
    };
    UserService.prototype.canEdit = function () {
        var user = JSON.parse(localStorage.getItem('currentUser'));
        if (user != null && user != rxjs__WEBPACK_IMPORTED_MODULE_2__["empty"]) {
            return user.isContributer;
        }
        else {
            return false;
        }
    };
    UserService.prototype.isAdmin = function () {
        var user = JSON.parse(localStorage.getItem('currentUser'));
        if (user != null && user != rxjs__WEBPACK_IMPORTED_MODULE_2__["empty"]) {
            return user.isAdmin;
        }
        else {
            return false;
        }
    };
    // custom handler
    UserService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/_shared/global.ts":
/*!***********************************!*\
  !*** ./src/app/_shared/global.ts ***!
  \***********************************/
/*! exports provided: Global */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Global", function() { return Global; });
var Global = /** @class */ (function () {
    function Global() {
    }
    Global.BASE_USER_ENDPOINT = 'api/User/';
    Global.BASE_HERITAGE_ENDPOINT = 'api/Heritage/';
    Global.BASE_FILE_ENDPOINT = 'api/File/';
    Global.BASE_HERITAGE_COMMENT_ENDPOINT = 'api/HeritageComment/';
    Global.BASE_ACTIVATION_MODE_ENDPOINT = 'api/ActivationMode/';
    Global.BASE_HERITAGE_GAME_ANALYSIS_ENDPOINT = 'api/HeritageGameAnalysis/';
    Global.BASE_HERITAGE_EVALUATION_ENDPOINT = 'api/HeritageEvaluation/';
    Global.BASE_EVALUATION_OPTION_ENDPOINT = 'api/EvaluationOption/';
    Global.BASE_EVALUATOR_TYPE_ENDPOINT = 'api/EvaluatorType/';
    Global.BASE_EVALUATION_PARAMETER_ENDPOINT = 'api/EvaluationParameter/';
    return Global;
}());



/***/ }),

/***/ "./src/app/_shared/index.ts":
/*!**********************************!*\
  !*** ./src/app/_shared/index.ts ***!
  \**********************************/
/*! exports provided: Global */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ "./src/app/_shared/global.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Global", function() { return _global__WEBPACK_IMPORTED_MODULE_0__["Global"]; });




/***/ }),

/***/ "./src/app/activation-mode-list/activation-mode-list.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/activation-mode-list/activation-mode-list.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tblcontainer mat-elevation-z8\">\n\n  <div class=\"form\">\n    <mat-form-field floatPlaceholder=\"never\" color=\"accent\">\n      <input matInput #filter placeholder=\"Filter activation mode\">\n    </mat-form-field>\n  </div>\n\n  <mat-table #table [dataSource]=\"dataSource\" matSort class=\"mat-cell\">\n\n    <!--- Note that these columns can be defined in any order.\n          The actual rendered columns are set as a property on the row definition\" -->\n\n    <!-- ID Column -->\n    <ng-container matColumnDef=\"id\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>编号</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\" >{{row.id}}</mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"activationModeName\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>名称</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.activationModeName}}</mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"upperBound\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>上界</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.upperBound}}</mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"lowerBound\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>下界</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.lowerBound}}</mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"activationModeDescription\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>描述</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.activationModeDescription}}</mat-cell>\n    </ng-container>\n    \n    <!-- actions -->\n    <ng-container matColumnDef=\"actions\">\n      <mat-header-cell *matHeaderCellDef>\n        <button mat-icon-button color=\"primary\" (click)=\"addNew()\">\n          <mat-icon aria-label=\"Example icon-button with a heart icon\">add</mat-icon>\n        </button>\n        <button mat-icon-button (click)=\"refresh()\">\n          <mat-icon>refresh</mat-icon>\n        </button>\n      </mat-header-cell>\n\n      <mat-cell *matCellDef=\"let row;\">\n        <button mat-icon-button color=\"accent\" (click)=\"startEdit(row.id, row.activationModeName, row.upperBound, row.lowerBound, row.activationModeDescription)\">\n          <mat-icon aria-label=\"Edit\">edit</mat-icon>\n        </button>\n\n        <button mat-icon-button color=\"accent\" (click)=\"deleteItem(row.id, row.activationModeName, row.upperBound, row.lowerBound, row.activationModeDescription)\">\n          <mat-icon aria-label=\"Delete\">delete</mat-icon>\n        </button>\n      </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n\n\n  <div class=\"no-results\" [style.display]=\"dataSource.renderedData.length == 0 ? '' : 'none'\">\n    No results\n  </div>\n\n  <mat-paginator #paginator\n                 [length]=\"dataSource.filteredData.length\"\n                 [pageIndex]=\"0\"\n                 [pageSize]=\"10\"\n                 [pageSizeOptions]=\"[5, 10, 25, 100]\">\n  </mat-paginator>\n</div>\n"

/***/ }),

/***/ "./src/app/activation-mode-list/activation-mode-list.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/activation-mode-list/activation-mode-list.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spinner {\n  top: 45%;\n  left: 47%;\n  position: fixed; }\n\n.contactlist-container, #paginator {\n  display: flex;\n  flex-direction: column;\n  min-width: 300px;\n  max-width: 1200px;\n  max-height: 700px;\n  overflow: auto;\n  margin: 0 auto; }\n\n/* Toolbar */\n\n.spacer {\n  flex: 1 1 auto; }\n"

/***/ }),

/***/ "./src/app/activation-mode-list/activation-mode-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/activation-mode-list/activation-mode-list.component.ts ***!
  \************************************************************************/
/*! exports provided: ActivationModeListComponent, ActModeDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivationModeListComponent", function() { return ActivationModeListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActModeDataSource", function() { return ActModeDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _dialogs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_dialogs */ "./src/app/_dialogs/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_shared */ "./src/app/_shared/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ActivationModeListComponent = /** @class */ (function () {
    function ActivationModeListComponent(httpClient, dialog, _actModeService) {
        this.httpClient = httpClient;
        this.dialog = dialog;
        this._actModeService = _actModeService;
        this.displayedColumns = ['id', 'activationModeName', 'upperBound', 'lowerBound', 'actions'];
    }
    ActivationModeListComponent.prototype.ngOnInit = function () {
        this.loadingState = true;
        this.loadData();
    };
    ActivationModeListComponent.prototype.refresh = function () {
        this.loadingState = true;
        this.loadData();
    };
    ActivationModeListComponent.prototype.addNew = function (activationMode) {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs__WEBPACK_IMPORTED_MODULE_5__["ActivationModeAddDialogComponent"], {
            data: { actMode: activationMode }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === 1) {
                // After dialog is closed we're doing frontend updates
                // For add we're just pushing a new row inside DataService
                _this.actModeService.dataChange.value.push(dialogRef.componentInstance.newActMode);
                _this.refreshTable();
            }
        });
    };
    ActivationModeListComponent.prototype.startEdit = function (id, activationModeName, upperBound, lowerBound, activationModeDescription) {
        var _this = this;
        this.id = id;
        // index row is used just for debugging proposes and can be removed
        console.log(this.id);
        var dialogRef = this.dialog.open(_dialogs__WEBPACK_IMPORTED_MODULE_5__["ActivationModeEditDialogComponent"], {
            data: { id: id, activationModeName: activationModeName, upperBound: upperBound, lowerBound: lowerBound, activationModeDescription: activationModeDescription }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === 1) {
                // When using an edit things are little different, firstly we find record inside DataService by id
                var foundIndex = _this.actModeService.dataChange.value.findIndex(function (x) { return x.id === _this.id; });
                // Then you update that record using data from dialogData (values you enetered)
                _this.actModeService.dataChange.value[foundIndex] = dialogRef.componentInstance.actMode;
                // And lastly refresh table
                _this.refreshTable();
            }
        });
    };
    ActivationModeListComponent.prototype.deleteItem = function (id, actModeName, upperBound, lowerBound, activationModeDescription) {
        var _this = this;
        this.id = id;
        var dialogRef = this.dialog.open(_dialogs__WEBPACK_IMPORTED_MODULE_5__["ActivationModeDeleteDialogComponent"], {
            data: { id: id, activationModeName: actModeName, upperBound: upperBound, lowerBound: lowerBound, activationModeDescription: activationModeDescription }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === 1) {
                var foundIndex = _this.actModeService.dataChange.value.findIndex(function (x) { return x.id === _this.id; });
                // for delete we use splice in order to remove single object from DataService
                _this.actModeService.dataChange.value.splice(foundIndex, 1);
                _this.refreshTable();
            }
        });
    };
    // If you don't need a filter or a pagination this can be simplified, you just use code from else block
    ActivationModeListComponent.prototype.refreshTable = function () {
        // if there's a paginator active we're using it for refresh
        if (this.dataSource._paginator.hasNextPage()) {
            this.dataSource._paginator.nextPage();
            this.dataSource._paginator.previousPage();
            // in case we're on last page this if will tick
        }
        else if (this.dataSource._paginator.hasPreviousPage()) {
            this.dataSource._paginator.previousPage();
            this.dataSource._paginator.nextPage();
            // in all other cases including active filter we do it like this
        }
        else {
            this.dataSource.filter = '';
            this.dataSource.filter = this.filter.nativeElement.value;
        }
    };
    ActivationModeListComponent.prototype.loadData = function () {
        var _this = this;
        this.loadingState = false;
        this.actModeService = new _services__WEBPACK_IMPORTED_MODULE_6__["ActivationModeService"](this.httpClient);
        this.dataSource = new ActModeDataSource(this.actModeService, this.paginator, this.sort);
        rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].fromEvent(this.filter.nativeElement, 'keyup')
            .debounceTime(150)
            .distinctUntilChanged()
            .subscribe(function () {
            if (!_this.dataSource) {
                return;
            }
            _this.dataSource.filter = _this.filter.nativeElement.value;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], ActivationModeListComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], ActivationModeListComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('filter'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ActivationModeListComponent.prototype, "filter", void 0);
    ActivationModeListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-activation-mode-list',
            template: __webpack_require__(/*! ./activation-mode-list.component.html */ "./src/app/activation-mode-list/activation-mode-list.component.html"),
            styles: [__webpack_require__(/*! ./activation-mode-list.component.scss */ "./src/app/activation-mode-list/activation-mode-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _services__WEBPACK_IMPORTED_MODULE_6__["ActivationModeService"]])
    ], ActivationModeListComponent);
    return ActivationModeListComponent;
}());

var ActModeDataSource = /** @class */ (function (_super) {
    __extends(ActModeDataSource, _super);
    function ActModeDataSource(_actModeDataService, _paginator, _sort) {
        var _this = _super.call(this) || this;
        _this._actModeDataService = _actModeDataService;
        _this._paginator = _paginator;
        _this._sort = _sort;
        _this._filterChange = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]('');
        _this.filteredData = [];
        _this.renderedData = [];
        // Reset to the first page when the user changes the filter.
        _this._filterChange.subscribe(function () { return _this._paginator.pageIndex = 0; });
        return _this;
    }
    Object.defineProperty(ActModeDataSource.prototype, "filter", {
        get: function () {
            return this._filterChange.value;
        },
        set: function (filter) {
            this._filterChange.next(filter);
        },
        enumerable: true,
        configurable: true
    });
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    ActModeDataSource.prototype.connect = function () {
        var _this = this;
        // Listen for any changes in the base data, sorting, filtering, or pagination
        var displayDataChanges = [
            this._actModeDataService.dataChange,
            this._sort.sortChange,
            this._filterChange,
            this._paginator.page
        ];
        this._actModeDataService.getAllActModes(_shared__WEBPACK_IMPORTED_MODULE_7__["Global"].BASE_ACTIVATION_MODE_ENDPOINT + 'getAllActMode');
        return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].merge.apply(rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"], displayDataChanges).map(function () {
            // Filter data
            _this.filteredData = _this._actModeDataService.data.slice().filter(function (actMode) {
                var searchStr = (actMode.id + actMode.activationModeName).toLowerCase();
                return searchStr.indexOf(_this.filter.toLowerCase()) !== -1;
            });
            // Sort filtered data
            var sortedData = _this.sortData(_this.filteredData.slice());
            // Grab the page's slice of the filtered sorted data.
            var startIndex = _this._paginator.pageIndex * _this._paginator.pageSize;
            _this.renderedData = sortedData.splice(startIndex, _this._paginator.pageSize);
            return _this.renderedData;
        });
    };
    ActModeDataSource.prototype.disconnect = function () {
    };
    /** Returns a sorted copy of the database data. */
    ActModeDataSource.prototype.sortData = function (data) {
        var _this = this;
        if (!this._sort.active || this._sort.direction === '') {
            return data;
        }
        return data.sort(function (a, b) {
            var _a, _b;
            var propertyA = '';
            var propertyB = '';
            switch (_this._sort.active) {
                case 'id':
                    _a = [a.id, b.id], propertyA = _a[0], propertyB = _a[1];
                    break;
                case 'userName':
                    _b = [a.activationModeName, b.activationModeName], propertyA = _b[0], propertyB = _b[1];
                    break;
            }
            var valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            var valueB = isNaN(+propertyB) ? propertyB : +propertyB;
            return (valueA < valueB ? -1 : 1) * (_this._sort.direction === 'asc' ? 1 : -1);
        });
    };
    return ActModeDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["DataSource"]));



/***/ }),

/***/ "./src/app/activation-mode-list/activation-mode-list.route.ts":
/*!********************************************************************!*\
  !*** ./src/app/activation-mode-list/activation-mode-list.route.ts ***!
  \********************************************************************/
/*! exports provided: activationModeListRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activationModeListRoutes", function() { return activationModeListRoutes; });
/* harmony import */ var _activation_mode_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activation-mode-list.component */ "./src/app/activation-mode-list/activation-mode-list.component.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_guards */ "./src/app/_guards/index.ts");


// Route Configuration
var activationModeListRoutes = [
    { path: 'activationmodelist', component: _activation_mode_list_component__WEBPACK_IMPORTED_MODULE_0__["ActivationModeListComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] }
];


/***/ }),

/***/ "./src/app/app.comment.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.comment.module.ts ***!
  \***************************************/
/*! exports provided: CommentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentModule", function() { return CommentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.material.module */ "./src/app/app.material.module.ts");
/* harmony import */ var _comment_comment_box_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comment/comment-box.component */ "./src/app/comment/comment-box.component.ts");
/* harmony import */ var _comment_comment_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comment/comment-list.component */ "./src/app/comment/comment-list.component.ts");
/* harmony import */ var _comment_comment_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./comment/comment-form.component */ "./src/app/comment/comment-form.component.ts");
/* harmony import */ var _comment_comment_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./comment/comment.component */ "./src/app/comment/comment.component.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var CommentModule = /** @class */ (function () {
    function CommentModule() {
    }
    CommentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["JsonpModule"],
                _app_material_module__WEBPACK_IMPORTED_MODULE_4__["AppMaterialModule"]
            ],
            declarations: [
                _comment_comment_box_component__WEBPACK_IMPORTED_MODULE_5__["CommentBoxComponent"],
                _comment_comment_form_component__WEBPACK_IMPORTED_MODULE_7__["CommentFormComponent"],
                _comment_comment_list_component__WEBPACK_IMPORTED_MODULE_6__["CommentListComponent"],
                _comment_comment_component__WEBPACK_IMPORTED_MODULE_8__["CommentComponent"]
            ],
            providers: [
                _services__WEBPACK_IMPORTED_MODULE_9__["CommentService"]
            ],
            exports: [
                _comment_comment_box_component__WEBPACK_IMPORTED_MODULE_5__["CommentBoxComponent"],
                _comment_comment_form_component__WEBPACK_IMPORTED_MODULE_7__["CommentFormComponent"],
                _comment_comment_list_component__WEBPACK_IMPORTED_MODULE_6__["CommentListComponent"],
                _comment_comment_component__WEBPACK_IMPORTED_MODULE_8__["CommentComponent"]
            ]
        })
    ], CommentModule);
    return CommentModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(auth) {
        this.auth = auth;
        this.title = 'HerritageApp';
        auth.handleAuthentication();
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.material.module.ts":
/*!****************************************!*\
  !*** ./src/app/app.material.module.ts ***!
  \****************************************/
/*! exports provided: AppMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMaterialModule", function() { return AppMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppMaterialModule = /** @class */ (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"],
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"],
            ]
        })
    ], AppMaterialModule);
    return AppMaterialModule;
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _heritage_detail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./heritage-detail */ "./src/app/heritage-detail/index.ts");
/* harmony import */ var _heritage_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./heritage-list */ "./src/app/heritage-list/index.ts");
/* harmony import */ var _welcome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./welcome */ "./src/app/welcome/index.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login */ "./src/app/login/index.ts");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register */ "./src/app/register/index.ts");
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_directives */ "./src/app/_directives/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_services */ "./src/app/_services/index.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_guards */ "./src/app/_guards/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_helpers */ "./src/app/_helpers/index.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _dialogs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./_dialogs */ "./src/app/_dialogs/index.ts");
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app.material.module */ "./src/app/app.material.module.ts");
/* harmony import */ var _app_primeng_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./app.primeng.module */ "./src/app/app.primeng.module.ts");
/* harmony import */ var _app_comment_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./app.comment.module */ "./src/app/app.comment.module.ts");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/user-list/user-list.component.ts");
/* harmony import */ var _file_manager_file_manager_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./file-manager/file-manager.component */ "./src/app/file-manager/file-manager.component.ts");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./_layout */ "./src/app/_layout/index.ts");
/* harmony import */ var _heritage_evaluation_heritage_evaluation_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./heritage-evaluation/heritage-evaluation.component */ "./src/app/heritage-evaluation/heritage-evaluation.component.ts");
/* harmony import */ var _heritage_nav_heritage_nav_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./heritage-nav/heritage-nav.component */ "./src/app/heritage-nav/heritage-nav.component.ts");
/* harmony import */ var _heritage_activation_heritage_activation_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./heritage-activation/heritage-activation.component */ "./src/app/heritage-activation/heritage-activation.component.ts");
/* harmony import */ var _heritage_analysis_heritage_analysis_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./heritage-analysis/heritage-analysis.component */ "./src/app/heritage-analysis/heritage-analysis.component.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _activation_mode_list_activation_mode_list_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./activation-mode-list/activation-mode-list.component */ "./src/app/activation-mode-list/activation-mode-list.component.ts");
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./_pipes */ "./src/app/_pipes/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _heritage_detail__WEBPACK_IMPORTED_MODULE_4__["HeritageDetailComponent"],
                _heritage_list__WEBPACK_IMPORTED_MODULE_5__["HeritageListComponent"],
                _welcome__WEBPACK_IMPORTED_MODULE_6__["WelcomeComponent"],
                _login__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _register__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
                _directives__WEBPACK_IMPORTED_MODULE_10__["AlertComponent"],
                _dialogs__WEBPACK_IMPORTED_MODULE_18__["AddDialogComponent"],
                _dialogs__WEBPACK_IMPORTED_MODULE_18__["EditDialogComponent"],
                _dialogs__WEBPACK_IMPORTED_MODULE_18__["DeleteDialogComponent"],
                _dialogs__WEBPACK_IMPORTED_MODULE_18__["HeritageDeleteDialogComponent"],
                _dialogs__WEBPACK_IMPORTED_MODULE_18__["ActivationModeAddDialogComponent"],
                _dialogs__WEBPACK_IMPORTED_MODULE_18__["ActivationModeEditDialogComponent"],
                _dialogs__WEBPACK_IMPORTED_MODULE_18__["ActivationModeDeleteDialogComponent"],
                _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_22__["UserListComponent"],
                _file_manager_file_manager_component__WEBPACK_IMPORTED_MODULE_23__["FileManagerComponent"],
                _layout__WEBPACK_IMPORTED_MODULE_24__["AppHeaderComponent"],
                _layout__WEBPACK_IMPORTED_MODULE_24__["AppLayoutComponent"],
                _layout__WEBPACK_IMPORTED_MODULE_24__["SiteHeaderComponent"],
                _layout__WEBPACK_IMPORTED_MODULE_24__["SiteFooterComponent"],
                _layout__WEBPACK_IMPORTED_MODULE_24__["SiteLayoutComponent"],
                _heritage_evaluation_heritage_evaluation_component__WEBPACK_IMPORTED_MODULE_25__["HeritageEvaluationComponent"],
                _heritage_nav_heritage_nav_component__WEBPACK_IMPORTED_MODULE_26__["HeritageNavComponent"],
                _heritage_activation_heritage_activation_component__WEBPACK_IMPORTED_MODULE_27__["HeritageActivationComponent"],
                _heritage_analysis_heritage_analysis_component__WEBPACK_IMPORTED_MODULE_28__["HeritageAnalysisComponent"],
                _activation_mode_list_activation_mode_list_component__WEBPACK_IMPORTED_MODULE_32__["ActivationModeListComponent"],
                _pipes__WEBPACK_IMPORTED_MODULE_33__["EvaluationOptionPipe"],
                _pipes__WEBPACK_IMPORTED_MODULE_33__["EvaluatorTypePipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__["FlexLayoutModule"],
                _app_material_module__WEBPACK_IMPORTED_MODULE_19__["AppMaterialModule"],
                _app_primeng_module__WEBPACK_IMPORTED_MODULE_20__["AppPrimeNGModule"],
                _app_comment_module__WEBPACK_IMPORTED_MODULE_21__["CommentModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_7__["routing"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_29__["TreeModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_30__["DropdownModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_29__["DialogModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_29__["RadioButtonModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_29__["ConfirmDialogModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_29__["FieldsetModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrModule"].forRoot({
                    timeOut: 3000,
                    positionClass: 'toast-bottom-right',
                    preventDuplicates: true,
                })
            ],
            entryComponents: [
                _dialogs__WEBPACK_IMPORTED_MODULE_18__["AddDialogComponent"],
                _dialogs__WEBPACK_IMPORTED_MODULE_18__["EditDialogComponent"],
                _dialogs__WEBPACK_IMPORTED_MODULE_18__["DeleteDialogComponent"],
                _dialogs__WEBPACK_IMPORTED_MODULE_18__["HeritageDeleteDialogComponent"],
                _dialogs__WEBPACK_IMPORTED_MODULE_18__["ActivationModeAddDialogComponent"],
                _dialogs__WEBPACK_IMPORTED_MODULE_18__["ActivationModeEditDialogComponent"],
                _dialogs__WEBPACK_IMPORTED_MODULE_18__["ActivationModeDeleteDialogComponent"]
            ],
            providers: [
                _services__WEBPACK_IMPORTED_MODULE_11__["AlertService"],
                _services__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"],
                _services__WEBPACK_IMPORTED_MODULE_11__["UserService"],
                _guards__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"],
                _services__WEBPACK_IMPORTED_MODULE_11__["FilesService"],
                _services__WEBPACK_IMPORTED_MODULE_11__["HeritageService"],
                _services__WEBPACK_IMPORTED_MODULE_11__["ActivationModeService"],
                _services__WEBPACK_IMPORTED_MODULE_11__["EvaluationOptionService"],
                _services__WEBPACK_IMPORTED_MODULE_11__["EvaluatorTypeService"],
                _services__WEBPACK_IMPORTED_MODULE_11__["HeritageEvaluationService"],
                _services__WEBPACK_IMPORTED_MODULE_11__["HeritageGameAnalysisService"],
                primeng_api__WEBPACK_IMPORTED_MODULE_31__["ConfirmationService"],
                _services__WEBPACK_IMPORTED_MODULE_11__["EvaluationParameterService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_13__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_13__["ErrorInterceptor"], multi: true },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.primeng.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.primeng.module.ts ***!
  \***************************************/
/*! exports provided: AppPrimeNGModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppPrimeNGModule", function() { return AppPrimeNGModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/fileupload */ "./node_modules/primeng/fileupload.js");
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_fileupload__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppPrimeNGModule = /** @class */ (function () {
    function AppPrimeNGModule() {
    }
    AppPrimeNGModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [primeng_fileupload__WEBPACK_IMPORTED_MODULE_1__["FileUploadModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_2__["TableModule"]
            ],
            exports: [primeng_fileupload__WEBPACK_IMPORTED_MODULE_1__["FileUploadModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_2__["TableModule"]
            ]
        })
    ], AppPrimeNGModule);
    return AppPrimeNGModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _welcome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome */ "./src/app/welcome/index.ts");
/* harmony import */ var _heritage_detail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./heritage-detail */ "./src/app/heritage-detail/index.ts");
/* harmony import */ var _heritage_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./heritage-list */ "./src/app/heritage-list/index.ts");
/* harmony import */ var _comment_comment_component_route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comment/comment.component.route */ "./src/app/comment/comment.component.route.ts");
/* harmony import */ var _heritage_evaluation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./heritage-evaluation */ "./src/app/heritage-evaluation/index.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login */ "./src/app/login/index.ts");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register */ "./src/app/register/index.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_guards */ "./src/app/_guards/index.ts");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/user-list/user-list.component.ts");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_layout */ "./src/app/_layout/index.ts");
/* harmony import */ var _heritage_activation_heritage_activation_route__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./heritage-activation/heritage-activation.route */ "./src/app/heritage-activation/heritage-activation.route.ts");
/* harmony import */ var _heritage_analysis_heritage_analysis_route__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./heritage-analysis/heritage-analysis.route */ "./src/app/heritage-analysis/heritage-analysis.route.ts");
/* harmony import */ var _heritage_nav_heritage_nav_route__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./heritage-nav/heritage-nav.route */ "./src/app/heritage-nav/heritage-nav.route.ts");
/* harmony import */ var _activation_mode_list_activation_mode_list_route__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./activation-mode-list/activation-mode-list.route */ "./src/app/activation-mode-list/activation-mode-list.route.ts");















var appRoutes = [
    {
        path: '',
        component: _layout__WEBPACK_IMPORTED_MODULE_10__["SiteLayoutComponent"],
        children: [
            { path: '', component: _welcome__WEBPACK_IMPORTED_MODULE_1__["WelcomeComponent"], pathMatch: 'full' },
            { path: 'login', component: _login__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
            { path: 'register', component: _register__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"] },
            { path: 'users', component: _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_9__["UserListComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] }
        ].concat(_heritage_detail__WEBPACK_IMPORTED_MODULE_2__["heritageDetailRoutes"], _heritage_list__WEBPACK_IMPORTED_MODULE_3__["heritageListRoutes"], _comment_comment_component_route__WEBPACK_IMPORTED_MODULE_4__["heritageCommentRoutes"], _heritage_evaluation__WEBPACK_IMPORTED_MODULE_5__["heritageEvaluationRoutes"], _heritage_activation_heritage_activation_route__WEBPACK_IMPORTED_MODULE_11__["heritageActivationRoutes"], _heritage_analysis_heritage_analysis_route__WEBPACK_IMPORTED_MODULE_12__["heritageAnalysisRoutes"], _heritage_nav_heritage_nav_route__WEBPACK_IMPORTED_MODULE_13__["heritageNavRoutes"], _activation_mode_list_activation_mode_list_route__WEBPACK_IMPORTED_MODULE_14__["activationModeListRoutes"])
    },
    // otherwise redirect to home
    { path: '**', redirectTo: '' },
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes, { useHash: true });


/***/ }),

/***/ "./src/app/comment/comment-box.component.html":
/*!****************************************************!*\
  !*** ./src/app/comment/comment-box.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\" *ngIf=\"comment\">\r\n    <mat-card>\r\n    <div class=\"panel-heading\">{{comment.commentUserName}}</div>\r\n    <div class=\"panel-body\">\r\n        {{comment.commentText}}\r\n    </div>\r\n    <div class=\"panel-footer\">        \r\n        <button mat-icon-button color=\"accent\" (click)=\"editComment()\">\r\n            <mat-icon aria-label=\"Edit\">edit</mat-icon>\r\n        </button>\r\n        <button mat-icon-button color=\"accent\" (click)=\"deleteComment()\">\r\n            <mat-icon aria-label=\"Delete\">delete</mat-icon>\r\n        </button>\r\n        <button mat-icon-button color=\"accent\">\r\n            <mat-icon aria-label=\"Good\" (click)=\"thumbUp()\">thumb_up</mat-icon>\r\n            {{ comment.upVoteCount }}\r\n        </button>\r\n        <button mat-icon-button color=\"accent\">\r\n            <mat-icon aria-label=\"Bad\" (click)=\"thumbDown()\">thumb_down</mat-icon>\r\n            {{ comment.downVoteCount }}\r\n        </button>\r\n    </div>\r\n    </mat-card>\r\n</div>"

/***/ }),

/***/ "./src/app/comment/comment-box.component.ts":
/*!**************************************************!*\
  !*** ./src/app/comment/comment-box.component.ts ***!
  \**************************************************/
/*! exports provided: CommentBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentBoxComponent", function() { return CommentBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_shared */ "./src/app/_shared/index.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* * * ./app/comments/components/comment-box.component.ts * * */
// Imports




// Component decorator
var CommentBoxComponent = /** @class */ (function () {
    // Constructor
    function CommentBoxComponent(commentService, userService, toastr) {
        this.commentService = commentService;
        this.userService = userService;
        this.toastr = toastr;
    }
    CommentBoxComponent.prototype.editComment = function () {
        // Emit edit event
        _services__WEBPACK_IMPORTED_MODULE_1__["EmitterService"].get(this.editId).emit(this.comment);
    };
    CommentBoxComponent.prototype.deleteComment = function () {
        var _this = this;
        if (!this.userService.canComment()) {
            this.toastr.error("您没有删除评论的权限。", "权限验证失败");
            return;
        }
        // Call removeComment() from CommentService to delete comment
        this.commentService.removeComment(_shared__WEBPACK_IMPORTED_MODULE_2__["Global"].BASE_HERITAGE_COMMENT_ENDPOINT + this.comment.id).subscribe(function (comments) {
            // Emit list event
            _services__WEBPACK_IMPORTED_MODULE_1__["EmitterService"].get(_this.listId).emit(comments);
        }, function (err) {
            // Log errors if any
            console.log(err);
        });
    };
    CommentBoxComponent.prototype.thumbUp = function () {
        this.comment.upVoteCount += 1;
        this.commentService.updateVote(_shared__WEBPACK_IMPORTED_MODULE_2__["Global"].BASE_HERITAGE_COMMENT_ENDPOINT + this.comment.id, this.comment).subscribe(function (res) { console.log(res); });
    };
    CommentBoxComponent.prototype.thumbDown = function () {
        this.comment.downVoteCount += 1;
        this.commentService.updateVote(_shared__WEBPACK_IMPORTED_MODULE_2__["Global"].BASE_HERITAGE_COMMENT_ENDPOINT + this.comment.id, this.comment).subscribe(function (res) { console.log(res); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CommentBoxComponent.prototype, "comment", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CommentBoxComponent.prototype, "listId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CommentBoxComponent.prototype, "editId", void 0);
    CommentBoxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'comment-box',
            template: __webpack_require__(/*! ./comment-box.component.html */ "./src/app/comment/comment-box.component.html")
        })
        // Component class
        ,
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["CommentService"],
            _services__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], CommentBoxComponent);
    return CommentBoxComponent;
}());



/***/ }),

/***/ "./src/app/comment/comment-form.component.html":
/*!*****************************************************!*\
  !*** ./src/app/comment/comment-form.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"submitComment()\">\r\n    <div class=\"form-group\">\r\n\r\n        <mat-card class=\"comment-form\"> \r\n            <mat-card-header>\r\n                <mat-icon>account_circle</mat-icon>\r\n            </mat-card-header>           \r\n            <mat-card-content>\r\n                <mat-form-field class=\"comment-field\">\r\n                    <input matInput placeholder=\"User Name\" [readonly]='true'> {{model.commentUserName}}\r\n                </mat-form-field>\r\n                <br>\r\n                <mat-form-field class=\"comment-field\">\r\n                    <textarea matInput placeholder=\"Leave a comment\" [(ngModel)]=\"model.commentText\" name=\"commentText\"></textarea>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n            <mat-card-actions>\r\n                <button mat-raised-button *ngIf=\"!editing\" type=\"submit\">添加</button>\r\n                <button mat-raised-button *ngIf=\"editing\" type=\"submit\">编辑</button>\r\n            </mat-card-actions>\r\n        </mat-card>\r\n       \r\n    </div>\r\n</form>"

/***/ }),

/***/ "./src/app/comment/comment-form.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/comment/comment-form.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".comment-form {\n  width: 100%; }\n\n.comment-field {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/comment/comment-form.component.ts":
/*!***************************************************!*\
  !*** ./src/app/comment/comment-form.component.ts ***!
  \***************************************************/
/*! exports provided: CommentFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentFormComponent", function() { return CommentFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_shared */ "./src/app/_shared/index.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* * * ./app/comments/components/comment-form.component.ts * * */
// Imports




// Component decorator
var CommentFormComponent = /** @class */ (function () {
    // Constructor with injected service
    function CommentFormComponent(commentService, userService, toastr) {
        this.commentService = commentService;
        this.userService = userService;
        this.toastr = toastr;
        // Local properties    
        this.editing = false;
        this.model = { id: 0, heritageId: 0, commentUserId: 0, commentUserName: '', commentText: '', commentDate: undefined, upVoteCount: 0, downVoteCount: 0 };
        this.model.commentUserId = this.userService.currentUserId();
        this.model.commentUserName = this.userService.currentUserName();
    }
    ;
    CommentFormComponent.prototype.submitComment = function () {
        var _this = this;
        if (!this.userService.canComment()) {
            this.toastr.error("您没有添加或修改评论的权限。", "权限验证失败");
            return;
        }
        // Variable to hold a reference of addComment/updateComment
        var commentOperation;
        this.model.heritageId = this.heritageId;
        if (!this.editing) {
            // Create a new comment
            commentOperation = this.commentService.addComment(_shared__WEBPACK_IMPORTED_MODULE_1__["Global"].BASE_HERITAGE_COMMENT_ENDPOINT, this.model);
        }
        else {
            // Update an existing comment
            commentOperation = this.commentService.updateComment(_shared__WEBPACK_IMPORTED_MODULE_1__["Global"].BASE_HERITAGE_COMMENT_ENDPOINT + this.model.id, this.model);
        }
        // Subscribe to observable
        commentOperation.subscribe(function (comments) {
            // Emit list event
            _services__WEBPACK_IMPORTED_MODULE_3__["EmitterService"].get(_this.listId).emit(comments);
            // Empty model
            _this.model = { id: 0, heritageId: _this.heritageId, commentUserId: _this.model.commentUserId, commentUserName: _this.model.commentUserName, commentText: '', commentDate: undefined, upVoteCount: 0, downVoteCount: 0 };
            // Switch editing status
            if (_this.editing)
                _this.editing = !_this.editing;
        }, function (err) {
            // Log errors if any
            console.log(err);
        });
    };
    CommentFormComponent.prototype.ngOnChanges = function () {
        var _this = this;
        // Listen to the 'edit'emitted event so as populate the model
        // with the event payload
        _services__WEBPACK_IMPORTED_MODULE_3__["EmitterService"].get(this.editId).subscribe(function (comment) {
            _this.model = comment;
            _this.editing = true;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CommentFormComponent.prototype, "editId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CommentFormComponent.prototype, "listId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CommentFormComponent.prototype, "heritageId", void 0);
    CommentFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'comment-form',
            template: __webpack_require__(/*! ./comment-form.component.html */ "./src/app/comment/comment-form.component.html"),
            styles: [__webpack_require__(/*! ./comment-form.component.scss */ "./src/app/comment/comment-form.component.scss")]
        })
        // Component class
        ,
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["CommentService"],
            _services__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], CommentFormComponent);
    return CommentFormComponent;
}());



/***/ }),

/***/ "./src/app/comment/comment-list.component.html":
/*!*****************************************************!*\
  !*** ./src/app/comment/comment-list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<comment-box [editId]=\"editId\" [listId]=\"listId\" *ngFor=\"let comment of comments\" [comment]=\"comment\"></comment-box>"

/***/ }),

/***/ "./src/app/comment/comment-list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/comment/comment-list.component.ts ***!
  \***************************************************/
/*! exports provided: CommentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentListComponent", function() { return CommentListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_shared */ "./src/app/_shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* * * ./app/comments/components/comment-list.component.ts * * */
// Imports



// Component decorator
var CommentListComponent = /** @class */ (function () {
    // Constructor with injected service
    function CommentListComponent(commentService) {
        this.commentService = commentService;
    }
    CommentListComponent.prototype.loadComments = function () {
        var _this = this;
        // Get all comments
        this.commentService.getComments(_shared__WEBPACK_IMPORTED_MODULE_2__["Global"].BASE_HERITAGE_COMMENT_ENDPOINT + 'getHeritageComment/' + this.heritageId)
            .subscribe(function (comments) { return _this.comments = comments; }, //Bind to view
        function (//Bind to view
        err) {
            // Log errors if any
            console.log(err);
        });
    };
    CommentListComponent.prototype.ngOnInit = function () {
        // Load comments
        this.loadComments();
    };
    CommentListComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        // Listen to the 'list'emitted event so as populate the model
        // with the event payload
        _services__WEBPACK_IMPORTED_MODULE_1__["EmitterService"].get(this.listId).subscribe(function (comments) { _this.loadComments(); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CommentListComponent.prototype, "listId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CommentListComponent.prototype, "editId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CommentListComponent.prototype, "heritageId", void 0);
    CommentListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'comment-list',
            template: __webpack_require__(/*! ./comment-list.component.html */ "./src/app/comment/comment-list.component.html")
        })
        // Component class
        ,
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["CommentService"]])
    ], CommentListComponent);
    return CommentListComponent;
}());



/***/ }),

/***/ "./src/app/comment/comment.component.html":
/*!************************************************!*\
  !*** ./src/app/comment/comment.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"comment-container\" *ngIf=\"heritage\">\n  <mat-toolbar>\n    <span>User Comments: {{ heritage.name }} </span>\n    <span class=\"spacer\"></span>\n    <button type=\"button\" mat-button class=\"form-save\" (click)=\"back()\">返回</button>\n  </mat-toolbar>\n  <mat-card>\n    <img mat-card-image class=\"comment-image\" src=\"..\\..\\assets\\images\\No_Image_Available.jpg\" alt=\"Photo not available\">\n    <mat-card-content>\n      <p>\n        {{ heritage.story }}\n      </p>\n    </mat-card-content>\n  </mat-card>\n  <comment-form [listId]=\"listId\" [editId]=\"editId\" [heritageId]=\"heritage.id\"></comment-form>\n  <comment-list [listId]=\"listId\" [editId]=\"editId\" [heritageId]=\"heritage.id\"></comment-list>\n  <mat-divider></mat-divider>\n</div>"

/***/ }),

/***/ "./src/app/comment/comment.component.route.ts":
/*!****************************************************!*\
  !*** ./src/app/comment/comment.component.route.ts ***!
  \****************************************************/
/*! exports provided: heritageCommentRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "heritageCommentRoutes", function() { return heritageCommentRoutes; });
/* harmony import */ var _comment_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comment.component */ "./src/app/comment/comment.component.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_guards */ "./src/app/_guards/index.ts");


// Route Configuration
var heritageCommentRoutes = [
    { path: 'heritagedecomment/:id', component: _comment_component__WEBPACK_IMPORTED_MODULE_0__["CommentComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] }
];


/***/ }),

/***/ "./src/app/comment/comment.component.scss":
/*!************************************************!*\
  !*** ./src/app/comment/comment.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".comment-container {\n  padding-left: 15%;\n  padding-right: 15%;\n  padding-top: 1%;\n  padding-bottom: 2%; }\n\n.comment-image {\n  -o-object-fit: cover;\n     object-fit: cover;\n  /*this makes de image in src fit to the size of specified below*/\n  width: 50%;\n  /* Here you can use wherever you want to specify the width and also the height of the <img>*/\n  height: 50%;\n  margin-left: auto;\n  margin-right: auto; }\n\n.spacer {\n  flex: 1 1 auto; }\n"

/***/ }),

/***/ "./src/app/comment/comment.component.ts":
/*!**********************************************!*\
  !*** ./src/app/comment/comment.component.ts ***!
  \**********************************************/
/*! exports provided: CommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentComponent", function() { return CommentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_shared */ "./src/app/_shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommentComponent = /** @class */ (function () {
    function CommentComponent(route, router, heritageService) {
        this.route = route;
        this.router = router;
        this.heritageService = heritageService;
        // Event tracking properties
        this.listId = 'COMMENT_COMPONENT_LIST';
        this.editId = 'COMMENT_COMPONENT_EDIT';
    }
    CommentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.param = params['id'];
            // check if ID exists in route & call update or add methods accordingly
            if (_this.param && _this.param != null && _this.param != undefined) {
                _this.heritageService.getHeritage(_shared__WEBPACK_IMPORTED_MODULE_3__["Global"].BASE_HERITAGE_ENDPOINT + _this.param).subscribe(function (result) {
                    _this.heritage = result;
                });
            }
        });
    };
    CommentComponent.prototype.back = function () {
        this.router.navigateByUrl('/heritagelist');
    };
    CommentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comment',
            template: __webpack_require__(/*! ./comment.component.html */ "./src/app/comment/comment.component.html"),
            styles: [__webpack_require__(/*! ./comment.component.scss */ "./src/app/comment/comment.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_2__["HeritageService"]])
    ], CommentComponent);
    return CommentComponent;
}());



/***/ }),

/***/ "./src/app/file-manager/file-manager.component.html":
/*!**********************************************************!*\
  !*** ./src/app/file-manager/file-manager.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span style=\"background-color: #FFFF00\">{{errorMessage}}</span>\n\n<p>Upload File</p>\n\n<p-fileUpload name=\"myfile[]\" \n              url=\"api/File/upload\" \n              (onUpload)=\"onUpload($event)\"\n              (onBeforeSend)=\"onBeforeSend($event)\">\n              \n</p-fileUpload>\n\n<p>上传文件列表</p>\n\n<p-table [columns] = \"cols\" [value]=\"fileList\" [autoLayout]=\"true\">\n    <ng-template pTemplate=\"header\" let-columns>\n        <tr>\n            <th *ngFor=\"let col of columns\" [ngStyle]=\"{'display': col.display}\">\n                {{col.header}}\n            </th>\n            <th style=\"width:4em\"></th>\n            <th style=\"width:4em\"></th>\n        </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n        <tr>\n            <td *ngFor=\"let col of columns\" [ngStyle]=\"{'display': col.display}\">\n                {{rowData[col.field]}}\n            </td>\n            <td>\n                <button type=\"button\" pButton icon=\"fa fa-download\" (click)=\"downloadFile(rowData.id, rowData.fileName)\"></button>\n            </td> \n            <td>\n                <button type=\"button\" pButton icon=\"fa fa-trash-o\" (click)=\"deleteFile(rowData.id)\"></button>\n            </td>   \n        </tr>\n    </ng-template>  \n</p-table>\n\n\n"

/***/ }),

/***/ "./src/app/file-manager/file-manager.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/file-manager/file-manager.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/file-manager/file-manager.component.ts":
/*!********************************************************!*\
  !*** ./src/app/file-manager/file-manager.component.ts ***!
  \********************************************************/
/*! exports provided: FileManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileManagerComponent", function() { return FileManagerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/src/FileSaver.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_shared */ "./src/app/_shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FileManagerComponent = /** @class */ (function () {
    function FileManagerComponent(_FilesService, _UserService) {
        this._FilesService = _FilesService;
        this._UserService = _UserService;
        this.fileList = [];
    }
    Object.defineProperty(FileManagerComponent.prototype, "heritageID", {
        get: function () {
            return this._heritageID;
        },
        set: function (id) {
            this._heritageID = id;
        },
        enumerable: true,
        configurable: true
    });
    FileManagerComponent.prototype.ngOnInit = function () {
        this.cols = [
            { field: 'id', header: 'ID', display: 'none' },
            { field: 'heritageId', header: 'Heritage ID', display: 'none' },
            { field: 'fileName', header: 'File Name', display: 'table-cell' },
            { field: 'filePath', header: 'File Path', display: 'table-cell' },
            { field: 'uploadUserName', header: 'User Name', display: 'table-cell' }
        ];
        this.getFiles();
    };
    FileManagerComponent.prototype.getFiles = function () {
        var _this = this;
        this.errorMessage = "";
        //Clear Filelist
        this.fileList = [];
        // Call the service
        this._FilesService.getFiles(_shared__WEBPACK_IMPORTED_MODULE_3__["Global"].BASE_FILE_ENDPOINT + 'getHeritageFile/' + this.heritageID)
            .subscribe(function (files) {
            _this.fileList = files;
        }, function (error) { return _this.errorMessage = error; });
    };
    FileManagerComponent.prototype.onUpload = function (event) {
        this.getFiles();
    };
    FileManagerComponent.prototype.onBeforeSend = function (event) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            event.xhr.setRequestHeader("Authorization", "Bearer " + currentUser.token);
        }
        event.formData.append('heritageId', this.heritageID);
        event.formData.append('uploadUserId', this._UserService.currentUserId());
    };
    FileManagerComponent.prototype.deleteFile = function (id) {
        var _this = this;
        // Call the service
        this._FilesService.deleteFile(_shared__WEBPACK_IMPORTED_MODULE_3__["Global"].BASE_FILE_ENDPOINT + id)
            .subscribe(function (response) {
            // Refresh file list
            _this.getFiles();
        }, function (error) { return _this.errorMessage = error; });
    };
    FileManagerComponent.prototype.downloadFile = function (id, filename) {
        this._FilesService.downloadFile(_shared__WEBPACK_IMPORTED_MODULE_3__["Global"].BASE_FILE_ENDPOINT + 'downloadFile/' + id).subscribe(function (blob) {
            Object(file_saver__WEBPACK_IMPORTED_MODULE_1__["saveAs"])(blob, filename);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], FileManagerComponent.prototype, "heritageID", null);
    FileManagerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-file-manager',
            template: __webpack_require__(/*! ./file-manager.component.html */ "./src/app/file-manager/file-manager.component.html"),
            styles: [__webpack_require__(/*! ./file-manager.component.scss */ "./src/app/file-manager/file-manager.component.scss")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["FilesService"],
            _services__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], FileManagerComponent);
    return FileManagerComponent;
}());



/***/ }),

/***/ "./src/app/heritage-activation/heritage-activation.component.html":
/*!************************************************************************!*\
  !*** ./src/app/heritage-activation/heritage-activation.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"basic-container\" *ngIf=\"heritage\">\n\n  <mat-toolbar>\n    <span>非遗旅游价值评估: {{ heritage.name }} </span>\n    <span class=\"spacer\"></span>\n    <button type=\"button\" mat-button class=\"form-save\" [routerLink]=\"['/heritagenav', heritage.id]\">返回</button>\n  </mat-toolbar>\n\n  <div class=\"actMode-container\" *ngIf=\"!actModes\">\n    <p>当前旅游价值没有匹配的活化模式！</p>\n  </div>\n\n  <div class=\"actMode-container\" *ngFor=\"let actMode of actModes\">\n    <mat-card>\n      <mat-card-header>\n        <div mat-card-avatar class=\"activation-card\"></div>\n        <mat-card-title>{{ actMode.activationModeName}}</mat-card-title>\n      </mat-card-header>\n      <mat-card-content>\n        <p>\n          {{ actMode.activationModeDescription }}\n        </p>\n      </mat-card-content>\n    </mat-card>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/heritage-activation/heritage-activation.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/heritage-activation/heritage-activation.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spacer {\n  flex: 1 1 auto; }\n\n.basic-container {\n  padding-left: 15%;\n  padding-right: 15%;\n  padding-top: 1%;\n  padding-bottom: 2%; }\n"

/***/ }),

/***/ "./src/app/heritage-activation/heritage-activation.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/heritage-activation/heritage-activation.component.ts ***!
  \**********************************************************************/
/*! exports provided: HeritageActivationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeritageActivationComponent", function() { return HeritageActivationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_shared */ "./src/app/_shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeritageActivationComponent = /** @class */ (function () {
    function HeritageActivationComponent(route, heritageService, actModeService) {
        this.route = route;
        this.heritageService = heritageService;
        this.actModeService = actModeService;
    }
    HeritageActivationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.param = params['id'];
            // check if ID exists in route & call update or add methods accordingly
            if (_this.param && _this.param != null && _this.param != undefined) {
                _this.heritageService.getHeritage(_shared__WEBPACK_IMPORTED_MODULE_3__["Global"].BASE_HERITAGE_ENDPOINT + _this.param).subscribe(function (result) {
                    _this.heritage = result;
                    _this.actModeService.getHeritageActModeById(_shared__WEBPACK_IMPORTED_MODULE_3__["Global"].BASE_ACTIVATION_MODE_ENDPOINT + 'getHeritageActivationModes/' + _this.heritage.id).subscribe(function (data) {
                        _this.actModes = data;
                    });
                });
            }
        });
    };
    HeritageActivationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-heritage-activation',
            template: __webpack_require__(/*! ./heritage-activation.component.html */ "./src/app/heritage-activation/heritage-activation.component.html"),
            styles: [__webpack_require__(/*! ./heritage-activation.component.scss */ "./src/app/heritage-activation/heritage-activation.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services__WEBPACK_IMPORTED_MODULE_2__["HeritageService"],
            _services__WEBPACK_IMPORTED_MODULE_2__["ActivationModeService"]])
    ], HeritageActivationComponent);
    return HeritageActivationComponent;
}());



/***/ }),

/***/ "./src/app/heritage-activation/heritage-activation.route.ts":
/*!******************************************************************!*\
  !*** ./src/app/heritage-activation/heritage-activation.route.ts ***!
  \******************************************************************/
/*! exports provided: heritageActivationRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "heritageActivationRoutes", function() { return heritageActivationRoutes; });
/* harmony import */ var _heritage_activation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./heritage-activation.component */ "./src/app/heritage-activation/heritage-activation.component.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_guards */ "./src/app/_guards/index.ts");


// Route Configuration
var heritageActivationRoutes = [
    { path: 'heritageeactivation/:id', component: _heritage_activation_component__WEBPACK_IMPORTED_MODULE_0__["HeritageActivationComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] }
];


/***/ }),

/***/ "./src/app/heritage-analysis/heritage-analysis.component.html":
/*!********************************************************************!*\
  !*** ./src/app/heritage-analysis/heritage-analysis.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"basic-container\" *ngIf=\"heritage\">\n\n  <div *ngIf=\"heritageGameAnalysis\">\n\n    <form class=\"analysis-form\" (ngSubmit)=\"onSubmit()\" #heritageGameAnalysisForm=\"ngForm\" name=\"heritageGameAnalysis\">\n\n      <mat-toolbar>\n        <span>非遗利益相关者博弈: {{ heritage.name }} </span>\n        <span class=\"spacer\"></span>\n        <button mat-button class=\"form-save\">博弈并保存</button>\n        <button type=\"button\" mat-button class=\"form-save\" [routerLink]=\"['/heritagenav', heritage.id]\">返回</button>\n      </mat-toolbar>\n\n      <mat-grid-list cols=\"10\" rowHeight=\"50px\">\n        <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\">\n          参数\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n          参数值\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"3\" [rowspan]=\"1\">\n          路径i的取值\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"4\" [rowspan]=\"1\">\n          对参数值的分析\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"1\" [rowspan]=\"2\">\n          Ci\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n          <mat-form-field>\n            <input class=\"parameter-field\" matInput placeholder=\"CiA\" [(ngModel)]=\"heritageGameAnalysis.ciA\" name=\"ciA\">\n          </mat-form-field>\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"3\" [rowspan]=\"1\">\n          i <= 8 </mat-grid-tile> <mat-grid-tile [colspan]=\"4\" [rowspan]=\"2\">\n            与传承人单一开发相比，传承人选择合作开发时，由于可能实现规模化生产而降低产品开发成本。即一般应有：ciA>ciB\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n          <mat-form-field>\n            <input class=\"parameter-field\" matInput placeholder=\"CiB\" [(ngModel)]=\"heritageGameAnalysis.ciB\" name=\"ciB\">\n          </mat-form-field>\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"3\" [rowspan]=\"1\">\n          i > 8\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\">\n          Ii\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n          <mat-form-field>\n            <input class=\"parameter-field\" matInput placeholder=\"Ii\" [(ngModel)]=\"heritageGameAnalysis.ii\" name=\"ii\">\n          </mat-form-field>\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"3\" [rowspan]=\"1\">\n          i=9,10,…16\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"4\" [rowspan]=\"1\">\n          当传承人对非遗产品的评估价值较高时，与企业合作开发时可能会要求企业支付知识产权使用费。\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"1\" [rowspan]=\"2\">\n          Pi\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n          <mat-form-field>\n            <input class=\"parameter-field\" matInput placeholder=\"PiA\" [(ngModel)]=\"heritageGameAnalysis.piA\" name=\"piA\">\n          </mat-form-field>\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"3\" [rowspan]=\"1\">\n          i <= 8 </mat-grid-tile> <mat-grid-tile [colspan]=\"4\" [rowspan]=\"2\">\n            与传承人单一开发相比，传承人选择合作开发时，由于有其他利益相关者的参与和支持，营销力度更大，宣传范围更广，因而更有可能采取高价策略，以高价售出非遗产品。即一般应有：piA < piB </mat-grid-tile>\n              <mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n              <mat-form-field>\n                <input class=\"parameter-field\" matInput placeholder=\"PiB\" [(ngModel)]=\"heritageGameAnalysis.piB\" name=\"piB\">\n              </mat-form-field>\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"3\" [rowspan]=\"1\">\n          i > 8\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"1\" [rowspan]=\"2\">\n          Vi5\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n          <mat-form-field>\n            <input class=\"parameter-field\" matInput placeholder=\"Vi5A\" [(ngModel)]=\"heritageGameAnalysis.vi5A\" name=\"vi5A\">\n          </mat-form-field>\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"3\" [rowspan]=\"1\">\n          i=1,2,5,6,9,10,13,14,17,18,21,22\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"4\" [rowspan]=\"2\">\n          当非遗产品开发获政府支持时，消费者出于对政府及其价值判断的信赖，对该非遗产品的价值认可度通常会更高。即一般应有：vi5A > vi5B\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n          <mat-form-field>\n            <input class=\"parameter-field\" matInput placeholder=\"Vi5B\" [(ngModel)]=\"heritageGameAnalysis.vi5B\" name=\"vi5B\">\n          </mat-form-field>\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"3\" [rowspan]=\"1\">\n          i=3,4,7,8,11,12,15,16,19,20,23,24\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"1\" [rowspan]=\"2\">\n          Vi4\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n          <mat-form-field>\n            <input class=\"parameter-field\" matInput placeholder=\"Vi4A\" [(ngModel)]=\"heritageGameAnalysis.vi4A\" name=\"vi4A\">\n          </mat-form-field>\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"3\" [rowspan]=\"1\">\n          i=1,2,3,4,9,10,11,12,17,18,19,20\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"4\" [rowspan]=\"2\">\n          当非遗产品开发能吸引专家参与时，政府出于对专家的专业水平的信任，对该非遗产品的价值认可度通常会更高。即一般应有：vi4A > vi4B\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n          <mat-form-field>\n            <input class=\"parameter-field\" matInput placeholder=\"Vi4B\" [(ngModel)]=\"heritageGameAnalysis.vi4B\" name=\"vi4B\">\n          </mat-form-field>\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"3\" [rowspan]=\"1\">\n          i=5,6,7,8,13,14,15,16,21,22,23,24\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"1\" [rowspan]=\"2\">\n          Vi3\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n          <mat-form-field>\n            <input class=\"parameter-field\" matInput placeholder=\"Vi3A\" [(ngModel)]=\"heritageGameAnalysis.vi3A\" name=\"vi3A\">\n          </mat-form-field>\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"3\" [rowspan]=\"1\">\n          i <= 8 </mat-grid-tile> <mat-grid-tile [colspan]=\"4\" [rowspan]=\"2\">\n            与传承人单一开发相比，当传承人选择合作开发模式时，专家更倾向于认为该非遗产品更有开发价值。即一般应有：vi3A < vi3B </mat-grid-tile> <mat-grid-tile [colspan]=\"2\"\n              [rowspan]=\"1\">\n              <mat-form-field>\n                <input class=\"parameter-field\" matInput placeholder=\"Vi3B\" [(ngModel)]=\"heritageGameAnalysis.vi3B\" name=\"vi3B\">\n              </mat-form-field>\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"3\" [rowspan]=\"1\">\n          i>8\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\">\n          Vi1\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n          <mat-form-field>\n            <input class=\"parameter-field\" matInput placeholder=\"Vi1\" [(ngModel)]=\"heritageGameAnalysis.vi1\" name=\"vi1\">\n          </mat-form-field>\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"3\" [rowspan]=\"1\">\n          i=1,2,…,24\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"4\" [rowspan]=\"1\">\n          所有利益相关者中，传承人对非遗产品的情况最为了解，掌握的信息最为完全，因而其对非遗产品的价值判断一般也保持稳定\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"1\" [rowspan]=\"2\">\n          ai4\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n          <mat-form-field>\n            <input class=\"parameter-field\" matInput placeholder=\"ai4\" [(ngModel)]=\"heritageGameAnalysis.ai4\" name=\"ai4\">\n          </mat-form-field>\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"3\" [rowspan]=\"1\">\n          i=1,2,5,6,9,10,13,14,17,18,21,22\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"4\" [rowspan]=\"2\">\n          政府选择支持非遗产品开发时，政府分担开发成本的比例为ai4；不支持时，该比例为0\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n          <mat-form-field>\n            <input class=\"parameter-field\" matInput placeholder=\"0\" [readonly]=\"true\">\n          </mat-form-field>\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"3\" [rowspan]=\"1\">\n          i=3,4,7,8,11,12,15,16,19,20,23,24\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"1\" [rowspan]=\"2\">\n          ai3\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n          <mat-form-field>\n            <input class=\"parameter-field\" matInput placeholder=\"ai3\" [(ngModel)]=\"heritageGameAnalysis.ai3\" name=\"ai3\">\n          </mat-form-field>\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"3\" [rowspan]=\"1\">\n          i=1,2,3,4,9,10,11,12,17,18,19,20\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"4\" [rowspan]=\"2\">\n          专家选择参与非遗产品开发时，专家分担开发成本的比例为ai3；不参与时，该比例为0\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n          <mat-form-field>\n            <input class=\"parameter-field\" matInput placeholder=\"0\">\n          </mat-form-field>\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"3\" [rowspan]=\"1\">\n          i=5,6,7,8,13,14,15,16,21,22,23,24\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"1\" [rowspan]=\"2\">\n          ai2\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n          <mat-form-field>\n            <input class=\"parameter-field\" matInput placeholder=\"ai2\" [(ngModel)]=\"heritageGameAnalysis.ai2\" name=\"ai2\">\n          </mat-form-field>\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"3\" [rowspan]=\"1\">\n          i=9,10,…,16\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"4\" [rowspan]=\"2\">\n          企业选择对非遗产品开发进行投资时，企业分担开发成本的比例为ai2；不投资时，该比例为0\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n          <mat-form-field>\n            <input class=\"parameter-field\" matInput placeholder=\"0\" [readonly]=\"true\">\n          </mat-form-field>\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"3\" [rowspan]=\"1\">\n          i=1,2,…,8,17,18,…24\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\">\n          ai1\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n          <mat-form-field>\n            <input class=\"parameter-field\" matInput placeholder=\"1-(ai2+ai3+ai4)\" [readonly]=\"true\">\n          </mat-form-field>\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"3\" [rowspan]=\"1\">\n          i=1,2,…,24\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"4\" [rowspan]=\"1\">\n          其他利益相关者分担成本后的产品开发成本均由传承人来承担\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"1\" [rowspan]=\"2\">\n          bij (j!=1)\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n          <mat-form-field>\n            <input class=\"parameter-field\" matInput placeholder=\"0\">\n          </mat-form-field>\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"3\" [rowspan]=\"1\">\n          i <= 8 </mat-grid-tile> <mat-grid-tile [colspan]=\"4\" [rowspan]=\"2\">\n            在传承人单一开发模式下，其他利益相关者不能获得对产品销售收入的分成，即bij=0；在合作开发模式下，其他利益相关者对销售收入的分成比例与其成本分担比例基本一致，即bij=aij\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n          <mat-form-field>\n            <input class=\"parameter-field\" matInput placeholder=\"aij\" [(ngModel)]=\"heritageGameAnalysis.aij\" name=\"aij\">\n          </mat-form-field>\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"3\" [rowspan]=\"1\">\n          i > 8\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"1\" [rowspan]=\"2\">\n          bi1\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n          <mat-form-field>\n            <input class=\"parameter-field\" matInput placeholder=\"1\">\n          </mat-form-field>\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"3\" [rowspan]=\"1\">\n          i <= 8 </mat-grid-tile> <mat-grid-tile [colspan]=\"4\" [rowspan]=\"2\">\n            在传承人单一开发模式下，传承人可获得非遗产品的全部销售收入，即bi1=1；在合作开发模式下，传承人对销售收入的分成比例与其成本分担比例基本一致，即bi1=ai1\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n          <mat-form-field>\n            <input class=\"parameter-field\" matInput placeholder=\"ai1\" [(ngModel)]=\"heritageGameAnalysis.ai1\" name=\"ai1\">\n          </mat-form-field>\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"3\" [rowspan]=\"1\">\n          i > 8\n        </mat-grid-tile>\n      </mat-grid-list>\n    </form>\n    <mat-card class=\"analysis-tree\">\n      <mat-card-header>\n        <mat-card-title>利益相关者博弈最优路径分析 </mat-card-title>\n        <br>\n        <p>结果: {{ bestRoute }}</p>\n      </mat-card-header>\n      <mat-card-actions>\n        <button mat-raised-button (click)=\"analyse()\" >分析</button>\n      </mat-card-actions>\n      <mat-card-content>\n        <h3>Game Playing Analysis</h3>\n        <p-tree [value]=\"decisionTree\" layout=\"horizontal\" selectionMode=\"single\"></p-tree>\n      </mat-card-content>\n    </mat-card>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/heritage-analysis/heritage-analysis.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/heritage-analysis/heritage-analysis.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spacer {\n  flex: 1 1 auto; }\n\n.parameter-field {\n  min-width: 40px;\n  max-width: 80px; }\n\nmat-grid-tile {\n  border: solid 1px; }\n\n.basic-container {\n  padding-left: 15%;\n  padding-right: 15%;\n  padding-top: 1%;\n  padding-bottom: 2%; }\n"

/***/ }),

/***/ "./src/app/heritage-analysis/heritage-analysis.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/heritage-analysis/heritage-analysis.component.ts ***!
  \******************************************************************/
/*! exports provided: HeritageAnalysisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeritageAnalysisComponent", function() { return HeritageAnalysisComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/tree */ "./node_modules/primeng/tree.js");
/* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_tree__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_shared */ "./src/app/_shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HeritageAnalysisComponent = /** @class */ (function () {
    function HeritageAnalysisComponent(route, heritageService, heritageGameAnalysisService, userService, toastr) {
        this.route = route;
        this.heritageService = heritageService;
        this.heritageGameAnalysisService = heritageGameAnalysisService;
        this.userService = userService;
        this.toastr = toastr;
    }
    HeritageAnalysisComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.param = params['id'];
            // check if ID exists in route & call update or add methods accordingly
            if (_this.param && _this.param != null && _this.param != undefined) {
                _this.heritageService.getHeritage(_shared__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_HERITAGE_ENDPOINT + _this.param).subscribe(function (result) {
                    _this.heritage = result;
                    if (_this.heritage.heritageGameAnalysisId && _this.heritage.heritageGameAnalysisId != null && _this.heritage.heritageGameAnalysisId != undefined) {
                        _this.heritageGameAnalysisService.getHeritageGameAnalysis(_shared__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_HERITAGE_GAME_ANALYSIS_ENDPOINT + _this.heritage.heritageGameAnalysisId).subscribe(function (data) {
                            _this.heritageGameAnalysis = data;
                            _this.loadTree();
                        });
                    }
                    else {
                        _this.heritageGameAnalysis = {
                            id: 0,
                            heritageId: _this.heritage.id,
                            ciA: 0.0,
                            ciB: 0.0,
                            ii: 0.0,
                            piA: 0.0,
                            piB: 0.0,
                            vi5A: 0.0,
                            vi5B: 0.0,
                            vi4A: 0.0,
                            vi4B: 0.0,
                            vi3A: 0.0,
                            vi3B: 0.0,
                            vi1: 0.0,
                            ai4: 0.0,
                            ai3: 0.0,
                            ai2: 0.0,
                            aij: 0.0,
                            ai1: 0.0,
                            route1: '',
                            route2: '',
                            route3: '',
                            route4: '',
                            route5: '',
                            route6: '',
                            route7: '',
                            route8: '',
                            route9: '',
                            route10: '',
                            route11: '',
                            route12: '',
                            route13: '',
                            route14: '',
                            route15: '',
                            route16: '',
                            route17: '',
                            route18: '',
                            route19: '',
                            route20: '',
                            route21: '',
                            route22: '',
                            route23: '',
                            route24: '',
                            createdUserId: 0,
                            createdUserName: '',
                            createdOn: undefined,
                            modifiedUserId: 0,
                            modifiedUserName: '',
                            modifiedOn: undefined
                        };
                        _this.loadTree();
                    }
                });
            }
        });
    };
    HeritageAnalysisComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.userService.canEdit()) {
            this.toastr.error("您没有添加或修改非物质文化遗产的权限。", "权限验证失败");
            return;
        }
        var userId = this.userService.currentUserId();
        if (this.heritageGameAnalysis.id != 0) {
            this.heritageGameAnalysis.modifiedUserId = userId;
            this.heritageGameAnalysisService.updateHeritageGameAnalysis(_shared__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_HERITAGE_GAME_ANALYSIS_ENDPOINT + this.heritageGameAnalysis.id, this.heritageGameAnalysis)
                .subscribe(function (data) {
                _this.heritageGameAnalysis = data;
                _this.loadTree();
                _this.showSuccess();
            }, function (error) {
                _this.showError();
            });
        }
        else {
            this.heritageGameAnalysis.createdUserId = userId;
            this.heritageGameAnalysis.modifiedUserId = userId;
            this.heritageGameAnalysisService.addHeritageGameAnalysis(_shared__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_HERITAGE_GAME_ANALYSIS_ENDPOINT, this.heritageGameAnalysis)
                .subscribe(function (data) {
                _this.heritageGameAnalysis = data;
                _this.heritage.heritageGameAnalysisId = _this.heritageGameAnalysis.id;
                _this.heritageService.updateHeritage(_shared__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_HERITAGE_ENDPOINT + _this.heritage.id, _this.heritage)
                    .subscribe(function (result) {
                    _this.heritage = result;
                    _this.loadTree();
                    _this.showSuccess();
                });
            }, function (error) {
                _this.showError();
            });
        }
    };
    HeritageAnalysisComponent.prototype.analyse = function () {
        var _this = this;
        if (this.heritage.heritageGameAnalysisId && this.heritage.heritageGameAnalysisId != null && this.heritage.heritageGameAnalysisId != undefined) {
            this.heritageGameAnalysisService.getHeritageAnalysisBestRoute(_shared__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_HERITAGE_GAME_ANALYSIS_ENDPOINT + 'getHeritageAnalysisBestRoute/' + this.heritage.heritageGameAnalysisId).subscribe(function (res) {
                _this.bestRoute = "最优路径为: " + "R" + res.id + ": { " + res.routeValue + " }";
            });
        }
        else {
            this.toastr.error('请先进行利益相关者博弈计算。', '分析失败');
        }
    };
    HeritageAnalysisComponent.prototype.showSuccess = function () {
        this.toastr.success('利益相关者博弈计算及保存成功。', '操作成功');
    };
    HeritageAnalysisComponent.prototype.showError = function () {
        this.toastr.error('利益相关者博弈计算及保存失败。', '操作失败');
    };
    HeritageAnalysisComponent.prototype.loadTree = function () {
        var _this = this;
        this.decisionTree = [
            {
                "label": "传承人",
                "children": [
                    {
                        "label": "专家",
                        "children": [{
                                "label": "政府",
                                "children": [{
                                        "label": "消费者",
                                        "children": [{
                                                "label": "R1 { " + this.heritageGameAnalysis.route1 + " }"
                                            },
                                            {
                                                "label": "R2 { " + this.heritageGameAnalysis.route2 + " }"
                                            }]
                                    },
                                    {
                                        "label": "消费者",
                                        "children": [{
                                                "label": "R3 { " + this.heritageGameAnalysis.route3 + " }"
                                            },
                                            {
                                                "label": "R4 { " + this.heritageGameAnalysis.route4 + " }"
                                            }]
                                    }]
                            },
                            {
                                "label": "政府",
                                "children": [{
                                        "label": "消费者",
                                        "children": [{
                                                "label": "R5 { " + this.heritageGameAnalysis.route5 + " }"
                                            },
                                            {
                                                "label": "R6 { " + this.heritageGameAnalysis.route6 + " }"
                                            }]
                                    },
                                    {
                                        "label": "消费者",
                                        "children": [{
                                                "label": "R7 { " + this.heritageGameAnalysis.route7 + " }"
                                            },
                                            {
                                                "label": "R8 { " + this.heritageGameAnalysis.route8 + " }"
                                            }]
                                    }]
                            }]
                    },
                    {
                        "label": "企业",
                        "children": [{
                                "label": "专家",
                                "children": [{
                                        "label": "政府",
                                        "children": [{
                                                "label": "消费者",
                                                "children": [{
                                                        "label": "R9 { " + this.heritageGameAnalysis.route9 + " }"
                                                    },
                                                    {
                                                        "label": "R10 { " + this.heritageGameAnalysis.route10 + " }"
                                                    }]
                                            },
                                            {
                                                "label": "消费者",
                                                "children": [{
                                                        "label": "R11 { " + this.heritageGameAnalysis.route11 + " }"
                                                    },
                                                    {
                                                        "label": "R12 { " + this.heritageGameAnalysis.route12 + " }"
                                                    }]
                                            }]
                                    },
                                    {
                                        "label": "政府",
                                        "data": "Home Folder",
                                        "children": [{
                                                "label": "消费者",
                                                "children": [{
                                                        "label": "R13 { " + this.heritageGameAnalysis.route13 + " }"
                                                    },
                                                    {
                                                        "label": "R14 { " + this.heritageGameAnalysis.route14 + " }"
                                                    }]
                                            },
                                            {
                                                "label": "消费者",
                                                "children": [{
                                                        "label": "R15 { " + this.heritageGameAnalysis.route15 + " }"
                                                    },
                                                    {
                                                        "label": "R16 { " + this.heritageGameAnalysis.route16 + " }"
                                                    }]
                                            }]
                                    }]
                            },
                            {
                                "label": "专家",
                                "data": "De Niro Movies",
                                "children": [{
                                        "label": "政府",
                                        "children": [{
                                                "label": "消费者",
                                                "children": [{
                                                        "label": "R17 { " + this.heritageGameAnalysis.route17 + " }"
                                                    },
                                                    {
                                                        "label": "R18 { " + this.heritageGameAnalysis.route18 + " }"
                                                    }]
                                            },
                                            {
                                                "label": "消费者",
                                                "children": [{
                                                        "label": "R19 { " + this.heritageGameAnalysis.route19 + " }"
                                                    },
                                                    {
                                                        "label": "R20 { " + this.heritageGameAnalysis.route20 + " }"
                                                    }]
                                            }]
                                    },
                                    {
                                        "label": "政府",
                                        "data": "Home Folder",
                                        "children": [{
                                                "label": "消费者",
                                                "children": [{
                                                        "label": "R21 { " + this.heritageGameAnalysis.route21 + " }"
                                                    },
                                                    {
                                                        "label": "R22 { " + this.heritageGameAnalysis.route22 + " }"
                                                    }]
                                            },
                                            {
                                                "label": "消费者",
                                                "children": [{
                                                        "label": "R23 { " + this.heritageGameAnalysis.route23 + " }"
                                                    },
                                                    {
                                                        "label": "R24 { " + this.heritageGameAnalysis.route24 + " }"
                                                    }]
                                            }]
                                    }]
                            }]
                    }
                ]
            }
        ];
        this.decisionTree.forEach(function (node) {
            _this.expandRecursive(node, true);
        });
    };
    HeritageAnalysisComponent.prototype.expandRecursive = function (node, isExpand) {
        var _this = this;
        node.expanded = isExpand;
        if (node.children) {
            node.children.forEach(function (childNode) {
                _this.expandRecursive(childNode, isExpand);
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('expandingTree'),
        __metadata("design:type", primeng_tree__WEBPACK_IMPORTED_MODULE_2__["Tree"])
    ], HeritageAnalysisComponent.prototype, "expandingTree", void 0);
    HeritageAnalysisComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-heritage-analysis',
            template: __webpack_require__(/*! ./heritage-analysis.component.html */ "./src/app/heritage-analysis/heritage-analysis.component.html"),
            styles: [__webpack_require__(/*! ./heritage-analysis.component.scss */ "./src/app/heritage-analysis/heritage-analysis.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services__WEBPACK_IMPORTED_MODULE_4__["HeritageService"],
            _services__WEBPACK_IMPORTED_MODULE_4__["HeritageGameAnalysisService"],
            _services__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], HeritageAnalysisComponent);
    return HeritageAnalysisComponent;
}());



/***/ }),

/***/ "./src/app/heritage-analysis/heritage-analysis.route.ts":
/*!**************************************************************!*\
  !*** ./src/app/heritage-analysis/heritage-analysis.route.ts ***!
  \**************************************************************/
/*! exports provided: heritageAnalysisRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "heritageAnalysisRoutes", function() { return heritageAnalysisRoutes; });
/* harmony import */ var _heritage_analysis_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./heritage-analysis.component */ "./src/app/heritage-analysis/heritage-analysis.component.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_guards */ "./src/app/_guards/index.ts");


// Route Configuration
var heritageAnalysisRoutes = [
    { path: 'heritageanalysis/:id', component: _heritage_analysis_component__WEBPACK_IMPORTED_MODULE_0__["HeritageAnalysisComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] }
];


/***/ }),

/***/ "./src/app/heritage-detail/heritage-detail.component.html":
/*!****************************************************************!*\
  !*** ./src/app/heritage-detail/heritage-detail.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"basic-container\" *ngIf=\"heritage\">\n\n  <form (ngSubmit)=\"onSubmit()\" #heritageForm=\"ngForm\" name=\"heritage\">\n\n    <mat-toolbar>\n      <span>非遗信息录入 {{ heritage.name }} </span>\n      <span class=\"spacer\"></span>\n      <button mat-button class=\"form-save\">保存</button>\n      <button type=\"button\" mat-button class=\"form-save\" routerLink=\"/heritagelist\">返回</button>\n    </mat-toolbar>\n\n    <mat-accordion class=\"example-headers-align\">\n      <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle>\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            基本信息\n          </mat-panel-title>\n          <mat-panel-description>\n            请在这里输入基本信息\n            <mat-icon>account_balance</mat-icon>\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n\n        <mat-form-field class=\"form-field\">\n          <input matInput #name placeholder=\"名称\" [(ngModel)]=\"heritage.name\" name=\"name\" />\n          <mat-hint align=\"end\">\n            {{name.value.length}} / 50\n          </mat-hint>\n        </mat-form-field>\n        <br>\n        <mat-form-field class=\"form-field\">\n          <input matInput placeholder=\"申报地区或单位\" [(ngModel)]=\"heritage.registrationDistrict\" name=\"registrationDistrict\" />\n        </mat-form-field>\n        <br>\n        <mat-form-field class=\"form-field\">\n          <input matInput placeholder=\"申报年份\" [(ngModel)]=\"heritage.registrationYear\" name=\"registrationYear\" />\n        </mat-form-field>\n        <br>\n        <mat-form-field class=\"form-field\">\n          <input matInput placeholder=\"所属省份\" [(ngModel)]=\"heritage.province\" name=\"province\" />\n        </mat-form-field>\n        <br>\n        <mat-form-field class=\"form-field\">\n          <input matInput placeholder=\"项目类型\" [(ngModel)]=\"heritage.typeofProject\" name=\"projectType\" />\n        </mat-form-field>\n        <br>\n        <mat-form-field class=\"form-field\">\n          <input matInput placeholder=\"批次\" [(ngModel)]=\"heritage.batchNo\" name=\"batchNo\" />\n        </mat-form-field>\n        <br>\n        <mat-form-field class=\"form-field\">\n          <input matInput placeholder=\"传承人\" [(ngModel)]=\"heritage.inheritors\" name=\"inheritors\" />\n        </mat-form-field>\n        <br>\n        <mat-form-field class=\"form-field\">\n          <textarea matInput placeholder=\"项目简介\" [(ngModel)]=\"heritage.projectOverview\" name=\"projectOverview\"></textarea>\n        </mat-form-field>\n        <br>\n        <mat-form-field class=\"form-field\">\n          <textarea matInput placeholder=\"历史沿革\" [(ngModel)]=\"heritage.history\" name=\"history\"></textarea>\n        </mat-form-field>\n        <br>\n        <mat-form-field class=\"form-field\">\n          <textarea matInput placeholder=\"现状\" [(ngModel)]=\"heritage.currentStatus\" name=\"currentStatus\"></textarea>\n        </mat-form-field>\n        <br>\n        <mat-form-field class=\"form-field\">\n          <input matInput placeholder=\"价值\" [(ngModel)]=\"heritage.presentValue\" name=\"presentValue\" />\n        </mat-form-field>\n        <br>\n        <mat-form-field class=\"form-field\">\n          <textarea matInput placeholder=\"濒危情况\" [(ngModel)]=\"heritage.endangeredStatus\" name=\"endangeredStatus\"></textarea>\n        </mat-form-field>\n        <br>\n        <mat-form-field class=\"form-field\">\n          <textarea matInput placeholder=\"代表作品\" [(ngModel)]=\"heritage.masterpiece\" name=\"masterpiece\"></textarea>\n        </mat-form-field>\n        <br>\n\n        <mat-action-row>\n          <button mat-button color=\"primary\" (click)=\"nextStep()\">下一页</button>\n        </mat-action-row>\n      </mat-expansion-panel>\n\n      <mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" hideToggle>\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            旅游相关信息\n          </mat-panel-title>\n          <mat-panel-description>\n            请在这里提供旅游相关信息\n            <mat-icon>map</mat-icon>\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n\n        <mat-form-field class=\"form-field\">\n          <textarea matInput placeholder=\"旅游开放现状\" [(ngModel)]=\"heritage.tourismStatus\" name=\"tourismStatus\"></textarea>\n        </mat-form-field>\n        <br>\n        <mat-form-field class=\"form-field\">\n          <textarea matInput placeholder=\"旅游市场特点\" [(ngModel)]=\"heritage.tourismMarketCharacteristics\" name=\"tourismMarketCharacteristics\"></textarea>\n        </mat-form-field>\n        <br>\n        <mat-form-field class=\"form-field\">\n          <textarea matInput placeholder=\"配套旅游产品\" [(ngModel)]=\"heritage.tourismProduct\" name=\"tourismProduct\"></textarea>\n        </mat-form-field>\n        <br>\n        <mat-form-field class=\"form-field\">\n          <input matInput placeholder=\"旅游价格\" [(ngModel)]=\"heritage.tourismPrice\" name=\"tourismPrice\" />\n        </mat-form-field>\n        <br>\n        <mat-form-field class=\"form-field\">\n          <textarea matInput placeholder=\"旅游开发模式\" [(ngModel)]=\"heritage.tourismDevelopmentModel\" name=\"tourismDevelopmentModel\"></textarea>\n        </mat-form-field>\n        <br>\n        <mat-form-field class=\"form-field\">\n          <input matInput placeholder=\"旅游效益\" [(ngModel)]=\"heritage.tourismBenefit\" name=\"tourismBenefit\" />\n        </mat-form-field>\n        <br>\n\n        <mat-action-row>\n          <button mat-button color=\"warn\" (click)=\"prevStep()\">上一页</button>\n          <button mat-button color=\"primary\" (click)=\"nextStep()\">下一页</button>\n        </mat-action-row>\n      </mat-expansion-panel>\n\n      <mat-expansion-panel [expanded]=\"step === 2\" (opened)=\"setStep(2)\" hideToggle>\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            其他信息\n          </mat-panel-title>\n          <mat-panel-description>\n            请在这里提供其他相关信息\n            <mat-icon>add_photo_alternate</mat-icon>\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n\n        <mat-card class=\"fileupload\">\n          <mat-card-header>\n            <mat-card-title>文件上传 </mat-card-title>\n            <mat-card-subtitle>请在这里上传相关文件</mat-card-subtitle>\n          </mat-card-header>\n          <mat-card-content>\n            <mat-form-field class=\"form-field\">\n              <textarea matInput placeholder=\"Story\" [(ngModel)]=\"heritage.story\" name=\"story\"></textarea>\n            </mat-form-field>\n            <br>\n            <app-file-manager [heritageID]=\"heritage.id\">File manager loading...</app-file-manager>\n          </mat-card-content>\n        </mat-card>\n\n        <mat-action-row>\n          <button mat-button color=\"warn\" (click)=\"prevStep()\">上一页</button>\n          <button mat-button color=\"primary\" (click)=\"nextStep()\">下一页</button>\n        </mat-action-row>\n      </mat-expansion-panel>\n\n    </mat-accordion>\n\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/heritage-detail/heritage-detail.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/heritage-detail/heritage-detail.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".basic-container {\n  padding-left: 15%;\n  padding-right: 15%;\n  padding-top: 1%;\n  padding-bottom: 2%; }\n\n.form-field {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.spacer {\n  flex: 1 1 auto; }\n\n.example-headers-align .mat-expansion-panel-header-title,\n.example-headers-align .mat-expansion-panel-header-description {\n  flex-basis: 0; }\n\n.example-headers-align .mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: center; }\n"

/***/ }),

/***/ "./src/app/heritage-detail/heritage-detail.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/heritage-detail/heritage-detail.component.ts ***!
  \**************************************************************/
/*! exports provided: HeritageDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeritageDetailComponent", function() { return HeritageDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_shared */ "./src/app/_shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeritageDetailComponent = /** @class */ (function () {
    function HeritageDetailComponent(route, heritageService, userService, toastr) {
        this.route = route;
        this.heritageService = heritageService;
        this.userService = userService;
        this.toastr = toastr;
        this.step = 0;
    }
    HeritageDetailComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    HeritageDetailComponent.prototype.nextStep = function () {
        this.step++;
    };
    HeritageDetailComponent.prototype.prevStep = function () {
        this.step--;
    };
    HeritageDetailComponent.prototype.ngOnInit = function () {
        /*
        var id = this.route.snapshot.params["id"];
        if (id < 1)
          return;
        */
        var _this = this;
        // Check for route params
        this.route.params.subscribe(function (params) {
            _this.param = params['id'];
            // check if ID exists in route & call update or add methods accordingly
            if (_this.param && _this.param != null && _this.param != undefined) {
                _this.heritageService.getHeritage(_shared__WEBPACK_IMPORTED_MODULE_4__["Global"].BASE_HERITAGE_ENDPOINT + _this.param).subscribe(function (result) {
                    _this.heritage = result;
                });
            }
            else {
                _this.heritage = {
                    id: 0,
                    name: '',
                    registrationDistrict: '',
                    registrationYear: '',
                    province: '',
                    typeofProject: '',
                    batchNo: '',
                    inheritors: '',
                    projectOverview: '',
                    history: '',
                    currentStatus: '',
                    presentValue: 0,
                    endangeredStatus: '',
                    masterpiece: '',
                    tourismStatus: '',
                    tourismMarketCharacteristics: '',
                    tourismProduct: '',
                    tourismPrice: 0,
                    tourismDevelopmentModel: '',
                    tourismBenefit: 0,
                    story: '',
                    evaluationValue: 0,
                    activationModeId: undefined,
                    heritageGameAnalysisId: undefined,
                    createdUserId: 0,
                    createdUserName: '',
                    createdOn: undefined,
                    modifiedUserId: 0,
                    modifiedUserName: '',
                    modifiedOn: undefined
                };
            }
        });
    };
    HeritageDetailComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.userService.canEdit()) {
            this.toastr.error("您没有添加或修改非物质文化遗产的权限。", "权限验证失败");
            return;
        }
        var userId = this.userService.currentUserId();
        if (this.heritage.id != 0) {
            this.heritage.modifiedUserId = userId;
            this.heritageService.updateHeritage(_shared__WEBPACK_IMPORTED_MODULE_4__["Global"].BASE_HERITAGE_ENDPOINT + this.heritage.id, this.heritage)
                .subscribe(function (data) {
                _this.heritage = data;
                _this.showSuccess();
            }, function (error) {
                _this.showError();
            });
        }
        else {
            this.heritage.createdUserId = userId;
            this.heritage.modifiedUserId = userId;
            this.heritageService.addHeritage(_shared__WEBPACK_IMPORTED_MODULE_4__["Global"].BASE_HERITAGE_ENDPOINT, this.heritage)
                .subscribe(function (data) {
                _this.heritage = data;
                _this.showSuccess();
            }, function (error) {
                _this.showError();
            });
        }
    };
    HeritageDetailComponent.prototype.showSuccess = function () {
        this.toastr.success('非物质文化遗产保存成功。', '操作成功');
    };
    HeritageDetailComponent.prototype.showError = function () {
        this.toastr.error('非物质文化遗产保存失败。', '操作失败');
    };
    HeritageDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-heritage-detail',
            template: __webpack_require__(/*! ./heritage-detail.component.html */ "./src/app/heritage-detail/heritage-detail.component.html"),
            styles: [__webpack_require__(/*! ./heritage-detail.component.scss */ "./src/app/heritage-detail/heritage-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services__WEBPACK_IMPORTED_MODULE_3__["HeritageService"],
            _services__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], HeritageDetailComponent);
    return HeritageDetailComponent;
}());



/***/ }),

/***/ "./src/app/heritage-detail/heritage-detail.route.ts":
/*!**********************************************************!*\
  !*** ./src/app/heritage-detail/heritage-detail.route.ts ***!
  \**********************************************************/
/*! exports provided: heritageDetailRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "heritageDetailRoutes", function() { return heritageDetailRoutes; });
/* harmony import */ var _heritage_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./heritage-detail.component */ "./src/app/heritage-detail/heritage-detail.component.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_guards */ "./src/app/_guards/index.ts");


// Route Configuration
var heritageDetailRoutes = [
    { path: 'heritagedetail', component: _heritage_detail_component__WEBPACK_IMPORTED_MODULE_0__["HeritageDetailComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
    { path: 'heritagedetail/:id', component: _heritage_detail_component__WEBPACK_IMPORTED_MODULE_0__["HeritageDetailComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] }
];


/***/ }),

/***/ "./src/app/heritage-detail/index.ts":
/*!******************************************!*\
  !*** ./src/app/heritage-detail/index.ts ***!
  \******************************************/
/*! exports provided: HeritageDetailComponent, heritageDetailRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _heritage_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./heritage-detail.component */ "./src/app/heritage-detail/heritage-detail.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeritageDetailComponent", function() { return _heritage_detail_component__WEBPACK_IMPORTED_MODULE_0__["HeritageDetailComponent"]; });

/* harmony import */ var _heritage_detail_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./heritage-detail.route */ "./src/app/heritage-detail/heritage-detail.route.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "heritageDetailRoutes", function() { return _heritage_detail_route__WEBPACK_IMPORTED_MODULE_1__["heritageDetailRoutes"]; });





/***/ }),

/***/ "./src/app/heritage-evaluation/heritage-evaluation.component.html":
/*!************************************************************************!*\
  !*** ./src/app/heritage-evaluation/heritage-evaluation.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"basic-container\" *ngIf=\"heritage\">\n\n  <mat-toolbar>\n    <span>旅游价值评估系统: {{ heritage.name }} 的旅游价值为: {{ heritage.evaluationValue | number : '1.2-2' }}</span>\n    <span class=\"spacer\"></span>\n    <button mat-button class=\"form-save\" (click)=\"showParameters()\">系数设置</button>\n    <button mat-button class=\"form-save\" (click)=\"evaluateheritage()\">计算并保存</button>\n    <button type=\"button\" mat-button class=\"form-save\" [routerLink]=\"['/heritagenav', heritage.id]\">返回</button>\n  </mat-toolbar>\n\n  <p-table [value]=\"evaluations\" [scrollable]=\"true\" selectionMode=\"single\" (onRowSelect)=\"onRowSelect($event)\"\n    [paginator]=\"true\" [rows]=\"20\">\n    <ng-template pTemplate=\"caption\">\n      旅游价值评估\n    </ng-template>\n    <ng-template pTemplate=\"colgroup\" let-columns>\n      <colgroup>\n        <col style=\"width:125px\">\n        <col style=\"width:85px\">\n        <col style=\"width:85px\">\n        <col style=\"width:85px\">\n        <col style=\"width:85px\">\n        <col style=\"width:85px\">\n        <col style=\"width:85px\">\n        <col style=\"width:85px\">\n        <col style=\"width:85px\">\n        <col style=\"width:85px\">\n        <col style=\"width:85px\">\n        <col style=\"width:85px\">\n        <col style=\"width:85px\">\n        <col style=\"width:85px\">\n        <col style=\"width:85px\">\n        <col style=\"width:85px\">\n        <col style=\"width:85px\">\n        <col style=\"width:85px\">\n        <col style=\"width:85px\">\n        <col style=\"width:85px\">\n        <col style=\"width:85px\">\n        <col style=\"width:85px\">\n        <col style=\"width:85px\">\n        <col style=\"width:85px\">\n        <col style=\"width:85px\">\n        <col style=\"width:85px\">\n        <col style=\"width:85px\">\n        <col style=\"width:85px\">\n        <col style=\"width:85px\">\n        <col style=\"width:85px\">\n        <col style=\"width:85px\">\n        <col style=\"width:85px\">\n        <col style=\"width:85px\">\n      </colgroup>\n    </ng-template>\n    <ng-template pTemplate=\"header\">\n\n      <tr>\n        <th rowspan=\"2\">利益相关者身份</th>\n        <th rowspan=\"2\">非遗旅游价值</th>\n        <th rowspan=\"2\">认同感系数</th>\n        <th rowspan=\"2\">认知情况系数</th>\n        <th rowspan=\"2\">项目自身价值系数</th>\n        <th rowspan=\"2\">项目自身基本情况系数</th>\n        <th rowspan=\"2\">项目资源开发条件与现状系数</th>\n        <th colspan=\"3\">认同感</th>\n        <th colspan=\"4\">认知情况</th>\n        <th colspan=\"8\">项目自身价值</th>\n        <th colspan=\"6\">项目自身基本情况</th>\n        <th colspan=\"5\">项目资源开发条件与现状</th>\n      </tr>\n      <tr>\n        <th rowspan=\"1\">重要性</th>\n        <th rowspan=\"1\">民族自豪感</th>\n        <th rowspan=\"1\">政府保护的必要性</th>\n        <th rowspan=\"1\">资源特征</th>\n        <th rowspan=\"1\">技艺涉及范围</th>\n        <th rowspan=\"1\">技艺传承方式</th>\n        <th rowspan=\"1\">技艺传承难度</th>\n        <th rowspan=\"1\">艺术价值</th>\n        <th rowspan=\"1\">文化价值</th>\n        <th rowspan=\"1\">经济价值</th>\n        <th rowspan=\"1\">历史价值</th>\n        <th rowspan=\"1\">教育价值</th>\n        <th rowspan=\"1\">社会价值</th>\n        <th rowspan=\"1\">科学价值</th>\n        <th rowspan=\"1\">文化生态环境价值</th>\n        <th rowspan=\"1\">品质情况</th>\n        <th rowspan=\"1\">珍稀性</th>\n        <th rowspan=\"1\">原生态程度</th>\n        <th rowspan=\"1\">知名度</th>\n        <th rowspan=\"1\">个性</th>\n        <th rowspan=\"1\">时间跨度</th>\n        <th rowspan=\"1\">区域经济水平</th>\n        <th rowspan=\"1\">旅游市场情况</th>\n        <th rowspan=\"1\">资源开发基础</th>\n        <th rowspan=\"1\">资源开发现状</th>\n        <th rowspan=\"1\">企业介入可能性</th>\n      </tr>\n    </ng-template>\n\n    <ng-template pTemplate=\"body\" let-rowData>\n      <tr [pSelectableRow]=\"rowData\">\n        <td>{{rowData.evaluatorTypeId | evaluatortype}}</td>\n        <td>{{rowData.evaluationValue | number : '1.2-2'}}</td>\n        <td>{{rowData.agreementFactor}}</td>\n        <td>{{rowData.cognitionFactor}}</td>\n        <td>{{rowData.projectValueFactor}}</td>\n        <td>{{rowData.projectBasicInfoFactor}}</td>\n        <td>{{rowData.projectConditionStatusFactor}}</td>\n        <td>{{rowData.importanceValue | evaluationoption}}</td>\n        <td>{{rowData.nationalPrideValue | evaluationoption}}</td>\n        <td>{{rowData.govProtectionValue | evaluationoption}}</td>\n        <td>{{rowData.resourceCharacteristicsValue | evaluationoption}}</td>\n        <td>{{rowData.skillScopeValue | evaluationoption}}</td>\n        <td>{{rowData.skillInheritanceMethodValue | evaluationoption}}</td>\n        <td>{{rowData.skillInheritanceDifficultyValue | evaluationoption}}</td>\n        <td>{{rowData.artValue | evaluationoption}}</td>\n        <td>{{rowData.cultureValue | evaluationoption}}</td>\n        <td>{{rowData.economyValue | evaluationoption}}</td>\n        <td>{{rowData.historyValue | evaluationoption}}</td>\n        <td>{{rowData.educationValue | evaluationoption}}</td>\n        <td>{{rowData.societyValue | evaluationoption}}</td>\n        <td>{{rowData.scienceValue | evaluationoption}}</td>\n        <td>{{rowData.ecologicalEnvironmentValue | evaluationoption}}</td>\n        <td>{{rowData.qualityValue | evaluationoption}}</td>\n        <td>{{rowData.rarenessValue | evaluationoption}}</td>\n        <td>{{rowData.ecologyValue | evaluationoption}}</td>\n        <td>{{rowData.popularValue | evaluationoption}}</td>\n        <td>{{rowData.personalityValue | evaluationoption}}</td>\n        <td>{{rowData.timeSpanValue | evaluationoption}}</td>\n        <td>{{rowData.nationalEcomonicValue | evaluationoption}}</td>\n        <td>{{rowData.marketStatusValue | evaluationoption}}</td>\n        <td>{{rowData.basicResourceDevelopmentValue | evaluationoption}}</td>\n        <td>{{rowData.basicResourceValue | evaluationoption}}</td>\n        <td>{{rowData.introductionProbabilityValue | evaluationoption}}</td>\n      </tr>\n    </ng-template>\n\n    <ng-template pTemplate=\"summary\" let-rowData>\n      <div style=\"text-align:left\">\n        <button type=\"button\" pButton icon=\"fa fa-plus\" (click)=\"showDialogToAdd()\" label=\"添加\"></button>\n      </div>\n    </ng-template>\n\n    <!--\n      <ng-template pTemplate=\"footer\">\n          <tr>\n              <td colspan=\"3\">Totals</td>\n              <td>$506,202</td>\n              <td>$531,020</td>\n          </tr>\n      </ng-template>\n      -->\n  </p-table>\n\n  <p-dialog header=\"非遗旅游价值评估系数\" appendTo=\"body\" [(visible)]=\"displayParameters\" [responsive]=\"true\" showEffect=\"fade\"\n    [modal]=\"true\" [width]=\"600\">\n    <div class=\"ui-g ui-fluid\">\n      <label for=\"vin\">全局系数，如更改需对旅游评估价值进行重新更新计算。</label>\n    </div>\n    <div class=\"ui-g ui-fluid\" *ngIf=\"param1\">\n      <div class=\"ui-g-3\">\n        <label for=\"vin\">系数1</label>\n      </div>\n      <div class=\"ui-g-4\">\n        <input pInputText id=\"agreementFactor\" [(ngModel)]=\"param1.parameterValue\" />\n      </div>\n      <div class=\"ui-g-3\">\n        <button type=\"button\" pButton icon=\"fa fa-check\" (click)=\"saveparam1()\" label=\"保存\"></button>\n      </div>\n    </div>\n    <div class=\"ui-g ui-fluid\" *ngIf=\"param2\">\n      <div class=\"ui-g-3\">\n        <label for=\"vin\">系数2</label>\n      </div>\n      <div class=\"ui-g-4\">\n        <input pInputText id=\"agreementFactor\" [(ngModel)]=\"param2.parameterValue\" />\n      </div>\n      <div class=\"ui-g-3\">\n        <button type=\"button\" pButton icon=\"fa fa-check\" (click)=\"saveparam2()\" label=\"保存\"></button>\n      </div>\n    </div>\n    <div class=\"ui-g ui-fluid\" *ngIf=\"param3\">\n      <div class=\"ui-g-3\">\n        <label for=\"vin\">系数3</label>\n      </div>\n      <div class=\"ui-g-4\">\n        <input pInputText id=\"agreementFactor\" [(ngModel)]=\"param3.parameterValue\" />\n      </div>\n      <div class=\"ui-g-3\">\n        <button type=\"button\" pButton icon=\"fa fa-check\" (click)=\"saveparam3()\" label=\"保存\"></button>\n      </div>\n    </div>\n    <div class=\"ui-g ui-fluid\" *ngIf=\"param4\">\n      <div class=\"ui-g-3\">\n        <label for=\"vin\">系数4</label>\n      </div>\n      <div class=\"ui-g-4\">\n        <input pInputText id=\"agreementFactor\" [(ngModel)]=\"param4.parameterValue\" />\n      </div>\n      <div class=\"ui-g-3\">\n        <button type=\"button\" pButton icon=\"fa fa-check\" (click)=\"saveparam4()\" label=\"保存\"></button>\n      </div>\n    </div>\n    <div class=\"ui-g ui-fluid\" *ngIf=\"param5\">\n      <div class=\"ui-g-3\">\n        <label for=\"vin\">系数5</label>\n      </div>\n      <div class=\"ui-g-4\">\n        <input pInputText id=\"agreementFactor\" [(ngModel)]=\"param5.parameterValue\" />\n      </div>\n      <div class=\"ui-g-3\">\n        <button type=\"button\" pButton icon=\"fa fa-check\" (click)=\"saveparam5()\" label=\"保存\"></button>\n      </div>\n    </div>\n  </p-dialog>\n\n  <p-dialog header=\"非遗旅游价值评估\" appendTo=\"body\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\"\n    [width]=\"600\">\n    <p-confirmDialog appendTo=\"body\"></p-confirmDialog>\n    <div class=\"ui-g ui-fluid\" *ngIf=\"evaluation\">\n\n      <p-fieldset legend=\"旅游评估\">\n        <div class=\"ui-g-7\">\n          <label for=\"importance\">利益相关者身份</label>\n        </div>\n        <div class=\"ui-g-3\">\n          <p-dropdown [options]=\"availableEvalTypes\" [(ngModel)]=\"evaluation.evaluatorTypeId\" placeholder=\"Select an option\"></p-dropdown>\n        </div>\n\n        <div class=\"ui-g-7\">\n          <label for=\"vin\">认同感系数</label>\n        </div>\n        <div class=\"ui-g-3\">\n          <input pInputText id=\"agreementFactor\" [(ngModel)]=\"evaluation.agreementFactor\" />\n        </div>\n\n        <div class=\"ui-g-7\">\n          <label for=\"vin\">认知情况系数</label>\n        </div>\n        <div class=\"ui-g-3\">\n          <input pInputText id=\"cognitionFactor\" [(ngModel)]=\"evaluation.cognitionFactor\" />\n        </div>\n\n        <div class=\"ui-g-7\">\n          <label for=\"vin\">项目自身价值系数</label>\n        </div>\n        <div class=\"ui-g-3\">\n          <input pInputText id=\"projectValueFactor\" [(ngModel)]=\"evaluation.projectValueFactor\" />\n        </div>\n\n        <div class=\"ui-g-7\">\n          <label for=\"vin\">项目自身基本情况系数</label>\n        </div>\n        <div class=\"ui-g-3\">\n          <input pInputText id=\"projectBasicInfoFactor\" [(ngModel)]=\"evaluation.projectBasicInfoFactor\" />\n        </div>\n\n        <div class=\"ui-g-7\">\n          <label for=\"vin\">项目资源开发条件与现状系数</label>\n        </div>\n        <div class=\"ui-g-3\">\n          <input pInputText id=\"projectConditionStatusFactor\" [(ngModel)]=\"evaluation.projectConditionStatusFactor\" />\n        </div>\n      </p-fieldset>\n\n      <p-fieldset legend=\"认同感\">\n        <div class=\"ui-g-7\">\n          <label for=\"importance\">重要性</label>\n        </div>\n        <div class=\"ui-g-3\">\n          <p-dropdown [options]=\"availableEvalOptions\" [(ngModel)]=\"evaluation.importanceValue\" placeholder=\"Select an option\"></p-dropdown>\n        </div>\n        <div class=\"ui-g-7\">\n          <label for=\"b\">民族自豪感</label>\n        </div>\n        <div class=\"ui-g-3\">\n          <p-dropdown [options]=\"availableEvalOptions\" [(ngModel)]=\"evaluation.nationalPrideValue\" placeholder=\"Select an option\"></p-dropdown>\n        </div>\n        <div class=\"ui-g-7\">\n          <label for=\"c\">政府保护的必要性</label>\n        </div>\n        <div class=\"ui-g-3\">\n          <p-dropdown [options]=\"availableEvalOptions\" [(ngModel)]=\"evaluation.govProtectionValue\" placeholder=\"Select an option\"></p-dropdown>\n        </div>\n      </p-fieldset>\n\n      <p-fieldset legend=\"认知情况\">\n        <div class=\"ui-g-7\">\n          <label for=\"importance\">资源特征</label>\n        </div>\n        <div class=\"ui-g-3\">\n          <p-dropdown [options]=\"availableEvalOptions\" [(ngModel)]=\"evaluation.resourceCharacteristicsValue\"\n            placeholder=\"Select an option\"></p-dropdown>\n        </div>\n        <div class=\"ui-g-7\">\n          <label for=\"b\">技艺涉及范围</label>\n        </div>\n        <div class=\"ui-g-3\">\n          <p-dropdown [options]=\"availableEvalOptions\" [(ngModel)]=\"evaluation.skillScopeValue\" placeholder=\"Select an option\"></p-dropdown>\n        </div>\n        <div class=\"ui-g-7\">\n          <label for=\"c\">技艺传承方式</label>\n        </div>\n        <div class=\"ui-g-3\">\n          <p-dropdown [options]=\"availableEvalOptions\" [(ngModel)]=\"evaluation.skillInheritanceMethodValue\" placeholder=\"Select an option\"></p-dropdown>\n        </div>\n        <div class=\"ui-g-7\">\n          <label for=\"c\">技艺传承难度</label>\n        </div>\n        <div class=\"ui-g-3\">\n          <p-dropdown [options]=\"availableEvalOptions\" [(ngModel)]=\"evaluation.skillInheritanceDifficultyValue\"\n            placeholder=\"Select an option\"></p-dropdown>\n        </div>\n      </p-fieldset>\n\n      <p-fieldset legend=\"项目自身价值\">\n        <div class=\"ui-g-7\">\n          <label for=\"importance\">艺术价值</label>\n        </div>\n        <div class=\"ui-g-3\">\n          <p-dropdown [options]=\"availableEvalOptions\" [(ngModel)]=\"evaluation.artValue\" placeholder=\"Select an option\"></p-dropdown>\n        </div>\n        <div class=\"ui-g-7\">\n          <label for=\"b\">文化价值</label>\n        </div>\n        <div class=\"ui-g-3\">\n          <p-dropdown [options]=\"availableEvalOptions\" [(ngModel)]=\"evaluation.cultureValue\" placeholder=\"Select an option\"></p-dropdown>\n        </div>\n        <div class=\"ui-g-7\">\n          <label for=\"c\">经济价值</label>\n        </div>\n        <div class=\"ui-g-3\">\n          <p-dropdown [options]=\"availableEvalOptions\" [(ngModel)]=\"evaluation.economyValue\" placeholder=\"Select an option\"></p-dropdown>\n        </div>\n        <div class=\"ui-g-7\">\n          <label for=\"c\">历史价值</label>\n        </div>\n        <div class=\"ui-g-3\">\n          <p-dropdown [options]=\"availableEvalOptions\" [(ngModel)]=\"evaluation.historyValue\" placeholder=\"Select an option\"></p-dropdown>\n        </div>\n        <div class=\"ui-g-7\">\n          <label for=\"importance\">教育价值</label>\n        </div>\n        <div class=\"ui-g-3\">\n          <p-dropdown [options]=\"availableEvalOptions\" [(ngModel)]=\"evaluation.educationValue\" placeholder=\"Select an option\"></p-dropdown>\n        </div>\n        <div class=\"ui-g-7\">\n          <label for=\"b\">社会价值</label>\n        </div>\n        <div class=\"ui-g-3\">\n          <p-dropdown [options]=\"availableEvalOptions\" [(ngModel)]=\"evaluation.societyValue\" placeholder=\"Select an option\"></p-dropdown>\n        </div>\n        <div class=\"ui-g-7\">\n          <label for=\"c\">科学价值</label>\n        </div>\n        <div class=\"ui-g-3\">\n          <p-dropdown [options]=\"availableEvalOptions\" [(ngModel)]=\"evaluation.scienceValue\" placeholder=\"Select an option\"></p-dropdown>\n        </div>\n        <div class=\"ui-g-7\">\n          <label for=\"c\">文化生态环境价值</label>\n        </div>\n        <div class=\"ui-g-3\">\n          <p-dropdown [options]=\"availableEvalOptions\" [(ngModel)]=\"evaluation.ecologicalEnvironmentValue\" placeholder=\"Select an option\"></p-dropdown>\n        </div>\n      </p-fieldset>\n\n      <p-fieldset legend=\"项目自身基本情况\">\n        <div class=\"ui-g-7\">\n          <label for=\"importance\">品质情况</label>\n        </div>\n        <div class=\"ui-g-3\">\n          <p-dropdown [options]=\"availableEvalOptions\" [(ngModel)]=\"evaluation.qualityValue\" placeholder=\"Select an option\"></p-dropdown>\n        </div>\n        <div class=\"ui-g-7\">\n          <label for=\"b\">珍稀性</label>\n        </div>\n        <div class=\"ui-g-3\">\n          <p-dropdown [options]=\"availableEvalOptions\" [(ngModel)]=\"evaluation.rarenessValue\" placeholder=\"Select an option\"></p-dropdown>\n        </div>\n        <div class=\"ui-g-7\">\n          <label for=\"c\">原生态程度</label>\n        </div>\n        <div class=\"ui-g-3\">\n          <p-dropdown [options]=\"availableEvalOptions\" [(ngModel)]=\"evaluation.ecologyValue\" placeholder=\"Select an option\"></p-dropdown>\n        </div>\n        <div class=\"ui-g-7\">\n          <label for=\"c\">知名度</label>\n        </div>\n        <div class=\"ui-g-3\">\n          <p-dropdown [options]=\"availableEvalOptions\" [(ngModel)]=\"evaluation.popularValue\" placeholder=\"Select an option\"></p-dropdown>\n        </div>\n        <div class=\"ui-g-7\">\n          <label for=\"c\">个性</label>\n        </div>\n        <div class=\"ui-g-3\">\n          <p-dropdown [options]=\"availableEvalOptions\" [(ngModel)]=\"evaluation.personalityValue\" placeholder=\"Select an option\"></p-dropdown>\n        </div>\n        <div class=\"ui-g-7\">\n          <label for=\"c\">时间跨度</label>\n        </div>\n        <div class=\"ui-g-3\">\n          <p-dropdown [options]=\"availableEvalOptions\" [(ngModel)]=\"evaluation.timeSpanValue\" placeholder=\"Select an option\"></p-dropdown>\n        </div>\n      </p-fieldset>\n\n      <p-fieldset legend=\"项目资源开发条件与现状\">\n        <div class=\"ui-g-7\">\n          <label for=\"importance\">区域经济水平</label>\n        </div>\n        <div class=\"ui-g-3\">\n          <p-dropdown [options]=\"availableEvalOptions\" [(ngModel)]=\"evaluation.nationalEcomonicValue\" placeholder=\"Select an option\"></p-dropdown>\n        </div>\n        <div class=\"ui-g-7\">\n          <label for=\"b\">旅游市场情况</label>\n        </div>\n        <div class=\"ui-g-3\">\n          <p-dropdown [options]=\"availableEvalOptions\" [(ngModel)]=\"evaluation.marketStatusValue\" placeholder=\"Select an option\"></p-dropdown>\n        </div>\n        <div class=\"ui-g-7\">\n          <label for=\"c\">资源开发基础</label>\n        </div>\n        <div class=\"ui-g-3\">\n          <p-dropdown [options]=\"availableEvalOptions\" [(ngModel)]=\"evaluation.basicResourceDevelopmentValue\"\n            placeholder=\"Select an option\"></p-dropdown>\n        </div>\n        <div class=\"ui-g-7\">\n          <label for=\"c\">资源开发现状</label>\n        </div>\n        <div class=\"ui-g-3\">\n          <p-dropdown [options]=\"availableEvalOptions\" [(ngModel)]=\"evaluation.basicResourceValue\" placeholder=\"Select an option\"></p-dropdown>\n        </div>\n        <div class=\"ui-g-7\">\n          <label for=\"c\">企业介入可能性</label>\n        </div>\n        <div class=\"ui-g-3\">\n          <p-dropdown [options]=\"availableEvalOptions\" [(ngModel)]=\"evaluation.introductionProbabilityValue\"\n            placeholder=\"Select an option\"></p-dropdown>\n        </div>\n      </p-fieldset>\n\n    </div>\n    <p-footer>\n      <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\n        <button type=\"button\" pButton icon=\"fa fa-close\" (click)=\"delete()\" label=\"删除\"></button>\n        <button type=\"button\" pButton icon=\"fa fa-check\" (click)=\"save()\" label=\"保存\"></button>\n      </div>\n    </p-footer>\n  </p-dialog>\n\n\n</div>"

/***/ }),

/***/ "./src/app/heritage-evaluation/heritage-evaluation.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/heritage-evaluation/heritage-evaluation.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spacer {\n  flex: 1 1 auto; }\n\n.basic-container {\n  padding-left: 15%;\n  padding-right: 15%;\n  padding-top: 1%;\n  padding-bottom: 2%; }\n\ntable td,\ntable th {\n  min-width: 200px;\n  min-height: 10em;\n  border: 1px solid #000; }\n"

/***/ }),

/***/ "./src/app/heritage-evaluation/heritage-evaluation.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/heritage-evaluation/heritage-evaluation.component.ts ***!
  \**********************************************************************/
/*! exports provided: HeritageEvaluationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeritageEvaluationComponent", function() { return HeritageEvaluationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_shared */ "./src/app/_shared/index.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HeritageEvaluationComponent = /** @class */ (function () {
    function HeritageEvaluationComponent(route, heritageService, userService, heritageEvaluationService, evaluationOptionService, toastr, evaluatorTypeSerice, confirmationService, evalParameterService) {
        this.route = route;
        this.heritageService = heritageService;
        this.userService = userService;
        this.heritageEvaluationService = heritageEvaluationService;
        this.evaluationOptionService = evaluationOptionService;
        this.toastr = toastr;
        this.evaluatorTypeSerice = evaluatorTypeSerice;
        this.confirmationService = confirmationService;
        this.evalParameterService = evalParameterService;
    }
    HeritageEvaluationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.populateEvaluationOptions();
        this.populateEvaluatorTypes();
        this.currentUserId = this.userService.currentUserId();
        this.route.params.subscribe(function (params) {
            _this.param = params['id'];
            // check if ID exists in route & call update or add methods accordingly
            if (_this.param && _this.param != null && _this.param != undefined) {
                _this.heritageService.getHeritage(_shared__WEBPACK_IMPORTED_MODULE_4__["Global"].BASE_HERITAGE_ENDPOINT + _this.param).subscribe(function (result) {
                    _this.heritage = result;
                    _this.heritageEvaluationService.getHeritageEvaluations(_shared__WEBPACK_IMPORTED_MODULE_4__["Global"].BASE_HERITAGE_EVALUATION_ENDPOINT + 'getHeritageEvaluation/' + _this.heritage.id)
                        .subscribe(function (evals) {
                        _this.evaluations = evals;
                    });
                });
            }
        });
    };
    HeritageEvaluationComponent.prototype.showDialogToAdd = function () {
        this.newEvaluation = true;
        this.evaluation = {
            id: 0,
            heritageId: this.heritage.id,
            evaluatorTypeId: 5,
            evaluationValue: 0.0,
            agreementFactor: 0.2215,
            cognitionFactor: 0.2019,
            projectValueFactor: 0.1884,
            projectBasicInfoFactor: 0.1830,
            projectConditionStatusFactor: 0.20519,
            importanceValue: 5,
            nationalPrideValue: 5,
            govProtectionValue: 5,
            resourceCharacteristicsValue: 5,
            skillScopeValue: 5,
            skillInheritanceMethodValue: 5,
            skillInheritanceDifficultyValue: 5,
            artValue: 5,
            cultureValue: 5,
            economyValue: 5,
            historyValue: 5,
            educationValue: 5,
            societyValue: 5,
            scienceValue: 5,
            ecologicalEnvironmentValue: 5,
            qualityValue: 5,
            rarenessValue: 5,
            ecologyValue: 5,
            popularValue: 5,
            personalityValue: 5,
            timeSpanValue: 5,
            nationalEcomonicValue: 5,
            marketStatusValue: 5,
            basicResourceDevelopmentValue: 5,
            basicResourceValue: 5,
            introductionProbabilityValue: 5,
            createdUserId: this.currentUserId,
            createdUserName: '',
            createdOn: undefined,
            modifiedUserId: this.currentUserId,
            modifiedUserName: '',
            modifiedOn: undefined
        };
        this.displayDialog = true;
    };
    HeritageEvaluationComponent.prototype.save = function () {
        var _this = this;
        if (!this.userService.canEdit()) {
            this.toastr.error("您没有对非物质文化遗产进行评估的权限。", "权限验证失败");
            return;
        }
        if (this.newEvaluation) {
            this.heritageEvaluationService.addHeritageEvaluation(_shared__WEBPACK_IMPORTED_MODULE_4__["Global"].BASE_HERITAGE_EVALUATION_ENDPOINT, this.evaluation)
                .subscribe(function (data) {
                _this.evaluation = data;
                _this.toastr.success("非物质文化遗产评估添加成功。", "操作成功");
                _this.heritageEvaluationService.getHeritageEvaluations(_shared__WEBPACK_IMPORTED_MODULE_4__["Global"].BASE_HERITAGE_EVALUATION_ENDPOINT + 'getHeritageEvaluation/' + _this.heritage.id)
                    .subscribe(function (evals) {
                    _this.evaluations = evals;
                });
            }, function (error) {
                _this.toastr.error("非物质文化遗产评估添加失败。", "操作失败");
            });
        }
        else {
            this.heritageEvaluationService.updateHeritageEvaluation(_shared__WEBPACK_IMPORTED_MODULE_4__["Global"].BASE_HERITAGE_EVALUATION_ENDPOINT + this.evaluation.id, this.evaluation)
                .subscribe(function (data) {
                _this.evaluation = data;
                _this.toastr.success("非物质文化遗产评估修改成功。", "操作成功");
                _this.heritageEvaluationService.getHeritageEvaluations(_shared__WEBPACK_IMPORTED_MODULE_4__["Global"].BASE_HERITAGE_EVALUATION_ENDPOINT + 'getHeritageEvaluation/' + _this.heritage.id)
                    .subscribe(function (evals) {
                    _this.evaluations = evals;
                });
            }, function (error) {
                _this.toastr.error("非物质文化遗产评估修改失败。", "操作失败");
            });
        }
        this.displayDialog = false;
    };
    HeritageEvaluationComponent.prototype.delete = function () {
        var _this = this;
        if (!this.userService.canEdit()) {
            this.toastr.error("您没有删除非物质文化遗产评估的权限。", "权限验证失败");
            return;
        }
        if (this.evaluation.id == 0) {
            this.displayDialog = false;
            return;
        }
        this.confirmationService.confirm({
            message: '您确定要删除所选择的为物质文化遗产评估吗？',
            header: '确认删除',
            icon: 'pi pi-info-circle',
            accept: function () {
                _this.heritageEvaluationService.deleteHeritageEvaluation(_shared__WEBPACK_IMPORTED_MODULE_4__["Global"].BASE_HERITAGE_EVALUATION_ENDPOINT, _this.evaluation.id)
                    .subscribe(function (data) {
                    _this.toastr.success("非物质文化遗产评估删除成功。", "操作成功");
                    _this.heritageEvaluationService.getHeritageEvaluations(_shared__WEBPACK_IMPORTED_MODULE_4__["Global"].BASE_HERITAGE_EVALUATION_ENDPOINT + 'getHeritageEvaluation/' + _this.heritage.id)
                        .subscribe(function (evals) {
                        _this.evaluations = evals;
                    });
                }, function (error) {
                    _this.toastr.error("非物质文化遗产评估删除失败。", "操作失败");
                });
                _this.displayDialog = false;
            },
            reject: function () { }
        });
    };
    HeritageEvaluationComponent.prototype.onRowSelect = function (event) {
        if (!this.userService.canEdit()) {
            this.toastr.error("您没有修改非物质文化遗产评估的权限。", "权限验证失败");
            return;
        }
        this.newEvaluation = false;
        this.evaluation = this.cloneEvaluation(event.data);
        this.displayDialog = true;
    };
    HeritageEvaluationComponent.prototype.cloneEvaluation = function (c) {
        var evaluation = {
            id: 0,
            heritageId: this.heritage.id,
            evaluatorTypeId: -1,
            evaluationValue: 0.0,
            agreementFactor: 0.2,
            cognitionFactor: 0.2,
            projectValueFactor: 0.2,
            projectBasicInfoFactor: 0.2,
            projectConditionStatusFactor: 0.2,
            importanceValue: -1,
            nationalPrideValue: -1,
            govProtectionValue: -1,
            resourceCharacteristicsValue: -1,
            skillScopeValue: -1,
            skillInheritanceMethodValue: -1,
            skillInheritanceDifficultyValue: -1,
            artValue: -1,
            cultureValue: -1,
            economyValue: -1,
            historyValue: -1,
            educationValue: -1,
            societyValue: -1,
            scienceValue: -1,
            ecologicalEnvironmentValue: -1,
            qualityValue: -1,
            rarenessValue: -1,
            ecologyValue: -1,
            popularValue: -1,
            personalityValue: -1,
            timeSpanValue: -1,
            nationalEcomonicValue: -1,
            marketStatusValue: -1,
            basicResourceDevelopmentValue: -1,
            basicResourceValue: -1,
            introductionProbabilityValue: -1,
            createdUserId: this.currentUserId,
            createdUserName: '',
            createdOn: undefined,
            codifiedUserId: this.currentUserId,
            modifiedUserName: '',
            modifiedOn: undefined
        };
        for (var prop in c) {
            evaluation[prop] = c[prop];
        }
        return evaluation;
    };
    HeritageEvaluationComponent.prototype.populateEvaluationOptions = function () {
        var _this = this;
        this.availableEvalOptions = [];
        this.evaluationOptionService.getEvaluationOptions(_shared__WEBPACK_IMPORTED_MODULE_4__["Global"].BASE_EVALUATION_OPTION_ENDPOINT + 'getAllEvaluationOption')
            .subscribe(function (data) {
            var options = data;
            for (var i = 0; i < options.length; i++) {
                _this.availableEvalOptions.push({ label: options[i].option, value: options[i].id });
            }
            _this.defaultEvalOption = _this.availableEvalOptions[0].value;
        });
    };
    HeritageEvaluationComponent.prototype.populateEvaluatorTypes = function () {
        var _this = this;
        this.availableEvalTypes = [];
        this.evaluatorTypeSerice.getEvaluatorTypes(_shared__WEBPACK_IMPORTED_MODULE_4__["Global"].BASE_EVALUATOR_TYPE_ENDPOINT + 'getAllEvaluatorType')
            .subscribe(function (result) {
            var types = result;
            for (var j = 0; j < types.length; j++) {
                _this.availableEvalTypes.push({ label: types[j].type, value: types[j].id });
            }
            _this.defaultEvalType = _this.availableEvalTypes[0].value;
        });
    };
    HeritageEvaluationComponent.prototype.evaluateheritage = function () {
        var _this = this;
        if (!this.userService.canEdit()) {
            this.toastr.error("您没有计算非物质文化遗产旅游价值的权限。", "权限验证失败");
            return;
        }
        this.heritageEvaluationService.evaluateHeritage(_shared__WEBPACK_IMPORTED_MODULE_4__["Global"].BASE_HERITAGE_EVALUATION_ENDPOINT + 'evaluateHeritage/' + this.heritage.id)
            .subscribe(function (res) {
            _this.heritage = res;
            _this.toastr.success("非物质文化遗产旅游价值计算成功。", "操作成功");
        }, function (error) {
            _this.toastr.error("非物质文化遗产旅游价值计算失败。", "操作失败");
        });
    };
    HeritageEvaluationComponent.prototype.saveparam1 = function () {
        var _this = this;
        this.evalParameterService.updateEvaluationParameter(_shared__WEBPACK_IMPORTED_MODULE_4__["Global"].BASE_EVALUATION_PARAMETER_ENDPOINT + '1', this.param1)
            .subscribe(function (data) {
            _this.param1 = data;
            _this.displayParameters = false;
        });
    };
    HeritageEvaluationComponent.prototype.saveparam2 = function () {
        var _this = this;
        this.evalParameterService.updateEvaluationParameter(_shared__WEBPACK_IMPORTED_MODULE_4__["Global"].BASE_EVALUATION_PARAMETER_ENDPOINT + '2', this.param2)
            .subscribe(function (data) {
            _this.param2 = data;
            _this.displayParameters = false;
        });
    };
    HeritageEvaluationComponent.prototype.saveparam3 = function () {
        var _this = this;
        this.evalParameterService.updateEvaluationParameter(_shared__WEBPACK_IMPORTED_MODULE_4__["Global"].BASE_EVALUATION_PARAMETER_ENDPOINT + '3', this.param3)
            .subscribe(function (data) {
            _this.param3 = data;
            _this.displayParameters = false;
        });
    };
    HeritageEvaluationComponent.prototype.saveparam4 = function () {
        var _this = this;
        this.evalParameterService.updateEvaluationParameter(_shared__WEBPACK_IMPORTED_MODULE_4__["Global"].BASE_EVALUATION_PARAMETER_ENDPOINT + '4', this.param4)
            .subscribe(function (data) {
            _this.param4 = data;
            _this.displayParameters = false;
        });
    };
    HeritageEvaluationComponent.prototype.saveparam5 = function () {
        var _this = this;
        this.evalParameterService.updateEvaluationParameter(_shared__WEBPACK_IMPORTED_MODULE_4__["Global"].BASE_EVALUATION_PARAMETER_ENDPOINT + '5', this.param5)
            .subscribe(function (data) {
            _this.param5 = data;
            _this.displayParameters = false;
        });
    };
    HeritageEvaluationComponent.prototype.showParameters = function () {
        var _this = this;
        this.evalParameterService.getEvaluationParameter(_shared__WEBPACK_IMPORTED_MODULE_4__["Global"].BASE_EVALUATION_PARAMETER_ENDPOINT + '1')
            .subscribe(function (dataParam1) {
            _this.param1 = dataParam1;
            _this.evalParameterService.getEvaluationParameter(_shared__WEBPACK_IMPORTED_MODULE_4__["Global"].BASE_EVALUATION_PARAMETER_ENDPOINT + '2')
                .subscribe(function (dataParam2) {
                _this.param2 = dataParam2;
                _this.evalParameterService.getEvaluationParameter(_shared__WEBPACK_IMPORTED_MODULE_4__["Global"].BASE_EVALUATION_PARAMETER_ENDPOINT + '3')
                    .subscribe(function (dataParam3) {
                    _this.param3 = dataParam3;
                    _this.evalParameterService.getEvaluationParameter(_shared__WEBPACK_IMPORTED_MODULE_4__["Global"].BASE_EVALUATION_PARAMETER_ENDPOINT + '4')
                        .subscribe(function (dataParam4) {
                        _this.param4 = dataParam4;
                        _this.evalParameterService.getEvaluationParameter(_shared__WEBPACK_IMPORTED_MODULE_4__["Global"].BASE_EVALUATION_PARAMETER_ENDPOINT + '5')
                            .subscribe(function (dataParam5) {
                            _this.param5 = dataParam5;
                            _this.displayParameters = true;
                        });
                    });
                });
            });
        });
    };
    HeritageEvaluationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-heritage-evaluation',
            template: __webpack_require__(/*! ./heritage-evaluation.component.html */ "./src/app/heritage-evaluation/heritage-evaluation.component.html"),
            styles: [__webpack_require__(/*! ./heritage-evaluation.component.scss */ "./src/app/heritage-evaluation/heritage-evaluation.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services__WEBPACK_IMPORTED_MODULE_3__["HeritageService"],
            _services__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _services__WEBPACK_IMPORTED_MODULE_3__["HeritageEvaluationService"],
            _services__WEBPACK_IMPORTED_MODULE_3__["EvaluationOptionService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _services__WEBPACK_IMPORTED_MODULE_3__["EvaluatorTypeService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_5__["ConfirmationService"],
            _services__WEBPACK_IMPORTED_MODULE_3__["EvaluationParameterService"]])
    ], HeritageEvaluationComponent);
    return HeritageEvaluationComponent;
}());



/***/ }),

/***/ "./src/app/heritage-evaluation/heritage-evaluation.route.ts":
/*!******************************************************************!*\
  !*** ./src/app/heritage-evaluation/heritage-evaluation.route.ts ***!
  \******************************************************************/
/*! exports provided: heritageEvaluationRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "heritageEvaluationRoutes", function() { return heritageEvaluationRoutes; });
/* harmony import */ var _heritage_evaluation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./heritage-evaluation.component */ "./src/app/heritage-evaluation/heritage-evaluation.component.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_guards */ "./src/app/_guards/index.ts");


// Route Configuration
var heritageEvaluationRoutes = [
    { path: 'heritageevaluation/:id', component: _heritage_evaluation_component__WEBPACK_IMPORTED_MODULE_0__["HeritageEvaluationComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] }
];


/***/ }),

/***/ "./src/app/heritage-evaluation/index.ts":
/*!**********************************************!*\
  !*** ./src/app/heritage-evaluation/index.ts ***!
  \**********************************************/
/*! exports provided: HeritageEvaluationComponent, heritageEvaluationRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _heritage_evaluation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./heritage-evaluation.component */ "./src/app/heritage-evaluation/heritage-evaluation.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeritageEvaluationComponent", function() { return _heritage_evaluation_component__WEBPACK_IMPORTED_MODULE_0__["HeritageEvaluationComponent"]; });

/* harmony import */ var _heritage_evaluation_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./heritage-evaluation.route */ "./src/app/heritage-evaluation/heritage-evaluation.route.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "heritageEvaluationRoutes", function() { return _heritage_evaluation_route__WEBPACK_IMPORTED_MODULE_1__["heritageEvaluationRoutes"]; });





/***/ }),

/***/ "./src/app/heritage-list/heritage-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/heritage-list/heritage-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  \n  <!--\n  <div class=\"spinner\" *ngIf=\"loadingState; else userlist\">\n    <mat-spinner></mat-spinner>\n  </div>\n  -->\n\n  <div class=\"tblcontainer mat-elevation-z8\">\n  \n    <div class=\"form\">\n      <mat-form-field floatPlaceholder=\"never\" color=\"accent\">\n        <input matInput #filter placeholder=\"Filter heritages\">\n      </mat-form-field>\n    </div>\n  \n    <mat-table #table [dataSource]=\"dataSource\" matSort class=\"mat-cell\">\n  \n      <!--- Note that these columns can be defined in any order.\n            The actual rendered columns are set as a property on the row definition\" -->\n  \n      <!-- ID Column -->\n      <ng-container matColumnDef=\"id\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>编号</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" >{{row.id}}</mat-cell>\n      </ng-container>\n  \n      <ng-container matColumnDef=\"name\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>名称</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.name}}</mat-cell>\n      </ng-container>\n  \n      <ng-container matColumnDef=\"registrationDistrict\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>申报地区或单位</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.registrationDistrict}}</mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"registrationYear\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>申报年份</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.registrationYear}}</mat-cell>\n      </ng-container>\n  \n      <ng-container matColumnDef=\"province\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>所属省份</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.province}}</mat-cell>\n      </ng-container>\n  \n      <ng-container matColumnDef=\"typeofProject\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>项目类型</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.typeofProject}}</mat-cell>\n      </ng-container>\n  \n      <ng-container matColumnDef=\"batchNo\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>批次</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.batchNo}}</mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"inheritors\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>传承人</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.inheritors}}</mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"projectOverview\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>项目简介</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.projectOverview}}</mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"history\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>历史沿革</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.history}}</mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"currentStatus\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>现状</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.currentStatus}}</mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"presentValue\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>价值</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.presentValue}}</mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"endangeredStatus\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>濒危情况</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.endangeredStatus}}</mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"masterpiece\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>代表作品</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.masterpiece}}</mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"tourismStatus\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>旅游开放现状</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.tourismStatus}}</mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"tourismMarketCharacteristics\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>旅游市场特点</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.tourismMarketCharacteristics}}</mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"tourismProduct\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>配套旅游产品</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.tourismProduct}}</mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"tourismPrice\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>旅游价格</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.tourismPrice}}</mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"tourismDevelopmentModel\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>旅游开发模式</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.tourismDevelopmentModel}}</mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"tourismBenefit\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>旅游效益</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.tourismBenefit}}</mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"createdBy\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>创建用户</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.createdBy}}</mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"createdOn\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>创建日期</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.createdOn}}</mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"modifiedBy\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>编辑用户</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.modifiedBy}}</mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"modifiedOn\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>编辑日期</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.modifiedOn}}</mat-cell>\n      </ng-container>\n  \n      <!-- actions -->\n      <ng-container matColumnDef=\"actions\">\n        <mat-header-cell *matHeaderCellDef>\n          <button mat-icon-button color=\"primary\" [routerLink]=\"['/heritagedetail']\">\n            <mat-icon aria-label=\"Example icon-button with a heart icon\">add</mat-icon>\n          </button>\n          <button mat-icon-button (click)=\"refresh()\">\n            <mat-icon>refresh</mat-icon>\n          </button>\n        </mat-header-cell>\n  \n        <mat-cell *matCellDef=\"let row;\">\n          <button mat-icon-button color=\"accent\" [routerLink]=\"['/heritagedetail', row.id]\">\n            <mat-icon aria-label=\"Edit\">edit</mat-icon>\n          </button>\n\n          <button mat-icon-button color=\"accent\" [routerLink]=\"['/heritagenav', row.id]\">\n            <mat-icon aria-label=\"Explore\">explore</mat-icon>\n          </button>\n\n          <button mat-icon-button color=\"accent\" [routerLink]=\"['/heritagedecomment', row.id]\">\n            <mat-icon aria-label=\"Comment\">comment</mat-icon>\n          </button>\n  \n          <button mat-icon-button color=\"accent\" (click)=\"deleteItem(row.id, row.name)\">\n            <mat-icon aria-label=\"Delete\">delete</mat-icon>\n          </button>\n        </mat-cell>\n      </ng-container>\n       \n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n  \n    <div class=\"no-results\" [style.display]=\"dataSource.renderedData.length == 0 ? '' : 'none'\">\n      No results\n    </div>\n  \n    <mat-paginator #paginator\n                   [length]=\"dataSource.filteredData.length\"\n                   [pageIndex]=\"0\"\n                   [pageSize]=\"10\"\n                   [pageSizeOptions]=\"[5, 10, 25, 100]\">\n    </mat-paginator>\n  </div>\n  "

/***/ }),

/***/ "./src/app/heritage-list/heritage-list.component.scss":
/*!************************************************************!*\
  !*** ./src/app/heritage-list/heritage-list.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Structure */\n.container {\n  display: flex;\n  flex-direction: column; }\n/* Toolbar */\n.spacer {\n  flex: 1 1 auto; }\n/* Filter */\n.form {\n  min-height: 56px;\n  max-height: 56px;\n  display: flex;\n  align-items: center;\n  padding: 8px 24px 0;\n  font-size: 20px;\n  justify-content: space-between;\n  border-bottom: 1px solid transparent; }\n.mat-form-field {\n  font-size: 14px;\n  flex-grow: 1;\n  margin-top: 8px; }\n/* Mat table */\n.no-results {\n  display: flex;\n  justify-content: center;\n  padding: 14px;\n  font-size: 14px;\n  font-style: italic; }\n.mat-cell:nth-child(1),\n.mat-header-cell:nth-child(1) {\n  flex: 0 0 6%; }\n.mat-cell:nth-child(2),\n.mat-header-cell:nth-child(2) {\n  flex: 0 0 30%; }\n.mat-cell:nth-child(3),\n.mat-header-cell:nth-child(3) {\n  flex: 0 0 6%; }\n.mat-cell:nth-child(7),\n.mat-header-cell:nth-child(7) {\n  flex: 0 0 7%; }\n"

/***/ }),

/***/ "./src/app/heritage-list/heritage-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/heritage-list/heritage-list.component.ts ***!
  \**********************************************************/
/*! exports provided: HeritageListComponent, HeritageDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeritageListComponent", function() { return HeritageListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeritageDataSource", function() { return HeritageDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var rxjs_add_observable_merge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/observable/merge */ "./node_modules/rxjs-compat/_esm5/add/observable/merge.js");
/* harmony import */ var rxjs_add_observable_fromEvent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/add/observable/fromEvent */ "./node_modules/rxjs-compat/_esm5/add/observable/fromEvent.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_debounceTime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/add/operator/debounceTime */ "./node_modules/rxjs-compat/_esm5/add/operator/debounceTime.js");
/* harmony import */ var rxjs_add_operator_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/add/operator/distinctUntilChanged */ "./node_modules/rxjs-compat/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../_shared */ "./src/app/_shared/index.ts");
/* harmony import */ var _dialogs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../_dialogs */ "./src/app/_dialogs/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var HeritageListComponent = /** @class */ (function () {
    function HeritageListComponent(httpClient, _heritageService, toastr, dialog) {
        this.httpClient = httpClient;
        this._heritageService = _heritageService;
        this.toastr = toastr;
        this.dialog = dialog;
        this.displayedColumns = ['id', 'name', 'registrationDistrict', 'registrationYear', 'province', 'typeofProject', 'inheritors', 'presentValue', 'createdOn', 'actions'];
    }
    HeritageListComponent.prototype.ngOnInit = function () {
        this.loadingState = true;
        this.loadData();
    };
    HeritageListComponent.prototype.refresh = function () {
        this.loadingState = true;
        this.loadData();
    };
    HeritageListComponent.prototype.deleteItem = function (id, name) {
        var _this = this;
        this.id = id;
        var dialogRef = this.dialog.open(_dialogs__WEBPACK_IMPORTED_MODULE_14__["HeritageDeleteDialogComponent"], {
            data: { id: id, name: name }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === 1) {
                var foundIndex = _this._heritageService.dataChange.value.findIndex(function (x) { return x.id === _this.id; });
                // for delete we use splice in order to remove single object from DataService
                _this._heritageService.dataChange.value.splice(foundIndex, 1);
                _this.refreshTable();
            }
        });
    };
    // If you don't need a filter or a pagination this can be simplified, you just use code from else block
    HeritageListComponent.prototype.refreshTable = function () {
        // if there's a paginator active we're using it for refresh
        if (this.dataSource._paginator.hasNextPage()) {
            this.dataSource._paginator.nextPage();
            this.dataSource._paginator.previousPage();
            // in case we're on last page this if will tick
        }
        else if (this.dataSource._paginator.hasPreviousPage()) {
            this.dataSource._paginator.previousPage();
            this.dataSource._paginator.nextPage();
            // in all other cases including active filter we do it like this
        }
        else {
            this.dataSource.filter = '';
            this.dataSource.filter = this.filter.nativeElement.value;
        }
    };
    HeritageListComponent.prototype.loadData = function () {
        var _this = this;
        this.loadingState = false;
        this._heritageService = new _services__WEBPACK_IMPORTED_MODULE_1__["HeritageService"](this.httpClient);
        this.dataSource = new HeritageDataSource(this._heritageService, this.paginator, this.sort);
        rxjs_Observable__WEBPACK_IMPORTED_MODULE_4__["Observable"].fromEvent(this.filter.nativeElement, 'keyup')
            .debounceTime(150)
            .distinctUntilChanged()
            .subscribe(function () {
            if (!_this.dataSource) {
                return;
            }
            _this.dataSource.filter = _this.filter.nativeElement.value;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], HeritageListComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], HeritageListComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('filter'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HeritageListComponent.prototype, "filter", void 0);
    HeritageListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-heritage-list',
            template: __webpack_require__(/*! ./heritage-list.component.html */ "./src/app/heritage-list/heritage-list.component.html"),
            styles: [__webpack_require__(/*! ./heritage-list.component.scss */ "./src/app/heritage-list/heritage-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _services__WEBPACK_IMPORTED_MODULE_1__["HeritageService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], HeritageListComponent);
    return HeritageListComponent;
}());

var HeritageDataSource = /** @class */ (function (_super) {
    __extends(HeritageDataSource, _super);
    function HeritageDataSource(_heritageService, _paginator, _sort) {
        var _this = _super.call(this) || this;
        _this._heritageService = _heritageService;
        _this._paginator = _paginator;
        _this._sort = _sort;
        _this._filterChange = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]('');
        _this.filteredData = [];
        _this.renderedData = [];
        // Reset to the first page when the user changes the filter.
        _this._filterChange.subscribe(function () { return _this._paginator.pageIndex = 0; });
        return _this;
    }
    Object.defineProperty(HeritageDataSource.prototype, "filter", {
        get: function () {
            return this._filterChange.value;
        },
        set: function (filter) {
            this._filterChange.next(filter);
        },
        enumerable: true,
        configurable: true
    });
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    HeritageDataSource.prototype.connect = function () {
        var _this = this;
        // Listen for any changes in the base data, sorting, filtering, or pagination
        var displayDataChanges = [
            this._heritageService.dataChange,
            this._sort.sortChange,
            this._filterChange,
            this._paginator.page
        ];
        this._heritageService.getAllHeritage(_shared__WEBPACK_IMPORTED_MODULE_13__["Global"].BASE_HERITAGE_ENDPOINT + 'getAllHeritage');
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_4__["Observable"].merge.apply(rxjs_Observable__WEBPACK_IMPORTED_MODULE_4__["Observable"], displayDataChanges).map(function () {
            // Filter data
            _this.filteredData = _this._heritageService.data.slice().filter(function (heritage) {
                var searchStr = (heritage.id + heritage.name + heritage.registrationDistrict + heritage.registrationYear).toLowerCase();
                return searchStr.indexOf(_this.filter.toLowerCase()) !== -1;
            });
            // Sort filtered data
            var sortedData = _this.sortData(_this.filteredData.slice());
            // Grab the page's slice of the filtered sorted data.
            var startIndex = _this._paginator.pageIndex * _this._paginator.pageSize;
            _this.renderedData = sortedData.splice(startIndex, _this._paginator.pageSize);
            return _this.renderedData;
        });
    };
    HeritageDataSource.prototype.disconnect = function () {
    };
    /** Returns a sorted copy of the database data. */
    HeritageDataSource.prototype.sortData = function (data) {
        var _this = this;
        if (!this._sort.active || this._sort.direction === '') {
            return data;
        }
        return data.sort(function (a, b) {
            var _a, _b, _c, _d, _e, _f;
            var propertyA = '';
            var propertyB = '';
            switch (_this._sort.active) {
                case 'id':
                    _a = [a.id, b.id], propertyA = _a[0], propertyB = _a[1];
                    break;
                case 'name':
                    _b = [a.name, b.name], propertyA = _b[0], propertyB = _b[1];
                    break;
                case 'registrationDistrict':
                    _c = [a.registrationDistrict, b.registrationDistrict], propertyA = _c[0], propertyB = _c[1];
                    break;
                case 'registrationYear':
                    _d = [a.registrationYear, b.registrationYear], propertyA = _d[0], propertyB = _d[1];
                    break;
                case 'province':
                    _e = [a.province, b.province], propertyA = _e[0], propertyB = _e[1];
                    break;
                case 'inheritors':
                    _f = [a.inheritors, b.inheritors], propertyA = _f[0], propertyB = _f[1];
                    break;
            }
            var valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            var valueB = isNaN(+propertyB) ? propertyB : +propertyB;
            return (valueA < valueB ? -1 : 1) * (_this._sort.direction === 'asc' ? 1 : -1);
        });
    };
    return HeritageDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__["DataSource"]));



/***/ }),

/***/ "./src/app/heritage-list/heritage-list.route.ts":
/*!******************************************************!*\
  !*** ./src/app/heritage-list/heritage-list.route.ts ***!
  \******************************************************/
/*! exports provided: heritageListRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "heritageListRoutes", function() { return heritageListRoutes; });
/* harmony import */ var _heritage_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./heritage-list.component */ "./src/app/heritage-list/heritage-list.component.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_guards */ "./src/app/_guards/index.ts");


// Route Configuration
var heritageListRoutes = [
    { path: 'heritagelist', component: _heritage_list_component__WEBPACK_IMPORTED_MODULE_0__["HeritageListComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] }
];


/***/ }),

/***/ "./src/app/heritage-list/index.ts":
/*!****************************************!*\
  !*** ./src/app/heritage-list/index.ts ***!
  \****************************************/
/*! exports provided: HeritageListComponent, HeritageDataSource, heritageListRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _heritage_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./heritage-list.component */ "./src/app/heritage-list/heritage-list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeritageListComponent", function() { return _heritage_list_component__WEBPACK_IMPORTED_MODULE_0__["HeritageListComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeritageDataSource", function() { return _heritage_list_component__WEBPACK_IMPORTED_MODULE_0__["HeritageDataSource"]; });

/* harmony import */ var _heritage_list_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./heritage-list.route */ "./src/app/heritage-list/heritage-list.route.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "heritageListRoutes", function() { return _heritage_list_route__WEBPACK_IMPORTED_MODULE_1__["heritageListRoutes"]; });





/***/ }),

/***/ "./src/app/heritage-nav/heritage-nav.component.html":
/*!**********************************************************!*\
  !*** ./src/app/heritage-nav/heritage-nav.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"basic-container\" *ngIf=\"heritage\">\n\n  <mat-toolbar>\n    <span>多模态智能旅游价值评估、旅游活化与利益相关者博弈研究: {{ heritage.name }} </span>\n    <span class=\"spacer\"></span>\n    <button type=\"button\" mat-button class=\"form-save\" routerLink=\"/heritagelist\">返回</button>\n  </mat-toolbar>\n\n  <mat-grid-list cols=\"3\" rowHeight=\"2:2\">\n    <mat-grid-tile>\n      <div>\n        <h2>非遗旅游价值评估子系统</h2>\n        <p>非遗旅游价值=系数1*消费者评估价值+系数2*传承人评估价值+系数3*政府评估价值+系数4*旅游企业评估价值+系数5*非遗专家评估价值。</p>\n        <p><a class=\"btn btn-secondary\" [routerLink]=\"['/heritageevaluation', heritage.id]\" role=\"button\">旅游价值评估\n            &raquo;</a></p>\n      </div>\n    </mat-grid-tile>\n\n    <mat-grid-tile>\n      <div>\n        <h2>非遗利益相关者博弈子系统</h2>\n        <p>在传统技艺类非物质文化遗产的旅游活化的过程中，涉及的关键利益主体包括传承人、旅游企业、专家、政府以及旅游消费者，不同的利益主体由于利益诉求不同，相互之间形成了复杂的多方利益博弈网络。</p>\n        <p><a class=\"btn btn-secondary\" [routerLink]=\"['/heritageanalysis', heritage.id]\" role=\"button\">利益相关者博弈 &raquo;</a></p>\n      </div>\n    </mat-grid-tile>\n\n    <mat-grid-tile>\n      <div>\n        <h2>非遗活化子系统</h2>\n        <p>活化模式是基于非遗旅游价值，即上述模型中的因变量提出的。因变量即非遗旅游价值的取值范围能否设成可输入的字段，比如非遗旅游价值的值为3-3.5，选择博物馆展示这种活化模式，但是3和3.5这两个数字由用户手动输入。</p>\n        <p><a class=\"btn btn-secondary\" [routerLink]=\"['/heritageeactivation', heritage.id]\" role=\"button\">活化 &raquo;</a></p>\n      </div>\n    </mat-grid-tile>\n  </mat-grid-list>\n</div>\n\n<!--\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <h2>非遗旅游价值评估子系统</h2>\n        <p>非遗旅游价值=系数1*消费者评估价值+系数2*传承人评估价值+系数3*政府评估价值+系数4*旅游企业评估价值+系数5*非遗专家评估价值。</p>\n        <p><a class=\"btn btn-secondary\" [routerLink]=\"['/heritageevaluation', heritage.id]\" role=\"button\">旅游价值评估\n            &raquo;</a></p>\n      </div>\n      <div class=\"col-md-4\">\n        <h2>非遗利益相关者博弈子系统</h2>\n        <p>在传统技艺类非物质文化遗产的旅游活化的过程中，涉及的关键利益主体包括传承人、旅游企业、专家、政府以及旅游消费者，不同的利益主体由于利益诉求不同，相互之间形成了复杂的多方利益博弈网络。</p>\n        <p><a class=\"btn btn-secondary\" [routerLink]=\"['/heritageanalysis', heritage.id]\" role=\"button\">利益相关者博弈 &raquo;</a></p>\n      </div>\n      <div class=\"col-md-4\">\n        <h2>非遗活化子系统</h2>\n        <p>活化模式是基于非遗旅游价值，即上述模型中的因变量提出的。因变量即非遗旅游价值的取值范围能否设成可输入的字段，比如非遗旅游价值的值为3-3.5，选择博物馆展示这种活化模式，但是3和3.5这两个数字由用户手动输入。</p>\n        <p><a class=\"btn btn-secondary\" [routerLink]=\"['/heritageeactivation', heritage.id]\" role=\"button\">活化 &raquo;</a></p>\n      </div>\n    </div>\n\n  </div>\n  -->"

/***/ }),

/***/ "./src/app/heritage-nav/heritage-nav.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/heritage-nav/heritage-nav.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spacer {\n  flex: 1 1 auto; }\n\n.example-headers-align .mat-expansion-panel-header-title,\n.example-headers-align .mat-expansion-panel-header-description {\n  flex-basis: 0; }\n\n.example-headers-align .mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: center; }\n\n.basic-container {\n  padding-left: 15%;\n  padding-right: 15%;\n  padding-top: 1%;\n  padding-bottom: 2%; }\n"

/***/ }),

/***/ "./src/app/heritage-nav/heritage-nav.component.ts":
/*!********************************************************!*\
  !*** ./src/app/heritage-nav/heritage-nav.component.ts ***!
  \********************************************************/
/*! exports provided: HeritageNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeritageNavComponent", function() { return HeritageNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_shared */ "./src/app/_shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeritageNavComponent = /** @class */ (function () {
    function HeritageNavComponent(route, heritageService) {
        this.route = route;
        this.heritageService = heritageService;
    }
    HeritageNavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.param = params['id'];
            // check if ID exists in route & call update or add methods accordingly
            if (_this.param && _this.param != null && _this.param != undefined) {
                _this.heritageService.getHeritage(_shared__WEBPACK_IMPORTED_MODULE_3__["Global"].BASE_HERITAGE_ENDPOINT + _this.param).subscribe(function (result) {
                    _this.heritage = result;
                });
            }
        });
    };
    HeritageNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-heritage-nav',
            template: __webpack_require__(/*! ./heritage-nav.component.html */ "./src/app/heritage-nav/heritage-nav.component.html"),
            styles: [__webpack_require__(/*! ./heritage-nav.component.scss */ "./src/app/heritage-nav/heritage-nav.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services__WEBPACK_IMPORTED_MODULE_2__["HeritageService"]])
    ], HeritageNavComponent);
    return HeritageNavComponent;
}());



/***/ }),

/***/ "./src/app/heritage-nav/heritage-nav.route.ts":
/*!****************************************************!*\
  !*** ./src/app/heritage-nav/heritage-nav.route.ts ***!
  \****************************************************/
/*! exports provided: heritageNavRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "heritageNavRoutes", function() { return heritageNavRoutes; });
/* harmony import */ var _heritage_nav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./heritage-nav.component */ "./src/app/heritage-nav/heritage-nav.component.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_guards */ "./src/app/_guards/index.ts");


// Route Configuration
var heritageNavRoutes = [
    { path: 'heritagenav/:id', component: _heritage_nav_component__WEBPACK_IMPORTED_MODULE_0__["HeritageNavComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] }
];


/***/ }),

/***/ "./src/app/login/index.ts":
/*!********************************!*\
  !*** ./src/app/login/index.ts ***!
  \********************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]; });




/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"login-card\">\n    <alert></alert>\n    <mat-card-content>\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"form-group\">\n                <label for=\"username\">用户名</label>\n                <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n                <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.username.errors.required\">请提供用户名</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"password\">密码</label>\n                <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.password.errors.required\">请提供密码</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <button [disabled]=\"loading\" class=\"btn btn-primary\">登录</button>\n                <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n                <a [routerLink]=\"['/register']\" class=\"btn btn-link\">注册</a>\n            </div>\n        </form>\n    </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-card {\n  max-width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 100px;\n  margin-bottom: 100px; }\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_shared */ "./src/app/_shared/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, route, router, authenticationService, alertService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        // reset login status
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.login(_shared__WEBPACK_IMPORTED_MODULE_4__["Global"].BASE_USER_ENDPOINT + 'authenticate', this.f.username.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    LoginComponent.prototype.getUrl = function () {
        return "url('../../assets/images/background.jpg')";
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            _services__WEBPACK_IMPORTED_MODULE_5__["AlertService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/register/index.ts":
/*!***********************************!*\
  !*** ./src/app/register/index.ts ***!
  \***********************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.component */ "./src/app/register/register.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return _register_component__WEBPACK_IMPORTED_MODULE_0__["RegisterComponent"]; });




/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"register-card\">\n    <alert></alert>\n    <mat-card-content>\n        <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"form-group\">\n                <label for=\"firstName\">名</label>\n                <input type=\"text\" formControlName=\"firstName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\n                <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.firstName.errors.required\">请提供名</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"lastName\">姓</label>\n                <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\n                <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.lastName.errors.required\">请提供姓</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"username\">用户名</label>\n                <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n                <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.username.errors.required\">请提供用户名</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"password\">密码</label>\n                <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.password.errors.required\">请提供密码</div>\n                    <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <button [disabled]=\"loading\" class=\"btn btn-primary\">注册</button>\n                <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n                <a [routerLink]=\"['/login']\" class=\"btn btn-link\">取消</a>\n            </div>\n        </form>\n    </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/register/register.component.scss":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".register-card {\n  max-width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 100px;\n  margin-bottom: 100px; }\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_shared */ "./src/app/_shared/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, router, userService, alertService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.loading = true;
        this.userService.register(_shared__WEBPACK_IMPORTED_MODULE_4__["Global"].BASE_USER_ENDPOINT + 'register', this.registerForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            _this.alertService.success('用户注册成功', true);
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _services__WEBPACK_IMPORTED_MODULE_5__["AlertService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/user-list/user-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/user-list/user-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"tblcontainer mat-elevation-z8\">\n\n  <div class=\"form\">\n    <mat-form-field floatPlaceholder=\"never\" color=\"accent\">\n      <input matInput #filter placeholder=\"Filter users\">\n    </mat-form-field>\n  </div>\n\n  <mat-table #table [dataSource]=\"dataSource\" matSort class=\"mat-cell\">\n\n    <!--- Note that these columns can be defined in any order.\n          The actual rendered columns are set as a property on the row definition\" -->\n\n    <!-- ID Column -->\n    <ng-container matColumnDef=\"id\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>编号</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\" >{{row.id}}</mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"userName\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>用户名</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.userName}}</mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"firstName\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>名</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.firstName}}</mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"lastName\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>姓</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.lastName}}</mat-cell>\n    </ng-container>\n    \n    <ng-container matColumnDef=\"isReadOnly\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>只读</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">\n          <mat-checkbox [disabled]=\"true\" [checked]=\"row.isReadOnly\"></mat-checkbox>\n      </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"canComment\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>评论</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">\n        <mat-checkbox [disabled]=\"true\" [checked]=\"row.canComment\"></mat-checkbox>\n      </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"isContributer\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>编辑</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">\n          <mat-checkbox [disabled]=\"true\" [checked]=\"row.isContributer\"></mat-checkbox>\n      </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"isAdmin\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>管理</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">\n          <mat-checkbox [disabled]=\"true\" [checked]=\"row.isAdmin\"></mat-checkbox>\n      </mat-cell>\n    </ng-container>\n\n    <!-- actions -->\n    <ng-container matColumnDef=\"actions\">\n      <mat-header-cell *matHeaderCellDef>\n        <button mat-icon-button color=\"primary\" (click)=\"addNew()\">\n          <mat-icon aria-label=\"Example icon-button with a heart icon\">add</mat-icon>\n        </button>\n        <button mat-icon-button (click)=\"refresh()\">\n          <mat-icon>refresh</mat-icon>\n        </button>\n      </mat-header-cell>\n\n      <mat-cell *matCellDef=\"let row;\">\n        <button mat-icon-button color=\"accent\" (click)=\"startEdit(row.id, row.userName, row.firstName, row.lastName, row.isReadOnly, row.canComment, row.isContributer, row.isAdmin)\">\n          <mat-icon aria-label=\"Edit\">edit</mat-icon>\n        </button>\n\n        <button mat-icon-button color=\"accent\" (click)=\"deleteItem(row.id, row.userName, row.firstName, row.lastName, row.isReadOnly, row.canComment, row.isContributer, row.isAdmin)\">\n          <mat-icon aria-label=\"Delete\">delete</mat-icon>\n        </button>\n      </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n\n\n  <div class=\"no-results\" [style.display]=\"dataSource.renderedData.length == 0 ? '' : 'none'\">\n    No results\n  </div>\n\n  <mat-paginator #paginator\n                 [length]=\"dataSource.filteredData.length\"\n                 [pageIndex]=\"0\"\n                 [pageSize]=\"10\"\n                 [pageSizeOptions]=\"[5, 10, 25, 100]\">\n  </mat-paginator>\n</div>\n"

/***/ }),

/***/ "./src/app/user-list/user-list.component.scss":
/*!****************************************************!*\
  !*** ./src/app/user-list/user-list.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spinner {\n  top: 45%;\n  left: 47%;\n  position: fixed; }\n\n.contactlist-container, #paginator {\n  display: flex;\n  flex-direction: column;\n  min-width: 300px;\n  max-width: 1200px;\n  max-height: 700px;\n  overflow: auto;\n  margin: 0 auto; }\n\n/* Toolbar */\n\n.spacer {\n  flex: 1 1 auto; }\n"

/***/ }),

/***/ "./src/app/user-list/user-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-list/user-list.component.ts ***!
  \**************************************************/
/*! exports provided: UserListComponent, UserDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDataSource", function() { return UserDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _dialogs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_dialogs */ "./src/app/_dialogs/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_shared */ "./src/app/_shared/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserListComponent = /** @class */ (function () {
    function UserListComponent(httpClient, dialog, _userService) {
        this.httpClient = httpClient;
        this.dialog = dialog;
        this._userService = _userService;
        this.displayedColumns = ['userName', 'firstName', 'lastName', 'isReadOnly', 'canComment', 'isContributer', 'isAdmin', 'actions'];
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.loadingState = true;
        this.loadData();
    };
    UserListComponent.prototype.refresh = function () {
        this.loadingState = true;
        this.loadData();
    };
    UserListComponent.prototype.addNew = function (user) {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs__WEBPACK_IMPORTED_MODULE_5__["AddDialogComponent"], {
            data: { user: user }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === 1) {
                // After dialog is closed we're doing frontend updates
                // For add we're just pushing a new row inside DataService
                _this.userService.dataChange.value.push(dialogRef.componentInstance.newUser);
                _this.refreshTable();
            }
        });
    };
    UserListComponent.prototype.startEdit = function (id, userName, firstName, lastName, isReadOnly, canComment, isContributer, isAdmin) {
        var _this = this;
        this.id = id;
        // index row is used just for debugging proposes and can be removed
        console.log(this.id);
        var dialogRef = this.dialog.open(_dialogs__WEBPACK_IMPORTED_MODULE_5__["EditDialogComponent"], {
            data: { id: id, userName: userName, firstName: firstName, lastName: lastName, isReadOnly: isReadOnly, canComment: canComment, isContributer: isContributer, isAdmin: isAdmin }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === 1) {
                // When using an edit things are little different, firstly we find record inside DataService by id
                var foundIndex = _this.userService.dataChange.value.findIndex(function (x) { return x.id === _this.id; });
                // Then you update that record using data from dialogData (values you enetered)
                _this.userService.dataChange.value[foundIndex] = dialogRef.componentInstance.user;
                // And lastly refresh table
                _this.refreshTable();
            }
        });
    };
    UserListComponent.prototype.deleteItem = function (id, userName, firstName, lastName, isReadOnly, canComment, isContributer, isAdmin) {
        var _this = this;
        this.id = id;
        var dialogRef = this.dialog.open(_dialogs__WEBPACK_IMPORTED_MODULE_5__["DeleteDialogComponent"], {
            data: { id: id, userName: userName, firstName: firstName, lastName: lastName, isReadOnly: isReadOnly, canComment: canComment, isContributer: isContributer, isAdmin: isAdmin }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === 1) {
                var foundIndex = _this.userService.dataChange.value.findIndex(function (x) { return x.id === _this.id; });
                // for delete we use splice in order to remove single object from DataService
                _this.userService.dataChange.value.splice(foundIndex, 1);
                _this.refreshTable();
            }
        });
    };
    // If you don't need a filter or a pagination this can be simplified, you just use code from else block
    UserListComponent.prototype.refreshTable = function () {
        // if there's a paginator active we're using it for refresh
        if (this.dataSource._paginator.hasNextPage()) {
            this.dataSource._paginator.nextPage();
            this.dataSource._paginator.previousPage();
            // in case we're on last page this if will tick
        }
        else if (this.dataSource._paginator.hasPreviousPage()) {
            this.dataSource._paginator.previousPage();
            this.dataSource._paginator.nextPage();
            // in all other cases including active filter we do it like this
        }
        else {
            this.dataSource.filter = '';
            this.dataSource.filter = this.filter.nativeElement.value;
        }
    };
    UserListComponent.prototype.loadData = function () {
        var _this = this;
        this.loadingState = false;
        this.userService = new _services__WEBPACK_IMPORTED_MODULE_6__["UserService"](this.httpClient);
        this.dataSource = new UserDataSource(this.userService, this.paginator, this.sort);
        rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].fromEvent(this.filter.nativeElement, 'keyup')
            .debounceTime(150)
            .distinctUntilChanged()
            .subscribe(function () {
            if (!_this.dataSource) {
                return;
            }
            _this.dataSource.filter = _this.filter.nativeElement.value;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], UserListComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], UserListComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('filter'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], UserListComponent.prototype, "filter", void 0);
    UserListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.scss */ "./src/app/user-list/user-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _services__WEBPACK_IMPORTED_MODULE_6__["UserService"]])
    ], UserListComponent);
    return UserListComponent;
}());

var UserDataSource = /** @class */ (function (_super) {
    __extends(UserDataSource, _super);
    function UserDataSource(_userDatabase, _paginator, _sort) {
        var _this = _super.call(this) || this;
        _this._userDatabase = _userDatabase;
        _this._paginator = _paginator;
        _this._sort = _sort;
        _this._filterChange = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]('');
        _this.filteredData = [];
        _this.renderedData = [];
        // Reset to the first page when the user changes the filter.
        _this._filterChange.subscribe(function () { return _this._paginator.pageIndex = 0; });
        return _this;
    }
    Object.defineProperty(UserDataSource.prototype, "filter", {
        get: function () {
            return this._filterChange.value;
        },
        set: function (filter) {
            this._filterChange.next(filter);
        },
        enumerable: true,
        configurable: true
    });
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    UserDataSource.prototype.connect = function () {
        var _this = this;
        // Listen for any changes in the base data, sorting, filtering, or pagination
        var displayDataChanges = [
            this._userDatabase.dataChange,
            this._sort.sortChange,
            this._filterChange,
            this._paginator.page
        ];
        this._userDatabase.getAllUsers(_shared__WEBPACK_IMPORTED_MODULE_7__["Global"].BASE_USER_ENDPOINT + 'getAllUser');
        return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].merge.apply(rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"], displayDataChanges).map(function () {
            // Filter data
            _this.filteredData = _this._userDatabase.data.slice().filter(function (user) {
                var searchStr = (user.id.toString() + user.userName).toLowerCase();
                return searchStr.indexOf(_this.filter.toLowerCase()) !== -1;
            });
            // Sort filtered data
            var sortedData = _this.sortData(_this.filteredData.slice());
            // Grab the page's slice of the filtered sorted data.
            var startIndex = _this._paginator.pageIndex * _this._paginator.pageSize;
            _this.renderedData = sortedData.splice(startIndex, _this._paginator.pageSize);
            return _this.renderedData;
        });
    };
    UserDataSource.prototype.disconnect = function () {
    };
    /** Returns a sorted copy of the database data. */
    UserDataSource.prototype.sortData = function (data) {
        var _this = this;
        if (!this._sort.active || this._sort.direction === '') {
            return data;
        }
        return data.sort(function (a, b) {
            var _a, _b;
            var propertyA = '';
            var propertyB = '';
            switch (_this._sort.active) {
                case 'id':
                    _a = [a.id, b.id], propertyA = _a[0], propertyB = _a[1];
                    break;
                case 'userName':
                    _b = [a.userName, b.userName], propertyA = _b[0], propertyB = _b[1];
                    break;
            }
            var valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            var valueB = isNaN(+propertyB) ? propertyB : +propertyB;
            return (valueA < valueB ? -1 : 1) * (_this._sort.direction === 'asc' ? 1 : -1);
        });
    };
    return UserDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["DataSource"]));



/***/ }),

/***/ "./src/app/welcome/index.ts":
/*!**********************************!*\
  !*** ./src/app/welcome/index.ts ***!
  \**********************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _welcome_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return _welcome_component__WEBPACK_IMPORTED_MODULE_0__["WelcomeComponent"]; });




/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <!-- Main jumbotron for a primary marketing message or call to action -->\n    <div class=\"container\">\n        <mat-card class=\"welcome-picture-card\">           \n            <img mat-card-image src=\"../../assets/images/background.jpg\" alt=\"Heritage Photo\">\n        </mat-card>\n      </div>\n  \n      <div class=\"container\">\n        <!-- Example row of columns -->\n        <div class=\"row\">\n          <div class=\"col-md-4\">\n            <h2>非物质文化遗产</h2>\n            <p>请在这里提供对非物质文化遗产的定义</p>\n            <p><a class=\"btn btn-secondary\" [routerLink]=\"['/heritagedetail']\" role=\"button\">新建 &raquo;</a></p>\n          </div>\n          <div class=\"col-md-4\">\n            <h2>非遗列表</h2>\n            <p>非遗列表提供对系统中所有非物质文化遗产的浏览，评论，添加，修改及删除等基本功能。另外也提供了旅游价值评估，利益相关者博弈以及非遗活化3个子系统的入口。</p>\n            <p><a class=\"btn btn-secondary\" [routerLink]=\"['/heritagelist']\" role=\"button\">浏览列表 &raquo;</a></p>\n         </div>\n          <div class=\"col-md-4\" *ngIf = \"userService.canEdit()\">\n            <h2>活化模式列表</h2>\n            <p>活化模式列表提供对系统中的活化模式进行浏览，添加，修改及删除等基本功能。</p>\n            <p><a class=\"btn btn-secondary\" [routerLink]=\"['/activationmodelist']\" role=\"button\">浏览列表 &raquo;</a></p>\n          </div>\n        </div>\n       \n      </div> <!-- /container -->\n      \n"

/***/ }),

/***/ "./src/app/welcome/welcome.component.scss":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-picture-card {\n  max-width: 1200px; }\n"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(userService) {
        this.userService = userService;
        this.users = [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    WelcomeComponent.prototype.ngOnInit = function () { };
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.scss */ "./src/app/welcome/welcome.component.scss")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], WelcomeComponent);
    return WelcomeComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'http://localhost:4000'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Development\HeritageApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map