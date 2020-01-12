import { html, Component } from '../react.js'
import { StyleSheet, css } from '../aphrodite.js'
import { Link } from '../react-router-dom.js'
import Page from '../components/layout/cv.js'
import resolveAsset from '../utils/resolveAsset.js'

let Caputo = () => html `
    <${Page}
        title="Resume"
        subtitle="Marcos Caputo"
        description="An easy way to publish articles directly from Google Drive"
        sidebarImage=${resolveAsset('/assets/default-about.jpg')}
    >
        <div className=${css(styles.wrapper)}>
            <div className=${css(styles.sidebar_wrapper)}>
                <div className=${css(styles.sidebar_wrapper__profile_container)}>
                    <img className=${css(styles.sidebar_wrapper__avatar)} src=${resolveAsset('/assets/eu.jpg')} alt="profile picture" />
                    <h1 className=${css(styles.sidebar_wrapper__name)}>Marcos Caputo</h1>
                    <h3 className=${css(styles.sidebar_wrapper__tagline)}>Full Stack Developer</h3>
                </div>
            </div>
            <div className=${css(styles.main_wrapper)}>
                <section className=${css(styles.main_wrapper__section)}>
                    <h2 className=${css(styles.main_wrapper__section_title)}>
                        <span className="fa-stack fa-xs">
                        <i className="fas fa-circle fa-stack-2x"></i>
                        <i className="fas fa-user fa-stack-1x fa-inverse"></i>
                        </span>
                        Career Profile
                    </h2>
                    <div className="summary">
                        <p>Summarise your career here lorem ipsum dolor sit amet, consectetuer adipiscing elit. You can <a href="" className=${css(styles.a)}>download this free resume/CV template here</a>. Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu. Second paragraph if required.</p>
                    </div>
                </section>


                <section className=${css(styles.main_wrapper__section)} ${css(styles.main_wrapper__experiences_section)}>
                <h2 className=${css(styles.main_wrapper__section_title)}>
                <span className="fa-stack fa-xs">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fas fa-briefcase fa-stack-1x fa-inverse"></i>
                    </span>
                    Experiences
                </h2>
                <div className="item">
                    <div className="meta">
                        <div className="upper-row">
                            <h3 className="job-title">Lead Developer</h3>
                            <div className="time">2015 - Present</div>
                        </div>
                        <div className="company">Startup Hubs, San Francisco</div>
                    </div>
                    <div className="details">
                        <p>Describe your role here lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        <ul>
                            <li>Bullet point</li>
                            <li>Bullet point</li>
                        </ul>
                    </div>
                </div>
                <div className="item">
                    <div className="meta">
                        <div className="upper-row">
                            <h3 className="job-title">Senior Software Engineer</h3>
                            <div className="time">2014 - 2015</div>
                        </div>
                        <div className="company">Google, London</div>
                    </div>
                    <div className="details">
                        <p>Describe your role here lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
                        <ul>
                            <li>Bullet point</li>
                            <li>Bullet point</li>
                        </ul>
                    </div>
                </div>
                <div className="item">
                    <div className="meta">
                        <div className="upper-row">
                            <h3 className="job-title">UI Developer</h3>
                            <div className="time">2012 - 2014</div>
                        </div>
                        <div className="company">Amazon, London</div>
                    </div>
                    <div className="details">
                        <p>Describe your role here lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
                        <ul>
                            <li>Bullet point</li>
                            <li>Bullet point</li>
                        </ul>
                    </div>
                </div>
            </section>


            </div>
        </div>
        <footer className=${css(styles.footer)}>
            <div className="text-center">

                <${Link} to="/contact" className=${css(styles.contact)}>
                    Contact
                <//>
            </div>
        </footer>
    <//>
`

export default Caputo

