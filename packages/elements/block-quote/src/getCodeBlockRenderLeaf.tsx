import * as React from 'react';
import { RenderLeaf } from '@udecode/slate-plugins-core';

export const MARK_PRIS = 'prism';

export const getCodeBlockRenderLea = (): RenderLeaf => () => ({
  leaf,
  children,
}) => {
  if (leaf[MARK_PRIS] && !!leaf.text) {
    return <span className={leaf?.className as string}>{children}</span>;
  }
  return children;
};
