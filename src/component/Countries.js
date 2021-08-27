import { Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { fetchCountries } from "../service/Api";
import NativeSelect from '@material-ui/core/NativeSelect';


const Countries = ({handleChanged})=>{

    const [countries,setCountries]=useState([])

    useEffect(()=>{

            const fetchApi=async()=>{
             setCountries(await fetchCountries());

            }
            fetchApi();


    },[])
    return(
        <>

            <Typography color='textSecondary' style={{padding:18,fontSize:21,color:'green'}}>CoronaVirus Cases Country-Wise</Typography>
            <NativeSelect onChange={(e)=>handleChanged(e.target.value)}  style={{backgroundColor:"green",color:'white',textAlign:"center",width:'300px'}}>
                <option style={{paddingLeft:10}}>Select Country</option>
                {
                   countries.map((country,i)=>{
                       return(
                        <option key={i} value={country} style={{backgroundColor:"green",color:'white',padding:'10px',textAlign:"center"}} >{country}</option>
                       )
                   }
                      


                   ) 
                }
            </NativeSelect>
        </>
       
    )





}
export default Countries;