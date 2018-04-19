/*
 * The exports need to end with the filename without .ts extension due to
 * a bug in the compiler cli metadata bundler https://github.com/angular/angular/pull/22856
 * once resolved the index can be omited. Without this the metdata files only contain the last
 * barrel export and therefore break aot compilation with the library
 * export * from './core/index';
 */

 // this root module is needed so the dependency tree is working for the primary entry point
export * from './dt-angular-components-module';

export * from './core/index';
export * from './input/index';
export * from './expandable-panel/index';
export * from './expandable-section/index';
export * from './loading-distractor/index';
export * from './theming/index';
export * from './table/index';
export * from './chart/index';
export * from './button/index';
export * from './chart/index';
