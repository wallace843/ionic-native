var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
var Observable_1 = require('rxjs/Observable');
/**
 * This plugin allows you to show a native Toast (a little text popup) on iOS, Android and WP8. It's great for showing a non intrusive native notification which is guaranteed always in the viewport of the browser.
 *
 * Requires Cordova plugin: `cordova-plugin-x-toast`. For more info, please see the [Toast plugin docs](https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin).
 */
var Toast = (function () {
    function Toast() {
    }
    /**
     * Show a native toast for the given duration at the specified position.
     *
     * @param {string} message  The message to display.
     * @param {string} duration  Duration to show the toast, either 'short' or 'long'.
     * @param {string} position  Where to position the toast, either 'top', 'center', or 'bottom'.
     * @return {Observable}  Returns an Observable that notifies first on success and then when tapped, rejects on error.
     */
    Toast.show = function (message, duration, position) {
        // This Observable is replaced by one from the @Cordova decorator that wraps
        // the plugin's callbacks. We provide a dummy one here so TypeScript
        // knows that the correct return type is Observable, because there's no way
        // for it to know the return type from a decorator.
        // See https://github.com/Microsoft/TypeScript/issues/4881
        return new Observable_1.Observable(function (observer) { });
    };
    /**
     * Manually hide any currently visible toast.
     * @return {Promise} Returns a Promise that resolves on success.
     */
    Toast.hide = function () {
        // This Promise is replaced by one from the @Cordova decorator that wraps
        // the plugin's callbacks. We provide a dummy one here so TypeScript
        // knows that the correct return type is Promise, because there's no way
        // for it to know the return type from a decorator.
        // See https://github.com/Microsoft/TypeScript/issues/4881
        return new Promise(function (res, rej) { });
    };
    /**
     * Show a native toast with the given options.
     *
     * @param {Object} options  Options for showing a toast. Available options:
     *   message  The message to display.
     *   duration  Duration to show the toast, either 'short' or 'long'.
     *   position  Where to position the toast, either 'top', 'center', or 'bottom'.
     *   addPixelsY  Offset in pixels to move the toast up or down from its specified position.
     *
     * @return {Observable}  Returns an Observable that notifies first on success and then when tapped, rejects on error.
     */
    Toast.showWithOptions = function (options) {
        // This Observable is replaced by one from the @Cordova decorator that wraps
        // the plugin's callbacks. We provide a dummy one here so TypeScript
        // knows that the correct return type is Observable, because there's no way
        // for it to know the return type from a decorator.
        // See https://github.com/Microsoft/TypeScript/issues/4881
        return new Observable_1.Observable(function (observer) { });
    };
    /**
     * Shorthand for `show(message, 'short', 'top')`.
     * @return {Observable}  Returns an Observable that notifies first on success and then when tapped, rejects on error.
     */
    Toast.showShortTop = function (message) {
        // This Observable is replaced by one from the @Cordova decorator that wraps
        // the plugin's callbacks. We provide a dummy one here so TypeScript
        // knows that the correct return type is Observable, because there's no way
        // for it to know the return type from a decorator.
        // See https://github.com/Microsoft/TypeScript/issues/4881
        return new Observable_1.Observable(function (observer) { });
    };
    /**
     * Shorthand for `show(message, 'short', 'center')`.
     * @return {Observable}  Returns an Observable that notifies first on success and then when tapped, rejects on error.
     */
    Toast.showShortCenter = function (message) {
        // This Observable is replaced by one from the @Cordova decorator that wraps
        // the plugin's callbacks. We provide a dummy one here so TypeScript
        // knows that the correct return type is Observable, because there's no way
        // for it to know the return type from a decorator.
        // See https://github.com/Microsoft/TypeScript/issues/4881
        return new Observable_1.Observable(function (observer) { });
    };
    /**
     * Shorthand for `show(message, 'short', 'bottom')`.
     * @return {Observable}  Returns an Observable that notifies first on success and then when tapped, rejects on error.
     */
    Toast.showShortBottom = function (message) {
        // This Observable is replaced by one from the @Cordova decorator that wraps
        // the plugin's callbacks. We provide a dummy one here so TypeScript
        // knows that the correct return type is Observable, because there's no way
        // for it to know the return type from a decorator.
        // See https://github.com/Microsoft/TypeScript/issues/4881
        return new Observable_1.Observable(function (observer) { });
    };
    /**
     * Shorthand for `show(message, 'long', 'top')`.
     * @return {Observable}  Returns an Observable that notifies first on success and then when tapped, rejects on error.
     */
    Toast.showLongTop = function (message) {
        // This Observable is replaced by one from the @Cordova decorator that wraps
        // the plugin's callbacks. We provide a dummy one here so TypeScript
        // knows that the correct return type is Observable, because there's no way
        // for it to know the return type from a decorator.
        // See https://github.com/Microsoft/TypeScript/issues/4881
        return new Observable_1.Observable(function (observer) { });
    };
    /**
     * Shorthand for `show(message, 'long', 'center')`.
     * @return {Observable}  Returns an Observable that notifies first on success and then when tapped, rejects on error.
     */
    Toast.showLongCenter = function (message) {
        // This Observable is replaced by one from the @Cordova decorator that wraps
        // the plugin's callbacks. We provide a dummy one here so TypeScript
        // knows that the correct return type is Observable, because there's no way
        // for it to know the return type from a decorator.
        // See https://github.com/Microsoft/TypeScript/issues/4881
        return new Observable_1.Observable(function (observer) { });
    };
    /**
     * Shorthand for `show(message, 'long', 'bottom')`.
     * @return {Observable}  Returns an Observable that notifies first on success and then when tapped, rejects on error.
     */
    Toast.showLongBottom = function (message) {
        // This Observable is replaced by one from the @Cordova decorator that wraps
        // the plugin's callbacks. We provide a dummy one here so TypeScript
        // knows that the correct return type is Observable, because there's no way
        // for it to know the return type from a decorator.
        // See https://github.com/Microsoft/TypeScript/issues/4881
        return new Observable_1.Observable(function (observer) { });
    };
    __decorate([
        plugin_1.Cordova({
            observable: true,
            clearFunction: 'hide'
        })
    ], Toast, "show", null);
    __decorate([
        plugin_1.Cordova()
    ], Toast, "hide", null);
    __decorate([
        plugin_1.Cordova({
            observable: true,
            clearFunction: 'hide'
        })
    ], Toast, "showWithOptions", null);
    __decorate([
        plugin_1.Cordova({
            observable: true,
            clearFunction: 'hide'
        })
    ], Toast, "showShortTop", null);
    __decorate([
        plugin_1.Cordova({
            observable: true,
            clearFunction: 'hide'
        })
    ], Toast, "showShortCenter", null);
    __decorate([
        plugin_1.Cordova({
            observable: true,
            clearFunction: 'hide'
        })
    ], Toast, "showShortBottom", null);
    __decorate([
        plugin_1.Cordova({
            observable: true,
            clearFunction: 'hide'
        })
    ], Toast, "showLongTop", null);
    __decorate([
        plugin_1.Cordova({
            observable: true,
            clearFunction: 'hide'
        })
    ], Toast, "showLongCenter", null);
    __decorate([
        plugin_1.Cordova({
            observable: true,
            clearFunction: 'hide'
        })
    ], Toast, "showLongBottom", null);
    Toast = __decorate([
        plugin_1.Plugin({
            name: 'Toast',
            plugin: 'cordova-plugin-x-toast',
            pluginRef: 'plugins.toast',
            repo: 'https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin'
        })
    ], Toast);
    return Toast;
})();
exports.Toast = Toast;
//# sourceMappingURL=toast.js.map