import { DOMAttributes, DOMProps, AriaLabelingProps } from "@react-types/shared";
import { PlacementAxis, PositionProps } from "@react-types/overlays";
import React, { RefObject, AriaAttributes, ReactNode } from "react";
import { AriaButtonProps } from "@react-types/button";
import { OverlayTriggerState } from "@react-stately/overlays";
export interface AriaPositionProps extends PositionProps {
    /**
     * Cross size of the overlay arrow in pixels.
     * @default 0
     */
    arrowSize?: number;
    /**
     * Element that that serves as the positioning boundary.
     * @default document.body
     */
    boundaryElement?: Element;
    /**
     * The ref for the element which the overlay positions itself with respect to.
     */
    targetRef: RefObject<Element>;
    /**
     * The ref for the overlay element.
     */
    overlayRef: RefObject<Element>;
    /**
     * A ref for the scrollable region within the overlay.
     * @default overlayRef
     */
    scrollRef?: RefObject<Element>;
    /**
     * Whether the overlay should update its position automatically.
     * @default true
     */
    shouldUpdatePosition?: boolean;
    /** Handler that is called when the overlay should close. */
    onClose?: () => void;
    /**
     * The maxHeight specified for the overlay element.
     * By default, it will take all space up to the current viewport height.
     */
    maxHeight?: number;
    /**
     * The minimum distance the arrow's edge should be from the edge of the overlay element.
     * @default 0
     */
    arrowBoundaryOffset?: number;
}
export interface PositionAria {
    /** Props for the overlay container element. */
    overlayProps: DOMAttributes;
    /** Props for the overlay tip arrow if any. */
    arrowProps: DOMAttributes;
    /** Placement of the overlay with respect to the overlay trigger. */
    placement: PlacementAxis;
    /** Updates the position of the overlay. */
    updatePosition(): void;
}
/**
 * Handles positioning overlays like popovers and menus relative to a trigger
 * element, and updating the position when the window resizes.
 */
export function useOverlayPosition(props: AriaPositionProps): PositionAria;
export interface AriaOverlayProps {
    /** Whether the overlay is currently open. */
    isOpen?: boolean;
    /** Handler that is called when the overlay should close. */
    onClose?: () => void;
    /**
     * Whether to close the overlay when the user interacts outside it.
     * @default false
     */
    isDismissable?: boolean;
    /** Whether the overlay should close when focus is lost or moves outside it. */
    shouldCloseOnBlur?: boolean;
    /**
     * Whether pressing the escape key to close the overlay should be disabled.
     * @default false
     */
    isKeyboardDismissDisabled?: boolean;
    /**
     * When user interacts with the argument element outside of the overlay ref,
     * return true if onClose should be called.  This gives you a chance to filter
     * out interaction with elements that should not dismiss the overlay.
     * By default, onClose will always be called on interaction outside the overlay ref.
     */
    shouldCloseOnInteractOutside?: (element: Element) => boolean;
}
export interface OverlayAria {
    /** Props to apply to the overlay container element. */
    overlayProps: DOMAttributes;
    /** Props to apply to the underlay element, if any. */
    underlayProps: DOMAttributes;
}
/**
 * Provides the behavior for overlays such as dialogs, popovers, and menus.
 * Hides the overlay when the user interacts outside it, when the Escape key is pressed,
 * or optionally, on blur. Only the top-most overlay will close at once.
 */
export function useOverlay(props: AriaOverlayProps, ref: RefObject<Element>): OverlayAria;
export interface OverlayTriggerProps {
    /** Type of overlay that is opened by the trigger. */
    type: 'dialog' | 'menu' | 'listbox' | 'tree' | 'grid';
}
export interface OverlayTriggerAria {
    /** Props for the trigger element. */
    triggerProps: AriaButtonProps;
    /** Props for the overlay container element. */
    overlayProps: DOMProps;
}
/**
 * Handles the behavior and accessibility for an overlay trigger, e.g. a button
 * that opens a popover, menu, or other overlay that is positioned relative to the trigger.
 */
