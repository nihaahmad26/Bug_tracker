import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {getBugs} from '../../../Controllers/Redux/bugsplice'
import Card from '../../Components/Dashboard/card'

export default()=>{
    const dispatch = useDispatch();
    const bugs = useSelector(state=>state.bugs);
    const browserHistory = useHistory();
    let highCount = 0
    let midCount = 0
    let lowCount = 0
    if(bugs != undefined){
        highCount = filterBugs(1);
        midCount = filterBugs(2);
        lowCount = filterBugs(3);
    }

    function filterBugs(priority){
        return bugs.filter((bug)=>{return bug.priority == priority})
    }

    function redirect(){
        browserHistory.push('/viewbugs')
    }

    useEffect(()=>{
        dispatch(getBugs())
    },[bugs == undefined])

    return(
        <div className="page-container">
            <Card Priority="1" count={highCount.length} clicked={redirect}/>
            <Card Priority="2" count={midCount.length} clicked={redirect}/>
            <Card Priority="3" count={lowCount.length} clicked={redirect}/>
        </div>
    )
}