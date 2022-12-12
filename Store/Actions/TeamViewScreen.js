import * as actionTypes from '../Types/index';
import { getTeamData } from '../Services/index';

export const fetchTeamData = () => ( dispatch, getState  ) => {

const teamName = getState().user.userData.team 
dispatch({
    type: actionTypes.LOADING_TEAM_DATA,
}) 
    getTeamData(teamName)
    .then((data)=>{
      dispatch({
            type: actionTypes.TEAM_DATA_SUCESS_LOADING,
            teamData: data,
        }) 
    })
    .catch((err)=>{
        dispatch({
            type: actionTypes.TEAM_DATA_FAIL_LOADING,
            error:err,
        }) 
    })
}