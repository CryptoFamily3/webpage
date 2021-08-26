import './questionmark.scss';

const QuestionMarkHover = props => {

    return(
        <div className={props.className} style={{width: '100%', position: 'relative'}}>
            <span className="icon icon-hover">
                <i className="fas fa-question-circle"></i>
            </span>
            <div className="box tip-panel has-background-primary-half has-text-left is-size-5">
                {props.children}
            </div>
        </div>
    );
}

export default QuestionMarkHover;
