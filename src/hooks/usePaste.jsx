export const usePaste = ({ setNotification }) => {
    const handleSubmit = async (e, createPaste) => {
        e.preventDefault()
        const data = new FormData(e.target)
        const title = data.get('title')
        const privacy = data.get('public')
        const syntax = data.get('syntax')
        const content = data.get('content')
        if (content === '')
            return setNotification({
                show: true,
                message: 'Content is required',
                type: 'error',
            })
        if (content.length < 8)
            return setNotification({
                show: true,
                message: 'Content must be at least 8 characters',
                type: 'error',
            })
        if (title === '')
            return setNotification({
                show: true,
                message: 'Title is required',
                type: 'error',
            })
        try {
            const res = await createPaste({
                variables: {
                    title,
                    content,
                    syntax_highlight: syntax,
                    private: privacy === 'private' ? true : false,
                },
            })
            setNotification({
                show: true,
                message:
                    'Paste created successfully with id: ' +
                    res.data.createPaste.id,
                type: 'success',
            })
        } catch (err) {
            setNotification({
                show: true,
                message: 'Something went wrong',
                type: 'error',
            })
        }
    }
    return { handleSubmit }
}
