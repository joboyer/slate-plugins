import { getSlatePluginType, SPEditor } from '@udecode/slate-plugins-core';
import { Transforms } from 'slate';
import { ELEMENT_BLOCKQUOTE_LINE } from '../defaults';

/**
 * Insert a code line starting with indentation.
 */
export const insertCodeLin = (editor: SPEditor, indentDepth = 0) => {
  if (editor.selection) {
    const indent = ' '.repeat(indentDepth);

    Transforms.insertNodes(editor, {
      type: getSlatePluginType(editor, ELEMENT_BLOCKQUOTE_LINE),
      children: [{ text: indent }],
    } as any);
  }
};
