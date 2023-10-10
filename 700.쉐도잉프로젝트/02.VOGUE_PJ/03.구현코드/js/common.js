import dFn from'./dom.js'

import tData from'./data/com_module.js'

const comArea = dFn.qsa('.common-area')

comArea[0].innerHTML = tData.topArea
comArea[1].innerHTML = tData.footerArea