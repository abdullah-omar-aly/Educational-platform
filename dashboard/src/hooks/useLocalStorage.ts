import {useState , useEffect} from 'react'

const useLocalStorage = (key: string , initialValue: any) => {
    
        const [value , setValue] = useState( JSON.parse(localStorage.getItem(key) as string) || initialValue)

        useEffect(() => {
            localStorage.setItem(key , JSON.stringify(value))
        } , [key , value])

        return [value , setValue]
}

export default useLocalStorage