(function () {
  'use strict'

  /*
   * -----------------------------------------------
   * extension CONFIG
   * -----------------------------------------------
   */
  const DEBUG = false
  const LOCAL_BASE_PATH = 'http://localhost:8118/'
  const REMOTE_BASE_PATH = 'https://raw.githubusercontent.com/Oskar-g/sath_extension/main/src/'
  const DOMAIN_CONF = {
    'idealista.com/*': {
      'script': 'idealista/main.js',
      'style': 'idealista/main.css',
    },
    'forocoches.com/*': {
      'script': 'forocoches/main.js',
    },
    'lectortmo.com/*': {
      'script': 'lectortmo/main.js',
    },
    'cw/*': {
      'script': 'cw/main.js',
    },
  }

  /*
  * -----------------------------------------------
  * extension LOGIC
  * -----------------------------------------------
  */

  const getResourcesConfig = function () {
    const BASE_PATH = DEBUG ? LOCAL_BASE_PATH : REMOTE_BASE_PATH
    const [conf] = Object.keys(DOMAIN_CONF)
      .filter(domain => new RegExp(`http(s)?://(www.)?${domain}`).test(window.location.href))
      .map(domain => DOMAIN_CONF[domain])
      .map(conf => ({
        "script": conf.script ? `${BASE_PATH}${conf.script}` : null,
        "style": conf.style ? `${BASE_PATH}${conf.style}` : null
      }))
      return conf
  }

  const loadLocal = function (conf) {
    if (conf?.script) {
      const scriptBlock = document.createElement('script')
      scriptBlock.setAttribute("type", "text/javascript")
      scriptBlock.setAttribute("src", conf?.script)
      document.querySelector("head").appendChild(scriptBlock)
    }

    if (conf?.style) {
      const cssBlock = document.createElement('link')
      cssBlock.setAttribute("type", "text/css")
      cssBlock.setAttribute("rel", "stylesheet")
      cssBlock.setAttribute("href", conf?.style)
      document.querySelector("head").appendChild(cssBlock)
    }
  }

  const loadRemote = function(conf) {
    if (conf?.script) {
      fetch(conf?.script)
        .then(e => e.text())
        .then(e => {
          const scriptBlock = document.createElement('script')
          scriptBlock.setAttribute("type", "text/javascript")
          scriptBlock.innerHTML = e
          document.querySelector("head").appendChild(scriptBlock)
        })
    }

    if (conf?.style) {
      fetch(conf?.style)
        .then(e => e.text())
        .then(e => {
          const style = document.createElement('style')
          style.innerHTML = e
          document.querySelector("head").appendChild(style)
        })
    }
  }

  const action = DEBUG ? loadLocal : loadRemote
  action(getResourcesConfig())
  console.log(action)
  console.log(getResourcesConfig())


})()