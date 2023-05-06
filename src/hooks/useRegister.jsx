export const useRegister = ({ setNotification, registerMutation, navigate }) => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);
        let username = formData.get('username');
        let email = formData.get('email');
        let password = formData.get('password');
        let password2 = formData.get('confirmPassword');
        if (password !== password2)
            return setNotification({ show: true, message: "Passwords do not match", type: "error" });
        try {
            let { data } = await registerMutation({ variables: { username, email, password } });
            if (data) {
                setNotification({ show: true, message: "Account created successfully", type: "success" });
                navigate('/signin');
            }
        }
        catch (err) {   
            setNotification({ show: true, message: err.message, type: "error" });
        }
    }

    return { handleSubmit }
}