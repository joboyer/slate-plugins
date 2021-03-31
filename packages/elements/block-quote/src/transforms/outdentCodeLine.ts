import { Ancestor, Editor, Node, NodeEntry } from 'slate';
import { deleteStartSpac } from './deleteStartSpace';

export interface OutdentCodeLineOption {
  codeBlock: NodeEntry<Ancestor>;
  codeLine: NodeEntry<Ancestor | Node>;
}

/**
 * Outdent the code line.
 * Remove 2 whitespace characters if any.
 */
export const outdentCodeLin = (
  editor: Editor,
  { codeBlock, codeLine }: OutdentCodeLineOption
) => {
  const deleted = deleteStartSpac(editor, { codeBlock, codeLine });
  deleted && deleteStartSpac(editor, { codeBlock, codeLine });
};
