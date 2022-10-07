import React from 'react'

const useRouter = () => {
    const push = (pathName: string) => {
        window.location.pathname = pathName;
    }
    return {
        push
    }
}

export default useRouter