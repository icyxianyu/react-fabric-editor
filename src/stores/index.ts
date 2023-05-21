import React from 'react';
import FabricCanvas from './canvas';
const stores = React.createContext({
    c:new FabricCanvas()
});

export default stores;
