(function () {
  'use strict'

  /*
   * -----------------------------------------------
   * extension CONFIG
   * -----------------------------------------------
   */
  const script = 'http://localhost:8118/base.js'

  /*
   * -----------------------------------------------
   * extension LOGIC
   * -----------------------------------------------
   */
  
  let scriptBlock=document.createElement('script')
  scriptBlock.setAttribute("type","text/javascript")
  scriptBlock.setAttribute("src", script)
  document.querySelector("head").appendChild(scriptBlock)

})()