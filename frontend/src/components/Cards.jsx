function Cards(props) {
    
    

    return(

<div className="flex px-3 py-3">
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"/>
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{props.product.name}</div>
            <p className="text-gray-700 text-base">
             {props.product.quantity}
            </p>
        </div>
        <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{props.product.price}</span>

        </div>
    </div>
</div>
    )
}

export default Cards