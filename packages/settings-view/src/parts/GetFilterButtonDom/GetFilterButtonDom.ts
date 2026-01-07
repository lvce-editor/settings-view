import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { mergeClassNames, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as InputName from '../InputName/InputName.ts'
import * as SettingStrings from '../SettingStrings/SettingStrings.ts'

const filterIcon: VirtualDomNode = {
  childCount: 0,
  className: mergeClassNames(ClassNames.MaskIcon, ClassNames.MaskIconFilter),
  type: VirtualDomElements.Div,
}

export const getFilterButtonDom = (): readonly VirtualDomNode[] => {
  return [
    {
      ariaHasPopup: true,
      ariaLabel: SettingStrings.filter(),
      childCount: 1,
      className: ClassNames.SearchFieldButton,
      disabled: false,
      name: InputName.Filter,
      onClick: DomEventListenerFunctions.HandleClickFilterButton,
      type: VirtualDomElements.Button,
    },
    filterIcon,
  ]
}
