export default function formatTitleString(string, maxNum) {
    const newString = string.split(' ')
    if (newString.length <= maxNum) return string

    const truncatedString = newString?.slice(0, maxNum).join(' ')
    return `${truncatedString}...`
}