export function useOverlayTrigger(props: OverlayTriggerProps, state: OverlayTriggerState, ref?: RefObject<Element>): OverlayTriggerAria;
interface PreventScrollOptions {
    /** Whether the scroll lock is disabled. */
    isDisabled?: boolean;
}
/**
 * Prevents scrolling on the document body on mount, and
 * restores it on unmount. Also ensures that content does not
 * shift due to the scrollbars disappearing.
 */
export function usePreventScroll(options?: PreventScrollOptions): void;
export interface ModalProviderProps extends DOMAttributes {
    children: ReactNode;
}
/**
 * Each ModalProvider tracks how many modals are open in its subtree. On mount, the modals
 * trigger `addModal` to increment the count, and trigger `removeModal` on unmount to decrement it.
 * This is done recursively so that all parent providers are incremented and decremented.
 * If the modal count is greater than zero, we add `aria-hidden` to this provider to hide its
 * subtree from screen readers. This is done using React context in order to account for things
 * like portals, which can cause the React tree and the DOM tree to differ significantly in structure.
 */
export function ModalProvider(props: ModalProviderProps): React.JSX.Element;
export interface ModalProviderAria {
    /**
     * Props to be spread on the container element.
     */
    modalProviderProps: AriaAttributes;
}
/**
 * Used to determine if the tree should be aria-hidden based on how many
 * modals are open.
 */
export function useModalProvider(): ModalProviderAria;
/**
 * An OverlayProvider acts as a container for the top-level application.
 * Any application that uses modal dialogs or other overlays should
 * be wrapped in a `<OverlayProvider>`. This is used to ensure that
 * the main content of the application is hidden from screen readers
 * if a modal or other overlay is opened. Only the top-most modal or
 * overlay should be accessible at once.
 */
export function OverlayProvider(props: ModalProviderProps): React.JSX.Element;
export interface OverlayContainerProps extends ModalProviderProps {
    /**
     * The container element in which the overlay portal will be placed.
     * @default document.body
     */
    portalContainer?: Element;
}
/**
 * A container for overlays like modals and popovers. Renders the overlay
 * into a Portal which is placed at the end of the document body.
 * Also ensures that the overlay is hidden from screen readers if a
 * nested modal is opened. Only the top-most modal or overlay should
 * be accessible at once.
 */
export function OverlayContainer(props: OverlayContainerProps): React.ReactPortal;
interface ModalAriaProps extends DOMAttributes {
    /** Data attribute marks the dom node as a modal for the aria-modal-polyfill. */
    'data-ismodal': boolean;
}
export interface AriaModalOptions {
    isDisabled?: boolean;
}
export interface ModalAria {
    /** Props for the modal content element. */
    modalProps: ModalAriaProps;
}
/**
 * Hides content outside the current `<OverlayContainer>` from screen readers
 * on mount and restores it on unmount. Typically used by modal dialogs and
 * other types of overlays to ensure that only the top-most modal is
 * accessible at once.
 */
export function useModal(options?: AriaModalOptions): ModalAria;
export interface DismissButtonProps extends AriaLabelingProps, DOMProps {
    /** Called when the dismiss button is activated. */
    onDismiss?: () => void;
}
/**
 * A visually hidden button that can be used to allow screen reader
 * users to dismiss a modal or popup when there is no visual
 * affordance to do so.
 */
export function DismissButton(props: DismissButtonProps): React.JSX.Element;
/**
 * Hides all elements in the DOM outside the given targets from screen readers using aria-hidden,
 * and returns a function to revert these changes. In addition, changes to the DOM are watched
 * and new elements outside the targets are automatically hidden.
 * @param targets - The elements that should remain visible.
 * @param root - Nothing will be hidden above this element.
 * @returns - A function to restore all hidden elements.
 */
