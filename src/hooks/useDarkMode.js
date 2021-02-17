import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = (initialValue) => {
    const [values, setValue] = useLocalStorage("darkMode", initialValue)

    const handleChange = e => {
        console.log("change event", e.target);
        setValue(
            !values
        );
    }
    
    return [values, handleChange]
}