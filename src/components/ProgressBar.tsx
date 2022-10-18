import { LinearProgress } from "@mui/material";


interface ProgressProps {
    progress: number
}

const ProgressBar = ({ progress }: ProgressProps) =>
    <>
        <LinearProgress variant="determinate" value={progress} />
    </>


export default ProgressBar;
