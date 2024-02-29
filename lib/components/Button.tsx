export type ButtonType = 'default' | 'primary';

export interface ButtonProps {
  type?: ButtonType;
  label?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = (props: ButtonProps) => {
  const { type = 'default', disabled = false, label = '', onClick = undefined } = props;

  const buttonClasses = ['button', `button--${type}`, disabled ? 'disabled' : undefined].join(' ');

  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      type={'button'}
      onClick={(e) => {
        e.preventDefault();
        onClick?.();
      }}
    >
      {label}
    </button>
  );
};

export default Button;
