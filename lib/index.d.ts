interface KeyMap {
    key: string;
    allowRepeat?: boolean;
    actionDown?: (context: any) => void;
    actionUp?: (context: any) => void;
}
interface PointerMap {
    element: HTMLElement;
    actionDown?: (ev: PointerEvent) => void;
    actionUp?: (ev: PointerEvent) => void;
    preventDefault?: boolean;
}
interface ControlsManagerConfig {
    debug?: boolean;
    enabled?: boolean;
    context?: any;
    keyMaps?: KeyMap[] | [];
    pointerMaps?: PointerMap[] | [];
}
export default class ControlsManager {
    /**
     * @param {object} config
     * @param {boolean} [config.debug=false] - Log debug info - false
     * @param {boolean} [config.enabled=true] - Enable controls on init - true
     * @param {object} [config.context=null] - Context to pass to the key actions
     * @param {object[]} [config.keyMaps] - Array of keybinds
     * @param {string} config.keyMaps[].key - `event.code` of the key you want to bind
     * @param {boolean} [config.keyMaps[].allowRepeat=false] - Allow event repetition when maintained pressed - false
     * @param {function} config.keyMaps[].actionDown - Bind a function to the 'keydown' event
     * @param {function} config.keyMaps[].actionUp - Bind a function to the 'keyup' event
     * @param {object[]} [config.pointerMaps] - Array of DOM elements click/touch binds
     * @param {DOMElement} config.pointerMaps[].element - DOM element to bind the listener to
     * @param {function} config.pointerMaps[].actionDown - Bind a function to the 'pointerdown' event
     * @param {function} config.pointerMaps[].actionUp - Bind a function to the 'pointerup' event
     * @param {function} [config.pointerMaps[].preventDefault=false] - Call preventDefault on the pointer event - false
     */
    debug: boolean;
    enabled: boolean;
    keyMaps: KeyMap[];
    pointerMaps: PointerMap[];
    context: any;
    keysDown: string[];
    constructor({ keyMaps, pointerMaps, debug, enabled, context, }: ControlsManagerConfig);
}
export {};
