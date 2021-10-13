import { useEffect } from "react"

export const useMindatestyle = (userselecteddate) => {
    useEffect(() => {
        const date = new Date()
        const mindateelement = document.getElementsByClassName("react-calendar__tile--now")
        const userdate = `${userselecteddate.getFullYear()}${userselecteddate.getMonth()}${userselecteddate.getDate()}`
        const currentdate = `${date.getFullYear()}${date.getMonth()}${date.getDate()}`
        if (userdate !== currentdate ){
            mindateelement[0].classList.add("bg-white", "text-dark", "hoverdatebackgroundcolor")
            return
        } 
    }, [userselecteddate])
    return
}