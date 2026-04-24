import '../styles/ScrollStack.css';

export const ScrollStackItem = ({ children, itemClassName = '', ...rest }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()} {...rest}>
    {children}
  </div>
);

const ScrollStack = ({
  children,
  className = ''
}) => {
  return (
    <div className={`scroll-stack-scroller ${className}`.trim()}>
      <div className="scroll-stack-inner">
        {children}
      </div>
    </div>
  );
};

export default ScrollStack;
