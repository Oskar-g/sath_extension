(function () {
  'use strict';

  /*
   * -----------------------------------------------
   * extension CONFIG
   * -----------------------------------------------
   */
  const BASE_PATH = 'https://raw.githubusercontent.com/Oskar-g/sath_extension/main/src/'
  const DOMAIN_CONF = {
    'https://www.idealista.com/*': {
      'script': 'idealista/main.js',
      'style': 'idealista/main.css',
    }
  }

  /*
   * -----------------------------------------------
   * extension LOGIC
   * -----------------------------------------------
   */
  const [conf] = Object.keys(DOMAIN_CONF)
    .filter(k => new RegExp(k).test(window.location.href))
    .map(k => DOMAIN_CONF[k])
    .map(c => ({
      "script":c.script?`${BASE_PATH}${c.script}`:null,
      "style": c.style?`${BASE_PATH}${c.style}`:null
    }));

  if (conf?.script){
    const scriptBlock=document.createElement('script')
    scriptBlock.setAttribute("type","text/javascript")
    scriptBlock.setAttribute("src", conf?.script)
    document.querySelector("head").appendChild(scriptBlock)
  }

  if (conf?.style){
    const cssBlock=document.createElement('link')
    cssBlock.setAttribute("type","text/css")
    cssBlock.setAttribute("rel","stylesheet")
    cssBlock.setAttribute("href", conf?.style)
    document.querySelector("head").appendChild(cssBlock)
  }

})();