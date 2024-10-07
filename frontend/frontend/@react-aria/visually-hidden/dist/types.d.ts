import { DOMAttributes } from "@react-types/shared";
import React, { JSXElementConstructor, ReactNode } from "react";
export interface VisuallyHiddenProps extends DOMAttributes {
    /** The content to visually hide. */
    children?: ReactNode;
    /**
     * The element type for the container.
     * @default 'div'
     */
    elementType?: string | JSXElementConstructor<any>;
    /** Whether the element should become visible on focus, for example skip links. */
    isFocusable?: boolean;
}
export interface VisuallyHiddenAria {
    visuallyHiddenProps: DOMAttributes;
}
/**
 * Provides props for an element that hides its children visually
 * but keeps content visible to assistive technology.
 */
export function useVisuallyHidden(props?: VisuallyHiddenProps): VisuallyHiddenAria;
/**
 * VisuallyHidden hides its children visually, while keeping content visible
 * to screen readers.
 */
export function VisuallyHidden(props: VisuallyHiddenProps): React.JSX.Element;

//# sourceMappingURL=types.d.ts.map
