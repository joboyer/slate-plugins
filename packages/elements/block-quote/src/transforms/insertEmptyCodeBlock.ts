import {
  ELEMENT_DEFAULT,
  isBlockAboveEmpty,
  isExpanded,
} from '@udecode/slate-plugins-common';
import { SPEditor } from '@udecode/slate-plugins-core';
import { Editor, Path, Transforms } from 'slate';
import { CodeBlockInsertOption } from '../types';
import { insertCodeBloc } from './insertCodeBlock';

/**
 * Called by toolbars to make sure a code-block gets inserted below a paragraph
 * rather than awkwardly splitting the current selection.
 */
export const insertEmptyCodeBloc = (
  editor: SPEditor,
  {
    defaultType = ELEMENT_DEFAULT,
    insertNodesOptions,
    level = 0,
  }: CodeBlockInsertOption
) => {
  if (!editor.selection) return;

  if (isExpanded(editor.selection) || !isBlockAboveEmpty(editor)) {
    const selectionPath = Editor.path(editor, editor.selection);
    const insertPath = Path.next(selectionPath.slice(0, level + 1));
    Transforms.insertNodes(
      editor,
      { type: defaultType, children: [{ text: '' }] } as any,
      {
        at: insertPath,
        select: true,
      }
    );
  }
  insertCodeBloc(editor, insertNodesOptions);
};
