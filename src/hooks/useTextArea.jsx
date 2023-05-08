export const useTextArea = ({ tabSpaces }) => {
    const handleKeyDown = (e) => {
        if (e.keyCode === 9) {
            e.preventDefault()
            // make a tab using tabSpaces (4)
            const start = e.target.selectionStart
            const end = e.target.selectionEnd
            const target = e.target
            const value = target.value
            target.value =
                value.substring(0, start) +
                ' '.repeat(tabSpaces) +
                value.substring(end)
            e.target.selectionStart = e.target.selectionEnd = start + tabSpaces
        }
    }
    return { handleKeyDown }
}
