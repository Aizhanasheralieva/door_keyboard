import {useDispatch, useSelector} from "react-redux";
import {appendSymbol, removeSymbol, verifyDoorPassword} from "./doorPasswordSlice.ts";
import {RootState} from "../../app/store.ts";


const DoorPassword = () => {
    const doorPasswordEnteredPassword = useSelector((state: RootState) => state.doorPassword.enteredPassword);
    const dispatch = useDispatch();

    const symbols = ['9', '8', '7', '6', '5', '4', '3', '2', '1',  '<', '0', 'E'];

    return (

        <div className="d-flex flex-column align-items-center justify-content-center">
            {doorPasswordEnteredPassword}
            <div></div>
            <hr/>
            <div className="row mb-4">
                {symbols.map((symbol) => (
                  <button className="m-2 w-25"  key={symbol} onClick={() => appendSymbol(symbol)}>{symbol}</button>
            ))}
            <button className="ms-2 mt-3 me-3 w-25" onClick={() => dispatch(appendSymbol('4'))}>Add symbol</button>
            <button className="mt-3 me-3 w-25" onClick={() => dispatch((removeSymbol()))}>Remove symbol</button>
            <button className="mt-3 me-3 w-25" onClick={() => dispatch((verifyDoorPassword()))} >Verify password</button>
            </div>
        </div>
    );
};

export default DoorPassword;