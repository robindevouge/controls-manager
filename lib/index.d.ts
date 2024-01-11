interface KeyMap {
    key: string;
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
    allowKeyRepeat?: boolean;
    context?: any;
    keyMaps?: KeyMap[] | [];
    pointerMaps?: PointerMap[] | [];
}
export default class ControlsManager {
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
    debug: boolean;
    enabled: boolean;
    allowKeyRepeat: boolean;
    keyMaps: KeyMap[];
    pointerMaps: PointerMap[];
    context: any;
    keysDown: string[];
    constructor({ keyMaps, pointerMaps, debug, enabled, context, allowKeyRepeat }: ControlsManagerConfig);
}
export {};
