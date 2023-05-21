class WorkSpace{
    canvas: fabric.Canvas;
    workElement: HTMLElement;

    constructor(canvas:fabric.Canvas,workElement:HTMLElement|null){
        this.workElement = workElement??document.body;
        this.canvas = canvas;
        this.initSpace();
    }
    initSpace(){
        const {width,height} = this.workElement.getBoundingClientRect();
        this.canvas.setWidth(width);
        this.canvas.setHeight(height);
    }
}

export default WorkSpace;