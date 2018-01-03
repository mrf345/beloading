# beloading 0.1 beta
### a customize-able loading screen, based on [jQuery UI](https://jquery.com) and [Bootstrap](https://bootstrap.com)

## [Live Demo][0416ca12]

  [0416ca12]: https://audio-sequence.github.io/beloading.html "Live demo of beloading"

![Demo GIF](https://audio-sequence.github.io/beloading.gif)

## Setup:

```html
<head>
  <script src='beloading.js' type='text/javascript'></script>
  <script type='text/javascript'>
    $(document).ready(function () {
      var loader = beloading({
        text: 'Loading, please wait ...'
      })
    });
  </script>
</head>
```

## Options:

```javascript
options = {
  // options that will be passed and replacements in case not
  background: options.background || 'rgba(0, 0, 0, 0.9)', // background color
  icon: options.icon || 'fa fa-refresh fa-spin', // takes font awesome icon
  text: options.text || 'Behold the Beloading ahead ...', /// text to be displayed while waiting
  text_color: options.text_color || 'rgb(255, 255, 255)', // text and icon color
  text_font: options.font || 'Georgia, Times, serif', // text font
  text_shadow: options.text_shadow || '0 0 30px rgba(255,255,255,0.5)', // text and icon shadow
  text_size: options.text_size || '300%', // text and icon size
  effect_duration: options.effect_duration * 1000 || 3000, // fade effect duration in seconds
  trail: options.trail || 'false' // to add escape button, and cancel on load event
}
```

## Useful functions:
#### To use any of the following functions, you have to get an instance of the constructor, which we did in the Setup section :
` var loader = beloading()` </br>
` loader.following_functions()`

```javascript
this.stop = function stop () {
  // here where elements get removed and loops cleared
}
```
## Dependencies:
- jQuery
- jQuery UI
- Bootstrap
- Font awesome
