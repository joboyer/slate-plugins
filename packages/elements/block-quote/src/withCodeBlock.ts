import { SPEditor, WithOverride } from '@udecode/slate-plugins-core';
import { ReactEditor } from 'slate-react';
import { getCodeLineEntr } from './queries/getCodeLineEntry';
import { getIndentDept } from './queries/getIndentDepth';
import { insertCodeLin } from './transforms/insertCodeLine';

export const withCodeBloc = (): WithOverride<ReactEditor & SPEditor> => (
  editor
) => {
  const { insertBreak } = editor;

  const insertBreakCodeBlock = () => {
    if (!editor.selection) return;

    const res = getCodeLineEntr(editor, {});
    if (!res) return;

    const { codeBlock, codeLine } = res;
    const indentDepth = getIndentDept(editor, {
      codeBlock,
      codeLine,
    });
    insertCodeLin(editor, indentDepth);

    return true;
  };

  editor.insertBreak = () => {
    if (insertBreakCodeBlock()) return;

    insertBreak();
  };

  return editor;
};
