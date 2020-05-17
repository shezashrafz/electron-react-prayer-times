import React from 'react';
import { useTimesFetch} from './daily-salah-hook';

export const exportHooksHOC = (Componet) => {
    return (props) => {
        const times = useTimesFetch();
        return <Componet times={times} {...props}/>;
    };
};