import { ErrorIcon, ErrorIconSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(ErrorIcon, ErrorIconSecondary, props);
