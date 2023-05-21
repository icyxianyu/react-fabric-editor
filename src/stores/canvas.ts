import { makeAutoObservable } from "mobx";

class FabricCanvas{
    canvas: any;
    
    constructor(){
        this.canvas = null;
        makeAutoObservable(this);
    }

    setCanvas(canvas: any){
        this.canvas = canvas;
    }
}
export default FabricCanvas;