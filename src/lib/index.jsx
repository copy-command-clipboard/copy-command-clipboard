import "./style/style.scss";
import React, { useRef, useState } from 'react';

const Index = props => {
  const codeElement = useRef(null);

  let [isCopied, setIsCopied] = useState(false);

  const copyTextClipboard = () => {
    if (!isCopied) {
      setIsCopied(true)
      navigator.clipboard.writeText(codeElement.current.innerText)
      resetCopiedInfo()
    }
  }

  const resetCopiedInfo = () => {
    let resetInterval = setInterval(() => {
      setIsCopied(false)

      clearInterval(resetInterval)
    }, 3000);
  }

  return (
    <div className={`copy-command-clipboard${isCopied ? ' copied' : ''}${props.isLarge ? ' large' : ''}`} onClick={copyTextClipboard}>
      <div className="copy-message">Copied text to clipboard.</div>
      <code ref={codeElement}>{props.code}</code>
      {
        props.iconShow && (
          props.customIcon ? (
            props.customIcon
          ) : (
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="copy" class="svg-inline--fa fa-copy fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"></path></svg>
          )
        )
      }
    </div>
  )
}

export default Index;