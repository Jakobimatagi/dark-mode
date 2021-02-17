import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {

const [value, setStateValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
});

const setValue = (newValue) => {
    setStateValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue))
}

return [value, setValue]

}