let styles = StyleSheet.create({
    body: {
        fontFamily: "roboto,sans-serif",
        color: "#545e6c",
        background: "#f5f5f5",
        fontSize: "14px",
        padding: "30px",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale"
    },
    a: {
        color: "#2d7788",
        ':hover': {
            textDecoration: "underline",
            color: "#1a454f"
        },
        ':focus': {
            textDecoration: "none"
        },
    },
    wrapper: {
        background: "#42a8c0",
        maxWidth: "1000px",
        margin: "0 auto",
        position: "relative",
        WebkitBoxShadow: "0 2px 4px rgba(0,0,0,.1)",
        MozBoxShadow: "0 2px 4px rgba(0,0,0,.1)",
        boxShadow: "0 2px 4px rgba(0,0,0,.1)",
        sidebar: {
            background: "#42a8c0",
            position: "absolute",
            right: "0",
            width: "280px",
            height: "100%",
            minHeight: "800px",
            color: "#fff"
        },
    },
    sidebar_wrapper: {
        background: "#42a8c0",
        position: "absolute",
        right: "0",
        width: "280px",
        height: "100%",
        minHeight: "800px",
        color: "#fff"
    },
    sidebar_wrapper__profile_container: {
        padding: "30px",
        background: "rgba(0,0,0,.2)",
        textAlign: "center",
        color: "#fff"
    },
    sidebar_wrapper__avatar: {
        maxWidth: "100px",
        marginBottom: "15px",
        border: "0 solid #fff",
        borderRadius: "100%",
        boxShadow: "0 1px 1px rgba(0,0,0,.1)"
    },
    sidebar_wrapper__name: {
        fontSize: "32px",
        fontWeight: "900",
        marginTop: "0",
        marginBottom: "10px"
    },
    sidebar_wrapper__tagline: {
        color: "rgba(255,255,255,.6)",
        fontSize: "16px",
        fontWeight: "400",
        marginTop: "0",
        marginBottom: "0"
    },
    main_wrapper: {
        background: "#fff",
        padding: "60px",
        paddingRight: "340px"
    },
    main_wrapper__section: {
        marginBottom: "60px"
    },
    main_wrapper__experiences_section: {
        marginBottom: "30px"
    },
    main_wrapper__section_title: {
        textTransform: "uppercase",
        fontSize: "20px",
        fontWeight: "500",
        color: "#2d7788",
        position: "relative",
        marginTop: "0",
        marginBottom: "20px"
    },
    fas: {
        fontFamily: "'font awesome 5 free'",
        fontWeight: "900"
    },
    faCircle: {
        ":before": {
            content: '\f111'
        }
    },
    faUser: {
        ':before': {
            content: '\f007'
        }
    },
    faInverse: {
        color: '#fff'
    },
    faStack1x: {
        lineHeight: 'inherit'
    },
    faStack2x: {
        left: "0",
        position: "absolute",
        textAlign: "center",
        width: "100%"
    },
    faStack: {
        display: "inline-block",
        height: "2em",
        lineHeight: "2em",
        position: "relative",
        verticalAlign: "middle",
        width: "2em"
    },
    faXs: {
        fontSize: '.75em'
    },
    content: {
        display: 'block',
        fontFamily: 'roboto,sans-serif',
        color: '#545e6c',
        background: '#ffffff',
        fontSize: '14px',
        padding: '30px',
        webkitFontSmoothing: 'antialiased',
        mozOsxFontSmoothing: 'grayscale'
    },
    image: {
        borderRadius: '50%',
        width: '150px',
        border: 0,
        maxWidth: '100%',
        verticalAlign: 'middle',
        float: 'left',
        marginRight: '2rem'
    },
    info: {},
    title: {
        margin: '30px 0 20px',
        fontSize: '3.8rem',
        fontWeight: 700,
        lineHeight: '1.1',
        fontFamily: '"Source Sans Pro",Helvetica,Arial,sans-serif'
    },
    p: {
        fontSize: '2rem',
        margin: '0 0 10px',
        marginBottom: '30px'
    },
    footer: {
        padding: '10px 0',
        fontSize: '1.4rem',
        letterSpacing: '1px',
        fontWeight: 700,
        fontFamily: '"Source Sans Pro",Helvetica,Arial,sans-serif',
        textTransform: 'uppercase'
    },
    contact: {
        textDecoration: 'none',
        backgroundColor: 'transparent',
        color: '#999',
        borderBottom: 'none',
        fontSize: '1.4rem',
        ':hover': {
            textDecoration: 'none',
            backgroundColor: 'transparent',
            color: '#333',
            outline: 0,
            transition: 'all .4s',
            borderBottom: 'none'
        }
    }
})