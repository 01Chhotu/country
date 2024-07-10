const SearchTag =({setquary})=>{
    
    return(
        <div className="searchContiner">
            <input onChange={(e) => setquary(e.target.value.toLowerCase())} id="search" type="text" placeholder="search.."/>
            <i className="fa fa-search"></i>
        </div>
    )
}

export default SearchTag