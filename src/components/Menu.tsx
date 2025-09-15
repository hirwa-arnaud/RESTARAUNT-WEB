
function Menu () {
    return(
        <div className="menu">
            <div className="words"><h1>Menu</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla ipsa vel sed ullam beatae distinctio quas excepturi delectus accusamus, neque commodi magnam veniam quos perferendis mollitia eos maxime, voluptates nisi?</p>
            </div>
            <div className="btn">
                <button>Appetizers</button>
                 <button>Pasta</button>
                  <button>Pizza</button>
                   <button>Salads</button>
                    <button>Soups</button>
                    <button>Deserts</button>
            </div>
            <div className="card">
                <div className="box"><img src="noodles.png"/>
                <h3>Gnocchi with almonds</h3>
                <p>10,000 FRW</p>
                </div>
<div className="box"><img src="potato.png"/>
<h3>Lasagna</h3>
                <p>13,500 FRW</p>
</div>
<div className="box"><img src="rice.png"/>
<h3>Mini Spinach ravioli</h3>
                <p>8,000 FRW</p>
</div>
<div className="box"><img src="potato.png"/>
<h3>Carbonara spaghetti</h3>
                <p>5,000 FRW</p>
</div>
            </div>
        </div>
    )
}
export default Menu;