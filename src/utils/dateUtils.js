/**
 * Format date string to Indonesian locale
 * @param {string} dateString - ISO date string
 * @param {Object} options - Intl.DateTimeFormat options
 * @returns {string} Formatted date string
 */

export const formatDate = (dateString, options = {}) => {
    if (!dateString) return ''

    const date = new Date(dateString)

    // Check if date is valid
    if (isNaN(date.getTime())) {
        console.warn('Invalid date string:', dateString)
        return dateString
    }

    const defaultOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }

    const formatOptions = { ...defaultOptions, ...options }

    return date.toLocaleDateString('id-ID', formatOptions)
}

/**
 * Format time in 24-hour format
 * @param {string} dateString - ISO date string
 * @returns {string} Formatted time in 24-hour format
 */
export const getTime24Hour = (dateString) => {
    if (!dateString) return ''

    const date = new Date(dateString)

    if (isNaN(date.getTime())) {
        console.warn('Invalid date string:', dateString)
        return ''
    }

    return date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })
}