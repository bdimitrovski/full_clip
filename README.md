# Full Clip - fullscreen body background image jQuery plugin
This dead simple plugin does only one thing and it does it well - it creates a responsive full screen body background image by specifying the desired image whether it is a local or remote one. It is lightweight AF - only 10 lines of code!

## Usage
Make sure you load jQuery first. Then, just before the end of your ```<body>``` tag, first include the Full Clip plugin:

``` javascript
<script src="js/fullclip.js"></script>
```

and call the plugin with the image you want to load:

```javascript
<script>
    $('body').fullClip({
      image: 'images/treespace.jpg'
    });
</script>
```

It's simple as that!

# Styling

To ensure that the images you load will actually be full page, you need to put this in your CSS:

``` css
body {
  background: url(../images/road.jpg) center center no-repeat;
  background-attachment: fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  }
 ```

 where  ```background``` can be anything by default.
