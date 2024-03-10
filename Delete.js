import {Button } from "@mui/material";

function Delete() {
    function HandledDelete(event)
    {
        alert(document.getElementsByName ('un'))
    }

    return (

        <center>
        <form>
        <br></br>
        Username: <input type ="text" name="un"/> <br></br>
        password: <input type ="password" name="pw"/> <br></br>
        <Button onClick={HandledDelete}> Delete</Button>
        </form>

        </center>
         );
}
export default Delete ;