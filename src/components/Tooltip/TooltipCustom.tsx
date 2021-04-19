import React from 'react'
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';

export type ITooltipCustom = {
    title: string
}

const Custom = withStyles(() => ({
    tooltip: {
      backgroundColor: 'rgba(14, 25, 27, 0.73)',
      border: '1px solid #4cffb3',
      width: '227px',
      height: '72px'
    },
  }))(Tooltip);

type ITitle = {
    text: string
} 

const Title: React.FC<ITitle> = ({text}) => {
    return (
        <div>
            <div></div>
            <span>{text}</span>
        </div>
    )
}  

const TooltipCustom: React.FC<ITooltipCustom> = ({title, children}) => {
    return (
        <Custom title={<Title text={title}/>} arrow>
          {children as React.ReactElement<any, any>}
        </Custom>
    )
}

export default TooltipCustom