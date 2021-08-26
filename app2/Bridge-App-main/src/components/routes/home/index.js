import TransferCard from '../../cards/transferCard';


import './home.scss';

const Home = props => {
    return(
        <div>
            <section className="hero is-fullheight-with-navbar bg-img">




                <div className="hero-body">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-one-third is-offset-4" style={{minWidth: '500px'}}>
                                <TransferCard/>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
}

export default Home;
