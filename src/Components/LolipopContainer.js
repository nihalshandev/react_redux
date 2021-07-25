import React from 'react'
import { connect } from 'react-redux'
import { buyLolipop } from '../redux'

const LolipopContainer = (props) => {
    return (
        <div>
           <h1>Number of lolipop - {props.numOfLolipop} </h1>
           <button onClick={props.buyLolipop}>Buy Lolipop</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfLolipop: state.lolipop.numOfLolipop
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyLolipop: ()=> dispatch(buyLolipop())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LolipopContainer)
