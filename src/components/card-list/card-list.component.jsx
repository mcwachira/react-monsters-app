import React from 'react'

import Card from '../card/card.component'
import './card-list.styles.css'
const CardList = (props) => {

    return (
        <div className='card-list'>

            {/* accessing our state as prop and manipulating it */}
            {props.monsters.map((monster) => (
                <Card key={monster.id} monster={monster} />
            ))}
        </div>
    )
}

export default CardList