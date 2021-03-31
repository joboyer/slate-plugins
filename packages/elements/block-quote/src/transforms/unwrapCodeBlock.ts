import { unwrapNodes } from '@udecode/slate-plugins-common';
import { getSlatePluginType, SPEditor } from '@udecode/slate-plugins-core';
import { ELEMENT_BLOCKQUOTE, ELEMENT_BLOCKQUOTE_LINE } from '../defaults';

export const unwrapCodeBloc = (editor: SPEditor) => {
  unwrapNodes(editor, {
    match: { type: getSlatePluginType(editor, ELEMENT_BLOCKQUOTE_LINE) },
  });
  unwrapNodes(editor, {
    match: { type: getSlatePluginType(editor, ELEMENT_BLOCKQUOTE) },
    split: true,
  });
};
