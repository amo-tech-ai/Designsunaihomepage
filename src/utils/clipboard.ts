/**
 * Safe clipboard utility with fallback methods
 * Handles clipboard API permission errors gracefully
 */

/**
 * Safely copies text to clipboard with fallback method
 * @param text - The text to copy
 * @returns Promise<boolean> - True if successful, false otherwise
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  // Try modern Clipboard API first
  if (navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (err) {
      // Clipboard API blocked, fall through to fallback
      console.warn('Clipboard API blocked, using fallback method');
    }
  }

  // Fallback method using execCommand (deprecated but more compatible)
  try {
    return fallbackCopyToClipboard(text);
  } catch (err) {
    console.error('Failed to copy to clipboard:', err);
    return false;
  }
}

/**
 * Fallback clipboard copy using deprecated execCommand
 * More compatible across browsers and doesn't require permissions
 */
function fallbackCopyToClipboard(text: string): boolean {
  // Create temporary textarea
  const textarea = document.createElement('textarea');
  textarea.value = text;
  
  // Make it invisible and non-interactive
  textarea.style.position = 'fixed';
  textarea.style.top = '0';
  textarea.style.left = '0';
  textarea.style.width = '2em';
  textarea.style.height = '2em';
  textarea.style.padding = '0';
  textarea.style.border = 'none';
  textarea.style.outline = 'none';
  textarea.style.boxShadow = 'none';
  textarea.style.background = 'transparent';
  textarea.style.opacity = '0';
  
  document.body.appendChild(textarea);
  
  // Select and copy
  textarea.focus();
  textarea.select();
  
  let success = false;
  try {
    success = document.execCommand('copy');
  } catch (err) {
    console.error('execCommand copy failed:', err);
  }
  
  // Clean up
  document.body.removeChild(textarea);
  
  return success;
}
