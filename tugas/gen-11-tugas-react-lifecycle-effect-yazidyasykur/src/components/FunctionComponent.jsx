
import React, { useEffect } from "react";

export default function FunctionComponent(props){

    useEffect(
        () => {
            console.log("Side Effect when value is updated")
        }
        ,[props.value])

    
        useEffect(
            () => {
                console.log("Side Effect when component rendered for the first time")

                return () => {console.log("Side Effect when component is dismounted")}
            }
        , [])

        useEffect(
            () => {
                console.log("Side Effect when any update is happening")
            }
        )

    return(
        <div>
        I am a function component with value = {props.value}
        </div>
    )
}