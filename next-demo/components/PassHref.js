const WrappedA = React.forwardRef((props, ref) => {
  const { href, name } = props;
  return (
    <a href={href} ref={ref}>{name}</a>
  )
});

export default WrappedA;
