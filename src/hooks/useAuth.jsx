export const useAuth = ({ notification, setNotification, loginMutation, navigate }) => {
    
    const validateEmail = (email) => {
        if (!email) return false;
        return email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
    }     

    const handleSubmit = async (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);
        let email = formData.get('email');
        let password = formData.get('password');
        if (!validateEmail(email))
            return setNotification({ show: true, message: "Invalid email", type: "error" });
        if (password.length < 8)
            return setNotification({ show: true, message: "Password must be at least 8 characters", type: "error" });
        if (notification.show === true) 
            setNotification({ show: false, message: "", type: "" });
        try{
            const response = await loginMutation({ variables: { email, password } });
            setNotification({ show: true, message: "Login successful, redirecting...", type: "success" });
            setTimeout(() => {
                navigate('/dashboard');
                setNotification({ show: false, message: "", type: "" });
            }, 2000);
        } catch (err) {
            return setNotification({ show: true, message: 'Invalid credentials or user does not exist', type: "warning" });
        }
    }

    return {
        handleSubmit
    }
}