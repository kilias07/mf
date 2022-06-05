import {useEffect, useState} from "react";

export const StoreComponent = ({store, onClick, currentStore}) => {

    const [isSelected, setSelected] = useState(false);

    useEffect(() => {
        setSelected(currentStore?.objectID === store.object)
    }, [currentStore]);

    return (
        <article
            className={`${isSelected ? 'bg-gray-50 m-1 ring:border-gray-900 hover:bg-gray-200' : 'bg-white hover:bg-gray-50'} overflow-hidden shadow-lg rounded min-w-fit`}
            onClick={() => onClick(store)}
        >
            <div className="stroke-current">
                <div className="sm:p-6">
                    <h2 className="font-medium text-lg mb-1 ">{store.title}</h2>
                    <p className="font-normal text-sm leading-tight"> {store.address.cityName}, </p>
                    <p className="font-normal text-sm leading-tight">{store.address.postalCode}, </p>
                    <p className="font-normal text-sm leading-tight">{store.address.streetName}</p>
                </div>

                <div className='flex gap-2 my-2 flex-wrap'>

                </div>
            </div>

        </article>
    );
};

