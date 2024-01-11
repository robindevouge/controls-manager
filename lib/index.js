"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ControlsManager {
    /**
     * @param {object} config
     * @param {boolean} [config.debug=false] - Whether to log debug info - false
     * @param {boolean} [config.enabled=true] - Whether the controls are enabled on init - true
     * @param {boolean} [config.allowKeyRepeat=false] - Whether to allow key repetition - false
     * @param {object} [config.context=null] - Context to pass to the key actions
     * @param {object[]} [config.keyMaps] - Array of objects defining what happens when a key is pressed
     * @param {string} config.keyMaps[].key - Key code of the key you want to listen
     * @param {function} config.keyMaps[].actionDown - What happens on keydown
     * @param {function} config.keyMaps[].actionUp - What happens on keyup
     * @param {object[]} [config.pointerMaps] - Array of objects defining what happens when a DOM element is clicked
     * @param {DOMElement} config.pointerMaps[].element - DOM element to bind the listener to
     * @param {function} config.pointerMaps[].actionDown - What happens on pointer down
     * @param {function} config.pointerMaps[].actionUp - What happens on pointer up
     * @param {function} [config.pointerMaps[].preventDefault=false] - Call preventDefault on the pointer event - false
     */
    debug = false;
    enabled = true;
    allowKeyRepeat = false;
    keyMaps = [];
    pointerMaps = [];
    context = null;
    keysDown = [];
    constructor({ keyMaps = [], pointerMaps = [], debug = false, enabled = true, context = null, allowKeyRepeat = false }) {
        this.keyMaps = keyMaps;
        this.pointerMaps = pointerMaps;
        this.debug = debug;
        this.enabled = enabled;
        this.context = context;
        this.allowKeyRepeat = allowKeyRepeat;
        this.keysDown = [];
        document.addEventListener('keydown', (ev) => {
            if (this.debug)
                console.info(`keydown: ${ev.code}`);
            for (const keyConfig of this.keyMaps) {
                if (!this.enabled)
                    return;
                if (keyConfig.key === ev.code) {
                    // prevent key repetition if not allowed
                    if (!this.allowKeyRepeat && this.keysDown.includes(ev.code))
                        return;
                    if (!this.allowKeyRepeat)
                        this.keysDown.push(ev.code);
                    // do the thing
                    if (keyConfig.actionDown) {
                        if (this.debug)
                            console.info(`${ev.code} actionDown triggered`);
                        keyConfig.actionDown(this.context);
                    }
                    return;
                }
            }
        });
        document.addEventListener('keyup', (ev) => {
            if (this.debug)
                console.info(`keyup: ${ev.code}`);
            for (const keyConfig of this.keyMaps) {
                if (keyConfig.key === ev.code) {
                    // remove key from list of down keys
                    if (!this.allowKeyRepeat)
                        this.keysDown = this.keysDown.filter((key) => key !== ev.code);
                    if (!this.enabled)
                        return;
                    // do the thing
                    if (keyConfig.actionUp) {
                        if (this.debug)
                            console.info(`${ev.code} actionUp triggered`);
                        keyConfig.actionUp(this.context);
                    }
                    return;
                }
            }
        });
        this.pointerMaps.forEach((mapping) => {
            mapping.element.addEventListener('pointerdown', (ev) => {
                if (mapping.preventDefault)
                    ev.preventDefault();
                if (!this.enabled)
                    return;
                if (this.debug)
                    console.info('pointerdown:', mapping.element);
                if (!this.enabled || !mapping.actionDown)
                    return;
                if (this.debug)
                    console.info(mapping.element, 'actionDown triggered');
                mapping.actionDown(ev);
            });
            mapping.element.addEventListener('pointerup', (ev) => {
                if (mapping.preventDefault)
                    ev.preventDefault();
                if (!this.enabled)
                    return;
                if (this.debug)
                    console.info('pointerup:', mapping.element);
                if (!this.enabled || !mapping.actionUp)
                    return;
                if (this.debug)
                    console.info(mapping.element, 'actionUp triggered');
                mapping.actionUp(ev);
            });
        });
    }
}
exports.default = ControlsManager;
