import {
  InsertNodesOptions,
  isExpanded,
  isSelectionAtBlockStart,
  someNode,
  wrapNodes,
} from '@udecode/slate-plugins-common';
import {
  getSlatePluginType,
  SPEditor,
  TElement,
} from '@udecode/slate-plugins-core';
import { Transforms } from 'slate';
import { ELEMENT_BLOCKQUOTE, ELEMENT_BLOCKQUOTE_LINE } from '../defaults';

/**
 * Insert a code block: set the node to code line and wrap it with a code block.
 * If the cursor is not at the block start, insert break before.
 */
export const insertCodeBloc = (
  editor: SPEditor,
  insertNodesOptions: Omit<InsertNodesOptions, 'match'> = {}
) => {
  if (!editor.selection || isExpanded(editor.selection)) return;

  const matchCodeElements = (node: TElement) =>
    node.type === getSlatePluginType(editor, ELEMENT_BLOCKQUOTE) ||
    node.type === getSlatePluginType(editor, ELEMENT_BLOCKQUOTE_LINE);

  if (
    someNode(editor, {
      match: matchCodeElements,
    })
  ) {
    return;
  }

  if (!isSelectionAtBlockStart(editor)) {
    editor.insertBreak();
  }

  Transforms.setNodes(
    editor,
    {
      type: getSlatePluginType(editor, ELEMENT_BLOCKQUOTE_LINE),
      children: [{ text: '' }],
    } as any,
    insertNodesOptions
  );

  wrapNodes(
    editor,
    {
      type: getSlatePluginType(editor, ELEMENT_BLOCKQUOTE),
      children: [],
    },
    insertNodesOptions
  );
};
