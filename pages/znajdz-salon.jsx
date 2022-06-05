import {InstantSearch, Hits, Configure} from 'react-instantsearch-hooks-web';
import {searchClient} from "../lib/algolia";
import {StoreComponent} from "../components/StoreComponent/StoreComponent";


const findStore = () => {
    const index = searchClient.initIndex('store-locator');

    // index.search('query',{
    //     aroundLatLngViaIP: true,
    // }).then(( hits ) => {
    //     console.log(hits);
    // });

    return (
        <div className="flex w-full flex-col">
            <div className="w-4/12 w-full">Logo</div>

            <InstantSearch searchClient={searchClient} indexName="store-locator">
                <Configure aroundRadius={"50"}/>
                <div className="flex h-full bg-red-50">
                    <div className="flex flex-col w-4/12 bg-gray-50">
                <Hits hitComponent={({hit}) => (
                    <StoreComponent
                        store={hit}
                        currentStore={null}
                        onClick={()=>{}}/>)}
                />
                    </div>
                    <div className="flex flex-col w-full bg-green-50">
                        test2
                    </div>

                </div>
            </InstantSearch>
        </div>
    );
};

export default findStore;
