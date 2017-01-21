# Full Clip - fullscreen body background image jQuery plugin
This simple plugin does only one thing and it does it well - it creates a responsive full screen body background image by specifying the desired image whether it is a local or remote one. Also, it can create a beautiful background image slideshow by specifying an array of images.

## Setup
Make sure you load jQuery first. Then, just before the end of your ```<body>``` tag, first include the Full Clip plugin:

``` javascript
<script src="src/fullclip.js"></script>
```

In your markup, load a div which will contain a background, preferably inside a container, e.g:

``` javascript
<section class="container">
  <div class="fullBackground"></div>
  <h2 class="caption">The future is now</h2>
</section>
```
where ```fullBackground``` is the element containing the images.

## Customized slideshow example

The power of this plugin is in its simplicity. You can easily make a slideshow of background images just by specifying them in the array:

```javascript
<script>
$('.fullBackground').fullClip({
  images: ['images/house.jpg', 'images/road.jpg', 'images/winter.jpg'],
  transitionTime: 1000,
  wait: 7000
});
</script>
```

## Static background example

```javascript
<script>
$('.fullBackground').fullClip({
  images: ['images/winter.jpg'],
  static: true
});
</script>
```

## Options

The following options are available for more control over the plugin behaviour:

| Name           | Description                                                     | Type       | Default |
| -------------  | ------------- | ---- | ------- |
| images         | Array of background images that you wish to cycle through.      |  Array     |   []    |
| transitionTime | The speed at which the images will transition, expressed in ms.  |  Integer   |  1000   |
| wait           | Delay between transitions. Also expressed in ms.                      |  Integer   |  3000   |
| static         | Use this option if you only specify one image in the array to make the background image static.   |  Boolean   |  false   |

## Styling

To ensure that the images you load will actually be full page, you need to put this in your CSS:

``` css
.fullBackground {
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
 ```

 For the most optimal effect, ensure that all your images are of the same dimensions (e.g. 1920 x 1080).

## Image credits

 https://unsplash.com
