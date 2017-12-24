import {Component} from "react"
import {Link} from "react-router-dom"

const base = 'menu'

export class MainMenu extends Component {
    render() {
        return (
            <div className={`${base}`}>
                <div>
                    <Link className={`${base}_link`} to='/checkbook'>Home</Link>
                    <Link className={`${base}_link`} to='/transaction'>Transaction</Link>
                </div>
            </div>
        )
    }
}