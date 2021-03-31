import { getElementDeserializer } from '@udecode/slate-plugins-common';
import {
  Deserialize,
  getSlateClass,
  getSlatePluginOptions,
} from '@udecode/slate-plugins-core';
import { ELEMENT_BLOCKQUOTE, ELEMENT_BLOCKQUOTE_LINE } from './defaults';

export const getCodeBlockDeserializ = (): Deserialize => (editor) => {
  const code_block = getSlatePluginOptions(editor, ELEMENT_BLOCKQUOTE);
  const code_line = getSlatePluginOptions(editor, ELEMENT_BLOCKQUOTE_LINE);

  return {
    element: [
      ...getElementDeserializer({
        type: code_block.type,
        rules: [
          { nodeNames: 'PRE' },
          { className: getSlateClass(code_block.type) },
        ],
        ...code_block.deserialize,
      }),
      ...getElementDeserializer({
        type: code_line.type,
        rules: [{ className: getSlateClass(code_line.type) }],
        ...code_line.deserialize,
      }),
    ],
  };
};
