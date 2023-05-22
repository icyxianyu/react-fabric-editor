import { useEffect, useRef } from 'react'
import {fabric} from "fabric"
import { observer } from 'mobx-react-lite';
import useStores from '@/hooks/useStores';
import styled from 'styled-components';
import WorkSpace from '@/core/WorkSpace'
const OutBox = styled.div`
    width: 100%;
    height: 100%;
`
export default observer(function Fabric() {
    const {c} = useStores();
    const ref = useRef(null)
    useEffect(()=>{
        const canvas = new fabric.Canvas('canvas', {
            fireRightClick: true, // 启用右键，button的数字为3
            stopContextMenu: true, // 禁止默认右键菜单
            controlsAboveOverlay: true, // 超出clipPath后仍然展示控制条
        });
        c.setCanvas(canvas);
        const options = {
            width:400,
            height:800
        }
        new WorkSpace(canvas,options);
    },[c])

  return (
    <OutBox id='workspace' ref={ref}>
        <canvas id="canvas" />
    </OutBox>
  )
})
