import ButtonSvg from '../assets/svg/ButtonSvg';

const Button = ({ children, white, px, href, onClick, className }) => {
    const classes = `button relative items-center justify-center h-11 transition-colors hover:text-color-1 ${px || 'px-7'} ${white ? 'text-n-8' : 'text-n-1'} ${className || ''}`;

    const spanClasses = "relative z-10"

    const renderButton = () => (
        <button className={classes}>
            <span className={spanClasses}>{children}</span>
            {ButtonSvg(white)}
        </button>
    );

    const renderLink = () => (
        <a href={href} className={classes}>
            <span className={spanClasses}>{children}</span>
            {ButtonSvg(white)}
        </a>
    );
    
    return href 
    ? renderLink()
    : renderButton()
}

export default Button;
