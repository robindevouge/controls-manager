# @robindevouge/controls-manager

## About

Keyboard and pointer events controller. Easily bind functions to keys and pointer events via a mapping object.

Maintainer: Robin Devouge (code@robindevouge.be)

Repository: https://github.com/robindevouge/controls-manager.git

_Please do not request for additional features, this package was developed to suit my needs during projects (that is why this package is scoped instead of public). If you wish to customize it you are free to do so by respecting the attached license._

## Install

```console
npm i https://github.com/robindevouge/controls-manager
```

## Usage

### Import

```javascript
import ControlsManager from '@robindevouge/controls-manager';
```

### Initialization

```javascript
const controls = new ControlsManager(config);
```

| Config                         | Type         | Default    | Description                                 |
| ------------------------------ | ------------ | ---------- | ------------------------------------------- |
| **debug**                      | `boolean`    | `false`    | Log debug info |
| **enabled**                    | `boolean`    | `true`     | Enable controls on init |
| **allowKeyRepeat**             | `boolean`    | `true`     | Allow key event repetition when maintained pressed |
| **context**                    | `any`        | `null`     | Context to pass to the key actions |
| **keyMaps**                    | `array`      | `[]`       | Array of objects defining what happens when a key is pressed |
| **keyMaps.key**                | `string`     | -          | Key code (event.code) of the key you want to listen |
| **keyMaps.actionDown**         | `function`   | `() => {}` | Bind a function to the 'keydown' event |
| **keyMaps.actionUp**           | `function`   | `() => {}` | Bind a function to the 'keyup' event |
| **pointerMaps**                | `array`      | `[]`       | Array of objects defining what happens when a DOM element is clicked |
| **pointerMaps.element**        | `DOMElement` | -          | DOM element to bind the listener to |
| **pointerMaps.actionDown**     | `function`   | `() => {}` | Bind a function to the 'pointerdown' event |
| **pointerMaps.actionUp**       | `function`   | `() => {}` | Bind a function to the 'pointerup' event |
| **pointerMaps.preventDefault** | `boolean`    | `false`    | Call preventDefault on the pointer event |

## Examples

### Basic

```javascript
const controls = new ControlsManager({
	enabled: false,
	keyMaps: [
		{
			key: 'ArrowLeft',
			actionDown: () => {
				// Do something when the left arrow key is pressed
			},
			actionUp: () => {
				// Do something when the left arrow key is released
			},
		},
		{
			key: 'ArrowRight',
			actionDown: () => {
				// Do something when the right arrow key is pressed
			},
		},
	],
	pointerMaps: [
		{
			element: $btnLeft,
			actionUp: () => {
				// Do something when the pointer is released
			},
		},
		{
			element: $btnRight,
			actionDown: () => {
				// Do something when the pointer is pressed
			},
		},
	],
});
```
