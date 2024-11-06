import {useDispatch, useSelector} from "react-redux";
import {appendSymbol} from "./doorPasswordSlice.ts";
import {RootState} from "../../app/store.ts";


const DoorPassword = () => {
    const doorPasswordEnteredPassword = useSelector((state: RootState) => state.doorPassword.enteredPassword);
    const dispatch = useDispatch();

    return (

        <div>
            {doorPasswordEnteredPassword}
            <hr/>
            <button onClick={() => dispatch(appendSymbol(4))}>Add symbol</button>
        </div>
    );
};

export default DoorPassword;