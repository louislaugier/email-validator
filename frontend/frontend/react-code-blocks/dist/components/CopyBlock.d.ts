import React from 'react';
import { CodeBlockProps } from './CodeBlock';
export interface CopyBlockProps extends CodeBlockProps {
    /** This is a prop used internally by the `CopyBlock`'s button component to toggle the icon to a success icon */
    copied?: boolean;
    /** If true, the component render a `CodeBlock` instead of a `Code` component */
    codeBlock?: boolean;
    /** The onCopy function is called if the copy icon is clicked. This enables you to add a custom message that the code block is copied. */
    onCopy?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export default function CopyBlock({ theme, text, codeBlock, customStyle, onCopy, copied: startingCopied, ...rest }: CopyBlockProps): React.JSX.Element;
