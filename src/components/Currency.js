import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = (props) => {
    const { dispatch,remaining  } = useContext(AppContext);
    const [name, setCurrency] = useState('');
    

return (
<div>
<div className="input-group-prepend">
     <label className="input-group-text" htmlFor="inputGroupCurrency">Choose currency</label> 
</div>

<select className="custom-select alert-success" 
        id="inputCurrency" 
        defaultValue={"Pound"}
        //defaultValue={{ label: "Choose a currency: ", value: "Pound" }}
        onChange={(event) => setCurrency(event.target.value)}>
    <option value="Dollar" name="dollar"> $ Dollar</option>
    <option value="Pound"  name="pound"> £ Pound</option>
    <option value="Euro"   name="euro"> € Euro</option>
    <option value="Rupee"  name="rupee"> ₹ Rupee</option>
</select>
</div>
)
};

export default Currency;



