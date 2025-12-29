import JobZImage from "../jobz-img";
import { NavLink } from "react-router-dom";
import { publicUser } from "../../../globals/route-names";

function AllDemoFloatingOptions(props) {
    return (
        <>
            <div className={"twm-all-demo-list-wrap " + (props.active ? 'active' : '')}>
                <div className="twm-all-demo-inner scrollbar-macosx">
                    <a
                        href="#"
                        className="all-demo-close"
                        onClick={props.onClick}
                    ></a>
                    <ul className="twm-all-demo-list">
                        <li><NavLink to={publicUser.HOME15}><JobZImage src="images/home-14/all-demo-pages/15.jpg" /></NavLink></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default AllDemoFloatingOptions;