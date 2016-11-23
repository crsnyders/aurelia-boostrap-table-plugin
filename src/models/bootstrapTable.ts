//http://bootstrap-table.wenzhixin.net.cn/documentation/

interface BootstrapTableConfig {
  /**
  The class name of table. By default, the table is bordered, you can add 'table-no-bordered' to remove table-bordered style.
  default: 'table table-hover'
  attribute: data-classes
  **/
  classes?: string;
  /**
  The class name of the td elements which are sorted.
  default: undefined
  attribute: data-sort-class
  **/
  sortClass?: string;
  /**
  The height of table.
  default: undefined
  attribute: data-height
  **/
  height?: number;
  /**
  Defines the default undefined text.
  default: '-'
  attribute: data-undefined-text
  **/
  undefinedText?: string;
  /**
  True to stripe the rows.
  default: false
  attribute: data-striped
  **/
  striped?: boolean;
  /**
  Defines which column will be sorted.
  default: undefined
  attribute: data-sort-name
  **/
  sortName?: string;
  /**
  Defines the column sort order, can only be 'asc' or 'desc'.
  default: 'asc'
  attribute: data-sort-order
  **/
  sortOrder?: string;
  /**
  True to get a stable sorting. We will add _position property to the row.
  default: false
  attribute: data-sort-stable
  **/
  sortStable?: boolean;
  /**
  Defines icon set name ('glyphicon' or 'fa' for FontAwesome). By default 'glyphicon' is used.
  default: 'glyphicon'
  attribute: data-icons-prefix
  **/
  iconsPrefix?: string;
  /**
  Defines icon size:
      undefined => btn
      xs => btn-xs
      sm => btn-sm
      lg => btn-lg
  default: undefined
  attribute: data-icon-size
  **/
  iconSize?: string;

  /**
  Defines the Bootstrap class (added after 'btn-') of table buttons: EX: 'primary', 'danger', 'warning'...
  default: 	'default'
  attribute: data-buttons-class
  **/
  buttonsClass?: string;
  /**
  Defines icons used in the toolbar, pagination, and details view.
  default: 	{
    paginationSwitchDown: 'glyphicon-collapse-down icon-chevron-down',
    paginationSwitchUp: 'glyphicon-collapse-up icon-chevron-up',
    refresh: 'glyphicon-refresh icon-refresh',
    toggle: 'glyphicon-list-alt icon-list-alt',
    columns: 'glyphicon-th icon-th',
    detailOpen: 'glyphicon-plus icon-plus',
    detailClose: 'glyphicon-minus icon-minus'
    }
    attribute: data-icons
  **/
  icons?: Object;
  /**
  The table columns config object, see column properties for more details.
  default: []
  attribute: -
  **/
  columns?: Array<Column>;
  /**
  The data to be loaded.
  default: []
  attribute: -
  **/
  data?: Array<any>;
  /**
  Key in incoming json containing rows data list.
  default: 'rows'
  attribute: data-data-field
  **/
  dataField?: string;
  /**
  A method to replace ajax call. Should implement the same API as jQuery ajax method.

  var data = ...
  //if side-pafing = 'client'
  settings.success(data)

  //if side-pafing = 'server'
  settings.success({
  total: <total items, not necessarily length of data array>
  rows:data
  })

  default: undefined
  attribute: data-ajax
  **/
  ajax?: (settings?: BootstrapTableAjaxOptions) => void;
  /**
  The method type to request remote data.
  default: 'get'
  attribute: data-method
  **/
  method?: string;
  /**
    A URL to request data from remote site.
    Note that the required server response format is different depending on whether the 'sidePagination' option is specified. See the following examples:
    Without server-side pagination
    With server-side pagination
    default: undefined
    attribute: data-url
  **/
  url?: string;
  /**
  False to disable caching of AJAX requests.
  default: true
  attribute: data-cache
  **/
  cache?: boolean;
  /**
  The contentType of request remote data.
  default: 'application/json'
  attribute: data-content-type
  **/
  contentType?: string;
  /**
  The type of data that you are expecting back from the server.
  default: 'json'
  attribute: data-data-type
  **/
  dataType?: string;
  /**
  Additional options for submit ajax request. List of values: http://api.jquery.com/jQuery.ajax.
  default: {}
  attribute: data-ajax-options
  **/
  ajaxOptions?: JQueryAjaxSettings;
  /**
    When requesting remote data, you can send additional parameters by modifying queryParams. If queryParamsType = 'limit', the params object contains:
    limit, offset, search, sort, order Else, it contains:
    pageSize, pageNumber, searchText, sortName, sortOrder.
    Return false to stop request.

    default: function(params) {
              return params;
            }
    attribute: data-query-params
  **/
  queryParams?: (params: QueryParams| LimitQueryParams)=> boolean;
  /**
    Set 'limit' to send query params width RESTFul type.
    defautl:	'limit'
    attribute: data-query-params-type
  **/
  queryParamsType?: string;
  /**
  Before load remote data, handler the response data format, the parameters object contains:
  res: the response data
  default: 	function(res) {
  return res;
  }
  attribute: data-response-handler
  **/
  responseHandler?: (data?: any) => any;

