import { StackName, stacksIcons } from '@src/utils';

interface StackIconProps {
  stackName: StackName;
  className?: string;
}

export function StackIcon(
  { stackName,
    className = ''
  }: StackIconProps
) {

  const Icon = stacksIcons[stackName] || stacksIcons['default'];

  return (
    <>
      <Icon
        className={className}
      />
    </>
  );
}
