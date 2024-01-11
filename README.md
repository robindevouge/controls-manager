# @robindevouge/controls-manager

![alt text](https://img.shields.io/badge/version-1.0.0-informational)

## About

_Package created while I was working at [Hilarious](https://hilarious.be) then updated and expanded upon._

Keyboard and pointer events controller. Easily bind functions to keys and pointer events via a mapping object.

Maintainer: Robin (hello@robindevouge.be)

Repository: https://github.com/robindevouge/controls-manager

_Please do not request for additional features, this package was developed to suit my needs during projects (that is why this package is scoped instead of public). If you wish to customize it you are free to do so by respecting the attached license._

## Install

```console
npm install @robindevouge/controls-manager
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

| Config                         | Type         | Default    | Description                              |
| ------------------------------ | ------------ | ---------- | ---------------------------------------- |
| **debug**                      | `boolean`    | `false`    | Whether to log debug info                |
| **enabled**                    | `boolean`    | `true`     | Whether the controls are enabled on init |
| **allowKeyRepeat**             | `boolean`    | `true`     | Whether to allow key repetition          |
| **context**                    | `any`        | `null`     | Context to pass to the key actions       |
| **keyMaps**                    | `array`      | `[]`       | Array of key maps                        |
| **keyMaps.key**                | `string`     | -          | Key code of the key you want to listen   |
| **keyMaps.actionDown**         | `function`   | `() => {}` | What happens on keydown                  |
| **keyMaps.actionUp**           | `function`   | `() => {}` | What happens on keyup                    |
| **pointerMaps**                | `array`      | `[]`       | Array of pointer maps                    |
| **pointerMaps.element**        | `DOMElement` | -          | DOM element to bind the listener to      |
| **pointerMaps.actionDown**     | `function`   | `() => {}` | What happens on pointer down             |
| **pointerMaps.actionUp**       | `function`   | `() => {}` | What happens on pointer up               |
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
				Game.move('left');
			},
		},
		{
			key: 'ArrowRight',
			actionDown: () => {
				Game.move('right');
			},
		},
	],
	pointerMaps: [
		{
			element: $btnLeft,
			actionUp: () => {
				Game.move('left');
			},
		},
		{
			element: $btnRight,
			actionUp: () => {
				Game.move('right');
			},
		},
	],
});
```
