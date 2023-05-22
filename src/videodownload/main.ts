import { querySelector } from "../common/documentLib"

(function () {
    function init() {

        const video = document.querySelector('video')
        if (video) {
            const a = document.createElement('a')
            a.setAttribute('download', '')
            a.href = window.location.href
            querySelector('body')?.appendChild(a)
            a.click()
            querySelector('body')?.removeChild(a)
            video.pause()
        }
    }

    init()

})()