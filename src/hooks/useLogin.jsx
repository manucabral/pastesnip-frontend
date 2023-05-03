export const useLogin = ({ notification, setNotification, loginMutation, navigate }) => {
    
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
            setNotification({ show: true, message: "Invalid email", type: "error" });
        if (password.length < 8)
            setNotification({ show: true, message: "Password must be at least 8 characters", type: "error" });
        if (notification.show === true) 
            setNotification({ show: false, message: "", type: "" });
        try{
            const response = await loginMutation({ variables: { email, password } });
            const { access, refresh } = response.data.loginUser;
            localStorage.setItem('access', access);
            localStorage.setItem('refresh', refresh);
            navigate('/');
        } catch (err) {
            setNotification({ show: true, message: 'Invalid credentials or user does not exist', type: "warning" });
        }
    }

    return {
        handleSubmit
    }
}