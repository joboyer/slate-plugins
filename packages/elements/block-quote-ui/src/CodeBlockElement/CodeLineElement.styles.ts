import { ClassName, RootStyleSet } from '@udecode/slate-plugins-ui-fluent';

export const getCodeLineElementStyle = ({
  className,
}: ClassName): RootStyleSet => ({
  root: [
    {
      // Insert css properties
    },
    className,
  ],
});
