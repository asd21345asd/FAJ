/* *
 *
 *  Data Grid options
 *
 *  (c) 2020-2023 Highsoft AS
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 *  Authors:
 *  - Øystein Moseng
 *
 * */

/* *
 *
 *  Imports
 *
 * */

import type DataTable from '../Data/DataTable';

/* *
 *
 *  Declarations
 *
 * */

/**
 * Options to control the content and the user experience of a grid structure.
 */
export interface DataGridOptions {

    /**
     * Height of each grid cell in pixels. This is used to calculate the amount
     * of visible cells in a container and the size of the scrollbar.
     *
     * @default 49
     */
    cellHeight?: number;

    /**
     * Contains options for column headers.
     */
    columnHeaders?: ColumnHeaderOptions;

    /**
     * Contains column-specific options. The key is the column name and the
     * value is the object with the column-specific options.
     */
    columns?: Record<string, ColumnOptions>;

    /**
     * Table data to display in the grid structure.
     */
    dataTable?: DataTable;

    /**
     * Switch to make the whole grid structure with all cells editable ('true')
     * or read-only ('false').
     *
     * @default true
     */
    editable?: boolean;

    /**
     * Switch to make the column sizes editable ('true') or fixed ('false').
     *
     * @default true
     */
    resizableColumns?: boolean;
}

/**
 * Contains options for column headers.
 */
export interface ColumnHeaderOptions {

    /**
     * Switch to turn the column header on (`true`) or off (`false`).
     *
     * @default true
     */
    enabled?: boolean;
}

/**
 * Contains options for column cells.
 */
export interface ColumnOptions {
    /**
     * A string used to format each cell's content. The context is the cell's
     * value and can be accessed only by using `{value}` and `{text}`.
     * First one is used for formatting numbers, second one for
     * formatting strings.
     *
     * @example
     * ```js
     * cellFormat: '{value:.2f} kg'
     * ```
     * ```js
     * cellFormat: '{text} (custom format)'
     * ```
     */
    cellFormat?: string;

    /**
     * Switch to make the column cells editable ('true') or read-only ('false').
     *
     * @default true
     */
    editable?: boolean;

    /**
     * A string used to format the header row's cells. The context is the
     * column's name and can be accessed only by using `{text}`.
     *
     * @example
     * ```js
     * headerFormat: '{text} (custom format)'
     * ```
     */
    headerFormat?: string;

    /**
     * Wether to show the column in the grid structure.
     *
     * @default true
     */
    show?: boolean;
}

/* *
 *
 *  Default Export
 *
 * */

export default DataGridOptions;
