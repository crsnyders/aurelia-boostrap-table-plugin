import {inject, bindable, customAttribute, BindingEngine, noView, DOM} from "aurelia-framework";
import * as $ from "jquery";

@customAttribute('bootstrap-table')
@inject(DOM.Element, BindingEngine) // Inject the instance of this element
@noView
export class BootstrapTable {
  private CONTAINER_SELECTOR: string = '.bootstrap-table';
  private SCROLLABLE_SELECTOR: string = '.fixed-table-body';
  private SEARCH_SELECTOR: string = '.search input';


  @bindable tableconfig: any;
  private instantiated: boolean = false;
  private bsTable: JQuery;
  private subscription: any;

  constructor(element: Element, private bindingEngine: BindingEngine) {
    this.bsTable = $(element);

    $(element)
      .on('post-header.bs.table', this.CONTAINER_SELECTOR + ' table', (evt) => { // bootstrap-table calls .off('scroll') in initHeader so reattach here
        if (!this.bsTable) return;
        this.bsTable
          .closest(this.CONTAINER_SELECTOR)
          .find(this.SCROLLABLE_SELECTOR)
          .on('scroll', this.onScroll.bind(this.bsTable));
      })
      .on('sort.bs.table', this.CONTAINER_SELECTOR + ' table', (evt, sortName, sortOrder) => {

        if (!this.bsTable) return;
        var state = this.tableconfig.state;
        state.sortName = sortName;
        state.sortOrder = sortOrder;
      })
      .on('page-change.bs.table', this.CONTAINER_SELECTOR + ' table', (evt, pageNumber, pageSize) => {
        if (!this.bsTable) return;
        var state = this.tableconfig.state;
        state.pageNumber = pageNumber;
        state.pageSize = pageSize;
      })
      .on('search.bs.table', this.CONTAINER_SELECTOR + ' table', (evt, searchText) => {
        if (!this.bsTable) return;
        var state = this.tableconfig.state;
        state.searchText = searchText;
      })
      .on('focus blur', this.CONTAINER_SELECTOR + ' ' + this.SEARCH_SELECTOR, (evt) => {
        if (!this.bsTable) return;
        var state = this.tableconfig.state;
        state.searchHasFocus = $(evt.target).is(':focus');
      });

    $(window).resize(() => {
      this.bsTable.bootstrapTable('resetView');
    });
  }

  bind() {
    if (this.tableconfig) {
      this.subscription = this.bindingEngine.propertyObserver(this.tableconfig, 'state')
        .subscribe((newValue, oldValue) => {
          let state;
          if (!state) state = this.tableconfig.state = {};
          this.bsTable.trigger('directive-updated.bs.table', [state]);
        });
    }

    if (!this.tableconfig.options) this.tableconfig.options = {};
    var state = this.tableconfig.state || {};

    if (this.instantiated) this.bsTable.bootstrapTable('destroy');
    this.bsTable.bootstrapTable(this.tableconfig.options);
    this.instantiated = true;

    // Update the UI for state that isn't settable via options
    if ('scroll' in state) this.bsTable.bootstrapTable('scrollTo', state.scroll);
    if ('searchHasFocus' in state) this.bsTable.closest(this.CONTAINER_SELECTOR).find(this.SEARCH_SELECTOR).focus(); // $el gets detached so have to recompute whole chain
  }

  onScroll() {
    var state = this.tableconfig.state;
    state.scroll = this.bsTable.bootstrapTable('getScrollPosition');
  }

  detached() {
    //is of type Disposable
    (<any>this.subscription).dispose();
    this.bsTable.bootstrapTable('destroy');
  }

  callMethod(methodName: string, params?: any) {
    this.bsTable.bootstrapTable(methodName, params)
  }
}
