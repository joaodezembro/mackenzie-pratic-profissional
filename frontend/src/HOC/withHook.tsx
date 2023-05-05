/* eslint-disable @typescript-eslint/no-explicit-any */
function withHook<DesiredType, RequestedType>(
  Component: (props: DesiredType) => JSX.Element,
  hook: (props: RequestedType) => DesiredType
) {
  return (props: RequestedType) => <Component {...(hook(props) as any)} />;
}

export default withHook;
