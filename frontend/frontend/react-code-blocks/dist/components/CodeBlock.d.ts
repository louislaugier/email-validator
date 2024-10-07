import React, { PureComponent } from 'react';
import { CodeProps } from './Code';
declare type BaseProps = Omit<CodeProps, 'codeStyle' | 'preTag'>;
export interface CodeBlockProps extends BaseProps {
    /** The style object to apply to the `CodeBlock` text directly i.e `fontSize` and such */
    codeBlockStyle?: {};
    /** The style object that accesses the style parameter on the `codeTagProps` property on the `Code` component */
    codeContainerStyle?: {};
}
export default class CodeBlock extends PureComponent<CodeBlockProps, {}> {
    _isMounted: boolean;
    static displayName: string;
    static defaultProps: CodeBlockProps;
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleCopy: (event: any) => void;
    render(): React.JSX.Element;
}
export {};