  /**
  True to show a pagination toolbar on table bottom.
  default: false
  attribute: data-pagination
  **/
  pagination?: boolean;
  /**
  True to enable pagination continuous loop mode.
  default: true
  attribute: data-pagination-loop
  **/
  paginationLoop?: boolean;
  /**
  True to show only the quantity of the data that is showing in the table. It needs the pagination table options is set to true.
  default: false
  attribute: data-only-info-pagination
  **/
  onlyInfoPagination?: boolean;
  /**
      Defines the side pagination of table, can only be 'client' or 'server'. Using 'server' side requires either setting the 'url' or 'ajax' option.
      Note that the required server response format is different depending on whether the 'client' or 'server' option is specified. See the following examples:
      Without server-side pagination
      With server-side pagination
      default: 'client'
      attribute: data-side-pagination
  **/
  sidePagination?: 'client' | 'server';
  /**
  When set pagination property, initialize the page number.
  default: 1
  attribute: data-page-number
  **/
  pageNumber?: number;
  /**
  When set pagination property, initialize the page size.
  default: 10
  attribute: data-page-size
  **/
  pageSize?: number;
  /**
  When set pagination property, initialize the page size selecting list. If you include the 'All' option, all the records will be shown in your table.
  default: [10, 25, 50, 100]
  attribute: data-page-list
  **/
  pageList?: Array<number>;
  /**
  The name of radio or checkbox input.
  default: 'btSelectItem'
  attribute: data-select-item-name
  **/
  selectItemName?: string;
  /**
  True to display pagination or card view smartly.
  default: true
  attribute: data-smart-display
  **/
  smartDisplay?: boolean;
  /**
  Escapes a string for insertion into HTML, replacing &, <, >, ", `, and ' characters.
  default: false
  attribute: data-escape
  **/
  escape?: boolean;
  /**
  Enable the search input.
  default: false
  attribute: data-search
  **/
  search?: boolean;
  /**
  The search method will be executed until the Enter key is pressed.
  default: false
  attribute: data-search-on-enter-key
  **/
  searchOnEnterKey?: boolean;
  /**
  Enable the strict search.
  default: false
  attribute: data-strict-search
  **/
  strictSearch?: boolean;
  /**
  When set search property, initialize the search text.
  default: ''
  attribute: data-search-text
  **/
  searchText?: string;
  /**
  Set timeout for search fire.
  default: 500
  attribute: data-search-time-out
  **/
  searchTimeOut?: number;
  /**
  True to trim spaces in search field.
  default: true
  attribute: data-trim-on-search
  **/
  trimOnSearch?: boolean;
  /**
  False to hide the table header.
  default: true
  attribute: data-show-header
  **/
  showHeader?: boolean;
  /**
  True to show the summary footer row.
  default: false
  attribute: data-show-footer
  **/
  showFooter?: boolean;
  /**
  True to show the columns drop down list.
  default: false
  attribute: data-show-columns
  **/
  showColumns?: boolean;
  /**
  True to show the refresh button.
  default: false
  attribute: data-show-refresh
  **/
  showRefresh?: boolean;
  /**
  True to show the toggle button to toggle table / card view.
  default: false
  attribute: data-show-toggle
  **/
  showToggle?: boolean;
  /**
  True to show the pagination switch button.
  default: false
  attribute: data-show-pagination-switch
  **/
  showPaginationSwitch?: boolean;
  /**
  The minimum number of columns to hide from the columns drop down list.
  default: 1
  attribute: data-minimum-count-columns
  **/
  minimumCountColumns?: number;
  /**
  Indicate which field is an identity field.
  default: undefined
  attribute: data-id-field
  **/
  idField?: string;
  /**
  Indicate an unique identifier for each row.
  default: undefined
  attribute: data-unique-id
  **/
  uniqueId?: string;
  /**
  True to show card view table, for example mobile view.
  default: false
  attribute: data-card-view
  **/
  cardView?: boolean;
  /**
  True to show detail view table.
  default: false
  attribute: data-detail-view
  **/
  detailView?: boolean;
  /**
  Format your detail view when detailView is set to true. Return a String and it will be appended into the detail view cell, optionally render the element directly using the third parameter which is a jQuery element of the target cell.
  default: function(index, row, element) {
    return '';
  }
    attribute:	data-detail-formatter
  **/
  detailFormatter?: (index, row, element) => string;
  /**
  Indicate how to align the search input. 'left', 'right' can be used.
  default: 'right'
  attribute: data-search-align
  **/
  searchAlign?: string;
  /**
  Indicate how to align the toolbar buttons. 'left', 'right' can be used.
  default: 'right'
  attribute: data-buttons-align
  **/
  buttonsAlign?: string;
  /**
  Indicate how to align the custom toolbar. 'left', 'right' can be used.
  default: 'left'
  attribute: data-toolbar-align
  **/
  toolbarAlign?: string;
  /**
  Indicate how to align the pagination. 'top', 'bottom', 'both' (put the pagination on top and bottom) can be used.
  default: 'bottom'
  attribute: data-pagination-v-align
  **/
  paginationVAlign?: string;
  /**
  Indicate how to align the pagination. 'left', 'right' can be used.
  default: 'right'
  attribute: data-pagination-h-align
  **/
  paginationHAlign?: string;
  /**
  Indicate how to align the pagination detail. 'left', 'right' can be used.
  default: 'left'
  attribute: data-pagination-detail-h-align
  **/
  paginationDetailHAlign?: string;
  /**
  Indicate the icon or text to be shown in the pagination detail, the previous button.
  default: '‹'
  attribute: data-pagination-pre-text
  **/
  paginationPreText?: string;
  /**
  Indicate the icon or text to be shown in the pagination detail, the next button.
  default: '›'
  attribute: data-pagination-next-text
  **/
  paginationNextText?: string;
  /**
  True to select checkbox or radiobox when clicking rows.
  default: false
  attribute: data-click-to-select
  **/
  clickToSelect?: boolean;
  /**
  True to allow checkbox selecting only one row.
  default: false
  attribute: data-single-select
  **/
  singleSelect?: boolean;
  /**
    A jQuery selector that indicates the toolbar, for example:
    #toolbar, .toolbar, or a DOM node.
    default: undefined
    attribute: data-toolbar
  **/
  toolbar?: string | Node;
  /**
  False to hide check-all checkbox in header row.
  default: true
  attribute: data-checkbox-header
  **/
  checkboxHeader?: boolean;
  /**
  True to maintain selected rows on change page and search.
  default: false
  attribute: data-maintain-selected
  **/
  maintainSelected?: boolean;
  /**
  False to disable sortable of all columns.
  default: true
  attribute: data-sortable
  **/
  sortable?: boolean;
  /**
  Set false to sort the data silently. This options works when the sidePagination option is set to server.
  default: true
  attribute: data-silent-sort
  **/
  silentSort?: boolean;
  /**
  The row style formatter function, takes two parameters:
  row: the row record data.
  index: the row index.
  Support classes or css. Example usage:
  function rowStyle(row, index) {
  return {
    classes: 'text-nowrap another-class',
    css: {"color": "blue", "font-size": "50px"}
  };
  }
  default:{}
  attribute:data-row-style
  **/
  rowStyle?: (row, index) => any;
  /**
  The row attribute formatter function, takes two parameters:
  row: the row record data.
  index: the row index.
  Support all custom attributes.
  defaurlt: {}
  attribute: data-row-attributes
  **/
  rowAttributes?: (row: any, index?: number) => any;
  /**
  The custom search function is executed instead of built-in search function, takes one parameters:
  text: the search text.
  Example usage:
        function customSearch(text) {
            //Search logic here.
            //You must use `this.data` array in order to filter the data. NO use `this.options.data`.
        }
  default: $.noop
  attributeL data-custom-search
  **/
  customSearch?: (search?: string) => void;
  /**
  The custom sort function is executed instead of built-in sort function, takes two parameters:
  sortName: the sort name.
  sortOrder: the sort order.
  Example usage:
        function customSort(sortName, sortOrder) {
            //Sort logic here.
            //You must use `this.data` array in order to sort the data. NO use `this.options.data`.
        }

        default: $.noop
        attribuet: data-custom-sort
  **/
  customSort?: (sortName: string, sortOrder?: string) => void;
  /**
  Sets the locale to use (i.e. 'fr-CA'). Locale files must be pre-loaded. Allows for fallback locales, if loaded, in the following order:
  First tries for the locale as specified,
  Then tries the locale with '_' translated to '-' and the region code upper cased,
  Then tries the the short locale code (i.e. 'fr' instead of 'fr-CA'),
  And finally will use the last locale file loaded (or the default locale if no locales loaded).
  If left undfined or an empty string, uses the last locale loaded (or 'en-US' if no locale files loaded).

  default: undefined
  attribute: data-locale
  **/
  locale?: string;
  /**
  The footer style formatter function, takes two parameters:
  row: the row record data.
  index: the row index.
  Support classes or css. Example usage:
        function footerStyle(value, row, index) {
          return {
            css: { "font-weight": "bold" }
          };
        }
  default: {}
  attribute: data-footer-style
  **/
  footerStyle?: (row: any, index?: number) => any;//eg { classes: 'text-nowrap another-class', css: {"color": "blue", "font-size": "50px"}}

