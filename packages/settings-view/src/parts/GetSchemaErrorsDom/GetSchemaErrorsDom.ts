import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { AriaRoles, text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { SchemaError } from '../SchemaError/SchemaError.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'

export const getSchemaErrorsDom = (errors: readonly SchemaError[]): readonly VirtualDomNode[] => {
  return [
    {
      childCount: errors.length,
      className: ClassNames.SettingsSchemaErrors,
      role: AriaRoles.Group,
      type: VirtualDomElements.Div,
    },
    ...errors.flatMap((error) => [
      {
        childCount: 2,
        className: ClassNames.SettingsSchemaError,
        name: error.id,
        role: AriaRoles.Group,
        type: VirtualDomElements.Div,
      },
      text(`${error.id}: ${error.message}`),
      text(`Source: ${error.source}`),
    ]),
  ]
}
