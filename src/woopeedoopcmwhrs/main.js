// Carga videos a partir de url's .webm
(function () {
    function init() {

        const video = document.querySelector('video')
        if (video) {
            const a = document.createElement('a')
            a.setAttribute('download', '')
            a.href = window.location.href
            document.querySelector('body').appendChild(a)
            a.click()
            document.querySelector('body').removeChild(a)
            video.pause()
        }
    }

    init()

})()