  /**
  Fires when all events trigger, the parameters contain:
  name: the event name,
  args: the event data.

  jquery event: all.bs.table
  **/
  onAll?:(name: string, args: Event)=>boolean;
  /**
  Fires when user click a row, the parameters contain:
  row: the record corresponding to the clicked row,
  $element: the tr element,
  field: the field name corresponding to the clicked cell.

  jquery event: click-row.bs.table
  **/
  onClickRow?: (row: any, $element: Element, field: any) => boolean;
  /**
  Fires when user double click a row, the parameters contain:
  row: the record corresponding to the clicked row,
  $element: the tr element,
  field: the field name corresponding to the clicked cell.

  jquery event: dbl-click-row.bs.table
  **/
  onDblClickRow?:(row: any, $element: Element, field: any)=>boolean;
  /**
  Fires when user click a cell, the parameters contain:
  field: the field name corresponding to the clicked cell,
  value: the data value corresponding to the clicked cell,
  row: the record corresponding to the clicked row,
  $element: the td element.

  jquery event: click-cell.bs.table
  **/
  onClickCell?:(field: any, value: any, row: any, $element: Element)=>boolean;
  /**
  Fires when user double click a cell, the parameters contain:
  field: the field name corresponding to the clicked cell,
  value: the data value corresponding to the clicked cell,
  row: the record corresponding to the clicked row,
  $element: the td element.

  jquery event: dbl-click-cell.bs.table
  **/
  onDblClickCell?:(field: any, value: any, row: any, $element: Element)=>boolean;
  /**
  Fires when user sort a column, the parameters contain:
  name: the sort column field name
  order: the sort column order.

  jquery event: 	sort.bs.table
  **/
  onSort?:(name: string, order: 'Asc'| 'Desc')=>boolean;
  /**
  Fires when user check a row, the parameters contain:
  row: the record corresponding to the clicked row. $element: the DOM element checked.

  jquery event: check.bs.table
  **/
  onCheck?:(rows: any,$element: Element)=>boolean;
  /**
  Fires when user uncheck a row, the parameters contain:
  row: the record corresponding to the clicked row. $element: the DOM element unchecked.

  jquery event: 	uncheck.bs.table
  **/
  onUncheck?:(rows: any,$element: Element)=>boolean;
  /**
  Fires when user check all rows, the parameters contain:
  rows: array of records corresponding to newly checked rows.

  jquery event: check-all.bs.table
  **/
  onCheckAll?:(rows: any)=>boolean;
  /**
  Fires when user uncheck all rows, the parameters contain:
  rows: array of records corresponding to previously checked rows.

  jquery event: 	uncheck-all.bs.table
  **/
  onUncheckAll?:(rows: any)=>boolean;
  /**
  Fires when user check some rows, the parameters contain:
  rows: array of records corresponding to previously checked rows.

  jquery event: 	check-some.bs.table
  **/
  onCheckSome?:(rows: any)=>boolean;
  /**
  Fires when user uncheck some rows, the parameters contain:
  rows: array of records corresponding to previously checked rows.

  jquery event: 	uncheck-some.bs.table
  **/
  onUncheckSome?:(rows: any)=>boolean;
  /**
  	Fires when remote data is loaded successfully.

  jquery event: load-success.bs.table
  **/
  onLoadSuccess?: (data: Array<any>) => boolean;
  /**
  	Fires when some errors occur to load remote data.

  jquery event: 	load-error.bs.table
  **/
  onLoadError?: (status: string, res: any) => boolean;
  /**
  	Fires when switch the column visible.

  jquery event: 	column-switch.bs.table
  **/
  onColumnSwitch?:(field: any, checked: boolean)=>boolean;
  /**
  Fires when search by column.

  jquery event: 	column-search.bs.table
  **/
  onColumnSearch?:(field: any, text: string)=>boolean;
  /**

  jquery event: page-change.bs.table
  **/
  onPageChange?:(number: number, size: number)=>boolean;
  /**
  	Fires when change the page number or page size.

  jquery event: 	search.bs.table
  **/
  onSearch?:(text: string)=>boolean;
  /**
  	Fires when search the table.

  jquery event: 	toggle.bs.table
  **/
  onToggle?:(cardView: any)=>boolean;
  /**
  Fires when toggle the view of table.

  jquery event: 	pre-body.bs.table
  **/
  onPreBody?:(data: Array<any>)=>boolean;
  /**
  Fires before the table body is rendered

  jquery event: 	post-body.bs.table
  **/
  onPostBody?:(data: Array<any>)=>boolean;
  /**
  Fires after the table body is rendered and available in the DOM

  jquery event: post-header.bs.table
  **/
  onPostHeader?:()=>boolean;
  /**
  	Fires after the table header is rendered and availble in the DOM

  jquery event: 	expand-row.bs.table
  **/
  onExpandRow?:(index: number, row: any, $detail: any)=>boolean;
  /**
  	Fires when click the detail icon to expand the detail view.

  jquery event: 	collapse-row.bs.table
  **/
  onCollapseRow?:(index: number, row: any)=>boolean;
  /**
  	Fires when click the detail icon to collapse the detail view.

  jquery event: 	refresh-options.bs.table
  **/
  onRefreshOptions?:(options: BootstrapTableConfig)=>boolean;
  /**
  	Fires after refresh the options and before destroy and init the table

  jquery event: reset-view.bs.table
  **/
  onResetView?:()=>boolean;
  /**
  	Fires when reset view of the table.

  jquery event:
  **/
  onRefresh?:(params: any)=>boolean;
  /**
  	Fires after the click the refresh button.

  jquery event: refresh.bs.table
  **/
}

