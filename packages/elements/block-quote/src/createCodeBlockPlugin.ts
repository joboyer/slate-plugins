import { getRenderElement, SlatePlugin } from '@udecode/slate-plugins-core';
import { KEYS_QUOTE_BLOCK } from './defaults';
import { getCodeBlockDecorat } from './getCodeBlockDecorate';
import { getCodeBlockDeserializ } from './getCodeBlockDeserialize';
import { getCodeBlockOnKeyDow } from './getCodeBlockOnKeyDown';
import { getCodeBlockRenderLea } from './getCodeBlockRenderLeaf';
import { withCodeBloc } from './withCodeBlock';

/**
 * Enables support for pre-formatted code blocks.
 */
export const createCodeBlockPlugi = (): SlatePlugin => ({
  pluginKeys: KEYS_QUOTE_BLOCK,
  renderElement: getRenderElement(KEYS_QUOTE_BLOCK),
  renderLeaf: getCodeBlockRenderLea(),
  deserialize: getCodeBlockDeserializ(),
  decorate: getCodeBlockDecorat(),
  onKeyDown: getCodeBlockOnKeyDow(),
  withOverrides: withCodeBloc(),
});
