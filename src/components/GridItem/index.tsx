import { GridItemType } from '../../types/GridItemType';
import B7Svg from '../../svgs/b7.svg'
import {items} from '../../data/items'
import * as C from './styles'

type Prop = {
    item: GridItemType,
    onClick:() => void
}

export const GridItem = ({ item, onClick }: Prop) => {
    return(
        <C.Container 
            showBackground={item.permanentShow || item.show}
            onClick={onClick}
        >
            {item.permanentShow === false && item.show === false &&
                <C.Icon src={B7Svg} opacity={.1}/>
            }
            {(item.permanentShow || item.show) && item.item !== null &&
                <C.Icon src={items[item.item].icon}/>
            }
        </C.Container>
    );
}