export function ariaHideOutside(targets: Element[], root?: HTMLElement): () => void;
export interface AriaPopoverProps extends Omit<AriaPositionProps, 'isOpen' | 'onClose' | 'targetRef' | 'overlayRef'> {
    /**
     * The ref for the element which the popover positions itself with respect to.
     */
    triggerRef: RefObject<Element>;
    /**
     * The ref for the popover element.
     */
    popoverRef: RefObject<Element>;
    /**
     * Whether the popover is non-modal, i.e. elements outside the popover may be
     * interacted with by assistive technologies.
     *
     * Most popovers should not use this option as it may negatively impact the screen
     * reader experience. Only use with components such as combobox, which are designed
     * to handle this situation carefully.
     */
    isNonModal?: boolean;
    /**
     * Whether pressing the escape key to close the popover should be disabled.
     *
     * Most popovers should not use this option. When set to true, an alternative
     * way to close the popover with a keyboard must be provided.
     *
     * @default false
     */
    isKeyboardDismissDisabled?: boolean;
    /**
     * When user interacts with the argument element outside of the popover ref,
     * return true if onClose should be called. This gives you a chance to filter
     * out interaction with elements that should not dismiss the popover.
     * By default, onClose will always be called on interaction outside the popover ref.
     */
    shouldCloseOnInteractOutside?: (element: Element) => boolean;
}
export interface PopoverAria {
    /** Props for the popover element. */
    popoverProps: DOMAttributes;
    /** Props for the popover tip arrow if any. */
    arrowProps: DOMAttributes;
    /** Props to apply to the underlay element, if any. */
    underlayProps: DOMAttributes;
    /** Placement of the popover with respect to the trigger. */
    placement: PlacementAxis;
}
/**
 * Provides the behavior and accessibility implementation for a popover component.
 * A popover is an overlay element positioned relative to a trigger.
 */
export function usePopover(props: AriaPopoverProps, state: OverlayTriggerState): PopoverAria;
interface PortalProviderProps {
    getContainer?: () => HTMLElement | null;
}
export function UNSTABLE_PortalProvider(props: PortalProviderProps & {
    children: ReactNode;
}): React.JSX.Element;
export function useUNSTABLE_PortalContext(): PortalProviderProps;
export interface OverlayProps {
    /**
     * The container element in which the overlay portal will be placed.
     * @default document.body
     */
    portalContainer?: Element;
    /** The overlay to render in the portal. */
    children: ReactNode;
    /**
     * Disables default focus management for the overlay, including containment and restoration.
     * This option should be used very carefully. When focus management is disabled, you must
     * implement focus containment and restoration to ensure the overlay is keyboard accessible.
     */
    disableFocusManagement?: boolean;
    /**
     * Whether the overlay is currently performing an exit animation. When true,
     * focus is allowed to move outside.
     */
    isExiting?: boolean;
}
/**
 * A container which renders an overlay such as a popover or modal in a portal,
 * and provides a focus scope for the child elements.
 */
export function Overlay(props: OverlayProps): React.ReactPortal;
/** @private */
export function useOverlayFocusContain(): void;
export interface AriaModalOverlayProps extends Pick<AriaOverlayProps, 'shouldCloseOnInteractOutside'> {
    /**
     * Whether to close the modal when the user interacts outside it.
     * @default false
     */
    isDismissable?: boolean;
    /**
     * Whether pressing the escape key to close the modal should be disabled.
     * @default false
     */
    isKeyboardDismissDisabled?: boolean;
}
export interface ModalOverlayAria {
    /** Props for the modal element. */
    modalProps: DOMAttributes;
    /** Props for the underlay element. */
    underlayProps: DOMAttributes;
}
/**
 * Provides the behavior and accessibility implementation for a modal component.
 * A modal is an overlay element which blocks interaction with elements outside it.
 */
export function useModalOverlay(props: AriaModalOverlayProps, state: OverlayTriggerState, ref: RefObject<HTMLElement>): ModalOverlayAria;
export type { Placement, PlacementAxis, PositionProps } from '@react-types/overlays';

//# sourceMappingURL=types.d.ts.map
