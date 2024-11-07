import {useDispatch, useSelector} from "react-redux";
import {appendSymbol, removeSymbol, resetDoorPassword, verifyDoorPassword} from "./doorPasswordSlice.ts";
import {RootState} from "../../app/store.ts";


const DoorPassword = () => {
    const doorPasswordEnteredPassword = useSelector((state: RootState) => state.doorPassword.enteredPassword);
    const isPasswordValid = useSelector((state: RootState) => state.doorPassword.isSuitablePassword);
    const dispatch = useDispatch();

    const symbols = ['9', '8', '7', '6', '5', '4', '3', '2', '1', '0'];

    const hidePasswordToStars = (password: string) => {
        const symbolFromUser = '*';
        let string = '';
        for (let i = 0; i < password.length; i++) {
            string += symbolFromUser;
        }
        return string;
    };

    const writeSomeInputStyle = () => {
        if (isPasswordValid === null) return {};
        return {
            border: isPasswordValid ? '1px solid green' : '2px solid red',
        };
    };

     const drawInputInformation = () => {
         if (isPasswordValid === null) {
             return hidePasswordToStars(doorPasswordEnteredPassword);
         } else {
             return isPasswordValid ? 'Access Granted' : 'Access Denied';
         }
     };

    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <div className="container-fluid d-flex align-items-center ">
                <input className="p-5 fw-bold w-75 text-center" type="text" value={drawInputInformation()} disabled style={writeSomeInputStyle()} />
            </div>
            <hr/>
            <div className="row mb-3">
                {symbols.map((symbol) => (
                  <button className="m-1 w-25"  key={symbol} onClick={() => dispatch(appendSymbol(symbol))}>{symbol}</button>
            ))}
            <button className="ms-1 mt-1 me-2 w-25" onClick={() => dispatch(appendSymbol('4'))}>Add</button>
            <button className="mt-1 me-1 w-25" onClick={() => dispatch((removeSymbol()))}>Remove</button>
            <button className="ms-1 mt-1 me-1 w-25" onClick={() => dispatch((verifyDoorPassword()))} >Verify</button>
            <button className="ms-1 mt-1 me-1 w-25" onClick={() => dispatch((resetDoorPassword()))}>Reset</button>
            </div>
            {/*<div>*/}
            {/*{isPasswordValid !== null && (*/}
            {/*    <div className={`row mb-3 fw-bold ${isPasswordValid ? 'text-success' : 'text-danger'}`}>*/}
            {/*        {isPasswordValid ? 'Access Granted' : 'Access Denied'}*/}
            {/*    </div>*/}
            {/*)}*/}
            {/*</div>*/}

        </div>
    );
};

export default DoorPassword;