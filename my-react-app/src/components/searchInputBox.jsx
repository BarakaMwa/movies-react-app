/**
 * Renders Search Box
 * @param props
 * */
function SearchInputBox(props) {


    return (
        <div className="row py-2 justify-content-center">
            <div className="col-12 col-lg-6  col-md-8">
                <div className="mbr-form form-with-styler">
                    <div className="dragArea row">
                        <div className="form-group col" data-for="email">
                            <input type="text" name="email" placeholder="Search" value={props.value}
                                   onChange={(event) => props.setSearch(event.target.value)}
                                   className="form-control display-7 form-control-custom" id="email-form3-a"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchInputBox;