export const makenewuserdateobject = (selecteddate) => {
    const currentdate = new Date()
    const userselecteddatewithtime = new Date(selecteddate.getFullYear(), selecteddate.getMonth(), selecteddate.getDate(), currentdate.getHours(), currentdate.getMinutes(), currentdate.getSeconds())
    return userselecteddatewithtime
}