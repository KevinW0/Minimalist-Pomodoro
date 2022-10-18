import * as React from 'react';
import Grid from '@mui/material/Grid'
import ButtonComponent from './Button';
import Footer from './Footer';
import Timer from './Timer';


const BREAK_TIME = 5 * 60;
const WORK_TIME = 25 * 60;

const WORKSTATE = { state: "work", totalTime: WORK_TIME }
const BREAKSTATE = { state: "break", totalTime: BREAK_TIME }

const AppGrid = () => {
    const [breakOrWork, setBreakOrWork] = React.useState(WORKSTATE);
    const [timeLeft, setTimeLeft] = React.useState(WORK_TIME);
    const [paused, setPaused] = React.useState(0);
    const [timeoutID, setTimeoutID] = React.useState(0);



    React.useEffect(() => {
        if (timeLeft > 0 && !paused) {
            setTimeoutID(setTimeout(() => setTimeLeft(timeLeft - 1), 1000));

        }
    }, [timeLeft, paused])

    const toggleHandler = async (useString) => {
        const newState = breakOrWork.state === "work" ? BREAKSTATE : WORKSTATE;
        setPaused(1);
        useString == "toggle" ? (setBreakOrWork(newState), setTimeLeft(newState.totalTime)) : setTimeLeft(breakOrWork.state === "work" ? WORKSTATE.totalTime : BREAKSTATE.totalTime);

    }

    return (

        <div style={{ height: "110%", width: "100vw", backgroundColor: "#373e98" }}>
            <Grid container spacing={3} justifyContent="center" >
                <Grid item xs={12} >
                    <Timer timeLeft={timeLeft} currentProgress={(timeLeft / breakOrWork.totalTime) * 100} />
                </Grid>

                <Grid item xs={4}>
                    <ButtonComponent text={"Toggle Break/Work"} onClick={() => {
                        clearTimeout(timeoutID);
                        toggleHandler("toggle");
                    }} />
                </Grid>

                <Grid item xs={4}>
                    <ButtonComponent text={"Resume/Pause"} onClick={() => setPaused(paused ? 0 : 1)} />
                </Grid>

                <Grid item xs={4}>
                    <ButtonComponent text={"Reset"} onClick={() => {
                        clearTimeout(timeoutID)
                        toggleHandler("reset")
                    }} />
                </Grid>

                <Grid item xs={12}>
                    <Footer />
                </Grid>
            </Grid>
        </div>
    )
}

export default AppGrid;
