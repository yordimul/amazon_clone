import React from "react";
import classes from  "./headre.module.css";
import Lower from './../Headre/Lowerheader.jsx'
import { FaSearch } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
export default function Headre() {
	return (
		<>
			<section >
				<section className={classes.headre_cont}>
					<div >
                        <div className={classes.headre_logo}> 
						{/* logo */}
						<a href="">
							<img src="src\image\headerlogo.png" alt="" />
						</a>
                       
                        <div className={classes.delivery}>
						<span>
                        <CiLocationOn />
						</span>
						<div>
							<p>Deliver to</p>
							<span>Ethiopia</span>
						</div>
                        </div>
					</div>
                    </div>

					<div className={classes.search }>
						<select name="" id="" >
							<option value="">All</option>
						</select>
						<input type="text" placeholder="Select product" />
						{/* icon */}
						<FaSearch size={25} />
					</div>
					<div className={classes.order_cont}>
						<div>
                            <a href="" className={classes.langu} >
							<img src="src\image\USA.png" alt="" />
                            
							<select name="" id="">
								<option value="">EN</option>
							</select>
                            </a>
						</div>
						{/* sign in */}
                        
						<a href="">
							<div>
								<p>sign in</p>
								<span>Account & lists</span>
							</div>
						</a>
						{/* orders */}
						<a href="">
							<p>returns</p>
							<span>&orders</span>
						</a>
						<a href="#"className={classes.cart}> 
                        <CiShoppingCart size={35} />
							<span>0</span>
						</a>
					</div>
                    
				</section>
			</section>
			<Lower/>
		</>
	);
	
}
