var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "jquery", "bootstrap-table"], function (require, exports, aurelia_framework_1, $) {
    "use strict";
    var BootstrapTable = (function () {
        function BootstrapTable(element, bindingEngine) {
            var _this = this;
            this.bindingEngine = bindingEngine;
            this.CONTAINER_SELECTOR = '.bootstrap-table';
            this.SCROLLABLE_SELECTOR = '.fixed-table-body';
            this.SEARCH_SELECTOR = '.search input';
            this.instantiated = false;
            this.bsTable = $(element);
            $(element)
                .on('post-header.bs.table', this.CONTAINER_SELECTOR + ' table', function (evt) {
                if (!_this.bsTable)
                    return;
                _this.bsTable
                    .closest(_this.CONTAINER_SELECTOR)
                    .find(_this.SCROLLABLE_SELECTOR)
                    .on('scroll', _this.onScroll.bind(_this.bsTable));
            })
                .on('sort.bs.table', this.CONTAINER_SELECTOR + ' table', function (evt, sortName, sortOrder) {
                if (!_this.bsTable)
                    return;
                _this.state.sortName = sortName;
                _this.state.sortOrder = sortOrder;
            })
                .on('page-change.bs.table', this.CONTAINER_SELECTOR + ' table', function (evt, pageNumber, pageSize) {
                if (!_this.bsTable)
                    return;
                _this.state.pageNumber = pageNumber;
                _this.state.pageSize = pageSize;
            })
                .on('search.bs.table', this.CONTAINER_SELECTOR + ' table', function (evt, searchText) {
                if (!_this.bsTable)
                    return;
                _this.state.searchText = searchText;
            })
                .on('focus blur', this.CONTAINER_SELECTOR + ' ' + this.SEARCH_SELECTOR, function (evt) {
                if (!_this.bsTable)
                    return;
                _this.state.searchHasFocus = $(evt.target).is(':focus');
            });
            $(window).resize(function () {
                _this.bsTable.bootstrapTable('resetView');
            });
        }
        BootstrapTable.prototype.bind = function () {
            var _this = this;
            if (this.tableconfig) {
                this.subscription = this.bindingEngine.propertyObserver(this.tableconfig, 'state')
                    .subscribe(function (newValue, oldValue) {
                    if (!_this.state)
                        _this.state = {};
                    _this.bsTable.trigger('directive-updated.bs.table', [state]);
                });
            }
            if (!this.tableconfig)
                this.tableconfig = {};
            var state = this.state || {};
            if (this.instantiated)
                this.bsTable.bootstrapTable('destroy');
            this.bsTable.bootstrapTable(this.tableconfig);
            this.instantiated = true;
            if ('scroll' in state)
                this.bsTable.bootstrapTable('scrollTo', state.scroll);
            if ('searchHasFocus' in state)
                this.bsTable.closest(this.CONTAINER_SELECTOR).find(this.SEARCH_SELECTOR).focus();
        };
        BootstrapTable.prototype.onScroll = function () {
            this.state.scroll = this.bsTable.bootstrapTable('getScrollPosition');
        };
        BootstrapTable.prototype.detached = function () {
            this.subscription.dispose();
            this.bsTable.bootstrapTable('destroy');
        };
        BootstrapTable.prototype.getTableInstance = function () {
            return this.bsTable;
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], BootstrapTable.prototype, "tableconfig", void 0);
        BootstrapTable = __decorate([
            aurelia_framework_1.customAttribute('bootstrap-table'),
            aurelia_framework_1.inject(aurelia_framework_1.DOM.Element, aurelia_framework_1.BindingEngine),
            aurelia_framework_1.noView, 
            __metadata('design:paramtypes', [Element, aurelia_framework_1.BindingEngine])
        ], BootstrapTable);
        return BootstrapTable;
    }());
    exports.BootstrapTable = BootstrapTable;
});
//# sourceMappingURL=aurelia-bootstrap-table.js.map
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXVyZWxpYS1ib290c3RyYXAtdGFibGUuanMiLCJzb3VyY2VSb290IjoiL3NyYyIsInNvdXJjZXMiOlsiYXVyZWxpYS1ib290c3RyYXAtdGFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFPQTtRQVlFLHdCQUFZLE9BQWdCLEVBQVUsYUFBNEI7WUFacEUsaUJBcUZDO1lBekV1QyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtZQVgxRCx1QkFBa0IsR0FBVyxrQkFBa0IsQ0FBQztZQUNoRCx3QkFBbUIsR0FBVyxtQkFBbUIsQ0FBQztZQUNsRCxvQkFBZSxHQUFXLGVBQWUsQ0FBQztZQUsxQyxpQkFBWSxHQUFZLEtBQUssQ0FBQztZQUtwQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUUxQixDQUFDLENBQUMsT0FBTyxDQUFDO2lCQUNQLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsUUFBUSxFQUFFLFVBQUMsR0FBRztnQkFDbEUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDO29CQUFDLE1BQU0sQ0FBQztnQkFDMUIsS0FBSSxDQUFDLE9BQU87cUJBQ1QsT0FBTyxDQUFDLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQztxQkFDaEMsSUFBSSxDQUFDLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQztxQkFDOUIsRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNwRCxDQUFDLENBQUM7aUJBQ0QsRUFBRSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsUUFBUSxFQUFFLFVBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxTQUFTO2dCQUVoRixFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUM7b0JBQUMsTUFBTSxDQUFDO2dCQUUx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