interface Column {
  radio?: boolean;
  checkbox?: boolean;
  checkboxEnabled?: boolean;
  field?: string;
  title?: string;
  titleTooltip?: string;
  class?: string;
  align?: string;
  halign?: string;
  falign?: string;
  valign?: string;
  width?: number;
  sortable?: boolean;
  order?: string;
  visible?: boolean;
  switchable?: boolean;
  clickToSelect?: boolean;
  formatter?: (value: any, row: any, index?: number) => string;
  footerFormatter?: (data) => any,
  events?: Object;
  sorter?: (a: any, b?: any) => void;
  sortName?: string;
  cellStyle?: (value: any, row: any, index: number, field?: any) => any;
  searchable?: boolean;
  searchFormatter?: boolean;
  cardVisible?: boolean;
}

interface QueryParams {
  pageSize?: number;
  pageNumber?: number;
  sortOrder?: string;
  searchText?: string;
  sortName?: string;
}

interface LimitQueryParams {
  limit?: number;
  offset?: number;
  order?: string;
  search?: string;
  sort?: string;
}

interface BootstrapTableAjaxOptions extends JQueryAjaxSettings{
type: 'string',
url: 'string',
data: any,
cache: boolean,
contentType: 'string',
dataType: 'string',
success: Function(res:Array<Data>|ServerPagingResponse);
error: Function(res: any)
}

interface ServerPagingResponse{
  total: number;
  rows: Array<any>;
}


interface JQuery {
  bootstrapTable(): JQuery;
  bootstrapTable(options: BootstrapTableConfig): JQuery;
  bootstrapTable(method: string, param?: any): JQuery;
  bootstrapTable(object: any): JQuery;
}
