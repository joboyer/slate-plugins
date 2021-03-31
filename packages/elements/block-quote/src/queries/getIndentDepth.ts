import { getText } from '@udecode/slate-plugins-common';
import { Editor } from 'slate';
import { IndentCodeLineOption } from '../transforms/indentCodeLine';

export const getIndentDept = (
  editor: Editor,
  { codeLine }: IndentCodeLineOption
) => {
  const [, codeLinePath] = codeLine;
  const text = getText(editor, codeLinePath);
  return text.search(/\S|$/);
};
