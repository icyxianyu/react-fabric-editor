import { fabric } from 'fabric';
interface EditorWorkspace {
    width: number;
    height: number;
}

class WorkSpace {
    canvas: fabric.Canvas;
    workElement: HTMLElement;
    resizeObserver: ResizeObserver | null;
    options: EditorWorkspace;
  
    constructor(canvas: fabric.Canvas,  
                options: EditorWorkspace) {
      this.workElement = document.getElementById("workspace")??document.body;
      this.canvas = canvas;
      this.resizeObserver = null;
      this.options = options;
      
      this.initSpace();

      this.initCanvas();
    }
    //初始化整个canvas背景板
    initSpace() {
      this.setCanvasSize();
  
      this.resizeObserver = new ResizeObserver(this.handleResize);
      this.resizeObserver.observe(this.workElement);
    }
    //初始化画布
    initCanvas(){
        const {width,height} = this.options
        const workspace = new fabric.Rect({
            width, 
            height, 
            fill: 'white' 
          })
          workspace.set('selectable', false);
          workspace.set('hasControls', false);
          workspace.hoverCursor = 'selection';
          this.canvas.add(workspace)
    }

    setCanvasSize() {
      const { width, height } = this.workElement.getBoundingClientRect();
      this.canvas.setWidth(width);
      this.canvas.setHeight(height);
    }
  
    handleResize= () => {
      this.setCanvasSize();
    };
  
    destroy() {
      if (this.resizeObserver) {
        this.resizeObserver.disconnect();
      }
    }
  }
  
  export default WorkSpace;
  