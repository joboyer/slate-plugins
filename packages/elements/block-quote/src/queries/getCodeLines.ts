import { getNodes } from '@udecode/slate-plugins-common';
import { getSlatePluginType, SPEditor } from '@udecode/slate-plugins-core';
import { Location } from 'slate';
import { ELEMENT_BLOCKQUOTE_LINE } from '../defaults';

/**
 * Get code line entries
 */
export const getCodeLine = (
  editor: SPEditor,
  { at = editor.selection }: { at?: Location | null } = {}
) => {
  if (!at) return;

  return [
    ...getNodes(editor, {
      at,
      match: { type: getSlatePluginType(editor, ELEMENT_BLOCKQUOTE_LINE) },
    }),
  ];
};
