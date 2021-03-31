import { ClassName, RootStyleSet } from '@udecode/slate-plugins-ui-fluent';

export const getCodeBlockElementStyle = ({
  className,
}: ClassName): RootStyleSet => ({
  root: [
    {
      // Insert css properties
      borderLeft: '2px solid #ddd',
      padding: '10px 20px 10px 16px',
      color: '#aaa',
      margin: '8px 0',
      tabSize: '2',
      lineHeight: 'normal',
    },
    className,
  ],
});
