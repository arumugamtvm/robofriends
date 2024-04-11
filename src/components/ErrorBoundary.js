import React, { useState } from "react";

const ErrorBoundary = (props) => {
    const [hasError, setHasError] = useState(false)
    const caught = useDidCatch()

    useEffect(() => {
        const [error, info] = caught
        log({ error, info })
        setHasError(true)
    }, [caught])

    return hasError ? <h1>Oooops. That is not good</h1> : props.children

}

export default ErrorBoundary