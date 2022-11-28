import { useEffect, useState } from "react"

const useToken = email => {
    const [token, setToken] = useState('');
    useEffect(() => {
        if (email) {
            fetch(`https://coomercio-server-mohi14.vercel.app/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.coomercioToken) {
                        localStorage.setItem('coomercioToken', data.coomercioToken)
                        setToken(data.coomercioToken)
                    }
                })
        }
    }, [email]);
    return [token]
}

export default useToken;