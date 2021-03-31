import * as React from 'react';
import {
  CodeBlockInsertOption,
  ELEMENT_BLOCKQUOTE,
  insertEmptyCodeBloc,
} from '@udecode/slate-plugins-block-quote';
import { getPreventDefaultHandler } from '@udecode/slate-plugins-common';
import { getSlatePluginType, useTSlate } from '@udecode/slate-plugins-core';
import {
  ToolbarButtonProps,
  ToolbarElement,
} from '@udecode/slate-plugins-toolbar';

export const ToolbarCodeBloc = ({
  options,
  ...props
}: ToolbarButtonProps & {
  options?: CodeBlockInsertOption;
}) => {
  const editor = useTSlate();

  return (
    <ToolbarElement
      type={getSlatePluginType(editor, ELEMENT_BLOCKQUOTE)}
      onMouseDown={getPreventDefaultHandler(insertEmptyCodeBloc, editor, {
        insertNodesOptions: { select: true },
        ...options,
      })}
      {...props}
    />
  );
};
