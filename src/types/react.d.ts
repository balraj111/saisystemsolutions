// Basic React types when types are not available
declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    className?: string;
    id?: string;
    style?: CSSProperties;
  }
  
  interface CSSProperties {
    [key: string]: any;
  }
  
  interface AriaAttributes {
    [key: string]: any;
  }
  
  interface DOMAttributes<T> {
    children?: ReactNode;
    onClick?: (event: MouseEvent<T>) => void;
    onChange?: (event: ChangeEvent<T>) => void;
    onSubmit?: (event: FormEvent<T>) => void;
    [key: string]: any;
  }
  
  type ReactNode = string | number | boolean | ReactElement | ReactFragment | ReactPortal | null | undefined;
  type ReactElement = any;
  type ReactFragment = any;
  type ReactPortal = any;
  
  interface MouseEvent<T = Element> {
    preventDefault(): void;
    stopPropagation(): void;
    [key: string]: any;
  }
  
  interface ChangeEvent<T = Element> {
    target: T;
    [key: string]: any;
  }
  
  interface FormEvent<T = Element> {
    preventDefault(): void;
    target: T;
    [key: string]: any;
  }
  
  interface FC<P = {}> {
    (props: P): ReactElement | null;
  }
  
  function useState<S>(initialState: S | (() => S)): [S, (state: S | ((prevState: S) => S)) => void];
  function useEffect(effect: () => void | (() => void), deps?: any[]): void;
  const StrictMode: FC<{children?: ReactNode}>;
  
  export { FC, useState, useEffect, StrictMode };
  export default { StrictMode };
}