import { getText } from '@udecode/slate-plugins-common';
import { Editor, Transforms } from 'slate';
import { OutdentCodeLineOption } from './outdentCodeLine';

/**
 * If there is a whitespace character at the start of the code line,
 * delete it.
 */
export const deleteStartSpac = (
  editor: Editor,
  { codeLine }: OutdentCodeLineOption
) => {
  const [, codeLinePath] = codeLine;
  const codeLineStart = Editor.start(editor, codeLinePath);
  const codeLineEnd = codeLineStart && Editor.after(editor, codeLineStart);
  const spaceRange =
    codeLineEnd && Editor.range(editor, codeLineStart, codeLineEnd);
  const spaceText = getText(editor, spaceRange);

  if (/\s/.test(spaceText)) {
    Transforms.delete(editor, { at: spaceRange });
    return true;
  }

  return false;
};
