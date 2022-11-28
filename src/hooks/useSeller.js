import { useEffect, useState } from "react"


const useSeller = email => {
    const [isSeller, setIsSeller] = useState(false);
    const [isSellerLoading, setIsSellerLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://coomercio-server-mohi14.vercel.app/users/seller/${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.isSeller) {
                        setIsSeller(data.isSeller)
                        setIsSellerLoading(false)
                    }
                })
        }
    }, [email])
    return [isSeller, isSellerLoading]
};

export default useSeller;