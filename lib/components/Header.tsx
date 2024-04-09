export type HeaderType = 'default' | 'custom';

export interface HeaderProps {
  type?: HeaderType;
  text: string;
}

export const Header = (props: HeaderProps) => {
  const { type = 'default', text = ''} = props;

  const headerClasses = ['header', `header--${type}`].join(' ');

  return (
  <h1 className={headerClasses}>
    {text}
  </h1>
  );
};

export default Header;

