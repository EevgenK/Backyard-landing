import clsx from 'clsx';

export interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: 'dark' | 'light';
  disabled?: boolean;
  additionalClass?: string;
  mobileLabel?: string;
  desktopLabel?: string;
}

const CustomButton = ({
  color,
  additionalClass,
  disabled,
  mobileLabel,
  desktopLabel,
  children,
  ...rest
}: CustomButtonProps) => {
  return (
    <button
      {...rest}
      disabled={disabled}
      className={clsx(
        'font-semibold text-4 leading-[1.4] rounded-[38px]  text-center backdrop-blur-sm transition-all duration-500 ease-in-out cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none',

        color === 'dark' && [
          'bg-[var(--btn-bg_dark)] text-[var(--btn-text_dark)]',
          'hover:bg-[var(--btn-bg_dark_hover)] hover:text-[var(--btn-text_dark_hover)]',
          'focus:bg-[var(--btn-bg_dark_hover)] focus:text-[var(--btn-text_dark_hover)]',
        ],
        color === 'light' && [
          'bg-[var(--btn-bg_light)] text-[var(--btn-text_light)]',
          'hover:bg-[var(--btn-bg_light_hover)] hover:text-[var(--btn-text_light_hover)]',
          'focus:bg-[var(--btn-bg_light_hover)] focus:text-[var(--btn-text_light_hover)]',
        ],
        additionalClass,
      )}
    >
      {mobileLabel && (
        <span className="block md:hidden after:content-['➝'] after:ml-2">
          {mobileLabel}
        </span>
      )}

      {desktopLabel && <span className="hidden md:block">{desktopLabel}</span>}
      {!mobileLabel && !desktopLabel && children}
    </button>
  );
};

export default CustomButton;
