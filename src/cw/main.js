// Carga videos a partir de url's .webm
(function () {
    function init() {
        setInterval(() => {
            Array.from(document.querySelectorAll('.item.private'))
                .forEach(e => e.style.display = 'none')
        }, 500)

        document.addEventListener('keydown', e => {
            if (!['ArrowLeft', 'ArrowRight'].includes(e.key)) return

            const pages = Array.from(document.querySelectorAll('.pagination-holder .page,.page-current') || [])
            const currentPage = pages.findIndex(e => e.className == 'page-current')
            const keys = {
                'ArrowLeft': () => Math.max(currentPage - 1, 0),
                'ArrowRight': () => Math.min(currentPage + 1, pages.length),
            }
            const index = keys[e.key]()
            pages[index]?.querySelector('a').click()
        })

        const video = document.querySelector('video')?.src
        if (video){
            fetch(video)
            .then(e => {
                const btn = document.createElement('button')
                btn.innerHTML = `<a style="color:black" href="${e.url}" download='eeee.mp4'>DOWNLOAD</a>`
                document.querySelector('.block-video').prepend(btn)
            })
        }
        
        

    }

    init()

})()