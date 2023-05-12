/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./src/forocoches/main.js ***!
  \********************************/
// Carga videos a partir de url's .webm
(function () {

    $('a[href$=".webm"]').each(function () {
        var link = $(this).attr('href')

        var video = document.createElement('video')
        video.src = link
        video.autoplay = false
        video.loop = false
        video.muted = false
        video.controls = true
        video.style.maxWidth = "600px"
        video.style.maxHeight = "600px"
        video.addEventListener('mouseover', function (event) {
            img.style.visibility = "hidden"
            if (this.paused) {
                this.pause()
            } else {
                this.play()
            }
        })
        video.addEventListener('click', function (event) {
            if (this.paused) {
                this.play()
            } else {
                this.pause()
            }
        })

        var img = document.createElement('img')
        img.src = "http://www.webmproject.org/media/images/webm-558x156.png"
        img.style.position = "relative"
        img.style.maxWidth = "120px"
        //img.style.maxHeight = "50px"
        img.style.top = "-50px"
        img.style.left = "-125px"
        img.style.opacity = "0.5"

        $(this).after(img)
        $(this).after(video)
        $(this).remove()

    })
    // Carga videos a partir de url's .mp4
    $('a[href$=".mp4"]').each(function () {
        var link = $(this).attr('href')

        var video = document.createElement('video')
        video.src = link
        video.autoplay = false
        video.loop = false
        video.muted = false
        video.controls = true
        video.style.maxWidth = "600px"
        video.style.maxHeight = "600px"
        video.addEventListener('mouseover', function (event) {
            img.style.visibility = "hidden"
            if (this.paused) {
                this.pause()
            } else {
                this.play()
            }
        })
        video.addEventListener('click', function (event) {
            if (this.paused) {
                this.play()
            } else {
                this.pause()
            }
        })

        var img = document.createElement('img')
        img.src = "https://s.imgur.com/images/imgur-logo.svg"
        img.style.position = "relative"
        img.style.maxWidth = "120px"
        //img.style.maxHeight = "50px"
        img.style.top = "-50px"
        img.style.left = "-125px"
        img.style.opacity = "0.5"

        $(this).after(img)
        $(this).after(video)
        $(this).remove()

    })
    // Carga videos de gfycat.com via api gfycat http://gfycat.com/api
    $('a[href*="gfycat.com"]').each(function () {
        var dataID = $(this).attr('href').replace(/.*?:\/\/([w]+)?\.?gfycat\.com\//g, "")
        var $this = $(this)
        $.ajax({
            type: "GET",
            url: "http://gfycat.com/cajax/get/" + dataID,
            async: true,
            dataType: "json",
            success: function (data) {
                var video = document.createElement('video')
                video.src = data.gfyItem.mp4Url
                video.src = data.gfyItem.webmUrl
                video.autoplay = false
                video.loop = false
                video.muted = false
                video.style.maxWidth = "600px"
                video.style.maxHeight = "600px"
                video.addEventListener('mouseover', function (event) { this.play() })
                video.addEventListener('click', function (event) { if (this.paused) { this.play() } else { this.pause() } })
                $this.append('<br>')
                $this.after(video)
            }
        })
    })
})()
/******/ })()
;