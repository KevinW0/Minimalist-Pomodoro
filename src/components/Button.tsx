

import Button from '@mui/material/Button';





const ButtonComponent = ({ text, onClick }) =>
    <>
        <Button style={{ width: "100%" }} variant="contained" onClick={onClick}>{text} </Button>
    </>


export default ButtonComponent;
