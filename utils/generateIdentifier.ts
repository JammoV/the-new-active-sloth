/**
 * Converts a string to a valid HTML id attribute value.
 * - Converts to lowercase
 * - Replaces spaces and special characters with hyphens
 * - Removes consecutive hyphens
 * - Removes leading and trailing hyphens
 *
 * @param text - The input text
 * @returns A string suitable for use as an HTML id attribute
 *
 * @example
 * generateIdentifier("Introduction to TypeScript!") // "introduction-to-typescript"
 * generateIdentifier("Why use React?") // "why-use-react"
 * generateIdentifier("Section 2.1: Getting Started") // "section-2-1-getting-started"
 */
export const generateIdentifier = (text: string): string => {
    return (
        text
            // Convert to lowercase
            .toLowerCase()
            // Replace spaces and special characters with hyphens
            .replace(/[^a-z0-9]+/g, '-')
            // Remove consecutive hyphens
            .replace(/-+/g, '-')
            // Remove leading and trailing hyphens
            .replace(/^-+|-+$/g, '')
    )
}
