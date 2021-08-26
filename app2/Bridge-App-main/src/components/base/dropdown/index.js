import {useState, useRef} from 'react';

import './dropdown.scss';

const Dropdown = props => {

    const detailsRef = useRef(null);
    const inputRef = useRef(null);

    const [selected, setSelected] = useState({
        name: null,
        iconurl: null
    });

    const onClicked = e => {

        /* *~~*~~*~~*~~*~~*~~*~~ */
        const target = e.currentTarget;
        const name = target.dataset.name;
        const iconurl = target.dataset.iconurl;

        setSelected({
            name,
            iconurl
        });

        detailsRef.current.open = false;

        /* *~~*~~*~~*~~*~~*~~*~~ */
        const input = inputRef.current;
        input.value = name;
        props.formik.values[props.valueName] = input.value;
    }

    return(
        <details ref={detailsRef}>

            {/* hidden input data*/}
            <input className="is-hidden" name={props.name} type="text" ref={inputRef}/>

            {/* display dropdown data */}
            <summary className="pt-2 pl-3 has-input-background">
                <div className="is-flex is-flex-direction-row">
                    <figure className="image is-32x32" style={{transform: 'scale(0.8)', display: 'inline-block'}}>
                        <img src={selected.iconurl} alt=""/>
                    </figure>
                    <span className="ml-2" style={{display: 'inline-block'}}>{selected.name || ''}</span>
                </div>
            </summary>


            {/*  */}
            <ul className="scroll1">

                <li className="field no-hover" style={{position: 'sticky', top: '0', zIndex: '2'}}>
                    <div className="control has-icons-right">
                        <input className="input has-input-background2 has-text-white filter-input bordered" type="text" placeholder="Search" />
                        <span className="icon is-small is-right has-text-white">
                            <i className="fas fa-search"></i>
                        </span>
                    </div>
                </li>
                {
                    props.options.map( (op, i) =>
                        <li key={i} onClick={onClicked} data-name={op.name} data-iconurl={op.iconurl}>
                            <div className="columns is-mobile">
                                <div className="column is-2">
                                    {
                                        op.iconurl ?
                                        <figure className="image is-32x32">
                                            <img src={op.iconurl} alt=""/>
                                        </figure> : null
                                    }
                                </div>
                                <div className="column">
                                    {op.name}
                                </div>


                            </div>
                        </li>
                    )
                }

            </ul>
        </details>
    );
}

// props {
//     options : [],    //dropdown-options
//        name: string,   //dropdown inputName
// }

export default Dropdown
