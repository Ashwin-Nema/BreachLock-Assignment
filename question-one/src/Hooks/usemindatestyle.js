import { useEffect } from "react"
import {applycssonmindate} from '../utils'

export const useMindatestyle = (userselecteddate, viewchange, detectchangeview) => {
    useEffect(() => {
        
        if (viewchange === true) {
            applycssonmindate(userselecteddate)
            detectchangeview(false)
        }
    }, [viewchange, detectchangeview, userselecteddate])

    useEffect(() => {
        applycssonmindate(userselecteddate)
    }, [userselecteddate])
    return
}