import { useCallback, useState } from 'react';

const useToggle = (initialState = false) => {
    const [state, setState] = useState(initialState);

    const handleToggleState = useCallback(() => {
        setState((prevState) => !prevState);
    }, []);

    return [state, handleToggleState, setState];
};

export default useToggle;
