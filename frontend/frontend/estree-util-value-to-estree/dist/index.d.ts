import { Expression } from 'estree';
export interface Options {
    /**
     * If true, treat objects that have a prototype as plain objects.
     */
    instanceAsObject?: boolean;
}
/**
 * Convert a value to an ESTree node
 *
 * @param value - The value to convert
 * @param options - Additional options to configure the output.
 * @returns The ESTree node.
 */
export declare function valueToEstree(value?: unknown, options?: Options): Expression;
