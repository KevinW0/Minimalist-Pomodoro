import ProgressBar from "./ProgressBar"
import styled from 'styled-components'



const StyledTimerH1 = styled.h1`
    font-size: 14em; 
    text-align: center;
    color:#f16775 ;

`


const returnFormattedTime = (timeLeft) => {
    const seconds = String(timeLeft % 60).padStart("2", "0");
    const minutes = String(Math.round((timeLeft - seconds) / 60)).padStart("2", "0");
    return `${minutes}:${seconds}`

}
const Timer = ({ timeLeft, currentProgress }) => {



    return (
        <>

            <StyledTimerH1>{returnFormattedTime(timeLeft)}</StyledTimerH1>
            <ProgressBar progress={currentProgress} />

        </>
    )
}

export default Timer;
