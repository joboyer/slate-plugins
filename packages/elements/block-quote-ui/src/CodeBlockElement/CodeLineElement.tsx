import * as React from 'react';
import {
  ClassName,
  getRootClassNames,
  RootStyleSet,
  StyledElementProps,
} from '@udecode/slate-plugins-ui-fluent';
import { styled } from '@uifabric/utilities';
import { getCodeLineElementStyle } from './CodeLineElement.styles';

const getClassNames = getRootClassNames();

/**
 *   CodeLineElement with no default styles.
 * [Use the `styles` API to add your own styles.](https://github.com/OfficeDev/office-ui-fabric-react/wiki/Component-Styling)
 */
export const QuoteLineElementBase = ({
  attributes,
  children,
  className,
  styles,
}: StyledElementProps) => {
  const classNames = getClassNames(styles, {
    className,
    // Other style props
  });

  return (
    <div {...attributes} className={classNames.root}>
      {children}
    </div>
  );
};

/**
 * CodeBlockElement
 */
export const QuoteLineElement = styled<
  StyledElementProps,
  ClassName,
  RootStyleSet
>(QuoteLineElementBase, getCodeLineElementStyle, undefined, {
  scope: 'CodeBlockElement',
});
