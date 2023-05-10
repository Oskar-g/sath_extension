(function () {
  'use strict';

  /*
   * -----------------------------------------------
   * extension CONFIG
   * -----------------------------------------------
   */
//  const script = 'http://localhost/base.js'
  const script = 'https://raw.githubusercontent.com/Oskar-g/sath_extension/main/src/base.js'

  /*
   * -----------------------------------------------
   * extension LOGIC
   * -----------------------------------------------
   */
  
  let scriptBlock=document.createElement('script')
  scriptBlock.setAttribute("type","text/javascript")
  scriptBlock.setAttribute("src", script)
  document.querySelector("head").appendChild(scriptBlock)

})();