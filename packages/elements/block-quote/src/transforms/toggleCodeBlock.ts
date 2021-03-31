import { getNodes, someNode, wrapNodes } from '@udecode/slate-plugins-common';
import { getSlatePluginType, SPEditor } from '@udecode/slate-plugins-core';
import { Transforms } from 'slate';
import { ELEMENT_BLOCKQUOTE, ELEMENT_BLOCKQUOTE_LINE } from '../defaults';
import { unwrapCodeBloc } from './unwrapCodeBlock';

export const toggleCodeBloc = (editor: SPEditor) => {
  if (!editor.selection) return;

  const isActive = someNode(editor, {
    match: { type: getSlatePluginType(editor, ELEMENT_BLOCKQUOTE) },
  });

  unwrapCodeBloc(editor);

  Transforms.setNodes(editor, {
    type: getSlatePluginType(editor, ELEMENT_BLOCKQUOTE_LINE),
  } as any);

  if (!isActive) {
    const codeBlock = {
      type: getSlatePluginType(editor, ELEMENT_BLOCKQUOTE),
      children: [],
    };
    wrapNodes(editor, codeBlock);

    const nodes = [
      ...getNodes(editor, {
        match: { type: getSlatePluginType(editor, ELEMENT_BLOCKQUOTE_LINE) },
      }),
    ];

    const codeLine = {
      type: getSlatePluginType(editor, ELEMENT_BLOCKQUOTE),
      children: [],
    };

    for (const [, path] of nodes) {
      // Transforms.wrapNodes(editor, codeLine, {
      Transforms.setNodes(editor, codeLine, {
        at: path,
      });
    }
  }
};
