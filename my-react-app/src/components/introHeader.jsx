function IntroHeader(prop) {
    return (

        <section className="header3 cid-t8Wz5pjAGp mbr-fullscreen mbr-parallax-background" id="header3-1">
            <div className="mbr-overlay mbr-overlay-one">
            </div>

            <div className="container">
                <div className="media-container-row">
                    <div className="mbr-figure mbr-figure-one">
                        <a href="#">
                            <img src="./assets/images/mbr.png" alt="Mobirise" title=""/></a>
                    </div>

                    <div className="media-content">
                        <h1 className="mbr-section-title mbr-white pb-3 mbr-fonts-style display-1"><strong>
                            {prop.title}</strong></h1>

                        <div className="mbr-section-text mbr-white pb-3 ">

                        </div>
                        <div className="mbr-section-btn">
                            <a className="btn btn-md btn-primary display-4"
                               href={"#"+prop.buttonId}>See Movies</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default IntroHeader;