export const makenewuserdateobject = (selecteddate) => {
    const currentdate = new Date()
    const userselecteddatewithtime = new Date(selecteddate.getFullYear(), selecteddate.getMonth(), selecteddate.getDate(), currentdate.getHours(), currentdate.getMinutes(), currentdate.getSeconds())
    return userselecteddatewithtime
}

export const applycssonmindate = (userselecteddate) => {
    const date = new Date()
    const mindateelement = document.getElementsByClassName("react-calendar__tile--now")

    const userdate = `${userselecteddate.getFullYear()}${userselecteddate.getMonth()}${userselecteddate.getDate()}`

    const currentdate = `${date.getFullYear()}${date.getMonth()}${date.getDate()}`
    if (userdate === currentdate && mindateelement[0] !== undefined) {
        mindateelement[0].classList.add("mainstartdatebackground")
        return
    }
    if (userdate !== currentdate && mindateelement[0] !== undefined) {
        mindateelement[0].classList.remove("mainstartdatebackground")
        mindateelement[0].classList.add("bg-white", "text-dark", "hoverdatebackgroundcolor")
        return
    }
}