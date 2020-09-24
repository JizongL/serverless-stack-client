export default ({ shouldWrap, wrap, children }) =>
  shouldWrap ? wrap(children) : children;
