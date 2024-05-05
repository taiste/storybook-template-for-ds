export type LogoType = 'default';

export interface LogoProps {
    type?: LogoType;
    src: string;
    alt: string;
  }

  export const Logo = (props: LogoProps) => {
    const { src = '', alt = ''} = props;

    const logoContainerClass = ['logo-container',];

    const logoImageClass = ['logo-image',];

    return (
      <div className={logoContainerClass}>
        <img className={logoImageClass} src={src} alt={alt} />
      </div>
    );
  };

export default Logo;
